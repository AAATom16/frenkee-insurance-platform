import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const imgAxaLogo = '/assets/axa-logo-new.png';
const imgTravelSidePerson = '/assets/travel-side-person.png';
const imgIconLocation = '/assets/icon-location.svg';
const imgIconUser = '/assets/icon-user.svg';
const imgIconCalendar = '/assets/icon-calendar.svg';
const imgIconSurfboard = '/assets/icon-surfboard.svg';
const imgIconCheck = '/assets/icon-check.svg';
const imgIconInfo = '/assets/icon-info.svg';

const STEPS = ['Cesta', 'Výběr pojištění', 'Osobní údaje', 'Platba'];

interface Addon {
  id: string;
  name: string;
  price: number;
  enabled: boolean;
  hasInput?: boolean;
  inputValue?: string;
}

interface InsurancePackage {
  id: string;
  name: string;
  limits: {
    lecebneVylohy: string;
    uraz: string;
    odpovednost: boolean;
    pravniAsistence: string;
    zavazadla: string;
  };
  addons: Addon[];
  price: number;
}

const INITIAL_PACKAGES: InsurancePackage[] = [
  {
    id: 'axa-1',
    name: 'AXA Comfort premium',
    limits: {
      lecebneVylohy: '500 000 000 Kč',
      uraz: '1 000 000 Kč',
      odpovednost: true,
      pravniAsistence: '100 000 Kč',
      zavazadla: '60 000 Kč',
    },
    addons: [
      { id: 'storno', name: 'Storno zájezdu', price: 310, enabled: true, hasInput: true, inputValue: '30 000' },
      { id: 'adrenalin', name: 'Adrenalinové sporty', price: 62, enabled: true },
      { id: 'sport-vybaveni', name: 'Sportovní vybavení', price: 0, enabled: false },
      { id: 'drink', name: 'Drink povolen', price: 10, enabled: true },
      { id: 'vozidlo', name: 'Záloha půjčeného vozidla', price: 0, enabled: false },
      { id: 'prace', name: 'Pro práci a studium', price: 0, enabled: false },
    ],
    price: 125,
  },
  {
    id: 'axa-2',
    name: 'AXA Comfort premium',
    limits: {
      lecebneVylohy: '500 000 000 Kč',
      uraz: '1 000 000 Kč',
      odpovednost: true,
      pravniAsistence: '100 000 Kč',
      zavazadla: '60 000 Kč',
    },
    addons: [
      { id: 'storno', name: 'Storno zájezdu', price: 310, enabled: true, hasInput: true, inputValue: '30 000' },
      { id: 'adrenalin', name: 'Adrenalinové sporty', price: 62, enabled: true },
      { id: 'sport-vybaveni', name: 'Sportovní vybavení', price: 0, enabled: false },
      { id: 'drink', name: 'Drink povolen', price: 10, enabled: true },
      { id: 'vozidlo', name: 'Záloha půjčeného vozidla', price: 0, enabled: false },
      { id: 'prace', name: 'Pro práci a studium', price: 0, enabled: false },
    ],
    price: 125,
  },
  {
    id: 'axa-3',
    name: 'AXA Comfort premium',
    limits: {
      lecebneVylohy: '500 000 000 Kč',
      uraz: '1 000 000 Kč',
      odpovednost: true,
      pravniAsistence: '100 000 Kč',
      zavazadla: '60 000 Kč',
    },
    addons: [
      { id: 'storno', name: 'Storno zájezdu', price: 310, enabled: true, hasInput: true, inputValue: '30 000' },
      { id: 'adrenalin', name: 'Adrenalinové sporty', price: 62, enabled: true },
      { id: 'sport-vybaveni', name: 'Sportovní vybavení', price: 0, enabled: false },
      { id: 'drink', name: 'Drink povolen', price: 10, enabled: true },
      { id: 'vozidlo', name: 'Záloha půjčeného vozidla', price: 0, enabled: false },
      { id: 'prace', name: 'Pro práci a studium', price: 0, enabled: false },
    ],
    price: 125,
  },
];

function Toggle({ enabled, onToggle }: { enabled: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`w-[40.5px] h-[22.5px] rounded-full p-[2.25px] flex items-center transition-all ${
        enabled ? 'bg-[#3f2578] justify-end' : 'bg-[#e2e9f0] justify-start'
      }`}
    >
      <div className="w-[18px] h-[18px] bg-white rounded-full shadow-sm" />
    </button>
  );
}

