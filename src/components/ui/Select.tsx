import { useState, useRef, useEffect } from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label?: string;
  options: SelectOption[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  id?: string;
}

const triggerBase =
  'font-mona font-bold text-[14px] leading-[1.6] h-10 px-3 rounded-[var(--radius-md)] bg-white border border-[#e2e9f0] outline-none transition-colors w-full text-left flex items-center justify-between';
const triggerShadow = 'shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]';
const panelBase =
  'absolute top-full left-0 right-0 mt-1 z-50 py-1 rounded-[var(--radius-md)] bg-white border border-[#e2e9f0] shadow-[0px_4px_12px_rgba(0,0,0,0.12)] max-h-[240px] overflow-y-auto';
const optionBase =
  'font-mona font-bold text-[14px] leading-[1.6] px-3 py-2.5 cursor-pointer transition-colors text-[var(--color-text)] hover:bg-[var(--color-primary-light)]/30 hover:text-[var(--color-primary)]';
const optionSelected = 'bg-[var(--color-primary-light)]/20 text-[var(--color-primary)]';

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function Select({ label, options, placeholder, value = '', onChange, disabled, className = '', id }: SelectProps) {
  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedLabel = value ? options.find((o) => o.value === value)?.label : null;
  const displayText = selectedLabel ?? placeholder ?? 'Vyberte...';

  const handleSelect = (opt: SelectOption) => {
    onChange?.(opt.value);
    setOpen(false);
    setFocusedIndex(-1);
  };

  useEffect(() => {
    if (!open) return;
    const idx = options.findIndex((o) => o.value === value);
    setFocusedIndex(idx >= 0 ? idx : 0);
  }, [open, options, value]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        return;
      }
      if (e.key === 'ArrowDown' && focusedIndex < options.length - 1) {
        e.preventDefault();
        setFocusedIndex((i) => i + 1);
        return;
      }
      if (e.key === 'ArrowUp' && focusedIndex > 0) {
        e.preventDefault();
        setFocusedIndex((i) => i - 1);
        return;
      }
      if (e.key === 'Enter' && focusedIndex >= 0 && options[focusedIndex]) {
        e.preventDefault();
        handleSelect(options[focusedIndex]);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, focusedIndex, options]);

  useEffect(() => {
    if (!open) return;
    const onClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [open]);

  return (
    <div ref={containerRef} className={`flex flex-col gap-2 relative ${className}`}>
      {label && (
        <label htmlFor={id} className="font-mona font-bold text-[18px] text-[var(--color-primary)]">
          {label}
        </label>
      )}
      <button
        id={id}
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setOpen((o) => !o)}
        className={`${triggerBase} ${triggerShadow} ${open ? 'border-[var(--color-primary)] ring-2 ring-[var(--color-primary)]/20' : ''} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={label ? undefined : id}
      >
        <span className={selectedLabel ? 'text-[var(--color-text)]' : 'text-[#94a3b8]'}>
          {displayText}
        </span>
        <ChevronDown className={`text-[#94a3b8] shrink-0 ml-2 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <ul
          role="listbox"
          className={panelBase}
          aria-activedescendant={focusedIndex >= 0 ? `select-opt-${focusedIndex}` : undefined}
        >
          {options.map((opt, i) => (
            <li
              key={opt.value}
              id={`select-opt-${i}`}
              role="option"
              aria-selected={opt.value === value}
              ref={(el) => {
                if (i === focusedIndex && el) el.scrollIntoView({ block: 'nearest' });
              }}
              className={`${optionBase} ${opt.value === value ? optionSelected : ''}`}
              onClick={() => handleSelect(opt)}
              onMouseEnter={() => setFocusedIndex(i)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
