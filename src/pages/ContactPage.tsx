export function ContactPage() {
  return (
    <div className="page-stack">
      <section className="panel">
        <p className="eyebrow">Contact</p>
        <h1>Start a conversation with Sweet Escape.</h1>
        <p className="lead">
          Whether you are interested in a stay, want to talk about property management, or would
          like to learn more about Sweet Escape PMS, this is the best place to reach out.
        </p>
      </section>

      <section className="panel">
        <div className="section-heading">
          <p className="eyebrow">How to reach us</p>
          <h2>Questions, consultations, and business inquiries are welcome.</h2>
        </div>
        <p>
          Sweet Escape is building this site to serve guests, owners, and platform inquiries more
          clearly. For now, the best contact path is direct email.
        </p>
        <p>Email: sweetescapepropertymanagement@gmail.com</p>
        <p>Consultations by appointment</p>
      </section>

      <section className="panel">
        <div className="section-heading">
          <p className="eyebrow">What to contact us about</p>
          <h2>A single contact point for three different kinds of inquiries.</h2>
        </div>
        <ul className="list-block">
          <li>Questions about featured rentals or booking options</li>
          <li>Property-management inquiries from owners</li>
          <li>Interest in the Sweet Escape PMS platform</li>
        </ul>
      </section>
    </div>
  );
}
