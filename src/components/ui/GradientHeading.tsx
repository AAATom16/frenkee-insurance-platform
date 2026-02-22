interface GradientHeadingProps {
  children: React.ReactNode;
  size?: 'xl' | 'lg' | 'md' | 'sm';
  className?: string;
}

const sizes = {
  xl: 'text-[72px] leading-none tracking-[-1px]',
  lg: 'text-[48px] leading-none tracking-[-1px]',
  md: 'text-[36px] leading-[1.1]',
  sm: 'text-[24px] leading-[1.2]',
};

export function GradientHeading({ children, size = 'lg', className = '' }: GradientHeadingProps) {
  return (
    <div
      className={`font-mona font-extrabold text-center bg-clip-text ${sizes[size]} ${className}`}
      style={{
        backgroundImage: 'linear-gradient(231.904deg, rgb(167, 82, 169) 26.752%, rgb(63, 37, 120) 100%)',
        WebkitTextFillColor: 'transparent',
      }}
    >
      {children}
    </div>
  );
}
