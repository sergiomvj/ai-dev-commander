
import React from 'react';
import {
    User,
    Lock,
    History,
    CreditCard,
    LogOut,
    Camera,
    Smartphone,
    Trash2,
    Monitor,
    Shield, // Added Shield back as it was used in the original code and likely intended
    CheckCircle2, // Added CheckCircle2 back as it was used in the original code
    Calendar, // Added Calendar back as it was used in the original code
    Terminal, // Added Terminal back as it was used in the original code
    Filter, // Added Filter back as it was used in the original code
    KeyRound, // Added KeyRound back as it was used in the original code
    ChevronDown // Added ChevronDown back as it was used in the original code
} from 'lucide-react';

export default function ProfilePage() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-gradient-to-tr from-slate-900 to-slate-950">

                {/* Top Navigation */}
                {/* Header removed (handled by DashboardLayout) */}

                <main className="flex-1 px-4 md:px-8 py-8 flex justify-center">
                    <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8">

                        {/* Sidebar Navigation */}
                        <aside className="w-full lg:w-64 flex flex-col gap-2">
                            <div className="p-4 mb-4">
                                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Account Settings</p>
                                <nav className="flex flex-col gap-1">
                                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-white shadow-lg shadow-primary/20 transition-all" href="#">
                                        <User size={18} />
                                        <span className="text-sm font-semibold">Profile Details</span>
                                    </a>
                                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all text-slate-400 hover:text-white" href="#">
                                        <Lock size={18} />
                                        <span className="text-sm font-medium">Security</span>
                                    </a>
                                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all text-slate-400 hover:text-white" href="#">
                                        <History size={18} />
                                        <span className="text-sm font-medium">Activity Log</span>
                                    </a>
                                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all text-slate-400 hover:text-white" href="#">
                                        <CreditCard size={18} />
                                        <span className="text-sm font-medium">Billing</span>
                                    </a>
                                </nav>
                            </div>
                            <div className="mt-auto bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/5">
                                <div className="flex items-center gap-2 mb-2">
                                    <CheckCircle2 size={16} className="text-accent-yellow" />
                                    <span className="text-xs font-bold uppercase text-accent-yellow">Elite Member</span>
                                </div>
                                <p className="text-xs opacity-60 leading-relaxed mb-4 text-slate-300">You have access to all Commander Tier features.</p>
                                <button className="w-full py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold transition-all border border-white/10 text-white">Manage Subscription</button>
                            </div>
                        </aside>

                        {/* Content Area */}
                        <div className="flex-1 flex flex-col gap-8">

                            {/* Profile Header Card */}
                            <section className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl relative overflow-hidden border border-white/10">
                                <div className="absolute top-0 right-0 p-8">
                                    <span className="px-4 py-1.5 bg-accent-yellow/10 text-accent-yellow border border-accent-yellow/20 rounded-full text-xs font-bold">COMMANDER TIER</span>
                                </div>
                                <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                                    <div className="relative group">
                                        <div className="size-32 rounded-3xl overflow-hidden border-4 border-white/10 shadow-xl">
                                            <img className="w-full h-full object-cover" alt="Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqeaj3k6faTdtjEmDLbynXj9DKWmG-vIqBB0-LYYktksUssNO3VTciLvRCJWCKnSuXHuGU38VjAZ6SjNRnBBGocqhvYQsc3aD5rwQqMuvyschKCCQldOhHBW4_niEq7ZkDIAaiwcZETlAPJKXMRt-utELx5p6i--ns-nOe_2BXqtRXOn3Wr2n_D4TukzUyra5g2xOELi_HoXfc0JjKnh-pz3fx5akS2rHDprPOWGuQ-7wc3_k2IfIgzPDw67alYSjcSS0v8f8628-c" />
                                        </div>
                                        <button className="absolute -bottom-2 -right-2 size-10 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                                            <Camera size={18} />
                                        </button>
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h1 className="text-3xl font-bold tracking-tight mb-1 text-white">Alex Commander</h1>
                                        <p className="text-slate-400 mb-4">Lead Software Engineer • San Francisco, CA</p>
                                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                            <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-slate-300">
                                                <Calendar size={14} />
                                                Joined Jan 2023
                                            </div>
                                            <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-slate-300">
                                                <Terminal size={14} />
                                                1.2k Commits
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

                                {/* Personal Information */}
                                <section className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 flex flex-col gap-6 border border-white/10">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-bold text-white">Personal Information</h3>
                                        <button className="text-primary text-sm font-semibold hover:underline">Edit Info</button>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                                                <input className="w-full bg-white/5 border-none rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-primary cursor-default text-slate-200" readOnly type="text" value="Alex Commander" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Professional Email</label>
                                                <input className="w-full bg-white/5 border-none rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-primary cursor-default text-slate-200" readOnly type="email" value="alex@commander.dev" />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Bio</label>
                                            <textarea className="w-full bg-white/5 border-none rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-primary cursor-default resize-none text-slate-200" readOnly rows={3} value="Architecting the future of engineering management. Focused on scalability and developer happiness." />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Timezone</label>
                                                <div className="w-full bg-white/5 rounded-xl px-4 py-3 text-sm flex justify-between items-center text-slate-200">
                                                    <span>(GMT-08:00) Pacific Time</span>
                                                    <ChevronDown size={14} className="opacity-40" />
                                                </div>
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Language</label>
                                                <div className="w-full bg-white/5 rounded-xl px-4 py-3 text-sm flex justify-between items-center text-slate-200">
                                                    <span>English (US)</span>
                                                    <ChevronDown size={14} className="opacity-40" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Activity History Timeline */}
                                <section className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 flex flex-col h-full border border-white/10">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-lg font-bold text-white">Activity History</h3>
                                        <button className="text-slate-400 hover:text-white transition-colors">
                                            <Filter size={20} />
                                        </button>
                                    </div>
                                    <div className="relative flex-1 space-y-8 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-px before:bg-white/10">

                                        <div className="relative flex gap-6 pl-10 group">
                                            <div className="absolute left-0 top-1.5 size-5 rounded-full bg-primary border-4 border-slate-900 shadow-[0_0_15px_rgba(48,94,232,0.5)]"></div>
                                            <div className="flex-1">
                                                <p className="text-sm font-bold text-white">Deployed Version 2.4.0</p>
                                                <p className="text-xs text-slate-400 mt-1">Strategic Infrastructure Update • <span className="text-accent-yellow">Critical</span></p>
                                                <p className="text-[10px] uppercase font-bold text-slate-500 mt-2">Today, 2:45 PM</p>
                                            </div>
                                        </div>

                                        <div className="relative flex gap-6 pl-10 group">
                                            <div className="absolute left-0 top-1.5 size-5 rounded-full bg-slate-700 border-4 border-slate-900 group-hover:bg-primary/50 transition-colors"></div>
                                            <div className="flex-1">
                                                <p className="text-sm font-bold opacity-80 text-white">Approved PR #882</p>
                                                <p className="text-xs text-slate-400 mt-1">Auth-service middleware optimization</p>
                                                <p className="text-[10px] uppercase font-bold text-slate-500 mt-2">Yesterday, 10:12 AM</p>
                                            </div>
                                        </div>

                                        <div className="relative flex gap-6 pl-10 group">
                                            <div className="absolute left-0 top-1.5 size-5 rounded-full bg-slate-700 border-4 border-slate-900 group-hover:bg-primary/50 transition-colors"></div>
                                            <div className="flex-1">
                                                <p className="text-sm font-bold opacity-80 text-white">Team Meeting: Sprint 12</p>
                                                <p className="text-xs text-slate-400 mt-1">Quarterly roadmap synchronization</p>
                                                <p className="text-[10px] uppercase font-bold text-slate-500 mt-2">Oct 24, 2023</p>
                                            </div>
                                        </div>

                                        <div className="relative flex gap-6 pl-10 group opacity-50">
                                            <div className="absolute left-0 top-1.5 size-5 rounded-full bg-slate-700 border-4 border-slate-900"></div>
                                            <div className="flex-1">
                                                <p className="text-sm font-bold text-white">Account Level Upgraded</p>
                                                <p className="text-xs text-slate-400 mt-1">Moved to Commander Tier Elite</p>
                                                <p className="text-[10px] uppercase font-bold text-slate-500 mt-2">Oct 20, 2023</p>
                                            </div>
                                        </div>

                                    </div>
                                </section>
                            </div>

                            {/* Security & Access Section */}
                            <section className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/10">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                        <Shield size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Security & Access</h3>
                                        <p className="text-sm text-slate-400">Manage your password and account authentication methods.</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all flex flex-col gap-4">
                                        <div className="flex items-center justify-between">
                                            <h4 className="font-bold flex items-center gap-2 text-white">
                                                <KeyRound className="text-primary" size={20} />
                                                Change Password
                                            </h4>
                                            <span className="text-[10px] font-bold text-slate-500 uppercase">Last updated 3 months ago</span>
                                        </div>
                                        <p className="text-sm text-slate-400 leading-relaxed">Ensure your account is protected with a long, unique password that is updated regularly.</p>
                                        <button className="mt-2 w-fit px-6 py-2 bg-primary rounded-xl text-sm font-bold text-white shadow-lg shadow-primary/20 hover:scale-105 transition-transform">Update Password</button>
                                    </div>

                                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent-yellow/30 transition-all flex flex-col gap-4">
                                        <div className="flex items-center justify-between">
                                            <h4 className="font-bold flex items-center gap-2 text-white">
                                                <Smartphone className="text-accent-yellow" size={20} />
                                                2-Factor Authentication
                                            </h4>
                                            <div className="relative inline-flex items-center cursor-pointer">
                                                <div className="w-11 h-6 bg-primary rounded-full ring-2 ring-primary/20"></div>
                                                <div className="absolute left-6 top-1 size-4 bg-white rounded-full"></div>
                                            </div>
                                        </div>
                                        <p className="text-sm text-slate-400 leading-relaxed">Add an extra layer of security to your account. We&apos;ll ask for a code whenever you sign in.</p>
                                        <button className="mt-2 w-fit px-6 py-2 border border-white/10 rounded-xl text-sm font-bold hover:bg-white/5 transition-colors text-white">Manage 2FA Devices</button>
                                    </div>
                                </div>

                                {/* Active Sessions */}
                                <div className="mt-8 pt-8 border-t border-white/10">
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">Active Sessions</h4>
                                    <div className="space-y-4">

                                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                                            <div className="flex items-center gap-4">
                                                <div className="size-10 flex items-center justify-center bg-white/10 rounded-xl text-primary">
                                                    <Monitor size={24} />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-white">MacBook Pro 16&quot; • San Francisco, US</p>
                                                    <p className="text-xs text-slate-400">Chrome Browser • Active Now</p>
                                                </div>
                                            </div>
                                            <span className="px-3 py-1 bg-primary/20 text-primary text-[10px] font-bold rounded-full border border-primary/20">CURRENT DEVICE</span>
                                        </div>

                                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 group">
                                            <div className="flex items-center gap-4">
                                                <div className="size-10 flex items-center justify-center bg-white/10 rounded-xl text-slate-400">
                                                    <Smartphone size={24} />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold opacity-80 text-white">iPhone 15 Pro • London, UK</p>
                                                    <p className="text-xs text-slate-400">Commander Mobile App • 2 hours ago</p>
                                                </div>
                                            </div>
                                            <button className="px-4 py-2 hover:bg-red-500/10 text-red-500 text-xs font-bold rounded-xl transition-colors border border-transparent hover:border-red-500/20 flex items-center gap-2">
                                                <LogOut size={16} /> Log Out
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </section>

                            {/* Footer Actions */}
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 px-2">
                                <button className="text-red-500/60 hover:text-red-500 text-sm font-bold flex items-center gap-2 transition-colors">
                                    <Trash2 size={16} />
                                    Delete Account
                                </button>
                                <div className="flex gap-4">
                                    <button className="px-8 py-3 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-bold border border-white/10 transition-all text-white">Cancel</button>
                                    <button className="px-8 py-3 bg-primary hover:bg-primary/90 rounded-xl text-sm font-bold text-white shadow-xl shadow-primary/30 transition-all transform hover:-translate-y-0.5">Save Changes</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
