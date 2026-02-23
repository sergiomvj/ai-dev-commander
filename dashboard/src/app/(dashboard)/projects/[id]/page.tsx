
import React from 'react';
import {
    FolderOpen,
    TrendingUp,
    GitBranch,
    GitCommit,
    Rocket,
    Filter,
    Plus,
    MoreHorizontal,
    MessageSquare,
    Paperclip,
    Zap,
    AlertTriangle,
    CheckCircle2,
    RefreshCw,
    Search,
    LayoutDashboard,
    Settings,
    Bell
} from 'lucide-react';

export default function ProjectDetails({ params }: { params: { id: string } }) {
    // Mock data to be replaced by Supabase fetch
    const project = {
        id: params.id,
        name: 'Engine Core Architecture',
        version: 'v2.4.0-stable',
        environment: 'Production',
        health: 94,
        healthTrend: 2.4,
        stack: ['TYPESCRIPT', 'RUST', 'POSTGRES', 'KUBERNETES'],
        repo: {
            branch: 'main',
            lastCommit: 'a2f91c'
        },
        team: [
            { name: 'Marco Rossi', role: 'Lead Architect', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2NgydNh9S9MPZKHKHDW8WuEDeHe10miG5itB07xAIRRN3jnSUqv6U8TX4H0lHtU6zOx2oFodhFLOmIg3g_khtQvplP_EfNxE2vrt5FqSsoI6lslHUpFjNw0RFg-vCHTk7sUWkA8Wyectyc9r1z49nEJT3NBRLLiclQ6_tGAV6tAirsamvwtBPQ7cN190Cp5xb35cKxpnlzoDeZ3m9cPSik429s1RMDjFgWd0DJq5eW3_1nCyt9dm49633aBSBXWPCSCoTjNat3O_C', load: 12 },
            { name: 'Elena Vance', role: 'Security Eng', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9SGDSw09eFpvXZ4UlkHc9u2B-kjF0WRgggdYY9WISA0O4ySydH_PNzT88d8quMB9FRiHE3MBOboFCvOdtXk7vE1iYFFZkr9tcClnP0SLDulPFclmOFFTYnzUNtpugjJfS3LXUQirl-9jKP9azhZtE1HfoxHiaZcqZs3_4FOFeMYcP_uCg36CTlO8U0Z4ynAJ1t7XXnD3nhd7cAAZxswVJMye2Welm6JU-i-mbkQ5dKqjabhcRHGUzHzLCzSZh07gjkH7KfZ1psPdI', load: 85 }
        ]
    };

    return (
        <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark font-display text-slate-900">

            {/* Sidebar: Project Metadata */}
            <aside className="w-80 glass border-r border-slate-200/50 flex flex-col p-6 overflow-y-auto bg-white/50 dark:bg-slate-900/50">
                <div className="mb-8">
                    <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest mb-2">
                        <FolderOpen size={14} />
                        Project Alpha-7
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-1 leading-tight">{project.name}</h2>
                    <p className="text-sm text-slate-500">{project.version} | {project.environment}</p>
                </div>

                <div className="space-y-6">
                    {/* Health Score Gauge */}
                    <div className="glass-card rounded-xl p-4 border border-slate-200/50">
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-sm font-semibold text-slate-700">Project Health</span>
                            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Optimal</span>
                        </div>
                        <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                                <div className="text-3xl font-bold text-slate-900">{project.health}%</div>
                                <div className="text-xs text-green-600 flex items-center font-bold gap-1">
                                    <TrendingUp size={14} /> +{project.healthTrend}%
                                </div>
                            </div>
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-slate-100">
                                <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary" style={{ width: `${project.health}%` }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.stack.map(tech => (
                                <span key={tech} className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-[10px] font-bold">{tech}</span>
                            ))}
                        </div>
                    </div>

                    {/* Repo Info */}
                    <div className="space-y-3">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Repository Status</h3>
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-500 flex items-center gap-2">
                                <GitBranch size={16} /> Branch
                            </span>
                            <span className="font-mono text-primary font-bold">{project.repo.branch}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-500 flex items-center gap-2">
                                <GitCommit size={16} /> Last Commit
                            </span>
                            <span className="font-mono text-slate-700">#{project.repo.lastCommit}</span>
                        </div>
                    </div>

                    {/* Team Members Section */}
                    <div className="pt-4">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Engineering Team</h3>
                        <div className="space-y-4">
                            {project.team.map((member, i) => (
                                <div key={i} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="relative">
                                            <img className="size-8 rounded-full border border-slate-200" alt="Profile" src={member.avatar} />
                                            <div className="absolute bottom-0 right-0 size-2.5 bg-green-500 border-2 border-white rounded-full"></div>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-slate-800">{member.name}</p>
                                            <p className="text-[10px] text-slate-500">{member.role}</p>
                                        </div>
                                    </div>
                                    <div className="text-[10px] font-bold text-slate-400">{member.load}% Load</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-auto pt-6">
                    <button className="w-full bg-primary text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:brightness-110 transition-all">
                        <Rocket size={18} />
                        Deploy to Prod
                    </button>
                </div>
            </aside>

            {/* Main Content Area: Kanban / Activity */}
            <section className="flex-1 flex flex-col overflow-hidden bg-white/30 dark:bg-slate-900/30">

                {/* Breadcrumbs & Local Nav */}
                <div className="px-8 py-4 flex items-center justify-between border-b border-slate-200/50 glass">
                    <div className="flex items-center gap-2 text-sm">
                        <a className="text-slate-400 hover:text-primary" href="/projects">Projects</a>
                        <span className="text-slate-300">/</span>
                        <span className="font-semibold text-slate-900">{project.name}</span>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 text-xs font-bold rounded-lg hover:bg-slate-50 flex items-center gap-2">
                            <Filter size={16} /> Filter
                        </button>
                        <button className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-slate-800 flex items-center gap-2">
                            <Plus size={16} /> New Task
                        </button>
                    </div>
                </div>

                {/* Kanban Board */}
                <div className="flex-1 overflow-x-auto p-8 flex gap-6 items-start scroll-smooth">

                    {/* Column: Backlog */}
                    <div className="min-w-[320px] flex flex-col gap-4">
                        <div className="flex items-center justify-between px-2">
                            <h3 className="text-sm font-bold text-slate-600 flex items-center gap-2 uppercase tracking-widest">
                                <span className="size-2 rounded-full bg-slate-400"></span>
                                Backlog <span className="text-slate-400 font-normal ml-1">4</span>
                            </h3>
                        </div>

                        {/* Task Card */}
                        <div className="glass-card p-4 rounded-xl">
                            <div className="flex justify-between items-start mb-3">
                                <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded">CORE-291</span>
                                <button className="text-slate-400 hover:text-primary"><MoreHorizontal size={16} /></button>
                            </div>
                            <h4 className="text-sm font-bold text-slate-900 mb-2">Implement JWT validation layer for Auth service</h4>
                            <div className="flex items-center justify-between mt-4">
                                <div className="flex -space-x-2">
                                    <img className="size-6 rounded-full border-2 border-white" alt="Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl763543KGStygQKKfAXxEXpnkl8SNvgFvvhz7yIV81R168IcqnePfGFjDwxaL0XEW_KQAK4DgucUYB6dtZSHmznme7t3U_4ZMNf83NWwSWgywxvCAjtIL9QThoVLSfd2mKu13-0APKLPh1y87swlcBAzvpzEFWvtFDJQpn5mYmBt_mTSmmD_DqHSxaglFiQkzWsXRR5dcJ9nSjV0WObAO48nuiuUMkBzFqXCRct4w0SPfKyFJldlsMCNMl2TD7dAHtwQpbAQ4ywPg" />
                                </div>
                                <div className="flex items-center gap-2">
                                    <MessageSquare size={14} className="text-slate-400" />
                                    <span className="text-[10px] font-bold text-slate-400">2</span>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card p-4 rounded-xl">
                            <div className="flex justify-between items-start mb-3">
                                <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded">INFRA-04</span>
                                <button className="text-slate-400 hover:text-primary"><MoreHorizontal size={16} /></button>
                            </div>
                            <h4 className="text-sm font-bold text-slate-900 mb-2">Configure S3 bucket lifecycle policies</h4>
                            <div className="flex items-center justify-between mt-4">
                                <div className="flex -space-x-2">
                                    <div className="size-6 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center">
                                        <span className="text-[10px] text-slate-500 font-bold">JD</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Paperclip size={14} className="text-slate-400" />
                                    <span className="text-[10px] font-bold text-slate-400">5</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column: In Progress */}
                    <div className="min-w-[320px] flex flex-col gap-4">
                        <div className="flex items-center justify-between px-2">
                            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 uppercase tracking-widest">
                                <span className="size-2 rounded-full bg-primary"></span>
                                In Progress <span className="text-slate-400 font-normal ml-1">2</span>
                            </h3>
                        </div>
                        <div className="glass-card p-4 rounded-xl border-l-4 border-l-primary shadow-sm bg-white/60">
                            <div className="flex justify-between items-start mb-3">
                                <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-1 rounded">API-102</span>
                                <div className="flex items-center gap-1">
                                    <Zap size={14} className="text-accent-yellow fill-accent-yellow" />
                                    <span className="text-[10px] font-bold text-accent-yellow uppercase">AI Priority</span>
                                </div>
                            </div>
                            <h4 className="text-sm font-bold text-slate-900 mb-2">Refactor GraphQL resolvers for performance optimization</h4>
                            <div className="w-full bg-slate-100 h-1.5 rounded-full my-4 overflow-hidden">
                                <div className="bg-primary h-full rounded-full" style={{ width: '65%' }}></div>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <img className="size-6 rounded-full border-2 border-white" alt="Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArnD_qcddfEqlcmybfoC5rmXC4jcQm9u0r-eT83vyu4sqjJYiA-bbVmpsRSt5WAGzyrt8hrlQDHBaKNFhgDEYSNeQcsrLy2uHxUWXOi7zSkQXogOtFMwgGlmlVcODkboxnd4wRAPbtEe5907PnAoQLpel2zZ0p8m_QcYHzUrqfZ_N8EEUQ0G20SfzIJ_AifVIz--86EzVOCFTTf-FLz2z5BkYD7fnIq7o1fq73oSu117tY50OU4TYvTG7yAuUJowMBpzizuZkjcZH_" />
                                <div className="text-[10px] font-bold text-slate-400">Updated 5m ago</div>
                            </div>
                        </div>
                    </div>

                    {/* Column: Review */}
                    <div className="min-w-[320px] flex flex-col gap-4">
                        <div className="flex items-center justify-between px-2">
                            <h3 className="text-sm font-bold text-slate-600 flex items-center gap-2 uppercase tracking-widest">
                                <span className="size-2 rounded-full bg-accent-yellow"></span>
                                Review <span className="text-slate-400 font-normal ml-1">1</span>
                            </h3>
                        </div>
                        <div className="glass-card p-4 rounded-xl">
                            <div className="flex justify-between items-start mb-3">
                                <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded">SEC-88</span>
                                <AlertTriangle size={16} className="text-rose-500" />
                            </div>
                            <h4 className="text-sm font-bold text-slate-900 mb-2">Vulnerability fix: sanitize input on contact form</h4>
                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center gap-2">
                                    <img className="size-6 rounded-full border-2 border-white" alt="Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyoj1d4YP_W78pJ2ssWGGjVpVuEyLoVbYcXJDyb1Wo2L0yq67OU8S96EpLxJO7E2XggzMzZHN8YkN4gtWmZlOdQ0schr4yqXdPC14W_iiCTDmlWwDkiehbzsjNcmZi-3dG3t09LscGrwmEmGrNNBBmeT-7N7B2d1R-AK5KDj20FY0hfI-opZXhUdHVxQqKaSOkRmNJDgfjEMSj_2RHrTGfDcZL4UD1g5X4WLXfyID3v2zRQeWPzJ5RRSyOHJDo4moAngt0s-kKv7zk" />
                                    <span className="text-[10px] font-bold text-slate-400">+2 Reviewers</span>
                                </div>
                                <span className="text-[10px] font-bold text-rose-500 bg-rose-50 px-2 py-0.5 rounded">High Risk</span>
                            </div>
                        </div>
                    </div>

                    {/* Column: Done */}
                    <div className="min-w-[320px] flex flex-col gap-4">
                        <div className="flex items-center justify-between px-2">
                            <h3 className="text-sm font-bold text-slate-600 flex items-center gap-2 uppercase tracking-widest">
                                <span className="size-2 rounded-full bg-emerald-500"></span>
                                Done <span className="text-slate-400 font-normal ml-1">12</span>
                            </h3>
                        </div>
                        <div className="glass-card p-4 rounded-xl opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                            <h4 className="text-sm font-bold text-slate-900 mb-2">Setup CI/CD pipeline for staging environment</h4>
                            <div className="flex items-center justify-between mt-4">
                                <CheckCircle2 size={16} className="text-emerald-500" />
                                <span className="text-[10px] font-bold text-slate-400">Deployed 2h ago</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Recent Activities & AI Insights Footer */}
                <div className="h-64 glass border-t border-slate-200/50 flex p-6 gap-8 overflow-hidden">
                    <div className="flex-1 overflow-y-auto pr-4">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Activity Stream</h3>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="size-6 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                                        <GitCommit size={14} />
                                    </div>
                                    <div className="w-px h-full bg-slate-200 mt-2"></div>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-700"><strong>Elena Vance</strong> pushed 4 commits to <code>feat/auth-v2</code></p>
                                    <p className="text-[10px] text-slate-400">14 minutes ago</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="size-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                        <Rocket size={14} />
                                    </div>
                                    <div className="w-px h-full bg-slate-200 mt-2"></div>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-700"><strong>Production Deployment</strong> successful for <code>v2.4.0</code></p>
                                    <p className="text-[10px] text-slate-400">2 hours ago</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* AI Insights Panel */}
                    <div className="w-96 glass-card rounded-xl p-4 border-l-4 border-l-accent-yellow flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                            <Zap size={16} className="text-accent-yellow fill-accent-yellow" />
                            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest">AI Commander Insights</h3>
                        </div>
                        <div className="flex-1 text-sm text-slate-600 italic leading-relaxed">
                            "I've detected a potential race condition in <code>db_connector.rs</code>. Recommend adding a mutex wrap to the pool initialization. Cycle time is trending down by 14% this week."
                        </div>
                        <button className="mt-4 text-[10px] font-bold text-primary flex items-center gap-1 hover:underline">
                            Apply suggested fixes <span className="material-symbols-outlined text-xs">arrow_forward</span>
                        </button>
                    </div>
                </div>

            </section>

            {/* Floating AI Sync Action */}
            <button className="fixed bottom-8 right-8 size-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-[100] group">
                <RefreshCw size={24} className="group-hover:rotate-180 transition-transform duration-700" />
            </button>

        </div>
    );
}
