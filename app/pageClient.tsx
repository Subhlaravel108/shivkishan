"use client";
import Link from "next/link";
import { Leaf, ShieldCheck, Droplets, Heart, Sparkles, Award } from "lucide-react";
import heroImage from "@/assets/hero-honey.jpg";
import honeyProduct from "@/assets/honey-product.jpg";

const whyChooseUs = [
  { icon: Leaf, title: "100% Natural", desc: "Sourced directly from nature, free from artificial additives" },
  { icon: ShieldCheck, title: "No Preservatives", desc: "Pure and unprocessed, just as nature intended" },
  { icon: Heart, title: "Ethical Sourcing", desc: "Sustainable beekeeping practices from Indian forests" },
  { icon: Sparkles, title: "Hygienic Processing", desc: "State-of-the-art facilities ensuring the highest quality" },
];

const healthBenefits = [
  { icon: Heart, title: "Boosts Immunity", desc: "Rich in antioxidants and natural enzymes" },
  { icon: Droplets, title: "Natural Energy", desc: "A healthy source of natural sugars and carbohydrates" },
  { icon: Award, title: "Aids Digestion", desc: "Promotes healthy gut flora and digestion" },
  { icon: Leaf, title: "Skin & Wellness", desc: "Used in traditional Ayurvedic remedies for centuries" },
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero px-0 md:px-15">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <p className="text-accent font-body font-bold uppercase tracking-widest text-sm mb-3">🌿 Pure & Natural</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-4">
              Inspired by Nature,<br />
              <span className="text-gradient-honey">Blessed by Divinity</span>
            </h1>
            <p className="text-lg text-muted-foreground font-body max-w-lg mx-auto lg:mx-0 mb-8">
              Discover the golden goodness of <strong>Shivkishan Natural & Pure Honey</strong> — ethically sourced from Indian forests, crafted with love and tradition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="bg-gradient-honey text-primary-foreground px-8 py-3 rounded-md font-body font-bold shadow-honey hover:opacity-90 transition-opacity text-center"
              >
                Send Inquiry
              </Link>
              <Link
                href="/contact"
                className="border-2 border-primary text-foreground px-8 py-3 rounded-md font-body font-bold hover:bg-primary hover:text-primary-foreground transition-colors text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex-1 animate-scale-in">
            <img
              src={heroImage.src}
              alt="Pure natural honey with honeycomb and wildflowers"
              className="rounded-2xl shadow-honey w-full max-w-lg mx-auto"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* About Short */}
      <section className="bg-background py-16 px-0 md:px-15">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            The Story of <span className="text-gradient-honey">Shivkishan</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
            At Shivkishan Foods & Agro Enterprises, we believe in the power of purity. Rooted in Indian tradition and driven by a vision of honest food, we bring you honey that is unprocessed, unadulterated, and full of nature's goodness.
          </p>
          <Link href="/about" className="text-accent font-body font-bold hover:underline">
            Read Our Full Story →
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-cream-dark py-16 px-0 md:px-15">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-12">
            Why Choose <span className="text-gradient-honey">Shivkishan?</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => (
              <div
                key={i}
                className="bg-background rounded-xl p-6 text-center shadow-card hover:shadow-honey transition-shadow"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-honey rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-primary-foreground" size={28} />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground font-body text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="bg-background py-16 px-0 md:px-15">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <img
                src={honeyProduct.src}
                alt="Shivkishan Natural Pure Honey"
                className="rounded-2xl shadow-card w-full max-w-md mx-auto"
                loading="lazy"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
                Health Benefits of <span className="text-gradient-honey">Pure Honey</span>
              </h2>
              <div className="grid gap-6">
                {healthBenefits.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="text-accent" size={20} />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground font-body text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-earth py-16 px-0 md:px-15">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-foreground mb-4">
            Ready to Experience Pure Honey?
          </h2>
          <p className="text-secondary-foreground/70 font-body text-lg mb-8 max-w-xl mx-auto">
            Whether you're looking for bulk orders or have questions about our products, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-gradient-honey text-primary-foreground px-8 py-3 rounded-md font-body font-bold shadow-honey hover:opacity-90 transition-opacity"
            >
              View Products
            </Link>
            <Link
              href="/contact"
              className="border-2 border-honey-light text-secondary-foreground px-8 py-3 rounded-md font-body font-bold hover:bg-honey-light hover:text-secondary transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
