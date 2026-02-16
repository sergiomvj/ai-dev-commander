import { useEffect, useRef } from "react";

interface TerminalProps {
    logs: Array<{
        timestamp: string;
        kind: string;
        message: string;
        metadata?: Record<string, any>;
    }>;
}

export default function Terminal({ logs }: TerminalProps) {
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [logs]);

    return (
        <div className="bg-black/90 border border-zinc-800 rounded-lg p-4 font-mono text-xs h-[600px] overflow-y-auto shadow-inner shadow-black/50">
            <div className="flex flex-col space-y-1">
                {logs.length === 0 && (
                    <div className="text-zinc-600 italic">No logs available...</div>
                )}
                {logs.map((log, i) => (
                    <div key={i} className="flex gap-2 hover:bg-zinc-900/50 p-0.5 rounded">
                        <span className="text-zinc-500 shrink-0">
                            {new Date(log.timestamp).toLocaleTimeString()}
                        </span>
                        <span
                            className={`shrink-0 w-20 text-right font-bold ${log.kind === "ERROR"
                                    ? "text-red-500"
                                    : log.kind === "WARN"
                                        ? "text-yellow-500"
                                        : log.kind === "SUCCESS"
                                            ? "text-emerald-500"
                                            : "text-blue-400"
                                }`}
                        >
                            [{log.kind}]
                        </span>
                        <span className="text-zinc-300 break-all">{log.message}</span>
                        {log.metadata && (
                            <span className="text-zinc-600 text-[10px]">{JSON.stringify(log.metadata)}</span>
                        )}
                    </div>
                ))}
                <div ref={bottomRef} />
            </div>
        </div>
    );
}
