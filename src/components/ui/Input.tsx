import type { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  infoIcon?: boolean;
  required?: boolean;
}

const inputBase =
  'font-mona font-bold text-[14px] leading-[1.6] h-10 px-3 rounded-[var(--radius-md)] bg-white border border-[#e2e9f0] outline-none transition-colors placeholder:text-[#94a3b8] focus:border-[var(--color-primary)]';
const inputShadow = 'shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, infoIcon, required, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label className="font-mona font-bold text-[18px] text-[var(--color-primary)] flex items-center gap-1">
            {label}
            {required && <span className="text-[var(--color-error)]">*</span>}
            {infoIcon && (
              <span className="w-4 h-4 rounded-full bg-[var(--color-dark-200)] text-[var(--color-text-muted)] text-xs flex items-center justify-center cursor-help">i</span>
            )}
          </label>
        )}
        <input
          ref={ref}
          className={`${inputBase} ${inputShadow} ${error ? 'border-red-500' : ''} ${className}`}
          {...props}
        />
        {hint && <span className="caption text-[var(--color-text-muted)]">{hint}</span>}
        {error && <span className="caption text-red-500">{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
