import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, RadioGroup } from '../../components/ui';

const PROPERTY_TYPES = [
  { value: 'byt', label: 'Byt' },
  { value: 'dum', label: 'Dům' },
  { value: 'chata', label: 'Chata, chalupa' },
];

const VZTAH_OPTIONS = [
  { value: 'vlastnik', label: 'Vlastník' },
  { value: 'najemce', label: 'Nájemce' },
];

const PRONAJIM_OPTIONS = [
  { value: 'ne', label: 'Ne' },
  { value: 'ano', label: 'Ano' },
];

const VLASTNICTVI_OPTIONS = [
  { value: 'osobni', label: 'Osobní' },
  { value: 'druzstevni', label: 'Družstevní' },
];

const PARCELA_OPTIONS = [
  { value: 'stavebni', label: 'Stavební' },
  { value: 'pozemkova', label: 'Pozemková' },
  { value: 'nema', label: 'Nemá přidělený typ' },
];

export function ZakladniUdajePage() {
  const [propertyType, setPropertyType] = useState('dum');
  const [vztah, setVztah] = useState('vlastnik');
  const [pronajim, setPronajim] = useState('ne');
  const [vlastnictvi, setVlastnictvi] = useState('osobni');
  const [parcela, setParcela] = useState('stavebni');
  const [domacnostOk, setDomacnostOk] = useState(false);
  const [address, setAddress] = useState({
    adresa: '',
    stat: '',
    mesto: '',
    psc: '',
    katastr: '',
    parcela: '',
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="heading-2 text-[var(--color-primary)] text-center mb-4">
        Online pojištění majetku
      </h1>
      <h2 className="heading-5 text-center mb-8">Základní údaje o nemovitosti</h2>

      <div className="flex gap-8 mb-12">
        <div className="hidden md:block flex-1 max-w-[200px]">
          <div className="w-full h-48 bg-[var(--color-dark-200)] rounded-[var(--radius-lg)] flex items-center justify-center text-6xl">
            👷
          </div>
        </div>
        <div className="flex-1 space-y-8">
          <div>
            <label className="body-sm font-semibold block mb-3">Jakou nemovitost chcete pojistit?</label>
            <div className="grid grid-cols-3 gap-4">
              {PROPERTY_TYPES.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setPropertyType(type.value)}
                  className={`p-4 rounded-[var(--radius-md)] border-2 text-center transition-colors ${
                    propertyType === type.value
                      ? 'border-green-500 bg-green-50'
                      : 'border-[var(--color-border)] hover:border-[var(--color-primary)]'
                  }`}
                >
                  <span className="block text-2xl mb-2">🏠</span>
                  <span className="body-sm font-medium">{type.label}</span>
                </button>
              ))}
            </div>
          </div>

          <RadioGroup name="vztah" options={VZTAH_OPTIONS} value={vztah} onChange={setVztah} label="Vztah k nemovitosti" />
          <RadioGroup name="pronajim" options={PRONAJIM_OPTIONS} value={pronajim} onChange={setPronajim} label="Pronajímáte nemovitost" />
          <RadioGroup name="vlastnictvi" options={VLASTNICTVI_OPTIONS} value={vlastnictvi} onChange={setVlastnictvi} label="Druh vlastnictví" />

          <div className="space-y-4">
            <Input label="Adresa" value={address.adresa} onChange={(e) => setAddress({ ...address, adresa: e.target.value })} />
            <div className="grid grid-cols-2 gap-4">
              <Input label="Stát" value={address.stat} onChange={(e) => setAddress({ ...address, stat: e.target.value })} />
              <Input label="Město" value={address.mesto} onChange={(e) => setAddress({ ...address, mesto: e.target.value })} />
              <Input label="Směrovací číslo" value={address.psc} onChange={(e) => setAddress({ ...address, psc: e.target.value })} />
              <Input label="Katastrální území" value={address.katastr} onChange={(e) => setAddress({ ...address, katastr: e.target.value })} />
              <Input label="Číslo parcely" value={address.parcela} onChange={(e) => setAddress({ ...address, parcela: e.target.value })} />
            </div>
          </div>

          <RadioGroup name="parcela" options={PARCELA_OPTIONS} value={parcela} onChange={setParcela} label="Typ parcely" />

          <div className="flex items-center justify-between p-4 bg-[var(--color-dark-50)] rounded-[var(--radius-md)]">
            <label className="body-sm">Domácnost je v dobrém stavu a bez chátrajících prvků</label>
            <button
              type="button"
              onClick={() => setDomacnostOk(!domacnostOk)}
              className={`relative w-12 h-6 rounded-full transition-colors ${domacnostOk ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-dark-200)]'}`}
            >
              <span className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow ${domacnostOk ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link to="/pojisteni/majetek/detail">
          <Button variant="primary" size="lg">Pokračovat</Button>
        </Link>
      </div>
    </div>
  );
}
