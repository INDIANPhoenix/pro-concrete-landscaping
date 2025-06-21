export const serviceImages = {
  landscaping: {
    main: "/images/services/landscaping/main.jpg",
    gallery: [
      "/images/services/landscaping/gallery-1.jpg",
      "/images/services/landscaping/gallery-2.jpg",
      "/images/services/landscaping/gallery-3.jpg",
    ],
  },
  concreting: {
    main: "/images/services/concreting/main.jpg",
    gallery: [
      "/images/services/concreting/gallery-1.jpg",
      "/images/services/concreting/gallery-2.jpg",
      "/images/services/concreting/gallery-3.jpg",
    ],
  },
  artificialGrass: {
    main: "/images/services/artificial-grass/main.jpg",
    gallery: [
      "/images/services/artificial-grass/gallery-1.jpg",
      "/images/services/artificial-grass/gallery-2.jpg",
      "/images/services/artificial-grass/gallery-3.jpg",
    ],
  },
  exposedConcrete: {
    main: "/images/services/exposed-concrete/main.jpg",
    gallery: [
      "/images/services/exposed-concrete/gallery-1.jpg",
      "/images/services/exposed-concrete/gallery-2.jpg",
      "/images/services/exposed-concrete/gallery-3.jpg",
    ],
  },
  retainingWalls: {
    main: "/images/services/retaining-walls/main.jpg",
    gallery: [
      "/images/services/retaining-walls/gallery-1.jpg",
      "/images/services/retaining-walls/gallery-2.jpg",
      "/images/services/retaining-walls/gallery-3.jpg",
    ],
  },
  mulching: {
    main: "/images/services/mulching/main.jpg",
    gallery: [
      "/images/services/mulching/gallery-1.jpg",
      "/images/services/mulching/gallery-2.jpg",
      "/images/services/mulching/gallery-3.jpg",
    ],
  },
  letterboxInstallation: {
    main: "/images/services/letterbox-installation/main.jpg",
    gallery: [
      "/images/services/letterbox-installation/gallery-1.jpg",
      "/images/services/letterbox-installation/gallery-2.jpg",
      "/images/services/letterbox-installation/gallery-3.jpg",
    ],
  },
  pavingPathways: {
    main: "/images/services/paving-pathways/main.jpg",
    gallery: [
      "/images/services/paving-pathways/gallery-1.jpg",
      "/images/services/paving-pathways/gallery-2.jpg",
      "/images/services/paving-pathways/gallery-3.jpg",
    ],
  },
  gardenDesign: {
    main: "/images/services/garden-design/main.jpg",
    gallery: [
      "/images/services/garden-design/gallery-1.jpg",
      "/images/services/garden-design/gallery-2.jpg",
      "/images/services/garden-design/gallery-3.jpg",
    ],
  },
  irrigationSystems: {
    main: "/images/services/irrigation-systems/main.jpg",
    gallery: [
      "/images/services/irrigation-systems/gallery-1.jpg",
      "/images/services/irrigation-systems/gallery-2.jpg",
      "/images/services/irrigation-systems/gallery-3.jpg",
    ],
  },
  outdoorLighting: {
    main: "/images/services/outdoor-lighting/main.jpg",
    gallery: [
      "/images/services/outdoor-lighting/gallery-1.jpg",
      "/images/services/outdoor-lighting/gallery-2.jpg",
      "/images/services/outdoor-lighting/gallery-3.jpg",
    ],
  },
  decking: {
    main: "/images/services/decking/main.jpg",
    gallery: [
      "/images/services/decking/gallery-1.jpg",
      "/images/services/decking/gallery-2.jpg",
      "/images/services/decking/gallery-3.jpg",
    ],
  },
  poolSurrounds: {
    main: "/images/services/pool-surrounds/main.jpg",
    gallery: [
      "/images/services/pool-surrounds/gallery-1.jpg",
      "/images/services/pool-surrounds/gallery-2.jpg",
      "/images/services/pool-surrounds/gallery-3.jpg",
    ],
  },
  drivewayConstruction: {
    main: "/images/services/driveway-construction/main.jpg",
    gallery: [
      "/images/services/driveway-construction/gallery-1.jpg",
      "/images/services/driveway-construction/gallery-2.jpg",
      "/images/services/driveway-construction/gallery-3.jpg",
    ],
  },
  gardenMaintenance: {
    main: "/images/services/garden-maintenance/main.jpg",
    gallery: [
      "/images/services/garden-maintenance/gallery-1.jpg",
      "/images/services/garden-maintenance/gallery-2.jpg",
      "/images/services/garden-maintenance/gallery-3.jpg",
    ],
  },
  pergolasGazebos: {
    main: "/images/services/pergolas-gazebos/main.jpg",
    gallery: [
      "/images/services/pergolas-gazebos/gallery-1.jpg",
      "/images/services/pergolas-gazebos/gallery-2.jpg",
      "/images/services/pergolas-gazebos/gallery-3.jpg",
    ],
  },
} as const

export type ServiceImageKey = keyof typeof serviceImages
