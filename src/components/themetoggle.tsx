'use client'

import { IconSun, IconMoon } from '@tabler/icons-react';
import { useState, useEffect } from 'react';
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // When mounted on client, set mounted to true to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid rendering on server

  // Determine current theme (light or dark)
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <label className="swap swap-rotate btn btn-ghost btn-circle h-7 w-7 m-1">
      {/* this hidden checkbox controls the state */}
      <input 
      type="checkbox" 
      className="theme-controller" 
      value="synthwave"
      checked={currentTheme === "light"}
      onChange={() => setTheme(currentTheme === "dark" ? "light" : "dark")} />

      {/* sun icon */}
      <IconSun className='swap-off h-5 w-5' />
      <IconMoon className='swap-on h-5 w-5' />
    </label>
    
    
  );
}