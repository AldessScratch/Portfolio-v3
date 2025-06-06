'use client'

import { IconLogout2, IconChartLine, IconEdit } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    return (
        <div className="relative w-full h-screen flex items-center justify-center background-colors">
            <aside className="fixed left-0 top-0 m-8 flex flex-col w-64 h-[calc(100%-4rem)] rounded-2xl blbg z-50">
                {/* Logo & Title */}
                <div className="flex items-center gap-3 mt-10 mb-8 px-8">
                    <img src="/logo.png" className="rounded-full h-10 w-10 shadow" alt="Logo" />
                    <div className="ml-2 text flex flex-col justify-center items-start">
                        <h2 className="text-2xl font-bold text-black dark:text-white">Dashboard</h2>
                        <span className="text-xs text-gray-600 dark:text-gray-400 font-light">Aldess</span>
                    </div>
                </div>
                {/* Menu */}
                <ul className="flex flex-col gap-2 px-4 mt-4 menu w-full">
                    <li>
                        <Link
                            href="/admin-dashboard/analytics"
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                                pathname === '/admin-dashboard/analytics'
                                    ? 'bg-blue-500 text-white'
                                    : 'text-black dark:text-white'
                            }`}
                        >
                            <IconChartLine className="text-xl" /> Analytics
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/admin-dashboard/edit"
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                                pathname === '/admin-dashboard/edit'
                                    ? 'bg-blue-500 text-white'
                                    : 'text-black dark:text-white'
                            }`}
                        >
                            <IconEdit className="text-xl" /> Edit Page
                        </Link>
                    </li>
                </ul>
                <div className="flex-1" />
                <div className="flex flex-col gap-4 items-center mb-8 px-8">
                    <button className="flex items-center gap-2 w-full justify-center px-4 py-2 rounded-lg font-semibold  transition-transform btn btn-soft">
                        <IconLogout2 /> Sign out
                    </button>
                </div>
            </aside>
            {/* Blurred Colorful Backgrounds */}
            <div className="fixed -top-40 -left-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full opacity-30 blur-3xl pointer-events-none"></div>
            <div className="fixed top-1/2 -right-40 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full opacity-30 blur-3xl pointer-events-none"></div>
            <div className="fixed -bottom-40 left-1/3 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full opacity-30 blur-3xl pointer-events-none"></div>
            {/* Main content */}
            <main className="flex-1 ml-72 w-full h-full">{children}</main>
        </div>
    );
}