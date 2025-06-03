'use client'

import { useEffect, useRef } from "react";
import Viewer from "viewerjs";
import "viewerjs/dist/viewer.css";
import Image from 'next/image';

interface ImageCardProps {
  imageUrl: string;
  imageAlt?: string;
  title: string;
  description: string;
}


export default function ImageCard(props: ImageCardProps) {
    const galleryRef = useRef(null);
    
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
            <figure className="relative w-full h-full md:h-[400px] overflow-hidden">
              <Image
                  src={props.imageUrl}
                  alt={props.imageAlt || "Missing Image Alt"}
                  fill
                  className="rounded-2xl object-cover"
                  sizes="(max-width: 1000px) 100vw, 400px"
                  priority={true}
              />
          </figure>
            <div className="card-body absolute bottom-0 p-10">
                <h2 className="card-title text-shadow-lg text-3xl">{props.title}</h2>
                <p className="text-shadow-lg">{props.description}</p>
            </div>
        </div>
    )
}