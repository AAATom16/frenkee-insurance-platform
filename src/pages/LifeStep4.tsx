import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LifeProgress } from '../components/LifeProgress';
import { Button, GradientHeading } from '../components/ui';

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
    <div className="bg-white flex flex-col gap-6 items-center p-4 md:p-6 w-full min-h-screen">
      <GradientHeading size="lg" className="w-full">
        Online sjednání životního pojištění
      </GradientHeading>

      <div className="flex flex-col gap-[24px] items-center px-4 md:px-[80px] py-[32px] w-full max-w-[1000px]">
        <LifeProgress current={4} total={8} />

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

          <Button type="button" variant="gradient" size="lg" className="w-full h-[52px] rounded-[var(--radius-lg)] text-lg mt-2" onClick={() => navigate('/pojisteni/zivot/kontakt')}>Pokračovat</Button>
          </div>
          <div className="w-full md:w-[240px] shrink-0 flex justify-center md:justify-end">
            <img src="/assets/life-char-4.svg" alt="" className="max-h-[260px] w-auto object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
