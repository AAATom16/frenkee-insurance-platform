import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LifeProgress } from '../components/LifeProgress';
import { Button, GradientHeading } from '../components/ui';

export function AutoStep4() {
  const navigate = useNavigate();
  const [selectedOffer, setSelectedOffer] = useState<number | null>(null);

  const offers = [
    { id: 1, company: 'Kooperativa', price: 2890, rating: 4.5, features: ['Asistence 24/7', 'Náhradní vozidlo', 'Limit 50 mil. Kč'] },
    { id: 2, company: 'Česká pojišťovna', price: 3120, rating: 4.7, features: ['Asistence 24/7', 'Náhradní vozidlo', 'Limit 50 mil. Kč'] },
    { id: 3, company: 'Allianz', price: 2750, rating: 4.3, features: ['Asistence 24/7', 'Limit 50 mil. Kč'] },
  ];

  const handleContinue = () => {
    if (selectedOffer !== null) {
      navigate('/pojisteni/auto/shrnuti');
    }
  };

  const handleBack = () => {
    navigate('/pojisteni/auto/krok-3');
  };

  return (
    <div className="bg-white flex flex-col gap-6 items-center p-4 md:p-6 w-full min-h-screen">
      <GradientHeading size="lg" className="w-full">
        Dostupné nabídky
      </GradientHeading>

      <p className="font-mona font-bold text-[16px] text-[var(--color-primary)] text-center">
        Vyberte si nejlepší pojištění pro vaše vozidlo
      </p>

      <div className="flex flex-col gap-6 w-full max-w-[700px] px-4">
        <LifeProgress current={4} total={5} />

        <div className="flex flex-col gap-4">
          {offers.map((offer) => (
            <button
              key={offer.id}
              type="button"
              onClick={() => setSelectedOffer(offer.id)}
              className={`text-left w-full p-4 rounded-[var(--radius-lg)] border-2 bg-white transition-colors ${
                selectedOffer === offer.id
                  ? 'border-[var(--color-primary)] bg-[var(--color-primary-light)]/10'
                  : 'border-[var(--color-border)] hover:border-[var(--color-primary)]/50'
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <p className="font-mona font-bold text-[24px] text-[var(--color-primary)]">{offer.company}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400 text-lg">★</span>
                    <span className="font-mona font-bold text-[14px] text-[var(--color-primary)]">{offer.rating}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-mona font-bold text-[32px] text-[var(--color-primary)] leading-tight">{offer.price} Kč</p>
                  <p className="font-mona font-bold text-[14px] text-[var(--color-text-muted)]">/ měsíc</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                {offer.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
                      <path d="M16.667 5L7.5 14.167L3.333 10" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="font-mona font-bold text-[14px] text-[var(--color-primary)]">{feature}</span>
                  </div>
                ))}
              </div>
            </button>
          ))}
        </div>

        <div className="flex gap-4 justify-center pt-2">
          <Button variant="outline" size="lg" onClick={handleBack}>
            Zpět
          </Button>
          <Button
            variant="gradient"
            size="lg"
            onClick={handleContinue}
            disabled={selectedOffer === null}
          >
            Pokračovat
          </Button>
        </div>
      </div>
    </div>
  );
}
