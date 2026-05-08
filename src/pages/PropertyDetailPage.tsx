import { Link, useParams } from 'react-router-dom';
import { properties } from '../data/properties';

export function PropertyDetailPage() {
  const { propertySlug } = useParams();
  const property = properties.find((item) => item.slug === propertySlug);

  if (!property) {
    return (
      <section className="panel">
        <p className="eyebrow">Property not found</p>
        <h1>We could not find that listing.</h1>
        <Link className="button button--primary" to="/rentals">
          Back to Rentals
        </Link>
      </section>
    );
  }

  return (
    <div className="page-stack">
      <section className="panel">
        <p className="eyebrow">Property detail</p>
        <h1>{property.name}</h1>
        <p className="lead">{property.location}</p>
        <p>{property.summary}</p>
        <div className="button-row">
          <Link className="button button--primary" to="/book-now">
            Book Direct
          </Link>
          <a className="button button--secondary" href={property.bookingUrl} target="_blank" rel="noreferrer">
            View Current {property.externalBookingLabel} Listing
          </a>
        </div>
      </section>

      <section className="panel">
        <h2>Booking widget placeholder</h2>
        <p>
          This is where a future direct-booking widget, availability tool, or booking engine embed
          will be placed once the site build and provider choice are finalized.
        </p>
      </section>
    </div>
  );
}
