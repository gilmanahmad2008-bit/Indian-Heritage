import { useState } from 'react';
import { ChevronDown, Scroll, Compass } from 'lucide-react';

const events = [
  { year: '2600 BCE', era: 'Indus Valley', title: 'Indus Valley Civilization', desc: 'Harappa and Mohenjo-daro emerge with planned cities, drainage systems, and a still-undeciphered script — one of the world\'s earliest urban cultures.', color: '#C5A028' },
  { year: '1500 BCE', era: 'Vedic Age', title: 'Rigveda Composition', desc: 'The oldest of the four Vedas is composed, laying the philosophical, ritual, and poetic foundations of Hindu thought.', color: '#F4A825' },
  { year: '563 BCE', era: 'Ancient', title: 'Birth of Buddha', desc: 'Siddhartha Gautama is born in Lumbini, later founding Buddhism and shaping spiritual life across Asia for millennia.', color: '#8B3A3A' },
  { year: '268 BCE', era: 'Mauryan Empire', title: 'Ashoka the Great', desc: 'Emperor Ashoka converts to Buddhism after the Kalinga War and spreads dharma through rock edicts across the subcontinent.', color: '#8B1E1E' },
  { year: '950 CE', era: 'Chandela Dynasty', title: 'Khajuraho Temples', desc: 'The Chandela rulers build the world-famous Khajuraho temples with over 870 intricate sculptures in Nagara style.', color: '#D4A843' },
  { year: '1193 CE', era: 'Delhi Sultanate', title: 'Qutub Minar', desc: 'Qutb-ud-din Aibak begins the construction of the 73-meter Qutub Minar, the world\'s tallest brick minaret.', color: '#C5A028' },
  { year: '1559 CE', era: 'Rajput Kingdom', title: 'Udaipur Founded', desc: 'Maharana Udai Singh II establishes Udaipur as the new capital of Mewar — the future City of Lakes.', color: '#F4A825' },
  { year: '1632 CE', era: 'Mughal Empire', title: 'Taj Mahal Commissioned', desc: 'Shah Jahan commissions the Taj Mahal in memory of Mumtaz Mahal — taking 22 years and 20,000 artisans.', color: '#C5A028' },
  { year: '1799 CE', era: 'Rajput Kingdom', title: 'Hawa Mahal', desc: 'Maharaja Sawai Pratap Singh builds the Hawa Mahal — a five-story palace with 953 honeycomb windows.', color: '#8B3A3A' },
  { year: '1947 CE', era: 'Modern India', title: 'Indian Independence', desc: 'India gains independence from British rule after nearly 200 years, beginning a new democratic nation-building era.', color: '#5A1212' },
];

export default function Timeline() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-28 pb-28 bg-parchment relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-saffron/5 to-transparent rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-crimson/5 to-transparent rounded-full blur-[100px]" />

      <div className="mx-auto max-w-5xl px-6 lg:px-10 relative">
        <div className="max-w-2xl mb-20">
          <span className="text-[11px] uppercase tracking-[0.25em] text-crimson/60 font-bold mb-3 block">5,000 Years of History</span>
          <h1 className="font-display text-6xl md:text-7xl text-ink font-light tracking-tight mb-6 leading-[0.92]">
            Historical <br /><span className="italic text-crimson">Timeline</span>
          </h1>
          <p className="text-lg text-ink/40 leading-relaxed">From the earliest civilizations to modern independence, India's heritage unfolds as a continuous narrative of art, faith, empire, and resilience.</p>
        </div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-crimson/15 to-transparent" />

          <div className="space-y-14 md:space-y-20">
            {events.map((event, i) => (
              <div key={event.year} className="relative flex flex-col md:flex-row md:items-start gap-6 md:gap-14">
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-crimson to-crimson-deep shadow-xl shadow-crimson/20 z-10 flex items-center justify-center ring-4 ring-parchment">
                  <Compass className="h-4 w-4 text-saffron" />
                </div>

                {/* Date */}
                <div className={`pl-16 md:pl-0 md:w-[45%] md:text-right ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:order-2'}`}>
                  <span className="font-display text-5xl md:text-6xl text-crimson/10 font-light leading-none tracking-tight">{event.year.split(' ')[0]}</span>
                </div>

                {/* Card */}
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className={`pl-16 md:pl-0 md:w-[45%] text-left bg-white rounded-[2.5rem] p-8 shadow-xl shadow-ink/5 border border-stone/20 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group ${i % 2 === 0 ? 'md:ml-auto md:pl-10' : 'md:mr-auto md:pr-10'}`}
                >
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest" style={{ backgroundColor: event.color + '15', color: event.color }}>{event.era}</span>
                  </div>
                  <h3 className="font-display text-2xl text-ink mb-1">{event.title}</h3>
                  <p className="text-[11px] text-crimson/50 uppercase tracking-[0.1em] font-medium mb-3">{event.year}</p>
                  <p className="text-sm text-ink/45 leading-relaxed">{event.desc}</p>
                  <div className="mt-5 flex items-center gap-2 text-xs text-crimson font-semibold group-hover:underline underline-offset-4">
                    <Scroll className="h-3.5 w-3.5" />
                    <span>Read the full story</span>
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${expanded === i ? 'rotate-180' : ''}`} />
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
