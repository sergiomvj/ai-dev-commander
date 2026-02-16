"use client";
import Shell from "@/components/Shell";
import { useState } from "react";

// Mock Data
const MOCK_WORKERS = [
    { id: "worker-1", name: "OpenClaw Node 1", url: "http://10.0.0.5:8080", status: "idle", capacity: 1, jobs_run: 42 },
    { id: "worker-2", name: "OpenClaw Node 2", url: "http://10.0.0.6:8080", status: "busy", capacity: 2, jobs_run: 15 },
    { id: "worker-3", name: "Legacy Worker", url: "http://10.0.0.9:8080", status: "offline", capacity: 1, jobs_run: 0 },
];

export default function WorkersPage() {
    const [workers] = useState(MOCK_WORKERS);

    return (
        <Shell>
            <aside className="border-r border-zinc-800 p-4 space-y-2">
                <div className="text-lg font-semibold text-emerald-500">Workers</div>
                <a className="text-sm hover:text-emerald-400 transition-colors" href="/">← Back</a>
            </aside>

            <main className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Worker Nodes</h1>
                    <div className="text-xs text-zinc-500">Total Capacity: 4</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {workers.map(w => (
                        <div key={w.id} className="bg-zinc-900 border border-zinc-800 p-4 rounded flex flex-col gap-2">
                            <div className="flex justify-between">
                                <div className="font-bold">{w.name}</div>
                                <div className={`text-xs px-2 py-0.5 rounded font-mono ${w.status === 'idle' ? 'bg-emerald-900 text-emerald-200' :
                                        w.status === 'busy' ? 'bg-yellow-900 text-yellow-200' : 'bg-red-900 text-red-200'
                                    }`}>
                                    {w.status.toUpperCase()}
                                </div>
                            </div>
                            <div className="text-xs text-zinc-500 font-mono truncate">{w.url}</div>
                            <div className="mt-2 pt-2 border-t border-zinc-800 text-xs flex justify-between">
                                <span>Jobs: {w.jobs_run}</span>
                                <span>Cap: {w.capacity}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <section className="border-l border-zinc-800 p-4">
                <h2 className="font-semibold text-sm mb-2">Registration</h2>
                <div className="text-xs text-zinc-500">
                    To add a worker, run the registration SQL script or use the Admin API.
                </div>
            </section>
        </Shell>
    );
}
