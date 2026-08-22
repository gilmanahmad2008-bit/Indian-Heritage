import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Landmark } from 'lucide-react';

const images = [
  { src: '/images/delhi-redfort.jpg', title: 'Red Fort (Lal Qila)', location: 'Delhi', year: '1638', desc: 'The fortified palace complex built by Shah Jahan as the seat of Mughal power, featuring Lahore Gate and marble palaces.', style: 'Indo-Islamic', status: 'UNESCO' },
  { src: '/images/taj-mahal.jpg', title: 'Taj Mahal', location: 'Agra', year: '1632', desc: 'White marble mausoleum commissioned by Shah Jahan for Mumtaz Mahal — recognized as one of the Seven Wonders of the World.', style: 'Mughal', status: 'UNESCO' },
  { src: '/images/jaipur-hawa.jpg', title: 'Hawa Mahal', location: 'Jaipur', year: '1799', desc: 'Five-story pink sandstone palace with 953 windows, built by Maharaja Sawai Pratap Singh for royal women.', style: 'Rajput', status: 'Heritage' },
  { src: '/images/varanasi-ghats.jpg', title: 'Dashashwamedh Ghat', location: 'Varanasi', year: 'Ancient', desc: 'The spiritual heart of the sacred city where the Ganga Aarti draws thousands of devotees each evening.', style: 'Hindu Sacred', status: 'Living Heritage' },
  { src: '/images/khajuraho-temple.jpg', title: 'Kandariya Mahadev', location: 'Khajuraho', year: '1025', desc: 'The largest and most ornate temple at Khajuraho, with over 870 sculptures carved in Nagara style.', style: 'Chandela', status: 'UNESCO' },
  { src: '/images/hero-heritage.jpg', title: 'Udaipur City Palace', location: 'Udaipur', year: '1559', desc: 'The largest palace complex in Rajasthan, built over 400 years by successive Mewar rulers on Lake Pichola.', style: 'Rajput / Mewar', status: 'Heritage' },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const open = (i: number) => setSelected(i);
  const close = () => setSelected(null);
  const next = () => selected !== null && setSelected((selected + 1) % images.length);
  const prev = () => selected !== null && setSelected((selected - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen pt-28 pb-24 bg-parchment">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <h1 className="font-display text-6xl md:text-7xl text-ink font-light tracking-tight mb-5">
            Visual <span className="italic text-crimson">Gallery</span>
          </h1>
          <p className="text-lg text-ink/40 leading-relaxed">A curated collection of architectural photography from India's most significant monuments — each backed by real historical data and verified architectural records.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => open(i)}
              className="group card-ornament relative overflow-hidden rounded-[2rem] shadow-xl shadow-ink/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white text-left"
            >
              <div className="relative h-72 overflow-hidden">
                <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md ${img.status === 'UNESCO' ? 'bg-amber-glow/20 text-amber-glow border border-amber-glow/20' : 'bg-white/15 text-white border border-white/15'}`}>{img.status}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="text-[10px] text-parchment/50 uppercase tracking-[0.2em] mb-1">{img.location} · {img.year}</p>
                  <h3 className="font-display text-2xl text-white mb-1">{img.title}</h3>
                  <p className="text-xs text-parchment/40 leading-relaxed line-clamp-2">{img.desc}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div className="fixed inset-0 z-[60] bg-ink/95 backdrop-blur-2xl flex items-center justify-center animate-fade-in" onClick={close}>
          <button onClick={close} className="absolute top-6 right-6 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors z-10 border border-white/10" aria-label="Close">
            <X className="h-6 w-6" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors z-10 border border-white/10" aria-label="Previous">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors z-10 border border-white/10" aria-label="Next">
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="max-w-6xl w-[92%] flex flex-col lg:flex-row gap-8 lg:gap-12 items-center" onClick={e => e.stopPropagation()}>
            <div className="lg:w-[60%] max-h-[60vh] rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
              <img src={images[selected].src} alt={images[selected].title} className="w-full h-full object-contain bg-ink" />
            </div>
            <div className="lg:w-[40%] text-parchment">
              <div className="flex items-center gap-2 mb-3">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md ${images[selected].status === 'UNESCO' ? 'bg-amber-glow/15 text-amber-glow border border-amber-glow/20' : 'bg-white/10 text-parchment/70 border border-white/10'}`}>{images[selected].status}</span>
                <span className="text-[10px] text-parchment/30">{images[selected].style}</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl mb-3">{images[selected].title}</h2>
              <div className="flex items-center gap-3 text-xs text-parchment/40 mb-6">
                <span className="flex items-center gap-1"><Landmark className="h-3 w-3" /> {images[selected].location}</span>
                <span>·</span>
                <span>{images[selected].year}</span>
              </div>
              <p className="text-parchment/60 leading-relaxed text-[15px]">{images[selected].desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
