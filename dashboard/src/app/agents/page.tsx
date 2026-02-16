"use client";
import Shell from "@/components/Shell";
import { useState } from "react";

// Mock data for MVP
const MOCK_AGENTS = [
    { id: "agent-1", name: "@manager", role: "Orchestrator", status: "idle", lastActive: "2 min ago" },
    { id: "agent-2", name: "@coder", role: "Implementation", status: "busy", lastActive: "Just now" },
    { id: "agent-3", name: "@qa", role: "Quality Assurance", status: "offline", lastActive: "1 hour ago" },
];

export default function AgentsPage() {
    const [agents, setAgents] = useState(MOCK_AGENTS);

    return (
        <Shell>
            <aside className="border-r border-zinc-800 p-4 space-y-2">
                <div className="text-lg font-semibold text-emerald-500">Agents</div>
                <a className="text-sm hover:text-emerald-400 transition-colors" href="/">← Back</a>
            </aside>

            <main className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Active Agents</h1>
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded text-sm transition-colors">
                        Deploy New Agent
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {agents.map((agent) => (
                        <div key={agent.id} className="bg-zinc-900 border border-zinc-800 p-4 rounded-lg flex justify-between items-center">
                            <div>
                                <div className="font-bold text-lg">{agent.name}</div>
                                <div className="text-zinc-500 text-sm">{agent.role}</div>
                            </div>
                            <div className="text-right">
                                <div className={`text-sm font-mono mb-1 ${agent.status === 'busy' ? 'text-yellow-500' :
                                        agent.status === 'idle' ? 'text-emerald-500' : 'text-zinc-500'
                                    }`}>
                                    ● {agent.status.toUpperCase()}
                                </div>
                                <div className="text-xs text-zinc-600">{agent.lastActive}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <section className="border-l border-zinc-800 p-4">
                <h2 className="font-semibold text-sm mb-2">Agent Details</h2>
                <div className="text-xs text-zinc-500">Select an agent to view detailed stats and memory.</div>
            </section>
        </Shell>
    );
}