export function TravelStep2() {
  const navigate = useNavigate();
  const [packages, setPackages] = useState<InsurancePackage[]>(INITIAL_PACKAGES);

  const toggleAddon = (pkgId: string, addonId: string) => {
    setPackages(prev =>
      prev.map(pkg => {
        if (pkg.id !== pkgId) return pkg;
        return {
          ...pkg,
          addons: pkg.addons.map(addon =>
            addon.id === addonId ? { ...addon, enabled: !addon.enabled } : addon
          ),
        };
      })
    );
  };

  return (
    <div className="bg-white flex flex-col gap-6 items-center p-6 w-full min-h-screen relative">
      {/* Side illustration */}
      <div className="absolute left-[-152px] top-[506px] w-[512px] h-[768px] hidden xl:flex items-center justify-center">
        <img
          src={imgTravelSidePerson}
          alt=""
          className="w-full h-full object-cover rotate-180 -scale-y-100"
        />
      </div>

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
                  i < 1 ? 'bg-[#34c759]' : i === 1 ? 'bg-[#3f2578]' : 'bg-[#e2e9f0]'
                }`}
              >
                {i < 1 ? (
                  <img src={imgIconCheck} alt="" className="w-[10px] h-[10px]" />
                ) : i === 1 ? (
                  <div className="w-2 h-2 bg-white rounded-full" />
                ) : (
                  <div className="w-2 h-2 bg-[#94a3b8] rounded-full" />
                )}
              </div>
              <span
                className={`font-mona font-medium text-[16px] ${
                  i <= 1 ? 'text-[#020617]' : 'text-[#94a3b8]'
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
      <div className="flex flex-col gap-6 items-center px-[99px] pb-[68px] pt-6">
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

        {/* Limits dropdown */}
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center gap-1">
            <span className="font-mona font-medium text-[18px] text-[#3f2578]">Limity pojištění</span>
            <span className="text-[14px] text-[#d60021]">*</span>
          </div>
          <div className="h-10 px-3 bg-white border border-[#e2e9f0] rounded-lg shadow-sm flex items-center justify-between">
            <span className="font-mona text-[14px] text-[#94a3b8]">...</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Insurance packages */}
        <div className="flex gap-[10px] items-start">
          {packages.map(pkg => (
            <div
              key={pkg.id}
              className="bg-white border border-[#e2e9f0] rounded-xl shadow-md flex flex-col"
            >
              {/* Package content */}
              <div className="flex flex-col gap-[10px] items-center p-3">
                <div className="flex flex-col gap-[10px] items-start py-3">
                  {/* Header */}
                  <div className="flex gap-[10px] items-start w-full">
                    <img src={imgAxaLogo} alt="AXA" className="w-[71px] h-[71px] object-cover" />
                    <span className="font-mona font-bold text-[18px] text-[#3f2578]">{pkg.name}</span>
                  </div>

                  {/* Limits */}
                  <div className="flex flex-col gap-[10px]">
                    <span className="font-mona font-bold text-[18px] text-[#3f2578]">Pojištění</span>

                    <div className="flex justify-between w-[300px]">
                      <span className="font-mona text-[18px] text-[#3f2578]">Léčebné výlohy</span>
                      <span className="font-mona font-bold text-[18px] text-[#3f2578]">{pkg.limits.lecebneVylohy}</span>
                    </div>

                    <div className="flex justify-between w-full">
                      <span className="font-mona text-[18px] text-[#3f2578]">Úraz</span>
                      <span className="font-mona font-bold text-[18px] text-[#3f2578]">{pkg.limits.uraz}</span>
                    </div>

                    <div className="flex justify-between items-center w-full">
                      <span className="font-mona text-[18px] text-[#3f2578]">Odpovědnost</span>
                      <div className="flex items-center gap-1">
                        <img src={imgIconCheck} alt="" className="w-6 h-6" />
                        <span className="font-mona font-bold text-[18px] text-[#3f2578]">Ano</span>
                      </div>
                    </div>

                    <div className="flex justify-between w-full">
                      <span className="font-mona text-[18px] text-[#3f2578]">Právní asistence</span>
                      <span className="font-mona font-bold text-[18px] text-[#3f2578]">{pkg.limits.pravniAsistence}</span>
                    </div>

                    <div className="flex justify-between w-full">
                      <span className="font-mona text-[18px] text-[#3f2578]">Zavazadla</span>
                      <span className="font-mona font-bold text-[18px] text-[#3f2578]">{pkg.limits.zavazadla}</span>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-[#e2e9f0]" />

                {/* Addons */}
                <div className="flex flex-col gap-[10px] w-full">
                  <span className="font-mona font-bold text-[18px] text-[#3f2578]">Připojištění</span>

                  {pkg.addons.map(addon => (
                    <div key={addon.id} className="flex flex-col gap-1">
                      <div className="flex items-center justify-between h-[30px] w-full">
                        <span
                          className={`font-mona text-[18px] ${
                            addon.enabled ? 'text-[#3f2578]' : 'text-[#94a3b8]'
                          }`}
                        >
                          {addon.name}
                        </span>
                        {addon.enabled && addon.price > 0 && (
                          <span className="font-mona font-bold text-[18px] text-[#6aae25]">
                            + {addon.price} Kč
                          </span>
                        )}
                        <Toggle
                          enabled={addon.enabled}
                          onToggle={() => toggleAddon(pkg.id, addon.id)}
                        />
                      </div>
                      {addon.hasInput && addon.enabled && (
                        <div className="h-10 px-3 bg-white border border-[#e2e9f0] rounded-lg shadow-sm flex items-center gap-2">
                          <span className="flex-1 font-mona text-[14px] text-[#94a3b8]">
                            {addon.inputValue}
                          </span>
                          <div className="h-6 w-px bg-[#e2e9f0] rotate-90" />
                          <span className="font-mona text-[14px] text-[#3f2578]">Kč</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-[#e2e9f0]" />

                {/* Terms */}
                <div className="flex items-center justify-between w-full p-[2px]">
                  <span className="font-mona font-medium text-[14px] text-[#334155] underline">
                    Pojistné podmínky
                  </span>
                  <img src={imgIconInfo} alt="" className="w-6 h-6" />
                </div>
              </div>

              {/* Footer */}
              <div className="bg-[#edf2f7] border border-[#e2e9f0] rounded-b-xl p-3 flex flex-col gap-2 items-center">
                <span className="font-mona font-bold text-[18px] text-[#3f2578]">{pkg.price} Kč</span>
                <button
                  type="button"
                  onClick={() => navigate('/cestovani/krok-3')}
                  className="w-full h-12 rounded-xl font-mona font-medium text-[16px] text-white"
                  style={{
                    backgroundImage: 'linear-gradient(254deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%)',
                  }}
                >
                  Pokračovat
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
