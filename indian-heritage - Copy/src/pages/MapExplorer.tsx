import { useState } from 'react';
import { ChevronRight, Landmark, Compass, ArrowUpRight, Globe } from 'lucide-react';

const regions = [
  { name: 'Delhi', fullName: 'National Capital Region', monuments: 12, color: '#8B1E1E', unesco: 3, x: 34, y: 22, details: 'Red Fort · Qutub Minar · Humayun Tomb' },
  { name: 'Agra', fullName: 'Uttar Pradesh — Agra', monuments: 8, color: '#C5A028', unesco: 3, x: 28, y: 30, details: 'Taj Mahal · Agra Fort · Fatehpur Sikri' },
  { name: 'Jaipur', fullName: 'Rajasthan — Jaipur', monuments: 10, color: '#D4A843', unesco: 2, x: 22, y: 36, details: 'Amber Fort · Hawa Mahal · Jantar Mantar' },
  { name: 'Varanasi', fullName: 'Uttar Pradesh — Varanasi', monuments: 6, color: '#F4A825', unesco: 1, x: 49, y: 32, details: 'Ganga Ghats · Sarnath · Kashi Vishwanath' },
  { name: 'Khajuraho', fullName: 'Madhya Pradesh — Khajuraho', monuments: 4, color: '#8B3A3A', unesco: 1, x: 42, y: 39, details: 'Kandariya Mahadev · Lakshmana Temple' },
  { name: 'Udaipur', fullName: 'Rajasthan — Udaipur', monuments: 7, color: '#B22222', unesco: 0, x: 18, y: 44, details: 'City Palace · Lake Palace · Monsoon Palace' },
  { name: 'Hampi', fullName: 'Karnataka — Hampi', monuments: 9, color: '#6B2E2E', unesco: 1, x: 34, y: 68, details: 'Vitthala Temple · Virupaksha · Stone Chariot' },
];

const stats = [
  { label: 'Heritage Regions', value: '7', sub: 'Active circuits' },
  { label: 'Total Monuments', value: '56', sub: 'Verified by ASI' },
  { label: 'UNESCO Sites', value: '11', sub: 'World Heritage' },
  { label: 'Total Duration', value: '13.5 Days', sub: 'Complete journey' },
];

