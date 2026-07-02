import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Menu,
  X,
  Star,
  Scissors,
  Sparkles,
  Droplets,
  Heart,
  Flower2,
  CheckCircle2,
  Clock,
  Instagram,
  Facebook,
  Award,
  Users,
  ShieldCheck,
  Crown,
  Wand2,
  Zap,
  PartyPopper,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const WA_LINK =
  "https://wa.me/918390140360?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Ananya%20Beauty%20Parlour";
const WA_ACADEMY_LINK =
  "https://wa.me/918390140360?text=Hi%2C%20I%27m%20interested%20in%20the%20Academy%20courses%20at%20Ananya%20Beauty%20Parlour";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Academy", href: "#academy" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Bridal Services & Wedding Preparation",
    description:
      "Complete bridal makeover packages — from pre-wedding skincare to the final look on your most special day.",
    icon: Crown,
  },
  {
    title: "Event Makeup & Hairstyling",
    description:
      "Glamorous makeup and elegant hairstyles for parties, receptions, and every occasion worth celebrating.",
    icon: PartyPopper,
  },
  {
    title: "Body Waxing & Brazilian Waxing",
    description:
      "Smooth, long-lasting results with gentle techniques and premium wax for all skin types.",
    icon: Droplets,
  },
  {
    title: "Facials & Spa Services",
    description:
      "Rejuvenating facials and relaxing spa treatments tailored to give your skin a healthy, radiant glow.",
    icon: Flower2,
  },
  {
    title: "Haircuts & Hairstyling",
    description:
      "Expert cuts and styling crafted to complement your face shape, personality, and lifestyle.",
    icon: Scissors,
  },
  {
    title: "Eyebrow Threading",
    description:
      "Precise, clean brow shaping using traditional threading for perfectly defined arches every time.",
    icon: Zap,
  },
  {
    title: "Manicure & Pedicure",
    description:
      "Relaxing hand and foot care with premium polish, hydration, and a touch of pampering.",
    icon: Sparkles,
  },
  {
    title: "Makeup Services",
    description:
      "Professional makeup for any look — natural, bold, or editorial — using high-quality products.",
    icon: Wand2,
  },
];

const features = [
  {
    title: "Bridal Specialists",
    description: "Expert bridal makeup & wedding preparation",
    icon: Crown,
  },
  {
    title: "Full Service Parlour",
    description: "Everything from waxing to hairstyling under one roof",
    icon: ShieldCheck,
  },
  {
    title: "Academy Training",
    description: "Professional beauty courses for aspiring artists",
    icon: Award,
  },
  {
    title: "Prime Location",
    description: "Opposite Neral Railway Station, easily accessible",
    icon: MapPin,
  },
];

