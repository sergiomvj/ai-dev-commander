export type Agent = { id: string; name: string; role: string; status: string; heartbeat_at: string | null; };
export type Project = { id: string; owner: string; repo: string; default_branch: string; autonomy_mode: string; status: string; };
export type Task = { id: string; title: string; kind: string; priority: number; status: string; created_at: string; project_id: string; };
export type Event = { id: string; kind: string; message: string; created_at: string; data: any; };
