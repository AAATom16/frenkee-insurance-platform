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
        <label className="body-sm font-semibold text-[var(--color-text)]">{label}</label>
      )}
      <div className="flex gap-2 flex-wrap">
        {options.map((opt) => (
          <label
            key={opt.value}
            className={`px-4 py-2 rounded-[var(--radius-md)] body-sm font-medium cursor-pointer transition-colors ${
              value === opt.value
                ? 'bg-[var(--color-primary)] text-white'
                : 'bg-[var(--color-dark-50)] text-[var(--color-text)] hover:bg-[var(--color-dark-200)]'
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
