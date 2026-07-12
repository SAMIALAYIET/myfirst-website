import { Link } from 'react-router';
import { ChevronRight, Thermometer, VolumeX, Home, BrickWall, Layers, ArrowDown, AlertCircle } from 'lucide-react';
import SEO from '@/components/SEO';
import ScrollReveal from '@/components/ScrollReveal';

const priceTable = [
  { type: 'Isolation thermique murs (intérieur)', price: '45 - 60 DT', thickness: '60-100mm', zone: 'Murs intérieurs', detail: 'Laine de roche ou laine de verre' },
  { type: 'Isolation thermique murs (extérieur)', price: '70 - 90 DT', thickness: '80-120mm', zone: 'Murs extérieurs', detail: 'Système complet avec finition' },
  { type: 'Isolation plafond', price: '40 - 55 DT', thickness: '100-200mm', zone: 'Plafond', detail: 'Laine de verre soufflée ou panneaux' },
  { type: 'Isolation combles perdus', price: '35 - 50 DT', thickness: '200-300mm', zone: 'Combles', detail: 'Laine de verre en vrac' },
  { type: 'Isolation combles aménagés', price: '50 - 70 DT', thickness: '100-160mm', zone: 'Rampants', detail: 'Panneaux rigides' },
  { type: 'Isolation phonique mur', price: '55 - 75 DT', thickness: '50-100mm', zone: 'Murs', detail: 'Plaque phonique + laine de roche' },
  { type: 'Isolation phonique plafond', price: '65 - 85 DT', thickness: '50-100mm', zone: 'Plafond', detail: 'Système anti-impact + absorption' },
  { type: 'Isolation sous dalle', price: '40 - 55 DT', thickness: '30-50mm', zone: 'Sol', detail: 'Polystyrène extrudé' },
];

const solutions = [
  {
    icon: Thermometer,
    title: 'Isolation Thermique',
    description: 'Réduisez vos pertes de chaleur en hiver et gardez la fraîcheur en été. Nos solutions d\'isolation thermique vous assurent un confort toute l\'année.',
    savings: 'Jusqu\'à 30% sur vos factures d\'énergie',
  },
  {
    icon: VolumeX,
    title: 'Isolation Phonique',
    description: 'Diminuez les nuisances sonores entre les pièces et depuis l\'extérieur. Idéal pour les appartements et les espaces professionnels.',
    savings: 'Jusqu\'à 50dB selon les matériaux',
  },
  {
    icon: Home,
    title: 'Isolation Combles',
    description: 'Ne laissez plus votre toit devenir un puits thermique. L\'isolation des combles est la solution la plus efficace pour économiser l\'énergie.',
    savings: 'Rentabilisée en 3 à 5 ans',
  },
  {
    icon: BrickWall,
    title: 'Isolation Murs Extérieurs',
    description: 'L\'isolation par l\'extérieur protège vos murs et améliore l\'esthétique de votre façade tout en optimisant la performance énergétique.',
    savings: 'Pas de perte d\'espace intérieur',
  },
  {
    icon: Layers,
    title: 'Isolation Doublage',
    description: 'Solution rapide et efficace par l\'intérieur. Nous installons un doublage isolant sur vos murs existants avec finition.',
    savings: '2-3 jours pour une pièce standard',
  },
  {
    icon: ArrowDown,
    title: 'Isolation Sous Dalle',
    description: 'L\'isolation des sols évite les ponts thermiques et améliore le confort de vos pièces en rez-de-chaussée.',
    savings: 'Adieu aux sols froids',
  },
];

const comparatif = [
  { critere: 'Prix moyen/m²', thermique: '45 - 90 DT', phonique: '55 - 85 DT', combles: '35 - 70 DT' },
  { critere: "Économies d'énergie", thermique: "Jusqu'à 30%", phonique: 'Faible', combles: "Jusqu'à 25%" },
  { critere: 'Confort acoustique', thermique: 'Faible', phonique: 'Excellente', combles: 'Modérée' },
  { critere: 'Délais d\'installation', thermique: '2-4 jours', phonique: '2-3 jours', combles: '1-2 jours' },
  { critere: 'Durée de vie', thermique: '30+ ans', phonique: '25+ ans', combles: '30+ ans' },
  { critere: 'ROI', thermique: '3-5 ans', phonique: '5-8 ans', combles: '3-5 ans' },
];

