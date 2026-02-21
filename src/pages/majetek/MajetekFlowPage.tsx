import { Link } from 'react-router-dom';
import { ProgressIndicator } from '../../components/ui';

const STEPS = [
  { path: '/pojisteni/majetek', label: 'Úvod' },
  { path: '/pojisteni/majetek/zakladni-udaje', label: 'Základní údaje' },
  { path: '/pojisteni/majetek/detail', label: 'Detail bytu' },
  { path: '/pojisteni/majetek/domacnost', label: 'Domácnost' },
  { path: '/pojisteni/majetek/osobni-udaje', label: 'Osobní údaje' },
  { path: '/pojisteni/majetek/nabidky', label: 'Nabídky' },
  { path: '/pojisteni/majetek/shrnuti', label: 'Shrnutí' },
];

export function MajetekFlowPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="heading-2 text-[var(--color-primary)] text-center mb-4">
        Online pojištění majetku
      </h1>
      <p className="body-lg text-[var(--color-text-muted)] text-center mb-12">
        Vyplňte několik kroků a získejte nabídku na míru
      </p>

      <div className="mb-12">
        <ProgressIndicator current={1} total={7} labels={STEPS.map((s) => s.label)} />
      </div>

      <div className="space-y-3">
        {STEPS.map((step, i) => (
          <Link
            key={step.path}
            to={step.path}
            className="block p-4 rounded-[var(--radius-md)] border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-light)]/20 transition-colors"
          >
            <span className="body-sm font-medium text-[var(--color-text-muted)]">Krok {i + 1}</span>
            <span className="body font-semibold ml-2">{step.label}</span>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link to="/pojisteni/majetek/zakladni-udaje">
          <button className="px-8 py-3 rounded-[var(--radius-md)] bg-[var(--color-primary)] text-white body font-semibold hover:opacity-90">
            Začít
          </button>
        </Link>
      </div>
    </div>
  );
}
