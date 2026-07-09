import { Link } from 'react-router-dom';
import { properties } from '../data/properties';
import { getPlatformButtonClass } from '../data/platformPalette';
import { siteHero } from '../data/site';
import { testimonials } from '../data/testimonials';

const homeGallery = [
  {
    src: '/images/gallery/country_scenery.webp',
    alt: 'Golden country scenery near a Sweet Escape rental',
  },
  {
    src: '/images/gallery/country_driveway.webp',
    alt: 'Country driveway leading to a rental property',
  },
  {
    src: '/images/gallery/hazy_water_kayak.webp',
    alt: 'Quiet water view with a kayak',
  },
];

export function HomePage() {
  return (
    <div className="page-stack">
      <section className="panel photo-hero">
        <div className="photo-hero__content">
          <p className="eyebrow">{siteHero.eyebrow}</p>
          <h1>{siteHero.title}</h1>
          <p className="lead">{siteHero.description}</p>
          <div className="button-row">
            <Link className="button button--primary" to="/rentals">
              Explore Rentals
            </Link>
            <Link className="button button--secondary" to="/services">
              Owner Services
            </Link>
          </div>
        </div>

        <div className="photo-hero__media" aria-label="Sweet Escape property photos">
          <img
            className="photo-hero__main-image"
            src="/images/gallery/big_yellow_old_house.webp"
            alt="Large yellow historic-style Sweet Escape property"
          />
          <div className="photo-hero__stack">
            <img src="/images/gallery/house_interior2.webp" alt="Bright furnished interior at a Sweet Escape rental" />
            <img src="/images/gallery/table_setting.webp" alt="Welcoming table setting inside a rental home" />
          </div>
        </div>
      </section>

      <section className="panel intro-split">
        <div>
          <p className="eyebrow">For guests</p>
          <h2>Comfortable places to stay, with the details already thought through.</h2>
        </div>
        <p>
          Whether it is a quiet getaway, a furnished monthly stay, or a family visit near Gainesville,
          Sweet Escape focuses on homes that feel cared for before guests ever walk through the door.
        </p>
      </section>

      <section className="panel">
        <div className="section-heading section-heading--centered">
          <p className="eyebrow">Featured stays</p>
          <h2>Browse Sweet Escape rentals.</h2>
        </div>
        <div className="card-grid property-card-grid">
          {properties.map((property) => (
            <article key={property.slug} className="card property-card">
              <div className="property-card__image-wrap">
                <img className="property-card__image" src={property.imageSrc} alt={property.imageAlt} />
              </div>
              <div className="property-card__content">
                <h3>{property.name}</h3>
                <p className="muted">{property.location}</p>
                <p>{property.summary}</p>
                <div className="button-row">
                  <Link className="button button--secondary" to={`/rentals/${property.slug}`}>
                    View Property
                  </Link>
                  <a
                    className={`button ${getPlatformButtonClass(property.externalBookingLabel)}`}
                    href={property.bookingUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {property.externalBookingLabel} Listing
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="button-row button-row--centered">
          <Link className="button button--outline-accent button--see-more" to="/rentals">
            See More Listings
          </Link>
        </div>
      </section>

      <section className="panel services-teaser">
        <div className="services-teaser__image-wrap">
          <img src="/images/gallery/welcome_mat.webp" alt="Welcome mat at a Sweet Escape property" />
        </div>
        <div className="services-teaser__content">
          <p className="eyebrow">For owners</p>
          <h2>Property care without the cold, corporate feel.</h2>
          <p>
            Sweet Escape helps owners with the work behind a well-run rental: cleanings, turnovers,
            supplies, maintenance coordination, presentation, and local follow-through.
          </p>
          <div className="button-row">
            <Link className="button button--primary" to="/services">
              See Owner Services
            </Link>
          </div>
        </div>
      </section>

      <section className="panel photo-strip" aria-label="Sweet Escape gallery preview">
        {homeGallery.map((image) => (
          <img key={image.src} src={image.src} alt={image.alt} />
        ))}
      </section>

      <section className="panel testimonial-panel">
        <blockquote>“{testimonials[0].quote}”</blockquote>
        <p className="muted">{testimonials[0].attribution}</p>
      </section>
    </div>
  );
}
