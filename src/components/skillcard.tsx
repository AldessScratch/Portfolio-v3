'use client'

import { IconCode } from '@tabler/icons-react';
import Badge, { BadgeKey } from './badge'; // Import BadgeKey

interface SkillCardProps {
  badges: BadgeKey[]; // Use BadgeKey[] instead of string[]
}


export default function SkillCard({ badges }: SkillCardProps) {
  return (
    <div className="w-full h-auto my-4 rounded-2xl blbg" id='skill'>
      <div className="pt-8 px-10">
        <div className="flex justify-left items-center ">
          <IconCode />
          <h2 className="card-title text-shadow-xl text-3xl pl-2">Skills</h2>
        </div>
        <p className='font-light text-gray-600 dark:text-gray-400 my-2'>Tools and technologies I work with</p>
      </div>
      <div className="card-body items-center text-center">
        <div className="flex flex-wrap justify-center">
          {badges.map((badge) => (
            <Badge key={badge} badge={badge} />
          ))}
        </div>
      </div>
    </div>
  );
}