import ThemeToggle from "@/components/themetoggle"
import { IconLogout2, IconHome, IconChartLine, IconEdit } from '@tabler/icons-react';

export default function AdminDashboard() {
    return (
        <div className="relative w-full h-screen flex items-center justify-center background-colors">
             <div className="ease-in-out py-1 bg-transparent fixed transition-all duration-200 z-100 flex justify-center items-center dark:text-white dark:border-gray-700 rounded-full top-6 max-h-fit w-12 blbg">
                  <div className="flex justify-center items-center flex-col">
                    <ul className="menu menu-vertical px-1 text-base p-0 m-0">
                        <li>
                          <a
                            href={`#`}
                            className="btn btn-ghost btn-circle h-7 w-7 m-1 text-blue-500"
                          >
                            <IconHome />
                          </a>
                        </li>
                        <li>
                          <a
                            href={`#`}
                            className="btn btn-ghost btn-circle h-7 w-7 m-1"
                          >
                            <IconChartLine />
                          </a>
                        </li>
                        <li>
                          <a
                            href={`#`}
                            className="btn btn-ghost btn-circle h-7 w-7 m-1"
                          >
                            <IconEdit />
                          </a>
                        </li>
                        <li>
                          <a
                            href={`#`}
                            className="btn btn-ghost btn-circle h-7 w-7 m-1"
                          >
                            <IconLogout2 />
                          </a>
                        </li>
                    </ul>
                    <ThemeToggle />
                  </div>
                </div>
            <aside className="fixed left-0 top-0 m-8 flex flex-col w-64 h-[calc(100%-4rem)] rounded-2xl blbg z-50">
                {/* Logo & Title */}
                <div className="flex items-center gap-3 mt-10 mb-8 px-8">
                    <img src="/logo.png" className="rounded-full h-10 w-10 shadow" alt="Logo" />
                    <div className="ml-2">
                        <h2 className="text-2xl font-bold text-black dark:text-white">Dashboard</h2>
                        <span className="text-xs text-gray-600 dark:text-gray-400 font-light">Aldess</span>
                    </div>
                </div>
                {/* Menu */}
                <ul className="flex flex-col gap-2 px-4 mt-4 menu w-full">
                    <li>
                        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-black dark:text-white font-medium transition-all hover:bg-white/40 dark:hover:bg-gray-800/40 focus:bg-white/60 dark:focus:bg-gray-700/60">
                            <IconHome className="text-xl" /> Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-black dark:text-white font-medium transition-all hover:bg-white/40 dark:hover:bg-gray-800/40 focus:bg-white/60 dark:focus:bg-gray-700/60">
                            <IconChartLine className="text-xl" /> Analytics
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-black dark:text-white font-medium transition-all hover:bg-white/40 dark:hover:bg-gray-800/40 focus:bg-white/60 dark:focus:bg-gray-700/60">
                            <IconEdit className="text-xl" /> Edit Page
                        </a>
                    </li>
                </ul>
                {/* Spacer */}
                <div className="flex-1" />
                {/* Theme Toggle & Sign Out */}
                <div className="flex flex-col gap-4 items-center mb-8 px-8">
                    <div className="flex items-center gap-2 w-full">
                        <ThemeToggle />
                        <span className="text-sm text-black dark:text-white">Switch Theme</span>
                    </div>
                    <button className="flex items-center gap-2 w-full justify-center px-4 py-2 rounded-lg bg-black text-white font-semibold shadow hover:scale-105 transition-transform">
                        <IconLogout2 /> Sign out
                    </button>
                </div>
            </aside>
            {/* Blurred Colorful Backgrounds */}
            <div className="fixed -top-40 -left-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full opacity-30 blur-3xl pointer-events-none"></div>
            <div className="fixed top-1/2 -right-40 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full opacity-30 blur-3xl pointer-events-none"></div>
            <div className="fixed -bottom-40 left-1/3 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full opacity-30 blur-3xl pointer-events-none"></div>
        </div>
    )
}