import React from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { QuickBooking } from '../components/QuickBooking';
import { NotYourUsualAswan } from '../components/NotYourUsualAswan';
import { ToursSection } from '../components/ToursSection';
import { PharaohsSection } from '../components/PharaohsSection';
import { GallerySection } from '../components/GallerySection';
import { LearningCampsSection } from '../components/LearningCampsSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { CtaBanner } from '../components/CtaBanner';

export const HomePage = () => {
  const {
    currentLang,
    handleOpenBooking,
    handleQuickBookingSubmit,
    setEgyptianRatesOpen,
    setPartnersOpen
  } = useOutletContext();

  const navigate = useNavigate();

  const handleScrollToTours = () => {
    const el = document.getElementById('tours');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/tours');
    }
  };

  return (
    <>
      {/* Hero Section */}
      <Hero
        onExploreTours={handleScrollToTours}
        currentLang={currentLang}
      />

      {/* Floating Quick Booking Widget */}
      <QuickBooking
        onCheckAvailability={handleQuickBookingSubmit}
        onOpenEgyptianRates={() => setEgyptianRatesOpen(true)}
        currentLang={currentLang}
      />

      {/* 4 Pillars Section */}
      <NotYourUsualAswan currentLang={currentLang} />

      {/* Tours Showcase */}
      <ToursSection
        onSelectTour={(tour) => handleOpenBooking(tour)}
        onExploreTourDetails={(tourId) => navigate(`/tours/${tourId}`)}
        currentLang={currentLang}
      />

      {/* Signature Pharaohs Section */}
      <PharaohsSection
        onDiscoverClick={() => navigate('/pharaohs')}
        currentLang={currentLang}
      />

      {/* Photo Gallery */}
      <GallerySection currentLang={currentLang} />

      {/* Learning Camps Banner */}
      <LearningCampsSection
        onExploreCamps={() => navigate('/camps')}
        currentLang={currentLang}
      />

      {/* Reviews & Partners */}
      <ReviewsSection
        onOpenPartners={() => setPartnersOpen(true)}
        currentLang={currentLang}
      />

      {/* Pre-footer Call to Action */}
      <CtaBanner
        onBookClick={() => handleOpenBooking('General Trip')}
        onExploreClick={() => navigate('/tours')}
        currentLang={currentLang}
      />
    </>
  );
};
