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
          <Link className="button button--secondary" to="/sweet-escape-pms">
            Explore Sweet Escape PMS
          </Link>
        </div>
      </section>

      <section className="panel">
        <div className="section-heading">
          <p className="eyebrow">Featured stays</p>
          <h2>Booking-ready property pages start here.</h2>
        </div>
        <div className="card-grid">
          {properties.map((property) => (
            <article key={property.slug} className="card">
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
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="section-heading">
          <p className="eyebrow">Management services</p>
          <h2>Support for owners who want a more polished operation.</h2>
        </div>
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
          <h2>A dedicated product page belongs in the site from day one.</h2>
        </div>
        <p>
          The new website is being structured to promote Sweet Escape PMS as a real business-facing
          product for modern short-term rental operations.
        </p>
        <Link className="button button--primary" to="/sweet-escape-pms">
          Learn About the Platform
        </Link>
      </section>

      <section className="panel testimonial-panel">
        <p className="eyebrow">Client feedback</p>
        <blockquote>
          “{testimonials[0].quote}”
        </blockquote>
        <p className="muted">{testimonials[0].attribution}</p>
      </section>
    </div>
  );
}
