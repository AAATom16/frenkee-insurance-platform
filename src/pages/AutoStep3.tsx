import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LifeProgress } from '../components/LifeProgress';
import { Button, GradientHeading, RadioGroup, Toggle } from '../components/ui';

export function AutoStep3() {
  const navigate = useNavigate();
  const [limitSkody, setLimitSkody] = useState('35000000');
  const [asistence, setAsistence] = useState(true);
  const [nahradniVozidlo, setNahradniVozidlo] = useState(false);
  const [spoluucast, setSpoluucast] = useState('5000');

  const handleContinue = () => {
    navigate('/pojisteni/auto/nabidky');
  };

  const handleBack = () => {
    navigate('/pojisteni/auto/krok-2');
  };

  return (
    <div className="bg-white flex flex-col gap-6 items-center p-4 md:p-6 w-full min-h-screen">
      <GradientHeading size="lg" className="w-full">
        Online pojištění vozidla
      </GradientHeading>

      <p className="font-mona font-bold text-[16px] text-[var(--color-primary)] text-center">
        5 kroků k povinnému ručení
      </p>

      <div className="flex flex-col gap-6 w-full max-w-[600px] px-4">
        <LifeProgress current={3} total={5} />

        <RadioGroup
          name="limit"
          label="Limit pojistného plnění na škodu"
          options={[
            { value: '35000000', label: '35 mil. Kč (zákonné minimum)' },
            { value: '50000000', label: '50 mil. Kč (doporučeno)' },
            { value: '100000000', label: '100 mil. Kč (maximální ochrana)' },
          ]}
          value={limitSkody}
          onChange={setLimitSkody}
        />

        <div className="bg-[var(--color-background-alt)] rounded-[var(--radius-lg)] p-4 flex flex-col gap-4">
          <p className="font-mona font-bold text-[18px] text-[var(--color-primary)]">Doplňkové služby</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mona font-bold text-[16px] text-[var(--color-primary)]">Asistence 24/7</p>
              <p className="font-mona font-bold text-[14px] text-[var(--color-text-muted)]">Odtah vozidla, pomoc na místě</p>
            </div>
            <Toggle checked={asistence} onChange={setAsistence} />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mona font-bold text-[16px] text-[var(--color-primary)]">Náhradní vozidlo</p>
              <p className="font-mona font-bold text-[14px] text-[var(--color-text-muted)]">Při opravě po havárii</p>
            </div>
            <Toggle checked={nahradniVozidlo} onChange={setNahradniVozidlo} />
          </div>
        </div>

        <RadioGroup
          name="spoluucast"
          label="Spoluúčast"
          options={[
            { value: '0', label: 'Bez spoluúčasti' },
            { value: '5000', label: '5 000 Kč (nižší pojistné)' },
            { value: '10000', label: '10 000 Kč (nejnižší pojistné)' },
          ]}
          value={spoluucast}
          onChange={setSpoluucast}
        />

        <div className="flex gap-4 justify-center pt-2">
          <Button variant="outline" size="lg" onClick={handleBack}>
            Zpět
          </Button>
          <Button variant="gradient" size="lg" onClick={handleContinue}>
            Zobrazit nabídky
          </Button>
        </div>
      </div>
    </div>
  );
}
