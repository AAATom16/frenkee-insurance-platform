import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const STEP_LABELS = ['Osobní údaje', 'Zdraví', 'Krytí', 'Obmyvatelé', 'Shrnutí'];

function Progress() {
  return (
    <div className="flex items-center justify-center gap-[12px] w-full">
      {[1, 2, 3, 4, 5].map((step) => (
        <div key={step} className="flex items-center gap-[12px]">
          <div className="flex flex-col items-center gap-[8px]">
            <div className="bg-[#3f2578] flex items-center justify-center rounded-full size-[40px]">
              <span className="text-white font-bold text-[16px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>{step}</span>
            </div>
            <span className="text-[#3f2578] font-bold text-[14px] whitespace-nowrap" style={{ fontFamily: "'Mona Sans', sans-serif" }}>
              {STEP_LABELS[step - 1]}
            </span>
          </div>
          {step < 5 && <div className="h-[2px] w-[60px] bg-[#3f2578]" />}
        </div>
      ))}
    </div>
  );
}

export function LifeStep5() {
  const navigate = useNavigate();
  const [vop, setVop] = useState(false);
  const [gdpr, setGdpr] = useState(false);

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
        <Progress />

        <div className="flex flex-col gap-[24px] w-full max-w-[560px]">
          <div className="border border-[#edf2f7] flex flex-col gap-[16px] p-[24px] rounded-[12px] bg-[#f8fafc]">
            <h3 className="text-[#3f2578] text-[20px] font-bold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>
              Rekapitulace smlouvy
            </h3>
            <div className="flex justify-between text-[14px]" style={{ fontFamily: "'Inter', sans-serif" }}>
              <span className="text-[#64748b]">Pojištěný</span>
              <span className="text-[#3f2578] font-semibold">Jan Novák</span>
            </div>
            <div className="flex justify-between text-[14px]" style={{ fontFamily: "'Inter', sans-serif" }}>
              <span className="text-[#64748b]">Krytí</span>
              <span className="text-[#3f2578] font-semibold">Invalidita, Úraz, Smrt</span>
            </div>
            <div className="flex justify-between text-[14px]" style={{ fontFamily: "'Inter', sans-serif" }}>
              <span className="text-[#64748b]">Pojistná částka</span>
              <span className="text-[#3f2578] font-semibold">1 000 000 Kč</span>
            </div>
            <div className="flex justify-between text-[14px]" style={{ fontFamily: "'Inter', sans-serif" }}>
              <span className="text-[#64748b]">Doba trvání</span>
              <span className="text-[#3f2578] font-semibold">20 let</span>
            </div>
            <div className="flex justify-between text-[14px]" style={{ fontFamily: "'Inter', sans-serif" }}>
              <span className="text-[#64748b]">Frekvence placení</span>
              <span className="text-[#3f2578] font-semibold">Měsíčně</span>
            </div>
            <div className="border-t border-[#e2e9f0] pt-[12px] flex justify-between text-[18px] font-bold text-[#3f2578]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>
              <span>Měsíční splátka</span>
              <span>754 Kč</span>
            </div>
          </div>

          <label className="flex gap-[12px] items-start cursor-pointer">
            <input type="checkbox" checked={vop} onChange={(e) => setVop(e.target.checked)} className="mt-1" />
            <span className="text-[14px] text-[#64748b]" style={{ fontFamily: "'Inter', sans-serif" }}>
              Souhlasím s VOP a PPO (všeobecné obchodní podmínky a pojistné podmínky)
            </span>
          </label>
          <label className="flex gap-[12px] items-start cursor-pointer">
            <input type="checkbox" checked={gdpr} onChange={(e) => setGdpr(e.target.checked)} className="mt-1" />
            <span className="text-[14px] text-[#64748b]" style={{ fontFamily: "'Inter', sans-serif" }}>
              Souhlasím se zpracováním osobních údajů
            </span>
          </label>

          <button
            type="button"
            disabled={!vop || !gdpr}
            onClick={() => navigate('/')}
            className={`flex h-[48px] items-center justify-center px-[20px] py-[12px] rounded-[12px] w-full ${!vop || !gdpr ? 'opacity-50 cursor-not-allowed' : ''}`}
            style={{ backgroundImage: 'linear-gradient(263.127deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%)' }}
          >
            <span className="text-white text-[16px] font-bold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>
              Přejít k platbě
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
