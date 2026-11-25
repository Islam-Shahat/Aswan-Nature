import React from 'react';
import { Compass, Feather, Landmark, Tent, MapPin, X, Info } from 'lucide-react';
import { categoriesData, zonesData } from '../../data/toursData';

export const TourFilterBar = ({
  selectedCategory,
  onSelectCategory,
  selectedZone,
  onSelectZone,
  totalCount,
  filteredCount,
  isAr = false,
  onEcoCampClick
}) => {
  const getCategoryIcon = (id) => {
    switch (id) {
      case 'avian':
        return <Feather className="w-4 h-4 text-[#21c715]" />;
      case 'pharaohs':
        return <Landmark className="w-4 h-4 text-[#c99a5d]" />;
      case 'camps':
        return <Tent className="w-4 h-4 text-[#21c715]" />;
      default:
        return <Compass className="w-4 h-4 text-[#0a515b]" />;
    }
  };

  const handleCategoryClick = (catId) => {
    if (catId === 'camps') {
      if (onEcoCampClick) {
        onEcoCampClick();
      }
      onSelectCategory('camps');
    } else {
      onSelectCategory(catId);
    }
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedZone !== 'all';

  return (
    <div className="w-full bg-white rounded-3xl border border-[#CBDCCB] shadow-sm p-4 sm:p-6 mb-10 transition-all">
      {/* Primary Category Tabs */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#4E6254] flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-[#0a515b]" />
            {isAr ? '١. نوع التجربة والاهتمام' : '1. Experience Category'}
          </span>
          {hasActiveFilters && (
            <button
              onClick={() => {
                onSelectCategory('all');
                onSelectZone('all');
              }}
              className="text-xs font-bold text-[#0a515b] hover:text-[#21c715] flex items-center gap-1 transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              <span>{isAr ? 'إعادة ضبط الفلاتر' : 'Reset Filters'}</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
          {categoriesData.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`flex items-center gap-2.5 p-3 sm:p-3.5 rounded-2xl border-2 transition-all duration-200 text-left rtl:text-right cursor-pointer select-none group ${
                  isSelected
                    ? 'border-[#0a515b] bg-[#0a515b] text-white shadow-md'
                    : 'border-[#E2E8DC] bg-[#FAFDF8] hover:border-[#CBDCCB] hover:bg-white text-[#16241B]'
                }`}
              >
                <div
                  className={`p-2 rounded-xl transition-colors shrink-0 ${
                    isSelected ? 'bg-white/15 text-white' : 'bg-white border border-[#E2E8DC]'
                  }`}
                >
                  {getCategoryIcon(cat.id)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs sm:text-sm font-extrabold truncate">
                    {isAr ? cat.labelAr : cat.labelEn}
                  </div>
                  {cat.badgeEn && (
                    <div
                      className={`text-[10px] font-semibold truncate ${
                        isSelected ? 'text-white/80' : 'text-[#647C6A]'
                      }`}
                    >
                      {isAr ? cat.badgeAr : cat.badgeEn}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Secondary Geographic Zone Pills */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#4E6254] flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#21c715]" />
            {isAr ? '٢. النطاق الجغرافي ونقطة الانطلاق' : '2. Geographic Zone & Marina'}
          </span>
          <span className="text-xs font-bold text-[#556F5C]">
            {isAr
              ? `عرض ${filteredCount} من أصل ${totalCount} جولات`
              : `Showing ${filteredCount} of ${totalCount} Tours`}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-2.5">
          {zonesData.map((zone) => {
            const isSelected = selectedZone === zone.id;
            return (
              <button
                key={zone.id}
                onClick={() => onSelectZone(zone.id)}
                className={`px-4 py-2 rounded-full text-xs font-extrabold border transition-all duration-200 flex items-center gap-1.5 cursor-pointer select-none ${
                  isSelected
                    ? 'bg-[#16241B] text-white border-[#16241B] shadow-sm'
                    : 'bg-white text-[#4A5D50] border-[#D8E2D2] hover:border-[#16241B] hover:text-[#16241B]'
                }`}
              >
                <span>{isAr ? zone.labelAr : zone.labelEn}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Zone Subtext Guidance */}
        {selectedZone !== 'all' && (
          <div className="mt-3 p-3 rounded-2xl bg-[#0a515b]/6 border border-[#0a515b]/15 text-xs text-[#0a515b] flex items-start gap-2 animate-in fade-in duration-300">
            <Info className="w-4 h-4 shrink-0 mt-0.5" />
            <span>
              {isAr
                ? zonesData.find((z) => z.id === selectedZone)?.descAr
                : zonesData.find((z) => z.id === selectedZone)?.descEn}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
