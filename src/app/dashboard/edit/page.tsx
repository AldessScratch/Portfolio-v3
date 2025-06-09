'use client'

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { IconAlignJustified } from '@tabler/icons-react'
import type { ProfileCardProps } from '@/components/profilecard'

function InputSkeleton() {
    return (
        <div className="h-10 bg-gray-200 dark:bg-gray-800 rounded-lg w-full my-2 animate-pulse"></div>
    )
}

function TextInputSkeleton() {
    return (
        <div className='h-40 my-2'>
            <div className="h-7 bg-gray-200 dark:bg-gray-800 rounded-lg w-full my-1 animate-pulse"></div>
            <div className="h-7 bg-gray-200 dark:bg-gray-800 rounded-lg w-full my-1 animate-pulse"></div>
            <div className="h-7 bg-gray-200 dark:bg-gray-800 rounded-lg w-full my-1 animate-pulse"></div>
            <div className="h-7 bg-gray-200 dark:bg-gray-800 rounded-lg w-full my-1 animate-pulse"></div>
            <div className="h-7 bg-gray-200 dark:bg-gray-800 rounded-lg w-full my-1 animate-pulse"></div>
        </div>
    )
}


export default function AdminEditPage() {
    const [editData, setEditData] = useState<Partial<ProfileCardProps>>({
        description: '',
        subtext: ''
    });
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        fetch('/api/data')
            .then(res => res.json())
            .then(json => {
                setEditData(json.profile); // Set the data state
                setTimeout(() => setLoading(false), 700)

            });
    }, []);

    const refetchData = async () => {
        try {
            const response = await fetch('/api/data');
            const data = await response.json();
            setEditData(data.profile);
            setLoading(false);
        } catch (error) {
            console.error('Error refetching data:', error);
            setLoading(false);
        }
    };

    const handleUpdate = async () => {
        try {
            setLoading(true);
            const response = await fetch('/api/data');
            const currentData = await response.json();

            if (!editData) {
                throw new Error('No data to update');
            }

            const updatedData = {
                ...currentData,
                profile: {
                    ...currentData.profile,
                    ...editData
                }
            };

            const updateResponse = await fetch('/api/data', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData)
            });

            if (!updateResponse.ok) {
                throw new Error('Failed to update data');
            }

            await refetchData();
            setSuccess(true);

            // Reset success state after 2 seconds
            setTimeout(() => {
                setSuccess(false);
            }, 2000);
        } catch (error) {
            console.error('Error updating data:', error);
            setLoading(false);
        }
    };

    return (
        <div className="w-full">
            <div className="flex md:justify-left justify-center w-full md:w-fit">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1 * 0.08 }}
                >
                    <div className="flex flex-col blbg md:w-100 max-w-100 h-auto rounded-2xl">
                        <div className="m-10">
                            <h2 className="text-2xl font-semibold">Profile</h2>
                            <fieldset className="my-2">
                                <h5 className="text-md font-normal text-gray-600 dark:text-gray-400">Sub Text</h5>
                                {loading ? (
                                    <InputSkeleton />
                                ) : (
                                    editData ? (
                                        <label className="input rounded-lg my-2">
                                            <IconAlignJustified />

                                            <input type="text"
                                                className="grow"
                                                onChange={(e) => setEditData(prev => ({ ...prev, subtext: e.target.value }))}
                                                value={editData.subtext || ''}
                                            />

                                        </label>
                                    ) : null
                                )}
                            </fieldset>
                            <fieldset className="my-2">
                                <h5 className="text-md font-normal text-gray-600 dark:text-gray-400">Description</h5>
                                {loading ? (
                                    <TextInputSkeleton />
                                ) : (
                                    editData ? (
                                        <textarea
                                            className='my-2 textarea rounded-xl resize-none h-40'
                                            value={editData.description || ''}
                                            onChange={(e) => setEditData(prev => ({ ...prev, description: e.target.value }))}
                                        ></textarea>
                                    ) : null
                                )}
                            </fieldset>
                            <button className='btn btn-soft' onClick={handleUpdate}>Update</button>
                            {success && (
                                <div className="text-green-500 text-sm my-2 font-normal">Updated successfully!</div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div >
    )
}