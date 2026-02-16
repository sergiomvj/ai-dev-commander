import React from 'react';

export default function Shell({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
            <div className="grid grid-cols-[260px_1fr_360px] gap-0 min-h-screen">
                {children}
            </div>
        </div>
    );
}
