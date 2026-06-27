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
  Brush,
  Flower2,
  CheckCircle2,
  Clock,
  Instagram,
  Facebook,
  Award,
  Users,
  ShieldCheck,
  Wallet
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Academy", href: "#academy" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Hair Styling & Cuts",
    description: "Expert cuts and styling tailored to your unique face shape and lifestyle.",
    icon: Scissors,
  },
  {
    title: "Brididal Makeup",
    description: "Flawless, long-lasting makeup for your most special day.",
    icon: Sparkles,
  },
  {
    title: "Skin Care & Facials",
    description: "Rejuvenating treatments for glowing, healthy skin.",
    icon: Flower2,
  },
  {
    title: "Manicure & Pedicure",
    description: "Relaxing hand and foot care with premium polish.",
    icon: Droplets,
  },
  {
    title: "Hair Coloring & Treatments",
    description: "Vibrant colors, balayage, and deep conditioning therapies.",
    icon: Brush,
  },
  {
    title: "Waxing & Threading",
    description: "Smooth, precise hair removal with gentle techniques.",
    icon: Heart,
  },
];

const features = [
  { title: "Experienced Staff", icon: Users },
  { title: "Hygienic Environment", icon: ShieldCheck },
  { title: "Premium Products", icon: Award },
  { title: "Affordable Pricing", icon: Wallet },
];

