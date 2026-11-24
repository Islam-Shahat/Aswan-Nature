import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, ArrowRight, Menu, X } from 'lucide-react';

export const Header = ({
  onBookClick,
  currentLang = 'EN',
  onToggleLang,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const location = useLocation();
  const lastProgressRef = useRef(-1);

  const isHome = location.pathname === '/';
  // On all subpages, the navbar is ALWAYS clearly solid, high-contrast, and fully legible
  const effectiveScrolled = !isHome || isScrolled;
  const effectiveProgress = isHome ? scrollProgress : 1;

  // Track scroll state to smoothly transition background on home page
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          const rawProgress = Math.min(Math.max((y - 20) / 240, 0), 1);
          const progress = Math.round(rawProgress * 100) / 100;

          if (Math.abs(progress - lastProgressRef.current) >= 0.02 || (progress === 0 && lastProgressRef.current !== 0) || (progress === 1 && lastProgressRef.current !== 1)) {
            lastProgressRef.current = progress;
            setScrollProgress(progress);
            setIsScrolled(progress >= 0.45);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: currentLang === 'AR' ? 'الرئيسية' : 'Home', path: '/' },
    { label: currentLang === 'AR' ? 'جولاتنا' : 'Our Tours', path: '/tours' },
    { label: currentLang === 'AR' ? 'طيور الفراعنة حية' : 'Pharaohs Birds Alive', path: '/pharaohs' },
    { label: currentLang === 'AR' ? 'معسكرات التعلم' : 'Learning Camps', path: '/camps' },
    { label: currentLang === 'AR' ? 'معرض الصور' : 'Gallery', path: '/gallery' },
    { label: currentLang === 'AR' ? 'من نحن' : 'About Us', path: '/about' },
    { label: currentLang === 'AR' ? 'تواصل معنا' : 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-2 sm:top-4 inset-x-0 z-50 px-2 sm:px-4 lg:px-6 flex justify-center pointer-events-none transition-all duration-300">
      {/* Floating Pill Island Navbar */}
      <div className="pointer-events-auto relative w-full max-w-[1620px] h-16 sm:h-[72px] px-5 sm:px-8 lg:px-10 rounded-full flex items-center justify-between">
        {/* Transparent Glass Background Layer (only on home page when not scrolled) */}
        <div
          className="absolute inset-0 rounded-full bg-white/15 backdrop-blur-md border border-white/30 shadow-[0_4px_24px_rgba(0,0,0,0.04)] pointer-events-none transition-opacity duration-200 ease-out"
          style={{ opacity: isHome ? 1 - effectiveProgress : 0 }}
        />

        {/* Solid White High-Contrast Scrolled Background Layer */}
        <div
          className="absolute inset-0 rounded-full bg-white/95 backdrop-blur-xl border border-[#DDE5D7] shadow-[0_10px_35px_-5px_rgba(20,40,25,0.09)] pointer-events-none transition-opacity duration-200 ease-out"
          style={{ opacity: effectiveProgress }}
        />

        {/* Brand Logo */}
        <Link to="/" className="relative z-10 flex items-center gap-3 sm:gap-4 group flex-shrink-0">
          <img
            src="/assets/logo-official.png"
            alt="Aswan Nature Logo"
            className="w-9 h-9 sm:w-10 sm:h-10 object-contain group-hover:scale-105 transition-transform drop-shadow-xs"
          />
          <span
            dir="ltr"
            className={`text-lg sm:text-xl tracking-tight font-medium flex items-baseline transition-all duration-300 ease-out ${
              effectiveScrolled ? 'text-[#16241B]' : 'text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]'
            }`}
          >
            aswan
            <span
              className={`font-bold transition-all duration-300 ease-out ${
                effectiveScrolled ? 'text-[#13231B]' : 'text-white'
              }`}
            >
              nature<span className="text-[#2BE019]">.</span>
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="relative z-10 hidden xl:flex items-center gap-1 2xl:gap-2 text-[14.5px] font-medium mx-2"
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const isActive = item.path === '/'
              ? location.pathname === '/'
              : location.pathname.startsWith(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-full transition-all duration-300 ease-out whitespace-nowrap text-[14.5px] ${
                  effectiveScrolled
                    ? isActive
                      ? 'font-bold text-[#112417] bg-[#E5F3E1] shadow-xs'
                      : 'text-[#2C3E32] font-semibold hover:text-[#112417] hover:bg-[#EEF4EB]'
                    : isActive
                      ? 'font-bold text-white bg-white/20 shadow-xs'
                      : 'text-white hover:text-white hover:bg-white/15 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]'
                }`}
              >
                {item.label}
                {/* Luminous Green Active Underline Bar */}
                {isActive && (
                  <span className="absolute -bottom-1 inset-x-2.5 h-[3.5px] rounded-full bg-[#2BE019] shadow-[0_0_10px_#2BE019]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="relative z-10 flex items-center gap-2.5 sm:gap-4 flex-shrink-0">
          {/* Instant Language Toggle (Globe Icon Only - Transparent, No Circle, 60deg Hover Rotation) */}
          <button
            onClick={() => onToggleLang && onToggleLang(currentLang === 'EN' ? 'AR' : 'EN')}
            className="group p-1.5 sm:p-2 bg-transparent border-0 shadow-none outline-none cursor-pointer flex items-center justify-center active:scale-90"
            aria-label={currentLang === 'EN' ? 'التبديل إلى العربية' : 'Switch to English'}
            title={currentLang === 'EN' ? 'العربية' : 'English'}
          >
            <Globe
              className={`w-5 h-5 sm:w-[22px] sm:h-[22px] transition-all duration-500 ease-out group-hover:rotate-[60deg] group-hover:scale-110 ${
                effectiveScrolled
                  ? 'text-[#1D3222] group-hover:text-[#21c715]'
                  : 'text-white/95 group-hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]'
              }`}
            />
          </button>

          {/* Book CTA Pill Button */}
          <button
            onClick={onBookClick}
            className="hidden sm:inline-flex items-center gap-2 bg-[#21c715] hover:bg-[#1cb911] text-white font-bold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <span>{currentLang === 'AR' ? 'احجز رحلتك' : 'Book Your Trip'}</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 rtl:rotate-180 text-white stroke-[2.5]" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`xl:hidden p-2 rounded-full transition-colors duration-300 cursor-pointer ${
              effectiveScrolled
                ? 'text-[#1D3222] hover:text-[#112417] hover:bg-[#EEF4EB]'
                : 'text-white hover:bg-white/15'
            }`}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Floating Dropdown Card */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-full mt-2 w-[calc(100%-24px)] sm:w-[calc(100%-48px)] max-w-md bg-white/95 backdrop-blur-xl rounded-3xl border border-[#E2E8DC] p-5 shadow-2xl space-y-3 animate-in slide-in-from-top-3 duration-200 z-50">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = item.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-semibold px-3.5 py-2.5 rounded-xl flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-[#EBFBE7] text-[#16241B] border-r-4 rtl:border-r-0 rtl:border-l-4 border-[#2BE019]'
                      : 'text-[#2C3B30] hover:text-[#16241B] hover:bg-[#F3F6EE]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-[#8A9C8E] rtl:rotate-180">→</span>
                </Link>
              );
            })}
          </nav>
          <div className="pt-2 border-t border-[#EAEFE6]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#1EAA13] text-white font-bold text-sm py-3 rounded-full shadow-md hover:bg-[#18930F] transition-colors cursor-pointer"
            >
              <span>{currentLang === 'AR' ? 'احجز رحلتك الآن' : 'Book Your Trip'}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180 text-white stroke-[2.5]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
