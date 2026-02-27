"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/founder", label: "Founder" },
  { href: "/products", label: "Products" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm px-0 md:px-15">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-display font-bold text-gradient-honey">🍯 Shivkishan</span>
          <span className="hidden sm:inline text-xs text-muted-foreground font-body tracking-wide uppercase">Foods & Agro</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-md text-sm font-body font-medium transition-colors ${pathname === link.href
                ? "bg-primary text-primary-foreground"
                : "text-foreground hover:bg-muted"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden lg:inline-flex bg-gradient-honey text-primary-foreground px-5 py-2 rounded-md text-sm font-body font-bold shadow-honey hover:opacity-90 transition-opacity"
        >
          Send Inquiry
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-md text-sm font-body font-medium transition-colors ${pathname === link.href
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 bg-gradient-honey text-primary-foreground px-5 py-3 rounded-md text-sm font-body font-bold text-center shadow-honey"
            >
              Send Inquiry
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground px-0 md:px-15">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-display font-bold text-honey-light mb-4">🍯 Shivkishan Foods</h3>
          <p className="text-secondary-foreground/70 font-body text-sm leading-relaxed">
            Bringing you the purest natural honey, inspired by nature and blessed by divinity. A trusted name in Indian natural food.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-honey-light mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-secondary-foreground/70 hover:text-honey-light text-sm font-body transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-honey-light mb-4">Policies</h4>
          <div className="flex flex-col gap-2">
            {[
              { href: "/privacy-policy", label: "Privacy Policy" },
              { href: "/terms", label: "Terms & Conditions" },
              { href: "/refund-policy", label: "Refund Policy" },
              { href: "/shipping-policy", label: "Shipping Policy" },
              { href: "/disclaimer", label: "Disclaimer" },
              { href: "/cancellation-policy", label: "Cancellation Policy" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="text-secondary-foreground/70 hover:text-honey-light text-sm font-body transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-honey-light mb-4">Contact Us</h4>
          <div className="flex flex-col gap-3 text-sm font-body text-secondary-foreground/70">
            <a href="mailto:shivkishanfoods@gmail.com" className="flex items-center gap-2 hover:text-honey-light transition-colors">
              <Mail size={16} /> shivkishanfoods@gmail.com
            </a>
            <a href="tel:9828014452" className="flex items-center gap-2 hover:text-honey-light transition-colors">
              <Phone size={16} /> +91 9828014452
            </a>
            <div className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>D 16, Umapath, Ramnagar, Sodala, Jaipur, Rajasthan - 302019</span>
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="text-secondary-foreground/50 hover:text-honey-light transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-secondary-foreground/10 mt-10 pt-6 text-center text-xs text-secondary-foreground/50 font-body">
        © {new Date().getFullYear()} Shivkishan Foods & Agro Enterprises. All rights reserved.
      </div>
    </div>
  </footer>
);

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default Layout;
