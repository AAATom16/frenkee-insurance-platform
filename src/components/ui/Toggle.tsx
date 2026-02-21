import { useState, useEffect } from 'react';

interface ToggleProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

export function Toggle({ checked = false, onChange, label, disabled }: ToggleProps) {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleChange = () => {
    if (disabled) return;
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange?.(newValue);
  };

  return (
    <label className="flex items-center gap-3 cursor-pointer">
      {label && <span className="body-sm text-[var(--color-text)]">{label}</span>}
      <button
        type="button"
        role="switch"
        aria-checked={isChecked}
        onClick={handleChange}
        disabled={disabled}
        className={`relative w-12 h-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] ${
          isChecked ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-dark-200)]'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <span
          className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all ${
            isChecked ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </label>
  );
}
