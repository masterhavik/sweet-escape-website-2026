import { Link } from 'react-router-dom';
import { ownerServicePoints, serviceHighlights } from '../data/services';

export function ServicesPage() {
  return (
    <div className="page-stack">
      <section className="panel">
        <p className="eyebrow">Property management services</p>
        <h1>Practical support for owners who want their rental cared for well.</h1>
        <p className="lead">
          Sweet Escape helps with the real work behind a successful short-term rental — owner
          support, cleanings, maintenance coordination, guest readiness, and the day-to-day details
          that keep a property running smoothly.
        </p>
        <div className="button-row">
          <Link className="button button--primary" to="/contact">
            Ask About Services
          </Link>
          <Link className="button button--secondary" to="/rentals">
            View Rentals
          </Link>
        </div>
      </section>

      <section className="panel">
        <div className="section-heading">
          <p className="eyebrow">What we help with</p>
          <h2>Focused support where it matters most.</h2>
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
          <p className="eyebrow">Why owners choose Sweet Escape</p>
          <h2>Local attention, steady follow-through, and less guesswork.</h2>
        </div>
        <div className="card-grid">
          <article className="card">
            <h3>Key support areas</h3>
            <ul className="list-block">
              {ownerServicePoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card">
            <h3>A simpler approach</h3>
            <p>
              We focus on the practical side of running a rental well: keeping the property ready,
              helping owners stay informed, and making sure the details between bookings are being
              handled.
            </p>
            <div className="button-row">
              <Link className="button button--primary" to="/contact">
                Start a Conversation
              </Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
