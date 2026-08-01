export const galleryItems = [
  { id: 1, aspectRatio: '4/3' as const, label: 'Birthday Celebration Setup' },
  { id: 2, aspectRatio: '3/4' as const, label: 'Couple Screening Night' },
  { id: 3, aspectRatio: '4/3' as const, label: 'Anniversary Decoration' },
  { id: 4, aspectRatio: '1/1' as const, label: 'Theatre Interior' },
  { id: 5, aspectRatio: '4/3' as const, label: 'Surprise Party Arrangement' },
  { id: 6, aspectRatio: '3/4' as const, label: 'Family Movie Night' },
  { id: 7, aspectRatio: '4/3' as const, label: 'Corporate Celebration' },
  { id: 8, aspectRatio: '16/9' as const, label: 'Premium Screen Setup' },
];

export type GalleryItem = typeof galleryItems[0];