export default function CoutsIsolation() {
  return (
    <>
      <SEO
        title="Coûts d'Isolation Tunisie [2025] | Prix au m² & Devis Gratuit"
        description="Tarifs isolation thermique et phonique en Tunisie. Murs 45-90 DT/m², plafonds 40-55 DT/m², combles 35-70 DT/m². Devis gratuit. ☎ +216 22 784 561"
        path="/couts-isolation"
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://lamaisonduplacoplatre.com/" },
            { "@type": "ListItem", "position": 2, "name": "Coûts d'isolation", "item": "https://lamaisonduplacoplatre.com/couts-isolation" }
          ]
        })}
      </script>

      {/* Page Hero */}
      <section className="bg-navy pt-36 pb-20">
        <div className="container-section text-center">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-4">
            Coûts d&apos;Isolation en Tunisie — Prix au m² [2025]
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto mb-4">
            Des solutions d&apos;isolation thermique et acoustique pour un confort optimal.
          </p>
          <nav className="flex items-center justify-center gap-2 text-sm">
            <Link to="/" className="text-white/60 hover:text-amber transition-colors">Accueil</Link>
            <ChevronRight className="w-4 h-4 text-white/40" />
            <span className="text-white/80">Coûts d&apos;isolation</span>
          </nav>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container-section max-w-3xl text-center">
          <ScrollReveal>
            <p className="text-graytext leading-relaxed mb-6">
              L&apos;isolation de votre habitat est un investissement essentiel pour votre confort et vos 
              économies d&apos;énergie. Découvrez nos tarifs pour l&apos;isolation des murs, plafonds et 
              combles en Tunisie.
            </p>
            <Link to="/contact" className="btn-primary">
              Demander un devis gratuit
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Tarifs Isolation */}
      <section className="py-20 bg-graylight">
        <div className="container-section">
          <ScrollReveal className="text-center mb-12">
            <p className="section-label justify-center mb-4">Nos tarifs</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-navy font-semibold">
              Prix de l&apos;Isolation au m²
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="overflow-x-auto rounded-lg shadow">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="px-5 py-4 text-sm font-semibold uppercase tracking-wider">Type d&apos;isolation</th>
                    <th className="px-5 py-4 text-sm font-semibold uppercase tracking-wider">Prix au m²</th>
                    <th className="px-5 py-4 text-sm font-semibold uppercase tracking-wider hidden md:table-cell">Épaisseur</th>
                    <th className="px-5 py-4 text-sm font-semibold uppercase tracking-wider hidden lg:table-cell">Zone</th>
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
                      <td className="px-5 py-4 text-graytext text-sm hidden md:table-cell">{row.thickness}</td>
                      <td className="px-5 py-4 text-graytext text-sm hidden lg:table-cell">{row.zone}</td>
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

      {/* Solutions */}
      <section className="py-20 bg-white">
        <div className="container-section">
          <ScrollReveal className="text-center mb-14">
            <p className="section-label justify-center mb-4">Nos solutions</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-navy font-semibold">
              Nos Solutions d&apos;Isolation
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((sol, index) => (
              <ScrollReveal key={sol.title} delay={index * 0.1}>
                <div className="p-8 border border-grayborder rounded-lg bg-white hover:shadow-card hover:-translate-y-1 transition-all duration-300 h-full">
                  <sol.icon className="w-12 h-12 text-amber mb-4" />
                  <h3 className="font-inter text-lg font-semibold text-navy mb-2">
                    {sol.title}
                  </h3>
                  <p className="text-graytext text-sm leading-relaxed mb-4">
                    {sol.description}
                  </p>
                  <p className="text-amber font-semibold text-sm bg-amber/10 px-3 py-1.5 rounded inline-block">
                    {sol.savings}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparatif */}
      <section className="py-20 bg-graylight">
        <div className="container-section">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl text-navy font-semibold">
              Comparatif des Coûts d&apos;Isolation
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="overflow-x-auto rounded-lg shadow max-w-4xl mx-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="px-5 py-4 text-sm font-semibold uppercase tracking-wider">Critère</th>
                    <th className="px-5 py-4 text-sm font-semibold uppercase tracking-wider bg-amber/20">Isolation Thermique</th>
                    <th className="px-5 py-4 text-sm font-semibold uppercase tracking-wider">Isolation Phonique</th>
                    <th className="px-5 py-4 text-sm font-semibold uppercase tracking-wider">Isolation Combles</th>
                  </tr>
                </thead>
                <tbody>
                  {comparatif.map((row, index) => (
                    <tr
                      key={row.critere}
                      className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-amber/5 transition-colors`}
                    >
                      <td className="px-5 py-4 text-navy font-medium text-sm">{row.critere}</td>
                      <td className="px-5 py-4 text-sm bg-amber/5">{row.thermique}</td>
                      <td className="px-5 py-4 text-graytext text-sm">{row.phonique}</td>
                      <td className="px-5 py-4 text-graytext text-sm">{row.combles}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber">
        <div className="container-section text-center">
          <ScrollReveal>
            <h2 className="font-playfair text-3xl md:text-4xl text-navy font-semibold mb-4">
              Isolons Votre Habitat Ensemble
            </h2>
            <p className="text-navy/70 mb-8 max-w-xl mx-auto">
              Contactez-nous pour un devis gratuit et personnalisé.
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
