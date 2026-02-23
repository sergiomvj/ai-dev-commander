
import React from 'react';
import {
    LayoutTemplate,
    Lightbulb,
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    Layers,
    Cloud
} from 'lucide-react';

export default function NewProjectSetup() {
    return (
        <div className="flex flex-col min-h-screen font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 relative overflow-hidden">

            {/* Background Decoration */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 size-96 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-12 left-12 size-64 bg-accent-yellow/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 flex flex-col min-h-screen">
                {/* Top Navigation */}
                {/* Header removed (handled by DashboardLayout) */}

                {/* Main Workspace */}
                <main className="flex-1 flex items-center justify-center p-6 bg-gradient-to-tr from-primary/5 to-accent-yellow/5">
                    <div className="glass-panel w-full max-w-5xl rounded-xl shadow-2xl flex relative overflow-hidden bg-white/40 dark:bg-slate-900/40 border border-white/20 backdrop-blur-xl">

                        {/* Main Content Column */}
                        <div className="flex-1 flex flex-col">

                            {/* Stepper Progress */}
                            <div className="px-8 pt-8 pb-4 border-b border-slate-200/50 dark:border-slate-800/50">
                                <div className="flex justify-between items-center mb-8 relative">
                                    {/* Progress Lines */}
                                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-700 -z-10 -translate-y-1/2"></div>

                                    {/* Step 1 */}
                                    <div className="flex flex-col items-center gap-2 bg-background-light dark:bg-background-dark z-10 px-2">
                                        <div className="size-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-lg shadow-primary/20">1</div>
                                        <span className="text-[10px] font-bold text-primary tracking-widest uppercase">BASIC INFO</span>
                                    </div>

                                    {/* Step 2 (Active) */}
                                    <div className="flex flex-col items-center gap-2 bg-background-light dark:bg-background-dark z-10 px-2">
                                        <div className="size-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-lg shadow-primary/20 ring-4 ring-primary/10">2</div>
                                        <span className="text-[10px] font-bold text-primary tracking-widest uppercase">TEMPLATES</span>
                                    </div>

                                    {/* Step 3 */}
                                    <div className="flex flex-col items-center gap-2 bg-background-light dark:bg-background-dark z-10 px-2 opacity-50">
                                        <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-500 flex items-center justify-center font-bold">3</div>
                                        <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">MEMBERS</span>
                                    </div>

                                    {/* Step 4 */}
                                    <div className="flex flex-col items-center gap-2 bg-background-light dark:bg-background-dark z-10 px-2 opacity-50">
                                        <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-500 flex items-center justify-center font-bold">4</div>
                                        <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">PERMISSIONS</span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Project Setup</h1>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Step 2: Selection of engineering architecture template</p>
                                </div>
                            </div>

                            {/* Content Area (Template Selection View) */}
                            <div className="flex-1 overflow-y-auto p-8 max-h-[60vh]">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                                    {/* Template Card 1 (Active) */}
                                    <div className="relative group cursor-pointer border-2 border-primary bg-primary/5 rounded-xl p-6 transition-all shadow-lg ring-4 ring-primary/10">
                                        <div className="absolute top-3 right-3 text-primary">
                                            <CheckCircle2 size={24} className="fill-current" />
                                        </div>
                                        <div className="size-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary mb-4">
                                            <Layers size={24} />
                                        </div>
                                        <h3 className="font-bold text-slate-900 dark:text-white mb-2">Microservices</h3>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Distributed system architecture with Docker, K8s, and event-driven communication.</p>
                                        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2">
                                            <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-bold text-slate-600 dark:text-slate-300">DOCKER</span>
                                            <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-bold text-slate-600 dark:text-slate-300">GO/NODE</span>
                                        </div>
                                    </div>

                                    {/* Template Card 2 */}
                                    <div className="relative group cursor-pointer border-2 border-slate-200/50 dark:border-slate-800 hover:border-primary/50 bg-white/40 dark:bg-slate-900/40 rounded-xl p-6 transition-all hover:shadow-md">
                                        <div className="size-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 mb-4 group-hover:text-primary transition-colors">
                                            <Cloud size={24} />
                                        </div>
                                        <h3 className="font-bold text-slate-900 dark:text-white mb-2">Serverless API</h3>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">AWS Lambda/Azure Functions setup with API Gateway and NoSQL storage.</p>
                                        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2">
                                            <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-bold text-slate-600 dark:text-slate-300">AWS</span>
                                            <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-bold text-slate-600 dark:text-slate-300">PYTHON</span>
                                        </div>
                                    </div>

                                    {/* Template Card 3 */}
                                    <div className="relative group cursor-pointer border-2 border-slate-200/50 dark:border-slate-800 hover:border-primary/50 bg-white/40 dark:bg-slate-900/40 rounded-xl p-6 transition-all hover:shadow-md">
                                        <div className="size-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 mb-4 group-hover:text-primary transition-colors">
                                            <LayoutTemplate size={24} />
                                        </div>
                                        <h3 className="font-bold text-slate-900 dark:text-white mb-2">Clean Monolith</h3>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Onion architecture for robust enterprise applications with SQL backend.</p>
                                        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2">
                                            <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-bold text-slate-600 dark:text-slate-300">DOTNET</span>
                                            <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-bold text-slate-600 dark:text-slate-300">POSTGRES</span>
                                        </div>
                                    </div>

                                </div>

                                {/* Step Preview Information */}
                                <div className="mt-8 bg-accent-yellow/5 border border-accent-yellow/20 rounded-lg p-4 flex items-start gap-4">
                                    <div className="p-2 bg-accent-yellow/20 rounded-full text-yellow-700 dark:text-accent-yellow flex items-center justify-center">
                                        <Lightbulb size={18} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-yellow-900 dark:text-accent-yellow mb-1">Architecture Recommendation</h4>
                                        <p className="text-xs text-yellow-800/80 dark:text-accent-yellow/60 leading-relaxed">Based on your project description &quot;High-frequency trade-engine&quot;, the Microservices architecture with Kafka-based messaging is recommended for optimal scaling and performance.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Actions */}
                            <div className="p-6 border-t border-slate-200/50 dark:border-slate-800/50 flex justify-between items-center bg-white/30 dark:bg-slate-900/30">
                                <button className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                                    <ArrowLeft size={18} /> Back
                                </button>
                                <div className="flex gap-4">
                                    <button className="px-5 py-2.5 text-sm font-bold text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                                        Save as Draft
                                    </button>
                                    <button className="bg-primary hover:brightness-110 text-white px-8 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 shadow-lg shadow-primary/20 transition-all active:scale-95">
                                        Continue to Members <ArrowRight size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Side Panel (Upcoming Steps) */}
                        <aside className="hidden xl:block w-72 border-l border-slate-200/50 dark:border-slate-800/50 bg-white/30 dark:bg-slate-900/30 p-6 backdrop-blur-md">
                            <div className="space-y-6">
                                <div>
                                    <h5 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">Upcoming Steps</h5>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3 opacity-60">
                                            <div className="size-6 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold">3</div>
                                            <div>
                                                <p className="text-xs font-bold">Team Invitations</p>
                                                <p className="text-[10px] text-slate-500">Add engineers via email</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 opacity-40">
                                            <div className="size-6 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold">4</div>
                                            <div>
                                                <p className="text-xs font-bold">Role Assignment</p>
                                                <p className="text-[10px] text-slate-500">Define access controls</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800/50">
                                    <h5 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Project Summary</h5>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-[11px]">
                                            <span className="text-slate-500">Name:</span>
                                            <span className="font-medium">Vortex Prime</span>
                                        </div>
                                        <div className="flex justify-between text-[11px]">
                                            <span className="text-slate-500">Region:</span>
                                            <span className="font-medium">us-east-1</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <div className="flex items-center gap-2 text-primary mb-1">
                                        <CheckCircle2 size={16} />
                                        <span className="text-[10px] font-bold uppercase tracking-tight">FACEBRASIL Standard</span>
                                    </div>
                                    <p className="text-[10px] text-slate-600 dark:text-slate-400">Compliant with premium architectural governance frameworks.</p>
                                </div>
                            </div>
                        </aside>

                    </div>
                </main>

                {/* Footer Info */}
                <footer className="p-6 text-center text-xs text-slate-400 dark:text-slate-600 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md">
                    © 2024 AI-Dev_Commander v1.0.8-alpha | Advanced Engineering Management
                </footer>
            </div>
        </div>
    );
}
