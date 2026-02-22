import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LifeProgress } from '../components/LifeProgress';
import { Button, GradientHeading, Input } from '../components/ui';

export function TravelStep4() {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="bg-white flex flex-col gap-6 items-center p-4 md:p-6 w-full min-h-screen">
      <GradientHeading size="lg" className="w-full">
        Online sjednání cestovního pojištění
      </GradientHeading>

      <p className="font-mona font-bold text-[16px] text-[var(--color-primary)] text-center">
        4 kroky k pojištění vaší cesty
      </p>

      <div className="flex flex-col gap-6 items-center w-full max-w-[600px] px-4 md:px-12">
        <LifeProgress current={4} total={4} />

        <div className="bg-[var(--color-background-alt)] flex gap-6 items-center px-4 py-3 rounded-[var(--radius-lg)] w-full flex-wrap">
          <span className="text-[14px] text-[var(--color-text-muted)] font-inter">Datum: 1.10. – 10.10.</span>
          <span className="text-[14px] text-[var(--color-text-muted)] font-inter">Destinace: Německo</span>
        </div>

        <div className="flex flex-col gap-6 w-full">
          <div className="border border-[var(--color-border)] flex flex-col gap-4 p-6 rounded-[var(--radius-lg)]">
            <h3 className="text-[var(--color-primary)] text-[20px] font-bold font-mona">Shrnutí objednávky</h3>
            <div className="flex justify-between text-[14px] font-inter">
              <span className="text-[var(--color-text-muted)]">Pojištění</span>
              <span className="text-[var(--color-primary)] font-semibold">Cestovní pojištění Standard</span>
            </div>
            <div className="flex justify-between text-[14px] font-inter">
              <span className="text-[var(--color-text-muted)]">Asistenční služby</span>
              <span className="text-[var(--color-primary)] font-semibold">—</span>
            </div>
            <div className="border-t border-[var(--color-border)] pt-3 flex justify-between text-[18px] font-bold text-[var(--color-primary)] font-mona">
              <span>Celková cena</span>
              <span>780 Kč</span>
            </div>
          </div>

          <div className="border border-[var(--color-border)] flex flex-col gap-3 p-6 rounded-[var(--radius-lg)]">
            <h3 className="text-[var(--color-primary)] text-[18px] font-bold font-mona">Platební údaje</h3>
            <Input type="text" placeholder="Číslo karty" />
            <div className="flex gap-3">
              <Input type="text" placeholder="Platnost" className="flex-1" />
              <Input type="text" placeholder="CVC" className="w-[80px]" />
            </div>
          </div>

          <label className="flex gap-3 items-start cursor-pointer">
            <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-1" />
            <span className="text-[14px] text-[var(--color-text-muted)] font-inter">
              Souhlasím s obchodními podmínkami
            </span>
          </label>

          <Button
            type="button"
            variant="gradient"
            size="lg"
            className="w-full h-12"
            disabled={!agreed}
            onClick={() => navigate('/')}
          >
            Zaplatit
          </Button>
        </div>
      </div>
    </div>
  );
}
