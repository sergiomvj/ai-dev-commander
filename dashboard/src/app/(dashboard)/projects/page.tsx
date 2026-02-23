
import React from 'react';
import { Plus, Search, Filter } from 'lucide-react';
import { ProjectCard } from '@/components/ProjectCard';

// Mock data - replace with Supabase fetch
const projects = [
    { id: '1', name: 'AI Commander Core', status: 'active', taskCount: 45, completedCount: 12, dueDate: 'Mar 15' },
    { id: '2', name: 'Facebrasil TV Integration', status: 'paused', taskCount: 20, completedCount: 18, dueDate: 'Feb 28' },
    { id: '3', name: 'SEO Automation System', status: 'completed', taskCount: 30, completedCount: 30, dueDate: 'Jan 10' },
    { id: '4', name: 'Financial Dashboard', status: 'active', taskCount: 50, completedCount: 5, dueDate: 'Apr 20' },
] as const;

export default function ProjectsPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 font-display p-6 lg:p-12">
            <div className="max-w-7xl mx-auto space-y-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900">Projects</h1>
                        <p className="text-slate-500 mt-1">Manage and track your ongoing initiatives.</p>
                    </div>
                    <button className="bg-primary text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/20 hover:brightness-110 transition-all">
                        <Plus size={20} />
                        New Project
                    </button>
                </div>

                {/* Filters & Search */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            className="w-full pl-10 pr-4 py-3 rounded-xl border-none glass-card focus:ring-2 focus:ring-primary/50 text-sm font-medium placeholder:text-slate-400"
                        />
                    </div>
                    <button className="glass-card px-4 py-3 rounded-xl flex items-center gap-2 text-slate-600 font-bold hover:text-primary transition-colors">
                        <Filter size={18} />
                        <span>Filter</span>
                    </button>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project as any} />
                    ))}

                    {/* Add New Placeholder */}
                    <button className="border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center gap-3 p-6 group hover:border-primary/50 hover:bg-primary/5 transition-all h-full min-h-[220px]">
                        <div className="size-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:text-primary transition-colors">
                            <Plus size={24} />
                        </div>
                        <span className="font-bold text-slate-400 group-hover:text-primary">Create New Project</span>
                    </button>
                </div>

            </div>
        </div>
    );
}
