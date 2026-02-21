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

export function LifeStep1() {
  const navigate = useNavigate();
  const [jmeno, setJmeno] = useState('');
  const [datumNarozeni, setDatumNarozeni] = useState('');
  const [rodneCislo, setRodneCislo] = useState('');
  const [email, setEmail] = useState('');
  const [telefon, setTelefon] = useState('');
  const [ulice, setUlice] = useState('');
  const [mesto, setMesto] = useState('');
  const [psc, setPsc] = useState('');
  const [stat, setStat] = useState('Česká republika');

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
        <Progress current={1} />

        <div className="flex flex-col gap-[16px] w-full max-w-[560px]">
          <div className="flex flex-col gap-[8px]">
            <label className="text-[#3f2578] text-[18px] font-bold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>
              Jméno a příjmení <span className="text-[#d60021]">*</span>
            </label>
            <input
              type="text"
              value={jmeno}
              onChange={(e) => setJmeno(e.target.value)}
              placeholder="Jan Novák"
              className="border border-[#e2e9f0] h-[40px] px-[12px] rounded-[8px] text-[14px] text-[#3f2578] placeholder:text-[#94a3b8] w-full outline-none"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
          </div>
          <div className="flex gap-[12px]">
            <div className="flex flex-col gap-[8px] flex-1">
              <label className="text-[#3f2578] text-[18px] font-bold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>
                Datum narození <span className="text-[#d60021]">*</span>
              </label>
              <input
                type="date"
                value={datumNarozeni}
                onChange={(e) => setDatumNarozeni(e.target.value)}
                className="border border-[#e2e9f0] h-[40px] px-[12px] rounded-[8px] text-[14px] w-full outline-none"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </div>
            <div className="flex flex-col gap-[8px] flex-1">
              <label className="text-[#3f2578] text-[18px] font-bold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>
                Rodné číslo <span className="text-[#d60021]">*</span>
              </label>
              <input
                type="text"
                value={rodneCislo}
                onChange={(e) => setRodneCislo(e.target.value)}
                placeholder="000101/1234"
                className="border border-[#e2e9f0] h-[40px] px-[12px] rounded-[8px] text-[14px] w-full outline-none"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <label className="text-[#3f2578] text-[18px] font-bold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>
              E-mail <span className="text-[#d60021]">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jan.novak@email.cz"
              className="border border-[#e2e9f0] h-[40px] px-[12px] rounded-[8px] text-[14px] w-full outline-none"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
          </div>
          <div className="flex flex-col gap-[8px]">
            <label className="text-[#3f2578] text-[18px] font-bold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>
              Telefon <span className="text-[#d60021]">*</span>
            </label>
            <input
              type="tel"
              value={telefon}
              onChange={(e) => setTelefon(e.target.value)}
              placeholder="+420 123 456 789"
              className="border border-[#e2e9f0] h-[40px] px-[12px] rounded-[8px] text-[14px] w-full outline-none"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
          </div>

          <p className="text-[#3f2578] text-[18px] font-bold pt-[8px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>
            Adresa
          </p>
          <div className="flex flex-col gap-[8px]">
            <label className="text-[#3f2578] text-[16px] font-semibold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>
              Ulice a číslo popisné
            </label>
            <input
              type="text"
              value={ulice}
              onChange={(e) => setUlice(e.target.value)}
              placeholder="Hlavní 123"
              className="border border-[#e2e9f0] h-[40px] px-[12px] rounded-[8px] text-[14px] w-full outline-none"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
          </div>
          <div className="flex gap-[12px]">
            <div className="flex flex-col gap-[8px] flex-1">
              <label className="text-[#3f2578] text-[16px] font-semibold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Město</label>
              <input
                type="text"
                value={mesto}
                onChange={(e) => setMesto(e.target.value)}
                placeholder="Praha"
                className="border border-[#e2e9f0] h-[40px] px-[12px] rounded-[8px] text-[14px] w-full outline-none"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </div>
            <div className="flex flex-col gap-[8px] w-[120px]">
              <label className="text-[#3f2578] text-[16px] font-semibold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>PSČ</label>
              <input
                type="text"
                value={psc}
                onChange={(e) => setPsc(e.target.value)}
                placeholder="110 00"
                className="border border-[#e2e9f0] h-[40px] px-[12px] rounded-[8px] text-[14px] w-full outline-none"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <label className="text-[#3f2578] text-[16px] font-semibold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Stát</label>
            <input
              type="text"
              value={stat}
              onChange={(e) => setStat(e.target.value)}
              className="border border-[#e2e9f0] h-[40px] px-[12px] rounded-[8px] text-[14px] w-full outline-none"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
          </div>

          <button
            type="button"
            onClick={() => navigate('/pojisteni/zivot/zdravi')}
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
