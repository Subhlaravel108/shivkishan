import { Eye, Target, Heart, Leaf } from "lucide-react";

const About = () => (
  <div>
    <section className="bg-gradient-hero py-16 md:py-24 px-0 md:px-15">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
          About <span className="text-gradient-honey">Shivkishan Foods</span>
        </h1>
        <p className="text-muted-foreground font-body text-lg">
          A legacy of purity, rooted in Indian tradition and nature's finest offerings.
        </p>
      </div>
    </section>

    <section className="bg-background py-16 px-0 md:px-15">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">Our Story</h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-6">
            Shivkishan Foods & Agro Enterprises was born from a simple yet powerful belief — that food should be pure, honest, and free from compromise. Based in Jaipur, Rajasthan, we are dedicated to bringing the finest natural honey directly from India's lush forests to your table.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed mb-6">
            Our journey began with a passion for preserving traditional food practices and making them accessible to modern consumers who care about what they eat. Every jar of Shivkishan honey carries the essence of Indian wilderness, harvested with respect for nature and processed with the utmost care.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-cream-dark py-16 px-0 md:px-15">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-display font-bold text-foreground text-center mb-4">Our Promise</h2>
        <p className="text-muted-foreground font-body text-lg text-center max-w-2xl mx-auto mb-12">
          We promise to deliver only the purest, most authentic natural honey — free from additives, preservatives, or artificial sweeteners. What you get is nature in its truest form.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-background rounded-xl p-8 shadow-card">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <Eye className="text-accent" size={24} />
            </div>
            <h3 className="text-xl font-display font-semibold text-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground font-body">
              To become India's most trusted natural food brand, known for uncompromising quality and deep respect for nature. We envision a world where every household has access to pure, unadulterated food.
            </p>
          </div>
          <div className="bg-background rounded-xl p-8 shadow-card">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Target className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-display font-semibold text-foreground mb-3">Our Mission</h3>
            <p className="text-muted-foreground font-body">
              To source, process, and deliver natural food products with transparency and integrity. We work directly with beekeepers and farmers to ensure ethical sourcing and fair trade practices.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-background py-16 px-0 md:px-15">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl font-display font-bold text-foreground mb-8">Brand Philosophy</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Heart, title: "Purity", desc: "No compromise on quality" },
            { icon: Leaf, title: "Tradition", desc: "Rooted in Indian heritage" },
            { icon: Eye, title: "Transparency", desc: "Honest from farm to table" },
            { icon: Target, title: "Sustainability", desc: "Respecting nature always" },
          ].map((item, i) => (
            <div key={i} className="p-6">
              <div className="w-14 h-14 bg-gradient-honey rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-muted-foreground font-body text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
