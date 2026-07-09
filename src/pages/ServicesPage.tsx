import { Link } from 'react-router-dom';
import { ownerServiceDetails, serviceHighlights, serviceProcessSteps } from '../data/services';

export function ServicesPage() {
  return (
    <div className="page-stack">
      <section className="panel">
        <p className="eyebrow">Property management services</p>
        <h1>Hands-on support for owners who want their rental cared for, not just listed.</h1>
        <p className="lead">
          Sweet Escape helps short-term rental owners manage the real work behind a guest-ready
          property: cleaning coordination, owner support, maintenance follow-up, supplies, listing
          presentation, and the day-to-day details that keep stays running smoothly.
        </p>
        <div className="button-row">
          <Link className="button button--primary" to="/contact">
            Start a Conversation
          </Link>
          <Link className="button button--secondary" to="/rentals">
            View Rentals
          </Link>
        </div>
      </section>

      <section className="panel">
        <div className="section-heading">
          <p className="eyebrow">What we manage</p>
          <h2>The operational details that make a rental feel professional.</h2>
        </div>
        <p>
          A successful rental is not just a calendar and a booking link. It is cleanings completed
          on time, supplies in place, maintenance handled before it becomes a guest issue, and an
          owner who knows someone is paying attention. Sweet Escape is built around that kind of
          practical, local support.
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
          <p className="eyebrow">Owner support</p>
          <h2>A better experience for owners and a better-prepared home for guests.</h2>
        </div>
        <div className="card-grid">
          {ownerServiceDetails.map((section) => (
            <article key={section.title} className="card">
              <h2>{section.title}</h2>
              <ul className="list-block">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="section-heading">
          <p className="eyebrow">How we work</p>
          <h2>Organized, practical, and grounded in what actually happens between bookings.</h2>
        </div>
        <div className="card-grid">
          {serviceProcessSteps.map((step) => (
            <article key={step.title} className="card">
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="section-heading">
          <p className="eyebrow">Good fit</p>
          <h2>For owners who want local attention and practical rental operations support.</h2>
        </div>
        <p>
          Sweet Escape is a good fit for owners who care about presentation, guest experience, and
          consistent follow-through, especially when they need help coordinating the work that
          happens before check-in, after checkout, and whenever the property needs attention.
        </p>
        <div className="button-row">
          <Link className="button button--primary" to="/contact">
            Ask About Owner Services
          </Link>
        </div>
      </section>
    </div>
  );
}
