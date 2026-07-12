import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, Phone, AlertTriangle } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Accueil' },
  { path: '/a-propos', label: 'À propos' },
  { path: '/prix-placoplatre-au-m2', label: 'Prix placoplâtre au m²' },
  { path: '/couts-isolation', label: "Coûts d'isolation" },
  { path: '/contact', label: 'Contact' },
  { path: '/peinture-batiments', label: 'Peinture bâtiments' },
  { path: '/services', label: 'Services' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Info bar */}
      <div className={`bg-amber text-navy transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden' : 'h-auto'}`}>
        <div className="container-section py-2.5 flex items-center justify-center gap-2 text-sm font-medium">
          <AlertTriangle className="w-4 h-4 flex-shrink-0" />
          <span>Offre 2025 : Économisez 1.200DT vs Comaf</span>
          <span className="mx-2">•</span>
          <Phone className="w-4 h-4 flex-shrink-0" />
          <a href="tel:+21622784561" className="font-semibold hover:underline">+216 22 784 561</a>
        </div>
      </div>

      {/* Navigation */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-navy/95 backdrop-blur-sm shadow-header'
            : 'bg-navy'
        }`}
      >
        <div className="container-section">
          <div className="flex items-center justify-between h-[70px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" className="flex-shrink-0">
                <rect width="32" height="32" rx="4" fill="#F5A623" />
                <rect x="4" y="8" width="24" height="3" rx="1" fill="#0C1631" />
                <rect x="4" y="14" width="24" height="3" rx="1" fill="#0C1631" />
                <rect x="4" y="20" width="16" height="3" rx="1" fill="#0C1631" />
              </svg>
              <span className="font-playfair text-lg md:text-xl text-white font-semibold">
                La Maison du Placoplâtre
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-xs xl:text-sm font-inter font-medium uppercase tracking-wider transition-colors duration-300 rounded ${
                    location.pathname === link.path
                      ? 'text-amber'
                      : 'text-white/90 hover:text-amber'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button Desktop */}
            <Link
              to="/contact"
              className="hidden lg:inline-flex btn-primary text-xs px-5 py-2.5"
            >
              Demandez un devis
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-amber transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Slide-in menu */}
        <div
          className={`absolute right-0 top-0 h-full w-[300px] max-w-[80vw] bg-white shadow-xl transform transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-grayborder">
              <span className="font-playfair text-lg text-navy font-semibold">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-navy hover:text-amber transition-colors"
                aria-label="Fermer le menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 py-4 overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-6 py-3.5 text-sm font-medium border-b border-grayborder/50 transition-colors ${
                    location.pathname === link.path
                      ? 'text-amber bg-amber/5'
                      : 'text-navy hover:text-amber hover:bg-graylight'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="p-4 border-t border-grayborder">
              <Link
                to="/contact"
                className="btn-primary w-full text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Demandez un devis
              </Link>
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-graytext">
                <Phone className="w-4 h-4 text-amber" />
                <a href="tel:+21622784561" className="hover:text-navy">+216 22 784 561</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
