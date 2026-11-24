import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { BookingModal } from './BookingModal';
import { EgyptianRatesModal } from './EgyptianRatesModal';
import { PartnersModal } from './PartnersModal';
import { AdminConceptModal } from './AdminConceptModal';
import { TourDetailModal } from './TourDetailModal';
import { FlyingBirdCompanion } from './FlyingBirdCompanion';
import { ScrollToTop } from './ScrollToTop';

export const Layout = () => {
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

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF5] font-sans selection:bg-[#2BE019] selection:text-black">
      <ScrollToTop />

      {/* Interactive Scroll-Driven Flying Bird Companion */}
      <FlyingBirdCompanion currentLang={currentLang} />

      {/* Main Header */}
      <Header
        onBookClick={() => handleOpenBooking('General Trip')}
        currentLang={currentLang}
        onToggleLang={(lang) => setCurrentLang(lang)}
      />

      {/* Routed Pages Content */}
      <main className="flex-1">
        <Outlet
          context={{
            currentLang,
            setCurrentLang,
            handleOpenBooking,
            handleQuickBookingSubmit,
            setEgyptianRatesOpen,
            setPartnersOpen,
            setAdminOpen,
            setDetailTourId
          }}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenAdmin={() => setAdminOpen(true)}
        onOpenEgyptianRates={() => setEgyptianRatesOpen(true)}
        onOpenPartners={() => setPartnersOpen(true)}
        onSelectTour={(tour) => handleOpenBooking(tour)}
        currentLang={currentLang}
      />

      {/* Floating WhatsApp Button */}
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

      {/* Global Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialTour={selectedTour}
        initialDate={bookingDate}
        initialGuests={bookingGuests}
        isEgyptianDefault={isEgyptianBooking}
        currentLang={currentLang}
      />

      <EgyptianRatesModal
        isOpen={egyptianRatesOpen}
        onClose={() => setEgyptianRatesOpen(false)}
        onBookNow={() => handleOpenBooking('Nile Birds Tour', true)}
        currentLang={currentLang}
      />

      <PartnersModal
        isOpen={partnersOpen}
        onClose={() => setPartnersOpen(false)}
        currentLang={currentLang}
      />

      <AdminConceptModal
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        currentLang={currentLang}
      />

      <TourDetailModal
        tourId={detailTourId}
        isOpen={detailTourId !== null}
        onClose={() => setDetailTourId(null)}
        onBookTour={(tourTitle) => handleOpenBooking(tourTitle)}
        currentLang={currentLang}
      />
    </div>
  );
};
