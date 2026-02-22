import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GradientHeading } from '../components/ui';

const imgAxaLogo = '/assets/axa-logo.png';
const imgTravelSidePerson = '/assets/travel-side-person.png';

const STEPS = ['Cesta', 'Výběr pojištění', 'Osobní údaje', 'Platba'];

interface InsurancePackage {
  id: string;
  name: string;
  logo: string;
  price: number;
  limits: {
    lecebneVylohy: string;
    uraz: string;
    odpovednost: boolean;
    pravniAsistence: string;
    zavazadla: string;
  };
  addons: {
    id: string;
    name: string;
    price: number;
    enabled: boolean;
    hasInput?: boolean;
    inputValue?: string;
  }[];
}

const PACKAGES: InsurancePackage[] = [
  {
    id: 'axa-premium',
    name: 'AXA Comfort premium',
    logo: imgAxaLogo,
    price: 125,
    limits: {
      lecebneVylohy: '500 000 000 Kč',
      uraz: '1 000 000 Kč',
      odpovednost: true,
      pravniAsistence: '100 000 Kč',
      zavazadla: '60 000 Kč',
    },
    addons: [
      { id: 'storno', name: 'Storno zájezdu', price: 310, enabled: true, hasInput: true, inputValue: '30000' },
      { id: 'adrenalin', name: 'Adrenalinové sporty', price: 62, enabled: true },
      { id: 'sportovni', name: 'Sportovní vybavení', price: 0, enabled: false },
      { id: 'drink', name: 'Drink povolen', price: 10, enabled: true },
      { id: 'vozidlo', name: 'Záloha půjčeného vozidla', price: 0, enabled: false },
      { id: 'prace', name: 'Pro práci a studium', price: 0, enabled: false },
    ],
  },
  {
    id: 'axa-standard',
    name: 'AXA Comfort',
    logo: imgAxaLogo,
    price: 89,
    limits: {
      lecebneVylohy: '100 000 000 Kč',
      uraz: '500 000 Kč',
      odpovednost: true,
      pravniAsistence: '50 000 Kč',
      zavazadla: '30 000 Kč',
    },
    addons: [
      { id: 'storno', name: 'Storno zájezdu', price: 250, enabled: false, hasInput: true, inputValue: '20000' },
      { id: 'adrenalin', name: 'Adrenalinové sporty', price: 45, enabled: false },
      { id: 'sportovni', name: 'Sportovní vybavení', price: 0, enabled: false },
      { id: 'drink', name: 'Drink povolen', price: 8, enabled: false },
      { id: 'vozidlo', name: 'Záloha půjčeného vozidla', price: 0, enabled: false },
      { id: 'prace', name: 'Pro práci a studium', price: 0, enabled: false },
    ],
  },
];

