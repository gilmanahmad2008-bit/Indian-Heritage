import { Mountain, Heart, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'Heritage Routes', to: '/routes' },
  { label: 'Interactive Map', to: '/map' },
  { label: 'Visual Gallery', to: '/gallery' },
  { label: 'Historical Timeline', to: '/timeline' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-ink via-[#140B08] to-[#0A0503] text-parchment/60">
      <div className="absolute inset-0 hero-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-crimson/10 rounded-full blur-[150px] -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-saffron/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 md:gap-8 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-crimson to-crimson-deep shadow-xl shadow-crimson/25 group-hover:shadow-crimson/40 transition-shadow">
                <Mountain className="h-6 w-6 text-saffron" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-semibold text-parchment tracking-tight leading-none">
                  Heritage <span className="italic font-light text-saffron">Guide</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-parchment/20 font-medium mt-0.5">India</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-parchment/35 max-w-md mb-6">
              A digital museum, archive, and storytelling platform dedicated to preserving and sharing India's monumental legacy — from the Indus Valley to Independence.
            </p>
            <div className="flex gap-3">
              {['Delhi', 'Agra', 'Jaipur', 'Varanasi', 'Khajuraho', 'Udaipur', 'Hampi'].map(place => (
                <span key={place} className="text-[10px] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-parchment/25">{place}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-parchment mb-6 tracking-tight">Explore Routes</h4>
            <ul className="space-y-3">
              {footerLinks.slice(0, 4).map((f) => (
                <li key={f.to}>
                  <Link to={f.to} className="group flex items-center gap-1.5 text-sm text-parchment/35 hover:text-saffron transition-colors">
                    {f.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-parchment mb-6 tracking-tight">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.slice(4).map((f) => (
                <li key={f.to}>
                  <Link to={f.to} className="group flex items-center gap-1.5 text-sm text-parchment/35 hover:text-saffron transition-colors">
                    {f.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-parchment/15">
          <p>© 2026 Indian Heritage Guide — Preserving India's Legacy</p>
          <p className="flex items-center gap-2">Made with <Heart className="h-3 w-3 text-crimson" fill="currentColor" /> for Indian culture & heritage</p>
        </div>
      </div>
    </footer>
  );
}
