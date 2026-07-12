import { Link } from 'react-router';
import { ChevronRight, Paintbrush, Sun, Palette, Shield, Scroll, Sparkles, Eye } from 'lucide-react';
import SEO from '@/components/SEO';
import ScrollReveal from '@/components/ScrollReveal';

const services = [
  {
    icon: Paintbrush,
    title: 'Peinture Intérieure',
    description: 'Peinture des murs et plafonds, préparation des surfaces (rebouchage, ponçage, sous-couche), finitions lisses ou textures.',
    price: 'À partir de 12 DT/m²',
  },
  {
    icon: Sun,
    title: 'Peinture Extérieure',
    description: 'Peinture des façades, traitement anti-moisissure, peintures résistantes aux intempéries et UV.',
    price: 'À partir de 18 DT/m²',
  },
  {
    icon: Palette,
    title: 'Enduits Décoratifs',
    description: "Enduits à effets (stuco, venise, taloché, gratté), création de textures personnalisées.",
    price: 'À partir de 35 DT/m²',
  },
  {
    icon: Shield,
    title: 'Peinture Spécialisée',
    description: "Peintures hydrofuges, anti-feu, époxy pour sols industriels, peintures sanitaires.",
    price: 'Sur devis',
  },
  {
    icon: Scroll,
    title: 'Papier Peint',
    description: "Pose de papiers peints classiques ou vinyles, préparation des murs, finitions sans défaut.",
    price: 'À partir de 15 DT/m²',
  },
  {
    icon: Sparkles,
    title: 'Laques et Vernis',
    description: "Laquage des boiseries, vernis des parquets, finitions brillantes ou mates.",
    price: 'À partir de 25 DT/m²',
  },
];

const paintTypes = [
  { type: 'Peinture acrylique', application: 'Murs & plafonds intérieurs', price: '8 - 15 DT/L', advantages: "Facile d'application, séchage rapide" },
  { type: 'Peinture glycéro', application: 'Boiseries, métaux', price: '12 - 20 DT/L', advantages: 'Résistante, finition brillante' },
  { type: "Peinture époxy", application: 'Sols industriels', price: '25 - 40 DT/L', advantages: 'Extrêmement résistante' },
  { type: 'Peinture pliolite', application: 'Façades extérieures', price: '15 - 25 DT/L', advantages: 'Résistante aux intempéries' },
  { type: 'Peinture naturelle', application: 'Chambres, salons', price: '20 - 35 DT/L', advantages: 'Écologique, sans COV' },
  { type: 'Peinture anti-humidité', application: 'Salles de bain, cuisines', price: '18 - 28 DT/L', advantages: "Traite les problèmes d'humidité" },
];

const gallery = [
  { src: '/paint-gallery-1.jpg', alt: 'Salon moderne peint en gris avec mur accent bleu canard' },
  { src: '/paint-gallery-2.jpg', alt: 'Chambre parentale avec peinture blanche et mur vert sauge' },
  { src: '/paint-gallery-3.jpg', alt: 'Façade de maison méditerranéenne fraîchement peinte' },
  { src: '/paint-gallery-4.jpg', alt: "Détail d'un enduit décoratif stuc venitien" },
  { src: '/paint-gallery-5.jpg', alt: 'Bureau moderne avec peinture bicolore' },
  { src: '/paint-gallery-6.jpg', alt: "Couloir d'entrée avec peinture gris perle" },
];

