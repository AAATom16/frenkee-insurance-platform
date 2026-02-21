import type { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  infoIcon?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, infoIcon, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label className="body-sm font-semibold text-[var(--color-text)] flex items-center gap-2">
            {label}
            {infoIcon && (
              <span className="w-4 h-4 rounded-full bg-[var(--color-dark-200)] text-[var(--color-text-muted)] text-xs flex items-center justify-center cursor-help">i</span>
            )}
          </label>
        )}
        <input
          ref={ref}
          className={`body px-4 py-3 border border-[var(--color-border)] rounded-[var(--radius-md)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent ${error ? 'border-red-500' : ''} ${className}`}
          {...props}
        />
        {hint && <span className="caption text-[var(--color-text-muted)]">{hint}</span>}
        {error && <span className="caption text-red-500">{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
