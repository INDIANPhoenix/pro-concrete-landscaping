// Default placeholder image path
const PLACEHOLDER_IMAGE = "/placeholder.jpg"

export const serviceImages = {
  landscaping: {
    main: PLACEHOLDER_IMAGE,
    gallery: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
  },
  concreting: {
    main: PLACEHOLDER_IMAGE,
    gallery: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
  },
  artificialGrass: {
    main: PLACEHOLDER_IMAGE,
    gallery: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
  },
  exposedAggregate: {
    main: PLACEHOLDER_IMAGE,
    gallery: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
  },
  mulching: {
    main: PLACEHOLDER_IMAGE,
    gallery: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
  },
  letterboxInstallation: {
    main: PLACEHOLDER_IMAGE,
    gallery: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
  },
  outdoorLighting: {
    main: PLACEHOLDER_IMAGE,
    gallery: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
  },
  decking: {
    main: PLACEHOLDER_IMAGE,
    gallery: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
  },
  poolSurrounds: {
    main: PLACEHOLDER_IMAGE,
    gallery: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
  },
  drivewayConstruction: {
    main: PLACEHOLDER_IMAGE,
    gallery: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
  },
  gardenMaintenance: {
    main: PLACEHOLDER_IMAGE,
    gallery: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
  },
  pergolasGazebos: {
    main: PLACEHOLDER_IMAGE,
    gallery: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
  },
} as const

export type ServiceImageKey = keyof typeof serviceImages
