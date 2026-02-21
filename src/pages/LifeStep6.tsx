import { useNavigate } from 'react-router-dom';

const STEP_LABELS = ['Úvod', 'Zdraví', 'Krytí', 'Nabídky', 'Kontakt', 'Shrnutí', 'Kontrola', 'Hotovo'];

function Progress() {
  return (
    <div className="flex items-center justify-center gap-[8px] w-full flex-wrap">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((step) => (
        <div key={step} className="flex items-center gap-[8px]">
          <div className="flex flex-col items-center gap-[4px]">
            <div className="flex items-center justify-center rounded-full size-[36px] bg-[#3f2578]">
              <span className="font-bold text-[14px] text-white" style={{ fontFamily: "'Mona Sans', sans-serif" }}>{step}</span>
            </div>
            <span className="font-bold text-[12px] whitespace-nowrap max-w-[52px] text-center text-[#3f2578]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>{STEP_LABELS[step - 1]}</span>
          </div>
          {step < 8 && <div className="h-[2px] w-[40px] bg-[#3f2578]" />}
        </div>
      ))}
    </div>
  );
}

export function LifeStep6() {
  const navigate = useNavigate();

  return (
    <div className="bg-white flex flex-col gap-[24px] items-center p-[24px] w-full min-h-screen">
      <h1 className="text-[32px] md:text-[40px] font-bold text-center tracking-tight" style={{ fontFamily: "'Mona Sans', sans-serif", color: '#3f2578' }}>
        Online sjednání životního pojištění
      </h1>

      <div className="flex flex-col gap-[24px] items-center px-4 md:px-[99px] py-[24px] w-full max-w-[640px]">
        <p className="text-[#94a3b8] text-[14px] font-semibold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Krok 6 z 8</p>
        <Progress />

        <div className="flex flex-col gap-[24px] w-full text-center">
          <div className="flex flex-col items-center gap-4 p-6 rounded-[12px] bg-green-50 border border-green-200/60 w-full">
            <div className="size-[96px] rounded-full bg-green-100 flex items-center justify-center text-green-600" aria-hidden>
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
            <h2 className="text-[28px] font-bold text-[#3f2578]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>
              Gratulujeme!
            </h2>
            <p className="text-[#3f2578] text-[18px] font-medium" style={{ fontFamily: "'Mona Sans', sans-serif" }}>
              Sjednání pojištění je téměř hotové.
            </p>
          </div>

          <div className="border border-[#e2e9f0] rounded-[12px] p-6 text-left bg-[#f8fafc]">
            <p className="text-[#3f2578] text-[18px] font-bold mb-2" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Životní pojištění na 10 let</p>
            <p className="text-[#64748b] text-[16px] mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>658 Kč / měsíc</p>
            <p className="text-[#64748b] text-[14px] mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>Krytí: Smrt 1 000 000 Kč, Invalidita, Vážné nemoci</p>
            <p className="text-[#64748b] text-[14px]" style={{ fontFamily: "'Inter', sans-serif" }}>Osobní a kontaktní údaje byly zaznamenány.</p>
          </div>

          <button
            type="button"
            onClick={() => navigate('/')}
            className="flex h-[52px] items-center justify-center rounded-[12px] w-full text-white text-[18px] font-bold"
            style={{ backgroundImage: 'linear-gradient(263.127deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%)', fontFamily: "'Mona Sans', sans-serif" }}
          >
            Závazně sjednat
          </button>
        </div>
      </div>
    </div>
  );
}
