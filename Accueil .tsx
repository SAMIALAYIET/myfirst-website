import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router';
import { Phone, ChevronLeft, ChevronRight, Layers, Thermometer, Paintbrush, Truck, ClipboardList, Hammer, MapPin, Award, CheckCircle, Users, Clock, Star, Quote, Mail } from 'lucide-react';
import SEO from '@/components/SEO';
import ScrollReveal from '@/components/ScrollReveal';

const heroSlides = [
  {
    image: './hero-slide-1.jpg',
    title: 'La Maison du Placoplâtre',
    subtitle: 'Votre partenaire de confiance pour tous vos travaux de placoplâtre, isolation et peinture en Tunisie.',
  },
  {
    image: './hero-slide-2.jpg',
    title: 'Finitions Impeccables',
    subtitle: 'Des intérieurs modernes et élégants réalisés par nos experts plaquistes qualifiés.',
  },
  {
    image: './hero-slide-3.jpg',
    title: 'Une Équipe d\'Experts',
    subtitle: 'Plus de 70 ans d\'expérience au service de vos projets de construction en Tunisie.',
  },
];

const services = [
  {
    icon: Layers,
    title: 'Placoplâtre & Cloisons',
    description: 'Installation de cloisons, faux plafonds, doublages et aménagement intérieur. Travaux de plâtre traditionnel et moderne.',
  },
  {
    icon: Thermometer,
    title: 'Isolation Thermique',
    description: 'Isolation des murs, plafonds et combles pour améliorer le confort thermique et réduire vos factures d\'énergie.',
  },
  {
    icon: Paintbrush,
    title: 'Peinture & Décoration',
    description: 'Peinture intérieure et extérieure, enduits décoratifs, finitions de haute qualité pour sublimer vos espaces.',
  },
  {
    icon: Truck,
    title: 'Fournitures de Matériaux',
    description: 'Vente et livraison de plaques de plâtre, matériaux d\'isolation, peintures et accessoires de construction.',
  },
  {
    icon: ClipboardList,
    title: 'Conseil & Études',
    description: 'Accompagnement dans vos projets de construction, études techniques et conseils personnalisés.',
  },
  {
    icon: Hammer,
    title: 'Rénovation Complète',
    description: 'Rénovation intégrale de vos espaces intérieurs, de la démolition à la finition finale.',
  },
];

const zones = [
  'Borj Louzir',
  'Raoued',
  'La Soukra',
  'Mnihla',
  'Ennasr',
  'Ariana Ville',
  'Ettadhamen',
];

const stats = [
  { icon: Award, value: 70, suffix: '+', label: 'Années d\'expérience', isSpecial: false },
  { icon: CheckCircle, value: 5000, suffix: '+', label: 'Projets réalisés', isSpecial: false },
  { icon: Users, value: 100, suffix: '%', label: 'Clients satisfaits', isSpecial: false },
  { icon: Clock, value: 24, suffix: '/7', label: 'Disponibilité', isSpecial: true },
];

const testimonials = [
  {
    text: 'Excellent travail de la part de toute l\'équipe. Les cloisons sont parfaitement installées et les finitions sont impeccables. Je recommande vivement !',
    author: 'Ahmed K.',
    role: 'Propriétaire à La Soukra',
    rating: 5,
  },
  {
    text: 'Professionnels, ponctuels et très soigneux. Notre isolation thermique a fait une vraie différence sur nos factures. Merci !',
    author: 'Sonia M.',
    role: 'Architecte d\'intérieur',
    rating: 5,
  },
  {
    text: 'Le devis était clair et transparent, le travail a été fait dans les temps. Une entreprise sérieuse que je referai appel sans hésiter.',
    author: 'Karim B.',
    role: 'Gérant de restaurant',
    rating: 5,
  },
];

// Animated counter component
function AnimatedCounter({ value, suffix, isSpecial }: { value: number; suffix: string; isSpecial: boolean }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 2000, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [hasStarted, value]);

  if (isSpecial) {
    return <span ref={ref}>24/7</span>;
  }

  return <span ref={ref}>{count}{suffix}</span>;
}

