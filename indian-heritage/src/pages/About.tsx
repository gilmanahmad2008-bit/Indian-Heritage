import { Heart, Users, BookOpen, Mountain } from 'lucide-react';

const stats = [
  { value: '350+', label: 'Heritage Sites' },
  { value: '5', label: 'Curated Routes' },
  { value: '40', label: 'UNESCO Sites' },
  { value: '5,000+', label: 'Years of History' },
];

const team = [
  { name: 'Dr. Aisha Verma', role: 'Heritage Historian', desc: 'Specialist in Mughal art and architecture with 15 years of field research.' },
  { name: 'Rohan Mehta', role: 'Digital Archivist', desc: 'Building interactive 3D reconstructions of monuments using photogrammetry.' },
  { name: 'Priya Nair', role: 'Cultural Curator', desc: 'Former curator at the National Museum, now leading storytelling efforts.' },
];

export default function About() {
  return (
    <div className="min-h-screen pt-28 pb-24 bg-parchment">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <div>
            <h1 className="font-display text-6xl md:text-7xl text-ink font-light tracking-tight mb-6">
              About the <br /><span className="italic text-crimson">Guide</span>
            </h1>
            <p className="text-lg text-ink/40 leading-relaxed mb-6">
              The Indian Heritage Guide is more than a travel website — it is a digital museum, an archive, and a storytelling platform dedicated to preserving and sharing India's monumental legacy.
            </p>
            <p className="text-ink/40 leading-relaxed mb-8">
              Our mission is to make heritage accessible, interactive, and meaningful. We partner with archaeologists, architects, and local communities to build accurate, immersive narratives around each site — from the carved temples of Khajuraho to the sacred ghats of Varanasi.
            </p>
            <div className="flex gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-crimson/5 text-crimson text-xs font-semibold">UNESCO Partners</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 text-ink text-xs font-semibold">Open Archive</span>
            </div>
          </div>
          <div className="relative">
            <img src="/images/hero-heritage.jpg" alt="Heritage" className="rounded-[2.5rem] shadow-2xl shadow-ink/10 w-full object-cover h-[420px]" />
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 max-w-[220px]">
              <BookOpen className="h-8 w-8 text-crimson mb-3" strokeWidth={1.5} />
              <p className="font-display text-xl text-ink font-semibold">72</p>
              <p className="text-xs text-ink/30">Research publications referenced</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-28">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-3xl p-8 shadow-lg shadow-ink/5 border border-stone/20 text-center">
              <p className="font-display text-4xl md:text-5xl text-crimson font-light">{s.value}</p>
              <p className="text-xs text-ink/30 uppercase tracking-[0.15em] mt-2">{s.label}</p>
            </div>
          ))}
        </div>

        <h2 className="font-display text-4xl md:text-5xl text-ink mb-14 tracking-tight">Our <span className="italic text-crimson">Team</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-28">
          {team.map((t) => (
            <div key={t.name} className="bg-white rounded-[2rem] p-8 shadow-xl shadow-ink/5 border border-stone/20 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-crimson to-crimson-deep flex items-center justify-center mb-6 shadow-lg shadow-crimson/15">
                <Users className="h-6 w-6 text-saffron" />
              </div>
              <h3 className="font-display text-xl font-semibold text-ink mb-1">{t.name}</h3>
              <p className="text-xs text-crimson uppercase tracking-widest font-semibold mb-4">{t.role}</p>
              <p className="text-sm text-ink/40 leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-ink to-[#140B07] rounded-[3rem] p-10 md:p-16 text-parchment relative overflow-hidden">
          <Mountain className="absolute -right-6 -top-6 h-48 w-48 text-white/[0.03] rotate-12" />
          <div className="relative z-10 max-w-3xl">
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight mb-6">Why We Exist</h2>
            <p className="text-parchment/50 text-lg leading-relaxed mb-6">
              Every year, thousands of heritage structures across India face threats from pollution, neglect, and climate change. By creating digital twins, interactive maps, and accessible storytelling, we ensure that these monuments live on — not just in stone, but in memory, in education, and in art.
            </p>
            <div className="flex items-center gap-3 text-parchment/40 text-sm">
              <Heart className="h-4 w-4 text-crimson" />
              <span>Dedicated to Indian heritage preservation since 2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
