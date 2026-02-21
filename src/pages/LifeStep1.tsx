import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const STEP_LABELS = ['Úvod', 'Zdraví', 'Krytí', 'Nabídky', 'Kontakt', 'Shrnutí'];

function Progress({ current, total = 6 }: { current: number; total?: number }) {
  return (
    <div className="flex items-center justify-center gap-[8px] w-full flex-wrap">
      {Array.from({ length: total }, (_, i) => i + 1).map((step) => (
        <div key={step} className="flex items-center gap-[8px]">
          <div className="flex flex-col items-center gap-[4px]">
            <div
              className={`flex items-center justify-center rounded-full size-[36px] ${step <= current ? 'bg-[#3f2578]' : 'bg-[#e2e9f0]'}`}
            >
              <span
                className={`font-bold text-[14px] ${step <= current ? 'text-white' : 'text-[#94a3b8]'}`}
                style={{ fontFamily: "'Mona Sans', sans-serif" }}
              >
                {step}
              </span>
            </div>
            <span
              className={`font-bold text-[12px] whitespace-nowrap max-w-[52px] text-center leading-tight ${step <= current ? 'text-[#3f2578]' : 'text-[#94a3b8]'}`}
              style={{ fontFamily: "'Mona Sans', sans-serif" }}
            >
              {STEP_LABELS[step - 1]}
            </span>
          </div>
          {step < total && <div className={`h-[2px] w-[40px] ${step < current ? 'bg-[#3f2578]' : 'bg-[#e2e9f0]'}`} />}
        </div>
      ))}
    </div>
  );
}

const KRAJE = ['Praha', 'Středočeský', 'Jihočeský', 'Plzeňský', 'Karlovarský', 'Ústecký', 'Liberecký', 'Královéhradecký', 'Pardubický', 'Vysočina', 'Jihomoravský', 'Olomoucký', 'Moravskoslezský', 'Zlínský'];

