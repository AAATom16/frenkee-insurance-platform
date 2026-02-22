import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TRAVELER_TYPES = [
  { id: 'jednotlivec', label: 'Jednotlivec' },
  { id: 'rodina', label: 'Rodina' },
  { id: 'skupina', label: 'Skupina' },
];

const TRAVEL_REASONS = [
  { id: 'rekreace', label: 'Rekreace' },
  { id: 'pracovni', label: 'Pracovní' },
  { id: 'sport', label: 'Sport' },
  { id: 'jine', label: 'Jiné' },
];

export function TravelStep1() {
  const navigate = useNavigate();
  const [travelerType, setTravelerType] = useState('jednotlivec');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [destination, setDestination] = useState('');
  const [reason, setReason] = useState('');

  const handleContinue = () => {
    navigate('/pojisteni/cestovani/nabidky');
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
        <p className="leading-none whitespace-pre-wrap">Online pojištění cestování</p>
      </div>

      <p
        className="flex flex-col justify-center leading-[0] text-[16px] text-[#3f2578] text-center w-full"
        style={{ fontFamily: "'Mona Sans', sans-serif", fontWeight: 700 }}
      >
        4 kroky k pojištění vaší cesty
      </p>

      <div className="flex flex-col gap-6 items-center overflow-clip px-4 md:px-12 lg:px-[99px] py-6 relative w-full max-w-[1000px]">
        {/* Progress indicator */}
        <div className="flex items-center justify-center gap-[12px] relative w-full">
          <div className="flex flex-col items-center gap-[8px]">
            <div className="bg-[#3f2578] flex items-center justify-center rounded-full size-[40px]">
              <span className="text-white font-bold text-[16px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>1</span>
            </div>
            <span className="text-[#3f2578] font-bold text-[14px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Vyplnění</span>
          </div>
          <div className="bg-[#e2e9f0] h-[2px] w-[80px]" />
          <div className="flex flex-col items-center gap-[8px]">
            <div className="bg-[#e2e9f0] flex items-center justify-center rounded-full size-[40px]">
              <span className="text-[#94a3b8] font-bold text-[16px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>2</span>
            </div>
            <span className="text-[#94a3b8] font-bold text-[14px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Nabídky</span>
          </div>
          <div className="bg-[#e2e9f0] h-[2px] w-[80px]" />
          <div className="flex flex-col items-center gap-[8px]">
            <div className="bg-[#e2e9f0] flex items-center justify-center rounded-full size-[40px]">
              <span className="text-[#94a3b8] font-bold text-[16px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>3</span>
            </div>
            <span className="text-[#94a3b8] font-bold text-[14px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Údaje</span>
          </div>
          <div className="bg-[#e2e9f0] h-[2px] w-[80px]" />
          <div className="flex flex-col items-center gap-[8px]">
            <div className="bg-[#e2e9f0] flex items-center justify-center rounded-full size-[40px]">
              <span className="text-[#94a3b8] font-bold text-[16px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>4</span>
            </div>
            <span className="text-[#94a3b8] font-bold text-[14px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Platba</span>
          </div>
        </div>

        {/* Kdo cestuje? */}
        <div className="flex flex-col gap-[12px] items-start w-full">
          <p className="text-[#3f2578] text-[18px] font-bold leading-[1.6]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>
            Kdo cestuje?
          </p>
          <div className="flex gap-[12px] items-center flex-wrap">
            {TRAVELER_TYPES.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTravelerType(t.id)}
                className={`flex gap-[8px] items-center justify-center px-[16px] py-[12px] rounded-[12px] border-2 transition-colors ${
                  travelerType === t.id
                    ? 'border-[#3f2578] bg-[#f5f3ff]'
                    : 'border-[#e2e9f0] bg-white hover:border-[#c7d2fe]'
                }`}
              >
                <span className="text-[16px] font-semibold" style={{ fontFamily: "'Mona Sans', sans-serif", color: travelerType === t.id ? '#3f2578' : '#64748b' }}>
                  {t.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Datum od / Datum do */}
        <div className="flex gap-[12px] items-start w-full">
          <div className="bg-white border border-[#edf2f7] flex flex-1 flex-col gap-[8px] p-[12px] rounded-[12px]">
            <label className="text-[#3f2578] text-[18px] font-bold leading-[1.6]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>
              Datum od <span className="text-[#d60021]">*</span>
            </label>
            <input
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              className="border border-[#e2e9f0] h-[40px] px-[12px] rounded-[8px] text-[14px] text-[#3f2578] placeholder:text-[#94a3b8] w-full outline-none focus:ring-2 focus:ring-[#3f2578]/30"
              style={{ fontFamily: "'Mona Sans', sans-serif", fontWeight: 600 }}
            />
          </div>
          <div className="bg-white border border-[#edf2f7] flex flex-1 flex-col gap-[8px] p-[12px] rounded-[12px]">
            <label className="text-[#3f2578] text-[18px] font-bold leading-[1.6]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>
              Datum do <span className="text-[#d60021]">*</span>
            </label>
            <input
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className="border border-[#e2e9f0] h-[40px] px-[12px] rounded-[8px] text-[14px] text-[#3f2578] placeholder:text-[#94a3b8] w-full outline-none focus:ring-2 focus:ring-[#3f2578]/30"
              style={{ fontFamily: "'Mona Sans', sans-serif", fontWeight: 600 }}
            />
          </div>
        </div>

        {/* Destinace */}
        <div className="flex flex-col gap-[8px] items-start w-full">
          <label className="text-[#3f2578] text-[18px] font-bold leading-[1.6]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>
            Destinace <span className="text-[#d60021]">*</span>
          </label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="např. Německo, Itálie"
            className="border border-[#e2e9f0] h-[40px] px-[12px] rounded-[8px] text-[14px] text-[#3f2578] placeholder:text-[#94a3b8] w-full outline-none focus:ring-2 focus:ring-[#3f2578]/30 shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]"
            style={{ fontFamily: "'Mona Sans', sans-serif", fontWeight: 600 }}
          />
        </div>

        {/* Důvod cesty */}
        <div className="flex flex-col gap-[8px] items-start w-full">
          <label className="text-[#3f2578] text-[18px] font-bold leading-[1.6]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>
            Důvod cesty
          </label>
          <div className="flex gap-[8px] items-center flex-wrap">
            {TRAVEL_REASONS.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setReason(r.id)}
                className={`flex items-center justify-center px-[16px] py-[10px] rounded-[8px] border transition-colors ${
                  reason === r.id ? 'border-[#3f2578] bg-[#f5f3ff] text-[#3f2578]' : 'border-[#e2e9f0] bg-white text-[#64748b] hover:border-[#c7d2fe]'
                }`}
              >
                <span className="text-[14px] font-semibold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>
                  {r.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button
          type="button"
          onClick={handleContinue}
          className="flex h-[48px] items-center justify-center px-[20px] py-[12px] rounded-[12px] w-full max-w-[400px]"
          style={{ backgroundImage: 'linear-gradient(263.127deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%)' }}
        >
          <span className="text-white text-[16px] font-bold leading-[1.6]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>
            Přejít k výběru
          </span>
        </button>
      </div>
    </div>
  );
}
