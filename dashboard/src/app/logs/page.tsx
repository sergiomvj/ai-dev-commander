"use client";
import Shell from "@/components/Shell";
import { useEffect, useMemo, useState } from "react";

export default function LogsPage() {
    const [events, setEvents] = useState<any[]>([]);

    useEffect(() => {
        // Mock connection for now - real implementation will connect to /api/stream
        // const es = new EventSource("/api/stream");
        // es.onmessage = (msg) => {
        //   const ev = JSON.parse(msg.data);
        //   setEvents((prev) => [...prev.slice(-500), ev]);
        // };
        // return () => es.close();
    }, []);

    const lines = useMemo(() => events.slice().reverse(), [events]);

    return (
        <Shell>
            <aside className="border-r border-zinc-800 p-4 space-y-2">
                <div className="text-lg font-semibold text-emerald-500">Logs</div>
                <a className="text-sm hover:text-emerald-400 transition-colors" href="/">← Back</a>
            </aside>

            <main className="p-4">
                <div className="font-semibold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Event Stream
                </div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 h-[85vh] overflow-auto text-xs font-mono">
                    {lines.length === 0 && (
                        <div className="text-zinc-600 p-2">Waiting for events...</div>
                    )}
                    {lines.map((e, i) => (
                        <div key={i} className="py-1 border-b border-zinc-800/50 hover:bg-zinc-800/20 transition-colors">
                            <div className="text-zinc-500 mb-0.5">
                                {new Date(e.created_at).toLocaleTimeString()} • <span className="text-emerald-400">{e.kind}</span>
                            </div>
                            <div className="text-zinc-300">{e.message}</div>
                        </div>
                    ))}
                </div>
            </main>

            <section className="border-l border-zinc-800 p-4">
                <div className="font-semibold text-sm">Controls (MVP)</div>
                <p className="text-xs text-zinc-500 mt-2">
                    Pause/Resume global controls coming soon.
                </p>
            </section>
        </Shell>
    );
}
