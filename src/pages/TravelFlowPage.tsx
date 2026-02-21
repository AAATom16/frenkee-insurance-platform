import { ProgressIndicator } from '../components/ui';

const STEPS = [
  { label: 'Vyplnění', description: 'Základní údaje o cestě' },
  { label: 'Nabídky', description: 'Výběr pojištění' },
  { label: 'Údaje', description: 'Osobní údaje' },
  { label: 'Platba', description: 'Dokončení objednávky' },
];

export function TravelFlowPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="heading-2 text-[var(--color-primary)] text-center mb-4">
        Online pojištění cestování
      </h1>
      <p className="body-lg text-[var(--color-text-muted)] text-center mb-12">
        4 kroky k pojištění vaší cesty
      </p>

      <div className="mb-12">
        <ProgressIndicator current={1} total={4} />
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {STEPS.map((step, i) => (
          <div
            key={step.label}
            className="p-6 rounded-[var(--radius-lg)] border-2 border-[var(--color-border)] text-center"
          >
            <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center heading-8 mx-auto mb-4">
              {i + 1}
            </div>
            <h3 className="heading-8 mb-2">{step.label}</h3>
            <p className="caption">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
