import { Link } from 'react-router-dom';
import { properties } from '../data/properties';
import { getPlatformButtonClass } from '../data/platformPalette';

export function RentalsPage() {
  return (
    <div className="page-stack">
      <section className="card-grid property-card-grid">
        {properties.map((property) => (
          <article key={property.slug} className="card property-card">
            <div className="property-card__image-wrap">
              <img className="property-card__image" src={property.imageSrc} alt={property.imageAlt} />
            </div>
            <div className="property-card__content">
              <h2>{property.name}</h2>
              <p className="muted">{property.location}</p>
              <p>{property.summary}</p>
              <div className="button-row">
                <Link className="button button--primary" to={`/rentals/${property.slug}`}>
                  View Details
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
      </section>
    </div>
  );
}
