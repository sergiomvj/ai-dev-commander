
import React from 'react';

export default function TaskProgressMetrics() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 overflow-x-hidden relative flex min-h-screen w-full flex-col">
            {/* Top Navigation Bar */}
            {/* Header removed (handled by DashboardLayout) */}

            <main className="flex-1 px-6 lg:px-12 py-8 max-w-[1440px] mx-auto w-full">
                {/* Breadcrumbs and Header Action */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                            <a className="hover:text-primary transition-colors" href="#">Project Alpha</a>
                            <span className="material-symbols-outlined text-xs">chevron_right</span>
                            <span className="text-slate-900">Sprint 12 - Task Progress</span>
                        </div>
                        <h1 className="text-3xl font-bold text-slate-900">Engineering Metrics & Flow</h1>
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold hover:bg-slate-50">
                            <span className="material-symbols-outlined text-xl">ios_share</span> Export
                        </button>
                        <button className="flex items-center gap-2 px-5 py-2 bg-primary text-white rounded-lg text-sm font-semibold shadow-lg shadow-primary/20 hover:brightness-110">
                            <span className="material-symbols-outlined text-xl">add</span> Create Task
                        </button>
                    </div>
                </div>

                {/* Metrics Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    <div className="glass-card p-6 rounded-xl flex flex-col gap-3 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-4xl text-primary">schedule</span>
                        </div>
                        <p className="text-slate-500 text-sm font-medium">Cycle Time</p>
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-slate-900">3.2</span>
                            <span className="text-sm font-semibold text-slate-500">Days</span>
                        </div>
                        <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full w-fit text-xs font-bold">
                            <span className="material-symbols-outlined text-sm">trending_down</span> -12% vs last week
                        </div>
                    </div>
                    <div className="glass-card p-6 rounded-xl flex flex-col gap-3 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-4xl text-primary">analytics</span>
                        </div>
                        <p className="text-slate-500 text-sm font-medium">Completion Rate</p>
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-slate-900">84%</span>
                        </div>
                        <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full w-fit text-xs font-bold">
                            <span className="material-symbols-outlined text-sm">trending_up</span> +5% improvement
                        </div>
                        <div className="w-full bg-slate-100 h-1.5 rounded-full mt-1">
                            <div className="bg-primary h-full rounded-full w-[84%]"></div>
                        </div>
                    </div>
                    <div className="glass-card p-6 rounded-xl flex flex-col gap-3 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-4xl text-accent-yellow">bolt</span>
                        </div>
                        <p className="text-slate-500 text-sm font-medium">Team Velocity</p>
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-slate-900">52</span>
                            <span className="text-sm font-semibold text-slate-500">Pts / wk</span>
                        </div>
                        <div className="flex items-center gap-1 text-accent-yellow/80 bg-accent-yellow/10 px-2 py-0.5 rounded-full w-fit text-xs font-bold border border-accent-yellow/20">
                            <span className="material-symbols-outlined text-sm">balance</span> Stable
                        </div>
                    </div>
                    <div className="glass-card p-6 rounded-xl flex flex-col gap-3 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-4xl text-primary">query_stats</span>
                        </div>
                        <p className="text-slate-500 text-sm font-medium">Efficiency Score</p>
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-slate-900">92%</span>
                        </div>
                        <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full w-fit text-xs font-bold">
                            <span className="material-symbols-outlined text-sm">trending_up</span> Top 5% Team
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Task Progress List (2/3 width) */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                Active Task Tracking
                                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">14 Total</span>
                            </h2>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-slate-500">Filter by:</span>
                                <select className="text-sm border-none bg-transparent focus:ring-0 font-semibold cursor-pointer">
                                    <option>Highest Priority</option>
                                    <option>In Progress</option>
                                    <option>My Tasks</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            {/* Task Card: ADC-102 */}
                            <div className="glass-card p-5 rounded-xl border border-primary/10 hover:border-primary/30 transition-all group">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-accent-yellow/10 rounded-lg text-accent-yellow border border-accent-yellow/20">
                                            <span className="material-symbols-outlined">api</span>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-xs font-bold text-primary tracking-widest uppercase">ADC-102</span>
                                                <span className="text-xs px-2 py-0.5 bg-rose-50 text-rose-600 rounded-full font-bold">High</span>
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-800">Refactor Microservices Authentication Layer</h3>
                                            <div className="flex items-center gap-4 mt-2">
                                                <div className="flex items-center gap-1.5">
                                                    <div className="size-5 rounded-full bg-cover bg-center" data-alt="Avatar of Sarah Chen, Backend Dev" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCcZvFxiHno2Uw1hB-Q23F372jZrbu6kyxEQvdTdgy7oHV7A0Fi81n4GFGD3MK8i_QcCfylakDvvI49wwXSysxo0U9EzjV5LiXNod_I1DV0K4YWcx3QRp8ChloR2_iATD0HEjxYbKgadVMxxoKmCG6WgUmmJlchwq4-cIi2u918Ll_QKFgEsAphr_sRkNVUGU3RUf5n622h86Cak-WTBL4ynRz23f3wZZjAQy0dWpQ6uxKInsm4nqTZA2IzRz9qX-Op-DG8RCnBgvn7")' }}></div>
                                                    <span className="text-xs font-medium text-slate-500">Sarah Chen</span>
                                                </div>
                                                <div className="flex items-center gap-1.5 text-slate-400">
                                                    <span className="material-symbols-outlined text-sm">schedule</span>
                                                    <span className="text-xs">Est: 12h</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3 min-w-40">
                                        <div className="flex items-center justify-between text-xs font-bold text-slate-500 px-1">
                                            <span>STATUS</span>
                                            <span className="text-accent-yellow">IN PROGRESS</span>
                                        </div>
                                        <div className="grid grid-cols-3 h-9 bg-slate-100 p-1 rounded-lg">
                                            <button className="flex items-center justify-center text-[10px] font-bold text-slate-400 hover:text-slate-600 rounded">TO DO</button>
                                            <button className="flex items-center justify-center text-[10px] font-bold bg-white text-accent-yellow shadow-sm rounded">ACTIVE</button>
                                            <button className="flex items-center justify-center text-[10px] font-bold text-slate-400 hover:text-slate-600 rounded">DONE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Task Card: ADC-105 */}
                            <div className="glass-card p-5 rounded-xl border border-transparent hover:border-primary/30 transition-all">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-primary/10 rounded-lg text-primary border border-primary/20">
                                            <span className="material-symbols-outlined">palette</span>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-xs font-bold text-primary tracking-widest uppercase">ADC-105</span>
                                                <span className="text-xs px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full font-bold">Medium</span>
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-800">Implement UI Glassmorphism System</h3>
                                            <div className="flex items-center gap-4 mt-2">
                                                <div className="flex items-center gap-1.5">
                                                    <div className="size-5 rounded-full bg-cover bg-center" data-alt="Avatar of Alex Rivera, UI/UX Designer" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBV8NvjEmffPCQXGZ7FfxWUlZIU7HqaPlV0FRd-iXsB4Gw3oPaArq1FSHvZUhpbQWsdssazwnQ0Xkt2rxxVkrm9WCX1STE3ZtBa4UKSJN4fNWfdB2HlOt5eep94hGAELFADEvmcNhfFo--RgJPh8Wbg2vOGgPRwmTjPYjE83jcZMluR3qho5U84FtDSuMDtdCRjeMKOHgUwrRoPzs8U3zcd9vvOxi1gOXXOc6MKN-AzMu_9lQMc_2TQi0ASx6kWslkO7iWQ3yr5KWm4")' }}></div>
                                                    <span className="text-xs font-medium text-slate-500">Alex Rivera</span>
                                                </div>
                                                <div className="flex items-center gap-1.5 text-slate-400">
                                                    <span className="material-symbols-outlined text-sm">schedule</span>
                                                    <span className="text-xs">Est: 6h</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3 min-w-40">
                                        <div className="flex items-center justify-between text-xs font-bold text-slate-500 px-1">
                                            <span>STATUS</span>
                                            <span className="text-primary">DONE</span>
                                        </div>
                                        <div className="grid grid-cols-3 h-9 bg-slate-100 p-1 rounded-lg">
                                            <button className="flex items-center justify-center text-[10px] font-bold text-slate-400 hover:text-slate-600 rounded">TO DO</button>
                                            <button className="flex items-center justify-center text-[10px] font-bold text-slate-400 hover:text-slate-600 rounded">DOING</button>
                                            <button className="flex items-center justify-center text-[10px] font-bold bg-primary text-white shadow-sm rounded">DONE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Task Card: ADC-112 */}
                            <div className="glass-card p-5 rounded-xl border border-transparent hover:border-primary/30 transition-all">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-emerald-100/50 rounded-lg text-emerald-600 border border-emerald-200">
                                            <span className="material-symbols-outlined">database</span>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-xs font-bold text-primary tracking-widest uppercase">ADC-112</span>
                                                <span className="text-xs px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full font-bold">Low</span>
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-800">Database Indexing Optimization</h3>
                                            <div className="flex items-center gap-4 mt-2">
                                                <div className="flex items-center gap-1.5">
                                                    <div className="size-5 rounded-full bg-cover bg-center" data-alt="Avatar of Lena Park, Data Scientist" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD9m59qs-Z7G-NCKhZUPi5UTBf_8VyYK1dRet82H-_9SDk9507Y6045sxOufAZGtXx1MmeHJcb7gn0bT_uWsI7x5dx-OO2rVToFrpp1ChIFrWjFWuKTTAB8obMNRYbLYcvNewiZDEIUh8k2ZLV-gIcqYCeLa_djThVpq20hmPLoHfTF1BcWZRsHLeJrAxFYccN1F1SDTlcAlmOablCkW3duNcYIVY9B5xlT03DcR8U7O1PFp9zYgP1sMmRlYKpNPg9RvTf3a4o_fKtY")' }}></div>
                                                    <span className="text-xs font-medium text-slate-500">Lena Park</span>
                                                </div>
                                                <div className="flex items-center gap-1.5 text-slate-400">
                                                    <span className="material-symbols-outlined text-sm">schedule</span>
                                                    <span className="text-xs">Est: 4h</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3 min-w-40">
                                        <div className="flex items-center justify-between text-xs font-bold text-slate-500 px-1">
                                            <span>STATUS</span>
                                            <span className="text-slate-400">TO DO</span>
                                        </div>
                                        <div className="grid grid-cols-3 h-9 bg-slate-100 p-1 rounded-lg">
                                            <button className="flex items-center justify-center text-[10px] font-bold bg-white text-slate-600 shadow-sm rounded">READY</button>
                                            <button className="flex items-center justify-center text-[10px] font-bold text-slate-400 hover:text-slate-600 rounded">DOING</button>
                                            <button className="flex items-center justify-center text-[10px] font-bold text-slate-400 hover:text-slate-600 rounded">DONE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Metrics & Activity (1/3 width) */}
                    <div className="flex flex-col gap-8">
                        {/* Real-time Tracking Widget */}
                        <div className="glass-card p-6 rounded-xl border-l-4 border-accent-yellow relative overflow-hidden">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-yellow opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-yellow"></span>
                                    </span>
                                    <span className="text-xs font-bold text-accent-yellow tracking-widest uppercase">LIVE SESSION</span>
                                </div>
                                <span className="text-sm font-bold text-slate-900 font-mono">01:42:15</span>
                            </div>
                            <p className="text-sm font-medium text-slate-500 mb-1">Currently working on:</p>
                            <h4 className="text-base font-bold text-slate-900 mb-4 line-clamp-1">ADC-102: Refactor Microservices Authentication Layer</h4>
                            <div className="flex items-center gap-2">
                                <button className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-2 rounded-lg text-sm font-bold">
                                    <span className="material-symbols-outlined text-base">pause</span> Pause
                                </button>
                                <button className="px-3 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50">
                                    <span className="material-symbols-outlined text-base">stop</span>
                                </button>
                            </div>
                        </div>

                        {/* Recent Activity Feed */}
                        <div className="glass-card p-6 rounded-xl">
                            <h3 className="text-lg font-bold text-slate-900 mb-6">Flow Activity</h3>
                            <div className="flex flex-col gap-6 relative">
                                {/* Timeline line */}
                                <div className="absolute left-4 top-2 bottom-2 w-px bg-slate-100"></div>
                                {/* Item 1 */}
                                <div className="p-4 hover:bg-slate-50 transition-colors">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined text-base">check</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-slate-800"><span className="font-bold">Alex Rivera</span> moved <span className="font-semibold text-primary">ADC-105</span> to Done</p>
                                        </div>
                                        <span className="text-xs text-slate-400">2 min ago</span>
                                    </div>
                                </div>

                                <div className="p-4 hover:bg-slate-50 transition-colors">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-accent-yellow/10 flex items-center justify-center text-accent-yellow">
                                            <div className="w-2 h-2 bg-current rounded-full"></div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-slate-800"><span className="font-bold">Sarah Chen</span> started <span className="font-semibold text-accent-yellow">ADC-102</span></p>
                                        </div>
                                        <span className="text-xs text-slate-400">15 min ago</span>
                                    </div>
                                </div>

                                <div className="p-4 hover:bg-slate-50 transition-colors">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-accent-pink/10 flex items-center justify-center text-accent-pink">
                                            <div className="w-2 h-2 bg-current rounded-full"></div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-slate-800"><span className="font-bold">Team Bot</span> flagged <span className="font-semibold">PR-442</span> for review</p>
                                        </div>
                                        <span className="text-xs text-slate-400">1 hour ago</span>
                                    </div>
                                </div>

                                <div className="p-4 hover:bg-slate-50 transition-colors">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                                            <div className="w-2 h-2 bg-current rounded-full"></div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-slate-800"><span className="font-bold">Marcus V.</span> reported critical bug in Production</p>
                                        </div>
                                        <span className="text-xs text-slate-400">2 hours ago</span>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full mt-6 py-2 text-primary text-sm font-bold border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors">
                                View Audit Log
                            </button>
                        </div>

                        {/* Sprint Progress Circle */}
                        <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center">
                            <h3 className="text-lg font-bold text-slate-900 mb-6 w-full text-left">Sprint Completion</h3>
                            <div className="relative size-32 mb-4">
                                <svg className="size-full transform -rotate-90">
                                    <circle className="text-slate-100" cx="64" cy="64" fill="transparent" r="56" stroke="currentColor" strokeWidth="8"></circle>
                                    <circle className="text-primary" cx="64" cy="64" fill="transparent" r="56" stroke="currentColor" strokeDasharray="351.8" strokeDashoffset="105.5" strokeWidth="8"></circle>
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-2xl font-bold text-slate-900">70%</span>
                                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">DONE</span>
                                </div>
                            </div>
                            <div className="flex justify-between w-full mt-2">
                                <div className="flex flex-col">
                                    <span className="text-xl font-bold text-slate-800">124</span>
                                    <span className="text-xs text-slate-400 uppercase font-bold">Planned</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xl font-bold text-emerald-600">86</span>
                                    <span className="text-xs text-slate-400 uppercase font-bold">Completed</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xl font-bold text-rose-500">38</span>
                                    <span className="text-xs text-slate-400 uppercase font-bold">Pending</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background Elements for Glassmorphism Context */}
                <div className="fixed top-0 left-0 -z-10 w-full h-full overflow-hidden pointer-events-none opacity-40">
                    <div className="absolute top-[10%] left-[15%] size-96 bg-primary/20 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-[20%] right-[10%] size-[500px] bg-accent-yellow/10 rounded-full blur-[120px]"></div>
                </div>
            </main>
        </div>
    );
}
