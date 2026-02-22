import type { SelectHTMLAttributes } from 'react';
import { forwardRef } from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  placeholder?: string;
}

const selectBase =
  'font-mona font-bold text-[14px] leading-[1.6] h-10 px-3 rounded-[var(--radius-md)] bg-white border border-[#e2e9f0] outline-none transition-colors text-[#94a3b8] focus:border-[var(--color-primary)] appearance-none bg-[url("/assets/dropdown-arrow.svg")] bg-[length:20px] bg-[right_12px_center] bg-no-repeat pr-10';

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, placeholder, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label className="font-mona font-bold text-[18px] text-[var(--color-primary)]">{label}</label>
        )}
        <select
          ref={ref}
          className={`${selectBase} shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] ${className}`}
          {...props}
        >
          {placeholder && (
            <option value="">{placeholder}</option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

Select.displayName = 'Select';
