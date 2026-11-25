import React, { useState, useMemo, useEffect } from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import {
  Compass,
  Sparkles,
  ArrowRight,
  HelpCircle,
  CheckCircle2,
  FilterX
} from 'lucide-react';
import { toursList } from '../data/toursData';
import { TourFilterBar } from '../components/tours/TourFilterBar';
import { TourCard } from '../components/tours/TourCard';
import { TourDetailModal } from '../components/tours/TourDetailModal';
import { TourComparisonTable } from '../components/tours/TourComparisonTable';
import { EcoCampsSection } from '../components/tours/EcoCampsSection';
import { BookingDrawer } from '../components/tours/BookingDrawer';

export const ToursPage = () => {
  const { currentLang } = useOutletContext();
  const isAr = currentLang === 'AR';
  const [searchParams, setSearchParams] = useSearchParams();

  // Dual Filtering States
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') || 'all'
  );
  const [selectedZone, setSelectedZone] = useState(
    searchParams.get('zone') || 'all'
  );

  // Modals & Drawers States
  const [detailTourId, setDetailTourId] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [bookingTourId, setBookingTourId] = useState('nile-tour');
  const [isBookingDrawerOpen, setIsBookingDrawerOpen] = useState(false);

  // Check URL query parameters for pre-opened modals or bookings
  useEffect(() => {
    const tourParam = searchParams.get('tour');
    if (tourParam) {
      setBookingTourId(tourParam);
      setIsBookingDrawerOpen(true);
    }
  }, [searchParams]);

  // Handle smooth scroll to Eco-Camps section
  const handleScrollToEcoCamps = () => {
    const el = document.getElementById('eco-camps');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Dual Filtering Computation with useMemo for zero lag
  const filteredTours = useMemo(() => {
    return toursList.filter((tour) => {
      // Category match
      let matchCategory = true;
      if (selectedCategory === 'camps') {
        // When camps is selected, all tours or camps can show, and we scroll to camps
        matchCategory = true;
      } else if (selectedCategory !== 'all') {
        matchCategory = tour.category === selectedCategory;
      }

      // Zone match
      let matchZone = true;
      if (selectedZone !== 'all') {
        matchZone = tour.zone === selectedZone;
      }

      return matchCategory && matchZone;
    });
  }, [selectedCategory, selectedZone]);

  // Modal Openers
  const handleViewItinerary = (tourId) => {
    setDetailTourId(tourId);
    setIsDetailOpen(true);
  };

  const handleBookNow = (tourId) => {
    setBookingTourId(tourId);
    setIsBookingDrawerOpen(true);
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#F8FAF5] min-h-screen text-[#16241B]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* ============================================================ */}
        {/* 1. HERO HEADER WITH NILE TEAL GRADIENT DIVIDER */}
        {/* ============================================================ */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          {/* Elegant Nile Teal Gradient Divider */}
          <div className="w-full flex items-center justify-center gap-2 sm:gap-4 mb-4 overflow-hidden">
            <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-[#0a515b]/50 to-[#0a515b]" />
            <div className="w-2 h-2 rounded-full bg-[#0a515b] shrink-0" />
            <h1 className="px-3 sm:px-6 text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#16241B] shrink-0 font-heading">
              {isAr ? 'جولات رصد الطيور والطبيعة' : 'Our Nature & Birding Tours'}
            </h1>
            <div className="w-2 h-2 rounded-full bg-[#0a515b] shrink-0" />
            <div className="flex-1 h-[2px] bg-gradient-to-r from-[#0a515b] via-[#0a515b]/50 to-transparent" />
          </div>

          <p className="text-sm sm:text-base text-[#4E6254] leading-relaxed font-medium">
            {isAr
              ? 'تجارب بيئية حصرية مصممة بعناية: من رحلات القارب الهادئة بين جزر الشلال الأول، إلى مراقبة جوارح الخزان، وربط الطيور الحية بنقوش الفراعنة المقدسة في معبد فيلة.'
              : 'Handcrafted naturalist experiences across Aswan: from peaceful boat-only First Cataract cruises and mountain raptor safaris to live comparisons with sacred pharaonic reliefs.'}
          </p>
        </div>

        {/* ============================================================ */}
        {/* 2. DUAL-FILTERING SYSTEM (Category & Geographic Zone) */}
        {/* ============================================================ */}
        <TourFilterBar
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          selectedZone={selectedZone}
          onSelectZone={(zone) => setSelectedZone(zone)}
          totalCount={toursList.length}
          filteredCount={filteredTours.length}
          isAr={isAr}
          onEcoCampClick={handleScrollToEcoCamps}
        />

        {/* ============================================================ */}
        {/* 3. TOURS GRID (Filtered Live) */}
        {/* ============================================================ */}
        {filteredTours.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {filteredTours.map((tour) => (
              <TourCard
                key={tour.id}
                tour={tour}
                isAr={isAr}
                onViewItinerary={handleViewItinerary}
                onBookNow={handleBookNow}
              />
            ))}
          </div>
        ) : (
          /* Empty Filter State */
          <div className="p-10 sm:p-14 rounded-3xl bg-white border border-[#CBDCCB] text-center max-w-lg mx-auto mb-20 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-[#0a515b]/10 text-[#0a515b] mx-auto flex items-center justify-center mb-4">
              <FilterX className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-black text-[#16241B] mb-2">
              {isAr ? 'لا توجد جولات مطابقة لهذا الفلتر' : 'No tours match this filter combination'}
            </h3>
            <p className="text-xs text-[#556F5C] mb-6">
              {isAr
                ? 'جرب اختيار منطقة جغرافية أخرى أو إظهار كافة التجارب.'
                : 'Try adjusting your geographic zone or reset your filters to see all experiences.'}
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedZone('all');
              }}
              className="py-2.5 px-6 rounded-full bg-[#0a515b] text-white text-xs font-bold hover:bg-[#073b42] transition-colors cursor-pointer"
            >
              {isAr ? 'عرض جميع الجولات' : 'Reset All Filters'}
            </button>
          </div>
        )}

        {/* ============================================================ */}
        {/* 4. INTERACTIVE COMPARISON MATRIX TABLE */}
        {/* ============================================================ */}
        <TourComparisonTable
          isAr={isAr}
          onSelectTour={handleBookNow}
        />

        {/* ============================================================ */}
        {/* 5. ECO-CAMPS & EDUCATIONAL PROGRAMS SECTION */}
        {/* ============================================================ */}
        <EcoCampsSection isAr={isAr} />
      </div>

      {/* ============================================================ */}
      {/* 6. TOUR DETAIL MODAL */}
      {/* ============================================================ */}
      <TourDetailModal
        tourId={detailTourId}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        onBookNow={handleBookNow}
        isAr={isAr}
      />

      {/* ============================================================ */}
      {/* 7. DYNAMIC BOOKING DRAWER & PRICE CALCULATOR */}
      {/* ============================================================ */}
      <BookingDrawer
        isOpen={isBookingDrawerOpen}
        onClose={() => setIsBookingDrawerOpen(false)}
        initialTourId={bookingTourId}
        isAr={isAr}
      />
    </div>
  );
};
