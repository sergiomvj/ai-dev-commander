import Shell from "@/components/Shell";

export default function Home() {
    return (
        <Shell>
            <aside className="border-r border-zinc-800 p-4 space-y-2">
                <div className="text-lg font-semibold text-emerald-500">Dev Command Center</div>
                <nav className="space-y-2 text-sm">
                    <a className="block hover:text-emerald-400 transition-colors" href="/projects">Projects</a>
                    <a className="block hover:text-emerald-400 transition-colors" href="/tasks">Tasks</a>
                    <a className="block hover:text-emerald-400 transition-colors" href="/agents">Agents</a>
                    <a className="block hover:text-emerald-400 transition-colors" href="/prs">PRs</a>
                    <a className="block hover:text-emerald-400 transition-colors" href="/logs">Logs</a>
                </nav>
            </aside>

            <main className="p-6">
                <h1 className="text-2xl font-bold mb-2">Overview</h1>
                <p className="text-zinc-400 max-w-2xl">
                    Painel central de agentes autônomos 24/7, com memória persistente por projeto e auditoria completa.
                </p>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Placeholder for project cards */}
                    <div className="p-4 rounded border border-zinc-800 bg-zinc-900/50">
                        <div className="text-sm text-zinc-500 mb-1">Total Projects</div>
                        <div className="text-2xl font-mono">0</div>
                    </div>
                    <div className="p-4 rounded border border-zinc-800 bg-zinc-900/50">
                        <div className="text-sm text-zinc-500 mb-1">Active Agents</div>
                        <div className="text-2xl font-mono text-emerald-500">0</div>
                    </div>
                </div>
            </main>

            <section className="border-l border-zinc-800 p-4 bg-zinc-900/20">
                <h2 className="font-semibold text-sm mb-4">Live Events</h2>
                <div className="text-xs text-zinc-500 italic">
                    No active stream.
                </div>
            </section>
        </Shell>
    );
}
