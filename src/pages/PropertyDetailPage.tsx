import { Link, useParams } from 'react-router-dom';
import { properties } from '../data/properties';
import { getPlatformButtonClass } from '../data/platformPalette';

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
      <section className="panel property-detail-hero">
        <div className="property-detail-hero__image-wrap">
          <img className="property-detail-hero__image" src={property.imageSrc} alt={property.imageAlt} />
        </div>
        <div className="property-detail-hero__content">
          <p className="eyebrow">Property detail</p>
          <h1>{property.name}</h1>
          <p className="lead">{property.location}</p>
          <p>{property.description}</p>
          <div className="button-row">
            <Link className="button button--primary" to="/rentals">
              Back to Rentals
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
      </section>
    </div>
  );
}
