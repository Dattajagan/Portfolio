'use client';

import { useEffect, useState } from 'react';

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') setDarkMode(false);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="transition-colors duration-500 bg-white text-black dark:bg-[#0b0a1f] dark:text-white min-h-screen">
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300"
        >
          {darkMode ? 'Light Mode ' : 'Dark Mode '}
        </button>
      </div>
      {children}
    </div>
  );
}
