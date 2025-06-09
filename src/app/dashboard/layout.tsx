'use client'

import { IconChartLine, IconEdit } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SignOutButton from "@/components/dashboard/signoutbutton";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    return (
        <div className="relative w-full h-screen flex items-center justify-center background-colors">
            <aside className="fixed left-0 top-0 flex flex-col w-64 h-screen rounded-r-2xl blbg z-50">
                {/* Logo & Title */}
                <div className="flex items-center gap-3 mt-10 mb-8 px-8">
                    <Image src="/logo.png" width={40} height={40} className="rounded-full shadow" alt="Logo" />
                    <div className="ml-2 text flex flex-col justify-center items-start">
                        <h2 className="text-2xl font-bold text-black dark:text-white">Dashboard</h2>
                        <span className="text-xs text-gray-600 dark:text-gray-400 font-light">Aldess</span>
                    </div>
                </div>
                {/* Menu */}
                <ul className="flex flex-col gap-2 px-4 mt-4 menu w-full">
                    <li>
                        <Link
                            href="/dashboard/analytics"
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${pathname === '/dashboard/analytics'
                                    ? 'bg-blue-500 text-white'
                                    : 'text-black dark:text-white'
                                }`}
                        >
                            <IconChartLine className="text-xl" /> Analytics
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/dashboard/edit"
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${pathname === '/dashboard/edit'
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
                    <SignOutButton />
                </div>
            </aside>
            {/* Blurred Colorful Backgrounds */}
            <div className="fixed -top-40 -left-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full opacity-30 blur-3xl pointer-events-none"></div>
            <div className="fixed top-1/2 -right-40 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full opacity-30 blur-3xl pointer-events-none"></div>
            <div className="fixed -bottom-40 left-1/3 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full opacity-30 blur-3xl pointer-events-none"></div>
            {/* Main content */}
            <main className="flex-1 ml-72 w-full h-screen">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                ><h1 className="text-3xl font-semibold m-10">Welcome back, Aldess</h1></motion.div>
                <div className='mx-10'>
                    {children}
                </div>
            </main>
        </div>
    );
}