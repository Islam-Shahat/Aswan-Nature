/**
 * Centralized Tours Data Store
 * All 6 core experiences, zones, pricing rules, and customizable add-ons.
 */

export const categoriesData = [
  { id: 'all', labelEn: 'All Experiences', labelAr: 'جميع التجارب' },
  { id: 'avian', labelEn: 'Avian Tours', labelAr: 'جولات رصد الطيور', badgeEn: 'Specialized Birding', badgeAr: 'رصد تخصصي' },
  { id: 'pharaohs', labelEn: 'Pharaohs Birding Tours', labelAr: 'جولات طيور الفراعنة', badgeEn: 'Culture & Nature', badgeAr: 'تراث وحضارة' },
  { id: 'camps', labelEn: 'Eco-Camps', labelAr: 'معسكرات التعلم البيئي', badgeEn: 'Youth & Schools', badgeAr: 'للأطفال والمدارس' }
];

export const zonesData = [
  {
    id: 'all',
    labelEn: 'All Zones',
    labelAr: 'جميع المناطق',
    descEn: 'Covering both First Cataract Nile channels and the serene Aswan Reservoir.',
    descAr: 'تغطي كلاً من قنوات الشلال الأول النيلية وبحيرة خزان أسوان الهادئة.'
  },
  {
    id: 'nile',
    labelEn: 'Nile Zone (First Cataract Islands)',
    labelAr: 'منطقة النيل (جزر الشلال الأول)',
    descEn: 'From Ferial Garden / Station Marina passing Elephantine Island up to before Gharb Soheil.',
    descAr: 'من مرسى حديقة فريال / المحطة مروراً بجزيرة إلفنتين حتى ما قبل غرب سهيل.'
  },
  {
    id: 'reservoir',
    labelEn: 'Reservoir Zone (High Dam & Old Dam)',
    labelAr: 'منطقة الخزان (السد العالي وخزان أسوان)',
    descEn: 'Departing from Batanioun (Miraya) Marina near Nubia Museum, directly facing Philae Temple basin.',
    descAr: 'انطلاقاً من مرسى بطنيون (المرايا) قرب متحف النوبة، بمواجهة حوض معبد فيلة.'
  }
];

export const customActivities = [
  {
    id: 'hiking',
    titleEn: 'Hiking in Soheil Island',
    titleAr: 'هايكنج ومسار طبيعي بجزيرة سهيل',
    descEn: 'Guided nature walk through granite boulder valleys, desert flora, and cliff viewpoints.',
    descAr: 'مسار مشي استكشافي مع مرشد بين الوديان الجرانيتية والنباتات النيلية وإطلالات صخرية بانورامية.',
    priceUsd: 10,
    priceEgp: 500,
    durationEn: '2 Hours',
    durationAr: 'ساعتان'
  },
  {
    id: 'camel',
    titleEn: 'Camel Riding Experience',
    titleAr: 'تجربة ركوب الجمال في الطبيعة النوبية',
    descEn: 'Authentic gentle camel trek through tranquil village paths and riverbank dunes.',
    descAr: 'جولة ركوب جمال هادئة بمحاذاة الكثبان الرملية وضفاف النيل والقرى النوبية العريقة.',
    priceUsd: 15,
    priceEgp: 750,
    durationEn: '2 Hours',
    durationAr: 'ساعتان'
  },
  {
    id: 'nubian-village',
    titleEn: 'Nubian Village Cultural Tour',
    titleAr: 'جولة ثقافية وتراثية بالقرية النوبية',
    descEn: 'Meet local craftsmen, learn heritage traditions, and taste fresh sun-dried karkadeh.',
    descAr: 'زيارة لبيوت نوبية أصيلة، والتعرف على الحرف التراثية والعمارة والضيافة النوبية.',
    priceUsd: 12,
    priceEgp: 600,
    durationEn: '2 Hours',
    durationAr: 'ساعتان'
  },
  {
    id: 'botanical-garden',
    titleEn: 'Aswan Botanical Garden Visit',
    titleAr: 'زيارة حديقة النباتات الاستوائية (جزيرة النباتات)',
    descEn: 'Stroll under exotic royal palms and ancient mahogany hosting songbirds and sunbirds.',
    descAr: 'جولة في الجزيرة الخضراء بين أندر الأشجار الاستوائية وملاذ الطيور المغردة كطائر الشمس النيلي.',
    priceUsd: 10,
    priceEgp: 500,
    durationEn: '2 Hours',
    durationAr: 'ساعتان'
  }
];

export const pricingConfig = {
  childDiscountMultiplier: 0.5, // 50% off for kids under 12
  groupDiscountMinGuests: 5,     // 10% discount when guests >= 5
  groupDiscountRate: 0.10,
  privateBoatUpgradeUsd: 40,
  privateBoatUpgradeEgp: 2000
};

