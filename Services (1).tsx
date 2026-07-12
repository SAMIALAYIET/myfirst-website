import { Link } from 'react-router';
import { ChevronRight, Columns, LayoutGrid, Layers, Square, BrickWall, ArrowUp, Home, VolumeX, Paintbrush, Sun, Palette, Sparkles, Phone, FileText, Hammer, CheckCircle } from 'lucide-react';
import SEO from '@/components/SEO';
import ScrollReveal from '@/components/ScrollReveal';

const placoplatreServices = [
  {
    icon: Columns,
    title: 'Cloisons de Distribution',
    description: 'Séparation des pièces, création de nouveaux espaces, modification de la configuration intérieure. Tous types de cloisons : simples, doubles, hydrofuges, phoniques.',
  },
  {
    icon: LayoutGrid,
    title: 'Faux Plafonds',
    description: "Plafonds droits, décoratifs, avec spots intégrés, plafonds hydrofuges pour pièces humides. Optimisation de la hauteur sous plafond et intégration d'éclairage.",
  },
  {
    icon: Layers,
    title: 'Doublages',
    description: "Doublage collé ou sur ossature, avec ou sans isolation thermique. Correction des murs irréguliers et amélioration des performances énergétiques.",
  },
  {
    icon: Square,
    title: 'Chambranles et Habillages',
    description: "Encadrement des portes et fenêtres, habillage des poutres, création de niches décoratives et rangements intégrés.",
  },
];

const isolationServices = [
  {
    icon: BrickWall,
    title: 'Isolation des Murs',
    description: "Isolation thermique par l'intérieur (doublage) ou par l'extérieur (ITE). Matériaux : laine de roche, laine de verre, polystyrène, polyurethane.",
  },
  {
    icon: ArrowUp,
    title: 'Isolation des Plafonds',
    description: "Isolation des plafonds sous combles, plafonds de caves, traitement des ponts thermiques. Solutions sur mesure selon votre configuration.",
  },
  {
    icon: Home,
    title: 'Isolation des Combles',
    description: "Combles perdus ou aménagés, rampants, planchers. Nous choisissons la meilleure technique selon l'accessibilité et votre budget.",
  },
  {
    icon: VolumeX,
    title: 'Isolation Phonique',
    description: "Réduction des bruits d'impact et aériens. Solutions pour appartements, studios, espaces professionnels et salles de réunion.",
  },
];

const peintureServices = [
  {
    icon: Paintbrush,
    title: 'Peinture Intérieure',
    description: "Murs, plafonds, boiseries. Préparation complète des surfaces, pose de peintures acryliques, glycéros, finitions mates, satinées ou brillantes.",
  },
  {
    icon: Sun,
    title: 'Peinture Extérieure',
    description: "Façades, murs de clôture, portails. Peintures résistantes aux intempéries, traitements anti-moisissure, ravalement de façades.",
  },
  {
    icon: Palette,
    title: 'Enduits Décoratifs',
    description: "Création de textures et effets décoratifs : stuco venitien, taloché, gratté, ciré. Personnalisation selon vos envies et votre décoration.",
  },
  {
    icon: Sparkles,
    title: 'Finitions Spéciales',
    description: "Laquage, patines, dorures, peintures à effet métal ou rouille. Pour un intérieur unique et personnalisé.",
  },
];

const fournitures = [
  { name: 'Plaques de plâtre', desc: 'BA13 standard, hydrofuge, phonique, coupe-feu, Duraline' },
  { name: 'Profilés métalliques', desc: 'Montants, rails, fourrures, suspentes, cornères' },
  { name: 'Isolation', desc: 'Laine de roche, laine de verre, polystyrène, polyurethane' },
  { name: 'Peintures', desc: 'Acryliques, glycéros, époxy, pliolites, peintures naturelles' },
  { name: 'Accessoires', desc: 'Bandes à joints, vis, chevilles, enduits, sous-couches' },
  { name: 'Outillage', desc: 'Outils professionnels pour plaquistes' },
];

const processSteps = [
  { icon: Phone, title: 'Contact', desc: 'Vous nous contactez par téléphone, email ou formulaire.' },
  { icon: FileText, title: 'Devis', desc: 'Nous nous déplaçons pour évaluer vos besoins et établir un devis détaillé.' },
  { icon: Hammer, title: 'Travaux', desc: 'Notre équipe qualifiée réalise les travaux dans les délais convenus.' },
  { icon: CheckCircle, title: 'Livraison', desc: 'Nous vérifions ensemble la qualité et vous livrons votre projet.' },
];

