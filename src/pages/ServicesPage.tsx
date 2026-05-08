import { Link } from 'react-router-dom';
import { serviceHighlights } from '../data/services';

export function ServicesPage() {
  return (
    <div className="page-stack">
      <section className="panel">
        <p className="eyebrow">Property management services</p>
        <h1>Professional support for owners who want a better-run rental operation.</h1>
        <p className="lead">
          Sweet Escape is building a cleaner, more polished service story around practical support,
          stronger presentation, and day-to-day operational coordination for short-term rentals.
        </p>
      </section>

      <section className="panel">
        <div className="section-heading">
          <p className="eyebrow">How we help</p>
          <h2>Focused support without the bloated feel of a generic management pitch.</h2>
        </div>
        <p>
          The goal is not to sound like a giant national platform. It is to present Sweet Escape as
          a thoughtful, capable partner for owners who want a property that feels more organized,
          better supported, and more guest-ready.
        </p>
      </section>

      <section className="card-grid">
        {serviceHighlights.map((item) => (
          <article key={item.title} className="card">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </article>
        ))}
      </section>

      <section className="panel">
        <div className="section-heading">
          <p className="eyebrow">Who this is for</p>
          <h2>Owners who value polish, communication, and practical oversight.</h2>
        </div>
        <p>
          This page will continue to grow into a more complete explanation of Sweet Escape’s fit for
          short-term rental owners, new launches, and properties that need more consistent
          operational structure.
        </p>
        <div className="button-row">
          <Link className="button button--primary" to="/contact">
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
