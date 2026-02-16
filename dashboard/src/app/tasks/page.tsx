"use client";
import Shell from "@/components/Shell";
import { useState } from "react";

const MOCK_TASKS = [
    { id: 1, title: "Refactor Auth Middleware", agent: "@coder", status: "running", priority: "HIGH" },
    { id: 2, title: "Update Documentation", agent: "@docs", status: "pending", priority: "LOW" },
    { id: 3, title: "Fix Build Error #404", agent: "@manager", status: "completed", priority: "CRITICAL" },
];

export default function TasksPage() {
    const [tasks] = useState(MOCK_TASKS);

    return (
        <Shell>
            <aside className="border-r border-zinc-800 p-4 space-y-2">
                <div className="text-lg font-semibold text-emerald-500">Tasks</div>
                <a className="text-sm hover:text-emerald-400 transition-colors" href="/">← Back</a>
            </aside>

            <main className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Task Queue</h1>
                    <button className="border border-zinc-700 hover:bg-zinc-800 text-zinc-300 px-4 py-2 rounded text-sm transition-colors">
                        + New Task
                    </button>
                </div>

                <div className="space-y-2">
                    {tasks.map((task) => (
                        <div key={task.id} className="bg-zinc-900/50 border border-zinc-800 p-3 rounded flex items-center gap-4 hover:border-zinc-700 transition-colors cursor-pointer">
                            <div className={`w-2 h-2 rounded-full ${task.status === 'running' ? 'bg-yellow-500 animate-pulse' :
                                    task.status === 'completed' ? 'bg-emerald-500' : 'bg-zinc-600'
                                }`} />
                            <div className="flex-1">
                                <div className="font-medium text-zinc-200">{task.title}</div>
                                <div className="text-xs text-zinc-500">Assigned to <span className="text-zinc-400">{task.agent}</span></div>
                            </div>
                            <div className={`text-[10px] font-bold px-2 py-0.5 rounded ${task.priority === 'CRITICAL' ? 'bg-red-900 text-red-200' :
                                    task.priority === 'HIGH' ? 'bg-orange-900 text-orange-200' :
                                        'bg-zinc-800 text-zinc-400'
                                }`}>
                                {task.priority}
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <section className="border-l border-zinc-800 p-4">
                <h2 className="font-semibold text-sm mb-2">Queue Stats</h2>
                <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-zinc-900 p-2 rounded">
                        <div className="text-zinc-500">Pending</div>
                        <div className="text-lg font-bold">12</div>
                    </div>
                    <div className="bg-zinc-900 p-2 rounded">
                        <div className="text-zinc-500">Avg Time</div>
                        <div className="text-lg font-bold">4m</div>
                    </div>
                </div>
            </section>
        </Shell>
    );
}
