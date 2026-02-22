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
  { icon: '/assets/shield-icon.svg', alt: 'Pojištění' },
  { icon: '/assets/shield-plus-icon.svg', alt: 'Léčebné výlohy' },
  { icon: '/assets/car-icon-1.svg', alt: 'Auto' },
  { icon: '/assets/icon-map-pin.svg', alt: 'Destinace' },
  { icon: '/assets/droplets-icon.svg', alt: 'Připojištění' },
  { icon: '/assets/user-icon.svg', alt: 'Skupina' },
  { icon: '/assets/shield-check-icon.svg', alt: 'Asistence' },
  { icon: '/assets/house-icon.svg', alt: 'Ubytování' },
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
        {/* Left: Ilustrace + ikony */}
        <div className="flex flex-col gap-4 shrink-0 w-full lg:w-[320px] order-1 lg:order-2">
          <div className="grid grid-cols-4 gap-2">
            {TRAVEL_ICONS.map(({ icon, alt }) => (
              <div
                key={alt}
                className="flex items-center justify-center size-10 rounded-[var(--radius-md)] bg-[var(--color-primary-light)]/40"
                title={alt}
              >
                <img src={icon} alt="" className="size-5 object-contain" />
              </div>
            ))}
          </div>
          <div className="flex justify-center lg:justify-start">
            <img src={imgTravelPerson} alt="" className="max-h-[280px] w-auto object-contain" />
          </div>
        </div>

        {/* Right: Formulář */}
        <div className="flex flex-col gap-6 w-full flex-1 min-w-0 order-2 lg:order-1">
          <LifeProgress current={1} total={4} />

          <div className="flex flex-col gap-2">
            <label className="font-mona font-bold text-[18px] text-[var(--color-primary)]">Kdo cestuje?</label>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <label className="text-[14px] font-inter text-[var(--color-text-muted)]">Dospělí</label>
                <input
                  type="number"
                  min={0}
                  max={20}
                  value={adults}
                  onChange={(e) => setAdults(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-16 h-10 px-2 text-center rounded-[var(--radius-md)] border border-[var(--color-border)] font-mona font-bold text-[14px] outline-none focus:border-[var(--color-primary)]"
                />
              </div>
              <div className="flex items-center gap-2">
                <label className="text-[14px] font-inter text-[var(--color-text-muted)]">Děti</label>
                <input
                  type="number"
                  min={0}
                  max={20}
                  value={children}
                  onChange={(e) => setChildren(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-16 h-10 px-2 text-center rounded-[var(--radius-md)] border border-[var(--color-border)] font-mona font-bold text-[14px] outline-none focus:border-[var(--color-primary)]"
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
