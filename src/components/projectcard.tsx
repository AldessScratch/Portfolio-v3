'use client'

import Badge, { BadgeKey } from './badge';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { useEffect, useRef } from "react";
import Viewer from "viewerjs";
import "viewerjs/dist/viewer.css";
import Image from 'next/image';


interface ProjectCardBadge {
  badge: BadgeKey;
  link?: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string; // optional if images is provided
  images?: string[]; // optional, supports multiple images
  imageAlt?: string;
  badges: (ProjectCardBadge | BadgeKey)[];
  link?: string;
  github?: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  const galleryRef = useRef(null);

  useEffect(() => {
    if (galleryRef.current) {
      const viewer = new Viewer(galleryRef.current, {
        // options here
      });
      return () => { viewer.destroy(); };
    }
  }, []);
  const images = Array.isArray(props.images) && props.images.length > 0
    ? props.images
    : props.imageUrl
      ? [props.imageUrl]
      : [];

  return (
    <div ref={galleryRef} className="card rounded-2xl border-1 backdrop-blur-lg shadow-lg text-black bg-transparent dark:text-white dark:border-gray-700 border-transparent h-[430px] sm:h-[390px] transform transition-all duration-300 hover:shadow-2xl dark:hover:border-white hover:scale-103">
      <figure className="relative w-full h-[150px] min-h-[150px] overflow-hidden shadow-sm">
        {images.map((img, idx) => (
          <Image
            key={img + idx}
            src={img}
            alt={`Project image ${idx + 1}`}
            fill
            className={`object-cover w-full min-h-[150px] ${idx !== 0 ? 'hidden' : ''} transform transition-transform duration-500 hover:scale-110`}
            sizes="(max-width: 768px) 100vw, 400px"
            priority={false}
          />
        ))}
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center pb-4">
          <h2 className="card-title text-xl">{props.title || "Missing Title"}</h2>
          <div className="flex">
            {props.link && (
              <a
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle border-1 dark:border-gray-600 border-gray-300 dark:text-white text-black dark:hover:invert mx-1"
              >
                <IconExternalLink className='h-4 w-4' />
              </a>
            )}
            {props.github && (
              <a
                href={props.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle border-1 dark:border-gray-600 border-gray-300 dark:text-white text-black dark:hover:invert mx-1"
              >
                <IconBrandGithub className='h-4 w-4' />
              </a>
            )}
          </div>
        </div>
        <p className='h-auto mb-0'>{props.description || "Missing Description"}</p>
        <div className="flex mt-0 flex-wrap">
          {props.badges && props.badges.map((b, idx) => {
            if (typeof b === "string") {
              return <Badge key={b + idx} badge={b} />;
            } else {
              return <Badge key={b.badge + idx} badge={b.badge} link={b.link} />;
            }
          })}
        </div>
        <div className="card-actions grid mt-4">

        </div>
      </div>
    </div>
  )
}