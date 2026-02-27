import { Heart, Leaf, Users, ShieldCheck } from "lucide-react";

const coreValues = [
  { icon: Heart, title: "Purity", desc: "Every product we offer is a promise of purity — unprocessed and untouched by chemicals." },
  { icon: ShieldCheck, title: "Honesty", desc: "We believe in transparent business practices and honest labeling, because trust is earned." },
  { icon: Leaf, title: "Sustainability", desc: "From ethical beekeeping to eco-friendly packaging, sustainability runs through everything we do." },
  { icon: Users, title: "Community", desc: "We support local beekeepers and farming communities, creating livelihoods rooted in tradition." },
];

const Founder = () => (
  <div>
    <section className="bg-gradient-hero py-16 md:py-24 px-0 md:px-15">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
          The Vision Behind <span className="text-gradient-honey">Shivkishan</span>
        </h1>
        <p className="text-muted-foreground font-body text-lg">
          Meet the founder who turned a passion for purity into a mission.
        </p>
      </div>
    </section>

    <section className="bg-background py-16 px-0 md:px-15">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-cream-dark rounded-2xl p-8 md:p-12 shadow-card">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gradient-honey rounded-full flex items-center justify-center mx-auto mb-4 text-4xl shadow-honey">
              🙏
            </div>
            <h2 className="text-3xl font-display font-bold text-foreground">Kishan Kanwar</h2>
            <p className="text-accent font-body font-semibold">Founder, Shivkishan Foods & Agro Enterprises</p>
          </div>

          <blockquote className="border-l-4 border-primary pl-6 italic text-foreground/80 font-body text-lg leading-relaxed mb-8">
            "I grew up in a family that valued the gifts of nature. My grandmother always said — the best medicine is what nature gives us. That belief became the foundation of Shivkishan. I wanted to bring that same purity and honesty to every Indian household. Every jar of our honey carries not just a product, but a promise — a promise of nature, untouched and divine."
          </blockquote>

          <p className="text-muted-foreground font-body leading-relaxed mb-4">
            Kishan Kanwar's vision was simple yet profound: to create a brand that stands for absolute purity in an age of adulteration. With deep roots in Rajasthan's rich agricultural heritage, he understood that the best products come from working in harmony with nature, not against it.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed">
            Today, Shivkishan Foods is a growing symbol of trust and quality in the Indian natural food space. Under Kishan Kanwar's leadership, the brand continues to uphold the values of honesty, sustainability, and community welfare — one jar of pure honey at a time.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-cream-dark py-16 px-0 md:px-15">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-display font-bold text-foreground text-center mb-12">Our Core Values</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {coreValues.map((item, i) => (
            <div key={i} className="bg-background rounded-xl p-6 shadow-card">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="text-accent" size={24} />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground font-body text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Founder;
