import { useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { siteNavigation } from '../../data/site';

export function SiteLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <NavLink to="/" className="site-brand" aria-label="Sweet Escape Property Management home">
            <img
              className="site-brand__logo"
              src="/images/branding/header-brand.png"
              alt="Sweet Escape Property Management logo"
            />
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
            <div className="site-footer__brand-text">
              <span className="site-footer__brand-eyebrow">Sweet Escape</span>
              <span className="site-footer__brand-name">Property Management</span>
            </div>
          </div>
          <div className="site-footer__contact">
            <p>
              Email: info@sweetescapeproperty.com
              <br />
              Consultations by appointment
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
