interface Option {
  value: string;
  label: string;
}

interface SegmentedControlProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  name?: string;
  className?: string;
}

export function SegmentedControl({ options, value, onChange, name, className = '' }: SegmentedControlProps) {
  return (
    <div
      className={`bg-white border border-[#e2e9f0] flex h-10 items-center overflow-hidden pl-1 pr-2 py-1 rounded-[var(--radius-md)] shadow-[var(--shadow-input)] ${className}`}
      role="group"
      aria-label={name}
    >
      {options.map((opt) => {
        const isActive = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`flex flex-1 h-full items-center justify-center overflow-hidden px-3 rounded-[6px] transition-colors ${
              isActive
                ? 'bg-[var(--color-primary)] text-white shadow-[var(--shadow-input)]'
                : 'bg-transparent text-[var(--color-dark-300)] hover:text-[var(--color-primary)]'
            }`}
          >
            <span className="font-mona font-bold text-[14px] leading-[1.6] whitespace-nowrap">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}
