export function BookNowPage() {
  return (
    <div className="page-stack">
      <section className="panel">
        <p className="eyebrow">Book now</p>
        <h1>A direct-booking page belongs here.</h1>
        <p className="lead">
          This page is reserved for the future booking engine, availability search, or embedded
          direct-booking widget once the provider and booking flow are finalized.
        </p>
      </section>

      <section className="panel">
        <h2>Planned use</h2>
        <p>
          The goal is to let guests book from the website without building fragile custom calendar,
          payments, and reservation logic from scratch in the first version.
        </p>
      </section>
    </div>
  );
}
