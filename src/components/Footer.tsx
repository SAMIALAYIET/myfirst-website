import { Link } from 'react-router';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const quickLinks = [
  { path: '/', label: 'Accueil' },
  { path: '/a-propos', label: 'À propos' },
  { path: '/services', label: 'Services' },
  { path: '/contact', label: 'Contact' },
];

const serviceLinks = [
  { path: '/prix-placoplatre-au-m2', label: 'Placoplâtre' },
  { path: '/couts-isolation', label: 'Isolation' },
  { path: '/peinture-batiments', label: 'Peinture' },
  { path: '/services', label: 'Fournitures' },
];

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-section py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo & Description */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="4" fill="#F5A623" />
                <rect x="4" y="8" width="24" height="3" rx="1" fill="#0C1631" />
                <rect x="4" y="14" width="24" height="3" rx="1" fill="#0C1631" />
                <rect x="4" y="20" width="16" height="3" rx="1" fill="#0C1631" />
              </svg>
              <span className="font-playfair text-lg font-semibold">La Maison du Placoplâtre</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Experts en placoplâtre, isolation et peinture en Tunisie depuis plus de 70 ans. 
              Votre partenaire de confiance pour tous vos projets de construction et rénovation.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-inter font-semibold text-amber mb-4 uppercase tracking-wider text-sm">
              Liens rapides
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-amber transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-inter font-semibold text-amber mb-4 uppercase tracking-wider text-sm">
              Nos services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-amber transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-inter font-semibold text-amber mb-4 uppercase tracking-wider text-sm">
              Contactez-nous
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-amber mt-0.5 flex-shrink-0" />
                <span>21 Rue Sanaa, Cité Ennasim, Borj Louzir 2073, Ariana</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="w-4 h-4 text-amber flex-shrink-0" />
                <a href="tel:+21622784561" className="hover:text-amber transition-colors">
                  +216 22 784 561
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="w-4 h-4 text-amber flex-shrink-0" />
                <a href="mailto:samialayiet@gmail.com" className="hover:text-amber transition-colors">
                  samialayiet@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Clock className="w-4 h-4 text-amber flex-shrink-0" />
                <span>Lun - Sam, 8:00 - 18:00</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-5">
              <p className="text-xs uppercase tracking-wider text-white/50 mb-3">Suivez-nous</p>
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:bg-amber hover:border-amber hover:text-navy transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container-section py-5">
          <p className="text-center text-white/50 text-sm">
            © {new Date().getFullYear()} La Maison du Placoplâtre. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
