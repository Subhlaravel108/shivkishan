// import { Link } from "react-router-dom";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is your honey 100% pure?",
    a: "Yes! Shivkishan Natural & Pure Honey is 100% raw and unprocessed. It is sourced directly from Indian wildflower forests and undergoes no chemical treatment or adulteration. We are committed to delivering nature's purest form of honey.",
  },
  {
    q: "Does your honey contain added sugar?",
    a: "Absolutely not. Our honey contains zero added sugars, preservatives, or artificial sweeteners. What you get in every jar is pure, natural honey — just as the bees made it.",
  },
  {
    q: "Why does honey crystallize?",
    a: "Crystallization is a natural process in pure honey and is actually a sign of its authenticity. It occurs due to the natural glucose content. To restore it to liquid form, simply place the jar in warm (not boiling) water for a few minutes.",
  },
  {
    q: "What is the delivery timeline for orders?",
    a: "Once your inquiry is confirmed and order is placed, delivery typically takes 5–7 business days within India. Bulk orders may take slightly longer depending on the quantity and location. Our team will provide an estimated timeline at the time of order confirmation.",
  },
  {
    q: "How can I contact Shivkishan Foods?",
    a: "You can reach us via email at shivkishanfoods@gmail.com, call us at +91 9828014452, or fill out the contact form on our website. We typically respond within 24–48 hours.",
  },
  {
    q: "Do you offer bulk pricing for businesses?",
    a: "Yes, we offer competitive bulk pricing for retailers, restaurants, and corporate buyers. Please send us an inquiry through our contact page with your requirements, and our team will get back to you with a customized quote.",
  },
  {
    q: "Is your honey safe for children?",
    a: "Our honey is safe for children above 1 year of age. As per medical guidelines, honey should not be given to infants under 12 months.",
  },
  {
    q: "How should I store honey?",
    a: "Store honey in a cool, dry place away from direct sunlight. Keep the lid tightly sealed. Refrigeration is not necessary and may cause faster crystallization.",
  },
];

const FAQ = () => (
  <div>
    <section className="bg-gradient-hero py-16 md:py-24 px-0 md:px-15">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
          Frequently Asked <span className="text-gradient-honey">Questions</span>
        </h1>
        <p className="text-muted-foreground font-body text-lg">
          Everything you need to know about Shivkishan Natural & Pure Honey.
        </p>
      </div>
    </section>

    <section className="bg-background py-16 px-0 md:px-15">
      <div className="container mx-auto px-4 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-cream-dark rounded-lg border-none px-6">
              <AccordionTrigger className="font-body font-semibold text-foreground text-left hover:no-underline cursor-pointer">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-body leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground font-body mb-4">Still have questions?</p>
          <Link
            href="/contact"
            className="bg-gradient-honey text-primary-foreground px-8 py-3 rounded-md font-body font-bold shadow-honey hover:opacity-90 transition-opacity inline-block"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default FAQ;
