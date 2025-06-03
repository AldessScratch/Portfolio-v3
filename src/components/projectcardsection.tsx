import ProjectCard from './projectcard';
import { IconBox } from '@tabler/icons-react';
import type { ProjectCardProps } from './projectcard'; 

interface ProjectCardSectionProps {
  projects: ProjectCardProps[];
}

export default function ProjectCardSection({ projects }: ProjectCardSectionProps) {
    return(
        <div className="w-full h-auto my-4 rounded-2xl blbg" id='projects'>
            <div className="pt-8 px-10">
                <div className="flex justify-left items-center ">
                    <IconBox />
                    <h2 className="card-title text-shadow-xl text-3xl pl-2">Projects</h2>
                </div>
                <p className='font-light text-gray-600 dark:text-gray-400 my-2'>Websites and applications I have built</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
                {projects.map((project, idx) => (
                    <ProjectCard key={idx} {...project} />
                ))}
            </div>
        </div>
    )
}