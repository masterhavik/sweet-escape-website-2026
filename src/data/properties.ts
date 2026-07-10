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
    imageSrc: '/images/properties/edith-rv/new_hero.jpg',
    imageAlt: 'Edith vintage cruiser RV exterior and outdoor stay area',
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
  {
    slug: 'paddle-swim-high-springs',
    name: 'Paddle, Swim & More! Charming Home',
    location: 'High Springs, Florida',
    summary: 'Pet-friendly 2BR High Springs home near the springs, river, town, and UF.',
    description:
      'A charming High Springs home base for springs trips, paddling days, college visits, and relaxed porch time.',
    bookingUrl: 'https://evolve.com/vacation-rentals/us/fl/high-springs/560026',
    externalBookingLabel: 'Evolve',
    imageSrc: '/images/properties/paddle-swim-high-springs/hero.jpg',
    imageAlt: 'Paddle, Swim and More charming High Springs home exterior',
  },
  {
    slug: 'the-cottage-at-high-springs',
    name: 'The Cottage at High Springs',
    location: 'High Springs, Florida',
    summary: 'Historic 1940s cottage near downtown High Springs, springs, rivers, and trails.',
    description:
      'A beautifully restored 1940s cottage tucked in a quiet neighborhood minutes from downtown High Springs, with cozy interiors, vintage character, modern comfort, and private outdoor seating after days exploring the springs, rivers, trails, shops, and restaurants.',
    bookingUrl:
      'https://www.airbnb.com/rooms/1673415585901992128?unique_share_id=2b7d3870-bfcb-4d7b-945d-fcaf30ce08c6&viralityEntryPoint=1&s=76',
    externalBookingLabel: 'Airbnb',
    imageSrc: '/images/properties/the-cottage-at-high-springs/hero.avif',
    imageAlt: 'The Cottage at High Springs historic cottage exterior or featured stay photo',
  },
  {
    slug: 'pickard-springs',
    name: 'Pickard Springs! Private paradise on the Santa Fe',
    location: 'Santa Fe River near High Springs, Florida',
    summary:
      'Private 20-acre Santa Fe River spring retreat with two renovated rental units for up to 10 guests.',
    description:
      'Pickard Springs is a private spring on the Santa Fe River between Poe Springs and Ginnie Springs, set on 20 acres with two renovated rental units that can be reserved together for up to 10 guests. The upstairs unit includes 2 bedrooms, 1 full bath, a full kitchen with updated appliances, 2 full beds, and a pull-out sofa. The downstairs unit includes 1 bedroom with a full-size bed, a living-area pull-out sofa, a kitchenette, and a full-size washer and dryer.',
    bookingUrl:
      'https://www.airbnb.com/rooms/1709765157178956368?unique_share_id=7c9b1003-a026-4ba8-801a-d68a22da09e8&viralityEntryPoint=1&s=76',
    externalBookingLabel: 'Airbnb',
    imageSrc: '/images/properties/pickard-springs/hero.avif',
    imageAlt: 'Pickard Springs private Santa Fe River spring retreat',
  },
  {
    slug: 'gainesville-rental-home',
    name: 'Gainesville Rental Home',
    location: 'Northwest Gainesville, Florida',
    summary:
      'Furnished 4BR/2BA Gainesville home on a private 1-acre wooded lot with utilities included.',
    description:
      'A spacious furnished 4-bedroom, 2-bath Gainesville rental home on a private 1-acre wooded lot off scenic 91st Street. With 1,902 square feet of living space, ample parking, natural surroundings, additional storage, and utilities included, this home is a strong fit for families, professionals, relocation, temporary housing, or mid-term stays near Gainesville amenities.',
    bookingUrl:
      'https://www.zillow.com/homedetails/307-NW-91st-St-Gainesville-FL-32607/42717491_zpid/?view=public',
    externalBookingLabel: 'Zillow',
    imageSrc: '/images/properties/gainesville-rental-home/hero.webp',
    imageAlt: 'Furnished Gainesville rental home on a private wooded lot',
  },
];
