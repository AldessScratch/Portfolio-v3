'use client'

import Image from 'next/image';
import Badge, { BadgeKey } from './badge';

export interface ProfileCardBadge {
  badge: BadgeKey;
  link?: string;
}

interface ProfileCardProps {
  description: string;
  badges?: ProfileCardBadge[];
}

export default function ProfileCard(props: ProfileCardProps) {
    return (
        <div className="
        card w-full sticky blbg rounded-2xl">
            <figure className="px-10 pt-10">
                <Image
                    src="/logo.png"
                    width={100}
                    height={100}
                    alt="aldess-profile-logo"
                    className="rounded-full shadow-lg m-4" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl">Aldess</h2>
                <h2 className="card-title text-xl text-gray-600 dark:text-gray-400 font-light">Full Stack developper (soon)</h2>
                <p className='my-5'>{props.description || "Missing Description"}</p>
                <div className="w-full m-3">
                    {props.badges && props.badges.map((b, i) => (
                        <Badge key={i} badge={b.badge} link={b.link} />
                    ))}
                </div>
            </div>
        </div>
    )
}