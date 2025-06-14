import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, Terminal } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
  };

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  }, [router.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, []);

  const isActiveLink = (href: string) => {
    return router.pathname === href || router.asPath === href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cyber-black/90 backdrop-blur-md shadow-lg shadow-cyber-purple/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 text-2xl font-bold">
            <Terminal className="text-cyber-blue" size={32} />
            <span className="neon-text">Станчев SEO</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`nav-link ${isActiveLink('/') ? 'active' : ''}`}>
              Начало
            </Link>
            <Link href="/услуги" className={`nav-link ${isActiveLink('/услуги') ? 'active' : ''}`}>
              Услуги
            </Link>
            <Link href="/blog" className={`nav-link ${isActiveLink('/blog') ? 'active' : ''}`}>
              Блог
            </Link>
            <Link href="/за-мен" className={`nav-link ${isActiveLink('/за-мен') ? 'active' : ''}`}>
              За мен
            </Link>
            <Link href="/ресурси" className={`nav-link ${isActiveLink('/ресурси') ? 'active' : ''}`}>
              Ресурси
            </Link>
            <Link href="/контакти" className={`nav-link ${isActiveLink('/контакти') ? 'active' : ''}`}>
              Контакти
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-200 hover:text-white transition-colors z-50"
            aria-label={isOpen ? 'Затвори менюто' : 'Отвори менюто'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-cyber-dark/95 backdrop-blur-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
          <Link href="/" className="nav-link text-2xl" onClick={toggleMenu}>
            Начало
          </Link>
          <Link href="/услуги" className="nav-link text-2xl" onClick={toggleMenu}>
            Услуги
          </Link>
          <Link href="/blog" className="nav-link text-2xl" onClick={toggleMenu}>
            Блог
          </Link>
          <Link href="/за-мен" className="nav-link text-2xl" onClick={toggleMenu}>
            За мен
          </Link>
          <Link href="/ресурси" className="nav-link text-2xl" onClick={toggleMenu}>
            Ресурси
          </Link>
          <Link href="/контакти" className="nav-link text-2xl" onClick={toggleMenu}>
            Контакти
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;