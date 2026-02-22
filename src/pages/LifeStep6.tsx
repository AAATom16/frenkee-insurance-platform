import { useNavigate } from 'react-router-dom';
import { LifeProgress } from '../components/LifeProgress';
import { Button } from '../components/ui';

export function LifeStep6() {
  const navigate = useNavigate();

  return (
    <div className="bg-white flex flex-col gap-[24px] items-center p-[24px] w-full min-h-screen">
      <h1 className="heading-2 text-[var(--color-primary)] text-center tracking-tight">
        Online sjednání životního pojištění
      </h1>

      <div className="flex flex-col gap-[24px] items-center px-4 md:px-[80px] py-[32px] w-full max-w-[640px]">
        <LifeProgress current={6} total={8} />

        <div className="flex flex-col gap-[24px] w-full text-center">
          <div className="flex flex-col items-center gap-4 p-6 rounded-[12px] bg-green-50 border border-green-200/60 w-full">
            <div className="size-[96px] rounded-full bg-green-100 flex items-center justify-center text-green-600" aria-hidden>
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
            <h2 className="heading-4 text-[var(--color-primary)]">
              Gratulujeme!
            </h2>
            <p className="body-lg text-[var(--color-primary)] font-medium">
              Sjednání pojištění je téměř hotové.
            </p>
          </div>

          <div className="border border-[#e2e9f0] rounded-[12px] p-6 text-left bg-[#f8fafc]">
            <p className="body-lg font-bold text-[var(--color-primary)] mb-2">Životní pojištění na 10 let</p>
            <p className="body text-[var(--color-text-muted)] mb-4">658 Kč / měsíc</p>
            <p className="body-sm text-[var(--color-text-muted)] mb-1">Krytí: Smrt 1 000 000 Kč, Invalidita, Vážné nemoci</p>
            <p className="body-sm text-[var(--color-text-muted)]">Osobní a kontaktní údaje byly zaznamenány.</p>
          </div>

          <Button
            type="button"
            size="lg"
            className="w-full h-[52px] rounded-[var(--radius-lg)] text-lg"
            onClick={() => navigate('/')}
          >
            Závazně sjednat
          </Button>
        </div>
      </div>
    </div>
  );
}
