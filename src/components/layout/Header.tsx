import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui';

const NAV_ITEMS = [
  { path: '/pojisteni/auto', label: 'Auto' },
  { path: '/pojisteni/majetek', label: 'Majetek' },
  { path: '/pojisteni/mazlicci', label: 'Mazlíčci' },
  { path: '/pojisteni/cestovani', label: 'Cestování' },
  { path: '/pojisteni/odpovednost', label: 'Odpovědnost' },
  { path: '/pojisteni/zivnost', label: 'Živnost' },
  { path: '/pro-firmy', label: 'Pro firmy' },
];

export function Header() {
  const location = useLocation();

  return (
    <header className="border-b border-[var(--color-border)] bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="heading-6 text-[var(--color-primary)]">
            Frenkee
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`body-sm font-medium transition-colors ${
                  location.pathname.startsWith(item.path)
                    ? 'text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] pb-1'
                    : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/registrace">
              <Button variant="primary" size="sm">
                Registrace
              </Button>
            </Link>
            <Link to="/kontakt">
              <Button variant="outline" size="sm">
                Kontakt
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
