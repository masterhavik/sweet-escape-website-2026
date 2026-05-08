import { pmsAudience, pmsHighlights } from '../data/pms';

export function SweetEscapePmsPage() {
  return (
    <div className="page-stack">
      <section className="panel">
        <p className="eyebrow">Sweet Escape PMS</p>
        <h1>A purpose-built platform for modern short-term rental operations.</h1>
        <p className="lead">
          This page is designed to promote Sweet Escape PMS as a real business-facing product, not
          just an internal tool mention.
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
    </div>
  );
}
