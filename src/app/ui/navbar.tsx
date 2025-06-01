'use client'
import { useState, useEffect } from 'react';
import ThemeToggle from './themetoggle';

const sections = [
  { id: 'home', label: 'Home' },  
  { id: 'skill', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    let current = 'home';
    let minDistance = Number.POSITIVE_INFINITY;
    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - 80);
        if (rect.top <= 80 && distance < minDistance) {
          minDistance = distance;
          current = section.id;
        }
      }
    }
    setActiveSection(current);
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <div className={`ease-in-out max-w-fit h-12 top-2 px-1 bg-transparent fixed transition-all duration-200 z-100 flex justify-center items-center dark:text-white dark:border-gray-700 ${
      scrolled ? 'rounded-full top-5 h-12 blbg' : ''
    }`}>
      <div className="flex justify-center items-center">
        <ul className="menu menu-horizontal px-1 text-base p-0 m-0">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`rounded-full ${activeSection === section.id ? 'dark:text-blue-500' : ''}`}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>
    </div>
  );
}