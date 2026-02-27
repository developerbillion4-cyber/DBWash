import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin, Phone, Star, Droplets, Sparkles, Car } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";
import { SectionHeading } from "@/components/SectionHeading";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40 glass-panel border-b-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground box-glow">
              <Droplets className="w-6 h-6" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-white">
              BG<span className="text-primary">.</span>Wash
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#services" className="hover:text-primary transition-colors px-3 py-2 rounded-md font-medium text-sm">Services</a>
              <a href="#gallery" className="hover:text-primary transition-colors px-3 py-2 rounded-md font-medium text-sm">Gallery</a>
              <a href="#reviews" className="hover:text-primary transition-colors px-3 py-2 rounded-md font-medium text-sm">Reviews</a>
              <a href="#contact" className="hover:text-primary transition-colors px-3 py-2 rounded-md font-medium text-sm">Contact</a>
            </div>
          </div>
          <div className="hidden md:block">
            <Button asChild className="rounded-full px-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold box-glow">
              <a href="https://wa.me/13055556789" target="_blank" rel="noreferrer">
                Book Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Unsplash car wash high-res photo */}
        <img 
          src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=2669&auto=format&fit=crop" 
          alt="Car Wash Background" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-primary mb-8"
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium tracking-wide uppercase">Miami's Premier Detailers</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-white tracking-tighter leading-tight max-w-4xl"
        >
          Fast, high quality, <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 text-glow">
            convenient.
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-2xl"
        >
          Experience the ultimate shine with BG CarWash. Professional detailing and washing services that bring your car back to showroom condition.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" asChild className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-primary-foreground box-glow hover:-translate-y-1 transition-transform">
            <a href="https://wa.me/13055556789" target="_blank" rel="noreferrer">
              Book Now <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="h-14 px-8 text-lg rounded-full border-white/20 hover:bg-white/5 hover:text-white transition-transform hover:-translate-y-1 backdrop-blur-sm">
            <a href="#services">
              View Services
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      title: "Express Wash",
      price: "$10",
      description: "Quick exterior wash and dry to get you back on the road looking fresh.",
      features: ["Exterior hand wash", "Microfiber dry", "Wheel cleaning", "Quick wax spray"],
      icon: Droplets
    },
    {
      title: "Full Wash",
      price: "$15",
      description: "Complete exterior care including tire shine and crystal clear windows.",
      features: ["Everything in Express", "Tire dressing", "Exterior window cleaning", "Bug & tar removal"],
      icon: Car,
      popular: true
    },
    {
      title: "Interior Cleaning",
      price: "$20",
      description: "Deep clean for your cabin. Vacuum, wipe down, and premium air freshener.",
      features: ["Full interior vacuum", "Dashboard wipe down", "Interior window clean", "New car scent"],
      icon: Sparkles
    },
    {
      title: "Car Polishing",
      price: "$25",
      description: "Full exterior polish and wax for an immaculate, showroom shine.",
      features: ["Machine polish", "Carnauba wax application", "Scratch reduction", "Paint sealant"],
      icon: Star
    }
  ];

  return (
    <section id="services" className="py-24 relative z-10 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Our Services" 
          subtitle="Choose the perfect wash package for your vehicle. Premium quality at competitive prices." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-card rounded-3xl p-8 border ${service.popular ? 'border-primary shadow-[0_0_30px_-10px_rgba(14,165,233,0.3)]' : 'border-white/5'} hover:border-primary/50 transition-colors group flex flex-col h-full`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <service.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-2xl font-bold font-display text-white mb-2">{service.title}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-extrabold text-primary">{service.price}</span>
                <span className="text-muted-foreground">/wash</span>
              </div>
              
              <p className="text-muted-foreground mb-8 flex-grow">{service.description}</p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button asChild className={`w-full rounded-xl h-12 ${service.popular ? 'bg-primary text-white hover:bg-primary/90' : 'bg-secondary text-white hover:bg-secondary/80'}`}>
                <a href="https://wa.me/13055556789" target="_blank" rel="noreferrer">Select Package</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const comparisons = [
    {
      before: 
"images/before1.jpg",  
      after: 
"images/after1.jpg",
      title: "Full cleaning"
    },
    {
      before: 
"images/before2.jpg",
      after: 
"images/after2.jpg",
      title: "SUV Deep Clean"
    },
    {
      before: 
"images/before3.jpg",
      after: 
"images/after3.jpg",
      title: "Sedan Refresh"
    },
    {
      before: 
"images/before4.jpg",
      after: 
"images/after4.jpg",
      title: "Luxury Polish"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-card/30 border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Real Results — Before & After" 
          subtitle="Witness the transformation. Our premium detailing brings back that new car feeling." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-white/90 px-2 border-l-2 border-primary ml-1">{item.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Before Card */}
                <div className="relative group rounded-2xl overflow-hidden aspect-video bg-card border border-white/5">
                  <img 
                    src={item.before} 
                    alt="Before Car Wash" 
                    className="w-full h-full object-cover grayscale-[0.3] brightness-90 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-destructive/90 text-white text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded backdrop-blur-sm">
                    BEFORE
                  </div>
                </div>
                {/* After Card */}
                <div className="relative group rounded-2xl overflow-hidden aspect-video bg-card border border-primary/20 box-glow-sm">
                  <img 
                    src={item.after} 
                    alt="After Car Wash" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-primary/90 text-white text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded backdrop-blur-sm">
                    AFTER
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  const reviews = [
    {
      name: "John D.",
      role: "Local Resident",
      text: "Excellent car wash! Fast and high quality. The Express Wash is perfect for my weekly maintenance. Highly recommended!",
      rating: 5
    },
    {
      name: "Sarah M.",
      role: "Business Owner",
      text: "My car looks brand new. Highly recommend the interior cleaning. They got stains out that I thought were permanent.",
      rating: 5
    },
    {
      name: "Michael R.",
      role: "Car Enthusiast",
      text: "I'm very particular about who touches my paint. The Car Polishing service here is top-tier. No swirls, just glass-like finish.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="What Our Clients Say" 
          subtitle="Don't just take our word for it. Read what Miami drivers think about our service." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-colors"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg text-slate-300 mb-8 italic">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-xl font-bold text-white">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <span className="text-sm text-muted-foreground">{review.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { mutate, isPending } = useSubmitContact();
  const form = useForm<typeof insertContactMessageSchema._type>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: { name: "", phone: "", message: "" }
  });

  const onSubmit = (data: typeof insertContactMessageSchema._type) => {
    mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <section id="contact" className="py-24 bg-card/30 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Details & Map */}
          <div>
            <SectionHeading title="Get In Touch" subtitle="We are located in the heart of Miami. Drop by or contact us directly." centered={false} />
            
            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Our Location</h4>
                  <p className="text-muted-foreground">123 Ocean Drive<br/>Miami, FL 33139, USA</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Phone / WhatsApp</h4>
                  <p className="text-muted-foreground">+1 (305) 555-6789</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden h-[300px] border border-white/10 relative">
              {/* Demo Map iframe for Miami */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.38942125866!2d-80.29949842426315!3d25.78254531070216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale contrast-125 opacity-80"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card p-8 md:p-10 rounded-3xl border border-white/5 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6 font-display">Send us a message</h3>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Full Name</label>
                <input 
                  {...form.register("name")}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="John Doe"
                />
                {form.formState.errors.name && (
                  <p className="text-destructive text-sm mt-1">{form.formState.errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Phone Number</label>
                <input 
                  {...form.register("phone")}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="+1 (305) 555-0000"
                />
                {form.formState.errors.phone && (
                  <p className="text-destructive text-sm mt-1">{form.formState.errors.phone.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Message</label>
                <textarea 
                  {...form.register("message")}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="How can we help you today?"
                ></textarea>
                {form.formState.errors.message && (
                  <p className="text-destructive text-sm mt-1">{form.formState.errors.message.message}</p>
                )}
              </div>

              <Button 
                type="submit" 
                disabled={isPending}
                className="w-full h-14 text-lg font-bold rounded-xl bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              >
                {isPending ? "Sending..." : "Send Message"}
              </Button>
              
              <p className="text-center text-sm text-muted-foreground mt-4">
                For immediate assistance, please use WhatsApp.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-white/5 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-6 opacity-80">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <Droplets className="w-5 h-5" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white">
            BG<span className="text-primary">.</span>Wash
          </span>
        </div>
        
        <div className="flex gap-6 mb-8 text-muted-foreground text-sm">
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
          <a href="#reviews" className="hover:text-primary transition-colors">Reviews</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
        
        <p className="text-muted-foreground/60 text-sm">
          © 2026 BG CarWash. All rights reserved. <br className="sm:hidden" />
          123 Ocean Drive, Miami, FL 33139, USA
        </p>
      </div>
    </footer>
  );
}
