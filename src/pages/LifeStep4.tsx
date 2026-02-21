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

const VTTAH_OPTIONS = [
  { id: 'partner', label: 'Partner/ka' },
  { id: 'dite', label: 'Dítě' },
  { id: 'rodic', label: 'Rodič' },
  { id: 'sourozenec', label: 'Sourozenec' },
  { id: 'jiny', label: 'Jiný' },
];

export function LifeStep4() {
  const navigate = useNavigate();
  const [beneficiaries, setBeneficiaries] = useState([
    { jmeno: '', datumNarozeni: '', vztah: '' },
  ]);

  const addBeneficiary = () => {
    setBeneficiaries((prev) => [...prev, { jmeno: '', datumNarozeni: '', vztah: '' }]);
  };

  const updateBeneficiary = (index: number, field: 'jmeno' | 'datumNarozeni' | 'vztah', value: string) => {
    setBeneficiaries((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
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
        <Progress current={4} />

        <div className="flex flex-col gap-[20px] w-full max-w-[560px]">
          <p className="text-[#3f2578] text-[18px] font-bold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>
            Obmyvatelé (příjemci plnění)
          </p>

          {beneficiaries.map((b, index) => (
            <div key={index} className="border border-[#edf2f7] flex flex-col gap-[12px] p-[20px] rounded-[12px] bg-[#f8fafc]">
              <span className="text-[#64748b] text-[14px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                Obmyvatel {index + 1}
              </span>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#3f2578] text-[14px] font-semibold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Jméno a příjmení</label>
                <input
                  type="text"
                  value={b.jmeno}
                  onChange={(e) => updateBeneficiary(index, 'jmeno', e.target.value)}
                  placeholder="Marie Nováková"
                  className="border border-[#e2e9f0] h-[40px] px-[12px] rounded-[8px] text-[14px] w-full outline-none bg-white"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>
              <div className="flex gap-[12px]">
                <div className="flex flex-col gap-[8px] flex-1">
                  <label className="text-[#3f2578] text-[14px] font-semibold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Datum narození</label>
                  <input
                    type="date"
                    value={b.datumNarozeni}
                    onChange={(e) => updateBeneficiary(index, 'datumNarozeni', e.target.value)}
                    className="border border-[#e2e9f0] h-[40px] px-[12px] rounded-[8px] text-[14px] w-full outline-none bg-white"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
                <div className="flex flex-col gap-[8px] flex-1">
                  <label className="text-[#3f2578] text-[14px] font-semibold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Vztah k pojištěnému</label>
                  <select
                    value={b.vztah}
                    onChange={(e) => updateBeneficiary(index, 'vztah', e.target.value)}
                    className="border border-[#e2e9f0] h-[40px] px-[12px] rounded-[8px] text-[14px] w-full outline-none bg-white"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <option value="">Vyberte...</option>
                    {VTTAH_OPTIONS.map((v) => (
                      <option key={v.id} value={v.id}>{v.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addBeneficiary}
            className="flex items-center justify-center gap-[8px] text-[#3f2578] text-[14px] font-semibold py-[12px] border-2 border-dashed border-[#e2e9f0] rounded-[8px] hover:border-[#3f2578] hover:bg-[#f5f3ff]"
            style={{ fontFamily: "'Mona Sans', sans-serif" }}
          >
            + Přidat dalšího obmyvatele
          </button>

          <button
            type="button"
            onClick={() => navigate('/pojisteni/zivot/shrnuti')}
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
