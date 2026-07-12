import { useState } from 'react';
import { Link } from 'react-router';
import { MapPin, Phone, Mail, Clock, ChevronRight, CheckCircle, Send } from 'lucide-react';
import SEO from '@/components/SEO';
import ScrollReveal from '@/components/ScrollReveal';

const coordonnees = [
  {
    icon: MapPin,
    title: 'Adresse',
    lines: ['21 Rue Sanaa, Cité Ennasim', 'Borj Louzir 2073, Ariana, Tunisie'],
  },
  {
    icon: Phone,
    title: 'Téléphone',
    lines: ['+216 22 784 561', 'Lun - Sam, 8:00 - 18:00'],
    href: 'tel:+21622784561',
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['samialayiet@gmail.com', 'Réponse sous 24h'],
    href: 'mailto:samialayiet@gmail.com',
  },
  {
    icon: Clock,
    title: 'Horaires',
    lines: ['Lundi - Samedi : 8h00 - 18h00', 'Dimanche : Fermé'],
  },
];

const faq = [
  {
    question: "Quel est le délai moyen pour un chantier de placoplâtre ?",
    answer: "Le délai dépend de la surface et de la complexité. En moyenne, une cloison de 20m² prend 1 à 2 jours. Un faux plafond de 30m² prend 2 à 3 jours. Nous vous donnons un détail précis lors du devis.",
  },
  {
    question: "Proposez-vous des devis gratuits ?",
    answer: "Oui, tous nos devis sont gratuits et sans engagement. Nous nous déplaçons sur site pour évaluer précisément votre projet.",
  },
  {
    question: "Quelles zones desservez-vous ?",
    answer: "Nous intervenons principalement dans le gouvernorat de l'Ariana (Borj Louzir, Raoued, La Soukra, Mnihla, Ennasr, Ariana Ville) et les régions voisines. Contactez-nous pour vérifier si votre zone est couverte.",
  },
  {
    question: "Quels types de paiement acceptez-vous ?",
    answer: "Nous acceptons les espèces, les chèques et les virements bancaires. Un acompte de 30% est demandé au début des travaux, le solde à la livraison.",
  },
  {
    question: "Offrez-vous une garantie sur vos travaux ?",
    answer: "Oui, nous offrons une garantie de 10 ans sur nos installations de placoplâtre et d'isolation. Cette garantie couvre les défauts de pose et les problèmes structurels.",
  },
  {
    question: "Fournissez-vous les matériaux ?",
    answer: "Oui, nous fournissons tous les matériaux nécessaires (plaques de plâtre, isolation, peintures, accessoires). Nous travaillons avec les meilleures marques du marché tunisien.",
  },
];

