import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Compass, Home } from 'lucide-react';

export const NotFoundPage = () => {
  const context = useOutletContext();
  const isAr = context?.currentLang === 'AR';

  return (
    <div className="pt-32 pb-24 min-h-[70vh] flex items-center justify-center bg-[#F8FAF5] px-6">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-[#E5F5E4] text-[#21c715] flex items-center justify-center mx-auto">
          <Compass className="w-10 h-10" />
        </div>

        <div className="text-6xl font-extrabold text-[#16241B]">404</div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#16241B]">
          {isAr ? 'يبدو أن هذا الطائر طار بعيداً!' : 'Looks like this bird flew away!'}
        </h1>

        <p className="text-sm text-[#556F5C] leading-relaxed">
          {isAr
            ? 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها. يمكنك العودة للصفحة الرئيسية واستكشاف جولاتنا في أسوان.'
            : 'The page you are looking for does not exist or has been moved. Return home to discover our Aswan nature tours.'}
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#21c715] hover:bg-[#1bb010] text-white font-bold text-sm shadow-md transition-all hover:scale-105"
        >
          <Home className="w-4 h-4" />
          <span>{isAr ? 'العودة للرئيسية' : 'Return to Home'}</span>
        </Link>
      </div>
    </div>
  );
};
