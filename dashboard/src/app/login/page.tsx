
import React from 'react';
import {
    Shield,
    ArrowRight,
    Github,
    Mail,
    Lock
} from 'lucide-react';

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark font-display flex items-center justify-center p-4">
            <div className="w-full max-w-md">

                {/* Logo Section */}
                <div className="flex flex-col items-center gap-4 mb-8">
                    <div className="size-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-xl shadow-primary/20">
                        <Shield size={28} />
                    </div>
                    <div className="text-center">
                        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">AI-Dev_Commander</h1>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">Engineering Management System</p>
                    </div>
                </div>

                {/* Login Card */}
                <div className="bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl p-8">
                    <div className="mb-6">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Welcome Back</h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Enter your credentials to access the command center.</p>
                    </div>

                    <form className="space-y-4">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input
                                    className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                                    placeholder="name@company.com"
                                    type="email"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <div className="flex items-center justify-between">
                                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Password</label>
                                <a href="#" className="text-xs font-bold text-primary hover:underline">Forgot?</a>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input
                                    className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                                    placeholder="••••••••"
                                    type="password"
                                />
                            </div>
                        </div>

                        <button className="w-full py-3 bg-primary hover:bg-primary/90 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all transform active:scale-95 group">
                            Sign In <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <div className="my-6 flex items-center gap-4">
                        <div className="h-px bg-slate-200 dark:bg-white/10 flex-1"></div>
                        <span className="text-xs font-bold text-slate-400 uppercase">Or continue with</span>
                        <div className="h-px bg-slate-200 dark:bg-white/10 flex-1"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button className="py-2.5 border border-slate-200 dark:border-white/10 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                            <Github size={20} className="text-slate-900 dark:text-white" />
                            <span className="text-sm font-bold text-slate-700 dark:text-slate-300">GitHub</span>
                        </button>
                        <button className="py-2.5 border border-slate-200 dark:border-white/10 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                            <svg className="size-5" viewBox="0 0 24 24">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Google</span>
                        </button>
                    </div>

                </div>

                {/* Footer */}
                <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-8">
                    Don't have an account? <a href="#" className="text-primary font-bold hover:underline">Request Access</a>
                </p>

            </div>
        </div>
    );
}
