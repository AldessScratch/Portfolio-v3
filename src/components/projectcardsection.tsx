import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { IconBox } from '@tabler/icons-react';
import type { ProjectCardProps } from './projectcard'; 
import { motion } from 'framer-motion'; // <-- Add this import

const ProjectCard = lazy(() => import('./projectcard'));

interface ProjectCardSectionProps {
  projects: ProjectCardProps[];
}

export default function ProjectCardSection({ projects }: ProjectCardSectionProps) {
  const [visibleCount, setVisibleCount] = useState(4); // Show 4 projects initially
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!loaderRef.current) return;
      const rect = loaderRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        setVisibleCount((prev) => Math.min(prev + 4, projects.length));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [projects.length]);

  return (
    <div className="w-full h-auto my-4 rounded-2xl blbg" id='projects'>
      <div className="pt-8 px-10">
        <div className="flex justify-left items-center ">
          <IconBox />
          <h2 className="card-title text-shadow-xl text-3xl pl-2">Projects</h2>
        </div>
        <p className='font-light text-gray-600 dark:text-gray-400 my-2'>Websites and applications I have built</p>
      </div>
      <Suspense fallback={<div className="min-h-150 flex justify-center items-start pt-24"><span className="loading loading-ring loading-xl"></span></div>}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
          {projects.slice(0, visibleCount).map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
                <ProjectCard key={idx} {...project} />
            </motion.div>
          ))}
        </div>
        {visibleCount < projects.length && (
          <div ref={loaderRef} className="flex justify-center">
            <span className="loading loading-ring loading-lg"></span>
          </div>
        )}
      </Suspense>
    </div>
  );
}