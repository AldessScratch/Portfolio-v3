'use client'

import { useEffect, useRef } from "react";
import Viewer from "viewerjs";
import "viewerjs/dist/viewer.css";
import Image from 'next/image';

export interface ImageCardProps {
  title: string;
  description: string;
  images: { url: string; alt?: string }[];
}

export default function ImageCard(props: ImageCardProps) {
    const galleryRef = useRef<HTMLDivElement>(null);
    
      useEffect(() => {
        if (galleryRef.current) {
          const viewer = new Viewer(galleryRef.current, {
            // options here
          });
          return () => { viewer.destroy(); };
        }
      }, []);
    return(
        <div className="card w-auto shadow-sm rounded-2xl backdrop-blur-lg text-white dark:bg-black/80 bg-white/50  dark:border-gray-700 h-[400px]" ref={galleryRef}>
            <figure className="relative w-full h-full md:h-[400px] overflow-hidden rounded-2xl">
              {props.images.map((img, idx) => (
                <Image
                  key={img.url}
                  src={img.url}
                  alt={img.alt || "Missing Image Alt"}
                  fill
                  className={`rounded-2xl object-cover ${idx === 0 ? '' : 'hidden'} cursor-pointer transform transition-transform duration-500 hover:scale-110`}
                  sizes="(max-width: 1000px) 100vw, 400px"
                  priority={idx === 0}
                />
              ))}
          </figure>
            <div className="card-body absolute bottom-0 p-10">
                <h2 className="card-title text-shadow-lg text-3xl">{props.title}</h2>
                <p className="text-shadow-lg">{props.description}</p>
            </div>
        </div>
    )
}