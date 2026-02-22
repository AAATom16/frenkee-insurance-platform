/* Figma tokens: color/violet/31 #3f2578, color/dark/100 #e2e9f0, color/dark/300 #94a3b8, family/sans Inter */
const STEP_LABELS = ['Úvod', 'Zdraví', 'Krytí', 'Nabídky', 'Kontakt', 'Shrnutí', 'Kontrola', 'Hotovo'];

export function LifeProgress({ current, total = 8 }: { current: number; total?: number }) {
  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <div className="flex items-center justify-center gap-[8px] w-full flex-wrap">
        {Array.from({ length: total }, (_, i) => i + 1).map((step) => {
          const isActive = step === current;
          const isPast = step < current;
          return (
            <div key={step} className="flex items-center gap-[8px]">
              <div className="flex flex-col items-center gap-[4px]">
                <div
                  className={`flex items-center justify-center rounded-full size-[36px] ${
                    isActive ? 'bg-[#3f2578]' : isPast ? 'bg-[#3f2578]' : 'bg-transparent border-2 border-[#e2e9f0]'
                  }`}
                >
                <span
                  className={`font-bold text-[14px] ${isActive || isPast ? 'text-white' : 'text-[#94a3b8]'}`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                    {step}
                  </span>
                </div>
                <span
                  className={`font-bold text-[12px] whitespace-nowrap max-w-[52px] text-center leading-tight ${
                    isActive || isPast ? 'text-[#3f2578]' : 'text-[#94a3b8]'
                  }`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {STEP_LABELS[step - 1]}
                </span>
              </div>
              {step < total && (
                <div
                  className={`h-[2px] w-[40px] ${isPast ? 'bg-[#3f2578]' : 'bg-[#e2e9f0]'}`}
                  aria-hidden
                />
              )}
            </div>
          );
        })}
      </div>
      <p className="text-[#94a3b8] text-[14px] font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
        Krok {current} z {total}
      </p>
    </div>
  );
}
