import { Routes, Route, useLocation } from 'react-router';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Accueil from '@/pages/Accueil';
import APropos from '@/pages/APropos';
import PrixPlacoplatre from '@/pages/PrixPlacoplatre';
import CoutsIsolation from '@/pages/CoutsIsolation';
import Contact from '@/pages/Contact';
import PeintureBatiments from '@/pages/PeintureBatiments';
import Services from '@/pages/Services';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollToTop />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/prix-placoplatre-au-m2" element={<PrixPlacoplatre />} />
          <Route path="/couts-isolation" element={<CoutsIsolation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/peinture-batiments" element={<PeintureBatiments />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
