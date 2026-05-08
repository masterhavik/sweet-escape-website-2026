import { Link } from 'react-router-dom';
import { properties } from '../data/properties';

export function RentalsPage() {
  return (
    <div className="page-stack">
      <section className="panel">
        <p className="eyebrow">Rentals</p>
        <h1>Browse featured Sweet Escape stays.</h1>
        <p className="lead">
          This page will become the main guest-facing browse experience, with direct-booking-ready
          calls to action and polished property presentation.
        </p>
      </section>

      <section className="card-grid">
        {properties.map((property) => (
          <article key={property.slug} className="card">
            <h2>{property.name}</h2>
            <p className="muted">{property.location}</p>
            <p>{property.summary}</p>
            <div className="button-row">
              <Link className="button button--primary" to={`/rentals/${property.slug}`}>
                View Details
              </Link>
              <a className="button button--secondary" href={property.bookingUrl} target="_blank" rel="noreferrer">
                Current {property.externalBookingLabel} Listing
              </a>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
