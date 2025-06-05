'use client'

import { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import ProfileCard from '@/components/profilecard';
import ImageCard from '@/components/imagecard';
import ProjectCardSection from '@/components/projectcardsection';
import SkillCard from '@/components/skillcard';
import type { ProjectCardProps } from '@/components/projectcard'; 
import type { BadgeKey } from '@/components/badge'; 
import type { ProfileCardBadge } from '@/components/profilecard'; 

interface Profile {
  description: string;
  badges: ProfileCardBadge[];
}

interface Data {
  profile: Profile;
  images: { url: string; alt?: string }[]; 
  skills: BadgeKey[];
}

function Skeleton({ visible }: { visible: boolean }) {
  return (
    <div
      className={`
        w-full min-h-screen flex justify-center items-center flex-col
        transition-opacity duration-700
        ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
    >
      <div className="container mt-24 px-6 lg:mt-0 lg:px-0 z-10" id='home'>
        <div className="flex flex-col justify-center lg:flex-row gap-8">
          <div className="lg:w-1/4 w-full lg:mb-10 left-0 h-fit lg:sticky lg:top-28">
            <div className="rounded-2xl blbg p-6 animate-pulse flex justify-center items-center flex-col">
              <div className="w-25 px-10 pt-10 m-4 h-25 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
              <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4 my-0.5"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4 my-0.5"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4 my-0.5"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4 my-0.5"></div>
            </div>
          </div>
          <div className="xl:w-2/4 lg:mt-28 lg:w-2/3 w-full">
            <div className="w-full grid grid-cols-1 gap-2 lg:grid-cols-1">
              <div className="h-[400px] bg-gray-300 dark:bg-gray-700 rounded-2xl animate-pulse mb-4 "></div>
            </div>
            <div className="h-48 w-full bg-gray-200 dark:bg-gray-800 rounded-2xl animate-pulse my-4 blbg"></div>
            <div className="h-150 w-full bg-gray-200 dark:bg-gray-800 rounded-2xl animate-pulse my-4 blbg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(true);
  const [data, setData] = useState<Data | null>(null);
  const [projects, setProjects] = useState<ProjectCardProps[]>([]);

  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(json => setProjects(json));
  }, []);
  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(json => {
        setData(json);
        setFade(false); // Start skeleton fade out
        setTimeout(() => setLoading(false), 700); // Remove skeleton after fade
      });
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(
        null,
        document.title,
        window.location.pathname + window.location.search
      );
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col background-colors justify-center items-center">
      <Navbar />
      <main className="flex-1 w-full relative">
        {loading && <Skeleton visible={fade} />}
        {!loading && data && (
          <div
            className={`
              w-full min-h-screen flex justify-center items-center flex-col
              transition-opacity duration-700 opacity-100 z-10
            `}
          >
            <div className="container mt-24 px-6 lg:mt-0 lg:px-0 z-10" id='home'>
              <div className="flex flex-col justify-center lg:flex-row gap-8">
                <div className="lg:w-1/4 w-full lg:mb-10 left-0 h-fit lg:sticky lg:top-28">
                  <ProfileCard
                    description={data.profile.description}
                    badges={data.profile.badges}
                  />
                </div>
                <div className="xl:w-2/4 lg:mt-28 lg:w-2/3 w-full">
                  <div className="w-full grid grid-cols-1 gap-2 lg:grid-cols-1">
                    <ImageCard
                      title="Low Poly BMW M4"
                      description="A low poly car that I made in Blender"
                      images={data.images}
                    />
                  </div>
                  <SkillCard badges={data.skills} />
                  <ProjectCardSection projects={projects} />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <footer className="w-full flex justify-center items-center h-28 text-gray-600 dark:text-gray-400 z-10">
        &copy; 2025 @ aldesssc. All rights reserved.
      </footer>
      <div className="fixed -top-40 -left-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full opacity-30 blur-3xl"></div>
      <div className="fixed top-1/2 -right-40 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full opacity-30 blur-3xl"></div>
      <div className="fixed -bottom-40 left-1/3 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full opacity-30 blur-3xl"></div>
    </div>
  );
}