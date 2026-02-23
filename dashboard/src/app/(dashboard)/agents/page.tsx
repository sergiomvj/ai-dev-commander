
import React from 'react';

export default function AgentEfficiencyMonitor() {
    return (
        <div className="flex h-screen overflow-hidden bg-background-light font-display text-slate-900">
            {/* Sidebar removed (handled by DashboardLayout) */}

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col overflow-y-auto">
                {/* Header */}
                {/* Header removed (handled by DashboardLayout) */}

                <div className="p-8 space-y-8">
                    {/* Action Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex gap-2">
                            <button className="glass-button-primary px-6 py-2.5 rounded-lg flex items-center gap-2 text-sm font-bold">
                                <span className="material-symbols-outlined text-lg">assessment</span>
                                Measure Efficiency
                            </button>
                            <button className="glass-button-accent px-6 py-2.5 rounded-lg flex items-center gap-2 text-sm font-bold shadow-sm">
                                <span className="material-symbols-outlined text-lg">summarize</span>
                                Generate Status Report
                            </button>
                        </div>
                        <div className="flex bg-slate-200/50 p-1 rounded-xl glass-card">
                            <button className="px-4 py-1.5 text-xs font-bold bg-white text-primary shadow-sm rounded-lg uppercase tracking-tight">Real-time</button>
                            <button className="px-4 py-1.5 text-xs font-bold text-slate-500 uppercase tracking-tight">Hourly</button>
                            <button className="px-4 py-1.5 text-xs font-bold text-slate-500 uppercase tracking-tight">Daily</button>
                        </div>
                    </div>

                    {/* Status Summary */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="glass-card p-6 rounded-xl border-l-4 border-l-primary relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-symbols-outlined text-6xl">check_circle</span>
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">On-track</h3>
                                <span className="text-primary bg-primary/10 px-2 py-0.5 rounded text-[10px] font-black tracking-tighter">72% TOTAL</span>
                            </div>
                            <p className="text-4xl font-black text-slate-900 leading-none">92 Agents</p>
                            <div className="mt-4 flex items-center gap-2 text-green-600 font-bold text-sm">
                                <span className="material-symbols-outlined text-sm">trending_up</span>
                                <span>+4.2% from peak</span>
                            </div>
                        </div>
                        <div className="glass-card p-6 rounded-xl border-l-4 border-l-accent-yellow relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-symbols-outlined text-6xl">pending</span>
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Delayed</h3>
                                <span className="text-accent-yellow bg-accent-yellow/10 px-2 py-0.5 rounded text-[10px] font-black tracking-tighter text-amber-600">18% TOTAL</span>
                            </div>
                            <p className="text-4xl font-black text-slate-900 leading-none">23 Agents</p>
                            <div className="mt-4 flex items-center gap-2 text-amber-600 font-bold text-sm">
                                <span className="material-symbols-outlined text-sm">warning</span>
                                <span>Critical block on Node-B</span>
                            </div>
                        </div>
                        <div className="glass-card p-6 rounded-xl border-l-4 border-l-indigo-500 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-symbols-outlined text-6xl">rocket_launch</span>
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Ahead</h3>
                                <span className="text-indigo-500 bg-indigo-500/10 px-2 py-0.5 rounded text-[10px] font-black tracking-tighter">10% TOTAL</span>
                            </div>
                            <p className="text-4xl font-black text-slate-900 leading-none">13 Agents</p>
                            <div className="mt-4 flex items-center gap-2 text-indigo-500 font-bold text-sm">
                                <span className="material-symbols-outlined text-sm">auto_awesome</span>
                                <span>Optimized 12 workflows</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Performance Quadrant */}
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                        {/* Performance Scoring Section */}
                        <div className="glass-panel p-8 rounded-2xl border border-slate-200">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">Performance Scoring</h3>
                                    <p className="text-sm text-slate-500">Core intelligence metrics weighted by impact</p>
                                </div>
                                <span className="bg-primary/5 text-primary p-2 rounded-lg">
                                    <span className="material-symbols-outlined">query_stats</span>
                                </span>
                            </div>
                            <div className="space-y-8">
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between font-bold text-sm">
                                        <span className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary">schedule</span>
                                            Punctuality
                                        </span>
                                        <span className="text-slate-900">98%</span>
                                    </div>
                                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary" style={{ width: "98%" }}></div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between font-bold text-sm">
                                        <span className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-indigo-500">psychology</span>
                                            Assertiveness
                                        </span>
                                        <span className="text-slate-900">85%</span>
                                    </div>
                                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-indigo-500" style={{ width: "85%" }}></div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between font-bold text-sm">
                                        <span className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-green-600">verified_user</span>
                                            Security Compliance
                                        </span>
                                        <span className="text-slate-900">100%</span>
                                    </div>
                                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-green-600" style={{ width: "100%" }}></div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between font-bold text-sm">
                                        <span className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-accent-yellow text-amber-500">school</span>
                                            Continuous Learning
                                        </span>
                                        <span className="text-slate-900">76%</span>
                                    </div>
                                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-accent-yellow" style={{ width: "76%" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Live Efficiency Stream */}
                        <div className="glass-panel rounded-2xl border border-slate-200 flex flex-col">
                            <div className="p-6 border-b border-slate-100">
                                <h3 className="text-lg font-bold text-slate-900">Live Agent Stream</h3>
                                <div className="mt-2 flex gap-4">
                                    <span className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                                        <span className="status-dot bg-primary"></span> On-track
                                    </span>
                                    <span className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                                        <span className="status-dot bg-accent-yellow"></span> Delayed
                                    </span>
                                    <span className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                                        <span className="status-dot bg-indigo-500"></span> Ahead
                                    </span>
                                </div>
                            </div>
                            <div className="flex-1 overflow-y-auto">
                                <table className="w-full text-left">
                                    <thead className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50/50 sticky top-0">
                                        <tr>
                                            <th className="px-6 py-3">Agent ID</th>
                                            <th className="px-6 py-3">Current Task</th>
                                            <th className="px-6 py-3">Efficiency</th>
                                            <th className="px-6 py-3 text-right">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 text-sm">
                                        <tr className="hover:bg-slate-50/50 transition-colors group">
                                            <td className="px-6 py-4 font-mono font-bold text-primary">AGENT_772</td>
                                            <td className="px-6 py-4 font-medium text-slate-600 truncate max-w-[150px]">Refactor Auth Middleware</td>
                                            <td className="px-6 py-4 font-bold">94.8%</td>
                                            <td className="px-6 py-4 text-right">
                                                <span className="px-2 py-1 rounded bg-primary/10 text-primary text-[10px] font-black">ON-TRACK</span>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-slate-50/50 transition-colors group">
                                            <td className="px-6 py-4 font-mono font-bold text-primary">AGENT_104</td>
                                            <td className="px-6 py-4 font-medium text-slate-600 truncate max-w-[150px]">Dependency Resolution</td>
                                            <td className="px-6 py-4 font-bold">62.1%</td>
                                            <td className="px-6 py-4 text-right">
                                                <span className="px-2 py-1 rounded bg-accent-yellow/10 text-amber-600 text-[10px] font-black">DELAYED</span>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-slate-50/50 transition-colors group">
                                            <td className="px-6 py-4 font-mono font-bold text-primary">AGENT_912</td>
                                            <td className="px-6 py-4 font-medium text-slate-600 truncate max-w-[150px]">Edge Case Documentation</td>
                                            <td className="px-6 py-4 font-bold">114.2%</td>
                                            <td className="px-6 py-4 text-right">
                                                <span className="px-2 py-1 rounded bg-indigo-500/10 text-indigo-500 text-[10px] font-black">AHEAD</span>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-slate-50/50 transition-colors group">
                                            <td className="px-6 py-4 font-mono font-bold text-primary">AGENT_431</td>
                                            <td className="px-6 py-4 font-medium text-slate-600 truncate max-w-[150px]">Unit Test Synthesis</td>
                                            <td className="px-6 py-4 font-bold">91.0%</td>
                                            <td className="px-6 py-4 text-right">
                                                <span className="px-2 py-1 rounded bg-primary/10 text-primary text-[10px] font-black">ON-TRACK</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* System Efficiency Graph Placeholder */}
                    <div className="glass-panel p-8 rounded-2xl border border-slate-200">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-bold text-slate-900">Global Efficiency Trends</h3>
                            <div className="flex gap-2">
                                <span className="size-3 bg-primary rounded-full"></span>
                                <span className="size-3 bg-slate-300 rounded-full"></span>
                                <span className="size-3 bg-slate-200 rounded-full"></span>
                            </div>
                        </div>
                        <div className="w-full h-48 flex items-end justify-between gap-2 px-2">
                            {/* Simplified bar chart representation */}
                            <div className="w-full bg-primary/20 hover:bg-primary transition-colors h-[40%] rounded-t-lg relative group cursor-pointer" title="08:00 AM">
                                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">82%</span>
                            </div>
                            <div className="w-full bg-primary/20 hover:bg-primary transition-colors h-[55%] rounded-t-lg relative group cursor-pointer" title="09:00 AM"></div>
                            <div className="w-full bg-primary/20 hover:bg-primary transition-colors h-[75%] rounded-t-lg relative group cursor-pointer" title="10:00 AM"></div>
                            <div className="w-full bg-primary/20 hover:bg-primary transition-colors h-[60%] rounded-t-lg relative group cursor-pointer" title="11:00 AM"></div>
                            <div className="w-full bg-primary/20 hover:bg-primary transition-colors h-[90%] rounded-t-lg relative group cursor-pointer" title="12:00 PM"></div>
                            <div className="w-full bg-primary/20 hover:bg-primary transition-colors h-[82%] rounded-t-lg relative group cursor-pointer" title="01:00 PM"></div>
                            <div className="w-full bg-primary/20 hover:bg-primary transition-colors h-[70%] rounded-t-lg relative group cursor-pointer" title="02:00 PM"></div>
                            <div className="w-full bg-primary/20 hover:bg-primary transition-colors h-[88%] rounded-t-lg relative group cursor-pointer" title="03:00 PM"></div>
                            <div className="w-full bg-primary/20 hover:bg-primary transition-colors h-[95%] rounded-t-lg relative group cursor-pointer" title="04:00 PM"></div>
                            <div className="w-full bg-primary/20 hover:bg-primary transition-colors h-[85%] rounded-t-lg relative group cursor-pointer" title="05:00 PM"></div>
                            <div className="w-full bg-primary/20 hover:bg-primary transition-colors h-[65%] rounded-t-lg relative group cursor-pointer" title="06:00 PM"></div>
                            <div className="w-full bg-primary/20 hover:bg-primary transition-colors h-[45%] rounded-t-lg relative group cursor-pointer" title="07:00 PM"></div>
                        </div>
                        <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2">
                            <span>08:00 AM</span>
                            <span>12:00 PM</span>
                            <span>04:00 PM</span>
                            <span>08:00 PM</span>
                        </div>
                    </div>
                </div>

                <footer className="p-8 mt-auto text-center border-t border-slate-200/50">
                    <p className="text-xs text-slate-400 font-medium">© 2024 AI-Dev Commander. FACEBRASIL Design Language v2.4. Premium Enterprise Edition.</p>
                </footer>
            </main>
        </div>
    );
}