export function TravelStep2() {
  const navigate = useNavigate();
  const [packages, setPackages] = useState(PACKAGES);
  const [_limitFilter, _setLimitFilter] = useState('');

  const toggleAddon = (pkgId: string, addonId: string) => {
    setPackages(prev => prev.map(pkg => {
      if (pkg.id !== pkgId) return pkg;
      return {
        ...pkg,
        addons: pkg.addons.map(addon => 
          addon.id === addonId ? { ...addon, enabled: !addon.enabled } : addon
        ),
      };
    }));
  };

  const calculatePrice = (pkg: InsurancePackage) => {
    const addonsPrice = pkg.addons
      .filter(a => a.enabled && a.price > 0)
      .reduce((sum, a) => sum + a.price, 0);
    return pkg.price + addonsPrice;
  };

  return (
    <div className="bg-white flex flex-col gap-6 items-center p-6 w-full min-h-screen relative overflow-hidden">
      {/* Side illustration */}
      <div className="absolute left-[-150px] top-[500px] w-[512px] h-[768px] -scale-x-100 hidden xl:block">
        <img src={imgTravelSidePerson} alt="" className="w-full h-full object-contain" />
      </div>

      <GradientHeading size="lg" className="w-full">
        Online sjednání cestovního pojištění
      </GradientHeading>

      {/* Step Progress */}
      <div className="flex items-center gap-4">
        {STEPS.map((step, i) => (
          <div key={step} className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                i < 1 ? 'bg-[#34c759]' : i === 1 ? 'bg-[#3f2578]' : 'bg-[#edf2f7] border border-[#e2e9f0]'
              }`}>
                {i < 1 ? (
                  <span className="text-white text-[10px]">✓</span>
                ) : i === 1 ? (
                  <div className="w-2 h-2 bg-white rounded-full" />
                ) : null}
              </div>
              <span className={`font-mona font-medium text-[16px] ${
                i <= 1 ? 'text-[#020617]' : 'text-[#94a3b8]'
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

      <div className="flex flex-col gap-6 w-full max-w-[790px]">
        {/* Summary */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <h3 className="font-mona font-bold text-[18px] text-[#3f2578]">Shrnutí</h3>
            <span className="font-mona font-bold text-[18px] text-[#3f2578]">Axa Premium</span>
          </div>
          <div className="flex flex-wrap gap-4">
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

        {/* Limity pojištění dropdown */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <span className="font-mona font-medium text-[18px] text-[#3f2578]">Limity pojištění</span>
            <span className="text-[#d60021] text-[14px]">*</span>
          </div>
          <div className="h-10 px-3 flex items-center justify-between rounded-lg border border-[#e2e9f0] shadow-sm">
            <span className="font-mona text-[14px] text-[#94a3b8]">...</span>
            <span className="text-[#94a3b8]">▾</span>
          </div>
        </div>

        {/* Insurance Cards */}
        <div className="flex gap-4 overflow-x-auto pb-4">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="min-w-[320px] border border-[#e2e9f0] rounded-xl bg-gradient-to-r from-white to-white shadow-[0px_4px_4px_0px_rgba(12,12,13,0.1)]"
            >
              <div className="flex flex-col gap-3 p-3">
                {/* Header */}
                <div className="flex gap-3 items-center py-3">
                  <img src={pkg.logo} alt="" className="w-[71px] h-[71px] object-contain" />
                  <span className="font-mona font-bold text-[18px] text-[#3f2578]">{pkg.name}</span>
                </div>

                {/* Limits */}
                <div className="flex flex-col gap-3">
                  <h4 className="font-mona font-bold text-[18px] text-[#3f2578]">Pojištění</h4>
                  <div className="flex justify-between text-[#3f2578]">
                    <span className="font-mona text-[18px]">Léčebné výlohy</span>
                    <span className="font-mona font-bold text-[18px]">{pkg.limits.lecebneVylohy}</span>
                  </div>
                  <div className="flex justify-between text-[#3f2578]">
                    <span className="font-mona text-[18px]">Úraz</span>
                    <span className="font-mona font-bold text-[18px]">{pkg.limits.uraz}</span>
                  </div>
                  <div className="flex justify-between text-[#3f2578] items-center">
                    <span className="font-mona text-[18px]">Odpovědnost</span>
                    <div className="flex items-center gap-1">
                      <span className="text-[#34c759]">✓</span>
                      <span className="font-mona font-bold text-[18px]">Ano</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-[#3f2578]">
                    <span className="font-mona text-[18px]">Právní asistence</span>
                    <span className="font-mona font-bold text-[18px]">{pkg.limits.pravniAsistence}</span>
                  </div>
                  <div className="flex justify-between text-[#3f2578]">
                    <span className="font-mona text-[18px]">Zavazadla</span>
                    <span className="font-mona font-bold text-[18px]">{pkg.limits.zavazadla}</span>
                  </div>
                </div>

                <div className="h-px bg-[#e2e9f0] w-full" />

                {/* Addons */}
                <div className="flex flex-col gap-3">
                  <h4 className="font-mona font-bold text-[18px] text-[#3f2578]">Připojištění</h4>
                  {pkg.addons.map((addon) => (
                    <div key={addon.id} className="flex flex-col gap-2">
                      <div className="flex items-center justify-between h-[30px]">
                        <span className={`font-mona text-[18px] ${addon.enabled ? 'text-[#3f2578]' : 'text-[#94a3b8]'}`}>
                          {addon.name}
                        </span>
                        {addon.price > 0 && addon.enabled && (
                          <span className="font-mona font-bold text-[18px] text-[#6aae25]">+ {addon.price} Kč</span>
                        )}
                        <button
                          type="button"
                          onClick={() => toggleAddon(pkg.id, addon.id)}
                          className={`w-[40.5px] h-[22.5px] rounded-full p-[2.25px] transition-colors ${
                            addon.enabled ? 'bg-[#3f2578]' : 'bg-[#e2e9f0]'
                          }`}
                        >
                          <div className={`w-[18px] h-[18px] bg-white rounded-full shadow transition-transform ${
                            addon.enabled ? 'translate-x-[18px]' : 'translate-x-0'
                          }`} />
                        </button>
                      </div>
                      {addon.hasInput && addon.enabled && (
                        <div className="h-10 px-3 flex items-center gap-2 rounded-lg border border-[#e2e9f0] shadow-sm">
                          <span className="font-mona text-[14px] text-[#94a3b8] flex-1">{addon.inputValue}</span>
                          <div className="w-px h-6 bg-[#e2e9f0]" />
                          <span className="font-mona text-[14px] text-[#3f2578]">Kč</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="h-px bg-[#e2e9f0] w-full" />

                {/* Pojistné podmínky */}
                <div className="flex items-center justify-between p-1">
                  <span className="font-mona font-medium text-[14px] text-[#334155] underline cursor-pointer">
                    Pojistné podmínky
                  </span>
                  <span className="text-[#3f2578]">ⓘ</span>
                </div>
              </div>

              {/* Price footer */}
              <div className="bg-[#edf2f7] border-t border-[#e2e9f0] rounded-b-xl p-3 flex flex-col gap-2 items-center">
                <span className="font-mona font-bold text-[18px] text-[#3f2578]">{calculatePrice(pkg)} Kč</span>
                <button
                  type="button"
                  onClick={() => navigate('/pojisteni/cestovani/udaje')}
                  className="w-full h-12 rounded-xl font-inter font-medium text-[16px] text-white"
                  style={{ backgroundImage: 'linear-gradient(254deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%)' }}
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
