import { Link } from 'react-router-dom';
import { ownerServicePoints, serviceHighlights } from '../data/services';

export function ServicesPage() {
  return (
    <div className="page-stack">
      <section className="panel services-hero">
        <div className="services-hero__image-wrap">
          <img src="/images/gallery/chairs_hammock.webp" alt="Relaxing outdoor chairs and hammock at a rental property" />
        </div>
        <div className="services-hero__content">
          <p className="eyebrow">Property management services</p>
          <h1>Warm, practical support for owners and their homes.</h1>
          <p className="lead">
            We help keep short-term rentals guest-ready with cleaning coordination, property
            readiness, maintenance follow-up, owner communication, and listing support.
          </p>
          <div className="button-row">
            <Link className="button button--primary" to="/contact">
              Ask About Services
            </Link>
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="section-heading section-heading--centered">
          <p className="eyebrow">What we help with</p>
          <h2>Simple, useful support where it matters most.</h2>
        </div>
        <div className="service-card-grid">
          {serviceHighlights.map((item) => (
            <article key={item.title} className="service-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel services-photo-feature">
        <div className="services-photo-feature__content">
          <p className="eyebrow">Owner support</p>
          <h2>The details between bookings are what make the difference.</h2>
          <ul className="pretty-check-list">
            {ownerServicePoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="services-photo-feature__image-grid">
          <img src="/images/gallery/house_interior.webp" alt="Comfortable furnished living space in a rental home" />
          <img src="/images/gallery/table_setting.webp" alt="Table setting prepared for guests" />
        </div>
      </section>

      <section className="panel services-final-cta">
        <img src="/images/gallery/camper_mat.png" alt="Home is where you park camper welcome mat" />
        <div>
          <p className="eyebrow">Ready to talk?</p>
          <h2>Tell us what kind of support your property needs.</h2>
          <p>
            Some owners need full support. Some need help with cleaning, maintenance, setup, or
            presentation. We can start with a conversation and keep it practical.
          </p>
          <div className="button-row">
            <Link className="button button--primary" to="/contact">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
