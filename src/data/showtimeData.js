// Real data for Showtime Private Movie Theatre - Pondicherry
export const SHOWTIME_INFO = {
  name: 'SHOWTIME',
  tagline: 'Private Movie Theatre & Surprise Planners',
  location: 'Pondicherry, India',
  phone: '+91 93606 XXXXX',
  instagram: 'https://www.instagram.com/showtime_privatemovietheatre/',
  facebook: 'https://www.facebook.com/profile.php?id=61566438809712',
  whatsapp: 'https://wa.me/9193606XXXXX',
  website: 'https://showtimesurpriseplanners.in',
  maxMembers: 14,
  description:
    'Perfect for private movie screenings, surprise events, and special celebrations. Showtime combines comfort, exclusivity, and state-of-the-art technology to redefine entertainment in Pondicherry.',
}

export const SERVICES = [
  {
    id: 'srv-1',
    icon: 'movie',
    title: 'Private Movie Screening',
    description:
      'Watch any movie or OTT content on our big screen with HD projection and surround sound. Your personal cinema experience.',
    colSpan: 'md:col-span-2 lg:col-span-3',
    height: 'h-[400px]',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&fit=crop&q=80',
  },
  {
    id: 'srv-2',
    icon: 'cake',
    title: 'Birthday Surprise',
    description:
      'Make their special day unforgettable with fog entry, themed decorations, LED name board, and confetti burst.',
    colSpan: 'md:col-span-1 lg:col-span-3',
    height: 'h-[400px]',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&fit=crop&q=80',
  },
  {
    id: 'srv-3',
    icon: 'favorite',
    title: 'Anniversary Celebration',
    description:
      'Celebrate your love story with rose petals, candles, romantic balloon setup, and your memories on the big screen.',
    colSpan: 'md:col-span-1 lg:col-span-2',
    height: 'h-[350px]',
    image: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&fit=crop&q=80',
  },
  {
    id: 'srv-4',
    icon: 'diamond',
    title: 'Proposal Setup',
    description:
      'Help them say yes in the most intimate and private setting. A cinematic proposal they will never forget.',
    colSpan: 'md:col-span-1 lg:col-span-2',
    height: 'h-[350px]',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&fit=crop&q=80',
  },
  {
    id: 'srv-5',
    icon: 'sports_esports',
    title: 'PS5 Gaming Party',
    description:
      'Game on the cinema screen with your squad. PS5, 4 controllers, racing & FIFA games — the ultimate gaming experience.',
    colSpan: 'md:col-span-1 lg:col-span-2',
    height: 'h-[350px]',
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&fit=crop&q=80',
  },
]

export const HOW_IT_WORKS = [
  {
    step: 1,
    label: 'Step 01',
    title: 'Choose Your Package',
    description:
      'Browse our curated packages and pick the one that fits your occasion, budget, and group size.',
    icon: 'package_2',
  },
  {
    step: 2,
    label: 'Step 02',
    title: 'Customize & Plan',
    description:
      'Tell us your vision — theme, decorations, timing. We handle all the planning and setup for you.',
    icon: 'tune',
  },
  {
    step: 3,
    label: 'Step 03',
    title: 'Celebrate!',
    description:
      'Arrive and enjoy your surprise. Everything is ready — just walk in and make memories.',
    icon: 'celebration',
  },
]

export const WHY_CHOOSE_US = [
  {
    icon: 'lock',
    title: 'Private & Exclusive',
    description:
      'The entire theatre is just for you and your group — up to 14 people. No strangers, no interruptions.',
  },
  {
    icon: 'speaker_group',
    title: 'State-of-the-Art Setup',
    description:
      'HD projector, immersive surround sound system, and premium recliner seating for a cinematic experience.',
  },
  {
    icon: 'support_agent',
    title: 'Dedicated Event Team',
    description:
      'A personal event coordinator handles everything from decoration to setup so you can focus on celebrating.',
  },
  {
    icon: 'palette',
    title: 'Customizable Themes',
    description:
      'From neon glow to rustic vintage — any decoration theme you imagine, we bring to life.',
  },
  {
    icon: 'payments',
    title: 'Affordable Luxury',
    description:
      'A premium private theatre experience starting at just ₹1499. Luxury that doesn\'t break the bank.',
  },
  {
    icon: 'location_on',
    title: 'Located in Pondicherry',
    description:
      'Conveniently located and easy to reach with ample parking. The perfect venue in the heart of Pondy.',
  },
]

