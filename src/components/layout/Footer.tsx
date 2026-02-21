import { Link } from 'react-router-dom';
import { Button } from '../ui';
import { useState } from 'react';

const CUSTOMER_SERVICE_LINKS = [
  { to: '/obchodni-podminky', label: 'Obchodní podmínky' },
  { to: '/spolupracujici-instituce', label: 'Spolupracující instituce' },
  { to: '/licence', label: 'Licence a certifikace' },
  { to: '/ochrana-udaju', label: 'Ochrana osobních údajů' },
  { to: '/reklamacni-rad', label: 'Reklamační řád' },
  { to: '/zpetna-vazba', label: 'Zpětná vazba' },
  { to: '/whistleblowing', label: 'Whistleblowing' },
];

export function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-[var(--color-dark-50)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="heading-6 text-[var(--color-primary)] block mb-4">
              Frenkee
            </Link>
            <p className="body-sm text-[var(--color-text-muted)]">
              Provozovatel portálu Frenkee je společnost InSureMe.com s.r.o. zapsaná v živnostenském rejstříku
              vedeném příslušným živnostenským úřadem jako nezávislý zprostředkovatel.
            </p>
          </div>
          <div>
            <h3 className="heading-8 text-[var(--color-text)] mb-4">Zákaznický servis</h3>
            <ul className="space-y-2">
              {CUSTOMER_SERVICE_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="body-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="heading-8 text-[var(--color-text)] mb-4">Buďte v kontaktu</h3>
            <div className="space-y-3">
              <p className="body-sm text-[var(--color-text-muted)] flex items-center gap-2">
                <span className="text-[var(--color-primary)]">📞</span> +420 226 633 522
              </p>
              <p className="body-sm text-[var(--color-text-muted)] flex items-center gap-2">
                <span className="text-[var(--color-primary)]">📞</span> +420 790 421 030
              </p>
              <p className="body-sm text-[var(--color-text-muted)]">Po-Pá (09:00 - 17:00)</p>
              <p className="body-sm text-[var(--color-text-muted)] flex items-center gap-2">
                <span className="text-[var(--color-primary)]">✉</span> info@frenkee.cz
              </p>
              <div className="flex gap-2 mt-2">
                {['Instagram', 'LinkedIn', 'Facebook'].map((name) => (
                  <a
                    key={name}
                    href="#"
                    className="w-8 h-8 rounded-[var(--radius-md)] bg-[var(--color-primary)] text-white flex items-center justify-center text-xs"
                  >
                    {name[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--color-primary)] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white">
            <h3 className="heading-7 mb-2">Nenechte si ujít novinky a tipy</h3>
            <p className="body-sm opacity-90">
              Přihlaste se k odběru a dostávejte praktické rady o pojištění přímo do schránky.
            </p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="váš@email.cz"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 md:w-64 px-4 py-3 rounded-[var(--radius-md)] border-0 body-sm"
            />
            <Button variant="secondary" size="md" className="whitespace-nowrap">
              Odebírat
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-[var(--color-dark-50)] py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="body-sm text-[var(--color-text-muted)]">
            Na tento projekt byla poskytnuta finanční podpora od Evropské unie.
          </p>
          <p className="caption text-[var(--color-text-muted)]">© 2026 Frenkee.cz All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
