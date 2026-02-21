import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function TravelStep3() {
  const navigate = useNavigate();
  const [pojistnik, setPojistnik] = useState<Record<string, string>>({});
  const [cestujici, setCestujici] = useState<Record<string, string>>({});

  const updatePojistnik = (field: string, value: string) => setPojistnik((p) => ({ ...p, [field]: value }));
  const updateCestujici = (field: string, value: string) => setCestujici((c) => ({ ...c, [field]: value }));

  const fields: { key: string; label: string; type?: string }[] = [
    { key: 'jmeno', label: 'Jméno' },
    { key: 'prijmeni', label: 'Příjmení' },
    { key: 'datumNarozeni', label: 'Datum narození', type: 'date' },
    { key: 'email', label: 'Email', type: 'email' },
    { key: 'telefon', label: 'Telefon', type: 'tel' },
  ];

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
        <p className="leading-none whitespace-pre-wrap">Online pojištění cestování</p>
      </div>
      <p className="text-[#3f2578] text-[16px] font-bold text-center" style={{ fontFamily: "'Mona Sans', sans-serif" }}>
        4 kroky k pojištění vaší cesty
      </p>

      <div className="flex flex-col gap-[24px] items-center px-[99px] py-[24px] w-[1000px] max-w-full">
        {/* Progress - step 3 active */}
        <div className="flex items-center justify-center gap-[12px] w-full">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center gap-[12px]">
              <div className="flex flex-col items-center gap-[8px]">
                <div
                  className={`flex items-center justify-center rounded-full size-[40px] ${step <= 3 ? 'bg-[#3f2578]' : 'bg-[#e2e9f0]'}`}
                >
                  <span
                    className={`font-bold text-[16px] ${step <= 3 ? 'text-white' : 'text-[#94a3b8]'}`}
                    style={{ fontFamily: "'Mona Sans', sans-serif" }}
                  >
                    {step}
                  </span>
                </div>
                <span
                  className={`font-bold text-[14px] ${step <= 3 ? 'text-[#3f2578]' : 'text-[#94a3b8]'}`}
                  style={{ fontFamily: "'Mona Sans', sans-serif" }}
                >
                  {step === 1 ? 'Vyplnění' : step === 2 ? 'Nabídky' : step === 3 ? 'Údaje' : 'Platba'}
                </span>
              </div>
              {step < 4 && <div className={`h-[2px] w-[80px] ${step < 3 ? 'bg-[#3f2578]' : 'bg-[#e2e9f0]'}`} />}
            </div>
          ))}
        </div>

        <div className="bg-[#f1f5f9] flex gap-[24px] items-center px-[16px] py-[12px] rounded-[8px] w-full flex-wrap">
          <span className="text-[14px] text-[#64748b]" style={{ fontFamily: "'Inter', sans-serif" }}>Datum: 1.10. – 10.10.</span>
          <span className="text-[14px] text-[#64748b]" style={{ fontFamily: "'Inter', sans-serif" }}>Destinace: Německo</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] w-full">
          <div className="border border-[#edf2f7] flex flex-col gap-[16px] p-[24px] rounded-[12px]">
            <h3 className="text-[#3f2578] text-[20px] font-bold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Pojistník</h3>
            {fields.map((f) => (
              <div key={f.key} className="flex flex-col gap-[4px]">
                <label className="text-[14px] font-semibold text-[#3f2578]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>{f.label}</label>
                <input
                  type={f.type || 'text'}
                  value={pojistnik[f.key] ?? ''}
                  onChange={(e) => updatePojistnik(f.key, e.target.value)}
                  className="border border-[#e2e9f0] h-[40px] px-[12px] rounded-[8px] text-[14px] text-[#3f2578] w-full outline-none"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>
            ))}
          </div>
          <div className="border border-[#edf2f7] flex flex-col gap-[16px] p-[24px] rounded-[12px]">
            <h3 className="text-[#3f2578] text-[20px] font-bold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Cestující</h3>
            {fields.map((f) => (
              <div key={f.key} className="flex flex-col gap-[4px]">
                <label className="text-[14px] font-semibold text-[#3f2578]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>{f.label}</label>
                <input
                  type={f.type || 'text'}
                  value={cestujici[f.key] ?? ''}
                  onChange={(e) => updateCestujici(f.key, e.target.value)}
                  className="border border-[#e2e9f0] h-[40px] px-[12px] rounded-[8px] text-[14px] text-[#3f2578] w-full outline-none"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>
            ))}
            <button
              type="button"
              className="flex items-center justify-center gap-[8px] text-[#3f2578] text-[14px] font-semibold py-[8px] border border-[#e2e9f0] rounded-[8px] hover:bg-[#f8fafc]"
              style={{ fontFamily: "'Mona Sans', sans-serif" }}
            >
              + Přidat dalšího cestujícího
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={() => navigate('/pojisteni/cestovani/platba')}
          className="flex h-[48px] items-center justify-center px-[20px] py-[12px] rounded-[12px] w-full max-w-[400px]"
          style={{ backgroundImage: 'linear-gradient(263.127deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%)' }}
        >
          <span className="text-white text-[16px] font-bold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Přejít k platbě</span>
        </button>
      </div>
    </div>
  );
}
