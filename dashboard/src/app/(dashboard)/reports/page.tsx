import React from 'react';
import {
    AlertTriangle,
    ArrowRight,
    CheckCircle2,
    MoreVertical,
    BrainCircuit,
    TrendingUp,
    Clock,
    Zap
} from 'lucide-react';

export default function DailyReports() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen font-display selection:bg-primary/30">

            {/* Navbar */}
            {/* Navbar removed (handled by DashboardLayout) */}

            <main className="max-w-5xl mx-auto px-6 py-12">

                {/* Header Section */}
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="h-px w-8 bg-accent-yellow"></span>
                            <span className="text-accent-yellow text-xs font-bold uppercase tracking-widest">System Status: Active</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-2 text-slate-900 dark:text-white">Daily Commander Report</h2>
                        <p className="text-slate-500 dark:text-white/60 text-lg">Monday, October 23, 2023 — Sprint Cycle 14</p>
                    </div>
                    <div className="flex items-center gap-4 bg-white dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm">
                        <div className="text-center px-4 border-r border-slate-200 dark:border-white/10">
                            <p className="text-[10px] uppercase text-slate-400 dark:text-white/40 font-bold mb-1">Health Score</p>
                            <p className="text-2xl font-bold text-emerald-500">92%</p>
                        </div>
                        <div className="text-center px-4">
                            <p className="text-[10px] uppercase text-slate-400 dark:text-white/40 font-bold mb-1">Open Blockers</p>
                            <p className="text-2xl font-bold text-rose-500">03</p>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="bg-white/50 dark:bg-slate-800/40 backdrop-blur-xl rounded-2xl p-1 shadow-2xl overflow-hidden mb-12 border border-slate-200 dark:border-white/10">
                    <div className="bg-white dark:bg-slate-900/40 p-8 space-y-12">

                        {/* Critical Delays Section */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <AlertTriangle className="text-rose-500" size={24} />
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Critical Delays</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                {/* Delay Card 1 */}
                                <div className="bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 p-5 rounded-xl group hover:border-rose-400 transition-all cursor-pointer">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <span className="text-[10px] font-bold text-rose-600 dark:text-rose-400 uppercase bg-rose-100 dark:bg-rose-500/20 px-2 py-0.5 rounded">High Overdue</span>
                                            <h4 className="text-lg font-bold mt-2 text-slate-900 dark:text-white">API Auth Refactor</h4>
                                            <p className="text-slate-500 dark:text-white/50 text-xs">Project: Core Services • ID: #ENG-442</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-2xl font-black text-rose-500">3d</p>
                                            <p className="text-[10px] font-bold text-slate-400 dark:text-white/40 uppercase">Overdue</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <img alt="Marcus" className="w-6 h-6 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdGPwevKB0JzienbKvvVk6m0C118dAmv54v4uOKGiUozQDjUS3wrWgLUTUPQmtJ4cgYgZLLq1cIfHUXUTnJSALaip05OnuklO54vhnbWJuifXcBieRfR42p6uZUet5SJ3RdhnrLOEvMpucgynvdBz0Bl7N69M1PY9mgpHS8CKwN8x4WfI8ht5PG81cMCOIUCHnHEdFQZ2HbrOzv-VUkSHDpOUramYzk68GCGzfjWZNegnEIVKxHvRHSi9trLVAxsUxoeWwpGJ1fH-m" />
                                            <span className="text-xs font-medium text-slate-600 dark:text-white/80">Marcus Chen</span>
                                        </div>
                                        <button className="text-xs font-bold text-rose-500 group-hover:underline flex items-center gap-1">
                                            Resolve Blocker <ArrowRight size={14} />
                                        </button>
                                    </div>
                                </div>

                                {/* Delay Card 2 */}
                                <div className="bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 p-5 rounded-xl group hover:border-rose-400 transition-all cursor-pointer">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <span className="text-[10px] font-bold text-rose-600 dark:text-rose-400 uppercase bg-rose-100 dark:bg-rose-500/20 px-2 py-0.5 rounded">Database Migration</span>
                                            <h4 className="text-lg font-bold mt-2 text-slate-900 dark:text-white">Postgres 15 Upgrade</h4>
                                            <p className="text-slate-500 dark:text-white/50 text-xs">Project: Infrastructure • ID: #OPS-109</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-2xl font-black text-rose-500">2d</p>
                                            <p className="text-[10px] font-bold text-slate-400 dark:text-white/40 uppercase">Overdue</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <img alt="Sarah" className="w-6 h-6 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxfpRMGCUaKzICylPSJTgqfUBUU2ML00ztKIx_mBA8daQLz1omFE-BtF63NZLwrzHJOTA4e5BCAcLGHYJtcBNSCmTh_DkO3RNsG995APWDyxTCxwm_zMPXw2h7kx7OhCr-cAKaNVK1sbIItzCN8DAZ3cGbNTyVcFU7_PbHi9SWmoCOWeWYlz1IlFEOPf4ySr9nga4WN-Gim3CFk_5GSo9T5QpbJU4b7qT_4v3ZGAhTRQf4MeJBz4J4a21vz-KrqE-OdWiFuSfiA3pL" />
                                            <span className="text-xs font-medium text-slate-600 dark:text-white/80">Sarah Jenkins</span>
                                        </div>
                                        <button className="text-xs font-bold text-rose-500 group-hover:underline flex items-center gap-1">
                                            Resolve Blocker <ArrowRight size={14} />
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </section>

                        {/* Pending Tasks Section */}
                        <section>
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="text-primary" size={24} />
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Pending for Today</h3>
                                </div>
                                <span className="text-xs font-bold text-slate-400 dark:text-white/40">12 TOTAL TASKS</span>
                            </div>
                            <div className="space-y-3">
                                {/* Task 1 */}
                                <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 p-4 rounded-xl flex items-center justify-between group hover:bg-slate-50 dark:hover:bg-white/10 transition-all shadow-sm">
                                    <div className="flex items-center gap-4">
                                        <div className="w-1 h-8 rounded-full bg-primary"></div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900 dark:text-white">Websocket Implementation for Live Logs</p>
                                            <p className="text-[10px] font-bold text-primary uppercase">High Priority</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="w-32 h-1.5 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                                            <div className="bg-primary h-full w-[65%]"></div>
                                        </div>
                                        <div className="flex -space-x-2">
                                            <img alt="User" className="w-6 h-6 rounded-full border-2 border-background-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_saKjOdkHxjRv4SDIDNEIMofVy07rG06t_UQxR6SPSYFDYJ2ud8VIRNK65Mnu008i-BTK2j5H31cl9D2N5rAkDE5G5TlooG8wfel8Rg0x1yZV4zXepA-D9jZcCkaVw9msNBFd5jHHMB4avHclP8xjOoaTPu8WF7vT2lSqKQOxom5GvOmlf8V848FEvVWvwids_56roz6sfhXJe_SFLRcNJxsE83wbLGl5tZ2mdqpaDkcWsXDlqivn5FD6e2XLkT7bCg897Lwc6sA4" />
                                            <img alt="User" className="w-6 h-6 rounded-full border-2 border-background-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiS-EeiaIwhsKT6bPmWcMmlAHaI-KmvMspFEJdyRVOJjmaY_Z7qQhmqLO5KtJ95NRJVi9CX1wB0QZwZuqcSXu5jmFjO0o6UtWmdet0T9h83YKEGxb73POgcYIBkihW_QxvoNc5aJUy02KukGniansycFsHN4ZXOHui-Mr_7iwn4n_kMnJLFaoNGyl8brNTZQ73Q_9mt8CMBXABazRrGfdrug6d4aVUlVrCvsw1vUdHFZTf-jq3YCVoq5DTWSBv54_AlAU-FLxD1TDp" />
                                        </div>
                                        <MoreVertical size={16} className="text-slate-400 dark:text-white/20 group-hover:text-slate-600 dark:group-hover:text-white transition-colors cursor-pointer" />
                                    </div>
                                </div>

                                {/* Task 2 */}
                                <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 p-4 rounded-xl flex items-center justify-between group hover:bg-slate-50 dark:hover:bg-white/10 transition-all shadow-sm">
                                    <div className="flex items-center gap-4">
                                        <div className="w-1 h-8 rounded-full bg-accent-yellow"></div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900 dark:text-white">Security Audit - Q4 Preparation</p>
                                            <p className="text-[10px] font-bold text-accent-yellow uppercase">Medium Priority</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="w-32 h-1.5 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                                            <div className="bg-accent-yellow h-full w-[40%]"></div>
                                        </div>
                                        <div className="flex -space-x-2">
                                            <img alt="User" className="w-6 h-6 rounded-full border-2 border-background-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB3-ig8EtpDm9A6TdWiI3nMHVMc16n5QtcPnrSFimjcSmR2GGZ1s4E7h4HDlLber474QlgtbV8GDhRlXH-iq5iRSWYsO98iIdfcj86z7H2v4G8qXXZocCK3Zwz8Yi9XojBFGPhH3kq4pmykcfu--HRBBmK5PlN9P7eHHSzk4iODea1tkKFmtbJjt3h6CtJ5G4aa22a2UFpvLuCw5ymF3W4y4h5eaUT8g7hicgS7vpdNVNMO1--NOwK43h2G9PXUo-WZJ83SvsqXsfl" />
                                        </div>
                                        <MoreVertical size={16} className="text-slate-400 dark:text-white/20 group-hover:text-slate-600 dark:group-hover:text-white transition-colors cursor-pointer" />
                                    </div>
                                </div>

                                {/* Task 3 */}
                                <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 p-4 rounded-xl flex items-center justify-between group hover:bg-slate-50 dark:hover:bg-white/10 transition-all shadow-sm">
                                    <div className="flex items-center gap-4">
                                        <div className="w-1 h-8 rounded-full bg-slate-300 dark:bg-white/20"></div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-500 dark:text-white/70">Update Technical Documentation - Module B</p>
                                            <p className="text-[10px] font-bold text-slate-300 dark:text-white/30 uppercase">Low Priority</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="w-32 h-1.5 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                                            <div className="bg-slate-300 dark:bg-white/30 h-full w-[15%]"></div>
                                        </div>
                                        <div className="flex -space-x-2">
                                            <img alt="User" className="w-6 h-6 rounded-full border-2 border-background-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdZmym15XaaknGs9E2VQb35fplLvEUkf3QQT-t_xm9Lx3OaWfzKGGkNXVToUEF3yY8iKEPiWAq1nxh8nn6fxzLDcpc5-yDMCHO9HFCJL42UkazSABR6DPhNIkyFMePJcyuwUn7GGsLWYThkWfqViO7HOwYIKiqNjlxVVG4QAL4E_bbjH6O71rF21K0g1QrGROezKYvMwWMXD65yB2P-qEfa0fAJvjwgzZ4UiFkQoUQa8spm8E_JuTSJ6M1W6H_D8Idwp-gtuyyKLAz" />
                                        </div>
                                        <MoreVertical size={16} className="text-slate-400 dark:text-white/20 group-hover:text-slate-600 dark:group-hover:text-white transition-colors cursor-pointer" />
                                    </div>
                                </div>

                            </div>
                        </section>

                        {/* Automated Summary */}
                        <section>
                            <div className="bg-amber-50 dark:bg-accent-yellow/5 border border-amber-100 dark:border-accent-yellow/15 rounded-2xl p-6 relative overflow-hidden">
                                <div className="absolute -right-12 -top-12 w-32 h-32 bg-accent-yellow/10 rounded-full blur-3xl"></div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-1.5 bg-amber-100 dark:bg-accent-yellow/20 rounded-lg">
                                        <BrainCircuit className="text-amber-600 dark:text-accent-yellow" size={20} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Automated Summary</h3>
                                </div>
                                <div className="space-y-4 relative z-10">
                                    <p className="text-lg font-medium text-slate-800 dark:text-white/90 leading-relaxed">
                                        &quot;The team is currently showing a <span className="text-emerald-500 font-bold">14% velocity increase</span> compared to the previous sprint. This is largely attributed to the API Authentication blockers currently assigned to Marcus. While today&apos;s planned tasks are well-distributed, the technical debt in the infrastructure layer requires immediate attention to prevent a cascade of delays in the next 48 hours.&quot;
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-amber-100 dark:bg-accent-yellow/10 text-amber-700 dark:text-accent-yellow text-xs font-bold rounded-lg uppercase tracking-wider">Velocity: Trending Up</span>
                                        <span className="px-3 py-1 bg-rose-100 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400 text-xs font-bold rounded-lg uppercase tracking-wider">Risk: High</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* AI Action Items */}
                        <section>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Recommended Actions</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                                <button className="glass-panel p-6 rounded-xl border border-slate-200 dark:border-white/10 text-left hover:border-primary/50 transition-all group shadow-sm bg-white/50 dark:bg-slate-800/50">
                                    <div className="size-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                                        <Zap size={20} />
                                    </div>
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Reallocate Resources</h4>
                                    <p className="text-xs text-slate-500 dark:text-white/50 leading-relaxed">Balance load to address critical bottlenecks in API Refactor.</p>
                                </button>

                                <button className="glass-panel p-6 rounded-xl border border-slate-200 dark:border-white/10 text-left hover:border-accent-yellow/50 transition-all group shadow-sm bg-white/50 dark:bg-slate-800/50">
                                    <div className="size-10 bg-accent-yellow/10 rounded-lg flex items-center justify-center text-accent-yellow mb-4 group-hover:scale-110 transition-transform">
                                        <Clock size={20} />
                                    </div>
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Schedule Standup</h4>
                                    <p className="text-xs text-slate-500 dark:text-white/50 leading-relaxed">Immediate sync required to address Tomorrow&apos;s Bottlenecks.</p>
                                </button>

                                <button className="glass-panel p-6 rounded-xl border border-slate-200 dark:border-white/10 text-left hover:border-rose-400/50 transition-all group shadow-sm bg-white/50 dark:bg-slate-800/50">
                                    <div className="size-10 bg-rose-500/10 rounded-lg flex items-center justify-center text-rose-500 mb-4 group-hover:scale-110 transition-transform">
                                        <TrendingUp size={20} />
                                    </div>
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Escalate Risks</h4>
                                    <p className="text-xs text-slate-500 dark:text-white/50 leading-relaxed">Notify stakeholders of potential 24h delay if Sarah isn&apos;t tagged by EOD.</p>
                                </button>

                            </div>
                        </section>

                        {/* Forecast Chart Placeholder */}
                        <section className="bg-slate-900 dark:bg-black rounded-xl p-8 text-center relative overflow-hidden group">
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#305EE8_1px,transparent_1px)] [background-size:16px_16px]"></div>
                            <div className="relative z-10">
                                <h3 className="text-lg font-bold text-white mb-2">Velocity Forecast</h3>
                                <p className="text-sm text-slate-400 mb-6">Predicted completion rate for current sprint based on historical data.</p>
                                <div className="h-48 flex items-end justify-center gap-2 opacity-80">
                                    <div className="w-8 bg-slate-700 rounded-t-lg h-[40%]"></div>
                                    <div className="w-8 bg-slate-700 rounded-t-lg h-[55%]"></div>
                                    <div className="w-8 bg-slate-700 rounded-t-lg h-[45%]"></div>
                                    <div className="w-8 bg-primary/60 rounded-t-lg h-[65%] animate-pulse"></div>
                                    <div className="w-8 bg-primary rounded-t-lg h-[85%] relative group-hover:scale-y-110 transition-transform origin-bottom">
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                            +14%
                                        </div>
                                    </div>
                                    <div className="w-8 bg-slate-800 rounded-t-lg h-[70%] text-white/10 border border-white/5 border-b-0 border-dashed"></div>
                                    <div className="w-8 bg-slate-800 rounded-t-lg h-[75%] text-white/10 border border-white/5 border-b-0 border-dashed"></div>
                                </div>
                                <p className="text-xs text-slate-500 mt-4">Automated projection indicates 98% probability of hitting milestones if critical path is cleared. Resource reallocation suggested shifting 20% effort to tomorrow&apos;s early shift.</p>
                            </div>
                        </section>

                        {/* Commander's Note */}
                        <section className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                            <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Commander&apos;s Strategy</h3>
                            <p className="text-sm text-slate-700 dark:text-slate-300 font-medium italic">
                                &quot;Focus on &apos;Force Multiplication&apos; tomorrow. Prioritize clearing Marcus&apos;s blockers before any new feature work begins. A 2-hour pair programming session at 0900 hrs will yield a 4x recovery in team velocity.&quot;
                            </p>
                            <div className="mt-4 flex items-center gap-3">
                                <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                                <span className="text-xs font-bold text-slate-500">AI-COMMANDER • AUTOMATED STRATEGY</span>
                            </div>
                        </section>

                    </div>
                </div>

                <footer className="mt-12 text-center">
                    <p className="text-slate-400 dark:text-white/20 text-xs font-medium uppercase tracking-[0.2em]">Generated by AI-Dev_Commander Oracle v4.2.0</p>
                </footer>

            </main>
        </div>
    );
}
