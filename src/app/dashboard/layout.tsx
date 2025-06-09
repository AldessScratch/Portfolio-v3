'use client'

import { IconChartLine, IconEdit, IconExternalLink } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SignOutButton from "@/components/dashboard/signoutbutton";
import Image from 'next/image';
import { motion } from 'framer-motion';
import ThemeToggle from '@/components/themetoggle'

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    return (
        <div className="relative w-full min-h-screen flex items-center justify-center background-colors pb-40 md:pb-0">
            <aside className="fixed md:left-0 md:top-0 bottom-4 flex md:flex-col max-w-fit md:w-64 h-12 md:h-screen rounded-full md:rounded md:rounded-r-2xl blbg z-50">
                {/* Logo & Title */}
                <a href="/" target='_blank'>
                    <div className="md:flex items-center gap-3 mt-10 mb-8 px-8 hidden">
                        <Image src="/logo.png" width={40} height={40} className="rounded-full shadow" alt="Logo" />
                        <div className="ml-2 text flex flex-col justify-center items-start">
                            <h2 className="text-2xl font-bold text-black dark:text-white">Dashboard</h2>
                            <span className="text-xs text-gray-600 dark:text-gray-400 font-light">Aldess</span>
                        </div>
                    </div>
                </a>
                {/* Menu */}
                <ul className="flex justify-center items-center md:flex-col gap-0 md:gap-2 px-1 md:px-4 md:mt-4 menu md:w-full">
                    <li>
                        <a target='_blank'
                            href="/"
                            className="flex items-center md:gap-3 md:px-4 md:py-3 p-2 m-0 md:w-54 md:rounded-lg rounded-full font-medium md:btn md:btn-soft"
                        >
                            <IconExternalLink className="md:text-xl text-lg" /> <span className="md:flex hidden">Open Portfolio</span>
                        </a>
                    </li>
                    <hr/>
                    <li>
                        <Link
                            href="/dashboard/analytics"
                            className={`flex items-center md:gap-3 md:px-4 md:py-3 p-2 m-0 md:w-54 md:rounded-lg rounded-full font-medium transition-all ${pathname === '/dashboard/analytics'
                                ? 'md:bg-blue-500 md:text-white text-blue-500'
                                : 'text-black dark:text-white'
                                }`}
                        >
                            <IconChartLine className="md:text-xl text-lg" /> <span className="md:flex hidden">Analytics</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/dashboard/edit"
                            className={`flex items-center md:gap-3 md:px-4 md:py-3 p-2 m-0 md:w-54 md:rounded-lg rounded-full font-medium transition-all ${pathname === '/dashboard/edit'
                                ? 'md:bg-blue-500 md:text-white text-blue-500'
                                : 'text-black dark:text-white'
                                }`}
                        >
                            <IconEdit className="text-xl" /> <span className="md:flex hidden">Edit Page</span>
                        </Link>
                    </li>
                </ul>
                <div className="md:flex-1" />
                <div className="flex justify-center md:gap-4 items-center md:mb-8 md:px-8 p-2 m-0">
                    <SignOutButton />
                    <div className="flex md:btn md:btn-soft rounded-lg">
                        <ThemeToggle />
                    </div>
                </div>
            </aside>
            {/* Blurred Colorful Backgrounds */}
            <div className="fixed -top-40 -left-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full opacity-30 blur-3xl pointer-events-none"></div>
            <div className="fixed top-1/2 -right-40 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full opacity-30 blur-3xl pointer-events-none"></div>
            <div className="fixed -bottom-40 left-1/3 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full opacity-30 blur-3xl pointer-events-none"></div>
            {/* Main content */}
            <main className="flex-1 md:ml-72 w-full h-screen z-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                ><h1 className="text-3xl font-semibold m-10 flex justify-left gap-4 items-center dark:text-white">Welcome back, Aldess</h1></motion.div>
                <div className='mx-10'>
                    {children}
                </div>
            </main>
        </div>
    );
}