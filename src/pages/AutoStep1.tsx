import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MingIconInformationLine({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"}>
      <div className="absolute inset-[8.33%]">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="9" stroke="#94a3b8" strokeWidth="1.5"/>
          <path d="M10 14V10M10 6H10.01" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  );
}

export function AutoStep1() {
  const navigate = useNavigate();
  const [spz, setSpz] = useState('');
  const [znacka, setZnacka] = useState('');
  const [model, setModel] = useState('');
  const [rokVyroby, setRokVyroby] = useState('');
  const [povinneRuceni, setPovinneRuceni] = useState(true);
  const [havarijni, setHavarijni] = useState(false);

  const handleContinue = () => {
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

      <div className="flex flex-col gap-6 items-center overflow-clip px-4 md:px-12 lg:px-[99px] py-6 relative w-full max-w-[1000px]">
        {/* Progress indicator */}
        <div className="flex items-center justify-center gap-[12px] relative w-full">
          <div className="flex flex-col items-center gap-[8px]">
            <div className="bg-[#3f2578] flex items-center justify-center rounded-full size-[40px]">
              <span className="text-white font-mona font-bold text-[16px]">1</span>
            </div>
            <span className="text-[#3f2578] font-mona font-bold text-[14px]">Vozidlo</span>
          </div>
          <div className="bg-[#e2e9f0] h-[2px] w-[80px]" />
          <div className="flex flex-col items-center gap-[8px]">
            <div className="bg-[#e2e9f0] flex items-center justify-center rounded-full size-[40px]">
              <span className="text-[#94a3b8] font-mona font-bold text-[16px]">2</span>
            </div>
            <span className="text-[#94a3b8] font-mona font-bold text-[14px]">Osobní údaje</span>
          </div>
          <div className="bg-[#e2e9f0] h-[2px] w-[80px]" />
          <div className="flex flex-col items-center gap-[8px]">
            <div className="bg-[#e2e9f0] flex items-center justify-center rounded-full size-[40px]">
              <span className="text-[#94a3b8] font-mona font-bold text-[16px]">3</span>
            </div>
            <span className="text-[#94a3b8] font-mona font-bold text-[14px]">Krytí</span>
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

        {/* SPZ Input */}
        <div className="flex items-start relative w-full">
          <div className="bg-white border border-[#edf2f7] border-solid flex flex-[1_0_0] items-start min-h-px min-w-px p-[12px] relative rounded-[12px]">
            <div className="flex flex-[1_0_0] items-start min-h-px min-w-px relative">
              <div className="flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
                <div className="flex flex-col items-start relative w-full">
                  <div className="flex items-center justify-between relative w-full">
                    <div className="flex gap-[4px] items-center leading-[0] not-italic relative whitespace-nowrap">
                      <div className="flex flex-col font-mona font-bold justify-center relative text-[#3f2578] text-[18px]">
                        <p className="leading-[1.6]">SPZ vozidla</p>
                      </div>
                      <div className="flex flex-col font-inter font-normal justify-center relative text-[0px] text-[#d60021]">
                        <p className="font-inter font-bold leading-[1.6] text-[14px]">*</p>
                      </div>
                    </div>
                    <MingIconInformationLine className="overflow-clip relative size-[24px]" />
                  </div>
                  <div className="flex gap-[4px] items-center leading-[0] not-italic relative w-full whitespace-nowrap">
                    <div className="flex flex-col font-mona font-bold justify-center relative text-[#3f2578] text-[16px]">
                      <p className="leading-[1.6]">Zadejte státní poznávací značku vašeho vozidla</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center min-w-[200px] overflow-clip px-[12px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full">
                  <input
                    type="text"
                    value={spz}
                    onChange={(e) => setSpz(e.target.value.toUpperCase())}
                    placeholder="např. 1A2 3456"
                    className="flex flex-[1_0_0] flex-col font-mona font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[#3f2578] placeholder:text-[#94a3b8] bg-transparent border-none outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Značka a Model */}
        <div className="flex gap-[12px] items-start relative w-full">
          <div className="bg-white border border-[#edf2f7] border-solid flex flex-[1_0_0] items-start min-h-px min-w-px p-[12px] relative rounded-[12px]">
            <div className="flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
              <div className="flex items-center justify-between relative w-full">
                <div className="flex gap-[4px] items-center leading-[0] not-italic relative whitespace-nowrap">
                  <div className="flex flex-col font-mona font-bold justify-center relative text-[#3f2578] text-[18px]">
                    <p className="leading-[1.6]">Značka</p>
                  </div>
                  <div className="flex flex-col font-inter font-normal justify-center relative text-[0px] text-[#d60021]">
                    <p className="font-inter font-bold leading-[1.6] text-[14px]">*</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center min-w-[200px] overflow-clip px-[12px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full">
                <input
                  type="text"
                  value={znacka}
                  onChange={(e) => setZnacka(e.target.value)}
                  placeholder="např. Škoda"
                  className="flex flex-[1_0_0] flex-col font-mona font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[#3f2578] placeholder:text-[#94a3b8] bg-transparent border-none outline-none"
                />
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#edf2f7] border-solid flex flex-[1_0_0] items-start min-h-px min-w-px p-[12px] relative rounded-[12px]">
            <div className="flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
              <div className="flex items-center justify-between relative w-full">
                <div className="flex gap-[4px] items-center leading-[0] not-italic relative whitespace-nowrap">
                  <div className="flex flex-col font-mona font-bold justify-center relative text-[#3f2578] text-[18px]">
                    <p className="leading-[1.6]">Model</p>
                  </div>
                  <div className="flex flex-col font-inter font-normal justify-center relative text-[0px] text-[#d60021]">
                    <p className="font-inter font-bold leading-[1.6] text-[14px]">*</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center min-w-[200px] overflow-clip px-[12px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full">
                <input
                  type="text"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  placeholder="např. Octavia"
                  className="flex flex-[1_0_0] flex-col font-mona font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[#3f2578] placeholder:text-[#94a3b8] bg-transparent border-none outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Rok výroby */}
        <div className="flex items-start relative w-full">
          <div className="bg-white border border-[#edf2f7] border-solid flex flex-[1_0_0] items-start min-h-px min-w-px p-[12px] relative rounded-[12px]">
            <div className="flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
              <div className="flex items-center justify-between relative w-full">
                <div className="flex gap-[4px] items-center leading-[0] not-italic relative whitespace-nowrap">
                  <div className="flex flex-col font-mona font-bold justify-center relative text-[#3f2578] text-[18px]">
                    <p className="leading-[1.6]">Rok výroby</p>
                  </div>
                  <div className="flex flex-col font-inter font-normal justify-center relative text-[0px] text-[#d60021]">
                    <p className="font-inter font-bold leading-[1.6] text-[14px]">*</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center min-w-[200px] overflow-clip px-[12px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full">
                <input
                  type="number"
                  value={rokVyroby}
                  onChange={(e) => setRokVyroby(e.target.value)}
                  placeholder="např. 2020"
                  className="flex flex-[1_0_0] flex-col font-mona font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[#3f2578] placeholder:text-[#94a3b8] bg-transparent border-none outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Typ pojištění */}
        <div className="flex items-start relative w-full">
          <div className="bg-[#f8fafc] flex flex-[1_0_0] flex-col gap-[12px] min-h-px min-w-px p-[12px] relative rounded-[12px]">
            <div className="flex items-center justify-between relative w-full">
              <div className="flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[18px] text-[#3f2578]">
                <p className="leading-[1.6]">Povinné ručení</p>
              </div>
              <button
                onClick={() => setPovinneRuceni(!povinneRuceni)}
                className={`flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] w-[40.5px] transition-colors ${
                  povinneRuceni ? 'bg-[#3f2578] justify-end' : 'bg-gray-300 justify-start'
                }`}
              >
                <div className="bg-white flex gap-[0px] items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] size-[18px]" />
              </button>
            </div>
            <div className="flex items-center justify-between relative w-full">
              <div className="flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[18px] text-[#3f2578]">
                <p className="leading-[1.6]">Havarijní pojištění</p>
              </div>
              <button
                onClick={() => setHavarijni(!havarijni)}
                className={`flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] w-[40.5px] transition-colors ${
                  havarijni ? 'bg-[#3f2578] justify-end' : 'bg-gray-300 justify-start'
                }`}
              >
                <div className="bg-white flex gap-[0px] items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] size-[18px]" />
              </button>
            </div>
          </div>
        </div>

        {/* Continue button */}
        <button
          onClick={handleContinue}
          className="flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px]"
          style={{ backgroundImage: "linear-gradient(263.127deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%), linear-gradient(90deg, rgb(89, 79, 238) 0%, rgb(89, 79, 238) 100%)" }}
        >
          <div className="flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[16px] text-white whitespace-nowrap">
            <p className="leading-[1.6]">Pokračovat</p>
          </div>
        </button>
      </div>
    </div>
  );
}
