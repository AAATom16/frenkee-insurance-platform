import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LifeProgress } from '../components/LifeProgress';
import { Button, GradientHeading } from '../components/ui';

export function AutoStep5() {
  const navigate = useNavigate();
  const [souhlas1, setSouhlas1] = useState(false);
  const [souhlas2, setSouhlas2] = useState(false);
  const [souhlas3, setSouhlas3] = useState(false);

  const handleSubmit = () => {
    if (souhlas1 && souhlas2) {
      alert('Pojištění bylo úspěšně sjednáno!');
      navigate('/');
    } else {
      alert('Musíte souhlasit s povinnými podmínkami.');
    }
  };

  const handleBack = () => {
    navigate('/pojisteni/auto/nabidky');
  };

  return (
    <div className="bg-white flex flex-col gap-6 items-center p-4 md:p-6 w-full min-h-screen">
      <GradientHeading size="lg" className="w-full">
        Shrnutí objednávky
      </GradientHeading>

      <p className="font-mona font-bold text-[16px] text-[var(--color-primary)] text-center">
        Zkontrolujte si údaje před dokončením
      </p>

      <div className="flex flex-col gap-6 w-full max-w-[600px] px-4">
        <LifeProgress current={5} total={5} />

        <div className="flex flex-col gap-4">
          <div className="bg-white border border-[var(--color-border)] rounded-[var(--radius-lg)] p-4">
            <p className="font-mona font-bold text-[20px] text-[var(--color-primary)] mb-3">Vozidlo</p>
            <div className="flex justify-between text-[14px] py-1">
              <span className="text-[var(--color-text-muted)]">SPZ:</span>
              <span className="font-bold text-[var(--color-primary)]">1A2 3456</span>
            </div>
            <div className="flex justify-between text-[14px] py-1">
              <span className="text-[var(--color-text-muted)]">Značka a model:</span>
              <span className="font-bold text-[var(--color-primary)]">Škoda Octavia</span>
            </div>
            <div className="flex justify-between text-[14px] py-1">
              <span className="text-[var(--color-text-muted)]">Rok výroby:</span>
              <span className="font-bold text-[var(--color-primary)]">2020</span>
            </div>
          </div>

          <div className="bg-white border border-[var(--color-border)] rounded-[var(--radius-lg)] p-4">
            <p className="font-mona font-bold text-[20px] text-[var(--color-primary)] mb-3">Pojištění</p>
            <div className="flex justify-between text-[14px] py-1">
              <span className="text-[var(--color-text-muted)]">Pojišťovna:</span>
              <span className="font-bold text-[var(--color-primary)]">Kooperativa</span>
            </div>
            <div className="flex justify-between text-[14px] py-1">
              <span className="text-[var(--color-text-muted)]">Typ:</span>
              <span className="font-bold text-[var(--color-primary)]">Povinné ručení + Havarijní</span>
            </div>
            <div className="flex justify-between text-[14px] py-1">
              <span className="text-[var(--color-text-muted)]">Limit plnění:</span>
              <span className="font-bold text-[var(--color-primary)]">50 mil. Kč</span>
            </div>
            <div className="flex justify-between text-[14px] py-1">
              <span className="text-[var(--color-text-muted)]">Spoluúčast:</span>
              <span className="font-bold text-[var(--color-primary)]">5 000 Kč</span>
            </div>
          </div>

          <div className="bg-white border border-[var(--color-border)] rounded-[var(--radius-lg)] p-4">
            <p className="font-mona font-bold text-[20px] text-[var(--color-primary)] mb-3">Pojistník</p>
            <div className="flex justify-between text-[14px] py-1">
              <span className="text-[var(--color-text-muted)]">Jméno a příjmení:</span>
              <span className="font-bold text-[var(--color-primary)]">Jan Novák</span>
            </div>
            <div className="flex justify-between text-[14px] py-1">
              <span className="text-[var(--color-text-muted)]">E-mail:</span>
              <span className="font-bold text-[var(--color-primary)]">jan.novak@email.cz</span>
            </div>
            <div className="flex justify-between text-[14px] py-1">
              <span className="text-[var(--color-text-muted)]">Telefon:</span>
              <span className="font-bold text-[var(--color-primary)]">+420 123 456 789</span>
            </div>
          </div>

          <div className="bg-[var(--color-background-alt)] rounded-[var(--radius-lg)] p-4 flex flex-col gap-4">
            <p className="font-mona font-bold text-[20px] text-[var(--color-primary)]">Souhlas a potvrzení</p>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={souhlas1}
                onChange={(e) => setSouhlas1(e.target.checked)}
                className="mt-1 size-[18px] accent-[var(--color-primary)]"
              />
              <span className="font-mona font-bold text-[14px] text-[var(--color-primary)]">
                Souhlasím s obchodními podmínkami a podmínkami pojištění *
              </span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={souhlas2}
                onChange={(e) => setSouhlas2(e.target.checked)}
                className="mt-1 size-[18px] accent-[var(--color-primary)]"
              />
              <span className="font-mona font-bold text-[14px] text-[var(--color-primary)]">
                Souhlasím se zpracováním osobních údajů podle GDPR *
              </span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={souhlas3}
                onChange={(e) => setSouhlas3(e.target.checked)}
                className="mt-1 size-[18px] accent-[var(--color-primary)]"
              />
              <span className="font-mona font-bold text-[14px] text-[var(--color-primary)]">
                Souhlasím s zasíláním obchodních sdělení
              </span>
            </label>
          </div>

          <div className="bg-white border-2 border-[var(--color-primary)] rounded-[var(--radius-lg)] p-5 flex items-center justify-between">
            <p className="font-mona font-bold text-[24px] text-[var(--color-primary)]">Celková cena</p>
            <div className="text-right">
              <p className="font-mona font-bold text-[36px] text-[var(--color-primary)] leading-tight">2 890 Kč</p>
              <p className="font-mona font-bold text-[16px] text-[var(--color-text-muted)]">/ měsíc</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 justify-center pt-2">
          <Button variant="outline" size="lg" onClick={handleBack}>
            Zpět
          </Button>
          <Button variant="gradient" size="lg" onClick={handleSubmit}>
            Sjednat a zaplatit
          </Button>
        </div>
      </div>
    </div>
  );
}
