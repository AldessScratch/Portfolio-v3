'use client'

import { IconEye, IconUsers, IconClock } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const PERIODS = [
    { label: "Last 24 hours", value: "24h" },
    { label: "Last 7 days", value: "7d" },
    { label: "Last 30 days", value: "30d" },
];

interface StatsResponse {
    pageviews: {
        value: number;
        prev: number;
    };
    visitors: {
        value: number;
        prev: number;
    };
    visits: {
        value: number;
        prev: number;
    };
    bounces: {
        value: number;
        prev: number;
    };
    totaltime: {
        value: number;
        prev: number;
    };
}

interface AnalyticsData {
    statsData: StatsResponse;
    activeData: {
        visitors: number;
    };
}

function Skeleton() {
    return (
        <div className="h-9 bg-gray-300 dark:bg-gray-700 rounded w-10 animate-pulse"></div>
    )
}

export default function AdminAnalyticsPage() {
    const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
    const [period, setPeriod] = useState("24h");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`/api/umami?period=${period}`)
            .then(res => res.json())
            .then(data => {
                setAnalyticsData(data);
                setLoading(false)
            })
            .catch(() => setAnalyticsData(null));

    }, [period]); // <-- refetch when period changes

    function formatDuration(seconds: number) {
        if (!seconds) return "--";
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}m ${secs}s`;
    }
    return (

        <div className="w-full flex justify-start items-start flex-col">
            <div className="w-full flex justify-start items-start flex-col">
                <select
                    value={period}
                    onChange={e => setPeriod(e.target.value)}
                    className="select select-ghost text-lg my-5"
                >
                    {PERIODS.map(p => (
                        <option key={p.value} value={p.value}>{p.label}</option>
                    ))}
                </select>

                <div className='w-full flex justify-start items-start flex-wrap gap-5'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="w-70 h-40 blbg rounded-2xl flex justify-center items-center">
                            <div className="space-y-4 w-[80%]">
                                <div className="flex justify-between items-center ">
                                    {loading ? (
                                        <Skeleton />
                                    ) : (
                                        <h5 className="text-3xl font-bold">{analyticsData ? analyticsData.statsData.pageviews?.value : "--"}</h5>
                                    )}
                                    <div
                                        className="rounded-full h-10 w-10 flex justify-center items-center border-1 dark:border-gray-600 border-gray-300 dark:text-white text-black dark:hover:invert mx-1"
                                    >
                                        <IconEye className='h-4 w-4' />
                                    </div>
                                </div>
                                <p className="font-light text-lg">Views</p>

                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 1 * 0.08 }}
                    >
                        <div className="w-70 h-40 blbg rounded-2xl flex justify-center items-center">
                            <div className="space-y-4 w-[80%]">
                                <div className="flex justify-between items-center">
                                    {loading ? (
                                        <Skeleton />
                                    ) : (
                                        <h5 className="text-3xl font-bold">{analyticsData ? analyticsData.statsData.visitors?.value : "--"}</h5>
                                    )}
                                    <div
                                        className="rounded-full h-10 w-10 flex justify-center items-center border-1 dark:border-gray-600 border-gray-300 dark:text-white text-black dark:hover:invert mx-1"
                                    >
                                        <IconUsers className='h-4 w-4' />
                                    </div>
                                </div>
                                <p className="font-light text-lg">Visitors</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 2 * 0.08 }}
                    >
                        <div className="w-70 h-40 blbg rounded-2xl flex justify-center items-center">
                            <div className="space-y-4 w-[80%]">
                                <div className="flex justify-between items-center">
                                    {loading ? (
                                        <Skeleton />
                                    ) : (
                                        <h5 className="text-3xl font-bold"> {analyticsData && analyticsData.statsData.totaltime?.value && analyticsData.statsData.visits?.value
                                            ? formatDuration(Math.round(analyticsData.statsData.totaltime.value / analyticsData.statsData.visits.value))
                                            : "--"}</h5>
                                    )}
                                    <div
                                        className="rounded-full h-10 w-10 flex justify-center items-center border-1 dark:border-gray-600 border-gray-300 dark:text-white text-black dark:hover:invert mx-1"
                                    >
                                        <IconClock className='h-4 w-4' />
                                    </div>
                                </div>
                                <p className="font-light text-lg">Visit Duration</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 3 * 0.08 }}
                    >
                        <div className="w-70 h-40 blbg rounded-2xl flex justify-center items-center">
                            <div className="space-y-4 w-[80%]">
                                <div className="flex justify-between items-center">
                                    {loading ? (
                                        <Skeleton />
                                    ) : (
                                        <h5 className="text-3xl font-bold"> {analyticsData ? analyticsData.activeData.visitors : "--"}</h5>
                                    )}
                                    <div className="relative inline-flex">
                                        <div className="rounded-full bg-green-400 h-3 w-3 inline-block mr-2"></div>
                                        <div className="absolute animate-ping rounded-full bg-green-400 h-3 w-3 mr-2"></div>
                                    </div>
                                </div>
                                <p className="font-light text-lg">Current visitors</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>

    )
}

