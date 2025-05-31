'use client'
import { useState, useEffect } from 'react';
import ThemeToggle from './themetoggle';

export default function Navbar() {
   const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scroll position is greater than 0 (or any threshold, e.g., 50)
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // <-- Check scroll position on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={`ease-in-out max-w-fit h-12 top-2 px-4 bg-transparent fixed transition-all duration-200 z-100 flex justify-center items-center dark:text-white dark:border-gray-700 ${
      scrolled
        ? 'rounded-full top-5 h-12 blbg'
        : ''
    }`}>
  <div className="flex justify-center items-center">
    <ul className="menu menu-horizontal px-1 text-base p-0 m-0">
      <li><a href='#home' className='rounded-full'>Home</a></li>
      <li><a href='#projects' className='rounded-full'>Projects</a></li>
      <li><a href='#skill' className='rounded-full'>Skills</a></li>
    </ul>
    <ThemeToggle />
  </div>
</div>
  );
}