export default function PeintureBatiments() {
  return (
    <>
      <SEO
        title="Peinture Bâtiments Tunisie | Services Professionnels & Tarifs"
        description="Services de peinture intérieure et extérieure en Tunisie. Peinture à partir de 12 DT/m², enduits décoratifs 35 DT/m². Devis gratuit. ☎ +216 22 784 561"
        path="/peinture-batiments"
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://lamaisonduplacoplatre.com/" },
            { "@type": "ListItem", "position": 2, "name": "Peinture bâtiments", "item": "https://lamaisonduplacoplatre.com/peinture-batiments" }
          ]
        })}
      </script>

      {/* Page Hero */}
      <section className="bg-navy pt-36 pb-20">
        <div className="container-section text-center">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-4">
            Peinture Bâtiments en Tunisie — Services Professionnels
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto mb-4">
            Des finitions de qualité pour sublimer vos espaces intérieurs et extérieurs.
          </p>
          <nav className="flex items-center justify-center gap-2 text-sm">
            <Link to="/" className="text-white/60 hover:text-amber transition-colors">Accueil</Link>
            <ChevronRight className="w-4 h-4 text-white/40" />
            <span className="text-white/80">Peinture bâtiments</span>
          </nav>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container-section max-w-3xl text-center">
          <ScrollReveal>
            <p className="text-graytext leading-relaxed mb-6">
              Notre équipe de peintres professionnels assure des finitions impeccables pour tous vos 
              projets de peinture intérieure et extérieure. De la préparation des surfaces à la pose 
              de peintures décoratives, nous garantissons un résultat durable et esthétique.
            </p>
            <Link to="/contact" className="btn-primary">
              Demander un devis peinture
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Peinture */}
      <section className="py-20 bg-graylight">
        <div className="container-section">
          <ScrollReveal className="text-center mb-14">
            <p className="section-label justify-center mb-4">Nos services</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-navy font-semibold">
              Nos Services de Peinture
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.1}>
                <div className="p-8 border border-grayborder rounded-lg bg-white hover:shadow-card hover:-translate-y-1 transition-all duration-300 h-full">
                  <service.icon className="w-12 h-12 text-amber mb-4" />
                  <h3 className="font-inter text-lg font-semibold text-navy mb-2">
                    {service.title}
                  </h3>
                  <p className="text-graytext text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <p className="text-amber font-semibold text-sm">{service.price}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Types de Peinture */}
      <section className="py-20 bg-white">
        <div className="container-section">
          <ScrollReveal className="text-center mb-12">
            <p className="section-label justify-center mb-4">Nos produits</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-navy font-semibold">
              Types de Peinture Disponibles
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="overflow-x-auto rounded-lg shadow">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="px-5 py-4 text-sm font-semibold uppercase tracking-wider">Type de peinture</th>
                    <th className="px-5 py-4 text-sm font-semibold uppercase tracking-wider hidden md:table-cell">Application</th>
                    <th className="px-5 py-4 text-sm font-semibold uppercase tracking-wider">Prix indicatif</th>
                    <th className="px-5 py-4 text-sm font-semibold uppercase tracking-wider hidden lg:table-cell">Avantages</th>
                  </tr>
                </thead>
                <tbody>
                  {paintTypes.map((row, index) => (
                    <tr
                      key={row.type}
                      className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-amber/5 transition-colors`}
                    >
                      <td className="px-5 py-4 text-navy font-medium text-sm">{row.type}</td>
                      <td className="px-5 py-4 text-graytext text-sm hidden md:table-cell">{row.application}</td>
                      <td className="px-5 py-4 text-amber font-semibold text-sm">{row.price}</td>
                      <td className="px-5 py-4 text-graytext text-sm hidden lg:table-cell">{row.advantages}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-20 bg-graylight">
        <div className="container-section">
          <ScrollReveal className="text-center mb-14">
            <p className="section-label justify-center mb-4">Nos réalisations</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-navy font-semibold">
              Aperçu de Nos Travaux de Peinture
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((item, index) => (
              <ScrollReveal key={item.src} delay={index * 0.1}>
                <div className="group relative aspect-square rounded-lg overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/60 transition-all duration-300 flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-10">
            <Link to="/contact" className="btn-secondary !border-navy !text-navy hover:!bg-navy hover:!text-white">
              Voir plus de réalisations
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber">
        <div className="container-section text-center">
          <ScrollReveal>
            <h2 className="font-playfair text-3xl md:text-4xl text-navy font-semibold mb-4">
              Transformez Vos Espaces Avec Nos Peintres Experts
            </h2>
            <p className="text-navy/70 mb-8 max-w-xl mx-auto">
              Contactez-nous pour un devis gratuit et sans engagement.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-navy text-white font-inter font-medium uppercase tracking-wider text-sm px-8 py-3.5 rounded transition-all duration-300 hover:bg-navy-light"
            >
              Demandez un devis gratuit
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
