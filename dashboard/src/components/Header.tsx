
'use client';

import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();

    // Format pathname for display (e.g., "/projects/new" -> "Projects / New")
    const title = pathname === '/'
        ? 'Dashboard'
        : pathname.split('/').filter(Boolean).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' / ');

    return (
        <header className="h-16 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border-b border-slate-200 dark:border-white/10 px-8 flex items-center justify-between sticky top-0 z-30">

            {/* Left: Breadcrumbs / Title */}
            <div className="flex items-center gap-4">
                {/* Mobile menu trigger could go here */}
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {title}
                </h2>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-4">
                <div className="relative hidden md:block group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={16} />
                    <input
                        className="pl-9 pr-4 py-2 bg-slate-100 dark:bg-white/5 border border-transparent focus:border-primary/50 rounded-full text-xs font-medium focus:ring-2 focus:ring-primary/20 outline-none w-64 transition-all"
                        placeholder="Search..."
                        type="text"
                    />
                </div>

                <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-full transition-colors relative">
                    <Bell size={20} />
                    <span className="absolute top-2 right-2 size-2 bg-rose-500 rounded-full ring-2 ring-white dark:ring-slate-900"></span>
                </button>
            </div>

        </header>
    );
}
