
import React from 'react';
import {
    Terminal,
    Search,
    Save,
    ChevronRight,
    Palette,
    Moon,
    Sun,
    Monitor,
    Shield,
    Globe,
    Bell,
    Key,
    Database,
    Cloud,
    Trash2,
    AlertTriangle,
    Download,
    LogOut,
    RefreshCw,
    Lock,
    CheckCircle2,
    BellRing,
    Rocket,
    ShieldAlert,
    Activity,
    Workflow,
    Github,
    CheckSquare,
    MessageSquare
} from 'lucide-react';

export default function SettingsPage() {
    return (
        <div className="font-display text-slate-900 dark:text-white min-h-screen bg-background-light dark:bg-background-dark selection:bg-primary/30">

            {/* Top Navigation Bar */}
            {/* Header removed (handled by DashboardLayout) */}

            <main className="max-w-[1200px] mx-auto w-full px-6 py-10">

                {/* Breadcrumbs & Title */}
                <div className="mb-10">
                    <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <a className="hover:text-primary" href="#">Settings</a>
                        <ChevronRight size={14} />
                        <span className="text-primary font-semibold">Global System Configuration</span>
                    </nav>
                    <h1 className="text-4xl font-black mb-2 text-slate-900 dark:text-white">Global System Configuration</h1>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl">Orchestrate your development ecosystem. Manage theme aesthetics, external provider hooks, and system-wide security notifications.</p>
                </div>

                <div className="grid grid-cols-12 gap-8">

                    {/* Left Column: Theme & Notifications */}
                    <div className="col-span-12 lg:col-span-8 flex flex-col gap-8">

                        {/* Theme Selection Panel */}
                        <section className="bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-6 rounded-xl">
                            <div className="flex items-center gap-3 mb-6">
                                <Palette className="text-primary" size={24} />
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Theme Selection</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                {/* Light Theme Option */}
                                <div className="relative group cursor-pointer ring-2 ring-primary bg-white/80 dark:bg-background-dark/80 p-4 rounded-xl transition-all shadow-sm">
                                    <div className="aspect-video rounded-lg mb-4 overflow-hidden border border-primary/20 bg-gradient-to-br from-white to-blue-50 relative">
                                        <div className="absolute inset-0 flex items-center justify-center opacity-40">
                                            <Sun size={64} className="text-primary" />
                                        </div>
                                        <div className="absolute bottom-2 left-2 right-2 h-4 bg-primary/10 rounded"></div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white">Light Architecture</p>
                                            <p className="text-xs text-gray-500">Soft blue glassmorphism</p>
                                        </div>
                                        <CheckCircle2 className="text-primary" size={24} />
                                    </div>
                                </div>

                                {/* Dark Theme Option */}
                                <div className="relative group cursor-pointer hover:bg-white/60 dark:hover:bg-white/10 p-4 rounded-xl border border-slate-200 dark:border-white/10 transition-all">
                                    <div className="aspect-video rounded-lg mb-4 overflow-hidden bg-slate-900 border border-slate-200 dark:border-white/10 relative">
                                        <div className="absolute inset-0 flex items-center justify-center opacity-40">
                                            <Moon size={64} className="text-primary/40" />
                                        </div>
                                        <div className="absolute bottom-2 left-2 right-2 h-4 bg-white/5 rounded"></div>
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-400 group-hover:text-slate-900 dark:group-hover:text-gray-100 transition-colors">Deep Void</p>
                                        <p className="text-xs text-gray-500">Sophisticated dark interface</p>
                                    </div>
                                </div>

                            </div>
                        </section>

                        {/* Notification Toggles */}
                        <section className="bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-6 rounded-xl">
                            <div className="flex items-center gap-3 mb-6">
                                <BellRing className="text-primary" size={24} />
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Notification Preferences</h2>
                            </div>
                            <div className="space-y-4">

                                <div className="flex items-center justify-between p-4 bg-white/30 dark:bg-white/5 rounded-lg border border-slate-200 dark:border-white/10">
                                    <div className="flex items-center gap-4">
                                        <Rocket className="text-gray-400" size={24} />
                                        <div>
                                            <p className="font-semibold text-sm text-slate-900 dark:text-white">Deployment Success Alerts</p>
                                            <p className="text-xs text-gray-500">Notify when production builds are verified</p>
                                        </div>
                                    </div>
                                    <div className="w-12 h-6 bg-primary rounded-full relative p-1 cursor-pointer">
                                        <div className="size-4 bg-white rounded-full ml-auto shadow-sm"></div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-white/30 dark:bg-white/5 rounded-lg border border-slate-200 dark:border-white/10">
                                    <div className="flex items-center gap-4">
                                        <ShieldAlert className="text-gray-400" size={24} />
                                        <div>
                                            <p className="font-semibold text-sm text-slate-900 dark:text-white">Vulnerability Reports</p>
                                            <p className="text-xs text-gray-500">Critical security scanning alerts</p>
                                        </div>
                                    </div>
                                    <div className="w-12 h-6 bg-primary rounded-full relative p-1 cursor-pointer">
                                        <div className="size-4 bg-white rounded-full ml-auto shadow-sm"></div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-white/30 dark:bg-white/5 rounded-lg border border-slate-200 dark:border-white/10">
                                    <div className="flex items-center gap-4">
                                        <Activity className="text-gray-400" size={24} />
                                        <div>
                                            <p className="font-semibold text-sm text-slate-900 dark:text-white">System Health Monitor</p>
                                            <p className="text-xs text-gray-500">Infrastructure uptime and node health</p>
                                        </div>
                                    </div>
                                    <div className="w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full relative p-1 cursor-pointer">
                                        <div className="size-4 bg-white rounded-full shadow-sm"></div>
                                    </div>
                                </div>

                            </div>
                        </section>

                    </div>

                    {/* Right Column: Integrations & Export */}
                    <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">

                        {/* Integrations Panel */}
                        <section className="bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-6 rounded-xl h-full">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <Workflow className="text-primary" size={24} />
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">Integrations</h2>
                                </div>
                                <button className="text-primary text-xs font-bold uppercase tracking-wider hover:text-primary/80">Add New</button>
                            </div>
                            <div className="flex flex-col gap-3">

                                {/* GitHub */}
                                <div className="p-4 rounded-lg bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/20 flex flex-col gap-3 shadow-sm">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="size-8 rounded bg-black flex items-center justify-center text-white">
                                                <Github size={20} />
                                            </div>
                                            <p className="font-bold text-sm text-slate-900 dark:text-white">GitHub</p>
                                        </div>
                                        <span className="text-[10px] bg-emerald-500/10 text-emerald-500 px-2 py-1 rounded-full border border-emerald-500/20 font-bold uppercase">Connected</span>
                                    </div>
                                    <button className="w-full py-2 bg-primary/10 hover:bg-primary/20 text-primary text-xs font-bold rounded transition-all">Configure Repos</button>
                                </div>

                                {/* Jira */}
                                <div className="p-4 rounded-lg bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/20 flex flex-col gap-3 shadow-sm">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="size-8 rounded bg-blue-600 flex items-center justify-center text-white">
                                                <CheckSquare size={20} />
                                            </div>
                                            <p className="font-bold text-sm text-slate-900 dark:text-white">Jira Software</p>
                                        </div>
                                        <span className="text-[10px] bg-emerald-500/10 text-emerald-500 px-2 py-1 rounded-full border border-emerald-500/20 font-bold uppercase">Connected</span>
                                    </div>
                                    <button className="w-full py-2 bg-primary/10 hover:bg-primary/20 text-primary text-xs font-bold rounded transition-all">Manage Boards</button>
                                </div>

                                {/* Slack */}
                                <div className="p-4 rounded-lg bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/20 flex flex-col gap-3 shadow-sm">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="size-8 rounded bg-purple-700 flex items-center justify-center text-white">
                                                <MessageSquare size={20} />
                                            </div>
                                            <p className="font-bold text-sm text-slate-900 dark:text-white">Slack</p>
                                        </div>
                                        <span className="text-[10px] bg-accent-yellow/10 text-accent-yellow px-2 py-1 rounded-full border border-accent-yellow/20 font-bold uppercase">Action Required</span>
                                    </div>
                                    <button className="w-full py-2 bg-accent-yellow hover:bg-accent-yellow/90 text-black text-xs font-bold rounded transition-all">Reconnect Workspace</button>
                                </div>

                            </div>
                        </section>

                        {/* Data Export Section */}
                        <section className="bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-6 rounded-xl">
                            <div className="flex items-center gap-3 mb-4">
                                <Database className="text-primary" size={24} />
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Data & Privacy</h2>
                            </div>
                            <p className="text-xs text-gray-500 mb-4">Export all configuration logs and user access history in machine-readable formats.</p>
                            <div className="grid grid-cols-3 gap-2 mb-6">
                                <button className="p-2 border border-slate-200 dark:border-white/20 rounded text-[10px] font-bold bg-white/40 hover:bg-white/60 dark:bg-white/5 dark:hover:bg-white/10 transition-colors text-slate-700 dark:text-slate-300">JSON</button>
                                <button className="p-2 border border-slate-200 dark:border-white/20 rounded text-[10px] font-bold bg-white/40 hover:bg-white/60 dark:bg-white/5 dark:hover:bg-white/10 transition-colors text-slate-700 dark:text-slate-300">CSV</button>
                                <button className="p-2 border border-slate-200 dark:border-white/20 rounded text-[10px] font-bold bg-white/40 hover:bg-white/60 dark:bg-white/5 dark:hover:bg-white/10 transition-colors text-slate-700 dark:text-slate-300">PDF</button>
                            </div>
                            <button className="w-full py-3 bg-white/80 dark:bg-white/10 text-primary dark:text-white border border-primary/30 rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all shadow-sm">
                                <Download size={16} /> Trigger Data Export
                            </button>
                        </section>

                    </div>
                </div>

                {/* Danger Zone */}
                <div className="mt-12 border-t border-rose-500/20 pt-8">
                    <div className="flex items-start gap-6 bg-rose-500/5 backdrop-blur-xl border border-rose-500/30 p-8 rounded-xl">
                        <div className="p-4 bg-rose-500/20 text-rose-500 rounded-full">
                            <AlertTriangle size={36} />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-rose-500 mb-1">Critical Operations</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-xl">Purging system logs or resetting the global configuration will affect all connected instances and cannot be undone. Handle with extreme caution.</p>
                            <div className="flex gap-4">
                                <button className="px-6 py-2 border border-rose-500 text-rose-500 rounded-full text-sm font-bold hover:bg-rose-500 hover:text-white transition-all flex items-center gap-2">
                                    <RefreshCw size={16} /> Hard Reset Configuration
                                </button>
                                <button className="px-6 py-2 bg-rose-500 text-white rounded-full text-sm font-bold hover:bg-rose-600 shadow-lg shadow-rose-500/20 transition-all flex items-center gap-2">
                                    <Trash2 size={16} /> Purge All Logs
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Stats */}
                <footer className="mt-20 border-t border-slate-200 dark:border-white/10 px-6 py-8">
                    <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 opacity-60">
                        <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-[2px] text-slate-500 dark:text-white/60">
                            <div className="flex items-center gap-2">
                                <div className="size-2 rounded-full bg-emerald-500"></div> System Status: Operational
                            </div>
                            <div className="flex items-center gap-2">
                                <RefreshCw size={12} /> Last Sync: 2m ago
                            </div>
                            <div className="flex items-center gap-2">
                                <Lock size={12} /> SSL Encryption: Active
                            </div>
                        </div>
                        <p className="text-xs text-slate-400 dark:text-white/40">© 2024 AI-Dev_Commander Enterprise. FaceBrasil Edition Variant v7.0.2</p>
                    </div>
                </footer>

            </main>
        </div>
    );
}
