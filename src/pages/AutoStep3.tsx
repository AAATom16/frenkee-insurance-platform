import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function AutoStep3() {
  const navigate = useNavigate();
  const [limitSkody, setLimitSkody] = useState('35000000');
  const [asistence, setAsistence] = useState(true);
  const [nahradniVozidlo, setNahradniVozidlo] = useState(false);
  const [spoluucast, setSpoluucast] = useState('5000');

  const handleContinue = () => {
    navigate('/pojisteni/auto/nabidky');
  };

  const handleBack = () => {
    navigate('/pojisteni/auto/krok-2');
  };

  return (
    <div className="bg-white flex flex-col gap-[24px] items-center p-[24px] w-full min-h-screen">
      <div className="bg-clip-text flex flex-col font-mona font-extrabold justify-center leading-[0] not-italic relative text-[48px] text-center tracking-[-1px] w-full" style={{ backgroundImage: "linear-gradient(231.904deg, rgb(167, 82, 169) 26.752%, rgb(63, 37, 120) 100%)", WebkitTextFillColor: "transparent" }}>
        <p className="leading-none whitespace-pre-wrap">Online pojištění vozidla</p>
      </div>

      <div className="flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[16px] text-[#3f2578] text-center w-full">
        <p className="leading-[1.6]">5 kroků k povinnému ručení</p>
      </div>

      <div className="flex flex-col gap-[24px] items-center overflow-clip px-[99px] py-[24px] relative w-[1000px] max-w-full">
        {/* Progress indicator */}
        <div className="flex items-center justify-center gap-[12px] relative w-full">
          <div className="flex flex-col items-center gap-[8px]">
            <div className="bg-[#3f2578] flex items-center justify-center rounded-full size-[40px]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.667 5L7.5 14.167L3.333 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[#3f2578] font-mona font-bold text-[14px]">Vozidlo</span>
          </div>
          <div className="bg-[#3f2578] h-[2px] w-[80px]" />
          <div className="flex flex-col items-center gap-[8px]">
            <div className="bg-[#3f2578] flex items-center justify-center rounded-full size-[40px]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.667 5L7.5 14.167L3.333 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[#3f2578] font-mona font-bold text-[14px]">Osobní údaje</span>
          </div>
          <div className="bg-[#3f2578] h-[2px] w-[80px]" />
          <div className="flex flex-col items-center gap-[8px]">
            <div className="bg-[#3f2578] flex items-center justify-center rounded-full size-[40px]">
              <span className="text-white font-mona font-bold text-[16px]">3</span>
            </div>
            <span className="text-[#3f2578] font-mona font-bold text-[14px]">Krytí</span>
          </div>
          <div className="bg-[#e2e9f0] h-[2px] w-[80px]" />
          <div className="flex flex-col items-center gap-[8px]">
            <div className="bg-[#e2e9f0] flex items-center justify-center rounded-full size-[40px]">
              <span className="text-[#94a3b8] font-mona font-bold text-[16px]">4</span>
            </div>
            <span className="text-[#94a3b8] font-mona font-bold text-[14px]">Nabídky</span>
          </div>
          <div className="bg-[#e2e9f0] h-[2px] w-[80px]" />
          <div className="flex flex-col items-center gap-[8px]">
            <div className="bg-[#e2e9f0] flex items-center justify-center rounded-full size-[40px]">
              <span className="text-[#94a3b8] font-mona font-bold text-[16px]">5</span>
            </div>
            <span className="text-[#94a3b8] font-mona font-bold text-[14px]">Shrnutí</span>
          </div>
        </div>

        {/* Limit pojistného plnění */}
        <div className="flex items-start relative w-full">
          <div className="bg-white border border-[#edf2f7] border-solid flex flex-[1_0_0] items-start min-h-px min-w-px p-[12px] relative rounded-[12px]">
            <div className="flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
              <div className="flex items-center justify-between relative w-full">
                <div className="flex gap-[4px] items-center leading-[0] not-italic relative whitespace-nowrap">
                  <div className="flex flex-col font-mona font-bold justify-center relative text-[#3f2578] text-[18px]">
                    <p className="leading-[1.6]">Limit pojistného plnění na škodu</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-[8px] items-center relative w-full">
                <label className="flex items-center gap-[8px] cursor-pointer">
                  <input
                    type="radio"
                    name="limit"
                    value="35000000"
                    checked={limitSkody === '35000000'}
                    onChange={(e) => setLimitSkody(e.target.value)}
                    className="w-[20px] h-[20px]"
                  />
                  <span className="font-mona font-bold text-[14px] text-[#3f2578]">35 mil. Kč (zákonné minimum)</span>
                </label>
              </div>
              <div className="flex gap-[8px] items-center relative w-full">
                <label className="flex items-center gap-[8px] cursor-pointer">
                  <input
                    type="radio"
                    name="limit"
                    value="50000000"
                    checked={limitSkody === '50000000'}
                    onChange={(e) => setLimitSkody(e.target.value)}
                    className="w-[20px] h-[20px]"
                  />
                  <span className="font-mona font-bold text-[14px] text-[#3f2578]">50 mil. Kč (doporučeno)</span>
                </label>
              </div>
              <div className="flex gap-[8px] items-center relative w-full">
                <label className="flex items-center gap-[8px] cursor-pointer">
                  <input
                    type="radio"
                    name="limit"
                    value="100000000"
                    checked={limitSkody === '100000000'}
                    onChange={(e) => setLimitSkody(e.target.value)}
                    className="w-[20px] h-[20px]"
                  />
                  <span className="font-mona font-bold text-[14px] text-[#3f2578]">100 mil. Kč (maximální ochrana)</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Doplňkové služby */}
        <div className="flex items-start relative w-full">
          <div className="bg-[#f8fafc] flex flex-[1_0_0] flex-col gap-[12px] min-h-px min-w-px p-[12px] relative rounded-[12px]">
            <div className="flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[18px] text-[#3f2578]">
              <p className="leading-[1.6]">Doplňkové služby</p>
            </div>
            <div className="flex items-center justify-between relative w-full">
              <div className="flex flex-col gap-[4px]">
                <div className="flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[16px] text-[#3f2578]">
                  <p className="leading-[1.6]">Asistence 24/7</p>
                </div>
                <div className="flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[14px] text-[#94a3b8]">
                  <p className="leading-[1.6]">Odtah vozidla, pomoc na místě</p>
                </div>
              </div>
              <button
                onClick={() => setAsistence(!asistence)}
                className={`flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] w-[40.5px] transition-colors ${
                  asistence ? 'bg-[#3f2578] justify-end' : 'bg-gray-300 justify-start'
                }`}
              >
                <div className="bg-white flex gap-[0px] items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] size-[18px]" />
              </button>
            </div>
            <div className="flex items-center justify-between relative w-full">
              <div className="flex flex-col gap-[4px]">
                <div className="flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[16px] text-[#3f2578]">
                  <p className="leading-[1.6]">Náhradní vozidlo</p>
                </div>
                <div className="flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[14px] text-[#94a3b8]">
                  <p className="leading-[1.6]">Při opravě po havárii</p>
                </div>
              </div>
              <button
                onClick={() => setNahradniVozidlo(!nahradniVozidlo)}
                className={`flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] w-[40.5px] transition-colors ${
                  nahradniVozidlo ? 'bg-[#3f2578] justify-end' : 'bg-gray-300 justify-start'
                }`}
              >
                <div className="bg-white flex gap-[0px] items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] size-[18px]" />
              </button>
            </div>
          </div>
        </div>

        {/* Spoluúčast */}
        <div className="flex items-start relative w-full">
          <div className="bg-white border border-[#edf2f7] border-solid flex flex-[1_0_0] items-start min-h-px min-w-px p-[12px] relative rounded-[12px]">
            <div className="flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
              <div className="flex items-center justify-between relative w-full">
                <div className="flex gap-[4px] items-center leading-[0] not-italic relative whitespace-nowrap">
                  <div className="flex flex-col font-mona font-bold justify-center relative text-[#3f2578] text-[18px]">
                    <p className="leading-[1.6]">Spoluúčast</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-[8px] items-center relative w-full">
                <label className="flex items-center gap-[8px] cursor-pointer">
                  <input
                    type="radio"
                    name="spoluucast"
                    value="0"
                    checked={spoluucast === '0'}
                    onChange={(e) => setSpoluucast(e.target.value)}
                    className="w-[20px] h-[20px]"
                  />
                  <span className="font-mona font-bold text-[14px] text-[#3f2578]">Bez spoluúčasti</span>
                </label>
              </div>
              <div className="flex gap-[8px] items-center relative w-full">
                <label className="flex items-center gap-[8px] cursor-pointer">
                  <input
                    type="radio"
                    name="spoluucast"
                    value="5000"
                    checked={spoluucast === '5000'}
                    onChange={(e) => setSpoluucast(e.target.value)}
                    className="w-[20px] h-[20px]"
                  />
                  <span className="font-mona font-bold text-[14px] text-[#3f2578]">5 000 Kč (nižší pojistné)</span>
                </label>
              </div>
              <div className="flex gap-[8px] items-center relative w-full">
                <label className="flex items-center gap-[8px] cursor-pointer">
                  <input
                    type="radio"
                    name="spoluucast"
                    value="10000"
                    checked={spoluucast === '10000'}
                    onChange={(e) => setSpoluucast(e.target.value)}
                    className="w-[20px] h-[20px]"
                  />
                  <span className="font-mona font-bold text-[14px] text-[#3f2578]">10 000 Kč (nejnižší pojistné)</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-[12px] items-center justify-center relative w-full">
          <button
            onClick={handleBack}
            className="flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] border-2 border-[#3f2578]"
          >
            <div className="flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[16px] text-[#3f2578] whitespace-nowrap">
              <p className="leading-[1.6]">Zpět</p>
            </div>
          </button>
          <button
            onClick={handleContinue}
            className="flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px]"
            style={{ backgroundImage: "linear-gradient(263.127deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%), linear-gradient(90deg, rgb(89, 79, 238) 0%, rgb(89, 79, 238) 100%)" }}
          >
            <div className="flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[16px] text-white whitespace-nowrap">
              <p className="leading-[1.6]">Zobrazit nabídky</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
