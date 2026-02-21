import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function TravelStep4() {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);

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
        {/* Progress - step 4 active */}
        <div className="flex items-center justify-center gap-[12px] w-full">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center gap-[12px]">
              <div className="flex flex-col items-center gap-[8px]">
                <div className="bg-[#3f2578] flex items-center justify-center rounded-full size-[40px]">
                  <span className="text-white font-bold text-[16px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>{step}</span>
                </div>
                <span className="text-[#3f2578] font-bold text-[14px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>
                  {step === 1 ? 'Vyplnění' : step === 2 ? 'Nabídky' : step === 3 ? 'Údaje' : 'Platba'}
                </span>
              </div>
              {step < 4 && <div className="h-[2px] w-[80px] bg-[#3f2578]" />}
            </div>
          ))}
        </div>

        <div className="bg-[#f1f5f9] flex gap-[24px] items-center px-[16px] py-[12px] rounded-[8px] w-full flex-wrap">
          <span className="text-[14px] text-[#64748b]" style={{ fontFamily: "'Inter', sans-serif" }}>Datum: 1.10. – 10.10.</span>
          <span className="text-[14px] text-[#64748b]" style={{ fontFamily: "'Inter', sans-serif" }}>Destinace: Německo</span>
        </div>

        <div className="flex flex-col gap-[24px] w-full max-w-[600px]">
          <div className="border border-[#edf2f7] flex flex-col gap-[16px] p-[24px] rounded-[12px]">
            <h3 className="text-[#3f2578] text-[20px] font-bold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Shrnutí objednávky</h3>
            <div className="flex justify-between text-[14px]" style={{ fontFamily: "'Inter', sans-serif" }}>
              <span className="text-[#64748b]">Pojištění</span>
              <span className="text-[#3f2578] font-semibold">Cestovní pojištění Standard</span>
            </div>
            <div className="flex justify-between text-[14px]" style={{ fontFamily: "'Inter', sans-serif" }}>
              <span className="text-[#64748b]">Asistenční služby</span>
              <span className="text-[#3f2578] font-semibold">—</span>
            </div>
            <div className="border-t border-[#e2e9f0] pt-[12px] flex justify-between text-[18px] font-bold text-[#3f2578]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>
              <span>Celková cena</span>
              <span>780 Kč</span>
            </div>
          </div>

          <div className="border border-[#edf2f7] flex flex-col gap-[12px] p-[24px] rounded-[12px]">
            <h3 className="text-[#3f2578] text-[18px] font-bold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Platební údaje</h3>
            <input
              type="text"
              placeholder="Číslo karty"
              className="border border-[#e2e9f0] h-[40px] px-[12px] rounded-[8px] text-[14px] w-full outline-none"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
            <div className="flex gap-[12px]">
              <input
                type="text"
                placeholder="Platnost"
                className="border border-[#e2e9f0] h-[40px] px-[12px] rounded-[8px] text-[14px] flex-1 outline-none"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
              <input
                type="text"
                placeholder="CVC"
                className="border border-[#e2e9f0] h-[40px] px-[12px] rounded-[8px] text-[14px] w-[80px] outline-none"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </div>
          </div>

          <label className="flex gap-[12px] items-start cursor-pointer">
            <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-1" />
            <span className="text-[14px] text-[#64748b]" style={{ fontFamily: "'Inter', sans-serif" }}>
              Souhlasím s podmínkami a poučením
            </span>
          </label>

          <button
            type="button"
            disabled={!agreed}
            onClick={() => navigate('/')}
            className={`flex h-[48px] items-center justify-center px-[20px] py-[12px] rounded-[12px] w-full ${!agreed ? 'opacity-50 cursor-not-allowed' : ''}`}
            style={{ backgroundImage: 'linear-gradient(263.127deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%)' }}
          >
            <span className="text-white text-[16px] font-bold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Zaplatit</span>
          </button>
        </div>
      </div>
    </div>
  );
}
