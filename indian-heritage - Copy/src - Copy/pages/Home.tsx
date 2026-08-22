import { ArrowDown, Compass, Sparkles, MapPin, ChevronRight, Landmark, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

const monuments = [
  { name: 'Taj Mahal', year: '1632', location: 'Agra', desc: 'White marble mausoleum commissioned by Shah Jahan.', img: '/images/taj-mahal.jpg' },
  { name: 'Red Fort', year: '1638', location: 'Delhi', desc: 'Fortress complex built by Emperor Shah Jahan.', img: '/images/delhi-redfort.jpg' },
  { name: 'Khajuraho Temples', year: '950 CE', location: 'Khajuraho', desc: 'Masterpieces of Chandela architecture with intricate sculptures.', img: '/images/khajuraho-temple.jpg' },
  { name: 'Hawa Mahal', year: '1799', location: 'Jaipur', desc: 'Five-story pink sandstone palace with 953 windows.', img: '/images/jaipur-hawa.jpg' },
  { name: 'Ganga Ghats', year: 'Ancient', location: 'Varanasi', desc: 'Sacred riverfront steps of the oldest living city.', img: '/images/varanasi-ghats.jpg' },
  { name: 'City Palace', year: '1559', location: 'Udaipur', desc: 'Grand palace on Lake Pichola built by the Mewar dynasty.', img: '/images/hero-heritage.jpg' },
];

export default function Home() {
  const revealMonuments = useScrollReveal(0.1);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden hero-pattern">
        <img src="/images/hero-heritage.jpg" alt="Indian heritage" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-parchment via-transparent to-ink/30" />

        {/* Decorative floating orbs */}
        <div className="absolute top-32 right-20 w-72 h-72 rounded-full bg-gradient-to-br from-saffron/20 to-transparent blur-3xl animate-float-slow pointer-events-none" />
        <div className="absolute bottom-48 left-12 w-48 h-48 rounded-full bg-gradient-to-tr from-crimson/10 to-transparent blur-2xl animate-float pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 w-full pt-28">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/15 text-parchment text-[11px] font-bold uppercase tracking-[0.2em] mb-8 shadow-lg shadow-black/10">
              <Sparkles className="h-3.5 w-3.5 text-saffron animate-pulse-soft" />
              Discover India's Legacy — 5,000 Years of Monumental Art
            </div>
            <h1 className="font-display text-6xl md:text-[5.5rem] lg:text-[6.5rem] font-light text-white leading-[0.9] tracking-tight mb-7">
              Walk Through <br />
              <span className="italic font-normal text-gradient-gold">Five Thousand Years</span>
            </h1>
            <p className="text-lg md:text-xl text-parchment/60 max-w-xl leading-relaxed mb-10 font-light">
              From the marble dreams of the Mughals to the carved temples of Khajuraho, explore India's heritage like never before — with real monument data, interactive maps, and immersive stories.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/routes" className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-crimson to-crimson-deep text-white text-sm font-semibold shadow-2xl shadow-crimson/30 hover:shadow-crimson/50 hover:-translate-y-1 transition-all duration-300">
                <Compass className="h-4 w-4" />
                Explore Routes
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/map" className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/15 text-white text-sm font-medium hover:bg-white/15 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/10">
                <MapPin className="h-4 w-4" />
                Interactive Map
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <ArrowDown className="h-6 w-6 text-white/30" />
        </div>
      </section>

      {/* Featured Routes */}
      <section className="py-28 bg-parchment relative overflow-hidden">
        <div className="absolute -top-40 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-saffron/10 to-transparent rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 -left-10 w-[400px] h-[400px] bg-gradient-to-tr from-crimson/5 to-transparent rounded-full blur-[80px]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-crimson/60 font-bold mb-3 block">Curated Journeys</span>
              <h2 className="font-display text-5xl md:text-6xl text-ink font-light tracking-tight mb-3">
                Featured <span className="italic text-crimson">Routes</span>
              </h2>
              <p className="text-ink/35 text-base max-w-md">Handpicked journeys through India's most iconic monuments and sacred landscapes.</p>
            </div>
            <Link to="/routes" className="group text-crimson font-semibold text-sm hover:underline underline-offset-8 decoration-2 decoration-crimson/30 transition-all">
              View all 7 routes &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Delhi Route', subtitle: 'Capital of Empires', image: '/images/delhi-redfort.jpg', desc: 'Red Fort (1638), Qutub Minar (1193), Humayun Tomb (1570), Lotus Temple (1986)', link: '/route/delhi', tag: 'Capital · 12 Monuments', duration: '2 Days' },
              { title: 'Agra Route', subtitle: 'The Mughal Jewel', image: '/images/taj-mahal.jpg', desc: 'Taj Mahal (1632), Agra Fort (1565), Fatehpur Sikri (1571), Mehtab Bagh', link: '/route/agra', tag: 'Mughal · 8 Monuments', duration: '1.5 Days' },
              { title: 'Jaipur Route', subtitle: 'The Pink City', image: '/images/jaipur-hawa.jpg', desc: 'Hawa Mahal (1799), Amber Fort (1592), City Palace (1727), Jantar Mantar (1734)', link: '/route/jaipur', tag: 'Royal · 10 Monuments', duration: '2 Days' },
            ].map((route, i) => (
              <Link
                key={route.title}
                to={route.link}
                className="group card-ornament relative overflow-hidden rounded-[2.5rem] shadow-xl shadow-ink/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white animate-reveal"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="relative h-72 overflow-hidden">
                  <img src={route.image} alt={route.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest border border-white/10 shadow-lg">{route.tag}</span>
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-ink/30 backdrop-blur-md text-white text-[10px] font-medium border border-white/10">{route.duration}</span>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl font-semibold text-ink mb-0.5 group-hover:text-crimson transition-colors">{route.title}</h3>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-crimson/60 font-bold mb-3">{route.subtitle}</p>
                  <p className="text-sm text-ink/40 leading-relaxed">{route.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Monuments Catalog — Real World Data */}
      <section className="py-28 bg-gradient-to-b from-parchment via-[#f5f0e6] to-parchment relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(139,30,30,0.03),transparent_70%)]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
          <div ref={revealMonuments.ref} className={`transition-all duration-700 ${revealMonuments.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[11px] uppercase tracking-[0.25em] text-crimson/60 font-bold mb-4 block">Real Monuments · Real Years</span>
              <h2 className="font-display text-5xl md:text-6xl text-ink font-light tracking-tight mb-5">
                Monument <span className="italic text-crimson">Catalog</span>
              </h2>
              <p className="text-ink/40 text-base leading-relaxed">Every site in this guide is backed by real historical records, UNESCO designations, and verified architectural data from the Archaeological Survey of India.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {monuments.map((m, i) => (
              <div
                key={m.name}
                className={`group bg-white rounded-[2rem] shadow-xl shadow-ink/5 border border-stone/20 overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all duration-500 ${i % 3 === 1 ? 'mt-8' : ''}`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-md text-white text-[10px] font-bold border border-white/10">
                    {m.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-ink mb-1">{m.name}</h3>
                  <div className="flex items-center gap-3 text-[11px] text-ink/30 uppercase tracking-wider mb-3">
                    <span className="flex items-center gap-1"><Landmark className="h-3 w-3" /> {m.location}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {m.year}</span>
                  </div>
                  <p className="text-sm text-ink/40 leading-relaxed">{m.desc}</p>
                  <Link to={`/${m.name.toLowerCase().replace(' ', '-')}`} className="inline-flex items-center gap-1 mt-4 text-crimson text-xs font-semibold hover:underline underline-offset-4">Learn more &rarr;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Experience Banner */}
      <section className="relative py-28 overflow-hidden bg-ink text-parchment">
        <img src="/images/varanasi-ghats.jpg" alt="Varanasi" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/70" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-saffron mb-6">Interactive Experience</span>
            <h2 className="font-display text-5xl md:text-6xl font-light tracking-tight mb-7 leading-[0.95]">
              Not Just Sightseeing.<br />
              <span className="italic text-gradient-gold">Immersive Discovery.</span>
            </h2>
            <p className="text-parchment/45 text-base leading-relaxed mb-9 max-w-md">
              Our interactive routes go beyond monuments. Experience 3D reconstructions, historical timelines, audio narratives, and cultural storytelling that brings each site to life with verified data from the Archaeological Survey of India.
            </p>
            <div className="flex gap-3">
              <Link to="/map" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-saffron to-gold text-ink text-sm font-bold shadow-xl shadow-amber-glow/20 hover:-translate-y-1 transition-all duration-300">Start Interactive Map</Link>
              <Link to="/timeline" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-white text-sm font-medium hover:bg-white/5 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm">View Timeline</Link>
            </div>
          </div>
          <div className="md:w-1/2 flex gap-5">
            <div className="space-y-5 flex-1">
              <div className="glass-card rounded-[2rem] p-7 shadow-2xl shadow-black/30 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-crimson to-crimson-deep flex items-center justify-center mb-5 shadow-lg shadow-crimson/20">
                  <Sparkles className="h-5 w-5 text-saffron" />
                </div>
                <h4 className="font-display text-xl text-ink font-semibold mb-2">Interactive Routes</h4>
                <p className="text-[13px] text-ink/40 leading-relaxed">Navigate heritage circuits with maps, audio guides, and verified monument data.</p>
              </div>
              <div className="glass-card rounded-[2rem] p-7 shadow-2xl shadow-black/30 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-gold to-amber-glow flex items-center justify-center mb-5 shadow-lg shadow-amber-glow/20">
                  <Compass className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-display text-xl text-ink font-semibold mb-2">Historical Timeline</h4>
                <p className="text-[13px] text-ink/40 leading-relaxed">Trace 5,000 years of Indian history from Indus Valley to Independence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-gradient-to-r from-crimson-deep to-crimson text-parchment relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30" />
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-8 relative">
          {[
            { value: '350+', label: 'Heritage Sites' },
            { value: '7', label: 'Curated Routes' },
            { value: '40+', label: 'UNESCO Sites' },
            { value: '5,000+', label: 'Years of History' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl md:text-5xl text-saffron font-light mb-2">{s.value}</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-parchment/40 font-semibold">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
