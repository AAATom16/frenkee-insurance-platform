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

const KRYTI = [
  { id: 'smrt', label: 'Smrt', defaultAmount: 1000000, placeholder: '1 000 000 Kč' },
  { id: 'invalidita', label: 'Invalidita', defaultAmount: 500000, placeholder: '500 000 Kč' },
  { id: 'vazneNemoci', label: 'Vážné nemoci', defaultAmount: 250000, placeholder: '250 000 Kč' },
  { id: 'pracovniNeschopnost', label: 'Pracovní neschopnost', defaultAmount: 100000, placeholder: '100 000 Kč' },
  { id: 'trvaleNasledky', label: 'Trvalé následky úrazu', defaultAmount: 0, placeholder: '—' },
  { id: 'deti', label: 'Děti', defaultAmount: 0, placeholder: '—' },
];

export function LifeStep3() {
  const navigate = useNavigate();
  const [amounts, setAmounts] = useState<Record<string, string>>(
    Object.fromEntries(KRYTI.map((k) => [k.id, k.defaultAmount > 0 ? String(k.defaultAmount) : '']))
  );
  const [checked, setChecked] = useState<Record<string, boolean>>(
    Object.fromEntries(KRYTI.map((k) => [k.id, ['smrt', 'invalidita', 'vazneNemoci'].includes(k.id)]))
  );

  const toggle = (id: string) => setChecked((c) => ({ ...c, [id]: !c[id] }));
  const setAmount = (id: string, value: string) => setAmounts((a) => ({ ...a, [id]: value }));

  return (
    <div className="bg-white flex flex-col gap-[24px] items-center p-[24px] w-full min-h-screen">
      <h1 className="text-[32px] md:text-[40px] font-bold text-center tracking-tight" style={{ fontFamily: "'Mona Sans', sans-serif", color: '#3f2578' }}>
        Online sjednání životního pojištění
      </h1>

      <div className="flex flex-col gap-[24px] items-center px-4 md:px-[99px] py-[24px] w-full max-w-[1000px]">
        <p className="text-[#94a3b8] text-[14px] font-semibold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Krok 3 z 8</p>
        <Progress current={3} total={8} />

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full items-start">
          <div className="w-full md:w-[280px] shrink-0 flex justify-center md:justify-start order-2 md:order-1">
            <img src="/assets/life-char-3.svg" alt="" className="max-h-[280px] w-auto object-contain" />
          </div>
          <div className="flex flex-col gap-[16px] w-full flex-1 min-w-0 order-1 md:order-2">
          <p className="text-[#3f2578] text-[18px] font-bold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Vyberte krytí a částky</p>
          {KRYTI.map((k) => (
            <div key={k.id} className="flex flex-wrap items-center gap-3 p-4 rounded-[12px] border border-[#e2e9f0] bg-[#f8fafc]">
              <label className="flex items-center gap-2 cursor-pointer flex-1 min-w-[140px]">
                <input type="checkbox" checked={!!checked[k.id]} onChange={() => toggle(k.id)} className="size-[18px] accent-[#3f2578]" />
                <span className="font-semibold text-[#3f2578]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>{k.label}</span>
              </label>
              {k.defaultAmount > 0 && (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={amounts[k.id] || ''}
                    onChange={(e) => setAmount(k.id, e.target.value.replace(/\D/g, ''))}
                    placeholder={k.placeholder}
                    disabled={!checked[k.id]}
                    className="border border-[#e2e9f0] h-[40px] px-3 rounded-[8px] text-[14px] w-[160px] outline-none disabled:opacity-50 disabled:bg-gray-100"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                  <span className="text-[#64748b] text-[14px]">Kč</span>
                </div>
              )}
            </div>
          ))}

          <button type="button" onClick={() => navigate('/pojisteni/zivot/nabidky')} className="flex h-[52px] items-center justify-center rounded-[12px] w-full mt-2 text-white text-[18px] font-bold" style={{ backgroundImage: 'linear-gradient(263.127deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%)', fontFamily: "'Mona Sans', sans-serif" }}>Pokračovat</button>
          </div>
        </div>
      </div>
    </div>
  );
}
