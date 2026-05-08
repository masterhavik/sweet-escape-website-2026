import { Link } from 'react-router-dom';

export function AboutPage() {
  return (
    <div className="page-stack">
      <section className="panel">
        <p className="eyebrow">About</p>
        <h1>Thoughtful property management, guest-ready stays, and a growing platform behind the scenes.</h1>
        <p className="lead">
          Sweet Escape Property Management is being built as more than a simple listing site. The
          goal is to create a polished brand that supports beautiful stays, practical property
          management, and smarter day-to-day rental operations.
        </p>
      </section>

      <section className="panel">
        <div className="section-heading">
          <p className="eyebrow">What sets Sweet Escape apart</p>
          <h2>A more personal and practical approach to short-term rental operations.</h2>
        </div>
        <p>
          Sweet Escape is being positioned around hospitality, presentation, and operational
          follow-through. Instead of sounding like a giant generic management platform, the brand is
          being shaped to feel more thoughtful, more local, and more grounded in real property needs.
        </p>
      </section>

      <section className="panel">
        <div className="section-heading">
          <p className="eyebrow">Where the business is headed</p>
          <h2>One brand, three connected strengths.</h2>
        </div>
        <p>
          The new website is designed to bring together featured rentals, property management
          services, and the Sweet Escape PMS platform into one clearer brand story. That makes the
          site useful for guests, owners, and operators who want to understand the bigger picture of
          what Sweet Escape offers.
        </p>
        <div className="button-row">
          <Link className="button button--primary" to="/services">
            Explore Services
          </Link>
          <Link className="button button--secondary" to="/sweet-escape-pms">
            Explore Sweet Escape PMS
          </Link>
        </div>
      </section>
    </div>
  );
}
