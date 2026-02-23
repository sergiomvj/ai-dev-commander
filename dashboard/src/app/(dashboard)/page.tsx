
import React from 'react';
import {
  Activity,
  Users,
  GitBranch,
  AlertCircle,
  ArrowUpRight,
  Clock,
  CheckCircle2
} from 'lucide-react';

export default function DashboardHome() {
  return (
    <div className="p-8 font-display">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Command Center</h1>
        <p className="text-slate-500 dark:text-slate-400">System overview and critical metrics.</p>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-6 rounded-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Activity size={64} className="text-primary" />
          </div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <Activity size={20} />
            </div>
            <span className="text-sm font-bold text-slate-500 dark:text-slate-400">System Health</span>
          </div>
          <div className="text-3xl font-black text-slate-900 dark:text-white">98.2%</div>
          <div className="flex items-center gap-1 text-xs font-bold text-emerald-500 mt-2">
            <ArrowUpRight size={14} /> +0.4% from last week
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-6 rounded-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Users size={64} className="text-blue-500" />
          </div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-500/10 text-blue-500 rounded-lg">
              <Users size={20} />
            </div>
            <span className="text-sm font-bold text-slate-500 dark:text-slate-400">Active Agents</span>
          </div>
          <div className="text-3xl font-black text-slate-900 dark:text-white">12/15</div>
          <div className="flex items-center gap-1 text-xs font-bold text-slate-400 mt-2">
            3 Idle • 0 Offline
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-6 rounded-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <GitBranch size={64} className="text-purple-500" />
          </div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-purple-500/10 text-purple-500 rounded-lg">
              <GitBranch size={20} />
            </div>
            <span className="text-sm font-bold text-slate-500 dark:text-slate-400">Active Tasks</span>
          </div>
          <div className="text-3xl font-black text-slate-900 dark:text-white">24</div>
          <div className="flex items-center gap-1 text-xs font-bold text-purple-500 mt-2">
            8 High Priority
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-6 rounded-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <AlertCircle size={64} className="text-rose-500" />
          </div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-rose-500/10 text-rose-500 rounded-lg">
              <AlertCircle size={20} />
            </div>
            <span className="text-sm font-bold text-slate-500 dark:text-slate-400">Critical Issues</span>
          </div>
          <div className="text-3xl font-black text-slate-900 dark:text-white">2</div>
          <div className="flex items-center gap-1 text-xs font-bold text-rose-500 mt-2">
            Requires attention
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Recent Activity</h3>
            <button className="text-sm font-bold text-primary hover:underline">View All</button>
          </div>
          <div className="space-y-6">
            {/* Item 1 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="size-2 rounded-full bg-primary mt-2"></div>
                <div className="w-px h-full bg-slate-200 dark:bg-white/10 my-2"></div>
              </div>
              <div className="pb-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold bg-primary/10 text-primary px-2 py-0.5 rounded">DEPLOY</span>
                  <span className="text-xs text-slate-400">2 min ago</span>
                </div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">Production deployment <span className="font-mono text-xs bg-slate-100 dark:bg-white/10 px-1 py-0.5 rounded">v2.4.0</span> completed successfully.</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="size-2 rounded-full bg-emerald-500 mt-2"></div>
                <div className="w-px h-full bg-slate-200 dark:bg-white/10 my-2"></div>
              </div>
              <div className="pb-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded">TASK</span>
                  <span className="text-xs text-slate-400">15 min ago</span>
                </div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">Agent <span className="font-bold">Dev-01</span> completed task <span className="font-mono text-xs bg-slate-100 dark:bg-white/10 px-1 py-0.5 rounded">#8821</span>: Refactor Auth Middleware.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="size-2 rounded-full bg-amber-500 mt-2"></div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded">ALERT</span>
                  <span className="text-xs text-slate-400">1 hour ago</span>
                </div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">High memory usage detected on <span className="font-mono text-xs bg-slate-100 dark:bg-white/10 px-1 py-0.5 rounded">worker-node-03</span>.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions / Status */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-6 text-white shadow-xl shadow-primary/20">
            <h3 className="text-lg font-white font-bold mb-2">AI Agent Status</h3>
            <div className="flex items-center justify-between mb-4">
              <span className="text-blue-100 text-sm">Working Capacity</span>
              <span className="font-bold text-2xl">85%</span>
            </div>
            <div className="w-full bg-black/20 rounded-full h-2 mb-4">
              <div className="bg-white h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 bg-white/20 hover:bg-white/30 py-2 rounded-lg text-xs font-bold transition-colors">Manage Agents</button>
              <button className="flex-1 bg-white text-primary py-2 rounded-lg text-xs font-bold hover:brightness-110 transition-colors">Assign Task</button>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl p-6">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Pending Reviews</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-amber-500" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Pull Request #92</span>
                </div>
                <CheckCircle2 size={16} className="text-slate-300 group-hover:text-primary transition-colors" />
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-amber-500" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Design Mockup v2</span>
                </div>
                <CheckCircle2 size={16} className="text-slate-300 group-hover:text-primary transition-colors" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
