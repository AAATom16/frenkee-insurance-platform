import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, RadioGroup, Toggle, Select } from '../../components/ui';

const DISPOZICE_OPTIONS = [
  { value: '1+1', label: '1+1' },
  { value: '2+1', label: '2+1' },
  { value: '2+kk', label: '2+KK' },
  { value: '3+1', label: '3+1' },
  { value: '4+kk', label: '4+KK' },
];

const UMISTENI_OPTIONS = [
  { value: 'rodinny', label: 'V rodinném domě' },
  { value: 'bytovy', label: 'v bytovém domě' },
];

const KONSTRUKCE_OPTIONS = [
  { value: 'panel', label: 'Panel' },
  { value: 'dřevo', label: 'Dřevo' },
  { value: 'cihla', label: 'Cihla' },
];

const KVALITA_OPTIONS = [
  { value: 'standardni', label: 'Standardní' },
  { value: 'nadstandard', label: 'Nadstandard' },
  { value: 'premiova', label: 'Prémiová' },
];

const STAV_OPTIONS = [
  { value: 'udrzovany', label: 'Dobře udržovaný' },
  { value: 'rekonstrukce', label: 'Po rekonstrukci / novostavba' },
  { value: 'potrebuje', label: 'Potřebuje rekonstrukci' },
];

export function DetailBytuPage() {
  const [nemovitost, setNemovitost] = useState(false);
  const [dispozice, setDispozice] = useState('2+kk');
  const [plocha, setPlocha] = useState('110');
  const [cisloBytu, setCisloBytu] = useState('0');
  const [umisteni, setUmisteni] = useState('rodinny');
  const [vyssiPatro, setVyssiPatro] = useState(false);
  const [konstrukce, setKonstrukce] = useState('panel');
  const [kvalita, setKvalita] = useState('standardni');
  const [stav, setStav] = useState('udrzovany');
  const [balkon, setBalkon] = useState(true);
  const [balkonPlocha, setBalkonPlocha] = useState('110');
  const [terasa, setTerasa] = useState(false);
  const [garaz, setGaraz] = useState(false);
  const [vytah, setVytah] = useState(true);
  const [parkovani, setParkovani] = useState(false);
  const [hodnota, setHodnota] = useState('0');

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="heading-2 text-[var(--color-primary)] text-center mb-4">
        Online pojištění majetku
      </h1>
      <h2 className="heading-5 text-center mb-8">Co budeme pojišťovat?</h2>

      <div className="flex gap-8">
        <div className="hidden md:block w-48">
          <div className="w-full h-64 bg-[var(--color-dark-200)] rounded-[var(--radius-lg)] flex items-center justify-center text-6xl">
            👷
          </div>
        </div>
        <div className="flex-1 space-y-8">
          <div className="bg-[var(--color-dark-50)] p-6 rounded-[var(--radius-lg)] flex justify-between items-start">
            <div className="flex gap-4">
              <span className="text-3xl">🏠</span>
              <div>
                <h3 className="heading-8 mb-2">Nemovitost</h3>
                <p className="body-sm text-[var(--color-text-muted)]">
                  Nemovitost zahrnuje stavbu a příslušenství...
                </p>
              </div>
            </div>
            <Toggle checked={nemovitost} onChange={setNemovitost} />
          </div>

          <Select label="Dispozice bytu *" options={DISPOZICE_OPTIONS} value={dispozice} onChange={setDispozice} />
          <div className="grid grid-cols-[1fr_80px] gap-2">
            <Input label="Podlahová plocha *" type="number" value={plocha} onChange={(e) => setPlocha(e.target.value)} />
            <div className="flex items-end pb-2"><span className="body-sm text-[var(--color-text-muted)]">m²</span></div>
          </div>
          <Input label="Číslo bytu *" type="number" value={cisloBytu} onChange={(e) => setCisloBytu(e.target.value)} />
          <RadioGroup name="umisteni" options={UMISTENI_OPTIONS} value={umisteni} onChange={setUmisteni} label="Umístění bytu *" />
          <div className="flex items-center justify-between">
            <span className="body-sm">Byt se nachází ve vyšším patře</span>
            <Toggle checked={vyssiPatro} onChange={setVyssiPatro} />
          </div>
          <RadioGroup name="konstrukce" options={KONSTRUKCE_OPTIONS} value={konstrukce} onChange={setKonstrukce} label="Konstrukce nemovitostí *" />
          <RadioGroup name="kvalita" options={KVALITA_OPTIONS} value={kvalita} onChange={setKvalita} label="Kvalita bytu *" />
          <RadioGroup name="stav" options={STAV_OPTIONS} value={stav} onChange={setStav} label="Stav bytu" />
          <div className="flex items-center gap-4">
            <span className="body-sm">Byt má balkon</span>
            <Toggle checked={balkon} onChange={setBalkon} />
            {balkon && (
              <div className="flex gap-2">
                <input type="number" value={balkonPlocha} onChange={(e) => setBalkonPlocha(e.target.value)} className="w-20 px-2 py-1 border rounded" />
                <span className="body-sm text-[var(--color-text-muted)]">m²</span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-4">
            <span className="body-sm">Byt má terasu</span>
            <Toggle checked={terasa} onChange={setTerasa} />
          </div>
          <div className="space-y-3">
            <label className="body-sm font-semibold block">Vybavení domu a bytu</label>
            <div className="flex flex-wrap gap-6">
              <Toggle label="Garážové stání" checked={garaz} onChange={setGaraz} />
              <Toggle label="V domě je výtah" checked={vytah} onChange={setVytah} />
              <Toggle label="Parkovací stání" checked={parkovani} onChange={setParkovani} />
            </div>
          </div>
          <Input
            label="Hodnota nemovitosti *"
            type="number"
            value={hodnota}
            onChange={(e) => setHodnota(e.target.value)}
            hint="Cena, za kterou by bylo možné na trhu koupit stejný byt..."
          />
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link to="/pojisteni/majetek/domacnost">
          <Button variant="primary" size="lg">Pokračovat</Button>
        </Link>
      </div>
    </div>
  );
}
