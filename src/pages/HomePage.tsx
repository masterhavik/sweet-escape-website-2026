import { Link } from 'react-router-dom';
import { properties } from '../data/properties';
import { getPlatformButtonClass } from '../data/platformPalette';
import { siteHero } from '../data/site';
import { testimonials } from '../data/testimonials';

export function HomePage() {
  return (
    <div className="page-stack">
      <section className="hero-section panel">
        <div className="hero-layout__content">
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
      </section>

      <section className="panel">
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

      <section className="panel">
        <div className="section-heading">
          <p className="eyebrow">What Sweet Escape offers</p>
          <h2>A clearer home for guests, owners, and well-cared-for rentals.</h2>
        </div>
        <div className="card-grid">
          <article className="card">
            <h3>Browse and book stays</h3>
            <p>
              Explore featured Sweet Escape rentals with clear property details, inviting photos,
              and direct links to current booking listings.
            </p>
          </article>
          <article className="card">
            <h3>Learn about our management approach</h3>
            <p>
              Sweet Escape helps owners keep their properties guest-ready with practical support,
              local coordination, and attention to the details that shape each stay.
            </p>
          </article>
          <article className="card">
            <h3>Keep properties cared for</h3>
            <p>
              From turnover coordination to owner communication and property presentation, Sweet
              Escape focuses on steady, hands-on support for short-term rental homes.
            </p>
          </article>
        </div>
      </section>

      <section className="panel testimonial-panel">
        <blockquote>“{testimonials[0].quote}”</blockquote>
        <p className="muted">{testimonials[0].attribution}</p>
      </section>
    </div>
  );
}
