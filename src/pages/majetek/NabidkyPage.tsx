import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Toggle } from '../../components/ui';

const OFFERS = [
  { id: 'axa-comfort', name: 'AXA Comfort', price: 2840, period: 'měsíčně', features: ['Požár', 'Voda', 'Krádež', 'Vandalismus'] },
  { id: 'axa-premium', name: 'AXA Premium', price: 3520, period: 'měsíčně', features: ['Vše z Comfort', 'Povodně', 'Zemětřesení'], popular: true },
];

export function NabidkyPage() {
  const [selectedOffer, setSelectedOffer] = useState('axa-premium');
  const [paymentPeriod, setPaymentPeriod] = useState<'mesic' | 'rok'>('mesic');
  const [addons, setAddons] = useState({ pojisteniSkla: false, asistencni: false });

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="heading-2 text-[var(--color-primary)] text-center mb-4">
        Srovnání nabídek
      </h1>
      <p className="body-lg text-[var(--color-text-muted)] text-center mb-12">
        Vyberte si optimální pojištění pro vaši nemovitost
      </p>

      <div className="flex justify-center gap-4 mb-12">
        <button
          onClick={() => setPaymentPeriod('mesic')}
          className={`px-6 py-2 rounded-[var(--radius-md)] body-sm font-medium ${
            paymentPeriod === 'mesic'
              ? 'bg-[var(--color-primary)] text-white'
              : 'bg-[var(--color-dark-50)] text-[var(--color-text)]'
          }`}
        >
          Měsíčně
        </button>
        <button
          onClick={() => setPaymentPeriod('rok')}
          className={`px-6 py-2 rounded-[var(--radius-md)] body-sm font-medium ${
            paymentPeriod === 'rok'
              ? 'bg-[var(--color-primary)] text-white'
              : 'bg-[var(--color-dark-50)] text-[var(--color-text)]'
          }`}
        >
          Ročně
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {OFFERS.map((offer) => (
          <div
            key={offer.id}
            onClick={() => setSelectedOffer(offer.id)}
            className={`p-8 rounded-[var(--radius-lg)] border-2 cursor-pointer transition-colors ${
              selectedOffer === offer.id
                ? 'border-[var(--color-primary)] bg-[var(--color-primary-light)]/10'
                : 'border-[var(--color-border)] hover:border-[var(--color-primary)]/50'
            } ${offer.popular ? 'relative' : ''}`}
          >
            {offer.popular && (
              <span className="absolute -top-3 left-4 px-3 py-1 bg-[var(--color-orange-500)] text-white body-sm font-medium rounded">
                Nejpopulárnější
              </span>
            )}
            <h3 className="heading-5 mb-4">{offer.name}</h3>
            <p className="heading-3 text-[var(--color-primary)] mb-6">
              {paymentPeriod === 'mesic' ? offer.price : offer.price * 12} Kč
              <span className="body-sm font-normal text-[var(--color-text-muted)]">/{paymentPeriod === 'mesic' ? 'měsíc' : 'rok'}</span>
            </p>
            <ul className="space-y-2 mb-6">
              {offer.features.map((f) => (
                <li key={f} className="body-sm flex items-center gap-2">
                  <span className="text-green-600">✓</span> {f}
                </li>
              ))}
            </ul>
            <Button variant={selectedOffer === offer.id ? 'primary' : 'outline'} size="md" className="w-full">
              Vybrat
            </Button>
          </div>
        ))}
      </div>

      <div className="bg-[var(--color-dark-50)] p-6 rounded-[var(--radius-lg)] space-y-4">
        <h3 className="heading-8">Rozšíření pojištění</h3>
        <div className="flex items-center justify-between">
          <span className="body-sm">Pojištění skla</span>
          <Toggle checked={addons.pojisteniSkla} onChange={(v) => setAddons({ ...addons, pojisteniSkla: v })} />
        </div>
        <div className="flex items-center justify-between">
          <span className="body-sm">Asistenční služby</span>
          <Toggle checked={addons.asistencni} onChange={(v) => setAddons({ ...addons, asistencni: v })} />
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link to="/pojisteni/majetek/shrnuti">
          <Button variant="primary" size="lg">Pokračovat k platbě</Button>
        </Link>
      </div>
    </div>
  );
}
