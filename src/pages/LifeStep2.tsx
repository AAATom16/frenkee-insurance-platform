import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LifeProgress } from '../components/LifeProgress';
import { Button, Input, RadioGroup, Select } from '../components/ui';

const POVOLANI = [
  { value: 'Úředník', label: 'Úředník' },
  { value: 'Manuální', label: 'Manuální' },
  { value: 'Řidič', label: 'Řidič' },
  { value: 'Zdravotník', label: 'Zdravotník' },
  { value: 'Pedagog', label: 'Pedagog' },
  { value: 'Podnikatel', label: 'Podnikatel' },
  { value: 'Jiné', label: 'Jiné' },
];
const SPORT = [
  { value: 'Žádný', label: 'Žádný' },
  { value: 'Rekreačně', label: 'Rekreačně' },
  { value: 'Běh', label: 'Běh' },
  { value: 'Cyklismus', label: 'Cyklismus' },
  { value: 'Fotbal', label: 'Fotbal' },
  { value: 'Lyžování', label: 'Lyžování' },
  { value: 'Jiné', label: 'Jiné' },
];
const KONICKY = [
  { value: 'Žádné', label: 'Žádné' },
  { value: 'Horolezectví', label: 'Horolezectví' },
  { value: 'Potápění', label: 'Potápění' },
  { value: 'Létání', label: 'Létání' },
  { value: 'Jiné', label: 'Jiné' },
];
const CESTOVANI = [
  { value: 'Ne', label: 'Ne' },
  { value: 'Občas', label: 'Občas' },
  { value: 'Často do rizikových oblastí', label: 'Často do rizikových oblastí' },
];

export function LifeStep2() {
  const navigate = useNavigate();
  const [vaha, setVaha] = useState('');
  const [vyska, setVyska] = useState('');
  const [povolani, setPovolani] = useState('');
  const [sport, setSport] = useState('');
  const [konicky, setKonicky] = useState('');
  const [cestovani, setCestovani] = useState('');
  const [predchoziPojisteni, setPredchoziPojisteni] = useState('ano');
  const [onemocneni, setOnemocneni] = useState('');

  return (
    <div className="bg-[var(--color-background)] flex flex-col gap-6 items-center p-6 w-full min-h-screen">
      <h1 className="heading-2 text-[var(--color-primary)] text-center tracking-tight">
        Online sjednání životního pojištění
      </h1>

      <div className="flex flex-col gap-6 items-center px-4 md:px-20 py-8 w-full max-w-[1000px]">
        <LifeProgress current={2} total={8} />

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 w-full items-start">
          <div className="flex flex-col gap-5 w-full flex-1 min-w-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Váha (kg)"
                type="number"
                value={vaha}
                onChange={(e) => setVaha(e.target.value)}
                placeholder="70"
              />
              <Input
                label="Výška (cm)"
                type="number"
                value={vyska}
                onChange={(e) => setVyska(e.target.value)}
                placeholder="175"
              />
            </div>

            <Select
              label="Povolání"
              options={POVOLANI}
              placeholder="Vyberte..."
              value={povolani}
              onChange={(e) => setPovolani(e.target.value)}
            />
            <Select
              label="Sporty"
              options={SPORT}
              placeholder="Vyberte..."
              value={sport}
              onChange={(e) => setSport(e.target.value)}
            />
            <Select
              label="Koníčky"
              options={KONICKY}
              placeholder="Vyberte..."
              value={konicky}
              onChange={(e) => setKonicky(e.target.value)}
            />
            <Select
              label="Cestování"
              options={CESTOVANI}
              placeholder="Vyberte..."
              value={cestovani}
              onChange={(e) => setCestovani(e.target.value)}
            />

            <RadioGroup
              name="predchozi"
              label="Mám již pojištění?"
              options={[
                { value: 'ano', label: 'Ano' },
                { value: 'ne', label: 'Ne' },
              ]}
              value={predchoziPojisteni}
              onChange={setPredchoziPojisteni}
            />

            <Select
              label="Závažná onemocnění"
              options={[
                { value: 'ne', label: 'Žádná' },
                { value: 'ano', label: 'Ano' },
              ]}
              placeholder="Vyberte..."
              value={onemocneni}
              onChange={(e) => setOnemocneni(e.target.value)}
            />

            <Button
              type="button"
              size="lg"
              className="w-full h-[52px] rounded-[var(--radius-lg)] text-lg"
              onClick={() => navigate('/pojisteni/zivot/kryti')}
            >
              Pokračovat
            </Button>
          </div>
          <div className="w-full md:w-[280px] shrink-0 flex justify-center md:justify-end order-2 md:order-2">
            <img src="/assets/life-char-2.svg" alt="" className="max-h-[280px] w-auto object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
