export function LifeProgress({ current, total = 8 }: { current: number; total?: number }) {
  const steps = Array.from({ length: total }, (_, index) => index + 1);

  return (
    <div className="flex flex-col gap-[8px] items-center w-full">
      <div className="flex gap-[6px] items-center justify-center w-full">
        {steps.map((step) => (
          <div
            key={step}
            className={`h-[4px] rounded-[2px] w-[32px] ${step <= current ? 'bg-[var(--color-primary)]' : 'bg-[#b2a8c9]'}`}
          />
        ))}
      </div>
      <p className="font-mona font-medium leading-[1.4] text-[12px] text-[#8b7aad]">
        Krok {current} z {total}
      </p>
    </div>
  );
}
