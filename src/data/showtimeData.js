// Real data for Showtime Private Movie Theatre - Pondicherry
export const SHOWTIME_INFO = {
  name: 'SHOWTIME',
  tagline: 'Private Movie Theatre & Surprise Planners',
  location: 'Pondicherry, India',
  phone: '+91 93637 99250',
  instagram: 'https://www.instagram.com/showtime_privatemovietheatre/',
  facebook: 'https://www.facebook.com/profile.php?id=61566438809712',
  whatsapp: 'https://wa.me/919363799250',
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
  { id: 'reel-1', title: 'Tag & Share 🩵 522K', instagramUrl: 'https://www.instagram.com/reel/DB5fkuyhBA4/', thumb: 'https://scontent-sin2-2.cdninstagram.com/v/t51.718…KF8yT9kHprmZ5nTncynihOsd4ivfnkgXwJwGg&oe=6A7795B2', category: 'Birthday' },
  { id: 'reel-2', title: 'Brother surprise 💜 405K', instagramUrl: 'https://www.instagram.com/reel/DAdZlTJyecP/', thumb: 'https://scontent-sin2-3.cdninstagram.com/v/t51.718…xordFyfPoeds_fMQKS-DGziL_HoDDraWo9y0Q&oe=6A77956D', category: 'Birthday' },
  { id: 'reel-3', title: 'Best of Pondicherry ❤️ 369K', instagramUrl: 'https://www.instagram.com/reel/DQWn5YUEv_c/', thumb: 'https://scontent-sin2-2.cdninstagram.com/v/t51.718…TKPWIv55okC4IYS5LOp1sqSCzNZfxNl4BcpwQ&oe=6A77AC72', category: 'Celebrations' },
  { id: 'reel-4', title: 'PS5 setup 🎮 336K', instagramUrl: 'https://www.instagram.com/reel/DWlznnPE-Gy/', thumb: 'https://scontent-sin2-1.cdninstagram.com/v/t51.827…jeVIlA3ri_RkG9H4u9_SdVFx0v7l9sXjtpBbw&oe=6A77B40A', category: 'Gaming' },
  { id: 'reel-5', title: 'Surprise moment 💫 275K', instagramUrl: 'https://www.instagram.com/reel/DPlqRD9CVel/', thumb: 'https://scontent-sin6-2.cdninstagram.com/v/t51.827…rHirs_2sPvhpALKxQd-xZshFKnKIfRMnZ_KIQ&oe=6A779DF3', category: 'Surprises' },
  { id: 'reel-6', title: 'Birthday 🎂 270K', instagramUrl: 'https://www.instagram.com/reel/DPdqk03CJ1n/', thumb: 'https://scontent-sin2-2.cdninstagram.com/v/t51.718…b7AJ0urdNdlAqsFbf1Q0bP2N9V8AXvWxx4R-Q&oe=6A77AB2E', category: 'Birthday' },
  { id: 'reel-7', title: 'Romantic date 💕 211K', instagramUrl: 'https://www.instagram.com/reel/DDOwKivOzUt/', thumb: 'https://scontent-sin11-2.cdninstagram.com/v/t51.71…_3vW2_99sduFQYRquhsAUuRO_H2iKq74D4yXQ&oe=6A77A89F', category: 'Romantic' },
  { id: 'reel-8', title: 'Private theatre 🎬 184K', instagramUrl: 'https://www.instagram.com/reel/DPWOgdZExoV/', thumb: 'https://scontent-sin11-2.cdninstagram.com/v/t51.71…n4fpDtH6dk-bMkRPLzduuUeKIXcxIhSmXv33Q&oe=6A779EDF', category: 'Movie Night' },
  { id: 'reel-9', title: 'Watch till End 😂 154K', instagramUrl: 'https://www.instagram.com/reel/DPgNGTLEfSj/', thumb: 'https://scontent-sin2-3.cdninstagram.com/v/t51.827…eLnA0j7FfZ7uCDxXjfcE07haZnBGgqt-NhAVQ&oe=6A77A236', category: 'Birthday' },
  { id: 'reel-10', title: 'Katchi sera ❤️ 123K', instagramUrl: 'https://www.instagram.com/reel/DSP55F7CBgS/', thumb: 'https://scontent-sin2-2.cdninstagram.com/v/t51.718…Sp-GmZTRKiQ_RmnjMkGmAUxT5D33Y6KO4Jk1w&oe=6A77B38E', category: 'Celebrations' },
  { id: 'reel-11', title: 'Birthday celebration 🎉 113K', instagramUrl: 'https://www.instagram.com/reel/DCWZEBZBCfa/', thumb: 'https://scontent-sin2-1.cdninstagram.com/v/t51.718…ZgW7FWiba8mLyYk9lROa6fxdTjNwnAfAfelCQ&oe=6A779AD0', category: 'Birthday' },
  { id: 'reel-12', title: 'Surprise booking 🥰 132K', instagramUrl: 'https://www.instagram.com/reel/DCoj2GxhRDA/', thumb: 'https://scontent-sin6-3.cdninstagram.com/v/t51.757…-TdKu4xuoepppEvJnkqYZuxrGQpMl6qZy281Q&oe=6A778AAE', category: 'Romantic' },
  { id: 'reel-13', title: 'Family moment 62K', instagramUrl: 'https://www.instagram.com/reel/DRjaW4Hkkoj/', thumb: 'https://scontent-sin11-2.cdninstagram.com/v/t51.82…gTyTVZIjVP47_90vzOdcbDk_rjDiqSojT04sA&oe=6A7788A3', category: 'Family' },
  { id: 'reel-14', title: 'Thank you showtime 💕 86K', instagramUrl: 'https://www.instagram.com/reel/DRPUaX4EmrU/', thumb: 'https://scontent-sin11-1.cdninstagram.com/v/t51.71…NqUoNjrAgnpqtrsYoDshk_xx3fqKSUXzU3h1Q&oe=6A77B81A', category: 'Birthday' },
  { id: 'reel-15', title: 'Couple goals ❤️ 97K', instagramUrl: 'https://www.instagram.com/reel/DOxvPK-k84l/', thumb: 'https://scontent-sin2-2.cdninstagram.com/v/t51.827…0DZ2XnJYkW2kY9LWsJpdLLojZIJ0lVJpWjT6w&oe=6A77B72E', category: 'Romantic' },
  { id: 'reel-16', title: 'IPL Watch Party 🏏 76K', instagramUrl: 'https://www.instagram.com/reel/C4n9q9NhmM0/', thumb: 'https://scontent-sin6-2.cdninstagram.com/v/t51.718…L_80bjv4yDWIkJF31tbbAxTYXZNrCZuI55QvQ&oe=6A77931F', category: 'Friends' },
  { id: 'reel-17', title: 'Marthandam theatre 77K', instagramUrl: 'https://www.instagram.com/reel/DP3-pCTieNJ/', thumb: 'https://scontent-sin2-2.cdninstagram.com/v/t51.718…q6osghh7rEOd0mcyzrOsYZmIgYBH19gOSaQ3g&oe=6A7783D9', category: 'Movie Night' },
  { id: 'reel-18', title: 'Unforgettable moment 64K', instagramUrl: 'https://www.instagram.com/reel/DM-cjCRhZLV/', thumb: 'https://scontent-sin6-2.cdninstagram.com/v/t51.827…eZGeHmnnkjqsiTubIzz7oYY9c0_YOla0naAuQ&oe=6A77B709', category: 'Birthday' },
  { id: 'reel-19', title: 'Wait for end 💥 61K', instagramUrl: 'https://www.instagram.com/reel/DSe86sbimsm/', thumb: 'https://scontent-sin2-3.cdninstagram.com/v/t51.718…YvOEKiRFx1Ld69S0NZ3H45YNH4UcHuHg1wCjQ&oe=6A778A89', category: 'Celebrations' },
  { id: 'reel-20', title: 'Bride-to-be party 👰', instagramUrl: 'https://www.instagram.com/reel/DSxGFGoEwJQ/', thumb: 'https://scontent-sin11-2.cdninstagram.com/v/t51.71…6qD57aS620COd5eXoBoAyj72XRDMelo2LGDRA&oe=6A77A9B6', category: 'Friends' },
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
