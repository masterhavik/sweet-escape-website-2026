import { Link, useParams } from 'react-router-dom';
import { properties } from '../data/properties';
import { propertyGalleries } from '../data/propertyGalleries';
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

  const gallery = propertyGalleries[property.slug];
  const isEdith = property.slug === 'edith-vintage-cruiser-rv';
  const featurePhotos = gallery?.photos.slice(0, isEdith ? 5 : 4) ?? [];
  const primaryHeroImage = gallery?.photos[0] ?? {
    src: property.imageSrc,
    alt: property.imageAlt,
  };

  return (
    <div className="page-stack">
      <section className="panel rental-detail-hero">
        {isEdith && featurePhotos.length > 0 ? (
          <div className="rental-detail-hero__media rental-detail-hero__media--compact">
            {featurePhotos.map((photo, index) => (
              <img
                key={photo.src}
                className={index === 0 ? 'rental-detail-hero__compact-feature' : undefined}
                src={photo.src}
                alt={photo.alt}
              />
            ))}
          </div>
        ) : (
          <div className="rental-detail-hero__media">
            <img className="rental-detail-hero__main-image" src={primaryHeroImage.src} alt={primaryHeroImage.alt} />

            {featurePhotos.length > 0 && (
              <div className="rental-detail-hero__thumb-grid">
                {featurePhotos.map((photo) => (
                  <img key={photo.src} src={photo.src} alt={photo.alt} />
                ))}
              </div>
            )}
          </div>
        )}

        <div className="rental-detail-hero__content">
          <p className="eyebrow">{gallery?.eyebrow ?? 'Featured rental'}</p>
          <h1>{property.name}</h1>
          <p className="rental-detail-location">{property.location}</p>
          <p className="lead">{gallery?.shortIntro ?? property.description}</p>

          <div className="button-row">
            <a
              className={`button ${getPlatformButtonClass(property.externalBookingLabel)}`}
              href={property.bookingUrl}
              target="_blank"
              rel="noreferrer"
            >
              View {property.externalBookingLabel} Listing
            </a>
            <Link className="button button--secondary" to="/rentals">
              Back to Rentals
            </Link>
          </div>
        </div>
      </section>

      {gallery && (
        <section className="panel rental-detail-snapshot">
          <article>
            <p className="eyebrow">Highlights</p>
            <h2>What guests will notice first.</h2>
            <ul className="pretty-check-list">
              {gallery.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article>
            <p className="eyebrow">Best for</p>
            <h2>A good fit for...</h2>
            <div className="rental-tag-list">
              {gallery.bestFor.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        </section>
      )}

      {gallery && gallery.photos.length > 0 && (
        <section className="panel">
          <div className="section-heading section-heading--centered">
            <p className="eyebrow">Photo tour</p>
            <h2>Take a closer look.</h2>
          </div>

          <div className="rental-photo-grid">
            {gallery.photos.map((photo, index) => (
              <figure
                key={photo.src}
                className={index === 0 || index === 4 || index === 8 ? 'rental-photo rental-photo--wide' : 'rental-photo'}
              >
                <img src={photo.src} alt={photo.alt} loading="lazy" />
                {photo.caption && <figcaption>{photo.caption}</figcaption>}
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="panel rental-detail-cta">
        <div>
          <p className="eyebrow">Ready to book?</p>
          <h2>See current availability and booking details.</h2>
          <p>
            Use the listing link for live rates, availability, house rules, and booking details. Sweet Escape
            keeps the property prepared so guests arrive to a home that feels cared for.
          </p>
        </div>

        <div className="button-row">
          <a
            className={`button ${getPlatformButtonClass(property.externalBookingLabel)}`}
            href={property.bookingUrl}
            target="_blank"
            rel="noreferrer"
          >
            Open {property.externalBookingLabel}
          </a>
          <Link className="button button--secondary" to="/contact">
            Contact Sweet Escape
          </Link>
        </div>
      </section>
    </div>
  );
}
