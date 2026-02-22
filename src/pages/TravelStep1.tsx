import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LifeProgress } from '../components/LifeProgress';
import { Button, GradientHeading, Input, Select } from '../components/ui';

const imgTravelPerson = '/assets/travel-person.png';

const DESTINATIONS = [
  { value: 'de', label: 'Německo' },
  { value: 'it', label: 'Itálie' },
  { value: 'fr', label: 'Francie' },
  { value: 'es', label: 'Španělsko' },
  { value: 'at', label: 'Rakousko' },
  { value: 'hr', label: 'Chorvatsko' },
  { value: 'other', label: 'Jiná' },
];

const TRAVEL_REASONS = [
  { value: 'rekreace', label: 'Rekreace' },
  { value: 'pracovni', label: 'Pracovní' },
  { value: 'sport', label: 'Sport' },
  { value: 'jine', label: 'Jiné' },
];

const TRAVEL_ICONS = [
  { icon: '/assets/travel-icon-airplane.svg', label: 'Letadlo' },
  { icon: '/assets/travel-icon-suitcase.svg', label: 'Zavazadla' },
  { icon: '/assets/shield-plus-icon.svg', label: 'Léčebné výlohy' },
  { icon: '/assets/car-icon-1.svg', label: 'Auto' },
  { icon: '/assets/travel-icon-sport.svg', label: 'Sport' },
  { icon: '/assets/droplets-icon.svg', label: 'Počasí' },
  { icon: '/assets/globe-europe-africa.svg', label: 'Svět' },
  { icon: '/assets/user-icon.svg', label: 'Osoba' },
  { icon: '/assets/shield-check-icon.svg', label: 'Asistence' },
  { icon: '/assets/house-icon.svg', label: 'Ubytování' },
];

export function TravelStep1() {
  const navigate = useNavigate();
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [destination, setDestination] = useState('');
  const [reason, setReason] = useState('rekreace');

  const handleContinue = () => {
    navigate('/pojisteni/cestovani/nabidky');
  };

  return (
    <div className="bg-white flex flex-col gap-6 items-center p-4 md:p-6 w-full min-h-screen">
      <GradientHeading size="lg" className="w-full">
        Online sjednání cestovního pojištění
      </GradientHeading>

      <p className="font-mona font-bold text-[16px] text-[var(--color-primary)] text-center">
        4 kroky k pojištění vaší cesty
      </p>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-center w-full max-w-[1200px] px-4 md:px-12">
        {/* Vlevo: Ikony + ilustrace cestovatele */}
        <div className="flex flex-col gap-6 shrink-0 w-full lg:w-[400px]">
          {/* Mřížka ikon 5×2 s popisky */}
          <div className="grid grid-cols-5 gap-3">
            {TRAVEL_ICONS.map(({ icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <div className="flex items-center justify-center size-12 rounded-[var(--radius-md)] bg-[var(--color-primary-light)]/30">
                  <img
                    src={icon}
                    alt=""
                    className="size-6 object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.opacity = '0.3';
                    }}
                  />
                </div>
                <span className="text-[10px] font-inter text-[var(--color-text-muted)] text-center leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Ilustrace cestovatele */}
          <div className="flex justify-center">
            <img src={imgTravelPerson} alt="" className="max-h-[320px] w-auto object-contain" />
          </div>
        </div>

        {/* Vpravo: Formulář */}
        <div className="flex flex-col gap-6 w-full flex-1 min-w-0 max-w-[600px]">
          <LifeProgress current={1} total={4} />

          <div className="flex flex-col gap-2">
            <label className="font-mona font-bold text-[18px] text-[var(--color-primary)]">Kdo cestuje?</label>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 border border-[var(--color-border)] rounded-[var(--radius-md)] px-3 py-2">
                <span className="text-[14px] font-inter text-[var(--color-text-muted)]">Dospělí</span>
                <input
                  type="number"
                  min={0}
                  max={20}
                  value={adults}
                  onChange={(e) => setAdults(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-12 h-8 px-1 text-center rounded-[var(--radius-sm)] border border-[var(--color-border)] font-mona font-bold text-[14px] outline-none focus:border-[var(--color-primary)]"
                />
              </div>
              <div className="flex items-center gap-2 border border-[var(--color-border)] rounded-[var(--radius-md)] px-3 py-2">
                <span className="text-[14px] font-inter text-[var(--color-text-muted)]">Děti</span>
                <input
                  type="number"
                  min={0}
                  max={20}
                  value={children}
                  onChange={(e) => setChildren(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-12 h-8 px-1 text-center rounded-[var(--radius-sm)] border border-[var(--color-border)] font-mona font-bold text-[14px] outline-none focus:border-[var(--color-primary)]"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Datum od *" type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
            <Input label="Datum do *" type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
          </div>

          <Select
            label="Destinace *"
            options={DESTINATIONS}
            value={destination}
            onChange={setDestination}
            placeholder="Vyberte destinaci"
          />

          <Select
            label="Důvod cesty"
            options={TRAVEL_REASONS}
            value={reason}
            onChange={setReason}
          />

          <Button type="button" variant="gradient" size="lg" className="w-full h-[52px]" onClick={handleContinue}>
            Přejít k výběru
          </Button>
        </div>
      </div>
    </div>
  );
}
