import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Toggle } from '../../components/ui';

export function DomacnostPage() {
  const [domacnost, setDomacnost] = useState(true);
  const [values, setValues] = useState({
    hodnotaNemovitosti: '0',
    veciZvlastniHodnoty: '0',
    vybaveniVeeiPripevnene: '0',
    veciVNebytovychProstorech: '0',
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="heading-2 text-[var(--color-primary)] text-center mb-4">
        Online pojištění majetku
      </h1>

      <div className="bg-[var(--color-primary-light)]/30 p-6 rounded-[var(--radius-lg)] mb-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex gap-4">
            <span className="text-3xl">🛏️</span>
            <div>
              <h2 className="heading-6 mb-2">Domácnost</h2>
              <p className="body-sm text-[var(--color-text-muted)]">
                tvoří soubor movitých věcí sloužících k běžnému užívání osobami žijícími ve společné domácnosti
                v pojištěné nemovitosti.
              </p>
            </div>
          </div>
          <Toggle checked={domacnost} onChange={setDomacnost} />
        </div>
      </div>

      <div className="space-y-6">
        <Input
          label="Hodnota nemovitosti *"
          type="number"
          value={values.hodnotaNemovitosti}
          onChange={(e) => setValues({ ...values, hodnotaNemovitosti: e.target.value })}
          hint="Cena, za kterou by bylo možné na trhu koupit stejný byt, stejné kvality, ve stejné lokalitě."
          infoIcon
        />
        <div className="flex gap-2 items-end">
          <div className="flex-1">
            <Input
              label="Věci zvláštní hodnoty *"
              type="number"
              value={values.veciZvlastniHodnoty}
              onChange={(e) => setValues({ ...values, veciZvlastniHodnoty: e.target.value })}
            />
          </div>
          <span className="body-sm text-[var(--color-text-muted)] mb-3">Kč</span>
        </div>
        <div className="flex gap-2 items-end">
          <div className="flex-1">
            <Input
              label="Vybavení i věci připevněné *"
              type="number"
              value={values.vybaveniVeeiPripevnene}
              onChange={(e) => setValues({ ...values, vybaveniVeeiPripevnene: e.target.value })}
            />
          </div>
          <span className="body-sm text-[var(--color-text-muted)] mb-3">Kč</span>
        </div>
        <div className="flex gap-2 items-end">
          <div className="flex-1">
            <Input
              label="Věci v nebytových prostorech *"
              type="number"
              value={values.veciVNebytovychProstorech}
              onChange={(e) => setValues({ ...values, veciVNebytovychProstorech: e.target.value })}
            />
          </div>
          <span className="body-sm text-[var(--color-text-muted)] mb-3">Kč</span>
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link to="/pojisteni/majetek/nabidky">
          <Button variant="primary" size="lg">
            Pokračovat
          </Button>
        </Link>
      </div>
    </div>
  );
}
