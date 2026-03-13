"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import api from "@/lib/api";
import { set } from "react-hook-form";

const inquiryTypes = [
  "General Inquiry",
  "Bulk Order Request",
  "Product Information",
  "Feedback",
  "Partnership / Collaboration",
  "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });
  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors:any={};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email format";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
     else if (!/^\+?\d{10,15}$/.test(form.phone)) newErrors.phone = "Invalid phone number format";
    if (!form.inquiryType) newErrors.inquiryType = "Inquiry type is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  }

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      // toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
 try {
      setLoading(true);
      const payload = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        enquiry_type: form.inquiryType,
        message: form.message,
      }

      const response = await api.post(
        "enquiry", // 🔥 replace with your API
        payload
      );

      setSubmitted(true);
      toast({ title: "Inquiry sent successfully!" });

      setForm({
        name: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: "",
      });

      setErrors({});
          } catch (error: any) {
            console.log(error)
      if (error.response?.data?.errors) {
        // Backend validation errors
        setErrors(error.response.data.errors);
      } else {
        toast({
          title: "Something went wrong",
          variant: "destructive",
        });
      }
    } finally {
      setLoading(false);
    }

  };

  return (
    <div>
      <section className="bg-gradient-hero py-16 md:py-24 px-0 md:px-15">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Get in <span className="text-gradient-honey">Touch</span>
          </h1>
          <p className="text-muted-foreground font-body text-lg">
            Have a question, bulk order request, or just want to say hello? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 px-0 md:px-15">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Contact Information</h2>

              <a href="mailto:shivkishanfoods@gmail.com" className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground text-sm">Email</p>
                  <p className="text-muted-foreground font-body text-sm group-hover:text-primary transition-colors">shivkishanfoods@gmail.com</p>
                </div>
              </a>

              <a href="tel:9828014452" className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground text-sm">Phone</p>
                  <p className="text-muted-foreground font-body text-sm group-hover:text-primary transition-colors">+91 9828014452</p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground text-sm">Address</p>
                  <p className="text-muted-foreground font-body text-sm">
                    D 16, Umapath, Ramnagar,<br />
                    Sodala, Jaipur,<br />
                    Rajasthan - 302019
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/919828014452"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md font-body font-bold hover:opacity-90 transition-opacity w-fit"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>

              {/* Google Map */}
              <div className="mt-6 rounded-xl overflow-hidden shadow-card">
                <iframe
                  title="Shivkishan Foods Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.5!2d75.78!3d26.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU1JzEyLjAiTiA3NcKwNDYnNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-accent/10 border border-accent rounded-xl p-12 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h2 className="text-2xl font-display font-bold text-foreground mb-3">Thank You!</h2>
                  <p className="text-muted-foreground font-body text-lg">
                    Thank you for contacting Shivkishan. Our team will respond within 24–48 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", inquiryType: "", message: "" }); }}
                    className="mt-6 bg-gradient-honey text-primary-foreground px-6 py-2 rounded-md font-body font-bold hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-cream-dark rounded-xl p-8 shadow-card space-y-5">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-2">Send Us a Message</h2>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-body font-semibold text-foreground mb-1">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full bg-background border border-border rounded-md px-4 py-2.5 font-body text-foreground focus:ring-2 focus:ring-ring focus:outline-none"
                        placeholder="Your full name"
                        
                        maxLength={100}
                      />
                        {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name}
                  </p>
                )}
                    </div>
                    <div>
                      <label className="block text-sm font-body font-semibold text-foreground mb-1">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full bg-background border border-border rounded-md px-4 py-2.5 font-body text-foreground focus:ring-2 focus:ring-ring focus:outline-none"
                        placeholder="your@email.com"
                        
                        maxLength={255}
                      />
                        {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email}
                  </p>
                )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-body font-semibold text-foreground mb-1">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full bg-background border border-border rounded-md px-4 py-2.5 font-body text-foreground focus:ring-2 focus:ring-ring focus:outline-none"
                        placeholder="+91 XXXXX XXXXX"
                        maxLength={15}
                      />
                        {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone}
                  </p>
                )}
                    </div>
                    <div>
                      <label className="block text-sm font-body font-semibold text-foreground mb-1">Inquiry Type</label>
                      <select
                        name="inquiryType"
                        value={form.inquiryType}
                        onChange={handleChange}
                        className="w-full bg-background border border-border rounded-md px-4 py-2.5 font-body text-foreground focus:ring-2 focus:ring-ring focus:outline-none"
                      >
                        <option value="">Select type...</option>
                        {inquiryTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                        {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.inquiryType}
                  </p>
                )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-body font-semibold text-foreground mb-1">Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-background border border-border rounded-md px-4 py-2.5 font-body text-foreground focus:ring-2 focus:ring-ring focus:outline-none resize-none"
                      placeholder="Tell us about your inquiry..."
                      
                      maxLength={1000}
                    />
                      {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message}
                  </p>
                )}
                  </div>

                  <button
                    type="submit"
                      disabled={loading}
                    className="w-full bg-gradient-honey text-primary-foreground py-3 rounded-md font-body font-bold shadow-honey hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>

            
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
