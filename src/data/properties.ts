export type Property = {
  slug: string;
  name: string;
  location: string;
  summary: string;
  bookingUrl: string;
  externalBookingLabel: string;
};

export const properties: Property[] = [
  {
    slug: 'springs-hideaway',
    name: 'Springs Hideaway',
    location: 'High Springs, Florida',
    summary: '4BR retreat with pool and sunroom for family getaways and group stays.',
    bookingUrl: 'https://www.airbnb.com/',
    externalBookingLabel: 'Airbnb',
  },
  {
    slug: 'edith-vintage-cruiser-rv',
    name: 'Edith - Vintage Cruiser RV',
    location: 'Downtown High Springs, Florida',
    summary: 'A distinctive vintage cruiser RV stay with memorable character and charm.',
    bookingUrl: 'https://www.airbnb.com/',
    externalBookingLabel: 'Airbnb',
  },
  {
    slug: 'private-patio-view-trenton',
    name: 'Private Patio w/ View',
    location: 'Trenton, Florida',
    summary: 'A peaceful Trenton home stay with a private patio and relaxing surroundings.',
    bookingUrl: 'https://www.evolve.com/',
    externalBookingLabel: 'Evolve',
  },
];
