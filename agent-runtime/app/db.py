from psycopg import connect
from psycopg.rows import dict_row

def db_conn(dsn: str):
    return connect(dsn, row_factory=dict_row)

def log_event(dsn: str, kind: str, message: str, project_id=None, agent_id=None, task_id=None, data=None):
    data = data or {}
    with db_conn(dsn) as con:
        con.execute(
            "insert into events (project_id, agent_id, task_id, kind, message, data) values (%s,%s,%s,%s,%s,%s)",
            (project_id, agent_id, task_id, kind, message, data),
        )

def heartbeat_agent(dsn: str, agent_id: str, status: str):
    with db_conn(dsn) as con:
        con.execute(
            "update agents set heartbeat_at=now(), status=%s where id=%s",
            (status, agent_id),
        )

def fetch_next_task(dsn: str):
    with db_conn(dsn) as con:
        row = con.execute("""
            select t.*, p.owner, p.repo, p.default_branch, p.autonomy_mode, p.policies
            from tasks t
            join projects p on p.id=t.project_id
            where t.status='queued'
            order by t.priority asc, t.created_at asc
            limit 1
        """).fetchone()
        return row

def mark_task_running(dsn: str, task_id: str, agent_id: str):
    with db_conn(dsn) as con:
        con.execute("""
            update tasks
               set status='running', started_at=now(), assigned_agent_id=%s
             where id=%s
        """, (agent_id, task_id))

def mark_task_done(dsn: str, task_id: str):
    with db_conn(dsn) as con:
        con.execute("""
            update tasks
               set status='done', finished_at=now()
             where id=%s
        """, (task_id,))

def mark_task_failed(dsn: str, task_id: str, error: str):
    with db_conn(dsn) as con:
        con.execute("""
            update tasks
               set status='failed', finished_at=now(), error=%s
             where id=%s
        """, (error, task_id))

def fetch_commands(dsn: str, limit: int = 20):
    with db_conn(dsn) as con:
        rows = con.execute("""
            select * from commands
             where status='queued'
             order by created_at asc
             limit %s
        """, (limit,)).fetchall()
        return rows

def mark_command_processed(dsn: str, cmd_id: str, ok: bool, error: str | None = None):
    with db_conn(dsn) as con:
        con.execute("""
            update commands
               set status=%s, processed_at=now(), payload = payload || jsonb_build_object('result_ok', %s, 'result_error', %s)
             where id=%s
        """, ('processed' if ok else 'failed', ok, error, cmd_id))
