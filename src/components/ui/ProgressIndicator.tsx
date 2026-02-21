interface ProgressIndicatorProps {
  current: number;
  total: number;
  labels?: string[];
}

export function ProgressIndicator({ current, total, labels }: ProgressIndicatorProps) {
  const steps = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div className="flex items-center gap-2">
      {steps.map((step) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center body-sm font-semibold ${
              step < current
                ? 'bg-[var(--color-primary)] text-white'
                : step === current
                ? 'bg-[var(--color-primary)] text-white'
                : 'bg-[var(--color-dark-200)] text-[var(--color-text-muted)]'
            }`}
          >
            {step}
          </div>
          {step < total && (
            <div
              className={`w-8 h-1 mx-1 ${
                step < current ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-dark-200)]'
              }`}
            />
          )}
        </div>
      ))}
      {labels && labels.length === total && (
        <span className="body-sm text-[var(--color-text-muted)] ml-4">
          Krok {current}/{total}
        </span>
      )}
    </div>
  );
}
