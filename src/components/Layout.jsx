import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { BookingModal } from './BookingModal';
import { EgyptianRatesModal } from './EgyptianRatesModal';
import { PartnersModal } from './PartnersModal';
import { AdminConceptModal } from './AdminConceptModal';
import { TourDetailModal } from './TourDetailModal';
import { FlyingBirdCompanion } from './FlyingBirdCompanion';
import { ScrollToTop } from './ScrollToTop';
import { toursData } from '../data/toursData';

export const Layout = () => {
  const location = useLocation();
  const isGallery = location.pathname === '/gallery';
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

  // Dynamic SEO metadata sync across routes and language
  useEffect(() => {
    const isAr = currentLang === 'AR';
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';
    document.documentElement.lang = isAr ? 'ar' : 'en';

    let pageTitle = isAr
      ? 'طبيعة أسوان | رحلات رصد الطيور وسفاري النيل والحياة البرية في أسوان'
      : 'Aswan Nature | Birdwatching, Nile Wildlife Safaris & Eco Tours in Aswan, Egypt';
    let pageDesc = isAr
      ? 'اكتشف الحياة البرية والطيور النادرة في أسوان عبر رحلات القوارب البيئية الهادئة، طيور الفراعنة، محمية سالوجا وغزال، ومعسكرات الطبيعة التعليمية للأطفال.'
      : 'Discover the hidden wildlife of Aswan with authentic Nile birdwatching boat safaris, Pharaohs Birds Alive tours, Saluga & Ghazal protected island expeditions, and children outdoor learning camps.';

    const path = location.pathname;
    if (path === '/tours') {
      pageTitle = isAr
        ? 'رحلات وجولات رصد الطيور في أسوان | طبيعة أسوان'
        : 'Nile Birdwatching & Eco Tours in Aswan | Aswan Nature';
      pageDesc = isAr
        ? 'استكشف رحلات رصد الطيور المتخصصة والقوارب البيئية الهادئة في جزر الشلال الأول وبحيرة خزان أسوان.'
        : 'Explore private birdwatching expeditions, silent eco-boats, and wildlife photography tours across the First Cataract and Aswan Reservoir.';
    } else if (path.startsWith('/tours/')) {
      const tourId = path.replace('/tours/', '');
      const tour = toursData[tourId];
      if (tour) {
        pageTitle = isAr
          ? `${tour.titleAr || tour.titleEn} | رحلات طبيعة أسوان`
          : `${tour.titleEn} | Aswan Nature Tours`;
        pageDesc = isAr
          ? (tour.descAr || tour.descEn || pageDesc)
          : (tour.descEn || pageDesc);
      }
    } else if (path === '/pharaohs') {
      pageTitle = isAr
        ? 'طيور الفراعنة الحية | التراث الطبيعي لمصر القديمة | طبيعة أسوان'
        : 'Pharaohs Birds Alive | Ancient Egyptian Avian Heritage | Aswan Nature';
      pageDesc = isAr
        ? 'تتبع رموز الطيور في جداريات ومعابد مصر القديمة وعلاقتها بالطيور الحية المحلقة في نيل أسوان ومحمياتها الطبيعية.'
        : 'Trace ancient Egyptian bird symbolism to live species flying along the Nile in Aswan. Experience history through living wildlife.';
    } else if (path === '/camps') {
      pageTitle = isAr
        ? 'معسكرات الطبيعة والتعليم الميداني للأطفال والشباب | طبيعة أسوان'
        : 'Youth & Kids Outdoor Nature Learning Camps | Aswan Nature';
      pageDesc = isAr
        ? 'معسكرات تفاعلية في قلب الطبيعة، جلسات رصد بالمناظير الميدانية واستكشاف للحياة البرية للأطفال والناشئين في أسوان.'
        : 'Interactive nature camps, binocular field sessions, and wildlife exploration workshops for curious young minds in Aswan.';
    } else if (path === '/gallery') {
      pageTitle = isAr
        ? 'معرض صور الطيور والحياة البرية في أسوان | طبيعة أسوان'
        : 'Aswan Wildlife & Avian Photography Gallery | Aswan Nature';
      pageDesc = isAr
        ? 'صور فوتوغرافية احترافية لصائد السمك، اللقلق أصفر المنقار، الإوز المصري والجوارح في جزر ومحميات نيل أسوان.'
        : 'High-resolution photographs of Kingfishers, Yellow-billed Storks, Egyptian Geese, and raptors captured along the Nile in Aswan.';
    } else if (path === '/contact' || path === '/booking') {
      pageTitle = isAr
        ? 'تواصل معنا واحجز رحلتك النيلية | طبيعة أسوان'
        : 'Contact Us & Book Your Nile Tour | Aswan Nature';
      pageDesc = isAr
        ? 'احجز جولتك الخاصة لرصد الطيور أو معسكر الطبيعة في أسوان. أسعار خاصة للمصريين وحجوزات المجموعات.'
        : 'Reserve your bespoke Nile birdwatching tour or nature camp in Aswan. Special rates for Egyptians and private group bookings.';
    }

    document.title = pageTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', pageDesc);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', pageTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', pageDesc);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', `https://aswan-nature.vercel.app${path}`);

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.setAttribute('href', `https://aswan-nature.vercel.app${path}`);
  }, [currentLang, location.pathname]);

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

      {/* Footer - Hidden on fullscreen 100vh Gallery */}
      {!isGallery && (
        <Footer
          onOpenAdmin={() => setAdminOpen(true)}
          onOpenEgyptianRates={() => setEgyptianRatesOpen(true)}
          onOpenPartners={() => setPartnersOpen(true)}
          onSelectTour={(tour) => handleOpenBooking(tour)}
          currentLang={currentLang}
        />
      )}

      {/* Floating WhatsApp Button - Responsive & adaptive for touch */}
      <a
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 rtl:right-auto rtl:left-4 rtl:sm:left-6 z-40 inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-[#183823]/95 backdrop-blur-md text-white border border-white/25 shadow-[0_8px_26px_rgba(10,24,16,0.38)] text-xs sm:text-[13.5px] font-semibold tracking-tight hover:bg-[#204c30] hover:border-[#48e714] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(72,231,20,0.28)] active:translate-y-0 active:scale-95 transition-all duration-300"
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
