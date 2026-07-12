import { Link } from 'react-router';
import { ChevronRight, Square, Droplets, VolumeX, Flame, Shield, AlertCircle } from 'lucide-react';
import SEO from '@/components/SEO';
import ScrollReveal from '@/components/ScrollReveal';

const priceTable = [
  { type: 'Cloison simple (BA13)', price: '35 - 45 DT', delay: '1-2 jours/10m²', detail: 'Plaque BA13 sur ossature métallique' },
  { type: 'Cloison double peau', price: '55 - 65 DT', delay: '2-3 jours/10m²', detail: '2 plaques BA13 chaque côté' },
  { type: 'Cloison hydrofuge', price: '50 - 60 DT', delay: '1-2 jours/10m²', detail: 'Pour salles de bain et cuisines' },
  { type: 'Cloison phonique', price: '65 - 80 DT', delay: '2-3 jours/10m²', detail: 'Avec isolation acoustique' },
  { type: 'Faux plafond simple', price: '40 - 50 DT', delay: '1-2 jours/10m²', detail: 'Plaque BA13 sur ossature' },
  { type: 'Faux plafond décoratif', price: '60 - 80 DT', delay: '2-4 jours/10m²', detail: 'Formes géométriques, éclairage intégré' },
  { type: 'Faux plafond hydrofuge', price: '55 - 65 DT', delay: '1-2 jours/10m²', detail: 'Pour pièces humides' },
  { type: 'Doublage mur', price: '30 - 40 DT', delay: '1 jour/10m²', detail: 'Collage direct sur mur existant' },
  { type: 'Doublage sur ossature', price: '45 - 55 DT', delay: '1-2 jours/10m²', detail: 'Avec isolation intégrée' },
];

const plaqueTypes = [
  { icon: Square, name: 'Plaque BA13 Standard', desc: "La plaque standard la plus utilisée. Épaisseur 13mm, idéale pour les cloisons et faux plafonds intérieurs.", price: 'À partir de 3.500 DT/m²' },
  { icon: Droplets, name: 'Plaque Hydrofuge', desc: "Plaque verte traitée contre l'humidité. Parfaite pour les cuisines, salles de bain et pièces humides.", price: 'À partir de 5.500 DT/m²' },
  { icon: VolumeX, name: 'Plaque Phonique', desc: 'Plaque avec isolation acoustique intégrée. Réduit considérablement les nuisances sonores.', price: 'À partir de 8.000 DT/m²' },
  { icon: Flame, name: 'Plaque Coupe-feu', desc: "Plaque rose avec résistance au feu jusqu'à 2 heures. Conforme aux normes de sécurité.", price: 'Sur devis' },
  { icon: Shield, name: 'Plaque Duraline', desc: 'Plaque renforcée, très résistante aux chocs. Idéale pour les passages fréquents et les zones commerciales.', price: 'À partir de 7.000 DT/m²' },
  { icon: Square, name: 'Plaque Plombée', desc: 'Protection contre les rayons X. Utilisée dans les cabinets médicaux et cliniques.', price: 'Sur devis' },
];

const options = [
  { name: 'Isolation laine de roche (100mm)', price: '+15 DT/m²' },
  { name: 'Isolation laine de verre (100mm)', price: '+12 DT/m²' },
  { name: 'Bande à joints et enduit', price: '+8 DT/m²' },
  { name: 'Peinture de finition (2 couches)', price: '+10 DT/m²' },
  { name: 'Éclairage LED intégré (faux plafond)', price: 'Sur devis' },
  { name: 'Trappe de visite', price: '+50 DT/unité' },
  { name: 'Cornières et finitions aluminium', price: '+5 DT/ml' },
];

