export const galleryItems = [
  { id: 1, aspectRatio: '4/3' as const, label: 'Birthday Celebration Setup', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80' },
  { id: 2, aspectRatio: '3/4' as const, label: 'Couple Screening Night', image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80' },
  { id: 3, aspectRatio: '4/3' as const, label: 'Anniversary Decoration', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80' },
  { id: 4, aspectRatio: '1/1' as const, label: 'Theatre Interior', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&q=80' },
  { id: 5, aspectRatio: '4/3' as const, label: 'Surprise Party Arrangement', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80' },
  { id: 6, aspectRatio: '3/4' as const, label: 'Family Movie Night', image: 'https://images.unsplash.com/photo-1585647347483-22b66260dfff?w=600&q=80' },
  { id: 7, aspectRatio: '4/3' as const, label: 'Corporate Celebration', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80' },
  { id: 8, aspectRatio: '16/9' as const, label: 'Premium Screen Setup', image: 'https://images.unsplash.com/photo-1595769816263-9b910be24d5f?w=600&q=80' },
];

export type GalleryItem = typeof galleryItems[0];
