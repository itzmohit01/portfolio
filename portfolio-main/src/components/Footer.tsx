import React, { useRef } from 'react';

const socials = [
  { name: 'GitHub', url: 'https://github.com/itzmohit01', icon: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.59 1.028 2.688 0 3.847-2.339 4.695-4.566 4.944.36.31.68.92.68 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" /></svg>
  ) },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mohitsharma099/', icon: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.79-1.75-1.75s.784-1.75 1.75-1.75 1.75.79 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z" /></svg>
  ) },
  { name: 'Twitter', url: '#', icon: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.247a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.21-.005-.423-.015-.633A9.936 9.936 0 0024 4.557z" /></svg>
  ) },
];

// Magnet effect for text
function useMagnetEffect() {
  const ref = useRef<HTMLSpanElement>(null);
  function handleMouseMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  }
  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate(0,0)';
  }
  return { ref, handleMouseMove, handleMouseLeave };
}

const Footer = () => {
  const magnet = useMagnetEffect();
  return (
    <footer className="w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 relative overflow-hidden py-10 px-4 flex flex-col items-center justify-center mt-8">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 w-2/3 h-32 bg-gradient-to-r from-blue-100/30 via-purple-100/20 to-pink-100/10 dark:from-blue-900/20 dark:via-purple-900/10 dark:to-pink-900/10 blur-2xl -translate-x-1/2" />
      </div>
      <span
        ref={magnet.ref}
        onMouseMove={magnet.handleMouseMove}
        onMouseLeave={magnet.handleMouseLeave}
        className="relative z-10 text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-transform duration-200 cursor-pointer select-none"
        style={{ display: 'inline-block' }}
      >
        Let's Connect & Collaborate
      </span>
      <div className="flex gap-6 mt-4 mb-6 z-10">
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            aria-label={s.name}
          >
            {s.icon}
          </a>
        ))}
      </div>
      <div className="z-10 text-gray-600 dark:text-gray-300 text-sm flex flex-col items-center gap-1">
        <span>Made with <span className="text-red-500 animate-pulse">❤️</span> by Mohit Sharma</span>
        <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer; 
