import { Link } from 'react-router-dom';
import { properties } from '../data/properties';
import { serviceHighlights } from '../data/services';
import { siteHero } from '../data/site';
import { testimonials } from '../data/testimonials';

export function HomePage() {
  return (
    <div className="page-stack">
      <section className="hero-section panel">
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

      <section className="panel">
        <div className="section-heading">
          <p className="eyebrow">Featured stays</p>
          <h2>Guest-ready properties with room for a stronger direct-booking experience.</h2>
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
                  <Link className="button button--ghost" to="/book-now">
                    Book Direct
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="section-heading">
          <p className="eyebrow">Property management services</p>
          <h2>Support shaped around real hosting and property-management needs.</h2>
        </div>
        <p className="lead">
          From setup and guest-ready presentation to coordination and ongoing oversight, Sweet Escape
          is building a more polished service story for owners who want a better-run operation.
        </p>
        <div className="card-grid">
          {serviceHighlights.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="section-heading">
          <p className="eyebrow">Sweet Escape PMS</p>
          <h2>Purpose-built software deserves a real place in the brand story.</h2>
        </div>
        <p className="lead">
          Sweet Escape PMS is being presented here as a dedicated platform for short-term rental
          operations, designed to help bring more visibility, coordination, and structure to the
          day-to-day side of property management.
        </p>
        <div className="button-row">
          <Link className="button button--primary" to="/sweet-escape-pms">
            Learn About the Platform
          </Link>
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
