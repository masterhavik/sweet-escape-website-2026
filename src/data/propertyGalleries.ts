export type PropertyGalleryPhoto = {
  src: string;
  alt: string;
  caption?: string;
};

export type PropertyGalleryDetails = {
  eyebrow: string;
  shortIntro: string;
  highlights: string[];
  bestFor: string[];
  photos: PropertyGalleryPhoto[];
};

export const propertyGalleries: Record<string, PropertyGalleryDetails> = {
  'springs-hideaway': {
    eyebrow: 'High Springs family retreat',
    shortIntro:
      'A spacious, comfortable home for families and groups who want room to spread out, relax, and enjoy a polished stay near the springs.',
    highlights: [
      'Four-bedroom retreat',
      'Comfortable gathering spaces',
      'Multiple bedrooms for family or group stays',
      'Pool, sunroom, and relaxed Florida setting',
    ],
    bestFor: ['Family trips', 'Group stays', 'Springs weekends', 'Longer furnished stays'],
    photos: [
      {
        src: '/images/properties/springs-hideaway/01-livingroom.jpg',
        alt: 'Living room at Springs Hideaway',
        caption: 'Living room',
      },
      {
        src: '/images/properties/springs-hideaway/02-dining-area-sort-1.jpg',
        alt: 'Dining area at Springs Hideaway',
        caption: 'Dining area',
      },
      {
        src: '/images/properties/springs-hideaway/03-back-room-sort-2.jpg',
        alt: 'Back room at Springs Hideaway',
        caption: 'Back room',
      },
      {
        src: '/images/properties/springs-hideaway/04-guest-bathroom-sort-3.jpg',
        alt: 'Guest bathroom at Springs Hideaway',
        caption: 'Guest bathroom',
      },
      {
        src: '/images/properties/springs-hideaway/05-master-bathroom-sort-4.jpg',
        alt: 'Master bathroom at Springs Hideaway',
        caption: 'Master bathroom',
      },
      {
        src: '/images/properties/springs-hideaway/06-master-bedroom-sort-5.jpg',
        alt: 'Master bedroom at Springs Hideaway',
        caption: 'Master bedroom',
      },
      {
        src: '/images/properties/springs-hideaway/07-corner-bedroom-sort-6.jpg',
        alt: 'Corner bedroom at Springs Hideaway',
        caption: 'Corner bedroom',
      },
      {
        src: '/images/properties/springs-hideaway/08-front-bedroom-sort-7.jpg',
        alt: 'Front bedroom at Springs Hideaway',
        caption: 'Front bedroom',
      },
      {
        src: '/images/properties/springs-hideaway/09-bunk-beds-sort-8.jpg',
        alt: 'Bunk bed room at Springs Hideaway',
        caption: 'Bunk room',
      },
    ],
  },

  'edith-vintage-cruiser-rv': {
    eyebrow: 'Vintage cruiser stay',
    shortIntro:
      'A charming vintage RV stay with personality, cozy outdoor space, and a memorable High Springs setting.',
    highlights: [
      'Unique vintage cruiser experience',
      'Cozy, character-filled stay',
      'Outdoor seating and relaxed setup',
      'A fun alternative to a standard hotel room',
    ],
    bestFor: ['Couples', 'Solo travelers', 'Weekend escapes', 'Springs visitors'],
    photos: [
      {
        src: '/images/properties/edith-rv/new_hero.jpg',
        alt: 'Edith vintage cruiser RV exterior and outdoor stay area',
        caption: 'Edith outside',
      },
      {
        src: '/images/properties/edith-rv/20260408_184705.jpg',
        alt: 'Outdoor photo of Edith vintage cruiser RV',
        caption: 'Outdoor seating',
      },
      {
        src: '/images/properties/edith-rv/20260408_184720.jpg',
        alt: 'Outdoor detail photo of Edith vintage cruiser RV',
        caption: 'Camper exterior',
      },
      {
        src: '/images/properties/edith-rv/20260416_193228.jpg',
        alt: 'Evening exterior photo of Edith vintage cruiser RV',
        caption: 'Evening outside',
      },
      {
        src: '/images/properties/edith-rv/20260416_193238.jpg',
        alt: 'Evening outdoor setup at Edith vintage cruiser RV',
        caption: 'Outdoor setup',
      },
      {
        src: '/images/properties/edith-rv/20260416_211126~2.jpg',
        alt: 'Nighttime exterior photo of Edith vintage cruiser RV',
        caption: 'Nighttime glow',
      },
      {
        src: '/images/properties/edith-rv/01-reference-photo.jpg',
        alt: 'Edith vintage cruiser RV reference photo',
        caption: 'Edith',
      },
      {
        src: '/images/properties/edith-rv/02-reference-photo-sort-1.jpg',
        alt: 'Edith vintage cruiser RV photo',
        caption: 'Cozy setup',
      },
      {
        src: '/images/properties/edith-rv/03-reference-photo-sort-2.jpg',
        alt: 'Edith vintage cruiser RV interior or detail photo',
        caption: 'Guest details',
      },
      {
        src: '/images/properties/edith-rv/04-reference-photo-sort-3.jpg',
        alt: 'Edith vintage cruiser RV feature photo',
        caption: 'Vintage charm',
      },
      {
        src: '/images/properties/edith-rv/05-reference-photo-sort-4.jpg',
        alt: 'Edith vintage cruiser RV additional photo',
        caption: 'Stay details',
      },
    ],
  },

  'private-patio-view-trenton': {
    eyebrow: 'Peaceful Trenton stay',
    shortIntro:
      'A quiet, comfortable home with warm interiors, guest-ready touches, and a private patio for slower mornings and relaxed evenings.',
    highlights: [
      'Private patio with a relaxed view',
      'Comfortable living and dining spaces',
      'Thoughtful coffee, snack, and guest setup',
      'Peaceful Trenton location',
    ],
    bestFor: ['Quiet getaways', 'Couples', 'Small families', 'Restful work trips'],
    photos: [
      {
        src: '/images/properties/private-patio-trenton/01-dining-table-setup.jpg',
        alt: 'Dining table setup at Private Patio with View',
        caption: 'Dining table setup',
      },
      {
        src: '/images/properties/private-patio-trenton/02-living-room-use-lint-roller-in-supply-closet-on-couch-sort-1.jpg',
        alt: 'Living room at Private Patio with View',
        caption: 'Living room',
      },
      {
        src: '/images/properties/private-patio-trenton/03-reference-photo-sort-2.jpg',
        alt: 'Private Patio with View property photo',
        caption: 'Guest space',
      },
      {
        src: '/images/properties/private-patio-trenton/04-reference-photo-sort-3.jpg',
        alt: 'Private Patio with View interior detail',
        caption: 'Interior detail',
      },
      {
        src: '/images/properties/private-patio-trenton/05-coffee-and-snack-setup-sort-4.jpg',
        alt: 'Coffee and snack setup at Private Patio with View',
        caption: 'Coffee and snack setup',
      },
      {
        src: '/images/properties/private-patio-trenton/06-guest-bathroom-sort-5.jpg',
        alt: 'Guest bathroom at Private Patio with View',
        caption: 'Guest bathroom',
      },
      {
        src: '/images/properties/private-patio-trenton/07-guest-bedroom-trundle-bed-underneath-sort-6.jpg',
        alt: 'Guest bedroom with trundle bed at Private Patio with View',
        caption: 'Guest bedroom',
      },
      {
        src: '/images/properties/private-patio-trenton/08-opposite-view-livingroom-sort-7.jpg',
        alt: 'Opposite view of living room at Private Patio with View',
        caption: 'Living room view',
      },
      {
        src: '/images/properties/private-patio-trenton/09-master-bathroom-sort-8.jpg',
        alt: 'Master bathroom at Private Patio with View',
        caption: 'Master bathroom',
      },
      {
        src: '/images/properties/private-patio-trenton/10-patio-table-sort-9.jpg',
        alt: 'Patio table at Private Patio with View',
        caption: 'Patio table',
      },
      {
        src: '/images/properties/private-patio-trenton/11-front-porch-sort-10.jpg',
        alt: 'Front porch at Private Patio with View',
        caption: 'Front porch',
      },
    ],
  },

  'paddle-swim-high-springs': {
    eyebrow: 'High Springs springs getaway',
    shortIntro:
      'A charming High Springs home base for springs trips, paddling days, college visits, and relaxed porch time.',
    highlights: [
      'Two-bedroom High Springs home',
      'Comfortable porch and gathering spaces',
      'Close to springs, river trips, town, and Gainesville',
      'Good fit for small families, couples, and UF-area visits',
    ],
    bestFor: ['Springs trips', 'Paddling weekends', 'Small families', 'UF visits'],
    photos: [
      {
        src: '/images/properties/paddle-swim-high-springs/01-porch.jpg',
        alt: 'Porch at Paddle, Swim and More High Springs home',
        caption: 'Porch',
      },
      {
        src: '/images/properties/paddle-swim-high-springs/02-kitchen.jpg',
        alt: 'Kitchen at Paddle, Swim and More High Springs home',
        caption: 'Kitchen',
      },
      {
        src: '/images/properties/paddle-swim-high-springs/03-diningroom.jpg',
        alt: 'Dining room at Paddle, Swim and More High Springs home',
        caption: 'Dining room',
      },
      {
        src: '/images/properties/paddle-swim-high-springs/04-livingroom.jpg',
        alt: 'Living room at Paddle, Swim and More High Springs home',
        caption: 'Living room',
      },
      {
        src: '/images/properties/paddle-swim-high-springs/05-masterbedroom.jpg',
        alt: 'Primary bedroom at Paddle, Swim and More High Springs home',
        caption: 'Primary bedroom',
      },
      {
        src: '/images/properties/paddle-swim-high-springs/06-masterbath.jpg',
        alt: 'Primary bathroom at Paddle, Swim and More High Springs home',
        caption: 'Primary bathroom',
      },
      {
        src: '/images/properties/paddle-swim-high-springs/07-bunkbeds.jpg',
        alt: 'Bunk bed room at Paddle, Swim and More High Springs home',
        caption: 'Bunk room',
      },
    ],
  },
};
