"use client";
import Shell from "@/components/Shell";
import { useState } from "react";

const MOCK_REVIEWS = [
    { id: 1, task: "Fix Login Bug", worker: "OpenClaw Node 1", status: "pending", risk: "low", changed: 3 },
    { id: 2, task: "Update Homepage", worker: "OpenClaw Node 2", status: "approved", risk: "medium", changed: 12 },
    { id: 3, task: "Refactor Database", worker: "OpenClaw Node 1", status: "rejected", risk: "high", changed: 45 },
];

export default function ReviewsPage() {
    const [reviews] = useState(MOCK_REVIEWS);

    return (
        <Shell>
            <aside className="border-r border-zinc-800 p-4 space-y-2">
                <div className="text-lg font-semibold text-emerald-500">Reviews</div>
                <a className="text-sm hover:text-emerald-400 transition-colors" href="/">← Back</a>
            </aside>

            <main className="p-6">
                <h1 className="text-2xl font-bold mb-6">Code Reviews</h1>

                <div className="space-y-4">
                    {reviews.map(r => (
                        <div key={r.id} className="bg-zinc-900 border border-zinc-800 p-4 rounded flex items-center justify-between">
                            <div>
                                <div className="font-bold text-lg">{r.task}</div>
                                <div className="text-xs text-zinc-500">
                                    By <span className="text-zinc-300">{r.worker}</span> • {r.changed} files changed
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className={`text-xs px-2 py-1 rounded border ${r.risk === 'high' ? 'border-red-900 bg-red-950 text-red-500' :
                                        r.risk === 'medium' ? 'border-yellow-900 bg-yellow-950 text-yellow-500' :
                                            'border-emerald-900 bg-emerald-950 text-emerald-500'
                                    }`}>
                                    {r.risk.toUpperCase()} RISK
                                </div>
                                <div className={`px-3 py-1 rounded text-sm font-bold ${r.status === 'pending' ? 'bg-blue-600' :
                                        r.status === 'approved' ? 'bg-emerald-600' : 'bg-red-600'
                                    }`}>
                                    {r.status}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <section className="border-l border-zinc-800 p-4">
                <h2 className="font-semibold text-sm mb-2">Review Queue</h2>
                <div className="text-xs text-zinc-500">
                    Pending: 1<br />
                    Approved Today: 5
                </div>
            </section>
        </Shell>
    );
}
