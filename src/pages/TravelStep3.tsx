import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const imgIconLocation = '/assets/icon-location.svg';
const imgIconUser = '/assets/icon-user.svg';
const imgIconCalendar = '/assets/icon-calendar.svg';
const imgIconSurfboard = '/assets/icon-surfboard.svg';
const imgIconCheck = '/assets/icon-check.svg';

const STEPS = ['Cesta', 'Výběr pojištění', 'Osobní údaje', 'Platba'];

export function TravelStep3() {
  const navigate = useNavigate();
  const [personType, setPersonType] = useState<'private' | 'company'>('private');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthNumber, setBirthNumber] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="bg-white flex flex-col gap-6 items-center p-6 w-full min-h-screen">
      {/* Title */}
      <h1
        className="font-mona font-extrabold text-[48px] tracking-[-1px] text-center bg-clip-text"
        style={{
          backgroundImage: 'linear-gradient(232deg, rgb(167, 82, 169) 27%, rgb(63, 37, 120) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Online sjednání cestovního pojištění
      </h1>

      {/* Step Progress */}
      <div className="flex items-center gap-4 py-8">
        {STEPS.map((step, i) => (
          <div key={step} className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  i < 2 ? 'bg-[#34c759]' : i === 2 ? 'bg-[#3f2578]' : 'bg-[#e2e9f0]'
                }`}
              >
                {i < 2 ? (
                  <img src={imgIconCheck} alt="" className="w-[10px] h-[10px]" />
                ) : i === 2 ? (
                  <div className="w-2 h-2 bg-white rounded-full" />
                ) : (
                  <div className="w-2 h-2 bg-[#94a3b8] rounded-full" />
                )}
              </div>
              <span
                className={`font-mona font-medium text-[16px] ${
                  i <= 2 ? 'text-[#020617]' : 'text-[#94a3b8]'
                }`}
              >
                {step}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <span className="text-[#94a3b8]">›</span>
            )}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="flex flex-col gap-6 items-center px-[99px] py-6 w-[492px]">
        {/* Summary */}
        <div className="flex flex-col gap-[10px] w-full">
          <div className="flex justify-between items-center w-full">
            <span className="font-mona font-bold text-[18px] text-[#3f2578]">Shrnutí</span>
            <span className="font-mona font-bold text-[18px] text-[#3f2578]">Axa Premium</span>
          </div>
          <div className="flex flex-wrap gap-[10px]">
            <div className="flex items-center gap-[10px]">
              <div className="w-6 h-6 relative">
                <img src={imgIconLocation} alt="" className="absolute inset-[8.33%_12.5%_7.64%_12.5%]" />
              </div>
              <span className="font-mona font-medium text-[16px] text-[#3f2578]">Albánie</span>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="w-6 h-6 relative">
                <img src={imgIconUser} alt="" className="absolute inset-[8.33%_12.5%]" />
              </div>
              <span className="font-mona font-medium text-[16px] text-[#3f2578]">1 Osoba</span>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="w-6 h-6 relative">
                <img src={imgIconCalendar} alt="" className="absolute inset-[12.5%]" />
              </div>
              <span className="font-mona font-medium text-[16px] text-[#3f2578]">Datum - datum (x dny)</span>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="w-6 h-6 relative">
                <img src={imgIconSurfboard} alt="" className="absolute inset-[15.53%_15.53%_9.67%_9.66%]" />
              </div>
              <span className="font-mona font-medium text-[16px] text-[#3f2578]">
                Zimní sporty včetně lyžování a lyžařské výbavy
              </span>
            </div>
          </div>
        </div>

        {/* Person type selection */}
        <div className="flex flex-col gap-2 w-full">
          <span className="font-mona font-bold text-[18px] text-[#3f2578]">Jsem</span>
          <div className="flex gap-6 items-center">
            <label className="flex items-center gap-2 cursor-pointer p-[2px]">
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  personType === 'private' ? 'border-[#34c759] bg-[#34c759]' : 'border-[#94a3b8]'
                }`}
              >
                {personType === 'private' && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
              </div>
              <input
                type="radio"
                name="personType"
                value="private"
                checked={personType === 'private'}
                onChange={() => setPersonType('private')}
                className="sr-only"
              />
              <span className="font-mona font-medium text-[16px] text-[#334155]">Soukromá osoba</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer p-[2px]">
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  personType === 'company' ? 'border-[#34c759] bg-[#34c759]' : 'border-[#94a3b8]'
                }`}
              >
                {personType === 'company' && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
              </div>
              <input
                type="radio"
                name="personType"
                value="company"
                checked={personType === 'company'}
                onChange={() => setPersonType('company')}
                className="sr-only"
              />
              <span className="font-mona font-medium text-[16px] text-[#334155]">Firma</span>
            </label>
          </div>
        </div>

        {/* Name fields */}
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center gap-1">
            <span className="font-mona font-medium text-[18px] text-[#3f2578]">Jméno</span>
            <span className="text-[14px] text-[#d60021]">*</span>
          </div>
          <input
            type="text"
            placeholder="Jméno"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            className="h-10 px-3 bg-white border border-[#e2e9f0] rounded-lg shadow-sm font-mona text-[14px] text-[#020617] placeholder:text-[#94a3b8] outline-none focus:border-[#3f2578]"
          />
          <input
            type="text"
            placeholder="Přijmení"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            className="h-10 px-3 bg-white border border-[#e2e9f0] rounded-lg shadow-sm font-mona text-[14px] text-[#020617] placeholder:text-[#94a3b8] outline-none focus:border-[#3f2578]"
          />
        </div>

        {/* Birth number */}
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center gap-1">
            <span className="font-mona font-medium text-[18px] text-[#3f2578]">Rodné cíšlo</span>
            <span className="text-[14px] text-[#d60021]">*</span>
          </div>
          <input
            type="text"
            placeholder="rodné číslo"
            value={birthNumber}
            onChange={e => setBirthNumber(e.target.value)}
            className="h-10 px-3 bg-white border border-[#e2e9f0] rounded-lg shadow-sm font-mona text-[14px] text-[#020617] placeholder:text-[#94a3b8] outline-none focus:border-[#3f2578]"
          />
        </div>

        {/* Address */}
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center gap-2">
            <span className="font-mona font-medium text-[18px] text-[#3f2578]">Adresa</span>
            <span className="text-[14px] text-[#d60021]">*</span>
          </div>
          <div className="bg-white rounded-xl shadow-sm flex flex-col">
            <div className="h-10 px-3 border border-[#e2e9f0] rounded-t-xl flex items-center gap-2">
              <input
                type="text"
                placeholder="Adresa"
                value={address}
                onChange={e => setAddress(e.target.value)}
                className="flex-1 font-mona text-[14px] text-[#020617] placeholder:text-[#94a3b8] outline-none"
              />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <div className="h-10 px-3 border-x border-b border-[#e2e9f0] flex items-center gap-2">
              <input
                type="text"
                placeholder="Země původu"
                value={country}
                onChange={e => setCountry(e.target.value)}
                className="flex-1 font-mona text-[14px] text-[#020617] placeholder:text-[#94a3b8] outline-none"
              />
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <div className="h-10 px-3 border-x border-b border-[#e2e9f0] flex items-center gap-2">
              <input
                type="text"
                placeholder="Stát"
                value={state}
                onChange={e => setState(e.target.value)}
                className="flex-1 font-mona text-[14px] text-[#020617] placeholder:text-[#94a3b8] outline-none"
              />
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <div className="flex">
              <div className="flex-1 h-10 px-3 border-l border-b border-[#e2e9f0] rounded-bl-xl flex items-center">
                <input
                  type="text"
                  placeholder="Město"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                  className="w-full font-mona font-medium text-[14px] text-[#020617] placeholder:text-[#94a3b8] outline-none"
                />
              </div>
              <div className="flex-1 h-10 px-3 border-x border-b border-[#e2e9f0] rounded-br-xl flex items-center">
                <input
                  type="text"
                  placeholder="Směrovací číslo"
                  value={zipCode}
                  onChange={e => setZipCode(e.target.value)}
                  className="w-full font-mona text-[14px] text-[#020617] placeholder:text-[#94a3b8] outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Contact details */}
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center gap-2">
            <span className="font-mona font-medium text-[18px] text-[#3f2578]">Kontaktní údaje</span>
            <span className="text-[14px] text-[#d60021]">*</span>
          </div>
          <input
            type="tel"
            placeholder="Telefon"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            className="h-10 px-3 bg-white border border-[#e2e9f0] rounded-lg shadow-sm font-mona text-[14px] text-[#020617] placeholder:text-[#94a3b8] outline-none focus:border-[#3f2578]"
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="h-10 px-3 bg-white border border-[#e2e9f0] rounded-lg shadow-sm font-mona text-[14px] text-[#020617] placeholder:text-[#94a3b8] outline-none focus:border-[#3f2578]"
          />
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#e2e9f0]" />

        {/* CTA Button */}
        <button
          type="button"
          onClick={() => navigate('/cestovani/krok-4')}
          className="h-12 px-5 rounded-xl font-mona font-medium text-[16px] text-white"
          style={{
            backgroundImage: 'linear-gradient(263deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%)',
          }}
        >
          Pokračovat
        </button>
      </div>
    </div>
  );
}