const reviews = [
  {
    name: "Sneha P.",
    quote: "Absolutely wonderful experience. The bridal makeup was perfect and lasted all day. The staff is so warm and professional.",
  },
  {
    name: "Pooja D.",
    quote: "Joined their academy course and it completely changed my career. Hands-on training and excellent guidance.",
  },
  {
    name: "Anjali M.",
    quote: "Best salon in Neral! Very clean, relaxing ambiance, and the facial gave my skin an amazing glow.",
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      
      {/* Sticky Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
            className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground"
          >
            Rajani <span className="text-primary font-serif">Beauty</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider"
                  data-testid={`link-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 shadow-sm hover:shadow-md transition-all rounded-full"
              onClick={() => window.open("https://wa.me/918805558994", "_blank")}
              data-testid="button-nav-book"
            >
              Book Now
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
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="text-lg font-medium hover:text-primary transition-colors py-2 border-b border-border/50"
              >
                {link.name}
              </a>
            ))}
            <Button 
              className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full"
              onClick={() => window.open("https://wa.me/918805558994", "_blank")}
            >
              Book Appointment
            </Button>
          </div>
        )}
      </nav>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918805558994"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center animate-pulse-slow"
        aria-label="Contact us on WhatsApp"
        data-testid="button-whatsapp-float"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </a>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col justify-center min-h-[90vh]">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/10 to-primary/5 -z-10" />
        {/* Decorative blobs */}
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
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-primary/20 text-sm font-medium mb-8 text-foreground/80 shadow-sm">
                <Star className="w-4 h-4 fill-accent text-accent" />
                <span>4.9/5 based on 95+ Google Reviews</span>
              </motion.div>
              
              <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-[1.1] mb-6">
                Where Beauty <br />
                <span className="text-primary italic font-light">Meets Expertise</span>
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Premium salon services & professional beauty academy in Neral. Experience unhurried luxury with real neighborhood warmth.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white rounded-full w-full sm:w-auto px-8 h-14 text-base shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                  onClick={() => window.open("https://wa.me/918805558994", "_blank")}
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
                  Neral's Trusted <br/><span className="text-primary italic">Beauty Destination</span>
                </h2>
                <p className="text-foreground/70 text-lg font-light leading-relaxed mb-6">
                  Rajani Beauty Salon & Academy is part indulgent salon, part professional training ground. We believe in enhancing your natural beauty in a calming, luxurious space while also empowering the next generation of beauty professionals.
                </p>
                <p className="text-foreground/70 text-lg font-light leading-relaxed">
                  Whether you're preparing for your wedding day, seeking a rejuvenating spa treatment, or looking to build a rewarding career, we bring expertise and heart to everything we do.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="text-center group p-4 rounded-2xl hover:bg-background transition-colors">
                  <h3 className="text-3xl font-serif font-bold text-primary group-hover:scale-110 transition-transform">95+</h3>
                  <p className="text-sm text-foreground/60 mt-2 font-medium uppercase tracking-wider">Reviews</p>
                </div>
                <div className="text-center group p-4 rounded-2xl hover:bg-background transition-colors border-x border-border/50">
                  <h3 className="text-3xl font-serif font-bold text-primary flex items-center justify-center gap-1 group-hover:scale-110 transition-transform">
                    4.9 <Star className="w-5 h-5 fill-accent text-accent" />
                  </h3>
                  <p className="text-sm text-foreground/60 mt-2 font-medium uppercase tracking-wider">Rating</p>
                </div>
                <div className="text-center group p-4 rounded-2xl hover:bg-background transition-colors">
                  <h3 className="text-3xl font-serif font-bold text-primary group-hover:scale-110 transition-transform">10+</h3>
                  <p className="text-sm text-foreground/60 mt-2 font-medium uppercase tracking-wider">Experts</p>
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
                alt="Beautiful salon interior with amber lighting" 
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
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">Our Services</h2>
            <p className="text-foreground/70 text-lg font-light">Indulgent treatments tailored to bring out your best.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">{service.title}</h3>
                <p className="text-foreground/70 font-light leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academy Section */}
      <section id="academy" className="py-24 bg-secondary/20 relative overflow-hidden">
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
                Rajani Beauty <span className="text-primary italic">Academy</span>
              </h2>
              <p className="text-foreground/70 text-lg font-light leading-relaxed mb-8">
                Turn your passion into a profession. Our comprehensive academy courses are designed to provide you with the hands-on skills, theoretical knowledge, and confidence to succeed in the beauty industry.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Certified Professional Courses",
                  "100% Hands-on Practical Training",
                  "Learn from Industry Experts",
                  "Placement Guidance & Support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>

              <Button 
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 h-14 text-base w-full sm:w-auto shadow-md"
                onClick={() => window.open("https://wa.me/918805558994?text=Hi,%20I'm%20interested%20in%20the%20Academy%20courses", "_blank")}
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
                  className="bg-white/60 backdrop-blur p-6 rounded-2xl border border-white/40 shadow-sm flex flex-col items-center text-center"
                >
                  <feature.icon className="w-8 h-8 text-primary mb-4" />
                  <h4 className="font-serif font-bold">{feature.title}</h4>
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
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">What Our Clients Say</h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground/70 text-lg font-medium">4.9 Overall Rating based on 95 Google Reviews</p>
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
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground/80 font-light leading-relaxed italic mb-8">"{review.quote}"</p>
                </div>
                <p className="font-serif font-bold text-lg text-primary">— {review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background border-t border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-foreground">Visit Us</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xl mb-2">Address</h4>
                    <p className="text-foreground/70 font-light leading-relaxed max-w-sm">
                      Shop no 5, Sayli Nirman Bldg, Railway Station, Near Neral, Nirman Nagari,<br/>
                      Neral, Maharashtra 410101
                    </p>
                    <a 
                      href="https://maps.google.com/?q=Neral+Railway+Station,Neral,Maharashtra" 
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
                    <h4 className="font-serif font-bold text-xl mb-2">Contact</h4>
                    <a href="tel:08805558994" className="block text-foreground/70 font-light hover:text-primary transition-colors text-lg">
                      08805558994
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xl mb-2">Hours</h4>
                    <p className="text-foreground/70 font-light">Monday – Sunday<br/>10:00 AM – 8:00 PM</p>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.9!2d73.27!3d18.86!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8008000000001%3A0x1!2sNeral+Railway+Station%2C+Neral%2C+Maharashtra+410101!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
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
              <h3 className="font-serif text-3xl font-bold mb-4">Rajani Beauty <span className="italic text-primary">Salon & Academy</span></h3>
              <p className="text-background/70 max-w-md font-light">Where Beauty Meets Expertise. Neral's premium destination for luxury salon services and professional beauty training.</p>
            </div>
            <div className="flex md:justify-end gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors text-background">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors text-background">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60 font-light">
            <p>&copy; 2026 Rajani Beauty Salon & Academy. All rights reserved.</p>
            <p>Designed with elegance.</p>
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
