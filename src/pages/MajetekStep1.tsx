import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const imgHouseholdIcon = "/assets/household-icon.png";
const imgLineDivider = "/assets/line-divider.svg";

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

export function MajetekStep1() {
  const navigate = useNavigate();
  const [domacnostEnabled, setDomacnostEnabled] = useState(true);
  const [hodnotaNemovitosti, setHodnotaNemovitosti] = useState('0');
  const [veciZvlastniHodnoty, setVeciZvlastniHodnoty] = useState('0');
  const [vybaveniPripevnene, setVybaveniPripevnene] = useState('0');
  const [veciNebytove, setVeciNebytove] = useState('0');

  const handleContinue = () => {
    navigate('/pojisteni/majetek/krok-2');
  };

  return (
    <div className="bg-white flex flex-col gap-[24px] items-center p-[24px] w-full min-h-screen">
      <div className="bg-clip-text flex flex-col font-['Mona_Sans_VF:Display_ExtraBold',sans-serif] justify-center leading-[0] not-italic relative text-[48px] text-center tracking-[-1px] w-full" style={{ backgroundImage: "linear-gradient(231.904deg, rgb(167, 82, 169) 26.752%, rgb(63, 37, 120) 100%)", WebkitTextFillColor: "transparent" }}>
        <p className="leading-none whitespace-pre-wrap">Online pojištění majetku</p>
      </div>

      <div className="flex flex-col gap-[24px] items-center overflow-clip px-[99px] py-[24px] relative w-[1000px] max-w-full">
        <div className="flex items-start relative w-full">
          <div className="bg-[#f8fafc] flex flex-[1_0_0] gap-[10px] items-start min-h-px min-w-px p-[12px] relative rounded-[12px]">
            <div className="h-[110px] relative w-[127px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[128%] left-[-4.75%] max-w-none top-[-8.13%] w-[110.58%]" src={imgHouseholdIcon} />
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative">
              <div className="flex items-center justify-between relative w-full">
                <div className="flex items-center relative">
                  <div className="flex items-center relative">
                    <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[18px] text-[#3f2578] text-center whitespace-nowrap">
                      <p className="leading-[1.6]">Domácnost</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setDomacnostEnabled(!domacnostEnabled)}
                  className={`flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] w-[40.5px] transition-colors ${
                    domacnostEnabled ? 'bg-[#3f2578] justify-end' : 'bg-gray-300 justify-start'
                  }`}
                >
                  <div className="bg-white flex gap-[0px] items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] size-[18px]" />
                </button>
              </div>
              <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[14px] text-[#3f2578] w-full">
                <p className="leading-[1.6] whitespace-pre-wrap">tvoří soubor movitých věcí sloužících k běžnému užívání osobami žijícími ve společné domácnosti v pojištěné nemovitosti.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start relative w-full">
          <div className="bg-white border border-[#edf2f7] border-solid flex flex-[1_0_0] items-start min-h-px min-w-px p-[12px] relative rounded-[12px]">
            <div className="flex flex-[1_0_0] items-start min-h-px min-w-px relative">
              <div className="flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
                <div className="flex flex-col items-start relative w-full">
                  <div className="flex items-center justify-between relative w-full">
                    <div className="flex gap-[4px] items-center leading-[0] not-italic relative whitespace-nowrap">
                      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative text-[#3f2578] text-[18px]">
                        <p className="leading-[1.6]">Hodnota nemovitosti</p>
                      </div>
                      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative text-[0px] text-[#d60021]">
                        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] text-[14px]">*</p>
                      </div>
                    </div>
                    <MingIconInformationLine className="overflow-clip relative size-[24px]" />
                  </div>
                  <div className="flex gap-[4px] items-center leading-[0] not-italic relative w-full whitespace-nowrap">
                    <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative text-[#3f2578] text-[16px]">
                      <p className="leading-[1.6]">Cena, za kterou by bylo možné na trhu koupit stejný byt, stejné kvality, ve stejné lokalitě.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center min-w-[200px] overflow-clip px-[12px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full">
                  <input
                    type="number"
                    value={hodnotaNemovitosti}
                    onChange={(e) => setHodnotaNemovitosti(e.target.value)}
                    className="flex flex-[1_0_0] flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[#94a3b8] bg-transparent border-none outline-none"
                  />
                  <div className="flex h-[24px] items-center justify-center relative w-0">
                    <div className="flex-none rotate-90">
                      <div className="h-0 relative w-[24px]">
                        <div className="absolute inset-[-0.5px_0_0_0]">
                          <img alt="" className="block max-w-none size-full" src={imgLineDivider} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[14px] text-[#3f2578] whitespace-nowrap">
                    <p className="leading-[1.6]">Kč</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start relative w-full">
          <div className="bg-white border border-[#edf2f7] border-solid flex flex-[1_0_0] items-start min-h-px min-w-px p-[12px] relative rounded-[12px]">
            <div className="flex flex-[1_0_0] items-start min-h-px min-w-px relative">
              <div className="flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
                <div className="flex flex-col items-start relative w-full">
                  <div className="flex items-center justify-between relative w-full">
                    <div className="flex gap-[4px] items-center leading-[0] not-italic relative w-[474px] whitespace-nowrap">
                      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative text-[#3f2578] text-[18px]">
                        <p className="leading-[1.6]">Věci zvláštní hodnoty</p>
                      </div>
                      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative text-[0px] text-[#d60021]">
                        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] text-[14px]">*</p>
                      </div>
                    </div>
                    <MingIconInformationLine className="overflow-clip relative size-[24px]" />
                  </div>
                </div>
                <div className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center min-w-[200px] overflow-clip px-[12px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full">
                  <input
                    type="number"
                    value={veciZvlastniHodnoty}
                    onChange={(e) => setVeciZvlastniHodnoty(e.target.value)}
                    className="flex flex-[1_0_0] flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[#94a3b8] bg-transparent border-none outline-none"
                  />
                  <div className="flex h-[24px] items-center justify-center relative w-0">
                    <div className="flex-none rotate-90">
                      <div className="h-0 relative w-[24px]">
                        <div className="absolute inset-[-0.5px_0_0_0]">
                          <img alt="" className="block max-w-none size-full" src={imgLineDivider} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[14px] text-[#3f2578] whitespace-nowrap">
                    <p className="leading-[1.6]">Kč</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start relative w-full">
          <div className="bg-white border border-[#edf2f7] border-solid flex flex-[1_0_0] items-start min-h-px min-w-px p-[12px] relative rounded-[12px]">
            <div className="flex flex-[1_0_0] items-start min-h-px min-w-px relative">
              <div className="flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
                <div className="flex flex-col items-start relative w-full">
                  <div className="flex items-center justify-between relative w-full">
                    <div className="flex gap-[4px] items-center leading-[0] not-italic relative whitespace-nowrap">
                      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative text-[#3f2578] text-[18px]">
                        <p className="leading-[1.6]">Vybavení i věci připevněné</p>
                      </div>
                      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative text-[0px] text-[#d60021]">
                        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] text-[14px]">*</p>
                      </div>
                    </div>
                    <MingIconInformationLine className="overflow-clip relative size-[24px]" />
                  </div>
                </div>
                <div className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center min-w-[200px] overflow-clip px-[12px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full">
                  <input
                    type="number"
                    value={vybaveniPripevnene}
                    onChange={(e) => setVybaveniPripevnene(e.target.value)}
                    className="flex flex-[1_0_0] flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[#94a3b8] bg-transparent border-none outline-none"
                  />
                  <div className="flex h-[24px] items-center justify-center relative w-0">
                    <div className="flex-none rotate-90">
                      <div className="h-0 relative w-[24px]">
                        <div className="absolute inset-[-0.5px_0_0_0]">
                          <img alt="" className="block max-w-none size-full" src={imgLineDivider} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[14px] text-[#3f2578] whitespace-nowrap">
                    <p className="leading-[1.6]">Kč</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start relative w-full">
          <div className="bg-white border border-[#edf2f7] border-solid flex flex-[1_0_0] items-start min-h-px min-w-px p-[12px] relative rounded-[12px]">
            <div className="flex flex-[1_0_0] items-start min-h-px min-w-px relative">
              <div className="flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
                <div className="flex flex-col items-start relative w-full">
                  <div className="flex items-center justify-between relative w-full">
                    <div className="flex gap-[4px] items-center leading-[0] not-italic relative w-[509.5px] whitespace-nowrap">
                      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center relative text-[#3f2578] text-[18px]">
                        <p className="leading-[1.6]">Věci v nebytových prostorech</p>
                      </div>
                      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative text-[0px] text-[#d60021]">
                        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] text-[14px]">*</p>
                      </div>
                    </div>
                    <MingIconInformationLine className="overflow-clip relative size-[24px]" />
                  </div>
                </div>
                <div className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center min-w-[200px] overflow-clip px-[12px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full">
                  <input
                    type="number"
                    value={veciNebytove}
                    onChange={(e) => setVeciNebytove(e.target.value)}
                    className="flex flex-[1_0_0] flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[#94a3b8] bg-transparent border-none outline-none"
                  />
                  <div className="flex h-[24px] items-center justify-center relative w-0">
                    <div className="flex-none rotate-90">
                      <div className="h-0 relative w-[24px]">
                        <div className="absolute inset-[-0.5px_0_0_0]">
                          <img alt="" className="block max-w-none size-full" src={imgLineDivider} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[14px] text-[#3f2578] whitespace-nowrap">
                    <p className="leading-[1.6]">Kč</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleContinue}
          className="flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px]"
          style={{ backgroundImage: "linear-gradient(263.127deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%), linear-gradient(90deg, rgb(89, 79, 238) 0%, rgb(89, 79, 238) 100%)" }}
        >
          <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[16px] text-white whitespace-nowrap">
            <p className="leading-[1.6]">Pokračovat</p>
          </div>
        </button>
      </div>
    </div>
  );
}
