import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LifeProgress } from '../components/LifeProgress';
import { Button, GradientHeading, Input } from '../components/ui';

const POJISTNIK_FIELDS = [
  { key: 'jmeno', label: 'Jméno' },
  { key: 'prijmeni', label: 'Příjmení' },
  { key: 'datumNarozeni', label: 'Datum narození', type: 'date' as const },
  { key: 'email', label: 'Email', type: 'email' as const },
  { key: 'telefon', label: 'Telefon', type: 'tel' as const },
  { key: 'ulice', label: 'Ulice a číslo' },
  { key: 'mesto', label: 'Město' },
  { key: 'psc', label: 'PSČ' },
];

const CESTOUJICI_FIELDS = [
  { key: 'jmeno', label: 'Jméno' },
  { key: 'prijmeni', label: 'Příjmení' },
  { key: 'datumNarozeni', label: 'Datum narození', type: 'date' as const },
];

export function TravelStep3() {
  const navigate = useNavigate();
  const [pojistnik, setPojistnik] = useState<Record<string, string>>({});
  const [cestujici, setCestujici] = useState<Record<string, string>>({});

  const updatePojistnik = (field: string, value: string) => setPojistnik((p) => ({ ...p, [field]: value }));
  const updateCestujici = (field: string, value: string) => setCestujici((c) => ({ ...c, [field]: value }));

  return (
    <div className="bg-white flex flex-col gap-6 items-center p-4 md:p-6 w-full min-h-screen">
      <GradientHeading size="lg" className="w-full">
        Online sjednání cestovního pojištění
      </GradientHeading>

      <p className="font-mona font-bold text-[16px] text-[var(--color-primary)] text-center">
        4 kroky k pojištění vaší cesty
      </p>

      <div className="flex flex-col gap-6 items-center w-full max-w-[1000px] px-4 md:px-12">
        <LifeProgress current={3} total={4} />

        <div className="bg-[var(--color-background-alt)] flex gap-6 items-center px-4 py-3 rounded-[var(--radius-lg)] w-full flex-wrap">
          <span className="text-[14px] text-[var(--color-text-muted)] font-inter">Datum: 1.10. – 10.10.</span>
          <span className="text-[14px] text-[var(--color-text-muted)] font-inter">Destinace: Německo</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="border border-[var(--color-border)] flex flex-col gap-4 p-6 rounded-[var(--radius-lg)]">
            <h3 className="text-[var(--color-primary)] text-[20px] font-bold font-mona">Údaje pojistníka</h3>
            {POJISTNIK_FIELDS.map((f) => (
              <Input
                key={f.key}
                label={f.label}
                type={f.type || 'text'}
                value={pojistnik[f.key] ?? ''}
                onChange={(e) => updatePojistnik(f.key, e.target.value)}
              />
            ))}
          </div>
          <div className="border border-[var(--color-border)] flex flex-col gap-4 p-6 rounded-[var(--radius-lg)]">
            <h3 className="text-[var(--color-primary)] text-[20px] font-bold font-mona">Údaje cestujícího</h3>
            {CESTOUJICI_FIELDS.map((f) => (
              <Input
                key={f.key}
                label={f.label}
                type={f.type || 'text'}
                value={cestujici[f.key] ?? ''}
                onChange={(e) => updateCestujici(f.key, e.target.value)}
              />
            ))}
            <Button type="button" variant="outline" size="md" className="w-full mt-2">
              + Přidat dalšího cestujícího
            </Button>
          </div>
        </div>

        <Button
          type="button"
          variant="gradient"
          size="lg"
          className="w-full max-w-[400px] h-12"
          onClick={() => navigate('/pojisteni/cestovani/platba')}
        >
          Přejít k platbě
        </Button>
      </div>
    </div>
  );
}
