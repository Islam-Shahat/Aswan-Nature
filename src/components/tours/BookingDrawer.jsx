import React, { useState, useEffect, useMemo } from 'react';
import {
  X,
  Clock,
  MapPin,
  Calendar,
  Users,
  Compass,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { toursData, toursList, customActivities, pricingConfig } from '../../data/toursData';

export const BookingDrawer = ({
  isOpen,
  onClose,
  initialTourId = 'nile-tour',
  isAr = false
}) => {
  // Step 1: Tour selection & scheduling
  const [selectedTourId, setSelectedTourId] = useState(initialTourId);
  const [selectedDate, setSelectedDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('morning'); // 'morning' | 'sunset'

  // Step 2: Guests
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  // Step 3: Custom Activity & Add-ons
  const [selectedActivityId, setSelectedActivityId] = useState('hiking');
  const [privateBoatUpgrade, setPrivateBoatUpgrade] = useState(false);

  // Step 4: Customer Details
  const [fullName, setFullName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState({});
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Sync initialTourId on change
  useEffect(() => {
    if (initialTourId && toursData[initialTourId]) {
      setSelectedTourId(initialTourId);
    }
  }, [initialTourId]);

  // Set default date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setSelectedDate(tomorrow.toISOString().split('T')[0]);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const activeTour = toursData[selectedTourId] || toursData['nile-tour'];

  // Check if tour is full-day (locks to morning)
  const isFullDay = activeTour.id === 'special-tour' || activeTour.id === 'isis-tour';

  // Force morning slot for full day
  useEffect(() => {
    if (isFullDay) {
      setTimeSlot('morning');
    }
  }, [isFullDay]);

  // Total guests
  const totalGuests = adults + children;

  // Selected custom activity for Special Tour
  const activeCustomActivity = useMemo(() => {
    return customActivities.find((a) => a.id === selectedActivityId) || customActivities[0];
  }, [selectedActivityId]);

  // Real-time Dynamic Price Calculation
  const priceBreakdown = useMemo(() => {
    // If Arabic mode: calculate strictly in Egyptian Pounds (EGP) for Egyptian citizens
    if (isAr) {
      let isPrivate = false;
      let ratePerPerson = activeTour.priceEgpNumber || 1500;
      let totalEgp = 0;

      if (totalGuests <= 3) {
        isPrivate = true;
        totalEgp = activeTour.pricePrivateTourEgp || 3500;
      } else if (totalGuests >= 8) {
        ratePerPerson = Math.round(ratePerPerson * 0.8); // 8+ group discount rate
        totalEgp = (adults * ratePerPerson) + Math.round(children * (ratePerPerson * pricingConfig.childDiscountMultiplier));
      } else {
        totalEgp = (adults * ratePerPerson) + Math.round(children * (ratePerPerson * pricingConfig.childDiscountMultiplier));
      }

      // Custom activity add-on if Special Tour
      let activityTotal = 0;
      if (activeTour.id === 'special-tour' && activeCustomActivity) {
        activityTotal = totalGuests * (activeCustomActivity.priceEgp || 500);
        totalEgp += activityTotal;
      }

      return {
        isEgyptianRate: true,
        isPrivate,
        ratePerPerson,
        currencySymbol: 'ج.م',
        netTotal: totalEgp,
        adultsSubtotal: isPrivate ? (activeTour.pricePrivateTourEgp || 3500) : adults * ratePerPerson,
        childrenSubtotal: isPrivate ? 0 : Math.round(children * (ratePerPerson * pricingConfig.childDiscountMultiplier)),
        activitySubtotal: activityTotal,
        isGroupDiscount: false
      };
    }

    // English mode: calculate strictly in Euro (€) for International guests
    let isPrivate = false;
    let ratePerPerson = 60;
    let totalEuro = 0;

    if (totalGuests <= 3) {
      isPrivate = true;
      totalEuro = 230; // Private Tour (1–3 persons) = €230 per tour
    } else if (totalGuests >= 8) {
      ratePerPerson = 55; // Group Tour (8–20 persons) = €55 per person
      totalEuro = (adults * 55) + Math.round(children * (55 * pricingConfig.childDiscountMultiplier));
    } else {
      ratePerPerson = 60; // Group Tour (4–7 persons) = €60 per person
      totalEuro = (adults * 60) + Math.round(children * (60 * pricingConfig.childDiscountMultiplier));
    }

    // Custom activity add-on if Special Tour
    let activityTotalEuro = 0;
    if (activeTour.id === 'special-tour' && activeCustomActivity) {
      activityTotalEuro = totalGuests * (activeCustomActivity.priceUsd || 15);
      totalEuro += activityTotalEuro;
    }

    return {
      isEgyptianRate: false,
      isPrivate,
      ratePerPerson,
      currencySymbol: '€',
      netTotal: totalEuro,
      adultsSubtotal: isPrivate ? 230 : adults * ratePerPerson,
      childrenSubtotal: isPrivate ? 0 : Math.round(children * (ratePerPerson * pricingConfig.childDiscountMultiplier)),
      activitySubtotal: activityTotalEuro,
      isGroupDiscount: false
    };
  }, [activeTour, adults, children, totalGuests, activeCustomActivity, isAr]);

  // Validation
  const validateForm = () => {
    const newErrors = {};
    if (!fullName.trim()) {
      newErrors.fullName = isAr ? 'يرجى كتابة الاسم بالكامل' : 'Full name is required';
    }
    if (!whatsappNumber.trim() || whatsappNumber.length < 8) {
      newErrors.whatsappNumber = isAr ? 'يرجى إدخال رقم واتساب صالح' : 'Valid WhatsApp number required';
    }
    if (!selectedDate) {
      newErrors.selectedDate = isAr ? 'يرجى اختيار تاريخ الرحلة' : 'Please select a date';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // WhatsApp formatted confirmation generator
  const buildWhatsAppUrl = () => {
    const slotLabel = isFullDay
      ? (isAr ? 'رحلة يوم كامل (انطلاق صباحي باكر)' : 'Full-Day Morning Departure (08:00 AM)')
      : timeSlot === 'morning'
      ? (isAr ? 'فترة الصباح الباكر (شروق الشمس)' : 'Morning Sunrise Slot')
      : (isAr ? 'فترة ما بعد الظهر (الغروب الذهبي)' : 'Afternoon Sunset Slot');

    const activityText =
      activeTour.id === 'special-tour' && activeCustomActivity
        ? `\n- Activity: ${isAr ? activeCustomActivity.titleAr : activeCustomActivity.titleEn}`
        : '';

    const boatUpgradeText = privateBoatUpgrade ? `\n- Private Boat Upgrade: Yes (+$40)` : '';
    const discountText = priceBreakdown.isGroupDiscount ? `\n- Group Discount (10%): Applied (-$${priceBreakdown.discountAmountUsd})` : '';

    const text = encodeURIComponent(
      isAr
        ? `*طلب حجز رحلة — أسوان ناتشر (أسعار المصريين)*\n` +
          `--------------------------------\n` +
          `*الرحلة:* ${activeTour.titleAr} (${activeTour.zoneLabelAr})\n` +
          `*نقطة الانطلاق:* ${activeTour.startingMarinaAr}\n` +
          `*التاريخ:* ${selectedDate}\n` +
          `*الموعد:* ${slotLabel}\n` +
          `*الضيوف:* ${adults} بالغين${children > 0 ? `، ${children} أطفال` : ''} (الإجمالي: ${totalGuests})\n` +
          activityText +
          `\n*إجمالي الحساب التقديري للمصريين:* ${priceBreakdown.netTotal.toLocaleString()} ج.م\n` +
          `*ملاحظة:* يرجى إبراز بطاقة الرقم القومي المصري عند نقطة الانطلاق.\n` +
          `--------------------------------\n` +
          `*اسم العميل:* ${fullName}\n` +
          `*الهاتف / واتساب:* ${whatsappNumber}\n` +
          (email ? `*البريد الإلكتروني:* ${email}\n` : '') +
          (notes ? `*ملاحظات:* ${notes}\n` : '') +
          `\n_تم الإرسال من منصة حجز أسوان ناتشر_`
        : `*Aswan Nature — Tour Booking Request*\n` +
          `--------------------------------\n` +
          `*Tour:* ${activeTour.title} (${activeTour.zoneLabelEn})\n` +
          `*Starting Marina:* ${activeTour.startingMarinaEn}\n` +
          `*Date:* ${selectedDate}\n` +
          `*Time Slot:* ${slotLabel}\n` +
          `*Guests:* ${adults} Adults${children > 0 ? `, ${children} Children` : ''} (Total: ${totalGuests})\n` +
          activityText +
          boatUpgradeText +
          `\n*Estimated Total:* €${priceBreakdown.netTotal} EUR\n` +
          `*Note:* Valid international passport required at boarding.\n` +
          `--------------------------------\n` +
          `*Guest Name:* ${fullName}\n` +
          `*Phone/WhatsApp:* ${whatsappNumber}\n` +
          (email ? `*Email:* ${email}\n` : '') +
          (notes ? `*Notes:* ${notes}\n` : '') +
          `\n_Sent directly from Aswan Nature Tours Portal_`
    );

    return `https://wa.me/201144435547?text=${text}`;
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setBookingConfirmed(true);
      // Auto open WhatsApp in new tab
      window.open(buildWhatsAppUrl(), '_blank', 'noopener,noreferrer');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 rtl:right-auto rtl:left-0 max-w-full flex pl-10 rtl:pl-0 rtl:pr-10">
        <div
          className="w-screen max-w-xl bg-white shadow-2xl flex flex-col justify-between overflow-hidden"
          dir={isAr ? 'rtl' : 'ltr'}
        >
          {/* Drawer Header */}
          <div className="p-5 sm:p-6 bg-[#0a515b] text-white flex items-center justify-between shrink-0 shadow-md">
            <div>
              <div className="text-[11px] font-black uppercase tracking-widest text-[#4bf319] flex items-center gap-1.5 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#4bf319]" />
                <span>{isAr ? 'حجز تفاعلي مباشر' : 'DYNAMIC TOUR RESERVATION'}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                {isAr ? 'حجز وتأكيد الجولة' : 'Configure & Book Tour'}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer"
              aria-label="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Scrollable Content */}
          <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-7 bg-[#FAFDF8]">
            {bookingConfirmed ? (
              /* Success State */
              <div className="p-6 sm:p-8 text-center bg-white rounded-3xl border-2 border-[#21c715] shadow-lg animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-[#21c715]/15 text-[#21c715] mx-auto flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-black text-[#16241B] mb-2">
                  {isAr ? 'تم تجهيز حجزك بنجاح!' : 'Your Booking Request is Ready!'}
                </h3>
                <p className="text-xs sm:text-sm text-[#4E6254] leading-relaxed mb-6">
                  {isAr
                    ? 'تم توجيهك إلى واتساب لإتمام التأكيد الفوري مع فريق الاستقبال وتنسيق نقطة التجمع.'
                    : 'We have initiated your WhatsApp confirmation with the reception team to finalize your spot.'}
                </p>

                <div className="p-4 rounded-2xl bg-[#FAFDF8] border border-[#CBDCCB] text-left rtl:text-right text-xs space-y-1.5 mb-6">
                  <div className="flex justify-between">
                    <span className="font-bold text-[#6B8572]">{isAr ? 'الجولة:' : 'Tour:'}</span>
                    <span className="font-black text-[#16241B]">{isAr ? activeTour.titleAr : activeTour.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-[#6B8572]">{isAr ? 'التاريخ:' : 'Date:'}</span>
                    <span className="font-extrabold text-[#16241B]">{selectedDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-[#6B8572]">{isAr ? 'الضيوف:' : 'Guests:'}</span>
                    <span className="font-extrabold text-[#16241B]">{totalGuests} ({adults} Ad, {children} Ch)</span>
                  </div>
                  <div className="flex justify-between border-t border-[#EAEFE6] pt-1.5 text-sm">
                    <span className="font-black text-[#0a515b]">{isAr ? 'الإجمالي التقديري:' : 'Estimated Total:'}</span>
                    <span className="font-black text-[#0a515b]">${priceBreakdown.netTotalUsd} ({priceBreakdown.netTotalEgp.toLocaleString()} EGP)</span>
                  </div>
                </div>

                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{isAr ? 'إعادة فتح المحادثة على واتساب' : 'Open WhatsApp Chat Again'}</span>
                </a>

                <button
                  onClick={() => setBookingConfirmed(false)}
                  className="mt-4 text-xs font-bold text-[#6B8572] hover:text-[#16241B] underline cursor-pointer"
                >
                  {isAr ? 'تعديل تفاصيل الحجز' : 'Edit Booking Details'}
                </button>
              </div>
            ) : (
              /* Configuration Steps */
              <>
                {/* STEP 1: Tour, Date & Time Slot */}
                <div className="p-4 sm:p-5 rounded-3xl bg-white border border-[#CBDCCB] shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0a515b] mb-4">
                    <div className="w-5 h-5 rounded-full bg-[#0a515b] text-white flex items-center justify-center text-[10px]">
                      1
                    </div>
                    <span>{isAr ? 'الجولة والموعد' : 'Tour, Date & Departure Time'}</span>
                  </div>

                  {/* Tour Dropdown */}
                  <div className="mb-4">
                    <label className="text-xs font-bold text-[#16241B] block mb-1.5">
                      {isAr ? 'اختر الجولة المطلوبة:' : 'Select Experience:'}
                    </label>
                    <select
                      value={selectedTourId}
                      onChange={(e) => setSelectedTourId(e.target.value)}
                      className="w-full p-3.5 rounded-2xl border-2 border-[#CBDCCB] focus:border-[#0a515b] focus:outline-hidden bg-white text-xs sm:text-sm font-extrabold text-[#16241B] cursor-pointer"
                    >
                      {toursList.map((t) => (
                        <option key={t.id} value={t.id}>
                          {isAr ? `${t.titleAr} (${t.durationAr} — ${t.priceEgp})` : `${t.title} (${t.duration} — $${t.priceUsd})`}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Active Tour Quick Specs Box */}
                  <div className="p-3.5 rounded-2xl bg-[#FAFDF8] border border-[#E2E8DC] text-xs space-y-1.5 mb-4">
                    <div className="flex items-center justify-between text-[#4E6254]">
                      <span className="flex items-center gap-1.5 font-bold">
                        <Clock className="w-3.5 h-3.5 text-[#0a515b]" />
                        <span>{isAr ? activeTour.durationAr : activeTour.duration}</span>
                      </span>
                      <span className="font-extrabold text-[#0a515b]">
                        {isAr ? activeTour.zoneLabelAr : activeTour.zoneLabelEn}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-[#556F5C]">
                      <MapPin className="w-3.5 h-3.5 text-[#21c715] shrink-0" />
                      <span className="truncate">
                        {isAr ? `الانطلاق: ${activeTour.startingMarinaAr}` : `Marina: ${activeTour.startingMarinaEn}`}
                      </span>
                    </div>
                  </div>

                  {/* Date Input */}
                  <div className="mb-4">
                    <label className="text-xs font-bold text-[#16241B] block mb-1.5">
                      {isAr ? 'تاريخ الرحلة:' : 'Preferred Date:'}
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className={`w-full p-3.5 rounded-2xl border-2 focus:outline-hidden text-xs sm:text-sm font-bold text-[#16241B] bg-white ${
                        errors.selectedDate ? 'border-red-500' : 'border-[#CBDCCB] focus:border-[#0a515b]'
                      }`}
                    />
                    {errors.selectedDate && (
                      <span className="text-[10px] text-red-500 font-bold mt-1 block">
                        {errors.selectedDate}
                      </span>
                    )}
                  </div>

                  {/* Time Slot Picker */}
                  <div>
                    <label className="text-xs font-bold text-[#16241B] block mb-1.5">
                      {isAr ? 'فترة الانطلاق المفضلة:' : 'Departure Time Slot:'}
                    </label>

                    {isFullDay ? (
                      /* Full Day Lock Notice */
                      <div className="p-3.5 rounded-2xl bg-[#0a515b]/8 border border-[#0a515b]/20 text-xs font-bold text-[#0a515b] flex items-center gap-2">
                        <Clock className="w-4 h-4 shrink-0 text-[#0a515b]" />
                        <span>
                          {isAr
                            ? 'رحلة يوم كامل: محددة تلقائياً بموعد الصباح الباكر (الساعة ٨:٠٠ صباحاً)'
                            : 'Full-Day Expedition: Automatically locked to Early Morning Departure (08:00 AM)'}
                        </span>
                      </div>
                    ) : (
                      /* 2 Slot Selector */
                      <div className="grid grid-cols-2 gap-2.5">
                        <button
                          type="button"
                          onClick={() => setTimeSlot('morning')}
                          className={`p-3 rounded-2xl border-2 text-xs font-bold transition-all text-center cursor-pointer ${
                            timeSlot === 'morning'
                              ? 'border-[#0a515b] bg-[#0a515b] text-white shadow-xs'
                              : 'border-[#CBDCCB] bg-white text-[#16241B] hover:border-[#0a515b]'
                          }`}
                        >
                          <span className="block font-black mb-0.5">
                            {isAr ? '🌅 شروق الشمس' : '🌅 Morning Sunrise'}
                          </span>
                          <span className={`text-[10px] ${timeSlot === 'morning' ? 'text-white/80' : 'text-[#647C6A]'}`}>
                            06:30 AM – 08:30 AM
                          </span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setTimeSlot('sunset')}
                          className={`p-3 rounded-2xl border-2 text-xs font-bold transition-all text-center cursor-pointer ${
                            timeSlot === 'sunset'
                              ? 'border-[#0a515b] bg-[#0a515b] text-white shadow-xs'
                              : 'border-[#CBDCCB] bg-white text-[#16241B] hover:border-[#0a515b]'
                          }`}
                        >
                          <span className="block font-black mb-0.5">
                            {isAr ? '🌇 الغروب الذهبي' : '🌇 Afternoon Sunset'}
                          </span>
                          <span className={`text-[10px] ${timeSlot === 'sunset' ? 'text-white/80' : 'text-[#647C6A]'}`}>
                            02:30 PM – 04:30 PM
                          </span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* STEP 2: Guest Counter & Tiered Pricing */}
                <div className="p-4 sm:p-5 rounded-3xl bg-white border border-[#CBDCCB] shadow-xs">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0a515b]">
                      <div className="w-5 h-5 rounded-full bg-[#0a515b] text-white flex items-center justify-center text-[10px]">
                        2
                      </div>
                      <span>{isAr ? 'عدد الضيوف والأسعار' : 'Guests & Group Pricing'}</span>
                    </div>

                    {priceBreakdown.isGroupDiscount && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#1EAA13] text-white text-[10px] font-black animate-pulse">
                        {isAr ? 'خصم مجموعات ١٠٪ مفعل!' : '10% Group Discount Active!'}
                      </span>
                    )}
                  </div>

                  <div className="space-y-4">
                    {/* Adults Counter */}
                    <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FAFDF8] border border-[#E2E8DC]">
                      <div>
                        <div className="text-xs sm:text-sm font-extrabold text-[#16241B]">
                          {isAr ? 'البالغين' : 'Adults (12+ Years)'}
                        </div>
                        <div className="text-[11px] font-semibold text-[#647C6A]">
                          {isAr ? `${activeTour.priceEgpNumber || 1500} ج.م` : `€${activeTour.priceEur || 55}`}
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setAdults((prev) => Math.max(1, prev - 1))}
                          className="w-8 h-8 rounded-full bg-white border border-[#CBDCCB] hover:border-[#0a515b] flex items-center justify-center font-bold text-sm text-[#16241B] cursor-pointer"
                        >
                          -
                        </button>
                        <span className="w-6 text-center text-sm font-black text-[#16241B]">
                          {adults}
                        </span>
                        <button
                          type="button"
                          onClick={() => setAdults((prev) => prev + 1)}
                          className="w-8 h-8 rounded-full bg-white border border-[#CBDCCB] hover:border-[#0a515b] flex items-center justify-center font-bold text-sm text-[#16241B] cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Children Counter (50% off) */}
                    <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FAFDF8] border border-[#E2E8DC]">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm font-extrabold text-[#16241B]">
                            {isAr ? 'الأطفال (أقل من ١٢ سنة)' : 'Children (Under 12)'}
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-[#1EAA13]/15 text-[#1EAA13] text-[10px] font-black">
                            50% OFF
                          </span>
                        </div>
                        <div className="text-[11px] font-semibold text-[#647C6A]">
                          ${activeTour.priceUsd * 0.5} / {Math.round(activeTour.priceEgpNumber * 0.5).toLocaleString()} EGP
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setChildren((prev) => Math.max(0, prev - 1))}
                          className="w-8 h-8 rounded-full bg-white border border-[#CBDCCB] hover:border-[#0a515b] flex items-center justify-center font-bold text-sm text-[#16241B] cursor-pointer"
                        >
                          -
                        </button>
                        <span className="w-6 text-center text-sm font-black text-[#16241B]">
                          {children}
                        </span>
                        <button
                          type="button"
                          onClick={() => setChildren((prev) => prev + 1)}
                          className="w-8 h-8 rounded-full bg-white border border-[#CBDCCB] hover:border-[#0a515b] flex items-center justify-center font-bold text-sm text-[#16241B] cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* STEP 3: Conditional Customization & Add-ons */}
                <div className="p-4 sm:p-5 rounded-3xl bg-white border border-[#CBDCCB] shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0a515b] mb-4">
                    <div className="w-5 h-5 rounded-full bg-[#0a515b] text-white flex items-center justify-center text-[10px]">
                      3
                    </div>
                    <span>
                      {activeTour.id === 'special-tour'
                        ? (isAr ? 'اختيار النشاط الإضافي (ساعتان)' : 'Choose Your 2-Hour Custom Activity')
                        : (isAr ? 'الترقيات والخيارات الإضافية' : 'Optional Upgrades & Amenities')}
                    </span>
                  </div>

                  {/* SPECIAL TOUR ONLY: 4 Custom Activity Radio Cards */}
                  {activeTour.id === 'special-tour' && (
                    <div className="space-y-2.5 mb-5">
                      <div className="text-[11px] font-bold text-[#556F5C] mb-2">
                        {isAr
                          ? 'اختر نشاط المجموع الخاص الذي تفضله لمدة ساعتين بعد وجبة الغداء النوبي:'
                          : 'Select your group 2-hour land activity following the island lunch:'}
                      </div>

                      {customActivities.map((act) => {
                        const isChosen = selectedActivityId === act.id;
                        return (
                          <div
                            key={act.id}
                            onClick={() => setSelectedActivityId(act.id)}
                            className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer ${
                              isChosen
                                ? 'border-[#0a515b] bg-[#0a515b]/6 shadow-xs'
                                : 'border-[#E2E8DC] bg-white hover:border-[#CBDCCB]'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex items-start gap-2.5">
                                <div
                                  className={`w-4 h-4 rounded-full border-2 mt-0.5 flex items-center justify-center shrink-0 ${
                                    isChosen ? 'border-[#0a515b] bg-[#0a515b]' : 'border-[#CBDCCB]'
                                  }`}
                                >
                                  {isChosen && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                                </div>
                                <div>
                                  <h4 className="text-xs sm:text-sm font-black text-[#16241B]">
                                    {isAr ? act.titleAr : act.titleEn}
                                  </h4>
                                  <p className="text-[11px] text-[#556F5C] mt-0.5 leading-snug">
                                    {isAr ? act.descAr : act.descEn}
                                  </p>
                                </div>
                              </div>
                              <span className="text-xs font-black text-[#0a515b] shrink-0">
                                +${act.priceUsd} / {act.priceEgp} EGP
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* General Optional Add-on: Private Boat Upgrade */}
                  <div
                    onClick={() => setPrivateBoatUpgrade((prev) => !prev)}
                    className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      privateBoatUpgrade
                        ? 'border-[#0a515b] bg-[#0a515b]/6 shadow-xs'
                        : 'border-[#E2E8DC] bg-white hover:border-[#CBDCCB]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={privateBoatUpgrade}
                        onChange={() => {}}
                        className="w-4 h-4 text-[#0a515b] rounded-sm accent-[#0a515b] cursor-pointer"
                      />
                      <div>
                        <div className="text-xs sm:text-sm font-extrabold text-[#16241B]">
                          {isAr ? 'ترقية لقارب خاص بالكامل للعائلة' : '100% Private Chartered Boat Upgrade'}
                        </div>
                        <div className="text-[10px] text-[#556F5C]">
                          {isAr ? 'قارب خاص غير مشترك لخصوصيتك التامة' : 'Exclusive boat solely for your party'}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-black text-[#0a515b]">
                      +$40 (2,000 EGP)
                    </span>
                  </div>

                  {/* Always Included Feature */}
                  <div className="mt-3 p-3 rounded-2xl bg-[#FAFDF8] border border-[#E2E8DC] text-[11px] text-[#4E6254] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#21c715] shrink-0" />
                    <span>
                      {isAr
                        ? 'معدات الرصد البصرية (مناظير وتلسكوبات معتمدة) مشمولة مجاناً لجميع الضيوف.'
                        : 'Certified binocular sets and high-power spotting scopes included for all guests.'}
                    </span>
                  </div>
                </div>

                {/* STEP 4: Customer Details & Form Validation */}
                <div className="p-4 sm:p-5 rounded-3xl bg-white border border-[#CBDCCB] shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0a515b] mb-4">
                    <div className="w-5 h-5 rounded-full bg-[#0a515b] text-white flex items-center justify-center text-[10px]">
                      4
                    </div>
                    <span>{isAr ? 'بيانات التواصل والتأكيد' : 'Contact Details & Confirmation'}</span>
                  </div>

                  <div className="space-y-3.5">
                    <div>
                      <label className="text-xs font-bold text-[#16241B] block mb-1">
                        {isAr ? 'الاسم بالكامل *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder={isAr ? 'مثال: محمد أحمد' : 'e.g. John Smith'}
                        className={`w-full p-3 rounded-xl border-2 text-xs sm:text-sm font-semibold text-[#16241B] bg-white focus:outline-hidden ${
                          errors.fullName ? 'border-red-500' : 'border-[#CBDCCB] focus:border-[#0a515b]'
                        }`}
                      />
                      {errors.fullName && (
                        <span className="text-[10px] text-red-500 font-bold mt-1 block">
                          {errors.fullName}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#16241B] block mb-1">
                        {isAr ? 'رقم الهاتف / واتساب *' : 'WhatsApp / Mobile Number *'}
                      </label>
                      <input
                        type="tel"
                        value={whatsappNumber}
                        onChange={(e) => setWhatsappNumber(e.target.value)}
                        placeholder="+20 1..."
                        className={`w-full p-3 rounded-xl border-2 text-xs sm:text-sm font-semibold text-[#16241B] bg-white focus:outline-hidden ${
                          errors.whatsappNumber ? 'border-red-500' : 'border-[#CBDCCB] focus:border-[#0a515b]'
                        }`}
                      />
                      {errors.whatsappNumber && (
                        <span className="text-[10px] text-red-500 font-bold mt-1 block">
                          {errors.whatsappNumber}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#16241B] block mb-1">
                        {isAr ? 'البريد الإلكتروني (اختياري)' : 'Email Address (Optional)'}
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="info@example.com"
                        className="w-full p-3 rounded-xl border-2 border-[#CBDCCB] focus:border-[#0a515b] focus:outline-hidden text-xs sm:text-sm font-semibold text-[#16241B] bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#16241B] block mb-1">
                        {isAr ? 'ملاحظات أو متطلبات خاصة' : 'Special Notes or Dietary Requests'}
                      </label>
                      <textarea
                        rows={2}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder={isAr ? 'أي متطلبات طبية أو أوقات مفضلة...' : 'Any preferences or requirements...'}
                        className="w-full p-3 rounded-xl border-2 border-[#CBDCCB] focus:border-[#0a515b] focus:outline-hidden text-xs sm:text-sm font-semibold text-[#16241B] bg-white resize-none"
                      />
                    </div>

                    {/* Verification Reminder Badge */}
                    <div className="p-3 bg-[#EEF5E9] rounded-xl border border-[#D5E4CE] text-xs text-[#2A4331] flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#1EAA13] shrink-0" />
                      <span>
                        {isAr
                          ? 'أسعار الجنيه المصري مخصصة للمصريين والمقيمين (يُرجى إبراز بطاقة الرقم القومي عند نقطة الانطلاق).'
                          : 'Valid passport required at boarding for international rate confirmation.'}
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Drawer Sticky Bottom Price Breakdown & Action Footer */}
          {!bookingConfirmed && (
            <div className="p-5 sm:p-6 bg-white border-t border-[#EAEFE6] shrink-0 shadow-xl space-y-3">
              {/* Itemized Calculation Summary */}
              <div className="space-y-1.5 text-xs text-[#556F5C] border-b border-[#F0F4EC] pb-3">
                <div className="flex justify-between">
                  <span>
                    {priceBreakdown.isPrivate
                      ? (isAr ? 'جولة خاصة للمصريين (١ - ٣ أفراد)' : 'Private Tour (1–3 persons)')
                      : `${adults} ${isAr ? 'بالغين' : 'Adults'} (${isAr ? `${priceBreakdown.ratePerPerson} ج.م` : `€${priceBreakdown.ratePerPerson}`})`}
                  </span>
                  <span className="font-bold text-[#16241B]">
                    {isAr ? `${priceBreakdown.adultsSubtotal.toLocaleString()} ج.م` : `€${priceBreakdown.adultsSubtotal}`}
                  </span>
                </div>

                {children > 0 && !priceBreakdown.isPrivate && (
                  <div className="flex justify-between">
                    <span>
                      {children} {isAr ? 'أطفال (خصم ٥٠٪)' : 'Children (50% Off)'}
                    </span>
                    <span className="font-bold text-[#16241B]">
                      {isAr ? `${priceBreakdown.childrenSubtotal.toLocaleString()} ج.م` : `€${priceBreakdown.childrenSubtotal}`}
                    </span>
                  </div>
                )}

                {priceBreakdown.activitySubtotal > 0 && activeTour.id === 'special-tour' && activeCustomActivity && (
                  <div className="flex justify-between">
                    <span className="truncate max-w-[280px]">
                      {isAr ? activeCustomActivity.titleAr : activeCustomActivity.titleEn} ({totalGuests}x)
                    </span>
                    <span className="font-bold text-[#16241B]">
                      +{isAr ? `${priceBreakdown.activitySubtotal.toLocaleString()} ج.م` : `€${priceBreakdown.activitySubtotal}`}
                    </span>
                  </div>
                )}
              </div>

              {/* Total & Action */}
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#6B8572] block">
                    {isAr ? 'المجموع للمصريين' : 'Estimated Total'}
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl sm:text-3xl font-black text-[#0a515b] font-heading">
                      {isAr ? `${priceBreakdown.netTotal.toLocaleString()} ج.م` : `€${priceBreakdown.netTotal}`}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleConfirmBooking}
                  className="py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-black shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 cursor-pointer active:scale-95 group/btn"
                >
                  <MessageCircle className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                  <span>{isAr ? 'تأكيد الحجز عبر واتساب' : 'Confirm via WhatsApp'}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
