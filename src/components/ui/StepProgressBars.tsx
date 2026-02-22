interface StepProgressBarsProps {
  current: number;
  total: number;
  showLabel?: boolean;
}

export function StepProgressBars({ current, total, showLabel = true }: StepProgressBarsProps) {
  const steps = Array.from({ length: total }, (_, i) => i + 1);
  return (
    <div className="flex flex-col gap-2 items-center w-full">
      <div className="flex gap-1.5 items-center justify-center w-full">
        {steps.map((step) => (
          <div
            key={step}
            className={`h-1 rounded-sm w-8 flex-shrink-0 ${step <= current ? 'bg-[var(--color-primary)]' : 'bg-[#b2a8c9]'}`}
          />
        ))}
      </div>
      {showLabel && (
        <p className="font-mona font-medium leading-[1.4] text-[12px] text-[#8b7aad]">
          Krok {current} z {total}
        </p>
      )}
    </div>
  );
}