export const PACKAGES = [
  {
    id: 'pkg-1',
    title: 'Private Screening',
    subtitle: 'Watch your favourite movie',
    price: 1999,
    duration: '2 hours',
    features: [
      'Private theatre for up to 14 people',
      'HD Projector + Surround Sound',
      'Play any movie/OTT content',
      'Comfortable recliner seating',
      'AC premium hall',
    ],
    icon: 'film',
    popular: false,
  },
  {
    id: 'pkg-2',
    title: 'Birthday Surprise',
    subtitle: 'Make their day unforgettable',
    price: 3499,
    duration: '3 hours',
    features: [
      'Private theatre + Decoration (Mini)',
      'LED name board / Custom message',
      'Fog entry + Confetti burst',
      'Photo/Video slideshow on screen',
      'Background music setup',
      'Cake table arrangement',
    ],
    icon: 'cake',
    popular: true,
  },
  {
    id: 'pkg-3',
    title: 'Anniversary Special',
    subtitle: 'Celebrate your love story',
    price: 4999,
    duration: '3 hours',
    features: [
      'Private theatre + Max Decoration',
      'Rose petal pathway',
      'Candle-lit ambiance',
      'Memory video on big screen',
      'Couple photo booth props',
      'Complimentary flower bouquet',
      'Romantic balloon arch',
    ],
    icon: 'heart',
    popular: false,
  },
  {
    id: 'pkg-4',
    title: 'PS5 Gaming Party',
    subtitle: 'Game on the big screen',
    price: 1499,
    duration: '2 hours',
    features: [
      'PS5 on cinema screen',
      '4 controllers available',
      'Racing, FIFA, Fighting games',
      'Snack & drink combos available',
      'Perfect for friend groups',
    ],
    icon: 'gamepad-2',
    popular: false,
  },
  {
    id: 'pkg-5',
    title: 'Premium Celebration',
    subtitle: 'The ultimate surprise package',
    price: 7999,
    duration: '4 hours',
    features: [
      'Everything in Birthday + Anniversary',
      'Professional photography',
      'Custom theme decoration',
      'Premium cake (1 kg included)',
      'Party poppers + Snow spray',
      'Dedicated event coordinator',
      'Red carpet entry',
    ],
    icon: 'crown',
    popular: false,
  },
]

// ======================================================================
// REELS DATA - Top viral reels for the carousel section
// Properly categorized from real Instagram data
// ======================================================================
export const REELS_DATA = [
  {
    id: 'reel-1',
    title: 'Tag & Share with your special one 🩵',
    instagramUrl: 'https://www.instagram.com/reel/DB5fkuyhBA4/',
    views: '522K',
    category: 'Birthday',
  },
  {
    id: 'reel-2',
    title: 'Brother made her feel like a princess 💜',
    instagramUrl: 'https://www.instagram.com/reel/DAdZlTJyecP/',
    views: '405K',
    category: 'Birthday',
  },
  {
    id: 'reel-3',
    title: 'Best place to visit in Pondicherry ❤️',
    instagramUrl: 'https://www.instagram.com/reel/DQWn5YUEv_c/',
    views: '369K',
    category: 'Celebrations',
  },
  {
    id: 'reel-4',
    title: 'Private theatre with PS5 setup 🎮',
    instagramUrl: 'https://www.instagram.com/reel/DWlznnPE-Gy/',
    views: '336K',
    category: 'Movie Screening',
  },
  {
    id: 'reel-5',
    title: 'Unforgettable surprise moment 💫',
    instagramUrl: 'https://www.instagram.com/reel/DPlqRD9CVel/',
    views: '275K',
    category: 'Surprises',
  },
  {
    id: 'reel-6',
    title: 'Birthday surprise at Showtime 🎂',
    instagramUrl: 'https://www.instagram.com/reel/DPdqk03CJ1n/',
    views: '270K',
    category: 'Birthday',
  },
  {
    id: 'reel-7',
    title: 'Romantic Date at Private Theatre 💕',
    instagramUrl: 'https://www.instagram.com/reel/DDOwKivOzUt/',
    views: '211K',
    category: 'Romantic',
  },
  {
    id: 'reel-8',
    title: 'Private theatre booking experience 🎬',
    instagramUrl: 'https://www.instagram.com/reel/DPWOgdZExoV/',
    views: '184K',
    category: 'Movie Screening',
  },
]

