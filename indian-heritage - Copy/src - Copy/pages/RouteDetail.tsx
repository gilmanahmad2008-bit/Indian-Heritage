import { useParams } from 'react-router-dom';
import { ArrowLeft, Clock, Landmark, MapPin, Sparkles, BookOpen, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const routeData: Record<string, { subtitle: string; image: string; duration: string; monuments: number; desc: string; highlights: string[]; longDesc: string; features: string[]; timeline: { year: string; event: string }[]; facts: string[]; unesco: string[]; style: string; founded: string; }> = {
  delhi: {
    subtitle: 'The Capital of Empires',
    image: '/images/delhi-redfort.jpg',
    duration: '2 Days',
    monuments: 12,
    desc: 'Walk through the layers of history at the Red Fort (1638), Qutub Minar (1193), Humayun’s Tomb (1570), and the serene Lotus Temple (1986).',
    highlights: ['Red Fort (1638)', 'Qutub Minar (1193)', 'Humayun Tomb (1570)', 'Lotus Temple (1986)', 'India Gate (1931)', 'Lodi Gardens', 'Jama Masjid (1656)'],
    longDesc: `Delhi is a palimpsest — a city written, erased, and rewritten over a thousand years. The Red Fort (Lal Qila), built by Shah Jahan in 1638, is not just a fort but a statement of imperial vision with its marble palaces, charbagh gardens, and the iconic Lahore Gate facing the old city. The Qutub Minar, a 73-meter victory tower begun by Qutb-ud-din Aibak in 1193, remains one of the finest examples of early Indo-Islamic architecture. Humayun's Tomb (1570), commissioned by his widow Haji Begum, was the first garden-tomb in India — a precursor to the Taj Mahal. And modern Delhi adds its own monuments: the Lotus Temple (1986), a Baháʼí House of Worship made from white marble and open to all faiths, and India Gate (1931), a triumphal arch honoring soldiers of the British Indian Army.`,
    features: ['Interactive 3D Reconstruction', 'Audio Narratives (Hindi & English)', 'Verified ASI Data', 'Historical Timeline'],
    timeline: [
      { year: '1193', event: 'Qutub Minar construction begins' },
      { year: '1570', event: 'Humayun Tomb completed' },
      { year: '1638', event: 'Red Fort inaugurated' },
      { year: '1656', event: 'Jama Masjid completed' },
      { year: '1931', event: 'India Gate dedicated' },
      { year: '1986', event: 'Lotus Temple opens' },
    ],
    facts: ['The Red Fort was the main residence of Mughal emperors until 1857.', 'Qutub Minar is the tallest brick minaret in the world at 73 meters.', 'Humayun Tomb is a UNESCO World Heritage Site and a direct architectural ancestor of the Taj Mahal.'],
    unesco: ['Humayun Tomb', 'Qutub Minar Complex', 'Red Fort Complex'],
    style: 'Indo-Islamic / Modern',
    founded: '1638 (Mughal era)',
  },
  agra: {
    subtitle: 'The Mughal Jewel',
    image: '/images/taj-mahal.jpg',
    duration: '1.5 Days',
    monuments: 8,
    desc: 'The Taj Mahal (1632), Agra Fort (1565), Fatehpur Sikri (1571), Mehtab Bagh, and Itmad-ud-Daulah Tomb.',
    highlights: ['Taj Mahal (1632)', 'Agra Fort (1565)', 'Fatehpur Sikri (1571)', 'Mehtab Bagh', 'Itmad-ud-Daulah (1628)'],
    longDesc: `Agra was the capital of the Mughal Empire at its zenith. The Taj Mahal, commissioned by Shah Jahan in 1632 as a mausoleum for his beloved wife Mumtaz Mahal, took 22 years and over 20,000 artisans to complete. Its white Makrana marble changes color with the light — pink at dawn, pearl white at noon, golden at sunset. The Agra Fort (1565) is a vast red sandstone complex that housed emperors, and Fatehpur Sikri (1571) — Akbar's abandoned capital — is a city frozen in the 16th century, with the 54-meter Buland Darwaza, the tallest gateway in the world, and the marble tomb of Salim Chishti still drawing pilgrims.`,
    features: ['Sunrise View Points', 'Architectural Details', 'Mughal Art Gallery', 'Verified ASI Data'],
    timeline: [
      { year: '1565', event: 'Agra Fort construction begins' },
      { year: '1571', event: 'Fatehpur Sikri founded' },
      { year: '1628', event: 'Itmad-ud-Daulah completed' },
      { year: '1632', event: 'Taj Mahal commissioned' },
      { year: '1653', event: 'Taj Mahal completed' },
    ],
    facts: ['The Taj Mahal contains 28 different types of semi-precious stones inlaid in its marble.', 'Fatehpur Sikri was abandoned just 14 years after its founding due to water scarcity.', 'Agra Fort was a UNESCO World Heritage Site in 1983.'],
    unesco: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri'],
    style: 'Mughal Architecture',
    founded: '1565 (Agra Fort)',
  },
  jaipur: {
    subtitle: 'The Pink City',
    image: '/images/jaipur-hawa.jpg',
    duration: '2 Days',
    monuments: 10,
    desc: 'Jaipur (1727), founded by Maharaja Sawai Jai Singh II, is a planned city according to Vastu Shastra.',
    highlights: ['City Palace (1727)', 'Hawa Mahal (1799)', 'Amber Fort (1592)', 'Jantar Mantar (1734)', 'Jal Mahal (1746)'],
    longDesc: `Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur was one of India's first planned cities, laid out on a grid according to Vastu Shastra. The Hawa Mahal (1799) — the Palace of Winds — is a five-story pink sandstone facade with 953 windows, built so royal women could observe street life without being seen. The Amber Fort (1592), perched on a hill above Maota Lake, is a fusion of Rajput and Mughal styles with mirror work, frescoes, and the famous Sheesh Mahal (Mirror Palace). The Jantar Mantar observatory (1734) is a UNESCO site with 19 astronomical instruments, including the Samrat Yantra — the world's largest stone sundial at 27 meters.`,
    features: ['Palace Walks', 'Observatory Tour', 'Craft Markets', 'Verified ASI Data'],
    timeline: [
      { year: '1592', event: 'Amber Fort established' },
      { year: '1727', event: 'Jaipur city founded' },
      { year: '1734', event: 'Jantar Mantar completed' },
      { year: '1746', event: 'Jal Mahal built' },
      { year: '1799', event: 'Hawa Mahal constructed' },
    ],
    facts: ['Jaipur was painted pink in 1876 to welcome the Prince of Wales.', 'Jantar Mantar contains the world\'s largest stone sundial.', 'Amber Fort is a UNESCO World Heritage Site as part of the Hill Forts of Rajasthan.'],
    unesco: ['Jantar Mantar', 'Amber Fort (Hill Forts of Rajasthan)'],
    style: 'Rajput / Mughal Fusion',
    founded: '1727',
  },
  varanasi: {
    subtitle: 'The Sacred City',
    image: '/images/varanasi-ghats.jpg',
    duration: '2 Days',
    monuments: 6,
    desc: 'Varanasi (Kashi / Benares) has been continuously inhabited for over 3,000 years, making it one of the oldest living cities in the world.',
    highlights: ['Dashashwamedh Ghat', 'Kashi Vishwanath Temple (1780)', 'Sarnath (5th c. BCE)', 'Ganga Aarti', 'Bharat Mata Temple'],
    longDesc: `Varanasi — also called Kashi or Benares — has been continuously inhabited for over 3,000 years. According to Hindu belief, dying here grants moksha — liberation from rebirth. The Dashashwamedh Ghat is the spiritual heart, where thousands gather each evening for the Ganga Aarti, a ritual of fire, flowers, and song. The Kashi Vishwanath Temple is one of the 12 Jyotirlingas — shrines of Lord Shiva — rebuilt in 1780 by Maharani Ahilyabai Holkar. Just 10 km away, Sarnath (5th century BCE) is where Buddha delivered his first sermon; the Dhamek Stupa and the lion capital of Ashoka (now in the Sarnath Museum) are major attractions.`,
    features: ['Evening Aarti', 'Boat Rides', 'Buddhist Trail', 'Verified ASI Data'],
    timeline: [
      { year: '500 BCE', event: 'Buddha delivers first sermon at Sarnath' },
      { year: '1780', event: 'Kashi Vishwanath rebuilt' },
      { year: '1835', event: 'Dashashwamedh Ghat rebuilt' },
    ],
    facts: ['Varanasi is one of the seven sacred cities (Sapta Puri) of Hinduism.', 'The Ganga Aarti at Dashashwamedh Ghat attracts over 10,000 people nightly.', 'Sarnath is one of Buddhism\'s four most important pilgrimage sites.'],
    unesco: ['Sarnath (archaeological site)'],
    style: 'Hindu / Buddhist Sacred',
    founded: '3000+ years',
  },
  khajuraho: {
    subtitle: 'Temple of Art',
    image: '/images/khajuraho-temple.jpg',
    duration: '1 Day',
    monuments: 4,
    desc: 'Built between 950-1050 CE by the Chandela dynasty, Khajuraho temples are UNESCO monuments with over 870 sculptures.',
    highlights: ['Kandariya Mahadev (1025)', 'Lakshmana Temple (954)', 'Chausath Yogini (9th c.)', 'Western Group (22 temples remain)'],
    longDesc: `Built between 950 and 1050 CE by the Chandela dynasty, the Khajuraho temples are a testament to the integration of spirituality, art, and human experience. Only 22 of the original 85 temples remain, spread across three groups: Western, Eastern, and Southern. The Kandariya Mahadev (1025) is the largest at 31 meters with over 870 sculptures — from deities and musicians to warriors and intimate human moments carved with extraordinary precision. The Lakshmana Temple (954) is the best-preserved with a full platform and shikhara. Every February, the Khajuraho Dance Festival fills these temple grounds with classical Indian dance under moonlight.`,
    features: ['Temple Complex', 'Dance Festival', 'Sculpture Walks', 'Verified ASI Data'],
    timeline: [
      { year: '954', event: 'Lakshmana Temple completed' },
      { year: '1002', event: 'Kandariya Mahadev construction' },
      { year: '1050', event: 'Last Chandela temples completed' },
    ],
    facts: ['Over 870 sculptures are carved into the Kandariya Mahadev alone.', 'The temples were rediscovered by a British engineer in 1838.', 'Only 10% of the original sculptures depict erotic themes — the rest are religious and daily life scenes.'],
    unesco: ['Khajuraho Group of Monuments'],
    style: 'Chandela / Nagara',
    founded: '950-1050 CE',
  },
  udaipur: {
    subtitle: 'City of Lakes',
    image: '/images/hero-heritage.jpg',
    duration: '2 Days',
    monuments: 7,
    desc: 'Founded in 1559 by Maharana Udai Singh II, Udaipur is a city of palaces floating on Lake Pichola.',
    highlights: ['City Palace (1559)', 'Lake Palace / Jag Niwas (1746)', 'Saheliyon Ki Bari (1734)', 'Jagdish Temple (1651)', 'Monsoon Palace (1884)'],
    longDesc: `Founded in 1559 by Maharana Udai Singh II after a sage advised him to build a new capital in a valley, Udaipur is a city of palaces floating on Lake Pichola. The City Palace — the largest palace complex in Rajasthan — was built over 400 years by successive rulers of the Mewar dynasty, combining Rajput and Mughal styles. The Lake Palace (Jag Niwas, 1746), built as a summer retreat, is now a luxury hotel but was once a royal residence with marble walls and gardens. The Monsoon Palace (Sajjangarh, 1884) sits atop a hill offering panoramic views of the city and lakes.`,
    features: ['Palace Boat Tours', 'Lake Views', 'Craft Markets', 'Verified ASI Data'],
    timeline: [
      { year: '1559', event: 'Udaipur founded by Udai Singh II' },
      { year: '1651', event: 'Jagdish Temple completed' },
      { year: '1746', event: 'Lake Palace built' },
      { year: '1884', event: 'Monsoon Palace completed' },
    ],
    facts: ['Udaipur is called the Venice of the East due to its lake palaces.', 'The City Palace is the largest palace complex in Rajasthan.', 'Lake Pichola is an artificial freshwater lake created in 1362.'],
    unesco: ['City Palace (pending UNESCO nomination)'],
    style: 'Rajput / Mewar',
    founded: '1559',
  },
  hampi: {
    subtitle: 'The Lost Empire',
    image: '/images/delhi-redfort.jpg',
    duration: '2 Days',
    monuments: 9,
    desc: 'The ruins of Vijayanagara (1336-1565), once one of the richest empires in the world, spread across a surreal boulder-strewn landscape.',
    highlights: ['Virupaksha Temple (7th c.)', 'Vitthala Temple (1513)', 'Stone Chariot (16th c.)', 'Queen\'s Bath', 'Royal Enclosure'],
    longDesc: `Hampi — the ruins of Vijayanagara — was once the capital of one of the richest empires in the world (1336-1565). Spread across 4,100 hectares of surreal boulder-strewn landscape, Hampi contains over 1,600 surviving remains including temples, palaces, aqueducts, and market streets. The Vitthala Temple (1513), dedicated to Lord Vishnu, features a famous stone chariot and 56 musical pillars that produce different notes when struck. The Virupaksha Temple (7th century, expanded in 1509) is one of the oldest functioning temples in India. The Royal Enclosure contains the Lotus Mahal, an Indo-Islamic structure, and the Elephant Stables.`,
    features: ['Archaeological Walks', 'Sunset Points', 'Temple Tours', 'Verified ASI Data'],
    timeline: [
      { year: '1336', event: 'Vijayanagara Empire founded' },
      { year: '1509', event: 'Virupaksha Temple expanded' },
      { year: '1513', event: 'Vitthala Temple completed' },
      { year: '1565', event: 'Battle of Talikota — empire falls' },
    ],
    facts: ['Hampi was the second-largest medieval city in the world after Beijing.', 'The empire was destroyed in the Battle of Talikota in 1565, leaving Hampi in ruins.', 'UNESCO designated Hampi a World Heritage Site in 1986.'],
    unesco: ['Group of Monuments at Hampi'],
    style: 'Dravidian / Vijayanagara',
    founded: '1336',
  },
};

export default function RouteDetail() {
  const { id } = useParams<{ id: string }>();
  const data = id ? routeData[id] : null;

  if (!data) {
    return (
      <div className="min-h-screen pt-28 px-6 text-center text-ink/40">
        <h2 className="font-display text-4xl mb-4">Route not found</h2>
        <Link to="/routes" className="text-crimson underline">Back to Routes</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-parchment">
      {/* Hero */}
      <section className="relative h-[75vh] overflow-hidden">
        <img src={data.image} alt={id} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-parchment via-ink/40 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-14">
            <Link to="/routes" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-5 transition-colors hover:-translate-x-1">
              <ArrowLeft className="h-4 w-4" /> Back to Routes
            </Link>
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.15em] border border-white/10 mb-4">{data.duration} · {data.monuments} Monuments</span>
            <h1 className="font-display text-6xl md:text-8xl text-white font-light tracking-tight mb-3 drop-shadow-2xl">{id ? id.charAt(0).toUpperCase() + id.slice(1) : ''}</h1>
            <h2 className="font-display text-2xl md:text-4xl text-white/80 font-light italic drop-shadow-lg">{data.subtitle}</h2>
            <div className="flex flex-wrap gap-3 mt-6">
              {data.unesco.map(u => (
                <span key={u} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white/70 text-[11px] font-medium border border-white/10">UNESCO: {u}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 -mt-20 relative z-10">
        <div className="bg-white rounded-[3rem] shadow-2xl shadow-ink/5 overflow-hidden border border-stone/20">
          {/* Quick info bar */}
          <div className="bg-gradient-to-r from-parchment to-[#f0ebe3] border-b border-stone/20 px-8 md:px-14 py-5 flex flex-wrap gap-6 md:gap-10 items-center">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-crimson" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-ink/30 font-bold">Duration</p>
                <p className="text-sm font-semibold text-ink">{data.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Landmark className="h-5 w-5 text-crimson" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-ink/30 font-bold">Monuments</p>
                <p className="text-sm font-semibold text-ink">{data.monuments}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Info className="h-5 w-5 text-crimson" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-ink/30 font-bold">Founded</p>
                <p className="text-sm font-semibold text-ink">{data.founded}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-crimson" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-ink/30 font-bold">Style</p>
                <p className="text-sm font-semibold text-ink">{data.style}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-crimson" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-ink/30 font-bold">Location</p>
                <p className="text-sm font-semibold text-ink">{id ? id.charAt(0).toUpperCase() + id.slice(1) : ''}, India</p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-14">
            <p className="text-xl md:text-2xl text-ink/45 leading-relaxed mb-12 font-light max-w-3xl">{data.desc}</p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
              {/* Main content */}
              <div className="lg:col-span-7">
                <h3 className="font-display text-3xl text-ink mb-6">About This Route</h3>
                <p className="text-ink/45 text-[15px] leading-[1.9] mb-10">{data.longDesc}</p>

                <h4 className="font-display text-2xl text-ink mb-5">Key Highlights</h4>
                <div className="flex flex-wrap gap-2.5 mb-10">
                  {data.highlights.map((h) => (
                    <span key={h} className="px-4 py-2 rounded-xl bg-gradient-to-r from-crimson/5 to-crimson/10 text-crimson text-sm font-medium border border-crimson/10">{h}</span>
                  ))}
                </div>

                <h4 className="font-display text-2xl text-ink mb-5">Verified Facts</h4>
                <ul className="space-y-3 mb-10">
                  {data.facts.map((f, i) => (
                    <li key={i} className="flex gap-3 text-sm text-ink/45 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-crimson shrink-0 mt-2" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="font-display text-2xl text-ink mb-5">Historical Timeline</h4>
                <div className="space-y-0">
                  {data.timeline.map((t, i) => (
                    <div key={i} className="flex gap-5 py-4 border-b border-stone/20 last:border-0">
                      <span className="font-display text-xl text-crimson font-light w-20 shrink-0">{t.year}</span>
                      <span className="text-ink/45 text-sm leading-relaxed">{t.event}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-parchment rounded-[2rem] p-8 border border-stone/20 shadow-lg shadow-ink/5">
                  <h4 className="font-display text-xl text-ink mb-6">Interactive Features</h4>
                  <div className="space-y-3">
                    {data.features.map((f) => (
                      <div key={f} className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm border border-stone/20 hover:-translate-y-0.5 transition-all duration-200">
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-crimson to-crimson-deep flex items-center justify-center shrink-0 shadow-md shadow-crimson/20">
                          <Sparkles className="h-5 w-5 text-saffron" />
                        </div>
                        <div>
                          <h5 className="text-sm font-semibold text-ink">{f}</h5>
                          <p className="text-[11px] text-ink/30">Available at this route</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link to="/map" className="mt-6 inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-2xl bg-gradient-to-r from-crimson to-crimson-deep text-white text-sm font-semibold shadow-xl shadow-crimson/20 hover:shadow-crimson/40 hover:-translate-y-0.5 transition-all">
                    Launch Interactive Explorer
                  </Link>
                </div>

                <div className="bg-gradient-to-br from-ink to-[#0F0803] rounded-[2rem] p-8 text-parchment shadow-2xl shadow-black/30 relative overflow-hidden">
                  <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-saffron/10 blur-2xl" />
                  <h4 className="font-display text-xl mb-4">UNESCO Designations</h4>
                  <ul className="space-y-3 mb-6">
                    {data.unesco.map(u => (
                      <li key={u} className="flex items-center gap-2.5 text-sm text-parchment/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-saffron" />
                        {u}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.15em] text-parchment/30">Architectural Style</p>
                      <p className="text-base font-display font-semibold">{data.style}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] uppercase tracking-[0.15em] text-parchment/30">Founded</p>
                      <p className="text-base font-display font-semibold">{data.founded}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