export function LifeStep1() {
  const navigate = useNavigate();
  const [kdo, setKdo] = useState<'sebe' | 'blizke'>('sebe');
  const [pohlavi, setPohlavi] = useState<'muz' | 'zena'>('muz');
  const [datumNarozeni, setDatumNarozeni] = useState('');
  const [deti, setDeti] = useState(false);
  const [kraj, setKraj] = useState('');
  const [hypo, setHypo] = useState(false);
  const [kurak, setKurak] = useState<'ano' | 'ne'>('ne');

  return (
    <div className="bg-white flex flex-col gap-[24px] items-center p-[24px] w-full min-h-screen">
      <h1
        className="text-[32px] md:text-[40px] font-bold text-center tracking-tight"
        style={{ fontFamily: "'Mona Sans', sans-serif", color: '#3f2578' }}
      >
        Online sjednání životního pojištění
      </h1>

      <div className="flex flex-col gap-[24px] items-center px-4 md:px-[99px] py-[24px] w-full max-w-[1000px]">
        <Progress current={1} />

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full items-start">
          <div className="w-full md:w-[280px] shrink-0 flex justify-center md:justify-start order-2 md:order-1">
            <img src="/assets/life-char-1.svg" alt="" className="max-h-[280px] w-auto object-contain" />
          </div>
          <div className="flex flex-col gap-[20px] w-full flex-1 min-w-0 order-1 md:order-2">
          <div>
            <p className="text-[#3f2578] text-[18px] font-bold mb-[8px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>
              Pojišťuji sebe nebo blízké?
            </p>
            <div className="flex gap-[12px]">
              <label className={`flex items-center gap-2 px-4 py-3 rounded-[10px] border-2 cursor-pointer ${kdo === 'sebe' ? 'border-[#3f2578] bg-[#f5f3ff]' : 'border-[#e2e9f0]'}`}>
                <input type="radio" name="kdo" checked={kdo === 'sebe'} onChange={() => setKdo('sebe')} className="accent-[#3f2578]" />
                <span className="font-semibold text-[#3f2578]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Sebe</span>
              </label>
              <label className={`flex items-center gap-2 px-4 py-3 rounded-[10px] border-2 cursor-pointer ${kdo === 'blizke' ? 'border-[#3f2578] bg-[#f5f3ff]' : 'border-[#e2e9f0]'}`}>
                <input type="radio" name="kdo" checked={kdo === 'blizke'} onChange={() => setKdo('blizke')} className="accent-[#3f2578]" />
                <span className="font-semibold text-[#3f2578]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Blízké</span>
              </label>
            </div>
          </div>

          <div>
            <p className="text-[#3f2578] text-[18px] font-bold mb-[8px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>
              Pohlaví
            </p>
            <div className="flex gap-[12px]">
              <label className={`flex items-center gap-2 px-4 py-3 rounded-[10px] border-2 cursor-pointer ${pohlavi === 'muz' ? 'border-[#3f2578] bg-[#f5f3ff]' : 'border-[#e2e9f0]'}`}>
                <input type="radio" name="pohlavi" checked={pohlavi === 'muz'} onChange={() => setPohlavi('muz')} className="accent-[#3f2578]" />
                <span className="font-semibold text-[#3f2578]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Muž</span>
              </label>
              <label className={`flex items-center gap-2 px-4 py-3 rounded-[10px] border-2 cursor-pointer ${pohlavi === 'zena' ? 'border-[#3f2578] bg-[#f5f3ff]' : 'border-[#e2e9f0]'}`}>
                <input type="radio" name="pohlavi" checked={pohlavi === 'zena'} onChange={() => setPohlavi('zena')} className="accent-[#3f2578]" />
                <span className="font-semibold text-[#3f2578]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Žena</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-[#3f2578] text-[18px] font-bold mb-[8px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>
              Datum narození <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              value={datumNarozeni}
              onChange={(e) => setDatumNarozeni(e.target.value)}
              placeholder="DD.MM.RRRR"
              className="border border-[#e2e9f0] h-[44px] px-[12px] rounded-[10px] text-[16px] w-full outline-none focus:ring-2 focus:ring-[#3f2578]/30"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
          </div>

          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" checked={deti} onChange={(e) => setDeti(e.target.checked)} className="size-[18px] accent-[#3f2578]" />
            <span className="text-[#3f2578] text-[16px] font-semibold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Chci také pojistit děti</span>
          </label>

          <div>
            <label className="block text-[#3f2578] text-[18px] font-bold mb-[8px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Kraj</label>
            <select
              value={kraj}
              onChange={(e) => setKraj(e.target.value)}
              className="border border-[#e2e9f0] h-[44px] px-[12px] rounded-[10px] text-[16px] w-full outline-none bg-white"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <option value="">Vyberte kraj...</option>
              {KRAJE.map((k) => (
                <option key={k} value={k}>{k}</option>
              ))}
            </select>
          </div>

          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" checked={hypo} onChange={(e) => setHypo(e.target.checked)} className="size-[18px] accent-[#3f2578]" />
            <span className="text-[#3f2578] text-[16px] font-semibold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Mám hypo/úvěr?</span>
          </label>

          <div>
            <p className="text-[#3f2578] text-[18px] font-bold mb-[8px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Kuřák?</p>
            <div className="flex gap-[12px]">
              <label className={`flex items-center gap-2 px-4 py-3 rounded-[10px] border-2 cursor-pointer ${kurak === 'ne' ? 'border-[#3f2578] bg-[#f5f3ff]' : 'border-[#e2e9f0]'}`}>
                <input type="radio" name="kurak" checked={kurak === 'ne'} onChange={() => setKurak('ne')} className="accent-[#3f2578]" />
                <span className="font-semibold text-[#3f2578]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Ne</span>
              </label>
              <label className={`flex items-center gap-2 px-4 py-3 rounded-[10px] border-2 cursor-pointer ${kurak === 'ano' ? 'border-[#3f2578] bg-[#f5f3ff]' : 'border-[#e2e9f0]'}`}>
                <input type="radio" name="kurak" checked={kurak === 'ano'} onChange={() => setKurak('ano')} className="accent-[#3f2578]" />
                <span className="font-semibold text-[#3f2578]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Ano</span>
              </label>
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate('/pojisteni/zivot/zdravi')}
            className="flex h-[52px] items-center justify-center rounded-[12px] w-full mt-2 text-white text-[18px] font-bold"
            style={{ backgroundImage: 'linear-gradient(263.127deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%)', fontFamily: "'Mona Sans', sans-serif" }}
          >
            Pokračovat
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
