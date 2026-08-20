import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-28 pb-24 bg-parchment">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <h1 className="font-display text-6xl md:text-7xl text-ink font-light tracking-tight mb-5">
            Contact <span className="italic text-crimson">Us</span>
          </h1>
          <p className="text-lg text-ink/40 leading-relaxed">Have questions about a route, want to partner, or simply want to share your experience? We'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-[2.5rem] shadow-xl shadow-ink/5 border border-stone/20 p-8 md:p-12">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-80 text-center animate-fade-up">
                <CheckCircle className="h-16 w-16 text-emerald-400 mb-6" />
                <h3 className="font-display text-3xl text-ink mb-3">Message Sent</h3>
                <p className="text-ink/40">We'll get back to you within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-[0.15em] text-ink/30 font-semibold mb-2">Name</label>
                    <input id="name" type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required className="w-full px-5 py-4 rounded-2xl bg-parchment border border-stone/30 text-ink text-sm focus:outline-none focus:border-crimson/30 focus:ring-2 focus:ring-crimson/5 transition-all" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-[0.15em] text-ink/30 font-semibold mb-2">Email</label>
                    <input id="email" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required className="w-full px-5 py-4 rounded-2xl bg-parchment border border-stone/30 text-ink text-sm focus:outline-none focus:border-crimson/30 focus:ring-2 focus:ring-crimson/5 transition-all" placeholder="hello@email.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-[0.15em] text-ink/30 font-semibold mb-2">Message</label>
                  <textarea id="message" rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required className="w-full px-5 py-4 rounded-2xl bg-parchment border border-stone/30 text-ink text-sm focus:outline-none focus:border-crimson/30 focus:ring-2 focus:ring-crimson/5 transition-all resize-none" placeholder="Tell us about your interest..." />
                </div>
                <button type="submit" className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-crimson to-crimson-deep text-white text-sm font-medium shadow-lg shadow-crimson/20 hover:shadow-crimson/40 hover:-translate-y-0.5 transition-all">
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-[2rem] p-8 shadow-lg shadow-ink/5 border border-stone/20">
              <Mail className="h-6 w-6 text-crimson mb-4" />
              <h3 className="font-display text-xl font-semibold text-ink mb-1">Email</h3>
              <p className="text-sm text-ink/40">heritage@india.com</p>
            </div>
            <div className="bg-white rounded-[2rem] p-8 shadow-lg shadow-ink/5 border border-stone/20">
              <Phone className="h-6 w-6 text-crimson mb-4" />
              <h3 className="font-display text-xl font-semibold text-ink mb-1">Phone</h3>
              <p className="text-sm text-ink/40">+91-9876543210</p>
            </div>
            <div className="bg-white rounded-[2rem] p-8 shadow-lg shadow-ink/5 border border-stone/20">
              <MapPin className="h-6 w-6 text-crimson mb-4" />
              <h3 className="font-display text-xl font-semibold text-ink mb-1">Office</h3>
              <p className="text-sm text-ink/40">New Delhi, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