const projectTypes = [
  'Placoplâtre / Cloisons',
  'Isolation Thermique',
  'Isolation Phonique',
  'Peinture',
  'Fournitures de matériaux',
  'Rénovation complète',
  'Autre',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <SEO
        title="Contact | La Maison du Placoplâtre — Devis Gratuit Ariana"
        description="Contactez La Maison du Placoplâtre pour un devis gratuit. 21 Rue Sanaa, Borj Louzir, Ariana. ☎ +216 22 784 561 ✉️ samialayiet@gmail.com"
        path="/contact"
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://lamaisonduplacoplatre.com/" },
            { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://lamaisonduplacoplatre.com/contact" }
          ]
        })}
      </script>

      {/* Page Hero */}
      <section className="bg-navy pt-36 pb-20">
        <div className="container-section text-center">
          <h1 className="font-playfair text-4xl md:text-5xl text-white font-bold mb-4">
            Contactez La Maison du Placoplâtre
          </h1>
          <p className="text-white/70 max-w-xl mx-auto mb-4">
            Demandez votre devis gratuit ou posez-nous vos questions.
          </p>
          <nav className="flex items-center justify-center gap-2 text-sm">
            <Link to="/" className="text-white/60 hover:text-amber transition-colors">Accueil</Link>
            <ChevronRight className="w-4 h-4 text-white/40" />
            <span className="text-white/80">Contact</span>
          </nav>
        </div>
      </section>

      {/* Coordonnées + Formulaire */}
      <section className="py-20 bg-white">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Coordonnées */}
            <ScrollReveal direction="left" className="lg:col-span-2">
              <p className="section-label mb-4">Nos coordonnées</p>
              <h2 className="font-playfair text-2xl md:text-3xl text-navy font-semibold mb-8">
                Parlons de Votre Projet
              </h2>

              <div className="space-y-6">
                {coordonnees.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-amber" />
                    </div>
                    <div>
                      <h3 className="font-inter font-semibold text-navy text-sm mb-1">{item.title}</h3>
                      {item.lines.map((line, i) => (
                        item.href ? (
                          <a
                            key={i}
                            href={item.href}
                            className="block text-graytext text-sm hover:text-amber transition-colors"
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={i} className="text-graytext text-sm">{line}</p>
                        )
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <p className="text-xs uppercase tracking-wider text-graytext mb-3">Suivez-nous</p>
                <div className="flex gap-2">
                  {['Facebook', 'Instagram', 'LinkedIn'].map((social) => (
                    <a
                      key={social}
                      href={social === 'Facebook' ? 'https://facebook.com/lamaisonduplacoplatre' : `https://${social.toLowerCase()}.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-grayborder flex items-center justify-center text-graytext hover:bg-amber hover:border-amber hover:text-navy transition-all duration-300"
                      aria-label={social}
                    >
                      {social === 'Facebook' && (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                      )}
                      {social === 'Instagram' && (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                      )}
                      {social === 'LinkedIn' && (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Formulaire */}
            <ScrollReveal direction="right" className="lg:col-span-3">
              <div className="bg-graylight rounded-lg p-8 md:p-10">
                <h2 className="font-inter text-xl font-semibold text-navy mb-6 flex items-center gap-2">
                  <Send className="w-5 h-5 text-amber" />
                  Envoyez-nous un Message
                </h2>

                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold mb-1">Merci !</p>
                      <p className="text-sm">
                        Votre message a bien été envoyé. Nous vous contacterons dans les plus brefs délais.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-navy mb-1.5">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Votre nom et prénom"
                        className="w-full h-12 px-4 border border-grayborder rounded bg-white text-navy placeholder:text-graytext/50 focus:border-amber focus:ring-2 focus:ring-amber/15 outline-none transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="votre@email.com"
                          className="w-full h-12 px-4 border border-grayborder rounded bg-white text-navy placeholder:text-graytext/50 focus:border-amber focus:ring-2 focus:ring-amber/15 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1.5">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+216 XX XXX XXX"
                          className="w-full h-12 px-4 border border-grayborder rounded bg-white text-navy placeholder:text-graytext/50 focus:border-amber focus:ring-2 focus:ring-amber/15 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-navy mb-1.5">
                        Type de projet *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full h-12 px-4 border border-grayborder rounded bg-white text-navy focus:border-amber focus:ring-2 focus:ring-amber/15 outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Sélectionnez un type de projet</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-navy mb-1.5">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Décrivez votre projet..."
                        className="w-full px-4 py-3 border border-grayborder rounded bg-white text-navy placeholder:text-graytext/50 focus:border-amber focus:ring-2 focus:ring-amber/15 outline-none transition-all resize-vertical"
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full">
                      Envoyer ma demande
                    </button>

                    <p className="text-xs text-graytext text-center">
                      En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
                    </p>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Carte */}
      <section className="w-full h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.5886!2d10.2066!3d36.8628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDUxJzQ2Ik4gMTDCsDEyJzI0IkU!5e0!3m2!1sfr!2stn!4v1600000000000!5m2!1sfr!2stn"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Carte Google Maps - La Maison du Placoplâtre"
          className="grayscale-[30%]"
        />
      </section>

      {/* FAQ */}
      <section className="py-20 bg-graylight">
        <div className="container-section max-w-3xl">
          <ScrollReveal className="text-center mb-12">
            <p className="section-label justify-center mb-4">FAQ</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-navy font-semibold">
              Questions Fréquentes
            </h2>
          </ScrollReveal>

          <div className="space-y-3">
            {faq.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div className="bg-white rounded-lg border border-grayborder overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-navy text-sm pr-4">{item.question}</span>
                    <ChevronRight
                      className={`w-5 h-5 text-amber flex-shrink-0 transition-transform duration-300 ${
                        openFaq === index ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-4 text-graytext text-sm leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
