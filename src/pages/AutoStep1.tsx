import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LifeProgress } from '../components/LifeProgress';
import { Button, GradientHeading, Input, Toggle } from '../components/ui';

const imgCarIllustration = "/assets/car-icon-fill.png";

export function AutoStep1() {
  const navigate = useNavigate();
  const [spz, setSpz] = useState('');
  const [znacka, setZnacka] = useState('');
  const [model, setModel] = useState('');
  const [rokVyroby, setRokVyroby] = useState('');
  const [povinneRuceni, setPovinneRuceni] = useState(true);
  const [havarijni, setHavarijni] = useState(false);

  const handleContinue = () => {
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

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-center w-full max-w-[1000px] px-4 md:px-12">
        <div className="flex justify-center lg:justify-start shrink-0 w-full lg:w-[280px]">
          <img src={imgCarIllustration} alt="" className="max-h-[260px] w-auto object-contain" />
        </div>

        <div className="flex flex-col gap-6 w-full flex-1 min-w-0">
          <LifeProgress current={1} total={5} />

          <div className="flex flex-col gap-4">
            <Input
              label="SPZ vozidla *"
              value={spz}
              onChange={(e) => setSpz(e.target.value.toUpperCase())}
              placeholder="např. 1A2 3456"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Značka *"
                value={znacka}
                onChange={(e) => setZnacka(e.target.value)}
                placeholder="např. Škoda"
              />
              <Input
                label="Model *"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="např. Octavia"
              />
            </div>
            <Input
              label="Rok výroby *"
              type="number"
              value={rokVyroby}
              onChange={(e) => setRokVyroby(e.target.value)}
              placeholder="např. 2020"
            />

            <div className="bg-[var(--color-background-alt)] rounded-[var(--radius-lg)] p-4 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-mona font-bold text-[18px] text-[var(--color-primary)]">Povinné ručení</span>
                <Toggle checked={povinneRuceni} onChange={setPovinneRuceni} />
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mona font-bold text-[18px] text-[var(--color-primary)]">Havarijní pojištění</span>
                <Toggle checked={havarijni} onChange={setHavarijni} />
              </div>
            </div>

            <Button type="button" variant="gradient" size="lg" className="w-full h-[52px]" onClick={handleContinue}>
              Pokračovat
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
