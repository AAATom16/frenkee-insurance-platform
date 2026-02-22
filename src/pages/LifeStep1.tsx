import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LifeProgress } from '../components/LifeProgress';
import { Button, Input, RadioGroup, Select } from '../components/ui';

const PROFESE_OPTIONS = [
  { value: 'Programátor', label: 'Programátor' },
  { value: 'Úředník', label: 'Úředník' },
  { value: 'Manuální', label: 'Manuální' },
  { value: 'Řidič', label: 'Řidič' },
  { value: 'Zdravotník', label: 'Zdravotník' },
  { value: 'Pedagog', label: 'Pedagog' },
  { value: 'Podnikatel', label: 'Podnikatel' },
  { value: 'Jiné', label: 'Jiné' },
];

export function LifeStep1() {
  const navigate = useNavigate();
  const [jmeno, setJmeno] = useState('');
  const [prijmeni, setPrijmeni] = useState('');
  const [datumNarozeni, setDatumNarozeni] = useState('');
  const [zamestnani, setZamestnani] = useState('zamestnanec');
  const [profese, setProfese] = useState('');
  const [popis, setPopis] = useState('');
  const [obcanstvi, setObcanstvi] = useState('cesko');

  return (
    <div className="bg-[var(--color-background)] flex flex-col gap-6 items-center p-6 w-full min-h-screen">
      <h1 className="heading-2 text-[var(--color-primary)] text-center tracking-tight">
        Online sjednání životního pojištění
      </h1>

      <div className="flex flex-col gap-6 items-center px-4 md:px-20 py-8 w-full max-w-[1000px]">
        <LifeProgress current={1} total={8} />

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 w-full items-start">
          <div className="w-full md:w-[300px] shrink-0 flex justify-center md:justify-start order-2 md:order-1">
            <img src="/assets/life-char-1.png" alt="" className="max-h-[280px] w-auto object-contain" />
          </div>
          <div className="flex flex-col gap-5 w-full flex-1 min-w-0 order-1 md:order-2">
            <h2 className="heading-6 text-[var(--color-primary)]">
              Základní informace o vás
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Jméno"
                required
                value={jmeno}
                onChange={(e) => setJmeno(e.target.value)}
                placeholder="Jméno"
              />
              <Input
                label="Příjmení"
                required
                value={prijmeni}
                onChange={(e) => setPrijmeni(e.target.value)}
                placeholder="Příjmení"
              />
            </div>

            <Input
              label="Datum narození"
              required
              value={datumNarozeni}
              onChange={(e) => setDatumNarozeni(e.target.value)}
              placeholder="DD.MM.RRRR"
            />

            <RadioGroup
              name="zamestnani"
              label="Jaké je vaše zaměstnání?"
              options={[
                { value: 'zamestnanec', label: 'Zaměstnanec' },
                { value: 'osvc', label: 'OSVČ' },
                { value: 'bez', label: 'Bez zaměstnání' },
              ]}
              value={zamestnani}
              onChange={setZamestnani}
            />

            <Select
              label="Profese / zaměstnání"
              options={PROFESE_OPTIONS}
              placeholder="Vyberte..."
              value={profese}
              onChange={(e) => setProfese(e.target.value)}
            />

            <Input
              label="Popis"
              value={popis}
              onChange={(e) => setPopis(e.target.value)}
              placeholder="Popis"
            />

            <RadioGroup
              name="obcanstvi"
              label="Občanství"
              options={[
                { value: 'cesko', label: 'Česko' },
                { value: 'slovensko', label: 'Slovensko' },
                { value: 'jine', label: 'Jiné' },
              ]}
              value={obcanstvi}
              onChange={setObcanstvi}
            />

            <Button
              type="button"
              size="lg"
              className="w-full h-[52px] rounded-[var(--radius-lg)] text-lg"
              onClick={() => navigate('/pojisteni/zivot/zdravi')}
            >
              Pokračovat
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
