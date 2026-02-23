
import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-background-light dark:bg-background-dark">
            <Sidebar />
            <div className="flex-1 ml-64 min-h-screen flex flex-col transition-all duration-300">
                <Header />
                <main className="flex-1 overflow-x-hidden">
                    {children}
                </main>
            </div>
        </div>
    );
}
