import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const STEP_LABELS = ['Úvod', 'Zdraví', 'Krytí', 'Nabídky', 'Kontakt', 'Shrnutí', 'Kontrola', 'Hotovo'];

function Progress({ current, total = 8 }: { current: number; total?: number }) {
  return (
    <div className="flex items-center justify-center gap-[8px] w-full flex-wrap">
      {Array.from({ length: total }, (_, i) => i + 1).map((step) => (
        <div key={step} className="flex items-center gap-[8px]">
          <div className="flex flex-col items-center gap-[4px]">
            <div className={`flex items-center justify-center rounded-full size-[36px] ${step <= current ? 'bg-[#3f2578]' : 'bg-[#e2e9f0]'}`}>
              <span className={`font-bold text-[14px] ${step <= current ? 'text-white' : 'text-[#94a3b8]'}`} style={{ fontFamily: "'Mona Sans', sans-serif" }}>{step}</span>
            </div>
            <span className={`font-bold text-[12px] whitespace-nowrap max-w-[52px] text-center ${step <= current ? 'text-[#3f2578]' : 'text-[#94a3b8]'}`} style={{ fontFamily: "'Mona Sans', sans-serif" }}>{STEP_LABELS[step - 1]}</span>
          </div>
          {step < total && <div className={`h-[2px] w-[40px] ${step < current ? 'bg-[#3f2578]' : 'bg-[#e2e9f0]'}`} />}
        </div>
      ))}
    </div>
  );
}

const FREKVENCE_OPTIONS = ['Měsíčně', 'Čtvrtletně', 'Pololetně', 'Ročně'] as const;

const NABIDKY = [
  { id: 'a', title: 'Standardní tarif', benefits: 'Základní krytí', cena: 150, period: 'měsíc' },
  { id: 'b', title: 'Ideální tarif', benefits: 'Rozšířené krytí', cena: 280, period: 'měsíc' },
  { id: 'c', title: 'Komplexní tarif', benefits: 'Kompletní krytí', cena: 420, period: 'měsíc' },
];

export function LifeStep4() {
  const navigate = useNavigate();
  const [castka, setCastka] = useState('');
  const [frekvence, setFrekvence] = useState<(typeof FREKVENCE_OPTIONS)[number]>('Měsíčně');

  return (
    <div className="bg-white flex flex-col gap-[24px] items-center p-[24px] w-full min-h-screen">
      <h1 className="text-[32px] md:text-[40px] font-bold text-center tracking-tight" style={{ fontFamily: "'Mona Sans', sans-serif", color: '#3f2578' }}>
        Online sjednání životního pojištění
      </h1>

      <div className="flex flex-col gap-[24px] items-center px-4 md:px-[99px] py-[24px] w-full max-w-[1000px]">
        <p className="text-[#94a3b8] text-[14px] font-semibold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Krok 4 z 8</p>
        <Progress current={4} total={8} />

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full items-start">
          <div className="flex flex-col gap-[20px] w-full flex-1 min-w-0">
          <div>
            <label className="block text-[#3f2578] text-[18px] font-bold mb-[8px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Chci pojistit na</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={castka}
                onChange={(e) => setCastka(e.target.value.replace(/\D/g, ''))}
                placeholder="500 000"
                className="border border-[#e2e9f0] h-[44px] px-[12px] rounded-[10px] text-[16px] flex-1 outline-none"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
              <span className="text-[#3f2578] font-semibold whitespace-nowrap" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Kč</span>
            </div>
          </div>
          <div>
            <p className="text-[#3f2578] text-[18px] font-bold mb-[8px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Frekvence placení</p>
            <div className="flex flex-wrap gap-[12px]">
              {FREKVENCE_OPTIONS.map((f) => (
                <label key={f} className={`flex items-center gap-2 px-4 py-3 rounded-[10px] border-2 cursor-pointer ${frekvence === f ? 'border-[#3f2578] bg-[#f5f3ff]' : 'border-[#e2e9f0]'}`}>
                  <input type="radio" name="frekvence" checked={frekvence === f} onChange={() => setFrekvence(f)} className="accent-[#3f2578]" />
                  <span className="font-semibold text-[#3f2578]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>{f}</span>
                </label>
              ))}
            </div>
          </div>

          <p className="text-[#3f2578] text-[18px] font-bold pt-2" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Vyberte nabídku</p>
          <div className="grid gap-4">
            {NABIDKY.map((n) => (
              <div key={n.id} className="border-2 border-[#e2e9f0] rounded-[12px] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white hover:border-[#3f2578]/40">
                <div>
                  <p className="text-[#3f2578] font-semibold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>{n.title}</p>
                  <p className="text-[#64748b] text-[14px] mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>{n.benefits}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-[#3f2578] text-[20px] font-bold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>{n.cena} Kč <span className="text-[14px] font-normal text-[#64748b]">/ {n.period}</span></p>
                  <button
                    type="button"
                    onClick={() => navigate('/pojisteni/zivot/kontakt')}
                    className="flex h-[44px] items-center justify-center px-6 rounded-[10px] text-white text-[16px] font-bold shrink-0"
                    style={{ backgroundImage: 'linear-gradient(263.127deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%)', fontFamily: "'Mona Sans', sans-serif" }}
                  >
                    Vybrat
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button type="button" onClick={() => navigate('/pojisteni/zivot/kontakt')} className="flex h-[52px] items-center justify-center rounded-[12px] w-full mt-2 text-white text-[18px] font-bold" style={{ backgroundImage: 'linear-gradient(263.127deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%)', fontFamily: "'Mona Sans', sans-serif" }}>Pokračovat</button>
          </div>
          <div className="w-full md:w-[240px] shrink-0 flex justify-center md:justify-end">
            <img src="/assets/life-char-4.svg" alt="" className="max-h-[260px] w-auto object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
