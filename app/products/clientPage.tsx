import Link from "next/link";
import { ShieldCheck, Leaf, Droplets, Heart, Sparkles, Sun } from "lucide-react";
import honeyProduct from "@/assets/honey-product.jpg";
import heroHoney from "@/assets/hero-honey.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  "100% Raw & Unprocessed",
  "No Added Sugar or Preservatives",
  "Sourced from Indian Wildflower Forests",
  "Rich in Natural Enzymes & Antioxidants",
  "Tested for Purity & Quality",
  "Traditionally Harvested",
];

const benefits = [
  { icon: Heart, title: "Boosts Immunity", desc: "Packed with antioxidants that strengthen your body's natural defenses." },
  { icon: Droplets, title: "Natural Energy Source", desc: "Provides sustained energy without the crash of processed sugars." },
  { icon: Sparkles, title: "Skin & Hair Care", desc: "Used in Ayurvedic remedies for glowing skin and healthy hair." },
  { icon: Sun, title: "Soothes Throat & Cough", desc: "A trusted home remedy for sore throat and seasonal cough." },
];

const usage = [
  "Add a spoonful to warm water with lemon every morning",
  "Use as a natural sweetener in tea, smoothies, or desserts",
  "Apply as a face mask for glowing, hydrated skin",
  "Mix with turmeric and warm milk for immunity boost",
  "Drizzle over pancakes, oatmeal, or yogurt",
];

const faqs = [
  { q: "Why does honey crystallize?", a: "Crystallization is a natural process that occurs in pure, raw honey. It does not mean the honey has gone bad. Simply place the jar in warm water to restore its liquid form." },
  { q: "How should I store honey?", a: "Store in a cool, dry place away from direct sunlight. Keep the lid tightly closed. Honey does not require refrigeration." },
  { q: "Is this honey safe for children?", a: "Our honey is safe for children above 1 year of age. It is not recommended for infants under 12 months." },
  { q: "What is the shelf life?", a: "Pure honey has an indefinite shelf life when stored properly. However, for best taste and quality, we recommend consuming within 2 years of packaging." },
];

const Products = () => (
  <div>
    <section className="bg-gradient-hero py-16 md:py-24 px-0 md:px-15">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <p className="text-accent font-body font-bold uppercase tracking-widest text-sm mb-3">🌿 Our Product</p>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
          Shivkishan <span className="text-gradient-honey">Natural & Pure Honey</span>
        </h1>
        <p className="text-muted-foreground font-body text-lg">
          Nature's golden nectar — pure, raw, and full of goodness.
        </p>
      </div>
    </section>

    {/* Product Showcase */}
    <section className="bg-background py-16 px-0 md:px-15">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
              <img src={honeyProduct.src} alt="Shivkishan Pure Honey jar" className="rounded-2xl shadow-card w-full" loading="lazy" />
              <img src={heroHoney.src} alt="Honey with honeycomb" className="rounded-2xl shadow-card w-full" loading="lazy" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Product Description</h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Shivkishan Natural & Pure Honey is sourced directly from the wildflower forests of India. Our honey is raw, unprocessed, and free from any artificial additives. Each jar is a testament to nature's perfection — golden, aromatic, and brimming with natural enzymes and nutrients.
            </p>

            <h3 className="text-xl font-display font-semibold text-foreground mb-3">Key Features</h3>
            <ul className="space-y-2 mb-8">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground font-body">
                  <ShieldCheck className="text-accent shrink-0" size={18} />
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-gradient-honey text-primary-foreground px-8 py-3 rounded-md font-body font-bold shadow-honey hover:opacity-90 transition-opacity text-center"
              >
                👉 Request Bulk Order
              </Link>
              <Link
                href="/contact"
                className="border-2 border-primary text-foreground px-8 py-3 rounded-md font-body font-bold hover:bg-primary hover:text-primary-foreground transition-colors text-center"
              >
                👉 Send Product Inquiry
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Health Benefits */}
    <section className="bg-cream-dark py-16 px-0 md:px-15">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-display font-bold text-foreground text-center mb-12">Health Benefits</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {benefits.map((item, i) => (
            <div key={i} className="bg-background rounded-xl p-6 shadow-card">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="text-accent" size={24} />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground font-body text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Usage Suggestions */}
    <section className="bg-background py-16 px-0 md:px-15">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-display font-bold text-foreground text-center mb-8">Usage Suggestions</h2>
        <div className="space-y-3">
          {usage.map((u, i) => (
            <div key={i} className="flex items-start gap-3 bg-cream-dark rounded-lg p-4">
              <Leaf className="text-accent shrink-0 mt-0.5" size={18} />
              <p className="text-foreground font-body">{u}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Storage */}
    <section className="bg-cream-dark py-16 px-0 md:px-15">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-3xl font-display font-bold text-foreground mb-6">Storage Instructions</h2>
        <div className="bg-background rounded-xl p-8 shadow-card">
          <p className="text-muted-foreground font-body leading-relaxed">
            Store in a cool, dry place away from direct sunlight. Keep the container tightly sealed after use. Do not refrigerate — refrigeration can accelerate crystallization. If crystallization occurs, gently warm the jar in a bowl of warm water to restore the liquid consistency.
          </p>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="bg-background py-16 px-0 md:px-15">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-display font-bold text-foreground text-center mb-8">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-cream-dark rounded-lg border-none px-6">
              <AccordionTrigger className="font-body font-semibold text-foreground text-left hover:no-underline cursor-pointer">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-body">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </div>
);

export default Products;
