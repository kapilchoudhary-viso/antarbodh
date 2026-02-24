import React, { useState, useEffect } from 'react';
import { Menu, X, HeartHandshake } from 'lucide-react';

interface HeaderProps {
  onOpenContact: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'About',         href: '#about' },
    { name: 'Services',      href: '#services' },
    { name: 'Wellness Club', href: '#wellness-club' },
    { name: 'Contact',       href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const ids = ['about', 'services', 'wellness-club', 'contact'];
      const scrollPos = window.scrollY + 120;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsSidebarOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <>
      {/* ── Top Bar ── */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-100 shadow-soft z-50 flex items-center px-5 md:px-8 gap-4">

        {/* Hamburger */}
        <button
          className="text-gray-500 hover:text-brand-primary p-2 hover:bg-gray-100 rounded-xl transition-colors cursor-pointer flex-shrink-0"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label="Toggle navigation"
        >
          {isSidebarOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Logo */}
        <div className="flex items-center gap-3">
          <HeartHandshake className="text-brand-primary flex-shrink-0" size={32} />
          <div className="flex flex-col">
            <span className="text-[1.4rem] font-bold tracking-tight leading-none font-sans">
              <span className="text-red-600">Vision</span><span className="text-brand-primary">Care</span>
            </span>
            <span className="text-[1.1rem] font-script text-brand-accent leading-none mt-0.5">
              Antarbodh
            </span>
          </div>
        </div>
      </header>

      {/* ── Backdrop ── */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-[3px] z-40 transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* ── Sliding Sidebar ── */}
      <aside
        style={{ background: 'linear-gradient(160deg, #dde6f4 0%, #e8eef8 60%, #edf1f8 100%)', borderRight: '1px solid rgba(30,58,138,0.1)' }}
        className={`fixed left-0 top-16 h-[calc(100vh-64px)] w-[240px] z-50 flex flex-col transition-transform duration-300 ease-in-out shadow-xl ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Top accent bar */}
        <div className="h-[3px] w-full" style={{ background: 'linear-gradient(90deg, #1e3a8a, #3b82f6, transparent)' }}></div>

        {/* Brand mini-header inside sidebar */}
        <div className="px-5 pt-5 pb-4" style={{ borderBottom: '1px solid rgba(30,58,138,0.08)' }}>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: '#3b82f6' }}>Navigation</p>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-1 px-3 py-4 flex-1">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <a
                key={link.name}
                href={link.href}
                style={isActive
                  ? { background: 'rgba(30,58,138,0.1)', color: '#1e3a8a' }
                  : {}}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group ${
                  isActive ? 'font-semibold' : ''
                }`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <span
                  style={isActive
                    ? { background: '#1e3a8a', transform: 'scale(1.3)' }
                    : { background: 'rgba(30,58,138,0.25)' }}
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300"
                ></span>
                <span
                  style={isActive ? { color: '#1e3a8a' } : { color: '#475569' }}
                  className="transition-colors duration-200 group-hover:text-brand-primary"
                >
                  {link.name}
                </span>
              </a>
            );
          })}
        </nav>

        {/* Bottom watermark */}
        <div className="px-5 pb-6 pt-4" style={{ borderTop: '1px solid rgba(30,58,138,0.07)' }}>
          <p className="text-[10px] text-center font-semibold" style={{ color: '#1e3a8a' }}>VisionCare · Antarbodh</p>
        </div>
      </aside>
    </>
  );
};

export default Header;
