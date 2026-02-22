/**
 * StepStepper – krokový indikátor 1:1 s Figmou
 * Kruhy s čísly, labely pod kruhy, spojovací čáry.
 * Aktivní = plné fialové, neaktivní = obrys.
 */
interface StepStepperProps {
  current: number;
  total: number;
  labels?: string[];
}

export function StepStepper({ current, total, labels }: StepStepperProps) {
  const steps = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <div className="flex items-center justify-center gap-2 w-full flex-wrap">
        {steps.map((step) => {
          const isActive = step === current;
          const isPast = step < current;
          return (
            <div key={step} className="flex items-center gap-2">
              <div className="flex flex-col items-center gap-1">
                <div
                  className={`flex items-center justify-center rounded-full size-9 flex-shrink-0 ${
                    isActive || isPast
                      ? 'bg-[var(--color-primary)] text-white'
                      : 'bg-transparent border-2 border-[var(--color-border)]'
                  }`}
                >
                  <span
                    className={`button-text text-sm ${
                      isActive || isPast ? 'text-white' : 'text-[var(--color-text-muted)]'
                    }`}
                  >
                    {step}
                  </span>
                </div>
                {labels && labels[step - 1] && (
                  <span
                    className={`text-xs font-semibold whitespace-nowrap max-w-[52px] text-center leading-tight ${
                      isActive || isPast ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-muted)]'
                    }`}
                  >
                    {labels[step - 1]}
                  </span>
                )}
              </div>
              {step < total && (
                <div
                  className={`h-0.5 w-10 flex-shrink-0 ${
                    isPast ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-border)]'
                  }`}
                  aria-hidden
                />
              )}
            </div>
          );
        })}
      </div>
      <p className="caption font-semibold text-[var(--color-text-muted)]">
        Krok {current} z {total}
      </p>
    </div>
  );
}
