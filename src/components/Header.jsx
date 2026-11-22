import React, { useState, useEffect } from 'react';
import { Globe, ArrowRight, Menu, X, ChevronDown } from 'lucide-react';

export const Header = ({
  onBookClick,
  onNavClick,
  currentLang = 'EN',
  onToggleLang,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');
  const [langOpen, setLangOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll state to smoothly and gradually transition background & text colors
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          // Smooth progressive transition over 20px to 260px of scroll
          const progress = Math.min(Math.max((y - 20) / 240, 0), 1);
          setScrollProgress(progress);
          setIsScrolled(progress >= 0.45);
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
    { label: currentLang === 'AR' ? 'الرئيسية' : 'Home', href: '#' },
    { label: currentLang === 'AR' ? 'جولاتنا' : 'Our Tours', href: '#tours' },
    { label: currentLang === 'AR' ? 'طيور الفراعنة حية' : 'Pharaohs Birds Alive', href: '#pharaohs' },
    { label: currentLang === 'AR' ? 'معسكرات التعلم' : 'Learning Camps', href: '#camps' },
    { label: currentLang === 'AR' ? 'معرض الصور' : 'Gallery', href: '#gallery' },
    { label: currentLang === 'AR' ? 'من نحن' : 'About Us', href: '#about' },
    { label: currentLang === 'AR' ? 'تواصل معنا' : 'Contact', href: '#contact' },
  ];

  const handleNavClick = (label, href) => {
    setActiveNav(label);
    setMobileMenuOpen(false);
    if (onNavClick) {
      onNavClick(href);
    } else if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSelectLang = (newLang) => {
    if (onToggleLang) {
      onToggleLang(newLang);
    }
    setLangOpen(false);
  };

  return (
    <header className="fixed top-2 sm:top-4 inset-x-0 z-50 px-2 sm:px-4 lg:px-6 flex justify-center pointer-events-none transition-all duration-300">
      {/* Floating Pill Island Navbar */}
      <div className="pointer-events-auto relative w-full max-w-[1620px] h-16 sm:h-[72px] px-5 sm:px-8 lg:px-10 rounded-full flex items-center justify-between">
        {/* Transparent Glass Background Layer (fades out gradually as user scrolls) */}
        <div
          className="absolute inset-0 rounded-full bg-white/15 backdrop-blur-md border border-white/30 shadow-[0_4px_24px_rgba(0,0,0,0.04)] pointer-events-none transition-opacity duration-150 ease-out"
          style={{ opacity: 1 - scrollProgress }}
        />

        {/* Solid White Scrolled Background Layer (fades in gradually with scroll) */}
        <div
          className="absolute inset-0 rounded-full bg-white/95 backdrop-blur-xl border border-[#E2E8DC] shadow-[0_12px_36px_-6px_rgba(20,40,25,0.12)] pointer-events-none transition-opacity duration-150 ease-out"
          style={{ opacity: scrollProgress }}
        />

        {/* Brand Logo */}
        <a href="#" className="relative z-10 flex items-center gap-3 sm:gap-4 group flex-shrink-0">
          <img
            src="/assets/logo-official.png"
            alt="Aswan Nature Logo"
            className="w-9 h-9 sm:w-10 sm:h-10 object-contain group-hover:scale-105 transition-transform drop-shadow-xs"
          />
          <span
            dir="ltr"
            className={`text-lg sm:text-xl tracking-tight font-medium flex items-baseline transition-all duration-500 ease-out ${
              isScrolled ? 'text-[#16241B]' : 'text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]'
            }`}
          >
            aswan
            <span
              className={`font-bold transition-all duration-500 ease-out ${
                isScrolled ? 'text-[#13231B]' : 'text-white'
              }`}
            >
              nature<span className="text-[#2BE019]">.</span>
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="relative z-10 hidden xl:flex items-center gap-1 2xl:gap-2 text-[14.5px] font-medium mx-2"
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const isActive = activeNav === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.label, item.href);
                }}
                className={`relative px-3.5 py-2 rounded-full transition-all duration-500 ease-out whitespace-nowrap ${
                  isScrolled
                    ? isActive
                      ? 'font-bold text-[#16241B] bg-black/5'
                      : 'text-[#35463B] hover:text-[#16241B] hover:bg-black/5'
                    : isActive
                      ? 'font-bold text-white bg-white/20 shadow-xs'
                      : 'text-white hover:text-white hover:bg-white/15 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]'
                }`}
              >
                {item.label}
                {/* Luminous Green Active Underline Bar */}
                {isActive && (
                  <span className="absolute -bottom-1 inset-x-2 h-[3.5px] rounded-full bg-[#2BE019] shadow-[0_0_10px_#2BE019]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="relative z-10 flex items-center gap-2.5 sm:gap-4 flex-shrink-0">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className={`flex items-center gap-1.5 text-xs sm:text-[13px] font-bold uppercase tracking-wider px-3.5 py-1.5 sm:py-2 rounded-full border shadow-xs transition-all duration-500 ease-out cursor-pointer ${
                isScrolled
                  ? 'border-[#E0E6DA] bg-white/80 hover:bg-white text-[#2C3B30] hover:text-[#16241B]'
                  : 'border-white/35 bg-white/20 hover:bg-white/30 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]'
              }`}
              aria-label={currentLang === 'EN' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
            >
              <Globe className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors duration-500 ${isScrolled ? 'text-[#5A6D61]' : 'text-white/90'}`} />
              <span>{currentLang}</span>
              <ChevronDown className={`w-3 h-3 transition-colors duration-500 ${isScrolled ? 'text-[#5A6D61]' : 'text-white/90'}`} />
            </button>

            {langOpen && (
              <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-32 bg-white/95 backdrop-blur-md border border-[#E5EADF] rounded-2xl shadow-xl py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                <button
                  onClick={() => handleSelectLang('EN')}
                  className="w-full text-left px-3.5 py-2 text-xs font-semibold hover:bg-[#F4F7F1] text-[#16241B] flex items-center justify-between cursor-pointer"
                >
                  <span>English</span>
                  {currentLang === 'EN' && <span className="w-1.5 h-1.5 rounded-full bg-[#2BE019]" />}
                </button>
                <button
                  onClick={() => handleSelectLang('AR')}
                  className="w-full text-right px-3.5 py-2 text-xs font-semibold hover:bg-[#F4F7F1] text-[#16241B] flex items-center justify-between cursor-pointer"
                >
                  {currentLang === 'AR' && <span className="w-1.5 h-1.5 rounded-full bg-[#2BE019]" />}
                  <span>العربية</span>
                </button>
              </div>
            )}
          </div>

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
            className={`xl:hidden p-2 rounded-full transition-colors duration-500 cursor-pointer ${
              isScrolled
                ? 'text-[#2C3B30] hover:text-[#16241B] hover:bg-black/5'
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
              const isActive = activeNav === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.label, item.href);
                  }}
                  className={`text-sm font-semibold px-3.5 py-2.5 rounded-xl flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-[#EBFBE7] text-[#16241B] border-r-4 rtl:border-r-0 rtl:border-l-4 border-[#2BE019]'
                      : 'text-[#2C3B30] hover:text-[#16241B] hover:bg-[#F3F6EE]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-[#8A9C8E] rtl:rotate-180">→</span>
                </a>
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
