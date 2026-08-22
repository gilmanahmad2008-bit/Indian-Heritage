import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const routes = [
  { id: 'delhi', title: 'Delhi Route', subtitle: 'Capital of Empires', image: '/images/delhi-redfort.jpg', duration: '2 Days', monuments: 12, desc: 'Red Fort (1638), Qutub Minar (1193), Humayun Tomb (1570), Lotus Temple (1986)', tag: 'Capital', highlights: ['Red Fort', 'Qutub Minar', 'Humayun Tomb', 'Lotus Temple', 'India Gate', 'Lodi Gardens'] },
  { id: 'agra', title: 'Agra Route', subtitle: 'Mughal Jewel', image: '/images/taj-mahal.jpg', duration: '1.5 Days', monuments: 8, desc: 'Taj Mahal (1632), Agra Fort (1565), Fatehpur Sikri (1571), Mehtab Bagh', tag: 'Mughal', highlights: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri', 'Mehtab Bagh', 'Itmad-ud-Daulah'] },
  { id: 'jaipur', title: 'Jaipur Route', subtitle: 'Pink City', image: '/images/jaipur-hawa.jpg', duration: '2 Days', monuments: 10, desc: 'Hawa Mahal (1799), Amber Fort (1592), City Palace (1727), Jantar Mantar (1734)', tag: 'Royal', highlights: ['Hawa Mahal', 'Amber Fort', 'City Palace', 'Jantar Mantar', 'Jal Mahal'] },
  { id: 'varanasi', title: 'Varanasi Route', subtitle: 'Sacred City', image: '/images/varanasi-ghats.jpg', duration: '2 Days', monuments: 6, desc: 'Dashashwamedh Ghat, Kashi Vishwanath (1780), Sarnath (5th c. BCE), Ganga Aarti', tag: 'Spiritual', highlights: ['Ganga Ghats', 'Sarnath', 'Kashi Vishwanath', 'Dashashwamedh Ghat'] },
  { id: 'khajuraho', title: 'Khajuraho Route', subtitle: 'Temple of Art', image: '/images/khajuraho-temple.jpg', duration: '1 Day', monuments: 4, desc: 'Kandariya Mahadev (1025), Lakshmana Temple (954), Chausath Yogini (9th c.)', tag: 'Temple', highlights: ['Kandariya Mahadev', 'Lakshmana Temple', 'Chausath Yogini', 'Western Group'] },
  { id: 'udaipur', title: 'Udaipur Route', subtitle: 'City of Lakes', image: '/images/hero-heritage.jpg', duration: '2 Days', monuments: 7, desc: 'City Palace (1559), Lake Palace/Jag Niwas (1746), Saheliyon Ki Bari (1734), Jagdish Temple (1651)', tag: 'Palace', highlights: ['City Palace', 'Lake Palace', 'Saheliyon Ki Bari', 'Jagdish Temple', 'Monsoon Palace'] },
  { id: 'hampi', title: 'Hampi Route', subtitle: 'Lost Empire', image: '/images/delhi-redfort.jpg', duration: '2 Days', monuments: 9, desc: 'Vitthala Temple (1513), Virupaksha Temple (7th c.), Stone Chariot (16th c.), Queen\'s Bath', tag: 'Ruins', highlights: ['Virupaksha Temple', 'Vitthala Temple', 'Stone Chariot', 'Royal Enclosure', 'Queen\'s Bath'] },
];

function FlipCard({ route }: { route: typeof routes[0] }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="relative h-[480px] perspective-1000 group" onMouseEnter={() => setFlipped(true)} onMouseLeave={() => setFlipped(false)}>
      <Link to={`/route/${route.id}`} className="block w-full h-full relative preserve-3d transition-transform duration-700 ease-in-out" style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
        {/* Front */}
        <div className="absolute inset-0 backface-hidden rounded-[2.5rem] overflow-hidden shadow-2xl shadow-ink/5 bg-white">
          <div className="relative h-[260px] overflow-hidden">
            <img src={route.image} alt={route.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest border border-white/10">{route.tag}</span>
            <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-ink/40 backdrop-blur-md text-white text-[10px] font-medium border border-white/10">{route.duration}</span>
          </div>
          <div className="p-7">
            <h3 className="font-display text-2xl font-semibold text-ink mb-0.5 group-hover:text-crimson transition-colors">{route.title}</h3>
            <p className="text-xs uppercase tracking-[0.15em] text-crimson/60 font-bold mb-4">{route.subtitle}</p>
            <p className="text-sm text-ink/40 leading-relaxed mb-4">{route.desc}</p>
            <div className="flex flex-wrap gap-2">
              {route.highlights.slice(0, 3).map(h => (
                <span key={h} className="px-2 py-0.5 rounded-md bg-parchment text-[10px] text-ink/40 border border-stone/30">{h}</span>
              ))}
            </div>
          </div>
        </div>
        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-ink/10 bg-gradient-to-br from-crimson-deep to-ink text-parchment flex flex-col">
          <div className="p-8 flex-1 flex flex-col">
            <h3 className="font-display text-3xl font-semibold mb-2">{route.title}</h3>
            <p className="text-xs text-saffron font-bold uppercase tracking-[0.15em] mb-6">{route.subtitle}</p>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                <span className="text-parchment/50">Monuments</span>
                <span className="font-display font-semibold">{route.monuments}</span>
              </div>
              <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                <span className="text-parchment/50">Duration</span>
                <span className="font-display font-semibold">{route.duration}</span>
              </div>
            </div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-saffron font-bold mb-3">All Highlights</h4>
            <ul className="space-y-1.5 mb-auto">
              {route.highlights.map(h => (
                <li key={h} className="text-sm text-parchment/70 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-saffron" /> {h}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 bg-white/[0.03] border-t border-white/10">
            <Link to={`/route/${route.id}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-saffron to-gold text-ink text-sm font-bold shadow-lg shadow-amber-glow/20 hover:-translate-y-0.5 transition-all">
              Explore Route <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function Routes() {
  return (
    <div className="min-h-screen pt-28 pb-28 bg-parchment">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-crimson/60 font-bold mb-3 block">Curated Journeys</span>
          <h1 className="font-display text-6xl md:text-7xl text-ink font-light tracking-tight">
            Heritage <span className="italic text-crimson">Routes</span>
          </h1>
          <p className="text-ink/35 text-lg mt-5 leading-relaxed">Seven curated circuits through India's most significant monuments — each card reveals real data, verified timelines, and interactive features.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routes.map(route => (
            <FlipCard key={route.id} route={route} />
          ))}
        </div>
      </div>
    </div>
  );
}
