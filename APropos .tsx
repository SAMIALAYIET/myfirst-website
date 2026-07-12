import { Link } from 'react-router';
import { Award, Users, Lightbulb, Clock, Eye, Shield, ChevronRight } from 'lucide-react';
import SEO from '@/components/SEO';
import ScrollReveal from '@/components/ScrollReveal';

const values = [
  {
    icon: Award,
    title: 'Qualité',
    description: 'Nous utilisons uniquement des matériaux de première qualité et garantissons des finitions impeccables sur chaque projet.',
  },
  {
    icon: Users,
    title: 'Proximité',
    description: "À l'écoute de nos clients, nous privilégions la communication et la transparence tout au long de votre projet.",
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Nous suivons les dernières tendances et technologies pour vous proposer des solutions modernes et durables.',
  },
  {
    icon: Clock,
    title: 'Ponctualité',
    description: 'Nous respectons les délais convenus et assurons une coordination fluide de tous nos chantiers.',
  },
  {
    icon: Eye,
    title: 'Transparence',
    description: "Devis détaillés et clairs, pas de frais cachés. Vous savez exactement ce que vous payez.",
  },
  {
    icon: Shield,
    title: 'Sécurité',
    description: 'Toutes nos interventions respectent les normes de sécurité en vigueur pour la protection de tous.',
  },
];

const team = [
  { name: 'Sami Alayiet', role: 'Fondateur & Gérant' },
  { name: 'Mohamed Ben', role: 'Chef d\'équipe Placoplâtre' },
  { name: 'Karim Hosni', role: 'Responsable Isolation' },
  { name: 'Amine Jaziri', role: 'Responsable Peinture' },
];

export default function APropos() {
  return (
    <>
      <SEO
        title="À Propos | La Maison du Placoplâtre — 70 Ans d'Expertise"
        description="Découvrez La Maison du Placoplâtre, entreprise familiale tunisienne depuis 70 ans. Experts en placoplâtre, isolation et peinture à Ariana. ☎ +216 22 784 561"
        path="/a-propos"
      />

      {/* Schema.org Breadcrumb */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://lamaisonduplacoplatre.com/" },
            { "@type": "ListItem", "position": 2, "name": "À propos", "item": "https://lamaisonduplacoplatre.com/a-propos" }
          ]
        })}
      </script>

      {/* Page Hero */}
      <section className="bg-navy pt-36 pb-20">
        <div className="container-section text-center">
          <h1 className="font-playfair text-4xl md:text-5xl text-white font-bold mb-4">
            À Propos de La Maison du Placoplâtre
          </h1>
          <nav className="flex items-center justify-center gap-2 text-sm">
            <Link to="/" className="text-white/60 hover:text-amber transition-colors">Accueil</Link>
            <ChevronRight className="w-4 h-4 text-white/40" />
            <span className="text-white/80">À propos</span>
          </nav>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20 bg-white">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/about-team.jpg"
                alt="L'équipe de La Maison du Placoplâtre"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <p className="section-label mb-4">Notre histoire</p>
              <h2 className="font-playfair text-3xl md:text-4xl text-navy font-semibold mb-6">
                70 Ans d'Excellence dans le Bâtiment
              </h2>
              <div className="space-y-4 text-graytext leading-relaxed">
                <p>
                  Depuis plus de 70 ans, La Maison du Placoplâtre accompagne ses clients dans la construction 
                  et la modernisation de leurs habitats. Notre entreprise familiale a su allier tradition et 
                  innovation pour offrir des services de qualité en Tunisie.
                </p>
                <p>
                  Basés à Borj Louzir dans le gouvernorat de l'Ariana, nous desservons l'ensemble de la région 
                  avec une équipe de plaquistes qualifiés et passionnés. Notre mission est simple : comprendre 
                  vos besoins et les transformer en réalité.
                </p>
                <p>
                  De l'installation de cloisons simples à la rénovation complète de vos espaces, nous mettons 
                  notre expertise au service de vos projets, petits et grands.
                </p>
              </div>
              <p className="mt-6 text-sm italic text-graytext">
                L'équipe La Maison du Placoplâtre
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-graylight">
        <div className="container-section">
          <ScrollReveal className="text-center mb-14">
            <p className="section-label justify-center mb-4">Nos valeurs</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-navy font-semibold">
              Ce qui Nous Anime au Quotidien
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <div className="p-8 border border-grayborder rounded-lg bg-white hover:shadow-card hover:-translate-y-1 transition-all duration-300 h-full">
                  <value.icon className="w-12 h-12 text-amber mb-4" />
                  <h3 className="font-inter text-xl font-semibold text-navy mb-2">
                    {value.title}
                  </h3>
                  <p className="text-graytext text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-20 bg-white">
        <div className="container-section">
          <ScrollReveal className="text-center mb-14">
            <p className="section-label justify-center mb-4">Notre équipe</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-navy font-semibold">
              Les Experts Derrière Vos Projets
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 0.1}>
                <div className="bg-graylight rounded-lg overflow-hidden group hover:shadow-card transition-all duration-300">
                  <div className="h-64 bg-gradient-to-br from-navy to-navy-light flex items-center justify-center">
                    <Users className="w-16 h-16 text-white/30" />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-inter text-lg font-semibold text-navy">
                      {member.name}
                    </h3>
                    <p className="text-amber text-sm mt-1">{member.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber">
        <div className="container-section text-center">
          <ScrollReveal>
            <h2 className="font-playfair text-3xl md:text-4xl text-navy font-semibold mb-4">
              Prêt à Démarrer Votre Projet ?
            </h2>
            <p className="text-navy/70 mb-8 max-w-xl mx-auto">
              Contactez-nous dès maintenant pour un devis gratuit et sans engagement.
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
