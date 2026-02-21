import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const STEP_LABELS = ['Osobní údaje', 'Zdraví', 'Krytí', 'Obmyvatelé', 'Shrnutí'];

function Progress({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-center gap-[12px] w-full">
      {[1, 2, 3, 4, 5].map((step) => (
        <div key={step} className="flex items-center gap-[12px]">
          <div className="flex flex-col items-center gap-[8px]">
            <div
              className={`flex items-center justify-center rounded-full size-[40px] ${step <= current ? 'bg-[#3f2578]' : 'bg-[#e2e9f0]'}`}
            >
              <span
                className={`font-bold text-[16px] ${step <= current ? 'text-white' : 'text-[#94a3b8]'}`}
                style={{ fontFamily: "'Mona Sans', sans-serif" }}
              >
                {step}
              </span>
            </div>
            <span
              className={`font-bold text-[14px] whitespace-nowrap ${step <= current ? 'text-[#3f2578]' : 'text-[#94a3b8]'}`}
              style={{ fontFamily: "'Mona Sans', sans-serif" }}
            >
              {STEP_LABELS[step - 1]}
            </span>
          </div>
          {step < 5 && <div className={`h-[2px] w-[60px] ${step < current ? 'bg-[#3f2578]' : 'bg-[#e2e9f0]'}`} />}
        </div>
      ))}
    </div>
  );
}

const COVERAGE_OPTIONS = [
  { id: 'invalidita', label: 'Invalidita', amount: '500 000 Kč' },
  { id: 'uraz', label: 'Úraz', amount: '500 000 Kč' },
  { id: 'hospitalizace', label: 'Hospitalizace', amount: '300 000 Kč' },
  { id: 'smrt', label: 'Smrt', amount: '1 000 000 Kč' },
  { id: 'nemoc', label: 'Nemoc', amount: '200 000 Kč' },
];

const FREQUENCY_OPTIONS = [
  { id: 'mesicne', label: 'Měsíčně' },
  { id: 'ctvrtletne', label: 'Čtvrtletně' },
  { id: 'rocne', label: 'Ročně' },
];

export function LifeStep3() {
  const navigate = useNavigate();
  const [pojistnaCastka, setPojistnaCastka] = useState(1000000);
  const [dobaPojisteni, setDobaPojisteni] = useState(20);
  const [frekvence, setFrekvence] = useState('mesicne');
  const [selectedCoverage, setSelectedCoverage] = useState<Set<string>>(new Set(['invalidita', 'uraz', 'smrt']));

  const toggleCoverage = (id: string) => {
    setSelectedCoverage((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="bg-white flex flex-col gap-[24px] items-center p-[24px] w-full min-h-screen">
      <div
        className="bg-clip-text flex flex-col justify-center leading-[0] text-[48px] text-center tracking-[-1px] w-full"
        style={{
          backgroundImage: 'linear-gradient(231.904deg, rgb(167, 82, 169) 26.752%, rgb(63, 37, 120) 100%)',
          WebkitTextFillColor: 'transparent',
          fontFamily: "'Mona Sans', sans-serif",
          fontWeight: 800,
        }}
      >
        <p className="leading-none whitespace-pre-wrap">Online sjednání životního pojištění</p>
      </div>
      <p className="text-[#3f2578] text-[16px] font-bold text-center" style={{ fontFamily: "'Mona Sans', sans-serif" }}>
        5 kroků k životnímu pojištění
      </p>

      <div className="flex flex-col gap-[24px] items-center px-[99px] py-[24px] w-[1000px] max-w-full">
        <Progress current={3} />

        <div className="flex flex-col gap-[20px] w-full max-w-[560px]">
          <div className="flex flex-col gap-[8px]">
            <label className="text-[#3f2578] text-[18px] font-bold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>
              Výše pojistné částky
            </label>
            <div className="flex items-center gap-[12px]">
              <input
                type="range"
                min={200000}
                max={3000000}
                step={100000}
                value={pojistnaCastka}
                onChange={(e) => setPojistnaCastka(Number(e.target.value))}
                className="flex-1 h-2 rounded-full appearance-none bg-[#e2e9f0] accent-[#3f2578]"
              />
              <span className="text-[#3f2578] font-bold text-[16px] whitespace-nowrap" style={{ fontFamily: "'Mona Sans', sans-serif" }}>
                {(pojistnaCastka / 1_000_000).toFixed(1)} mil. Kč
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-[8px]">
            <label className="text-[#3f2578] text-[18px] font-bold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>
              Doba pojištění (let)
            </label>
            <input
              type="number"
              min={5}
              max={40}
              value={dobaPojisteni}
              onChange={(e) => setDobaPojisteni(Number(e.target.value) || 5)}
              className="border border-[#e2e9f0] h-[40px] px-[12px] rounded-[8px] text-[14px] w-full outline-none"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
          </div>

          <div className="flex flex-col gap-[8px]">
            <label className="text-[#3f2578] text-[18px] font-bold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>
              Frekvence placení
            </label>
            <div className="flex gap-[8px] flex-wrap">
              {FREQUENCY_OPTIONS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFrekvence(f.id)}
                  className={`px-[16px] py-[10px] rounded-[8px] border text-[14px] font-semibold transition-colors ${
                    frekvence === f.id ? 'border-[#3f2578] bg-[#f5f3ff] text-[#3f2578]' : 'border-[#e2e9f0] bg-white text-[#64748b]'
                  }`}
                  style={{ fontFamily: "'Mona Sans', sans-serif" }}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[12px]">
            <label className="text-[#3f2578] text-[18px] font-bold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>
              Krytí
            </label>
            {COVERAGE_OPTIONS.map((opt) => (
              <label
                key={opt.id}
                className={`flex items-center justify-between p-[12px] rounded-[8px] border cursor-pointer ${
                  selectedCoverage.has(opt.id) ? 'border-[#3f2578] bg-[#f5f3ff]' : 'border-[#e2e9f0] bg-white'
                }`}
              >
                <div className="flex items-center gap-[12px]">
                  <input
                    type="checkbox"
                    checked={selectedCoverage.has(opt.id)}
                    onChange={() => toggleCoverage(opt.id)}
                    className="rounded border-[#3f2578]"
                  />
                  <span className="text-[#3f2578] font-semibold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>{opt.label}</span>
                </div>
                <span className="text-[#64748b] text-[14px]" style={{ fontFamily: "'Inter', sans-serif" }}>{opt.amount}</span>
              </label>
            ))}
          </div>

          <button
            type="button"
            onClick={() => navigate('/pojisteni/zivot/obmyvatel')}
            className="flex h-[48px] items-center justify-center px-[20px] py-[12px] rounded-[12px] w-full mt-[8px]"
            style={{ backgroundImage: 'linear-gradient(263.127deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%)' }}
          >
            <span className="text-white text-[16px] font-bold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Pokračovat</span>
          </button>
        </div>
      </div>
    </div>
  );
}
