import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mountain, Sparkles } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/routes', label: 'Routes' },
  { to: '/route/delhi', label: 'Explore' },
  { to: '/map', label: 'Map' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/timeline', label: 'Timeline' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0A0806]/85 backdrop-blur-2xl shadow-[0_2px_40px_rgba(197,160,40,0.06)] border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex h-[72px] items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-crimson to-crimson-deep shadow-xl shadow-crimson/20 group-hover:shadow-crimson/40 transition-shadow ring-1 ring-white/[0.05]">
                <Mountain className="h-6 w-6 text-saffron" strokeWidth={1.5} />
                <Sparkles className="absolute -top-0.5 -right-0.5 h-3 w-3 text-saffron animate-float" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-semibold text-parchment leading-tight tracking-tight">
                  Heritage <span className="italic font-light text-saffron">Guide</span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-parchment/20 font-medium">India</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-0.5">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative px-4 py-2.5 text-[13px] font-medium rounded-full transition-all duration-300 ${
                    pathname === l.to || (pathname.startsWith(l.to + '/') && l.to !== '/')
                      ? 'text-saffron bg-saffron/10'
                      : 'text-parchment/40 hover:text-parchment hover:bg-white/[0.04]'
                  }`}
                >
                  {l.label}
                  {pathname === l.to && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-saffron" />
                  )}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] text-parchment hover:bg-white/10 transition"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden fixed top-[72px] left-0 right-0 z-40 bg-[#0A0806]/95 backdrop-blur-2xl border-b border-white/[0.06] shadow-2xl">
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`px-5 py-3 rounded-xl text-sm font-medium transition ${
                  pathname === l.to ? 'text-saffron bg-saffron/10' : 'text-parchment/50 hover:text-parchment hover:bg-white/[0.04]'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
