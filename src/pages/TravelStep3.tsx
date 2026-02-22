import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GradientHeading } from '../components/ui';

const STEPS = ['Cesta', 'Výběr pojištění', 'Osobní údaje', 'Platba'];

export function TravelStep3() {
  const navigate = useNavigate();
  const [personType, setPersonType] = useState('soukroma');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    rodneCislo: '',
    address: '',
    country: '',
    state: '',
    city: '',
    zip: '',
    phone: '',
    email: '',
  });

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleContinue = () => {
    navigate('/pojisteni/cestovani/platba');
  };

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
                i < 2 ? 'bg-[#34c759]' : i === 2 ? 'bg-[#3f2578]' : 'bg-[#edf2f7] border border-[#e2e9f0]'
              }`}>
                {i < 2 ? (
                  <span className="text-white text-[10px]">✓</span>
                ) : i === 2 ? (
                  <div className="w-2 h-2 bg-white rounded-full" />
                ) : null}
              </div>
              <span className={`font-mona font-medium text-[16px] ${
                i <= 2 ? 'text-[#020617]' : 'text-[#94a3b8]'
              }`}>
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

        {/* Person Type */}
        <div className="flex flex-col gap-2">
          <h3 className="font-mona font-bold text-[18px] text-[#3f2578]">Jsem</h3>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer p-1">
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${personType === 'soukroma' ? 'border-[#34c759] bg-[#34c759]' : 'border-[#94a3b8]'}`}>
                {personType === 'soukroma' && <div className="w-2 h-2 bg-white rounded-full" />}
              </div>
              <input
                type="radio"
                name="personType"
                value="soukroma"
                checked={personType === 'soukroma'}
                onChange={(e) => setPersonType(e.target.value)}
                className="sr-only"
              />
              <span className="font-mona font-medium text-[16px] text-[#334155]">Soukromá osoba</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer p-1">
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${personType === 'firma' ? 'border-[#34c759] bg-[#34c759]' : 'border-[#94a3b8]'}`}>
                {personType === 'firma' && <div className="w-2 h-2 bg-white rounded-full" />}
              </div>
              <input
                type="radio"
                name="personType"
                value="firma"
                checked={personType === 'firma'}
                onChange={(e) => setPersonType(e.target.value)}
                className="sr-only"
              />
              <span className="font-mona font-medium text-[16px] text-[#334155]">Firma</span>
            </label>
          </div>
        </div>

        {/* Jméno */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <span className="font-mona font-medium text-[18px] text-[#3f2578]">Jméno</span>
            <span className="text-[#d60021] text-[14px]">*</span>
          </div>
          <input
            type="text"
            placeholder="Jméno"
            value={formData.firstName}
            onChange={handleChange('firstName')}
            className="h-10 px-3 rounded-lg border border-[#e2e9f0] shadow-sm font-mona text-[14px] text-[#94a3b8] placeholder:text-[#94a3b8] outline-none focus:border-[#3f2578]"
          />
          <input
            type="text"
            placeholder="Příjmení"
            value={formData.lastName}
            onChange={handleChange('lastName')}
            className="h-10 px-3 rounded-lg border border-[#e2e9f0] shadow-sm font-mona text-[14px] text-[#94a3b8] placeholder:text-[#94a3b8] outline-none focus:border-[#3f2578]"
          />
        </div>

        {/* Rodné číslo */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <span className="font-mona font-medium text-[18px] text-[#3f2578]">Rodné číslo</span>
            <span className="text-[#d60021] text-[14px]">*</span>
          </div>
          <input
            type="text"
            placeholder="rodné číslo"
            value={formData.rodneCislo}
            onChange={handleChange('rodneCislo')}
            className="h-10 px-3 rounded-lg border border-[#e2e9f0] shadow-sm font-mona text-[14px] text-[#94a3b8] placeholder:text-[#94a3b8] outline-none focus:border-[#3f2578]"
          />
        </div>

        {/* Adresa */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <span className="font-mona font-medium text-[18px] text-[#3f2578]">Adresa</span>
            <span className="text-[#d60021] text-[14px]">*</span>
          </div>
          <div className="flex flex-col bg-white shadow-sm rounded-xl overflow-hidden">
            <div className="h-10 px-3 flex items-center border border-[#e2e9f0] rounded-t-xl">
              <input
                type="text"
                placeholder="Adresa"
                value={formData.address}
                onChange={handleChange('address')}
                className="flex-1 font-mona text-[14px] text-[#94a3b8] placeholder:text-[#94a3b8] outline-none bg-transparent"
              />
              <span className="text-[#3f2578]">🔍</span>
            </div>
            <div className="h-10 px-3 flex items-center justify-between border-x border-[#e2e9f0]">
              <input
                type="text"
                placeholder="Země původu"
                value={formData.country}
                onChange={handleChange('country')}
                className="flex-1 font-mona text-[14px] text-[#94a3b8] placeholder:text-[#94a3b8] outline-none bg-transparent"
              />
              <span className="text-[#94a3b8]">▾</span>
            </div>
            <div className="h-10 px-3 flex items-center justify-between border-x border-[#e2e9f0]">
              <input
                type="text"
                placeholder="Stát"
                value={formData.state}
                onChange={handleChange('state')}
                className="flex-1 font-mona text-[14px] text-[#94a3b8] placeholder:text-[#94a3b8] outline-none bg-transparent"
              />
              <span className="text-[#94a3b8]">▾</span>
            </div>
            <div className="flex border border-[#e2e9f0] rounded-b-xl">
              <input
                type="text"
                placeholder="Město"
                value={formData.city}
                onChange={handleChange('city')}
                className="flex-1 h-10 px-3 font-mona text-[14px] text-[#94a3b8] placeholder:text-[#94a3b8] outline-none border-r border-[#e2e9f0]"
              />
              <input
                type="text"
                placeholder="Směrovací číslo"
                value={formData.zip}
                onChange={handleChange('zip')}
                className="flex-1 h-10 px-3 font-mona text-[14px] text-[#94a3b8] placeholder:text-[#94a3b8] outline-none"
              />
            </div>
          </div>
        </div>

        {/* Kontaktní údaje */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <span className="font-mona font-medium text-[18px] text-[#3f2578]">Kontaktní údaje</span>
            <span className="text-[#d60021] text-[14px]">*</span>
          </div>
          <input
            type="tel"
            placeholder="Telefon"
            value={formData.phone}
            onChange={handleChange('phone')}
            className="h-10 px-3 rounded-lg border border-[#e2e9f0] shadow-sm font-mona text-[14px] text-[#94a3b8] placeholder:text-[#94a3b8] outline-none focus:border-[#3f2578]"
          />
          <input
            type="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange('email')}
            className="h-10 px-3 rounded-lg border border-[#e2e9f0] shadow-sm font-mona text-[14px] text-[#94a3b8] placeholder:text-[#94a3b8] outline-none focus:border-[#3f2578]"
          />
        </div>

        <div className="h-px bg-[#e2e9f0] w-full" />

        {/* CTA Button */}
        <button
          type="button"
          onClick={handleContinue}
          className="h-12 px-5 rounded-xl font-mona font-medium text-[16px] text-white"
          style={{ backgroundImage: 'linear-gradient(263deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%)' }}
        >
          Pokračovat
        </button>
      </div>
    </div>
  );
}
