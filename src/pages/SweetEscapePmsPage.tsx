import { Link } from 'react-router-dom';
import { pmsAudience, pmsHighlights } from '../data/pms';

export function SweetEscapePmsPage() {
  return (
    <div className="page-stack">
      <section className="panel">
        <p className="eyebrow">Sweet Escape PMS</p>
        <h1>A purpose-built property management system for modern short-term rental operations.</h1>
        <p className="lead">
          Sweet Escape PMS is being positioned as a focused platform for operators who want better
          visibility, cleaner coordination, and a more practical way to manage day-to-day rental
          workflows.
        </p>
      </section>

      <section className="panel">
        <div className="section-heading">
          <p className="eyebrow">What it does</p>
          <h2>Designed around real operational needs, not generic software bloat.</h2>
        </div>
        <p>
          The platform is intended to support the moving parts behind short-term rental management,
          helping bring bookings, property-level oversight, operational context, and team workflows
          into a more organized environment.
        </p>
      </section>

      <section className="panel">
        <h2>Who it is for</h2>
        <ul className="list-block">
          {pmsAudience.map((audience) => (
            <li key={audience}>{audience}</li>
          ))}
        </ul>
      </section>

      <section className="card-grid">
        {pmsHighlights.map((item) => (
          <article key={item.title} className="card">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </article>
        ))}
      </section>

      <section className="panel">
        <div className="section-heading">
          <p className="eyebrow">Why it matters</p>
          <h2>A more tailored system can make everyday operations easier to manage.</h2>
        </div>
        <p>
          Sweet Escape PMS is being presented as an alternative to one-size-fits-all tools for
          smaller operators and teams who want something more focused, more understandable, and more
          aligned with the realities of their business.
        </p>
        <div className="button-row">
          <Link className="button button--primary" to="/contact">
            Ask About the Platform
          </Link>
        </div>
      </section>
    </div>
  );
}