const reviews = [
  {
    name: "Priya S.",
    quote:
      "My bridal makeup was absolutely flawless. The team understood exactly what I wanted and made me feel like a queen. Highly recommended for every bride!",
  },
  {
    name: "Kavya R.",
    quote:
      "I enrolled in their beauty course and it was the best decision of my life. Hands-on training, caring faculty, and real industry skills.",
  },
  {
    name: "Meera D.",
    quote:
      "Perfect location right opposite Neral station. The facial left my skin glowing for days. Very hygienic and professional setup.",
  },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">

      {/* Sticky Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-md py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#home");
            }}
            className="font-serif text-xl md:text-2xl font-bold tracking-tight text-foreground"
          >
            Ananya <span className="text-primary font-serif">Beauty</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider"
                  data-testid={`link-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 shadow-sm hover:shadow-md transition-all rounded-full"
              onClick={() => window.open(WA_LINK, "_blank")}
              data-testid="button-nav-book"
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg p-6 flex flex-col gap-4 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="text-lg font-medium hover:text-primary transition-colors py-2 border-b border-border/50"
              >
                {link.name}
              </a>
            ))}
            <Button
              className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full"
              onClick={() => window.open(WA_LINK, "_blank")}
            >
              Book Appointment
            </Button>
          </div>
        )}
      </nav>

      {/* Floating WhatsApp Button */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center animate-pulse-slow"
        aria-label="Contact us on WhatsApp"
        data-testid="button-whatsapp-float"
      >
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </a>

      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col justify-center min-h-[90vh]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/10 to-primary/5 -z-10" />
        <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -z-10 mix-blend-multiply" />
        <div className="absolute bottom-0 -left-64 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl -z-10 mix-blend-multiply" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-primary/20 text-sm font-medium mb-8 text-foreground/80 shadow-sm"
              >
                <Star className="w-4 h-4 fill-accent text-accent" />
                <span>4.8 Rating | 28+ Happy Clients</span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-[1.1] mb-6"
              >
                Where Every Bride <br />
                <span className="text-primary italic font-light">
                  Finds Her Glow
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
              >
                Complete beauty services & professional academy in Neral.
                Specialists in bridal makeup, wedding preparation, and
                transformative beauty training.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-full sm:w-auto px-8 h-14 text-base shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                  onClick={() => window.open(WA_LINK, "_blank")}
                  data-testid="button-hero-book"
                >
                  Book Appointment
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5 rounded-full w-full sm:w-auto px-8 h-14 text-base bg-transparent transition-all"
                  onClick={() => scrollTo("#academy")}
                  data-testid="button-hero-academy"
                >
                  Explore Academy
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-foreground">
                  Neral's Bridal &{" "}
                  <br />
                  <span className="text-primary italic">Beauty Destination</span>
                </h2>
                <p className="text-foreground/70 text-lg font-light leading-relaxed mb-6">
                  Ananya Beauty Parlour & Academy is where brides find their
                  glow and aspiring beauticians find their calling. Located
                  conveniently opposite Neral Railway Station, we bring
                  premium beauty services and professional training together
                  under one roof.
                </p>
                <p className="text-foreground/70 text-lg font-light leading-relaxed">
                  From elaborate bridal packages to everyday pampering, our
                  experienced team is dedicated to making every client feel
                  beautiful, confident, and cared for.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="text-center group p-4 rounded-2xl hover:bg-background transition-colors">
                  <h3 className="text-3xl font-serif font-bold text-primary group-hover:scale-110 transition-transform">
                    28+
                  </h3>
                  <p className="text-sm text-foreground/60 mt-2 font-medium uppercase tracking-wider">
                    Reviews
                  </p>
                </div>
                <div className="text-center group p-4 rounded-2xl hover:bg-background transition-colors border-x border-border/50">
                  <h3 className="text-3xl font-serif font-bold text-primary flex items-center justify-center gap-1 group-hover:scale-110 transition-transform">
                    4.8 <Star className="w-5 h-5 fill-accent text-accent" />
                  </h3>
                  <p className="text-sm text-foreground/60 mt-2 font-medium uppercase tracking-wider">
                    Rating
                  </p>
                </div>
                <div className="text-center group p-4 rounded-2xl hover:bg-background transition-colors">
                  <h3 className="text-3xl font-serif font-bold text-primary group-hover:scale-110 transition-transform">
                    8+
                  </h3>
                  <p className="text-sm text-foreground/60 mt-2 font-medium uppercase tracking-wider">
                    Services
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/salon-interior.jpg"
                alt="Ananya Beauty Parlour interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
              Our Services
            </h2>
            <p className="text-foreground/70 text-lg font-light">
              From bridal transformations to everyday beauty — we do it all.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-border/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                data-testid={`card-service-${index}`}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base font-serif font-bold mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-foreground/60 font-light leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academy Section */}
      <section
        id="academy"
        className="py-24 bg-secondary/20 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-xl relative z-10"
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-foreground">
                Ananya Beauty{" "}
                <span className="text-primary italic">Academy</span>
              </h2>
              <p className="text-foreground/70 text-lg font-light leading-relaxed mb-8">
                Turn your passion into a profession. Our academy courses
                combine practical hands-on training with deep theoretical
                knowledge — everything you need to build a thriving career in
                the beauty industry.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Certified Professional Courses",
                  "100% Hands-on Practical Training",
                  "Learn from Industry Experts",
                  "Placement Guidance & Support",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium text-foreground/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 h-14 text-base w-full sm:w-auto shadow-md"
                onClick={() => window.open(WA_ACADEMY_LINK, "_blank")}
                data-testid="button-enroll"
              >
                Enroll Now
              </Button>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 gap-6"
            >
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="bg-white/60 backdrop-blur p-6 rounded-2xl border border-white/40 shadow-sm flex flex-col items-center text-center gap-2"
                >
                  <feature.icon className="w-8 h-8 text-primary mb-2" />
                  <h4 className="font-serif font-bold text-sm leading-snug">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-foreground/60 font-light">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
              What Our Clients Say
            </h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground/70 text-lg font-medium">
              4.8 Overall Rating based on 28 Google Reviews
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-background p-8 rounded-2xl shadow-sm border border-border/40 flex flex-col justify-between"
                data-testid={`card-review-${idx}`}
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <p className="text-foreground/80 font-light leading-relaxed italic mb-8">
                    "{review.quote}"
                  </p>
                </div>
                <p className="font-serif font-bold text-lg text-primary">
                  — {review.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-background border-t border-border/50"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-foreground">
                Visit Us
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xl mb-2">
                      Address
                    </h4>
                    <p className="text-foreground/70 font-light leading-relaxed max-w-sm">
                      Shop No 8, Nirmal Arcade Commercial Complex,
                      <br />
                      Opposite Neral Railway Station, East,
                      <br />
                      Dhamote, Maharashtra 410101
                    </p>
                    <a
                      href="https://maps.google.com/?q=Neral+Railway+Station+East+Dhamote+Maharashtra+410101"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-3 text-primary font-medium hover:underline"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xl mb-2">
                      Contact
                    </h4>
                    <a
                      href="tel:8390140360"
                      className="block text-foreground/70 font-light hover:text-primary transition-colors text-lg"
                      data-testid="link-phone"
                    >
                      8390140360
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xl mb-2">
                      Hours
                    </h4>
                    <p className="text-foreground/70 font-light">
                      Monday – Sunday
                      <br />
                      10:00 AM – 8:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="h-[400px] lg:h-auto rounded-3xl overflow-hidden shadow-lg border border-border/50"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.9!2d73.272!3d18.862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNeral+Railway+Station+East%2C+Dhamote%2C+Maharashtra+410101!5e0!3m2!1sen!2sin!4v1700000000001!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ananya Beauty Parlour Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12 border-b border-background/20 pb-12">
            <div>
              <h3 className="font-serif text-3xl font-bold mb-4">
                Ananya Beauty{" "}
                <span className="italic text-secondary">Parlour & Academy</span>
              </h3>
              <p className="text-background/70 max-w-md font-light">
                Where Every Bride Finds Her Glow. Neral's trusted destination
                for bridal beauty, premium parlour services, and professional
                academy training.
              </p>
            </div>
            <div className="flex md:justify-end gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors text-background"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors text-background"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60 font-light">
            <p>
              &copy; 2026 Ananya Beauty Parlour & Academy. All rights reserved.
            </p>
            <p>Shop No 8, Nirmal Arcade, Opposite Neral Railway Station</p>
          </div>
        </div>
      </footer>

      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
