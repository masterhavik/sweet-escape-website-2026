import { Navigate, Route, Routes } from 'react-router-dom';
import { SiteLayout } from '../components/layout/SiteLayout';
import { AboutPage } from '../pages/AboutPage';
import { ContactPage } from '../pages/ContactPage';
import { HomePage } from '../pages/HomePage';
import { PropertyDetailPage } from '../pages/PropertyDetailPage';
import { RentalsPage } from '../pages/RentalsPage';
import { ServicesPage } from '../pages/ServicesPage';

export function AppRouter() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/rentals" element={<RentalsPage />} />
        <Route path="/rentals/:propertySlug" element={<PropertyDetailPage />} />
        <Route path="/book-now" element={<Navigate to="/rentals" replace />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
