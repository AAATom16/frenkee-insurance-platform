import type { InputHTMLAttributes } from 'react';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export function Checkbox({ label, className = '', ...props }: CheckboxProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        className={`w-5 h-5 rounded border-2 border-[var(--color-border)] text-[var(--color-primary)] focus:ring-[var(--color-primary)] ${className}`}
        {...props}
      />
      {label && <span className="body-sm text-[var(--color-text)]">{label}</span>}
    </label>
  );
}
