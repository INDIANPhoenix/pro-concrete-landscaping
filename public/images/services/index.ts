export interface ServiceImage {
  main: string;
  gallery: string[];
}

export interface ServiceImages {
  [key: string]: ServiceImage;
}

const serviceImages: ServiceImages = {
  'artificial-grass': {
    main: '/images/services/artificial-grass/main.jpg',
    gallery: [
      '/images/services/artificial-grass/gallery-1.jpg',
      '/images/services/artificial-grass/gallery-2.jpg',
      '/images/services/artificial-grass/gallery-3.jpg',
    ],
  },
  'concreting': {
    main: '/images/services/concreting/main.jpg',
    gallery: [
      '/images/services/concreting/gallery-1.jpg',
      '/images/services/concreting/gallery-2.jpg',
      '/images/services/concreting/gallery-3.jpg',
    ],
  },
  // Add other services here following the same pattern
};

export default serviceImages; 