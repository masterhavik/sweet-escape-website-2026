import { serviceHighlights } from '../data/services';

export function ServicesPage() {
  return (
    <div className="page-stack">
      <section className="panel">
        <p className="eyebrow">Property management services</p>
        <h1>Professional support for short-term rental operations.</h1>
        <p className="lead">
          This page is the owner-facing side of the new website and should grow into a clearer,
          more polished explanation of what Sweet Escape offers.
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
    </div>
  );
}
