import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const imgFrenkeeLogo = "/assets/frenkee-logo.svg";

const NAV_ITEMS = [
  { path: '/pojisteni/auto', label: 'Auto' },
  { path: '/pojisteni/majetek', label: 'Majetek' },
  { path: '/pojisteni/mazlicci', label: 'Mazlíčci' },
  { path: '/pojisteni/cestovani', label: 'Cestování' },
  { path: '/pojisteni/odpovednost', label: 'Odpovědnost' },
  { path: '/pojisteni/zivnost', label: 'Živnost' },
  { path: '/pojisteni/zivot', label: 'Život' },
];

export function Header() {
  const location = useLocation();
  const navRef = React.useRef<HTMLElement>(null);
  const [linePosition, setLinePosition] = React.useState<{ left: number; width: number } | null>(null);

  React.useEffect(() => {
    if (!navRef.current) return;

    const activeLink = navRef.current.querySelector('a[data-active="true"]');
    if (activeLink) {
      const headerRect = navRef.current.closest('header')?.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      
      if (headerRect) {
        setLinePosition({
          left: linkRect.left - headerRect.left,
          width: linkRect.width
        });
      }
    } else {
      setLinePosition(null);
    }
  }, [location.pathname]);

  return (
    <header className="bg-white flex items-center justify-between px-4 md:px-6 py-3 relative rounded-[9px] shadow-[var(--shadow-card)] w-full max-w-[1200px] min-h-[80px]">
      <div className="flex items-center shrink-0">
        <Link to="/">
          <img alt="Frenkee" className="h-[29.62px] w-[139.864px]" src={imgFrenkeeLogo} />
        </Link>
      </div>
      <nav ref={navRef} className="flex gap-2 md:gap-3 items-center shrink-0 overflow-x-auto">
        {NAV_ITEMS.map((item) => {
          const isActive = location.pathname.startsWith(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              data-active={isActive}
              className={`flex items-center justify-center ${
                isActive ? 'bg-white px-[4px] py-[4px] rounded-[4px]' : ''
              }`}
            >
              <p 
                className={`text-[15px] md:text-[17px] leading-[20px] whitespace-nowrap font-bold font-mona ${
                  isActive ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-muted)]'
                }`}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </nav>
      <div className="flex gap-[12px] items-center shrink-0">
        <Link to="/registrace" className="bg-[var(--color-primary)] flex items-center justify-center px-4 md:px-[18px] py-2 md:py-[10px] rounded-[var(--radius-md)] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
          <p className="leading-[24px] text-[14px] md:text-[16px] text-white font-extrabold font-mona">
            Registrace
          </p>
        </Link>
        <Link to="/kontakt" className="flex items-center justify-center">
          <p className="text-[15px] md:text-[17px] leading-[20px] text-[var(--color-primary)] underline decoration-solid font-medium font-mona">
            Kontakt
          </p>
        </Link>
      </div>
      
      {/* Active line indicator */}
      {linePosition && (
        <div 
          className="absolute rounded-full"
          style={{ 
            left: `${linePosition.left}px`,
            width: `${linePosition.width}px`,
            height: '3px',
            bottom: '12px',
            backgroundColor: 'var(--color-primary)'
          }}
        />
      )}
    </header>
  );
}
