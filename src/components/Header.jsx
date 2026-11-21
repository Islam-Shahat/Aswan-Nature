import React, { useState } from 'react';
import { Globe, ArrowRight, Menu, X, ChevronDown } from 'lucide-react';








export const Header = ({
  onBookClick,
  onNavClick,
  currentLang = 'EN',
  onToggleLang
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');
  const [langOpen, setLangOpen] = useState(false);

  const navItems = [
  { label: currentLang === 'AR' ? 'الرئيسية' : 'Home', href: '#' },
  { label: currentLang === 'AR' ? 'جولاتنا' : 'Our Tours', href: '#tours' },
  { label: currentLang === 'AR' ? 'طيور الفراعنة حية' : 'Pharaohs Birds Alive', href: '#pharaohs' },
  { label: currentLang === 'AR' ? 'معسكرات التعلم' : 'Learning Camps', href: '#camps' },
  { label: currentLang === 'AR' ? 'معرض الصور' : 'Gallery', href: '#gallery' },
  { label: currentLang === 'AR' ? 'من نحن' : 'About Us', href: '#about' },
  { label: currentLang === 'AR' ? 'تواصل معنا' : 'Contact', href: '#contact' }];


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
    <header className="sticky top-0 z-50 bg-[#F8FAF5]/95 backdrop-blur-md border-b border-[#E8EDE4] transition-all">
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-18 2xl:px-24 h-20 flex items-center justify-between">
        {/* Brand Logo matching official branding */}
        <a href="#" className="flex items-center gap-4 sm:gap-5 group flex-shrink-0">
          <img
            src="/assets/logo-official.png"
            alt="Aswan Nature Logo"
            className="w-11 h-11 object-contain group-hover:scale-105 transition-transform drop-shadow-sm" />
          
          <span className="text-xl sm:text-2xl tracking-tight text-[#16241B] font-medium flex items-baseline">
            aswan<span className="font-bold text-[#13231B]">nature<span className="text-[#2BE019]">.</span></span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-5 xl:gap-6 text-[14.5px] font-medium text-[#2C3B30] mx-4" aria-label="Main navigation">
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
                className={`relative px-1.5 py-1 transition-colors hover:text-[#16241B] whitespace-nowrap ${
                isActive ? 'font-bold text-[#16241B]' : 'text-[#48564D]'}`
                }>
                
                {item.label}
                {isActive &&
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#2BE019]" />
                }
              </a>);

          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-5 sm:gap-7 flex-shrink-0">
          {/* Language Switcher with AR / EN */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#35463B] hover:text-[#16241B] px-3.5 py-2 rounded-xl border border-[#E0E6DA] bg-white/80 hover:bg-white shadow-xs transition-colors"
              aria-label={currentLang === 'EN' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}>
              
              <Globe className="w-4 h-4 text-[#5A6D61]" />
              <span>{currentLang}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#5A6D61]" />
            </button>

            {langOpen &&
            <div className="absolute right-0 mt-2 w-34 bg-white border border-[#E5EADF] rounded-xl shadow-lg py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                <button
                onClick={() => handleSelectLang('EN')}
                className="w-full text-left px-3.5 py-2 text-xs font-semibold hover:bg-[#F4F7F1] flex items-center justify-between">
                
                  <span>English</span>
                  {currentLang === 'EN' && <span className="w-1.5 h-1.5 rounded-full bg-[#2BE019]" />}
                </button>
                <button
                onClick={() => handleSelectLang('AR')}
                className="w-full text-right px-3.5 py-2 text-xs font-semibold hover:bg-[#F4F7F1] flex items-center justify-between">
                
                  {currentLang === 'AR' && <span className="w-1.5 h-1.5 rounded-full bg-[#2BE019]" />}
                  <span>العربية</span>
                </button>
              </div>
            }
          </div>

          {/* Book CTA matching Figma */}
          <button
            onClick={onBookClick}
            className="hidden sm:inline-flex items-center gap-2.5 bg-[#2BE019] hover:bg-[#25C715] text-[#0A1810] font-bold text-sm sm:text-base px-6 sm:px-7 py-3 rounded-xl shadow-sm hover:shadow transition-all duration-200 active:scale-[0.98]">
            
            <span>{currentLang === 'AR' ? 'احجز رحلتك' : 'Book Your Trip'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-[#2C3B30] hover:text-[#16241B] hover:bg-[#EAEFE6] transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}>
            
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen &&
      <div className="xl:hidden border-t border-[#E8EDE4] bg-[#F8FAF5] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) =>
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(item.label, item.href);
            }}
            className="text-base font-semibold text-[#2C3B30] hover:text-[#16241B] py-2 border-b border-[#EAF0E6] flex items-center justify-between">
            
                <span>{item.label}</span>
                <span className="text-xs text-[#8A9C8E]">→</span>
              </a>
          )}
          </nav>
          <div className="pt-2">
            <button
            onClick={() => {
              setMobileMenuOpen(false);
              onBookClick();
            }}
            className="w-full flex items-center justify-center gap-2 bg-[#2BE019] text-[#0A1810] font-bold text-base py-3.5 rounded-xl shadow-md">
            
              <span>{currentLang === 'AR' ? 'احجز رحلتك الآن' : 'Book Your Trip'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      }
    </header>);

};