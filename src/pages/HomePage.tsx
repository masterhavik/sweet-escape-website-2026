import { Link } from 'react-router-dom';
import { properties } from '../data/properties';
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
              Explore Services
            </Link>
            <Link className="button button--ghost" to="/sweet-escape-pms">
              Explore PMS App
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
                    className="button button--ghost"
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
          <Link className="button button--primary" to="/rentals">
            SEE MORE LISTINGS
          </Link>
        </div>
      </section>

      <section className="panel">
        <div className="section-heading">
          <p className="eyebrow">What Sweet Escape offers</p>
          <h2>A clearer home for guests, owners, and growing rental operations.</h2>
        </div>
        <div className="card-grid">
          <article className="card">
            <h3>Browse and book stays</h3>
            <p>
              The new site is being structured to showcase featured rentals in a cleaner, more
              professional format that can later support direct booking.
            </p>
          </article>
          <article className="card">
            <h3>Learn about our management approach</h3>
            <p>
              Sweet Escape is more than a listing page. It is also a property-management business
              focused on practical support, polish, and day-to-day coordination.
            </p>
          </article>
          <article className="card">
            <h3>See the Sweet Escape PMS platform</h3>
            <p>
              The website is also becoming a place to present Sweet Escape PMS as a real business
              product built around short-term rental operations.
            </p>
          </article>
        </div>
      </section>

      <section className="panel testimonial-panel">
        <p className="eyebrow">Client feedback</p>
        <blockquote>“{testimonials[0].quote}”</blockquote>
        <p className="muted">{testimonials[0].attribution}</p>
      </section>
    </div>
  );
}
