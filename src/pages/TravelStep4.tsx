import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GradientHeading } from '../components/ui';

const STEPS = ['Cesta', 'Výběr pojištění', 'Osobní údaje', 'Platba'];

export function TravelStep4() {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  return (
    <div className="bg-white flex flex-col gap-6 items-center p-6 w-full min-h-screen">
      <GradientHeading size="lg" className="w-full">
        Online sjednání cestovního pojištění
      </GradientHeading>

      {/* Step Progress */}
      <div className="flex items-center gap-4">
        {STEPS.map((step, i) => (
          <div key={step} className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                i < 3 ? 'bg-[#34c759]' : 'bg-[#3f2578]'
              }`}>
                {i < 3 ? (
                  <span className="text-white text-[10px]">✓</span>
                ) : (
                  <div className="w-2 h-2 bg-white rounded-full" />
                )}
              </div>
              <span className="font-mona font-medium text-[16px] text-[#020617]">
                {step}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <span className="text-[#94a3b8]">›</span>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-6 w-full max-w-[497px]">
        {/* Summary */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <h3 className="font-mona font-bold text-[18px] text-[#3f2578]">Shrnutí</h3>
            <span className="font-mona font-bold text-[18px] text-[#3f2578]">Axa Premium</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <span className="text-[#3f2578]">📍</span>
              <span className="font-mona font-medium text-[16px] text-[#3f2578]">Albánie</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#3f2578]">👤</span>
              <span className="font-mona font-medium text-[16px] text-[#3f2578]">1 Osoba</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#3f2578]">📅</span>
              <span className="font-mona font-medium text-[16px] text-[#3f2578]">Datum - datum (x dny)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#3f2578]">🏄</span>
              <span className="font-mona font-medium text-[16px] text-[#3f2578]">Zimní sporty včetně lyžování a lyžařské výbavy</span>
            </div>
          </div>
        </div>

        {/* Shrnutí objednávky */}
        <div className="flex flex-col gap-4 p-6 rounded-xl border border-[#e2e9f0] bg-white shadow-sm">
          <h3 className="font-mona font-bold text-[18px] text-[#3f2578]">Shrnutí objednávky</h3>
          
          <div className="flex justify-between">
            <span className="font-mona text-[16px] text-[#3f2578]">Pojištění</span>
            <span className="font-mona font-bold text-[16px] text-[#3f2578]">AXA Comfort premium</span>
          </div>
          
          <div className="flex justify-between">
            <span className="font-mona text-[16px] text-[#3f2578]">Storno zájezdu</span>
            <span className="font-mona font-bold text-[16px] text-[#3f2578]">310 Kč</span>
          </div>
          
          <div className="flex justify-between">
            <span className="font-mona text-[16px] text-[#3f2578]">Adrenalinové sporty</span>
            <span className="font-mona font-bold text-[16px] text-[#3f2578]">62 Kč</span>
          </div>
          
          <div className="flex justify-between">
            <span className="font-mona text-[16px] text-[#3f2578]">Drink povolen</span>
            <span className="font-mona font-bold text-[16px] text-[#3f2578]">10 Kč</span>
          </div>
          
          <div className="h-px bg-[#e2e9f0] w-full" />
          
          <div className="flex justify-between">
            <span className="font-mona font-bold text-[20px] text-[#3f2578]">Celková cena</span>
            <span className="font-mona font-bold text-[20px] text-[#3f2578]">507 Kč</span>
          </div>
        </div>

        {/* Platební údaje */}
        <div className="flex flex-col gap-3 p-6 rounded-xl border border-[#e2e9f0] bg-white shadow-sm">
          <h3 className="font-mona font-bold text-[18px] text-[#3f2578]">Platební údaje</h3>
          
          <input
            type="text"
            placeholder="Číslo karty"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="h-10 px-3 rounded-lg border border-[#e2e9f0] shadow-sm font-mona text-[14px] text-[#94a3b8] placeholder:text-[#94a3b8] outline-none focus:border-[#3f2578]"
          />
          
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="MM/RR"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              className="flex-1 h-10 px-3 rounded-lg border border-[#e2e9f0] shadow-sm font-mona text-[14px] text-[#94a3b8] placeholder:text-[#94a3b8] outline-none focus:border-[#3f2578]"
            />
            <input
              type="text"
              placeholder="CVC"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              className="w-[100px] h-10 px-3 rounded-lg border border-[#e2e9f0] shadow-sm font-mona text-[14px] text-[#94a3b8] placeholder:text-[#94a3b8] outline-none focus:border-[#3f2578]"
            />
          </div>
        </div>

        {/* Souhlas */}
        <label className="flex gap-3 items-start cursor-pointer p-1">
          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${agreed ? 'border-[#34c759] bg-[#34c759]' : 'border-[#94a3b8]'}`}>
            {agreed && <span className="text-white text-[12px]">✓</span>}
          </div>
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="sr-only"
          />
          <span className="font-mona text-[14px] text-[#334155]">
            Souhlasím s <span className="underline text-[#3f2578]">obchodními podmínkami</span> a <span className="underline text-[#3f2578]">ochranou osobních údajů</span>
          </span>
        </label>

        {/* CTA Button */}
        <button
          type="button"
          onClick={() => navigate('/')}
          disabled={!agreed}
          className={`h-12 px-5 rounded-xl font-mona font-medium text-[16px] text-white transition-opacity ${!agreed ? 'opacity-50 cursor-not-allowed' : ''}`}
          style={{ backgroundImage: 'linear-gradient(263deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%)' }}
        >
          Zaplatit 507 Kč
        </button>
      </div>
    </div>
  );
}
