import { Link } from 'react-router-dom';
import { Button, Checkbox } from '../../components/ui';
import { useState } from 'react';

export function ShrnutiPage() {
  const [consent1, setConsent1] = useState(false);
  const [consent2, setConsent2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="heading-2 text-[var(--color-primary)] text-center mb-4">
        Shrnutí pojištění
      </h1>

      <div className="space-y-6 mb-12">
        <div className="bg-[var(--color-dark-50)] p-6 rounded-[var(--radius-lg)]">
          <h3 className="heading-8 mb-4">Nemovitost</h3>
          <p className="body-sm text-[var(--color-text-muted)]">Byt, Praha 5, 2+KK, 65 m²</p>
        </div>
        <div className="bg-[var(--color-dark-50)] p-6 rounded-[var(--radius-lg)]">
          <h3 className="heading-8 mb-4">Krytí</h3>
          <p className="body-sm text-[var(--color-text-muted)]">AXA Premium – Požár, Voda, Krádež, Povodně</p>
        </div>
        <div className="bg-[var(--color-dark-50)] p-6 rounded-[var(--radius-lg)]">
          <h3 className="heading-8 mb-4">Pojištěná osoba</h3>
          <p className="body-sm text-[var(--color-text-muted)]">Jan Novák, jan.novak@email.cz</p>
        </div>
        <div className="bg-[var(--color-primary)] text-white p-6 rounded-[var(--radius-lg)]">
          <p className="body-sm opacity-90">Celková cena</p>
          <p className="heading-3">3 520 Kč / měsíc</p>
        </div>
      </div>

      <div className="space-y-4 mb-12">
        <Checkbox
          label="Souhlasím s obchodními podmínkami a zpracováním osobních údajů"
          checked={consent1}
          onChange={(e) => setConsent1(e.target.checked)}
        />
        <Checkbox
          label="Souhlasím s marketingovými sděleními"
          checked={consent2}
          onChange={(e) => setConsent2(e.target.checked)}
        />
      </div>

      <div className="flex gap-4 justify-center">
        <Link to="/pojisteni/majetek/nabidky">
          <Button variant="outline" size="lg">Zpět</Button>
        </Link>
        <Button variant="primary" size="lg" disabled={!consent1}>
          Sjednat a zaplatit
        </Button>
      </div>
    </div>
  );
}
