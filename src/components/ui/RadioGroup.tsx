interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
}

export function RadioGroup({ name, options, value, onChange, label }: RadioGroupProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="font-mona font-bold text-[18px] text-[var(--color-primary)]">{label}</label>
      )}
      <div className="flex gap-3 flex-wrap">
        {options.map((opt) => (
          <label
            key={opt.value}
            className={`px-4 py-3 rounded-[var(--radius-lg)] border-2 font-mona font-bold text-[14px] cursor-pointer transition-colors flex items-center gap-2 ${
              value === opt.value
                ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]'
                : 'bg-white text-[var(--color-dark-300)] border-[var(--color-border)] hover:border-[var(--color-primary)]/50'
            }`}
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange?.(opt.value)}
              className="sr-only"
            />
            {opt.label}
          </label>
        ))}
      </div>
    </div>
  );
}
