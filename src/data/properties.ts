export type Property = {
  slug: string;
  name: string;
  location: string;
  summary: string;
  description: string;
  bookingUrl: string;
  externalBookingLabel: string;
  imageSrc: string;
  imageAlt: string;
};

export const properties: Property[] = [
  {
    slug: 'springs-hideaway',
    name: 'Springs Hideaway',
    location: 'High Springs, Florida',
    summary: '4BR retreat with pool and sunroom for family getaways and group stays.',
    description:
      'A spacious stay designed for comfortable group travel, with room to relax and a more polished guest-ready feel.',
    bookingUrl:
      'https://www.airbnb.com/rooms/1384063465655818355?guests=1&adults=1&s=67&unique_share_id=3dd70a62-b852-4dde-91fe-c1b5bbd4a78d',
    externalBookingLabel: 'Airbnb',
    imageSrc: '/images/properties/springs-hideaway/hero.webp',
    imageAlt: 'Springs Hideaway property exterior or featured stay photo',
  },
  {
    slug: 'edith-vintage-cruiser-rv',
    name: 'Edith - Vintage Cruiser RV',
    location: 'Downtown High Springs, Florida',
    summary: 'A distinctive vintage cruiser RV stay with memorable character and charm.',
    description:
      'A unique stay built around character, nostalgia, and a more memorable guest experience in High Springs.',
    bookingUrl:
      'https://www.airbnb.com/rooms/1437993630819769843?guests=1&adults=1&s=67&unique_share_id=0f55a05b-4c12-4175-9832-3f7c13e677d9',
    externalBookingLabel: 'Airbnb',
    imageSrc: '/images/properties/edith-rv/hero.webp',
    imageAlt: 'Edith vintage cruiser RV featured stay photo',
  },
  {
    slug: 'private-patio-view-trenton',
    name: 'Private Patio w/ View',
    location: 'Trenton, Florida',
    summary: 'A peaceful Trenton home stay with a private patio and relaxing surroundings.',
    description:
      'A quieter escape with outdoor appeal and a calm setting for guests who want a more restful stay.',
    bookingUrl:
      'https://evolve.com/vacation-rentals/us/fl/trenton/528815?utm_source=referral&utm_campaign=listingshare&utm_medium=link',
    externalBookingLabel: 'Evolve',
    imageSrc: '/images/properties/private-patio-trenton/hero.webp',
    imageAlt: 'Private Patio with View featured property photo in Trenton',
  },
];
