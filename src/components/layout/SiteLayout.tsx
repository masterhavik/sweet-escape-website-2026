import { NavLink, Outlet } from 'react-router-dom';
import { siteNavigation } from '../../data/site';

export function SiteLayout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <NavLink to="/" className="site-brand">
            <span className="site-brand__eyebrow">Sweet Escape</span>
            <span className="site-brand__name">Property Management</span>
          </NavLink>

          <nav className="site-nav" aria-label="Primary navigation">
            {siteNavigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? 'site-nav__link site-nav__link--active' : 'site-nav__link'
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__brand-block">
            <img
              className="site-footer__logo"
              src="/images/branding/header-brand.jpg"
              alt="Sweet Escape Property Management logo"
            />
            <div>
              <h2>Sweet Escape Property Management</h2>
              <p>
                Professional property management, guest-ready stays, and purpose-built
                operational tools for modern short-term rental businesses.
              </p>
            </div>
          </div>
          <div>
            <p>Email: sweetescapepropertymanagement@gmail.com</p>
            <p>Consultations by appointment</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
