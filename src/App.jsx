import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickBooking } from './components/QuickBooking';
import { NotYourUsualAswan } from './components/NotYourUsualAswan';
import { ToursSection } from './components/ToursSection';
import { PharaohsSection } from './components/PharaohsSection';
import { GallerySection } from './components/GallerySection';
import { LearningCampsSection } from './components/LearningCampsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { EgyptianRatesModal } from './components/EgyptianRatesModal';
import { PartnersModal } from './components/PartnersModal';
import { AdminConceptModal } from './components/AdminConceptModal';
import { TourDetailModal } from './components/TourDetailModal';
import { FlyingBirdCompanion } from './components/FlyingBirdCompanion';

export default function App() {
  const [currentLang, setCurrentLang] = useState('EN');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState('Nile Birds Tour');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingGuests, setBookingGuests] = useState('2 guests');
  const [isEgyptianBooking, setIsEgyptianBooking] = useState(false);

  // Modals
  const [egyptianRatesOpen, setEgyptianRatesOpen] = useState(false);
  const [partnersOpen, setPartnersOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [detailTourId, setDetailTourId] = useState(null);

  // Sync language with document direction
  useEffect(() => {
    if (currentLang === 'AR') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    }
  }, [currentLang]);

  // Hash route listener matching Figma Make SPA URLs
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#/tours') {
        const el = document.getElementById('tours');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (hash === '#/pharaohs') {
        const el = document.getElementById('pharaohs');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (hash === '#/camps') {
        const el = document.getElementById('camps');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (hash === '#/gallery') {
        const el = document.getElementById('gallery');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (hash === '#/about') {
        const el = document.getElementById('about');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (hash === '#/contact') {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (hash === '#/partners') {
        setPartnersOpen(true);
      } else if (hash === '#/admin') {
        setAdminOpen(true);
      } else if (hash.startsWith('#/booking?rate=egyptian')) {
        setEgyptianRatesOpen(true);
      } else if (hash === '#/booking') {
        handleOpenBooking('General Trip');
      } else if (hash.startsWith('#/tours/')) {
        const id = hash.replace('#/tours/', '');
        setDetailTourId(id);
      }
    };

    window.addEventListener('hashchange', handleHash);
    handleHash(); // initial check
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleOpenBooking = (tourName = 'Nile Birds Tour', egyptian = false) => {
    setSelectedTour(tourName);
    setIsEgyptianBooking(egyptian);
    setBookingModalOpen(true);
  };

  const handleQuickBookingSubmit = (data) => {
    setSelectedTour(data.experience !== 'Where will nature take you?' ? data.experience : 'Nile Birds Tour');
    setBookingDate(data.date);
    setBookingGuests(data.guests);
    setBookingModalOpen(true);
  };

  const handleScrollToTours = () => {
    const el = document.getElementById('tours');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF5] font-sans selection:bg-[#2BE019] selection:text-black">
      {/* Interactive Scroll-Driven Flying Bird Companion */}
      <FlyingBirdCompanion currentLang={currentLang} />

      {/* 1. Header with exact Figma logo & navigation */}
      <Header
        onBookClick={() => handleOpenBooking('General Trip')}
        currentLang={currentLang}
        onToggleLang={(lang) => setCurrentLang(lang)} />
      

      {/* 2. Hero Section with high-res egrets.webp (2200x1550) */}
      <Hero
        onExploreTours={handleScrollToTours}
        currentLang={currentLang} />
      

      {/* 3. Floating Quick Booking Widget matching Figma Make form */}
      <QuickBooking
        onCheckAvailability={handleQuickBookingSubmit}
        onOpenEgyptianRates={() => setEgyptianRatesOpen(true)}
        currentLang={currentLang} />
      

      {/* 4. Not Your Usual Aswan (4 Pillar Cards) */}
      <NotYourUsualAswan currentLang={currentLang} />

      {/* 5. Tours Section (Extraordinary, by nature.) with high-res WebP images */}
      <ToursSection
        onSelectTour={(tour) => handleOpenBooking(tour)}
        onExploreTourDetails={(tourId) => setDetailTourId(tourId)}
        currentLang={currentLang} />
      

      {/* 6. Signature Experience (Pharaohs Birds Alive.) with high-res goose.webp */}
      <PharaohsSection
        onDiscoverClick={() => handleOpenBooking('Pharaohs Birds Alive Signature')}
        currentLang={currentLang} />
      

      {/* 7. Gallery (Wild moments. Real memories.) with all 3 high-res WebP photos */}
      <GallerySection currentLang={currentLang} />

      {/* 8. Learning Camps Promo Banner with high-res kingfisher.webp */}
      <LearningCampsSection
        onExploreCamps={() => handleOpenBooking('Children Outdoor Learning Camp')}
        currentLang={currentLang} />
      

      {/* 9. Reviews & Community Partners Strip */}
      <ReviewsSection
        onOpenPartners={() => setPartnersOpen(true)}
        currentLang={currentLang} />
      

      {/* 10. Pre-footer CTA Banner with authentic bird watermark */}
      <CtaBanner
        onBookClick={() => handleOpenBooking('General Trip')}
        onExploreClick={handleScrollToTours}
        currentLang={currentLang} />
      

      {/* 11. Footer with verified links & contacts */}
      <Footer
        onOpenAdmin={() => setAdminOpen(true)}
        onOpenEgyptianRates={() => setEgyptianRatesOpen(true)}
        onOpenPartners={() => setPartnersOpen(true)}
        onSelectTour={(tour) => handleOpenBooking(tour)}
        currentLang={currentLang} />
      

      {/* 12. Floating "Let's talk nature" WhatsApp Button - Global across all sections */}
      <a
        className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 z-40 inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#183823]/95 backdrop-blur-md text-white border border-white/25 shadow-[0_8px_26px_rgba(10,24,16,0.38)] text-xs sm:text-[13.5px] font-semibold tracking-tight hover:bg-[#204c30] hover:border-[#48e714] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(72,231,20,0.28)] active:translate-y-0 active:scale-95 transition-all duration-300"
        href="https://wa.me/201144435547"
        target="_blank"
        rel="noreferrer"
        aria-label="Contact Aswan Nature on WhatsApp"
      >
        <span className="text-[#48e714] flex-shrink-0">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 11a9 9 0 0 1-13 8l-6 2 2-6a9 9 0 1 1 17-4Z" />
          </svg>
        </span>
        <span>{currentLang === 'AR' ? 'تحدث معنا عن الطبيعة' : "Let's talk nature"}</span>
      </a>

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialTour={selectedTour}
        initialDate={bookingDate}
        initialGuests={bookingGuests}
        isEgyptianDefault={isEgyptianBooking}
        currentLang={currentLang} />
      

      {/* Special Egyptian Rates Modal */}
      <EgyptianRatesModal
        isOpen={egyptianRatesOpen}
        onClose={() => setEgyptianRatesOpen(false)}
        onBookNow={() => handleOpenBooking('Nile Birds Tour', true)}
        currentLang={currentLang} />
      

      {/* Partners & Supporters Modal */}
      <PartnersModal
        isOpen={partnersOpen}
        onClose={() => setPartnersOpen(false)}
        currentLang={currentLang} />
      

      {/* Admin Concept Preview Modal */}
      <AdminConceptModal
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        currentLang={currentLang} />
      

      {/* Tour Detail Modal */}
      <TourDetailModal
        tourId={detailTourId}
        isOpen={detailTourId !== null}
        onClose={() => setDetailTourId(null)}
        onBookTour={(tourTitle) => handleOpenBooking(tourTitle)}
        currentLang={currentLang} />
      
    </div>);

}