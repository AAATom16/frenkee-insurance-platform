import { useNavigate } from 'react-router-dom';

const PACKAGES = [
  { id: 'zakladni', name: 'Základní', price: 300, features: ['Léčebné výlohy', 'Asistenční služby', 'Úrazové pojištění'] },
  { id: 'standard', name: 'Standard', price: 450, features: ['Léčebné výlohy', 'Asistenční služby', 'Úrazové pojištění', 'Pojištění zavazadel'] },
  { id: 'komplet', name: 'Komplet', price: 600, features: ['Vše v Standard', 'Sportovní aktivity', 'Rozšířené krytí'] },
];

export function TravelStep2() {
  const navigate = useNavigate();

  return (
    <div className="bg-white flex flex-col gap-[24px] items-center p-[24px] w-full min-h-screen">
      <div
        className="bg-clip-text flex flex-col justify-center leading-[0] text-[48px] text-center tracking-[-1px] w-full"
        style={{
          backgroundImage: 'linear-gradient(231.904deg, rgb(167, 82, 169) 26.752%, rgb(63, 37, 120) 100%)',
          WebkitTextFillColor: 'transparent',
          fontFamily: "'Mona Sans', sans-serif",
          fontWeight: 800,
        }}
      >
        <p className="leading-none whitespace-pre-wrap">Online pojištění cestování</p>
      </div>
      <p className="text-[#3f2578] text-[16px] font-bold text-center" style={{ fontFamily: "'Mona Sans', sans-serif" }}>
        4 kroky k pojištění vaší cesty
      </p>

      <div className="flex flex-col gap-[24px] items-center px-[99px] py-[24px] w-[1000px] max-w-full">
        {/* Progress - step 2 active */}
        <div className="flex items-center justify-center gap-[12px] w-full">
          <div className="flex flex-col items-center gap-[8px]">
            <div className="bg-[#3f2578] flex items-center justify-center rounded-full size-[40px]">
              <span className="text-white font-bold text-[16px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>1</span>
            </div>
            <span className="text-[#94a3b8] font-bold text-[14px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Vyplnění</span>
          </div>
          <div className="bg-[#3f2578] h-[2px] w-[80px]" />
          <div className="flex flex-col items-center gap-[8px]">
            <div className="bg-[#3f2578] flex items-center justify-center rounded-full size-[40px]">
              <span className="text-white font-bold text-[16px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>2</span>
            </div>
            <span className="text-[#3f2578] font-bold text-[14px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Nabídky</span>
          </div>
          <div className="bg-[#e2e9f0] h-[2px] w-[80px]" />
          <div className="flex flex-col items-center gap-[8px]">
            <div className="bg-[#e2e9f0] flex items-center justify-center rounded-full size-[40px]">
              <span className="text-[#94a3b8] font-bold text-[16px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>3</span>
            </div>
            <span className="text-[#94a3b8] font-bold text-[14px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Údaje</span>
          </div>
          <div className="bg-[#e2e9f0] h-[2px] w-[80px]" />
          <div className="flex flex-col items-center gap-[8px]">
            <div className="bg-[#e2e9f0] flex items-center justify-center rounded-full size-[40px]">
              <span className="text-[#94a3b8] font-bold text-[16px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>4</span>
            </div>
            <span className="text-[#94a3b8] font-bold text-[14px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Platba</span>
          </div>
        </div>

        {/* Summary bar */}
        <div className="bg-[#f1f5f9] flex gap-[24px] items-center px-[16px] py-[12px] rounded-[8px] w-full flex-wrap">
          <span className="text-[14px] text-[#64748b]" style={{ fontFamily: "'Inter', sans-serif" }}>
            Datum: 1.10. – 10.10.
          </span>
          <span className="text-[14px] text-[#64748b]" style={{ fontFamily: "'Inter', sans-serif" }}>
            Destinace: Německo
          </span>
          <span className="text-[14px] text-[#64748b]" style={{ fontFamily: "'Inter', sans-serif" }}>
            Důvod cesty: Rekreace
          </span>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="border border-[#e2e9f0] flex flex-col gap-[16px] p-[24px] rounded-[12px] bg-white shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]"
            >
              <div className="flex items-center gap-[8px]">
                <div className="size-[40px] rounded-[8px] bg-[#3f2578]/10 flex items-center justify-center">
                  <span className="text-[#3f2578] text-[18px] font-bold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>🛡</span>
                </div>
                <div>
                  <p className="text-[#3f2578] text-[18px] font-bold" style={{ fontFamily: "'Mona Sans', sans-serif" }}>{pkg.name}</p>
                  <p className="text-[#94a3b8] text-[12px]" style={{ fontFamily: "'Inter', sans-serif" }}>4,5 ★ 200 hodnocení</p>
                </div>
              </div>
              <ul className="flex flex-col gap-[8px]">
                {pkg.features.map((f) => (
                  <li key={f} className="flex gap-[8px] items-center text-[14px] text-[#3f2578]" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <span className="text-green-600">✓</span> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-[12px]">
                <p className="text-[24px] font-bold text-[#3f2578]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>{pkg.price} Kč</p>
                <button
                  type="button"
                  onClick={() => navigate('/pojisteni/cestovani/udaje')}
                  className="flex h-[44px] items-center justify-center rounded-[8px] text-white text-[14px] font-bold w-full"
                  style={{ backgroundImage: 'linear-gradient(263.127deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%)', fontFamily: "'Mona Sans', sans-serif" }}
                >
                  Vybrat
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
