import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from '../../components/ui';

const TABS = [
  { value: 'obcan', label: 'Občan' },
  { value: 'osvc', label: 'OSVČ' },
  { value: 'pravnicka', label: 'Právnická osoba' },
  { value: 'cizinec', label: 'Cizinec' },
];

export function OsobniUdajePage() {
  const [activeTab, setActiveTab] = useState('obcan');
  const [form, setForm] = useState({
    jmeno: '',
    prijmeni: '',
    email: '',
    telefon: '',
    adresa: '',
    mesto: '',
    psc: '',
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="heading-2 text-[var(--color-primary)] text-center mb-4">
        Online pojištění majetku
      </h1>

      <div className="flex gap-8 mb-12">
        <div className="hidden md:block w-48">
          <div className="w-full h-64 bg-[var(--color-dark-200)] rounded-[var(--radius-lg)] flex items-center justify-center text-6xl">
            🏠
          </div>
        </div>
        <div className="flex-1">
          <div className="flex gap-2 mb-8 border-b border-[var(--color-border)]">
            {TABS.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-4 py-2 body-sm font-medium border-b-2 -mb-[2px] transition-colors ${
                  activeTab === tab.value
                    ? 'border-[var(--color-primary)] text-[var(--color-primary)]'
                    : 'border-transparent text-[var(--color-text-muted)]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Input label="Jméno" value={form.jmeno} onChange={(e) => setForm({ ...form, jmeno: e.target.value })} />
              <Input label="Příjmení" value={form.prijmeni} onChange={(e) => setForm({ ...form, prijmeni: e.target.value })} />
            </div>
            <Input label="E-mail" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <Input label="Telefon" value={form.telefon} onChange={(e) => setForm({ ...form, telefon: e.target.value })} />
            <Input label="Adresa" value={form.adresa} onChange={(e) => setForm({ ...form, adresa: e.target.value })} />
            <div className="grid grid-cols-2 gap-4">
              <Input label="Město" value={form.mesto} onChange={(e) => setForm({ ...form, mesto: e.target.value })} />
              <Input label="PSČ" value={form.psc} onChange={(e) => setForm({ ...form, psc: e.target.value })} />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link to="/pojisteni/majetek/nabidky">
          <Button variant="primary" size="lg">Pokračovat</Button>
        </Link>
      </div>
    </div>
  );
}
