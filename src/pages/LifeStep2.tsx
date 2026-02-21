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

export function LifeStep2() {
  const navigate = useNavigate();
  const [kurak, setKurak] = useState(false);
  const [zamestnani, setZamestnani] = useState('');
  const [vyska, setVyska] = useState('');
  const [vaha, setVaha] = useState('');
  const [vzdelani, setVzdelani] = useState('');

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
        <Progress current={2} />

        <div className="flex flex-col gap-[16px] w-full max-w-[560px]">
          <div className="flex items-center justify-between p-[16px] rounded-[12px] border border-[#edf2f7] bg-[#f8fafc]">
            <span className="text-[#3f2578] text-[18px] font-bold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>
              Je pojištěný kuřák?
            </span>
            <button
              type="button"
              onClick={() => setKurak(!kurak)}
              className={`flex h-[22.5px] items-center rounded-full w-[40.5px] p-[2.25px] transition-colors ${kurak ? 'bg-[#3f2578] justify-end' : 'bg-gray-300 justify-start'}`}
            >
              <div className="bg-white size-[18px] rounded-full shadow-sm" />
            </button>
          </div>

          <div className="flex flex-col gap-[8px]">
            <label className="text-[#3f2578] text-[18px] font-bold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Zaměstnání</label>
            <input
              type="text"
              value={zamestnani}
              onChange={(e) => setZamestnani(e.target.value)}
              placeholder="např. Úředník"
              className="border border-[#e2e9f0] h-[40px] px-[12px] rounded-[8px] text-[14px] w-full outline-none"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
          </div>
          <div className="flex gap-[12px]">
            <div className="flex flex-col gap-[8px] flex-1">
              <label className="text-[#3f2578] text-[18px] font-bold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Výška (cm)</label>
              <input
                type="number"
                value={vyska}
                onChange={(e) => setVyska(e.target.value)}
                placeholder="175"
                className="border border-[#e2e9f0] h-[40px] px-[12px] rounded-[8px] text-[14px] w-full outline-none"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </div>
            <div className="flex flex-col gap-[8px] flex-1">
              <label className="text-[#3f2578] text-[18px] font-bold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Váha (kg)</label>
              <input
                type="number"
                value={vaha}
                onChange={(e) => setVaha(e.target.value)}
                placeholder="70"
                className="border border-[#e2e9f0] h-[40px] px-[12px] rounded-[8px] text-[14px] w-full outline-none"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <label className="text-[#3f2578] text-[18px] font-bold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Vzdělání</label>
            <select
              value={vzdelani}
              onChange={(e) => setVzdelani(e.target.value)}
              className="border border-[#e2e9f0] h-[40px] px-[12px] rounded-[8px] text-[14px] w-full outline-none bg-white"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <option value="">Vyberte...</option>
              <option value="zs">Základní</option>
              <option value="ss">Střední</option>
              <option value="vs">Vysokoškolské</option>
            </select>
          </div>

          <button
            type="button"
            onClick={() => navigate('/pojisteni/zivot/kryti')}
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
