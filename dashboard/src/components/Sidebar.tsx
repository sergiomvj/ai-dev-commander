
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    FolderOpen,
    CheckSquare,
    Bot,
    BarChart2,
    Settings,
    User,
    LogOut,
    Shield
} from 'lucide-react';

const navItems = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Projects', href: '/projects', icon: FolderOpen },
    { name: 'Tasks', href: '/tasks', icon: CheckSquare },
    { name: 'Agents', href: '/agents', icon: Bot },
    { name: 'Reports', href: '/reports', icon: BarChart2 },
    { name: 'Settings', href: '/settings', icon: Settings },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 h-screen fixed left-0 top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200 dark:border-white/10 flex flex-col transition-all">

            {/* Logo Area */}
            <div className="h-16 flex items-center gap-3 px-6 border-b border-slate-200 dark:border-white/10">
                <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
                    <Shield size={18} />
                </div>
                <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">Commander</span>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
                {navItems.map((item) => {
                    const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`
                flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm
                ${isActive
                                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'
                                }
              `}
                        >
                            <Icon size={18} />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            {/* User Info / Bottom Actions */}
            <div className="p-4 border-t border-slate-200 dark:border-white/10">
                <Link
                    href="/profile"
                    className={`
            flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm mb-1
            ${pathname === '/profile'
                            ? 'bg-white/10 text-slate-900 dark:text-white'
                            : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'
                        }
          `}
                >
                    <User size={18} />
                    Profile
                </Link>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10">
                    <LogOut size={18} />
                    Sign Out
                </button>
            </div>

            {/* Mini Profile Card */}
            <div className="mx-4 mb-6 p-3 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 flex items-center gap-3">
                <div className="relative">
                    <img className="size-10 rounded-full object-cover border border-slate-200 dark:border-white/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtVHFKOGjyeRE4BcJ0DkhzDX0eCxuxybJ2RYw1Zti2hcV862aI6GOmXxlO9WMW_5ruEepdjkim2WFA6hOMHBQtp-AzcpxFGjy4h5CORfe4UmVEHSpqJ47Rm-sVWjoPakf-46IGxgfIT9vJrudDiwKJmcEcaQqOXXvP2GOhdd8W4MSnpC0jv6TRSlSHawXHRV6uY-McTqNfTL07iQv-heuhg6wENd_GbKLEKTQ5dbyQWrBk2jJF1UEkK0d0N0DylBgeapd5--C1QYXL" alt="User" />
                    <div className="absolute bottom-0 right-0 size-2.5 bg-green-500 border-2 border-white dark:border-slate-800 rounded-full"></div>
                </div>
                <div className="overflow-hidden">
                    <p className="text-sm font-bold text-slate-900 dark:text-white truncate">Alex Commander</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">Lead Engineer</p>
                </div>
            </div>

        </aside>
    );
}
