import { Link } from 'react-router-dom';

export function AboutPage() {
  return (
    <div className="page-stack">
      <section className="panel services-hero">
        <div className="services-hero__image-wrap">
          <img src="/images/gallery/keven_and_rebecca.jpg" alt="Keven and Rebecca of Sweet Escape Property Management" />
        </div>

        <div className="services-hero__content">
          <p className="eyebrow">About Sweet Escape</p>
          <h1>Rental care from people who know what ownership really feels like.</h1>
          <p className="lead">
            Sweet Escape is owned and operated by Keven and Rebecca. We have spent the last seven
            years owning, setting up, managing, cleaning, repairing, improving, and learning from
            rental properties ourselves.
          </p>
          <p>
            We know the difference between a property that simply gets listed and a property that is
            actually cared for. Our goal is simple: make every stay feel welcoming and treat every
            property like it is our own.
          </p>
        </div>
      </section>

      <section className="panel rental-detail-snapshot">
        <article>
          <p className="eyebrow">What we bring</p>
          <h2>Real rental experience, not just theory.</h2>
          <p>
            We understand the moving pieces that make rentals work: guest expectations, owner
            concerns, platform rules, cleaning details, maintenance surprises, supplies, photos,
            calendars, messages, and the little things that can make or break a stay.
          </p>
          <p>
            After years in the rental world, we have learned that good management is less about
            sounding impressive and more about noticing what needs attention before it becomes a
            problem.
          </p>
        </article>

        <article>
          <p className="eyebrow">Platform experience</p>
          <h2>Comfortable with the major rental platforms.</h2>
          <p>
            We have hands-on experience working with the major rental platforms guests and owners
            already use, including Airbnb, Vrbo, Booking.com, Evolve, Furnished Finder, and direct
            rental workflows.
          </p>
          <p>
            That matters because each platform has its own quirks, guest expectations, calendars,
            listing details, message flow, and rules. We help owners navigate those details without
            making the process feel overwhelming.
          </p>
        </article>
      </section>

      <section className="panel services-photo-feature">
        <div className="services-photo-feature__content">
          <p className="eyebrow">Our approach</p>
          <h2>Local, practical, and personal.</h2>
          <ul className="pretty-check-list">
            <li>We care about presentation because guests notice details.</li>
            <li>We communicate clearly so owners are not left guessing.</li>
            <li>We keep cleaning and turnovers consistent.</li>
            <li>We follow up on maintenance before small issues grow.</li>
            <li>We treat each property like something valuable.</li>
          </ul>
        </div>

        <div className="services-photo-feature__image-grid">
          <img src="/images/gallery/table_setting.webp" alt="Guest-ready table setting at a Sweet Escape rental" />
          <img src="/images/gallery/camper_mat.png" alt="Home is where you park camper welcome mat" />
        </div>
      </section>

      <section className="panel services-final-cta">
        <div>
          <p className="eyebrow">For guests and owners</p>
          <h2>We want Sweet Escape to feel easy to work with.</h2>
          <p>
            Guests want a clean, comfortable place that feels ready when they arrive. Owners want to
            know their property is being watched, cared for, and represented well. Sweet Escape sits
            in the middle of those needs and handles both with common sense and steady follow-through.
          </p>
        </div>

        <div>
          <p className="eyebrow">Talk with us</p>
          <p>
            Whether you are looking for a stay or wondering whether Sweet Escape can help with your
            property, we are happy to start with a simple conversation.
          </p>
          <div className="button-row">
            <Link className="button button--primary" to="/contact">
              Contact Sweet Escape
            </Link>
            <Link className="button button--secondary" to="/rentals">
              View Rentals
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
