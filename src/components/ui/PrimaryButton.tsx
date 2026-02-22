import type { ButtonHTMLAttributes } from 'react';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function PrimaryButton({ children, size = 'md', className = '', ...props }: PrimaryButtonProps) {
  const sizes = {
    sm: 'h-10 px-4 py-2 text-sm',
    md: 'h-12 px-5 py-3 text-base',
    lg: 'h-[52px] px-8 py-4 text-lg',
  };
  return (
    <button
      type="button"
      className={`font-mona font-bold leading-[1.6] text-white rounded-[var(--radius-lg)] transition-opacity hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed ${sizes[size]} ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(263.233deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%), linear-gradient(90deg, rgb(89, 79, 238) 0%, rgb(89, 79, 238) 100%)',
        boxShadow: '0px 4px 9.2px 0px #a752a9, 0px 0.301px 0.51px 0px #a752a9',
      }}
      {...props}
    >
      {children}
    </button>
  );
}