export default function Services() {
  return (
    <>
      <SEO
        title="Nos Services | Placoplâtre, Isolation, Peinture & Plus Tunisie"
        description="Tous nos services : placoplâtre, isolation thermique, peinture, fournitures de matériaux. Interventions à Ariana et environs. Devis gratuit. ☎ +216 22 784 561"
        path="/services"
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://lamaisonduplacoplatre.com/" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://lamaisonduplacoplatre.com/services" }
          ]
        })}
      </script>

      {/* Page Hero */}
      <section className="bg-navy pt-36 pb-20">
        <div className="container-section text-center">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-4">
            Nos Services — Placoplâtre, Isolation, Peinture & Plus
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto mb-4">
            Des solutions complètes et professionnelles pour tous vos projets de construction et de rénovation.
          </p>
          <nav className="flex items-center justify-center gap-2 text-sm">
            <Link to="/" className="text-white/60 hover:text-amber transition-colors">Accueil</Link>
            <ChevronRight className="w-4 h-4 text-white/40" />
            <span className="text-white/80">Services</span>
          </nav>
        </div>
      </section>

      {/* Placoplâtre */}
      <section className="py-20 bg-white">
        <div className="container-section">
          <ScrollReveal>
            <p className="section-label mb-4">Placoplâtre</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-navy font-semibold mb-4">
              Travaux de Placoplâtre
            </h2>
            <p className="text-graytext max-w-3xl mb-10">
              La plaque de plâtre est notre cœur de métier. Nous installons tous types de cloisons, 
              faux plafonds et doublages avec une expertise reconnue depuis plus de 70 ans.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {placoplatreServices.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.1}>
                <div className="flex items-start gap-4 p-6 border border-grayborder rounded-lg hover:shadow-card transition-all duration-300">
                  <service.icon className="w-10 h-10 text-amber flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-inter text-lg font-semibold text-navy mb-2">{service.title}</h3>
                    <p className="text-graytext text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-8">
            <Link to="/prix-placoplatre-au-m2" className="btn-primary">
              Voir les tarifs placoplâtre
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Isolation */}
      <section className="py-20 bg-graylight">
        <div className="container-section">
          <ScrollReveal>
            <p className="section-label mb-4">Isolation</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-navy font-semibold mb-4">
              Isolation Thermique & Phonique
            </h2>
            <p className="text-graytext max-w-3xl mb-10">
              L&apos;isolation est essentielle pour votre confort et vos économies d&apos;énergie. 
              Nous proposons des solutions adaptées à chaque situation et à chaque budget.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {isolationServices.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.1}>
                <div className="flex items-start gap-4 p-6 border border-grayborder rounded-lg bg-white hover:shadow-card transition-all duration-300">
                  <service.icon className="w-10 h-10 text-amber flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-inter text-lg font-semibold text-navy mb-2">{service.title}</h3>
                    <p className="text-graytext text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-8">
            <Link to="/couts-isolation" className="btn-primary">
              Voir les tarifs isolation
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Peinture */}
      <section className="py-20 bg-white">
        <div className="container-section">
          <ScrollReveal>
            <p className="section-label mb-4">Peinture</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-navy font-semibold mb-4">
              Peinture & Décoration
            </h2>
            <p className="text-graytext max-w-3xl mb-10">
              Nos peintres professionnels transforment vos espaces avec des finitions de haute qualité, 
              du classique au contemporain.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {peintureServices.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.1}>
                <div className="flex items-start gap-4 p-6 border border-grayborder rounded-lg hover:shadow-card transition-all duration-300">
                  <service.icon className="w-10 h-10 text-amber flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-inter text-lg font-semibold text-navy mb-2">{service.title}</h3>
                    <p className="text-graytext text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-8">
            <Link to="/peinture-batiments" className="btn-primary">
              Voir les tarifs peinture
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Fournitures */}
      <section className="py-20 bg-graylight">
        <div className="container-section">
          <ScrollReveal>
            <p className="section-label mb-4">Fournitures</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-navy font-semibold mb-4">
              Fournitures de Matériaux de Construction
            </h2>
            <p className="text-graytext max-w-3xl mb-10">
              Nous vendons et livrons tous les matériaux nécessaires à vos travaux de placoplâtre, 
              d&apos;isolation et de peinture.
            </p>
          </ScrollReveal>

          <div className="max-w-3xl">
            {fournitures.map((item, index) => (
              <ScrollReveal key={item.name} delay={index * 0.05}>
                <div className={`flex items-start gap-4 py-4 ${index !== fournitures.length - 1 ? 'border-b border-grayborder' : ''}`}>
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-inter font-semibold text-navy text-base">{item.name}</h3>
                    <p className="text-graytext text-sm">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-8">
            <Link to="/contact" className="btn-primary">
              Demander un catalogue
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20 bg-white">
        <div className="container-section">
          <ScrollReveal className="text-center mb-14">
            <p className="section-label justify-center mb-4">Notre processus</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-navy font-semibold">
              Comment Ça Marche ?
            </h2>
          </ScrollReveal>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-amber/30" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <ScrollReveal key={step.title} delay={index * 0.2}>
                  <div className="text-center relative">
                    <div className="w-16 h-16 rounded-full bg-amber flex items-center justify-center mx-auto mb-4 relative z-10">
                      <step.icon className="w-7 h-7 text-navy" />
                    </div>
                    <h3 className="font-inter text-lg font-semibold text-navy mb-2">{step.title}</h3>
                    <p className="text-graytext text-sm">{step.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber">
        <div className="container-section text-center">
          <ScrollReveal>
            <h2 className="font-playfair text-3xl md:text-4xl text-navy font-semibold mb-4">
              Lancez Votre Projet Aujourd&apos;hui
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