function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  return (
    <div className="relative">
      <div className="bg-graylight rounded-lg p-8 md:p-10">
        <Quote className="w-8 h-8 text-amber mb-4" />
        <p className="text-navy text-lg italic leading-relaxed mb-6">
          &ldquo;{testimonials[current].text}&rdquo;
        </p>
        <div className="flex items-center gap-1 mb-3">
          {[...Array(testimonials[current].rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber text-amber" />
          ))}
        </div>
        <p className="font-inter font-semibold text-navy">{testimonials[current].author}</p>
        <p className="text-graytext text-sm">{testimonials[current].role}</p>
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border border-grayborder flex items-center justify-center hover:bg-amber hover:border-amber transition-colors"
          aria-label="Témoignage précédent"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full border border-grayborder flex items-center justify-center hover:bg-amber hover:border-amber transition-colors"
          aria-label="Témoignage suivant"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default function Accueil() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  return (
    <>
      <SEO
        title="La Maison du Placoplâtre | Experts en Placoplâtre Tunisie [2025]"
        description="Experts en placoplâtre, isolation et peinture en Tunisie. Devis gratuit. 70 ans d'expérience. Interventions à Ariana, Borj Louzir, La Soukra. ☎ +216 22 784 561"
        path="/"
      />

      {/* Hero Slider */}
      <section
        className="relative min-h-[80vh] flex items-center overflow-hidden"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Slides */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/85 to-navy/40" />
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 container-section py-20 pt-40">
          <div className="max-w-2xl">
            <p className="section-label text-amber mb-4">Experts en Placoplâtre</p>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-5 text-shadow-hero">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-lg">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <Link to="/contact" className="btn-primary">
                Demandez un devis
              </Link>
              <Link to="/services" className="btn-secondary">
                Nos services
              </Link>
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Phone className="w-4 h-4 text-amber" />
              <span>Ou appelez-nous :</span>
              <a href="tel:+21622784561" className="text-amber font-semibold hover:underline">
                +216 22 784 561
              </a>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          aria-label="Slide précédent"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          aria-label="Slide suivant"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container-section">
          <ScrollReveal className="text-center mb-14">
            <p className="section-label justify-center mb-4">Ce que nous faisons</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-navy font-semibold mb-4">
              Nos Services
            </h2>
            <p className="text-graytext max-w-2xl mx-auto">
              Des solutions complètes pour vos projets de construction et de rénovation en Tunisie.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.1}>
                <div className="group p-8 border border-grayborder rounded-lg bg-white hover:shadow-card hover:-translate-y-1 transition-all duration-300 h-full">
                  <service.icon className="w-12 h-12 text-amber mb-4" />
                  <h3 className="font-inter text-xl font-semibold text-navy mb-2">
                    {service.title}
                  </h3>
                  <p className="text-graytext text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              Voir tous nos services
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-20 bg-graylight">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <p className="section-label mb-4">Zone d&apos;intervention</p>
              <h2 className="font-playfair text-3xl md:text-4xl text-navy font-semibold mb-4">
                Nous Desservons Ariana et Ses Alentours
              </h2>
              <p className="text-graytext mb-6">
                Basés à Borj Louzir, nous intervenons dans tout le gouvernorat de l&apos;Ariana et les régions voisines.
              </p>
              <ul className="space-y-2.5 mb-8">
                {zones.map((zone) => (
                  <li key={zone} className="flex items-center gap-3 text-navy">
                    <MapPin className="w-4 h-4 text-amber flex-shrink-0" />
                    <span className="text-sm">{zone}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary">
                Contactez-nous
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.5886!2d10.2066!3d36.8628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDUxJzQ2Ik4gMTDCsDEyJzI0IkU!5e0!3m2!1sfr!2stn!4v1600000000000!5m2!1sfr!2stn"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation La Maison du Placoplâtre"
                  className="grayscale-[30%]"
                />
                <div className="bg-white p-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-navy">
                    <MapPin className="w-4 h-4 text-amber" />
                    <span>21 Rue Sanaa, Cité Ennasim, Borj Louzir 2073, Ariana</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-navy">
                    <Phone className="w-4 h-4 text-amber" />
                    <a href="tel:+21622784561" className="hover:text-amber">+216 22 784 561</a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-navy">
                    <Mail className="w-4 h-4 text-amber" />
                    <a href="mailto:samialayiet@gmail.com" className="hover:text-amber">samialayiet@gmail.com</a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container-section">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <stat.icon className="w-8 h-8 text-amber mx-auto mb-3" />
                  <div className="font-playfair text-4xl md:text-5xl text-amber font-bold leading-none mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} isSpecial={stat.isSpecial} />
                  </div>
                  <p className="text-white/70 text-sm">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-section">
          <ScrollReveal className="text-center mb-14">
            <p className="section-label justify-center mb-4">Témoignages</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-navy font-semibold">
              Ce Que Disent Nos Clients
            </h2>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* CTA Final */}
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
              className="inline-flex items-center justify-center bg-navy text-white font-inter font-medium uppercase tracking-wider text-sm px-8 py-3.5 rounded transition-all duration-300 hover:bg-navy-light mb-4"
            >
              Demandez un devis gratuit
            </Link>
            <p className="text-navy font-semibold text-lg">
              <a href="tel:+21622784561">+216 22 784 561</a>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
