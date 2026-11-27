import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';

// Route-level code splitting for subpages to optimize bundle size and FCP/LCP
const ToursPage = lazy(() => import('./pages/ToursPage').then(m => ({ default: m.ToursPage })));
const TourDetailPage = lazy(() => import('./pages/TourDetailPage').then(m => ({ default: m.TourDetailPage })));
const PharaohsPage = lazy(() => import('./pages/PharaohsPage').then(m => ({ default: m.PharaohsPage })));
const LearningCampsPage = lazy(() => import('./pages/LearningCampsPage').then(m => ({ default: m.LearningCampsPage })));
const GalleryPage = lazy(() => import('./pages/GalleryPage').then(m => ({ default: m.GalleryPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen bg-[#F8FAF5]" />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="tours" element={<ToursPage />} />
            <Route path="tours/:id" element={<TourDetailPage />} />
            <Route path="pharaohs" element={<PharaohsPage />} />
            <Route path="camps" element={<LearningCampsPage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="booking" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