export default function PrixPlacoplatre() {
  return (
    <>
      <SEO
        title="Prix Placoplâtre au m² Tunisie [2025] | Tarifs & Devis Gratuit"
        description="Prix du placoplâtre au m² en Tunisie : cloison 35-45 DT, faux plafond 40-50 DT, isolation 45-90 DT. Devis gratuit et sans engagement. ☎ +216 22 784 561"
        path="/prix-placoplatre-au-m2"
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://lamaisonduplacoplatre.com/" },
            { "@type": "ListItem", "position": 2, "name": "Prix placoplâtre au m²", "item": "https://lamaisonduplacoplatre.com/prix-placoplatre-au-m2" }
          ]
        })}
      </script>

      {/* Page Hero */}
      <section className="bg-navy pt-36 pb-20">
        <div className="container-section text-center">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-4">
            Prix du Placoplâtre au m² en Tunisie [2025]
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto mb-4">
            Tarifs transparents pour vos travaux de cloisons, faux plafonds et doublages.
          </p>
          <nav className="flex items-center justify-center gap-2 text-sm">
            <Link to="/" className="text-white/60 hover:text-amber transition-colors">Accueil</Link>
            <ChevronRight className="w-4 h-4 text-white/40" />
            <span className="text-white/80">Prix placoplâtre au m²</span>
          </nav>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container-section max-w-3xl text-center">
          <ScrollReveal>
            <p className="text-graytext leading-relaxed mb-6">
              Les prix du placoplâtre au m² varient en fonction du type de travaux, des matériaux utilisés 
              et de la complexité du projet. Ci-dessous, nos tarifs indicatifs pour l&apos;année 2025. 
              Contactez-nous pour un devis personnalisé.
            </p>
            <Link to="/contact" className="btn-primary">
              Demander un devis personnalisé
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Grille Tarifaire */}
      <section className="py-20 bg-graylight">
        <div className="container-section">
          <ScrollReveal className="text-center mb-12">
            <p className="section-label justify-center mb-4">Nos tarifs</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-navy font-semibold">
              Grille des Prix Placoplâtre
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="overflow-x-auto rounded-lg shadow">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="px-5 py-4 text-sm font-semibold uppercase tracking-wider">Type de travaux</th>
                    <th className="px-5 py-4 text-sm font-semibold uppercase tracking-wider">Prix au m²</th>
                    <th className="px-5 py-4 text-sm font-semibold uppercase tracking-wider hidden md:table-cell">Délai indicatif</th>
                    <th className="px-5 py-4 text-sm font-semibold uppercase tracking-wider hidden lg:table-cell">Détails</th>
                  </tr>
                </thead>
                <tbody>
                  {priceTable.map((row, index) => (
                    <tr
                      key={row.type}
                      className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-amber/5 transition-colors`}
                    >
                      <td className="px-5 py-4 text-navy font-medium text-sm">{row.type}</td>
                      <td className="px-5 py-4 text-amber font-semibold">{row.price}</td>
                      <td className="px-5 py-4 text-graytext text-sm hidden md:table-cell">{row.delay}</td>
                      <td className="px-5 py-4 text-graytext text-sm hidden lg:table-cell">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <div className="mt-6 flex items-start gap-3 bg-amber/10 p-4 rounded-lg">
            <AlertCircle className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" />
            <p className="text-sm text-navy/80">
              Ces prix sont indicatifs et peuvent varier selon l&apos;état des lieux, l&apos;accessibilité 
              et les spécificités de votre projet. Demandez un devis gratuit pour un tarif précis.
            </p>
          </div>
        </div>
      </section>

      {/* Types de Plaques */}
      <section className="py-20 bg-white">
        <div className="container-section">
          <ScrollReveal className="text-center mb-14">
            <p className="section-label justify-center mb-4">Nos produits</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-navy font-semibold">
              Types de Plaques de Plâtre
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plaqueTypes.map((plaque, index) => (
              <ScrollReveal key={plaque.name} delay={index * 0.1}>
                <div className="p-8 border border-grayborder rounded-lg bg-white hover:shadow-card hover:-translate-y-1 transition-all duration-300 h-full">
                  <plaque.icon className="w-12 h-12 text-amber mb-4" />
                  <h3 className="font-inter text-lg font-semibold text-navy mb-2">
                    {plaque.name}
                  </h3>
                  <p className="text-graytext text-sm leading-relaxed mb-4">
                    {plaque.desc}
                  </p>
                  <p className="text-amber font-semibold text-sm">{plaque.price}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Options et Suppléments */}
      <section className="py-20 bg-graylight">
        <div className="container-section">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl text-navy font-semibold">
              Options et Suppléments
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow overflow-hidden">
              {options.map((option, index) => (
                <div
                  key={option.name}
                  className={`flex items-center justify-between px-6 py-4 ${
                    index !== options.length - 1 ? 'border-b border-grayborder' : ''
                  } ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                  <span className="text-navy text-sm">{option.name}</span>
                  <span className="text-amber font-semibold">{option.price}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber">
        <div className="container-section text-center">
          <ScrollReveal>
            <h2 className="font-playfair text-3xl md:text-4xl text-navy font-semibold mb-4">
              Besoin d&apos;un Devis Précis ?
            </h2>
            <p className="text-navy/70 mb-8 max-w-xl mx-auto">
              Contactez-nous pour une évaluation gratuite de votre projet.
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