export default function MapExplorer() {
  const [hovered, setHovered] = useState<string | null>(null);
  const activeRegion = hovered ? regions.find(r => r.name === hovered) : null;

  // Rough India map shape using simplified SVG paths
  const indiaPath = `
    M 15 25 
    C 20 15, 40 8, 55 12 
    C 70 10, 85 18, 90 30 
    C 95 42, 88 58, 75 55 
    C 60 52, 45 55, 35 50 
    C 28 38, 22 30, 15 25 
    Z
  `;

  return (
    <div className="min-h-screen pt-28 pb-24 bg-[#0A0806] text-parchment relative overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(197,160,40,0.08),_transparent_60%)]" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiLz48L3N2Zz4=')] opacity-20" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-bold uppercase tracking-[0.2em] text-amber-glow mb-6">
            <Globe className="h-3 w-3" />
            Interactive Explorer
          </div>
          <h1 className="font-display text-6xl md:text-[5rem] font-light tracking-tight mb-6 leading-[0.9]">
            Heritage <span className="italic text-gradient-gold">Map</span>
          </h1>
          <p className="text-parchment/40 text-lg leading-relaxed">
            A realistic geographic view of India's curated heritage circuits. Each region connects real monuments with verified data from UNESCO and the Archaeological Survey of India.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
          {stats.map(s => (
            <div key={s.label} className="bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] rounded-3xl p-7 backdrop-blur-sm hover:border-amber-glow/20 transition-all duration-300 group">
              <p className="font-display text-4xl md:text-5xl text-amber-glow font-light mb-1 group-hover:scale-105 transition-transform origin-left">{s.value}</p>
              <p className="text-[11px] font-semibold text-parchment/50 tracking-wide">{s.label}</p>
              <p className="text-[10px] text-parchment/20">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Main Map + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Realistic Map */}
          <div className="lg:col-span-7 relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#120A08] to-[#060302] border border-white/[0.06] shadow-[0_0_80px_rgba(197,160,40,0.05)]">
            <div className="absolute top-5 left-6 z-10">
              <h3 className="font-display text-xl text-parchment/80">Geographic Explorer</h3>
              <p className="text-[10px] text-parchment/30 tracking-widest">Live Area View · North & Central India</p>
            </div>

            <div className="relative h-[640px] w-full p-8 md:p-12 flex items-center justify-center">
              {/* Stylized India outline */}
              <svg viewBox="0 0 100 85" className="w-full max-w-[640px] h-full max-h-[580px]" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="mapBg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1A0F14" />
                    <stop offset="100%" stopColor="#0A0503" />
                  </linearGradient>
                  <filter id="regionGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#C5A028" floodOpacity="0.6" />
                  </filter>
                </defs>

                {/* Base country shape */}
                <path
                  d={indiaPath}
                  fill="rgba(255,255,255,0.015)"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="0.4"
                />
                {/* Inner state rough outlines */}
                <path d="M 20 30 Q 35 15 50 20 T 75 35 Q 85 50 70 58 T 45 52 Z" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.3" />
                <path d="M 18 45 Q 30 55 42 50 T 65 60 Q 55 75 35 72 Z" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.3" />

                {/* Rivers */}
                <path d="M 30 22 Q 45 15 60 28 T 75 42" fill="none" stroke="rgba(197,160,40,0.15)" strokeWidth="0.7" strokeLinecap="round" />
                <path d="M 55 45 Q 65 52 72 65" fill="none" stroke="rgba(197,160,40,0.1)" strokeWidth="0.4" strokeLinecap="round" />

                {/* Region markers */}
                {regions.map((r) => (
                  <g key={r.name}>
                    {/* Glow ring */}
                    <circle
                      cx={r.x}
                      cy={r.y}
                      r={hovered === r.name ? 6 : 3.5}
                      fill={r.color}
                      opacity={hovered === r.name ? 1 : 0.8}
                      filter={hovered === r.name ? 'url(#regionGlow)' : 'none'}
                      className="transition-all duration-300"
                    />
                    {/* Pulse ring */}
                    <circle
                      cx={r.x}
                      cy={r.y}
                      r={hovered === r.name ? 12 : 6}
                      fill="none"
                      stroke={r.color}
                      strokeWidth="0.3"
                      opacity={hovered === r.name ? 0.35 : 0.08}
                      className="transition-all duration-300"
                    />
                    {/* Label */}
                    <text
                      x={r.x}
                      y={r.y - (hovered === r.name ? 16 : 10)}
                      textAnchor="middle"
                      className={`font-display text-[9px] font-semibold transition-all duration-300 ${hovered === r.name ? 'opacity-100 fill-parchment' : 'opacity-60 fill-parchment/40'}`}
                    >
                      {r.name}
                    </text>
                    <text
                      x={r.x}
                      y={r.y - (hovered === r.name ? 9 : 5)}
                      textAnchor="middle"
                      className={`text-[7px] transition-all duration-300 ${hovered === r.name ? 'opacity-90 fill-parchment/60' : 'opacity-40 fill-parchment/25'}`}
                    >
                      {r.monuments} monuments
                    </text>
                  </g>
                ))}
              </svg>

              {/* Interactive dot overlay buttons */}
              {regions.map((r) => (
                <button
                  key={r.name}
                  onMouseEnter={() => setHovered(r.name)}
                  onMouseLeave={() => setHovered(null)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
                  style={{ left: `${r.x}%`, top: `${r.y}%` }}
                  aria-label={r.name}
                >
                  <span
                    className="block w-4 h-4 rounded-full shadow-[0_0_20px_rgba(197,160,40,0.4)] transition-transform duration-200"
                    style={{ backgroundColor: r.color, transform: hovered === r.name ? 'scale(1.4)' : 'scale(1)' }}
                  />
                  {/* Popup tooltip */}
                  <span className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1.5 rounded-xl bg-ink/90 backdrop-blur-md text-[10px] font-semibold text-parchment border border-white/10 whitespace-nowrap shadow-xl transition-all duration-200 ${hovered === r.name ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 pointer-events-none'}`}>
                    {r.name} · {r.unesco} UNESCO
                  </span>
                </button>
              ))}

              {/* Live indicator */}
              <div className="absolute bottom-5 right-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] text-parchment/40 tracking-wide">Live Explorer Active</span>
              </div>
            </div>
          </div>

          {/* Right: Sidebar with professional cards */}
          <div className="lg:col-span-5 space-y-5">
            <h3 className="font-display text-2xl text-parchment tracking-tight">Heritage Regions</h3>

            {regions.map((r) => (
              <a
                key={r.name}
                href={`/route/${r.name.toLowerCase()}`}
                className="group block bg-gradient-to-r from-white/[0.03] to-transparent border border-white/[0.06] hover:border-amber-glow/20 rounded-[2rem] p-6 transition-all duration-300 hover:-translate-x-1 hover:shadow-[0_0_30px_rgba(197,160,40,0.05)]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-black/30" style={{ backgroundColor: r.color + '20', border: `1px solid ${r.color}25` }}>
                    <Landmark className="h-5 w-5" style={{ color: r.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="font-display text-lg text-parchment font-medium">{r.name}</h4>
                      <ArrowUpRight className="h-4 w-4 text-parchment/15 group-hover:text-amber-glow group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <p className="text-[11px] text-parchment/30 tracking-wide mb-2">{r.fullName}</p>
                    <p className="text-xs text-parchment/40 mb-3">{r.details}</p>
                    <div className="flex items-center gap-4 text-[10px] text-parchment/25 tracking-wide">
                      <span className="flex items-center gap-1"><Compass className="h-3 w-3" /> {r.monuments} monuments</span>
                      <span>·</span>
                      <span>{r.unesco} UNESCO</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}

            {/* Active region detail card */}
            {activeRegion && (
              <div className="bg-gradient-to-br from-amber-glow/10 to-transparent border border-amber-glow/20 rounded-[2rem] p-6 animate-fade-up">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeRegion.color }} />
                  <span className="text-[10px] text-amber-glow font-bold uppercase tracking-[0.15em]">Active Region</span>
                </div>
                <h4 className="font-display text-xl text-parchment mb-1">{activeRegion.name}</h4>
                <p className="text-xs text-parchment/40 mb-3">{activeRegion.details}</p>
                <a href={`/route/${activeRegion.name.toLowerCase()}`} className="inline-flex items-center gap-1.5 text-xs text-amber-glow font-semibold hover:underline underline-offset-4">Explore this route <ChevronRight className="h-3 w-3" /></a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
