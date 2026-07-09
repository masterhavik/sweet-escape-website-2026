export function ContactPage() {
  return (
    <div className="page-stack">
      <section className="panel services-hero">
        <div className="services-hero__image-wrap">
          <img src="/images/gallery/camper_mat.png" alt="Home is where you park camper welcome mat" />
        </div>

        <div className="services-hero__content">
          <p className="eyebrow">Contact Sweet Escape</p>
          <h1>Tell us what you need help with.</h1>
          <p className="lead">
            Reach out about a rental, owner services, cleaning and turnover support, maintenance
            coordination, or a general Sweet Escape question.
          </p>
          <p>We will review your message and follow up as soon as we can.</p>
        </div>
      </section>

      <section className="panel services-final-cta">
        <div>
          <p className="eyebrow">Direct contact</p>
          <h2>Prefer email?</h2>
          <p>You can also reach Sweet Escape directly at:</p>
          <p>
            <a href="mailto:sweetescapepropertymanagement@gmail.com">
              sweetescapepropertymanagement@gmail.com
            </a>
          </p>
        </div>

        <div>
          <p className="eyebrow">Good for</p>
          <ul className="pretty-check-list">
            <li>Rental and booking questions</li>
            <li>Property management inquiries</li>
            <li>Cleaning and turnover support</li>
            <li>Maintenance or vendor coordination</li>
          </ul>
        </div>
      </section>

      <section className="panel">
        <div className="section-heading section-heading--centered">
          <p className="eyebrow">Inquiry form</p>
          <h2>Send us the details.</h2>
        </div>

        <div
          style={{
            overflow: 'hidden',
            borderRadius: '30px',
            background: 'rgba(255, 250, 240, 0.78)',
            border: '1px solid rgba(111, 75, 35, 0.075)',
            boxShadow: '0 12px 30px rgba(111, 75, 35, 0.06)',
          }}
        >
          <iframe
            title="Sweet Escape contact form"
            src="https://tally.so/embed/Mey45M?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            width="100%"
            height="1150"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            scrolling="no"
            style={{ display: 'block', border: 0 }}
          >
            Loading…
          </iframe>
        </div>
      </section>
    </div>
  );
}
