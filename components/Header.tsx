import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'عني' },
    { href: '#skills', label: 'المهارات' },
    { href: '#projects', label: 'المشاريع' },
    { href: '#contact', label: 'تواصل' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
      <nav className="container mx-auto flex items-center justify-between p-4 px-6 md:px-12 lg:px-20">
        <a href="#hero" className="text-2xl font-bold font-mono text-cyan-400">M</a>
        <div className="hidden md:flex items-center space-x-8 space-x-reverse">
          {navLinks.map((link, index) => (
            <a key={link.href} href={link.href} className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">
              <span className="font-mono text-cyan-400 mr-1">0{index + 1}.</span>
              {link.label}
            </a>
          ))}
        </div>
        {/* Mobile menu button can be added here */}
      </nav>
    </header>
  );
};