// 6 Core Tours
export const toursData = {
  'nile-tour': {
    id: 'nile-tour',
    aliasId: 'nile-birds',
    title: 'Nile Birdwatching Tour',
    titleAr: 'جولة رصد طيور النيل',
    category: 'avian',
    categoryLabelEn: 'Avian Tours',
    categoryLabelAr: 'جولات رصد الطيور',
    zone: 'nile',
    zoneLabelEn: 'Nile Zone (First Cataract Islands)',
    zoneLabelAr: 'منطقة النيل (جزر الشلال الأول)',
    location: 'Nile River – Aswan',
    locationAr: 'نهر النيل — أسوان',
    startingMarinaEn: 'Nile Corniche, near Ferial Garden, Aswan',
    startingMarinaAr: 'كورنيش النيل، بالقرب من حديقة فريال، أسوان',
    duration: '2 Hours',
    durationAr: 'ساعتان',
    durationHours: 2,
    disembarkTypeEn: 'No — Boat-Only Experience',
    disembarkTypeAr: 'بدون نزول — تجربة بالقارب بالكامل',
    boatOnly: true,
    currency: 'EUR',
    currencySymbol: '€',
    priceEur: 55,
    priceDisplay: '€55 - €60',
    pricePrivateTourEur: 230,
    priceUsd: 60,
    priceEgp: '2,900 EGP',
    priceNumber: 55,
    priceEgpNumber: 2900,
    pricingTiers: [
      {
        tierEn: 'Group Tour (4–7 persons)',
        tierAr: 'مجموعة (٤ - ٧ أفراد)',
        price: '€60',
        unitEn: 'per person',
        unitAr: 'للشخص'
      },
      {
        tierEn: 'Group Tour (8–20 persons)',
        tierAr: 'مجموعة (٨ - ٢٠ فرداً)',
        price: '€55',
        unitEn: 'per person',
        unitAr: 'للشخص'
      },
      {
        tierEn: 'Private Tour (1–3 persons)',
        tierAr: 'جولة خاصة (١ - ٣ أفراد)',
        price: '€230',
        unitEn: 'per tour',
        unitAr: 'للرحلة بالكامل'
      }
    ],
    pricingNoteEn: 'Prices excluding hotel pickup and drop-off services.',
    pricingNoteAr: 'الأسعار لا تشمل خدمات التوصيل من وإلى الفندق.',
    badge: 'Boat-Only • Engine-Off Quiet',
    badgeAr: 'بالقارب فقط • إطفاء المحرك للتأمل',
    eyebrow: 'FIRST CATARACT SERENITY',
    eyebrowAr: 'هدوء وسكينة الشلال الأول',
    image: '/assets/kingfisher.webp',
    desc: "Discover the beautiful birds of the Nile on a relaxing boat trip through Aswan's scenic river landscapes. Explore the islands and natural habitats around the First Cataract, with opportunities to observe and photograph a variety of resident and migratory birds.",
    descAr: 'اكتشف الطيور الخلابة في نيل أسوان خلال رحلة ممتعة وهادئة بالقارب عبر المناظر النهرية الساحرة. استكشف الجزر والموائل الطبيعية حول الشلال الأول، مع فرصة ممتازة لرصد وتصوير مجموعة متنوعة من الطيور المقيمة والمهاجرة.',
    keyDifferentiators: [
      '5–10 min hands-on coaching on binoculars & spotting scopes before setting sail',
      'Boat-only experience keeping you close to undisturbed waterbirds and reed beds',
      'Engine-off quiet spot after ~1h 20m for traditional tea, birdsong & rooftop photography',
      'Returns via an alternate scenic route showcasing iconic Nile islands and landmarks'
    ],
    keyDifferentiatorsAr: [
      'تدريب عملي ٥-١٠ دقائق على استخدام المناظير والتلسكوبات قبل الإبحار',
      'تجربة بالقارب فقط تضمن الاقتراب الهادئ من الطيور وأحواض القصب دون إزعاجها',
      'إطفاء المحرك بالكامل في بقعة معزولة بعد ساعة وثلث لشرب الشاي وتصوير الطيور في صمت',
      'طريق عودة بديل ومختلف لاستكشاف معالم وجزر النيل الخلابة'
    ],
    mealsDrinksEn: 'Complimentary authentic Nubian karkadeh and hot mint tea served on boat',
    mealsDrinksAr: 'مشروبات نوبية تقليدية مجانية (كركديه بارد وشاي بالنعناع) على القارب',
    primaryFocusEn: 'Pure Birdwatching & Engine-Off Acoustic Immersion',
    primaryFocusAr: 'رصد تخصصي للطيور والاندماج السمعي مع الطبيعة',
    inclusions: [
      'Nikon & Celestron 8x42 field birding binoculars',
      'Boat-mounted high-resolution spotting telescope (20–60x)',
      'Certified local ornithologist & wildlife guide',
      'Fresh bottled water & traditional Nubian herbal drinks',
      'Coast Guard certified life jackets for all ages',
      'Color field bird checklist & species log'
    ],
    inclusionsAr: [
      'مناظير رصد احترافية نيكون وسيليسترون 8x42',
      'تلسكوب رصد بعيد المدى (20–60x) مثبت على القارب',
      'مرشد بيئي وباحث طيور محلي معتمد',
      'مياه معدنية مثلجة ومشروبات أعشاب نوبية تقليدية',
      'سترات نجاة مرخصة من خفر السواحل لجميع الأعمار',
      'قائمة مصورة لطيور أسوان لتوثيق المشاهدات'
    ],
    itinerary: [
      {
        time: '00:00 - 00:15',
        titleEn: 'Marina Meetup & Optics Coaching',
        titleAr: 'التجمع بالمرسى وتدريب المناظير',
        descEn: 'Meet at Ferial Garden Marina. 10-minute coaching on binocular focusing and sighting techniques.',
        descAr: 'اللقاء عند مرسى حديقة فريال. تدريب عملي ١٠ دقائق على ضبط بؤرة المنظار وتقنيات الرصد.'
      },
      {
        time: '00:15 - 01:20',
        titleEn: 'Granite Labyrinth Navigation',
        titleAr: 'الإبحار في متاهة الجرانيت',
        descEn: 'Slow glide around protected granite boulders spotting Pied Kingfishers, Herons, and Egrets.',
        descAr: 'إبحار بطيء بين الصخور المحمية لرصد صياد السمك الأبقع والبلشون وغراب الماء.'
      },
      {
        time: '01:20 - 01:45',
        titleEn: 'Engine-Off Serenity Session',
        titleAr: 'جلسة إطفاء المحرك والهدوء التام',
        descEn: 'Engine is turned completely off in a sheltered cove. Sip cold karkadeh, listen to nature calls, and shoot telephoto photos.',
        descAr: 'إطفاء المحرك تماماً في خليج نهري هادئ. احتساء الكركديه، الاستماع لتغريد الطيور، وتصوير الزوايا الساحرة.'
      },
      {
        time: '01:45 - 02:00',
        titleEn: 'Scenic Alternate Return Glide',
        titleAr: 'طريق العودة البديل الخلاب',
        descEn: 'Return via the western channel passing Elephantine and historical Nilometer landmarks.',
        descAr: 'العودة عبر المجرى الغربي مروراً بجزيرة إلفنتين ومقياس النيل الأثري.'
      }
    ]
  },

  'reservoir-tour': {
    id: 'reservoir-tour',
    aliasId: 'aswan-reservoir',
    title: 'Reservoir Birdwatching Tour',
    titleAr: 'جولة رصد طيور خزان أسوان',
    category: 'avian',
    categoryLabelEn: 'Avian Tours',
    categoryLabelAr: 'جولات رصد الطيور',
    zone: 'reservoir',
    zoneLabelEn: 'Reservoir Zone (High Dam & Old Dam)',
    zoneLabelAr: 'منطقة الخزان (السد العالي وخزان أسوان)',
    location: 'Aswan Reservoir – between the High Dam and the Old Aswan Dam',
    locationAr: 'خزان أسوان — بين السد العالي وسد أسوان القديم',
    startingMarinaEn: 'Aswan Reservoir Marina, near the Old Aswan Dam',
    startingMarinaAr: 'مرسى خزان أسوان، بالقرب من سد أسوان القديم',
    duration: '2 Hours',
    durationAr: 'ساعتان',
    durationHours: 2,
    disembarkTypeEn: 'Yes — Land Stops for Photography',
    disembarkTypeAr: 'نعم — نزول باليابسة والتوقف للتصوير',
    boatOnly: false,
    currency: 'EUR',
    currencySymbol: '€',
    priceEur: 55,
    priceDisplay: '€55 - €60',
    pricePrivateTourEur: 230,
    priceUsd: 60,
    priceEgp: '2,900 EGP',
    priceNumber: 55,
    priceEgpNumber: 2900,
    pricingTiers: [
      {
        tierEn: 'Group Tour (4–7 persons)',
        tierAr: 'مجموعة (٤ - ٧ أفراد)',
        price: '€60',
        unitEn: 'per person',
        unitAr: 'للشخص'
      },
      {
        tierEn: 'Group Tour (8–20 persons)',
        tierAr: 'مجموعة (٨ - ٢٠ فرداً)',
        price: '€55',
        unitEn: 'per person',
        unitAr: 'للشخص'
      },
      {
        tierEn: 'Private Tour (1–3 persons)',
        tierAr: 'جولة خاصة (١ - ٣ أفراد)',
        price: '€230',
        unitEn: 'per tour',
        unitAr: 'للرحلة بالكامل'
      }
    ],
    pricingNoteEn: 'Prices excluding hotel pickup and drop-off services.',
    pricingNoteAr: 'الأسعار لا تشمل خدمات التوصيل من وإلى الفندق.',
    badge: 'Land Stops • Mountain Raptors',
    badgeAr: 'نزول باليابسة • جوارح الجبال',
    eyebrow: 'RAPTORS & MOUNTAIN WETLAND',
    eyebrowAr: 'محمية الجوارح والمسطح الجبلي',
    image: '/assets/stork.webp',
    desc: 'Enjoy a private boat trip through the beautiful waters of the Aswan Reservoir. Discover its diverse birdlife, explore important bird habitats, and enjoy the peaceful landscapes while learning about the region\'s biodiversity and aquatic ecosystems.',
    descAr: 'استمتع برحلة قارب خاصة عبر مياه خزان أسوان الهادئة والخلابة. اكتشف تنوع الطيور النادرة، واستكشف أهم موائل الطيور واستمتع بالطبيعة الساحرة مع التعرف على التنوع البيولوجي والأنظمة البيئية المائية في المنطقة.',
    keyDifferentiators: [
      'Mountainous terrain attracting cliff-dwelling raptors and soaring birds absent from the lower Nile',
      'Designated land disembarkation stops on rocky points for elevated telephoto angles',
      'Zero commercial cruise ship traffic: pure mirror-glass water and silence',
      'High-power spotting telescope with smartphone adapter for extreme-distance closeups'
    ],
    keyDifferentiatorsAr: [
      'طبيعة جبلية تجذب الجوارح والطيور المحلقة التي لا تتواجد في مجرى النيل السفلي',
      'نزول مخصص على جزر وتكوينات صخرية لالتقاط صور احترافية بزوايا مرتفعة',
      'خلو تام من المراكب السياحية الكبيرة وصخب المدينة: مياه كالمرايا وهدوء مطلق',
      'تلسكوب رصد فائق القوة مزود بمحول للهواتف الذكية لتصوير أدق التفاصيل من بعد'
    ],
    mealsDrinksEn: 'Complimentary chilled water, fresh seasonal fruits, and Nubian beverages',
    mealsDrinksAr: 'مياه مثلجة، سلة فواكه طازجة، ومشروبات نوبية لذيذة',
    primaryFocusEn: 'Mountain Raptors, Migratory Storks & Rocky Island Landings',
    primaryFocusAr: 'طيور الجوارح، اللقالق المهاجرة، والنزول على التلال الصخرية',
    inclusions: [
      'Professional binoculars calibrated for distance spotting',
      'Extreme telephoto spotting scope with phone mount',
      'Licensed eco-boat with native captain',
      'Expert raptor and waterfowl naturalist guide',
      'Designated island disembarkation permissions',
      'Safety vests & certified first aid kit'
    ],
    inclusionsAr: [
      'مناظير احترافية مخصصة للرصد بعيد المدى',
      'تلسكوب رصد فائق التقريب مع قاعدة تثبيت الهاتف للتصوير',
      'قارب بيئي مرخص مع قبطان نوبي خبير ببحيرة الخزان',
      'مرشد بيئي متخصص في طيور الجوارح والبيئات الرطبة',
      'تصاريح النزول في الجزر الصخرية المختارة',
      'سترات أمان وحقيبة إسعافات متكاملة'
    ],
    itinerary: [
      {
        time: '00:00 - 00:20',
        titleEn: 'Batanioun Marina Departure',
        titleAr: 'الانطلاق من مرسى بطنيون',
        descEn: 'Board near Nubia Museum. Safety briefing and panoramic departure facing the reservoir basin.',
        descAr: 'ركوب القارب بالقرب من متحف النوبة. شرح السلامة والانطلاق نحو مسطح الخزان الواسع.'
      },
      {
        time: '00:20 - 01:00',
        titleEn: 'Cliff Raptor Observation',
        titleAr: 'رصد الجوارح على حواف الجبال',
        descEn: 'Slow navigation along granite cliffs scanning for Ospreys, Falcons, and resting Cormorants.',
        descAr: 'إبحار بمحاذاة المنحدرات الصخرية لرصد العقاب النساري والصقور وغراب الماء.'
      },
      {
        time: '01:00 - 01:35',
        titleEn: 'Rocky Island Disembarkation',
        titleAr: 'النزول على الجزيرة الصخرية',
        descEn: 'Disembark on designated rocky viewpoint for photography, telescope scans, and refreshments.',
        descAr: 'النزول في نقطة صخرية استراتيجية للتصوير الفوتوغرافي والرصد بالتلسكوب وتناول المرطبات.'
      },
      {
        time: '01:35 - 02:00',
        titleEn: 'Sunset Reservoir Drift',
        titleAr: 'إبحار العودة مع ألوان الغروب',
        descEn: 'Gliding across golden reflections back to Batanioun Marina while logging species.',
        descAr: 'العودة الهادئة عبر انعكاسات الشفق الذهبي إلى مرسى بطنيون مع توثيق القائمة.'
      }
    ]
  },

  'special-tour': {
    id: 'special-tour',
    aliasId: 'special-birding',
    title: 'Special Tour',
    titleAr: 'الجولة الخاصة المدمجة',
    category: 'avian',
    categoryLabelEn: 'Avian Tours',
    categoryLabelAr: 'جولات رصد الطيور',
    zone: 'nile',
    zoneLabelEn: 'Nile Zone (First Cataract Islands)',
    zoneLabelAr: 'منطقة النيل (جزر الشلال الأول)',
    startingMarinaEn: 'Ferial Garden Marina',
    startingMarinaAr: 'مرسى حديقة فريال',
    duration: '6 Hours',
    durationAr: '٦ ساعات',
    durationHours: 6,
    disembarkTypeEn: 'Yes — Island Lunch + 2h Custom Activity',
    disembarkTypeAr: 'نعم — غداء بالجزيرة ونشاط بري مخصص لساعتين',
    boatOnly: false,
    priceUsd: 85,
    priceEgp: '4,250 EGP',
    priceNumber: 85,
    priceEgpNumber: 4250,
    badge: 'Full Day • 2h Custom Land Activity',
    badgeAr: 'يوم كامل • نشاط بري مخصص لساعتين',
    eyebrow: 'BIRDWATCHING + CUSTOM ADVENTURE',
    eyebrowAr: 'رصد طيور + مغامرة حسب رغبتك',
    image: '/assets/goose.webp',
    desc: 'The ultimate bespoke nature expedition. Combines a 2-hour guided birdwatching cruise, an authentic home-cooked island lunch & rest break, and a full 2-hour custom land activity chosen by your group.',
    descAr: 'الرحلة الطبيعية الشاملة والأكثر مرونة. تجمع بين ساعتين من رصد الطيور بالقارب، واستراحة غداء نوبي طازج على جزيرة نيلية، وساعتين كاملتين لنشاط بري من اختيار مجموعتك.',
    keyDifferentiators: [
      '2-hour premium birdwatching cruise with pro optics and personal naturalist',
      'Delicious authentic home-cooked Nubian lunch and relaxation on a shaded island',
      '2 full hours of customizable activity: Hiking in Soheil, Camel Ride, Nubian Village, or Botanical Garden',
      'Full private chartered boat with flexible pace tailored to your group needs'
    ],
    keyDifferentiatorsAr: [
      'ساعتان من الإبحار التخصصي لرصد الطيور بأحدث المناظير مع باحث بيئي خاص',
      'غداء نوبي منزلي طازج وشهي وجلسة استرخاء ممتعة على إحدى الجزر المظللة',
      'ساعتان كاملتان لنشاط من اختيارك: هايكنج في سهيل، ركوب جمال، القرية النوبية، أو حديقة النباتات',
      'قارب خاص بالكامل مع وتيرة مريحة ومرنة مخصصة لراحتك وتصويرك'
    ],
    mealsDrinksEn: 'Fresh authentic home-cooked island lunch, seasonal fruits, snacks, and Nubian beverages',
    mealsDrinksAr: 'غداء نوبي طازج معد على الجزيرة، فواكه موسمية، سناكس، ومشروبات طوال اليوم',
    primaryFocusEn: '2h Birding Cruise + Island Lunch + 2h Custom Group Activity',
    primaryFocusAr: 'ساعتان رصد بالقارب + غداء بالجزيرة + ساعتان نشاط حسب رغبتك',
    inclusions: [
      'Full-day private chartered boat with captain',
      'Pro optics kit (Binoculars & 60x Scope)',
      'Home-cooked 3-course Nubian island lunch',
      'Selected 2-hour custom land activity with local guide',
      'Unlimited bottled water, juices, and hot Nubian coffee/tea',
      'All local access fees and island docking permits'
    ],
    inclusionsAr: [
      'قارب خاص بالكامل طوال اليوم مع القبطان',
      'عدة بصرية متطورة (مناظير وتلسكوب 60x)',
      'وجبة غداء نوبية متكاملة طازجة على الجزيرة',
      'نشاط بري لمدة ساعتين من اختيارك مع مرشد محلي',
      'مياه معدنية وعصائر طبيعية وشاي وقهوة نوبية طوال الرحلة',
      'كافة رسوم وتصاريح الرسو والنزول بالجزر'
    ],
    itinerary: [
      {
        time: '08:00 - 10:00',
        titleEn: 'Part 1: Morning Birdwatching Cruise',
        titleAr: 'الجزء الأول: جولة رصد الطيور الصباحية',
        descEn: '2-hour focused river navigation through First Cataract islets during peak bird activity hours.',
        descAr: 'ساعتان من الإبحار الاستكشافي ورصد الطيور في ذروة نشاطها الصباحي بين جزر الشلال الأول.'
      },
      {
        time: '10:00 - 12:00',
        titleEn: 'Part 2: Island Lunch & Nature Relaxation',
        titleAr: 'الجزء الثاني: غداء نوبي واستراحة بالجزيرة',
        descEn: 'Disembark on a private secluded island. Savor authentic Nubian lunch, fresh karkadeh, and relax.',
        descAr: 'نزول في جزيرة هادئة، تناول غداء نوبي منزلي شهي، شرب الكركديه، والاستراحة في ظلال النخيل.'
      },
      {
        time: '12:00 - 14:00',
        titleEn: 'Part 3: Your 2-Hour Custom Activity',
        titleAr: 'الجزء الثالث: ساعتان للنشاط المخصص',
        descEn: 'Embark on your pre-selected experience: Soheil Island Hiking, Camel Riding, Nubian Village, or Botanical Garden.',
        descAr: 'الانطلاق في النشاط الذي اخترته: هايكنج في سهيل، أو ركوب الجمال، أو جولة القرية النوبية، أو حديقة النباتات.'
      }
    ]
  },

  'hapi-tour': {
    id: 'hapi-tour',
    aliasId: 'hapi-pharaohs',
    title: 'Hapi Tour',
    titleAr: 'جولة حابي النيلية',
    category: 'pharaohs',
    categoryLabelEn: 'Pharaohs Birding Tours',
    categoryLabelAr: 'جولات طيور الفراعنة',
    zone: 'nile',
    zoneLabelEn: 'Nile Zone (First Cataract Islands)',
    zoneLabelAr: 'منطقة النيل (جزر الشلال الأول)',
    startingMarinaEn: 'Ferial Garden Marina',
    startingMarinaAr: 'مرسى حديقة فريال',
    duration: '3–4 Hours',
    durationAr: '٣ - ٤ ساعات',
    durationHours: 3.5,
    disembarkTypeEn: 'Yes — Direct Nile-Front Venue Seating',
    disembarkTypeAr: 'نعم — جلسة شاطئية مباشرة على ضفاف النيل',
    boatOnly: false,
    priceUsd: 50,
    priceEgp: '2,500 EGP',
    priceNumber: 50,
    priceEgpNumber: 2500,
    badge: 'Pharaohs • Nile-Front Jabana Session',
    badgeAr: 'فراعنة • جلسة قهوة جبنة نيلية',
    eyebrow: 'GOD OF THE NILE INUNDATION',
    eyebrowAr: 'حابي وإله فيضان النيل المبارك',
    image: '/assets/pharaonic-birds-fresco.jpg',
    desc: 'Connect the sacred river birds of Aswan with Hapi, the Ancient Egyptian deity of the life-giving annual flood. Combines a 2-hour birding cruise with 1–2 hours relaxing at a direct Nile-front venue enjoying traditional Nubian Jabana coffee.',
    descAr: 'اربط بين طيور النيل الحية ورمزيتها لدى الإله حابي مجلب الخير وفيضان النيل السنوي. تجمع الرحلة بين ساعتي إبحار ورصد للطيور مع جلسة نيلية مريحة لمدة ساعة إلى ساعتين لتناول قهوة الجبنة النوبية وسماع الحكايات التراثية.',
    keyDifferentiators: [
      '2-hour Nile birdwatching cruise exploring sacred river fowl channels',
      '1–2 hours seated at an authentic direct Nile-front venue on the shoreline',
      'Fresh Nubian Jabana coffee brewed with cardamon and ginger served onshore',
      'Engaging storytelling connecting living birds with Hapi and Nile mythology'
    ],
    keyDifferentiatorsAr: [
      'ساعتان رصد للطيور بالقارب واستكشاف موائل الطيور المقدسة في الديانة المصرية القديمة',
      'ساعة إلى ساعتين في جلسة شاطئية ساحرة ومباشرة على ضفاف النيل',
      'قهوة الجبنة النوبية الأصيلة بالزنجبيل والحبهان تُقدم طازجة على الضفاف',
      'سرد شائق يربط بين الطيور الحية التي تراها أمامك ونقوش الإله حابي وأساطير النيل'
    ],
    mealsDrinksEn: 'Authentic Nubian Jabana coffee, traditional herbal tea, and regional snacks served onshore',
    mealsDrinksAr: 'قهوة الجبنة النوبية الفاخرة وشاي الأعشاب والمقرمشات التراثية على ضفاف النيل',
    primaryFocusEn: '2h Birding Cruise + 1-2h Onshore Nile-Front Session & Mythic Lore',
    primaryFocusAr: 'ساعتان إبحار + ١-٢ ساعة جلسة نيلية وسرد أساطير حابي التراثية',
    inclusions: [
      'Private river boat with expert captain',
      'Binoculars and field reference guides',
      'Cultural ornithologist and heritage storyteller',
      'Nile-front venue reservation and seating',
      'Traditional Jabana coffee brewing session & drinks',
      'Aswan sacred birds illustrated booklet'
    ],
    inclusionsAr: [
      'قارب نيلي خاص مع قبطان متمرس',
      'مناظير رصد وأدلة حقلية ملونة',
      'مرشد بيئي وباحث في التراث والميثولوجيا المصرية',
      'حجز وجلسة خاصة في موقع نيلي مباشر',
      'جلسة إعداد قهوة الجبنة التراثية والمشروبات',
      'كتيب مصور لطيور أسوان في الحضارة القديمة'
    ],
    itinerary: [
      {
        time: '00:00 - 02:00',
        titleEn: 'Hapi Sacred Bird Cruise',
        titleAr: 'إبحار رصد طيور حابي المقدسة',
        descEn: '2-hour cruise identifying waterfowl associated with fertility and creation in Ancient Egypt.',
        descAr: 'ساعتان إبحار لرصد الطيور المائية المرتبطة بالخصوبة والوفرة والفيضان في مصر القديمة.'
      },
      {
        time: '02:00 - 03:30',
        titleEn: 'Nile-Front Jabana & Lore',
        titleAr: 'جلسة قهوة الجبنة النوبية وحكايات النيل',
        descEn: 'Disembark at exclusive riverfront venue. Freshly roasted Jabana coffee, sunset atmosphere, and storytelling.',
        descAr: 'نزول في جلسة شاطئية ساحرة. تحميص وإعداد قهوة الجبنة، الاستمتاع بأجواء الغروب، وسرد القصص التراثية.'
      }
    ]
  },

  'horus-tour': {
    id: 'horus-tour',
    aliasId: 'horus-pharaohs',
    title: 'Horus Tour',
    titleAr: 'جولة حورس الأسطورية',
    category: 'pharaohs',
    categoryLabelEn: 'Pharaohs Birding Tours',
    categoryLabelAr: 'جولات طيور الفراعنة',
    zone: 'reservoir',
    zoneLabelEn: 'Reservoir Zone (Facing Philae Temple)',
    zoneLabelAr: 'منطقة الخزان (المقابلة لمعبد فيلة)',
    startingMarinaEn: 'Batanioun (Miraya) Marina near Nubia Museum',
    startingMarinaAr: 'مرسى بطنيون (المرايا) قرب متحف النوبة',
    duration: '3 Hours',
    durationAr: '٣ ساعات',
    durationHours: 3,
    disembarkTypeEn: 'Yes — Soleil Café Facing Philae Temple',
    disembarkTypeAr: 'نعم — كافيه سوليل بمواجهة معبد فيلة',
    boatOnly: false,
    priceUsd: 55,
    priceEgp: '2,750 EGP',
    priceNumber: 55,
    priceEgpNumber: 2750,
    badge: 'Soleil Café • Facing Philae Temple',
    badgeAr: 'كافيه سوليل • بمواجهة معبد فيلة',
    eyebrow: 'THE FALCON & TEMPLE RELIEFS',
    eyebrowAr: 'الصقر حورس وإطلالة معبد فيلة',
    image: '/assets/horus-falcon-fresco.jpg',
    desc: 'A divine cultural voyage on the Reservoir. Cruise the serene waters for raptors and soaring birds, then disembark for 1 hour at the scenic Soleil Café (Eco Nubia) with unobstructed panoramic views facing Philae Temple, enjoying traditional drinks and divine falcon lore.',
    descAr: 'رحلة أسطورية في مسطح الخزان الهادئ. تبدأ بجولة رصد الصقور والجوارح، ثم النزول لمدة ساعة في كافيه سوليل الشهير (إيكو نوبيا) بإطلالة بانورامية لا تُنسى في مواجهة معبد فيلة، مع المشروبات وحكايات الإله حورس.',
    keyDifferentiators: [
      '2-hour birdwatching cruise in the quiet mountain waters of the Reservoir',
      '1 full hour disembarkation at Soleil Café (Eco Nubia Hotel) facing Philae Temple',
      'Spectacular direct photography view of the temple pylon across the water',
      'Storytelling on Horus the divine falcon, Nekhbet the protector vulture, and temple reliefs'
    ],
    keyDifferentiatorsAr: [
      'ساعتان رصد للطيور في المياه الجبلية الهادئة لبحيرة الخزان',
      'ساعة كاملة نزول في كافيه سوليل (إيكو نوبيا) مباشرة بمواجهة معبد فيلة',
      'زاوية تصوير فوتوغرافي استثنائية لصرح المعبد عبر صفحة المياه',
      'سرد شيق عن الصقر حورس، النسر نخبت، والرموز الإلهية المنقوشة على الجدران'
    ],
    mealsDrinksEn: 'Complimentary traditional hot/cold drinks at Soleil Café overlooking Philae Temple',
    mealsDrinksAr: 'مشروبات تقليدية فاخرة في كافيه سوليل بإطلالة مباشرة على معبد فيلة',
    primaryFocusEn: 'Reservoir Raptor Birding + 1h at Soleil Café & Deity Lore',
    primaryFocusAr: 'رصد الجوارح بالخزان + ساعة في كافيه سوليل وحكايات حورس',
    inclusions: [
      'Private eco-boat cruise from Batanioun Marina',
      'High-power optics for soaring raptor observation',
      'Reserved panoramic seating at Soleil Café',
      'Traditional Nubian drink of choice at the café',
      'Heritage guide specializing in Egyptian avian deities',
      'Temple-view photo assistance & species checklist'
    ],
    inclusionsAr: [
      'قارب بيئي خاص من مرسى بطنيون',
      'مناظير رصد فائقة الدقة لمتابعة الجوارح في السماء',
      'طاولة محجوزة بإطلالة بانورامية في كافيه سوليل',
      'مشروب نوبي تقليدي من اختيارك في الكافيه',
      'مرشد تاريخي وبيئي متخصص في دلالات الطيور الفرعونية',
      'مساعدة في التقاط صور تذكارية للمعبد وقائمة توثيق'
    ],
    itinerary: [
      {
        time: '00:00 - 02:00',
        titleEn: 'Reservoir Raptor & Wetland Cruise',
        titleAr: 'إبحار رصد الجوارح بالخزان',
        descEn: 'Cruise the scenic reservoir waters spotting Peregrine Falcons, Ospreys, and Herons along granite banks.',
        descAr: 'إبحار هادئ لرصد صقور الشاهين والعقاب النساري والبلشون بمحاذاة الشواطئ الصخرية.'
      },
      {
        time: '02:00 - 03:00',
        titleEn: 'Soleil Café Stop & Philae View',
        titleAr: 'استراحة كافيه سوليل وإطلالة فيلة',
        descEn: 'Disembark at Eco Nubia island. Relax at Soleil Café with drinks directly facing the temple pylon, enjoying Horus mythology.',
        descAr: 'نزول في جزيرة إيكو نوبيا. الاسترخاء بكافيه سوليل بمواجهة المعبد، وتناول المشروبات مع حكايات الصقر حورس.'
      }
    ]
  },

  'isis-tour': {
    id: 'isis-tour',
    aliasId: 'isis-pharaohs',
    title: 'Isis Tour (Full-Day Flagship)',
    titleAr: 'جولة إيزيس الكبرى (الرحلة الشاملة)',
    category: 'pharaohs',
    categoryLabelEn: 'Pharaohs Birding Tours',
    categoryLabelAr: 'جولات طيور الفراعنة',
    zone: 'reservoir',
    zoneLabelEn: 'Reservoir Zone (Philae Temple & Basin)',
    zoneLabelAr: 'منطقة الخزان (معبد فيلة ومسطح الخزان)',
    startingMarinaEn: 'Batanioun (Miraya) Marina',
    startingMarinaAr: 'مرسى بطنيون (المرايا)',
    duration: '8 Hours',
    durationAr: '٨ ساعات',
    durationHours: 8,
    disembarkTypeEn: 'Yes — Specialized Philae Tour + Soleil Lunch',
    disembarkTypeAr: 'نعم — جولة طيور معبد فيلة + غداء بمطعم سوليل',
    boatOnly: false,
    priceUsd: 110,
    priceEgp: '5,500 EGP',
    priceNumber: 110,
    priceEgpNumber: 5500,
    badge: 'Flagship Full-Day • Specialized Temple Tour',
    badgeAr: 'الرحلة الشاملة • جولة طيور معبد فيلة',
    eyebrow: 'THE SACRED BIRDS OF PHILAE',
    eyebrowAr: 'طيور فيلة المقدسة بين النقوش والطبيعة',
    image: '/assets/sacred-ibis-fresco.jpg',
    desc: 'Our premier all-inclusive flagship expedition. Combines a 1.5–2 hour specialized Philae Temple tour decoding bird hieroglyphs and reliefs, live reservoir birdwatching to spot surviving species, and a gourmet lunch at Soleil Restaurant facing the temple.',
    descAr: 'الرحلة الرائدة والأشمل في أسوان. تجمع بين جولة خاصة (ساعة ونصف إلى ساعتين) في معبد فيلة لفك أسرار نقوش ورموز الطيور، تليها جولة رصد حية في مياه الخزان لمقارنة الطيور المنقوشة بالأنواع الحية، مع غداء متكامل بمطعم سوليل الفاخر المطل على المعبد.',
    keyDifferentiators: [
      '1.5–2 hr specialized Philae Temple tour focused specifically on bird reliefs & hieroglyphs rather than generic history',
      'Live vs. Ancient Comparison: spot the exact living species depicted on temple walls and learn which survived or went extinct',
      'Full gourmet lunch served at Soleil Restaurant/Café directly overlooking Philae Temple island',
      'Comprehensive 8-hour VIP immersion led by an Egyptologist-Ornithologist duo'
    ],
    keyDifferentiatorsAr: [
      'جولة تخصصية لمدة ساعتين في معبد فيلة مكرسة لنقوش وبرديات الطيور والرموز الهيروغليفية',
      'مقارنة حية فريدة: رصد نفس أنواع الطيور الحية التي تراها منقوشة ومعرفة ما بقي منها وما اندثر',
      'غداء فاخر كامل يُقدم في مطعم سوليل بإطلالة بانورامية ساحرة على المعبد والبحيرة',
      'تجربة متكاملة لمدة ٨ ساعات بقيادة باحث أثري وخبير طيور محلي'
    ],
    mealsDrinksEn: 'Full curated gourmet lunch at Soleil Restaurant overlooking Philae Temple, plus continuous refreshments',
    mealsDrinksAr: 'غداء كامل فاخر بمطعم سوليل المطل على معبد فيلة، ومشروبات منعشة طوال اليوم',
    primaryFocusEn: 'Specialized Temple Bird Reliefs + Live Comparative Birding + Gourmet Lunch',
    primaryFocusAr: 'نقوش طيور المعبد التخصصية + رصد حي مطابق + غداء فاخر',
    inclusions: [
      'Full-day private chartered reservoir boat',
      'Philae Temple admission & boat docking transfers',
      '1.5–2 hr specialized temple bird reliefs guided walk',
      'Full gourmet 3-course lunch at Soleil Restaurant',
      'Live vs. Ancient comparative field notebook',
      'High-end binoculars and spotting scope for water session',
      'Unlimited mineral water, fruit juices, and Nubian beverages'
    ],
    inclusionsAr: [
      'قارب خاص ببحيرة الخزان طوال اليوم',
      'تصاريح ورسوم دخول ورسو معبد فيلة',
      'جولة استكشافية متخصصة لساعتين لنقوش الطيور بالمعبد',
      'وجبة غداء فاخرة من ٣ أطباق بمطعم سوليل',
      'دفتر حقلي مصور للمقارنة بين الطيور الحية والمنقوشة',
      'مناظير وتلسكوبات رصد احترافية للجولة المائية',
      'مياه معدنية وعصائر طبيعية ومشروبات نوبية طوال اليوم'
    ],
    itinerary: [
      {
        time: '08:00 - 10:00',
        titleEn: 'Morning Reservoir Nature Cruise',
        titleAr: 'إبحار الصباح في بحيرة الخزان',
        descEn: 'Early morning cruise scanning cliffs and reed beds for migratory waterfowl and raptors.',
        descAr: 'إبحار باكر لرصد الطيور المائية والجوارح الصباحية بين التكوينات الجرانيتية.'
      },
      {
        time: '10:00 - 12:00',
        titleEn: 'Specialized Philae Bird Reliefs Tour',
        titleAr: 'جولة نقوش الطيور المتخصصة بمعبد فيلة',
        descEn: 'Disembark at Philae Island. 2 hours decoding Horus falcons, Bennu herons, and sacred ibises on temple walls.',
        descAr: 'النزول بجزيرة فيلة. ساعتان لدراسة نقوش صقور حورس، وطائر البنو، وطائر أبو منجل المقدس على الجدران.'
      },
      {
        time: '12:30 - 14:30',
        titleEn: 'Gourmet Lunch at Soleil Restaurant',
        titleAr: 'غداء فاخر بمطعم سوليل',
        descEn: 'Delicious multi-course lunch at Eco Nubia overlooking the temple, with traditional coffee & tea.',
        descAr: 'غداء راقٍ بمطعم سوليل بإطلالة مباشرة على المعبد، مع القهوة والشاي النوبي.'
      },
      {
        time: '14:30 - 16:00',
        titleEn: 'Live vs. Ancient Comparison Cruise',
        titleAr: 'إبحار المقارنة الحية وتوثيق الأنواع',
        descEn: 'Glide the surrounding channels spotting the living descendants of the birds observed on the reliefs.',
        descAr: 'جولة رصد ختامية لمطابقة الطيور الحية مع النقوش التي تم توثيقها بالمعبد.'
      }
    ]
  }
};

// Aliases for seamless backward compatibility
toursData['nile-birds'] = toursData['nile-tour'];
toursData['aswan-reservoir'] = toursData['reservoir-tour'];
toursData['special-birding'] = toursData['special-tour'];

// Clean array of the 6 distinct tours
export const toursList = [
  toursData['nile-tour'],
  toursData['reservoir-tour'],
  toursData['special-tour'],
  toursData['hapi-tour'],
  toursData['horus-tour'],
  toursData['isis-tour']
];
