import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 mb-3">
      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
      <span className="text-sky-400 text-xs font-medium tracking-widest uppercase">
        {children}
      </span>
    </div>
  );
}

// ─── Contact details ───────────────────────────────────────────────────────
// NOTE: The clarification document only specifies that the Contact page needs
// an address, phone, email, and business hours — it does not contain real
// values for any of these. The fields below are placeholders for a U.S.
// office and should be replaced with Kriyasoft's actual details.
const contactInfo = {
  address: {
    line1: '123 Business Avenue, Suite 400',
    line2: 'New York, NY 10001, United States',
    mapQuery: 'New York, NY 10001, United States',
  },
  phone: '+1 (555) 123-4567',
  email: 'hello@kriyasoft.com',
  hours: [
    { days: 'Monday – Friday', time: '9:00 AM – 6:00 PM (EST)' },
    { days: 'Saturday – Sunday', time: 'Closed' },
  ],
};

function ContactHero() {
  return (
    <section className="hero-bg grid-bg min-h-[40vh] flex items-center relative overflow-hidden pt-32 pb-14">
      <div className="max-w-7xl mx-auto px-6 w-full text-center">
        <SectionTag>Contact Us</SectionTag>
        <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-800 text-white leading-[1.05] mb-4">
          Let's start a
          <br />
          <span className="gradient-text">conversation.</span>
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto">
          Reach out to our U.S. team — we're happy to talk through your project.
        </p>
      </div>
    </section>
  );
}

function ContactFormAndInfo() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-[#080c18] border-t border-white/10 py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.015] p-6 md:p-8">
            <h2 className="font-display font-700 text-2xl text-white mb-6">
              Send us a message
            </h2>

            {submitted ? (
              <div className="rounded-xl border border-teal-400/25 bg-teal-400/10 px-5 py-4 text-teal-300 text-sm">
                Thanks — your message has been sent. Our team will get back to you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-sky-500/40 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-sky-500/40 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-sky-500/40 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-teal-400 text-white font-medium px-7 py-3.5 rounded-full hover:opacity-90 transition-all duration-200 shadow-lg shadow-sky-500/20"
                >
                  Send Message
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.015] p-6 flex items-start gap-4">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-sky-500/10 border border-sky-500/15 flex items-center justify-center">
                <MapPin size={20} className="text-sky-400" />
              </div>
              <div>
                <h3 className="text-white font-600 mb-1">Office (U.S.)</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {contactInfo.address.line1}
                  <br />
                  {contactInfo.address.line2}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.015] p-6 flex items-start gap-4">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-sky-500/10 border border-sky-500/15 flex items-center justify-center">
                <Phone size={20} className="text-sky-400" />
              </div>
              <div>
                <h3 className="text-white font-600 mb-1">Phone</h3>
                <p className="text-slate-400 text-sm">{contactInfo.phone}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.015] p-6 flex items-start gap-4">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-sky-500/10 border border-sky-500/15 flex items-center justify-center">
                <Mail size={20} className="text-sky-400" />
              </div>
              <div>
                <h3 className="text-white font-600 mb-1">Email</h3>
                <p className="text-slate-400 text-sm">{contactInfo.email}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.015] p-6 flex items-start gap-4">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-sky-500/10 border border-sky-500/15 flex items-center justify-center">
                <Clock size={20} className="text-sky-400" />
              </div>
              <div>
                <h3 className="text-white font-600 mb-1">Business Hours</h3>
                {contactInfo.hours.map((h) => (
                  <p key={h.days} className="text-slate-400 text-sm">
                    {h.days}: {h.time}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactMap() {
  const query = encodeURIComponent(contactInfo.address.mapQuery);
  return (
    <section className="bg-[#0a0f1e] pb-16">
      {/* 95% width + centered on mobile, standard max-w-6xl container from sm and up */}
      <div className="w-[95%] mx-auto sm:w-full sm:max-w-6xl sm:px-6">
        <div className="rounded-2xl overflow-hidden border border-white/10 h-72 sm:h-80">
          <iframe
            title="Kriyasoft office location"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${query}&output=embed`}
          />
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] overflow-x-hidden">
      <Navbar />
      <ContactHero />
      <ContactFormAndInfo />
      <ContactMap />
      <Footer />
    </div>
  );
}