// Community Gallery - categorized reels for the filtered grid
export const COMMUNITY_GALLERY = [
  // Birthday
  {
    id: 'gal-1',
    title: 'POV: Best Surprise for Girlfriend ❤️',
    category: 'Birthday',
    instagramUrl: 'https://www.instagram.com/reel/C94eGfihjGT/',
    type: 'video',
    views: '71.5K',
  },
  {
    id: 'gal-2',
    title: 'Planned a surprise for my daddy 🎉',
    category: 'Birthday',
    instagramUrl: 'https://www.instagram.com/reel/C-kqaIHBh_v/',
    type: 'video',
    views: '66.6K',
  },
  {
    id: 'gal-3',
    title: 'She\'s not just a friend — she\'s your 2AM therapist',
    category: 'Birthday',
    instagramUrl: 'https://www.instagram.com/reel/DJESQDRONMl/',
    type: 'video',
    views: '65.9K',
  },
  {
    id: 'gal-4',
    title: 'It\'s a wrap on Year One! 🎂',
    category: 'Birthday',
    instagramUrl: 'https://www.instagram.com/reel/DJa0T1AsrBY/',
    type: 'video',
    views: '51.4K',
  },
  // Romantic
  {
    id: 'gal-5',
    title: 'Wanna do romantic Date? 😍',
    category: 'Romantic',
    instagramUrl: 'https://www.instagram.com/reel/DA5WWozsiu3/',
    type: 'video',
    views: '42.7K',
  },
  {
    id: 'gal-6',
    title: 'Everything for that Smile ❤️',
    category: 'Romantic',
    instagramUrl: 'https://www.instagram.com/reel/C-LOt0Phzp1/',
    type: 'video',
    views: '41.1K',
  },
  {
    id: 'gal-7',
    title: 'Lights Camera Surprise 📸',
    category: 'Romantic',
    instagramUrl: 'https://www.instagram.com/reel/DE4nR78MPjo/',
    type: 'video',
    views: '75.2K',
  },
  {
    id: 'gal-8',
    title: 'The Perfect Gift 🎁',
    category: 'Romantic',
    instagramUrl: 'https://www.instagram.com/reel/DGbLRhHvnUw/',
    type: 'video',
    views: '58K',
  },
  // Anniversary
  {
    id: 'gal-9',
    title: 'Anniversary celebration 🌟💃',
    category: 'Anniversary',
    instagramUrl: 'https://www.instagram.com/reel/DY84AERS52e/',
    type: 'video',
    views: '7K',
  },
  {
    id: 'gal-10',
    title: 'Men too deserve surprises ❤️',
    category: 'Anniversary',
    instagramUrl: 'https://www.instagram.com/reel/DVJDzG3D-U0/',
    type: 'video',
    views: '9.3K',
  },
  {
    id: 'gal-11',
    title: '25th Marriage Anniversary 🎉',
    category: 'Anniversary',
    instagramUrl: 'https://www.instagram.com/reel/DR-NCyLEhfd/',
    type: 'video',
    views: '12.2K',
  },
  // Friends & Bride-to-be
  {
    id: 'gal-12',
    title: 'Bride mode ON 💍✨',
    category: 'Friends',
    instagramUrl: 'https://www.instagram.com/reel/DaS5WpXDHvv/',
    type: 'video',
    views: '7K',
  },
  {
    id: 'gal-13',
    title: 'How to plan bride-to-be party 👰',
    category: 'Friends',
    instagramUrl: 'https://www.instagram.com/reel/DSxGFGoEwJQ/',
    type: 'video',
    views: '13.5K',
  },
  {
    id: 'gal-14',
    title: 'IPL Watch Party with Friends 🏏',
    category: 'Friends',
    instagramUrl: 'https://www.instagram.com/reel/C4n9q9NhmM0/',
    type: 'video',
    views: '76K',
  },
  // Movie Screening & Gaming
  {
    id: 'gal-15',
    title: 'First Private Theatre in Marthandam 🎬',
    category: 'Movie Night',
    instagramUrl: 'https://www.instagram.com/reel/DP3-pCTieNJ/',
    type: 'video',
    views: '76.6K',
  },
  {
    id: 'gal-16',
    title: 'Wait for the end ❤️💥',
    category: 'Movie Night',
    instagramUrl: 'https://www.instagram.com/reel/DSe86sbimsm/',
    type: 'video',
    views: '61.1K',
  },
]

export const GALLERY_CATEGORIES = ['All', 'Birthday', 'Romantic', 'Anniversary', 'Friends', 'Movie Night']
