import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const imgAxaLogo = "/assets/axa-logo.png";
const imgSettingsIcon = "/assets/settings-icon.svg";

function MingIconCheckFill({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"}>
      <div className="absolute inset-[19.47%_8.4%_21.07%_8.39%]">
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 11.17L2.83 7L1.41 8.41L7 14L19 2L17.59 0.59L7 11.17Z" fill="#34c759"/>
        </svg>
      </div>
    </div>
  );
}

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

interface InsuranceOption {
  name: string;
  price: string;
  enabled: boolean;
  disabled?: boolean;
}

export function MajetekStep5() {
  const navigate = useNavigate();
  const [frequency, setFrequency] = useState<'monthly' | 'quarterly' | 'yearly'>('monthly');
  
  const [options, setOptions] = useState<InsuranceOption[]>([
    { name: 'Atmosférické srážky', price: '+ 150 Kč', enabled: true },
    { name: 'Povodeň a záplava', price: '+ 180 Kč', enabled: true },
    { name: 'Vodní škody - ztráta vody', price: '+ 100 Kč', enabled: true },
    { name: 'Odcizení', price: '+ 180 Kč', enabled: true },
    { name: 'Přepětí', price: '', enabled: false, disabled: true },
    { name: 'Vandalismus', price: '+ 100 Kč', enabled: true },
    { name: 'Poškození fasády', price: '', enabled: false, disabled: true },
    { name: 'Rozšířená asistence', price: '+ 200 Kč', enabled: true },
    { name: 'Právní asistence', price: '', enabled: false, disabled: true },
    { name: 'IT asistence', price: '+ 100 Kč', enabled: true },
    { name: 'Pojištění odpovědnosti', price: '+ 500 Kč', enabled: true },
  ]);

  const toggleOption = (index: number) => {
    const newOptions = [...options];
    if (!newOptions[index].disabled) {
      newOptions[index].enabled = !newOptions[index].enabled;
      setOptions(newOptions);
    }
  };

  const handleContinue = () => {
    navigate('/pojisteni/majetek/shrnuti');
  };

  const renderInsuranceCard = () => (
    <div className="bg-gradient-to-r border border-[#e2e9f0] border-solid flex flex-[1_0_0] flex-col from-white gap-[10px] items-center justify-center min-h-px min-w-px relative rounded-[12px] shadow-[0px_4px_4px_0px_rgba(12,12,13,0.1),0px_4px_4px_0px_rgba(12,12,13,0.05)] to-white">
      <div className="flex flex-col gap-[10px] items-center p-[12px] relative w-full">
        <div className="flex flex-col items-start py-[12px] relative w-full">
          <div className="flex gap-[10px] items-start relative w-full">
            <div className="relative size-[71px]">
              <img alt="AXA Logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAxaLogo} />
            </div>
            <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[#3f2578] text-[18px] text-center whitespace-nowrap">
              <p className="leading-[1.6]">AXA Comfort premium</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[10px] items-start relative w-full">
          <div className="flex items-start justify-between relative w-full">
            <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[#3f2578] text-[18px] text-center whitespace-nowrap">
              <p className="leading-[1.6]">Požár, výbuch, blesk</p>
            </div>
            <MingIconCheckFill className="overflow-clip relative size-[24px]" />
          </div>
          <div className="flex items-start justify-between relative w-full">
            <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[#3f2578] text-[18px] text-center whitespace-nowrap">
              <p className="leading-[1.6]">Voda z vodovodních zařízení</p>
            </div>
            <MingIconCheckFill className="overflow-clip relative size-[24px]" />
          </div>
          <div className="flex items-center justify-between relative w-full">
            <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[#3f2578] text-[18px] text-center whitespace-nowrap">
              <p className="leading-[1.6]">Odcizení vloupáním</p>
            </div>
            <MingIconCheckFill className="overflow-clip relative size-[24px]" />
          </div>
          <div className="flex items-start justify-between relative w-full">
            <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[#3f2578] text-[18px] w-[307px]">
              <p className="leading-[1.6] whitespace-pre-wrap">Živelní pohromy ( vichřice, krupobití, tíha sněhu)</p>
            </div>
            <MingIconCheckFill className="overflow-clip relative size-[24px]" />
          </div>
          <div className="flex items-center justify-between relative w-full">
            <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[#3f2578] text-[18px] text-center whitespace-nowrap">
              <p className="leading-[1.6]">Základní asistence zahrnuta</p>
            </div>
            <MingIconCheckFill className="overflow-clip relative size-[24px]" />
          </div>
        </div>

        <div className="h-0 relative w-full">
          <div className="absolute inset-[-0.4px_0_0_0]">
            <div className="h-[1px] bg-[#e2e9f0] w-full" />
          </div>
        </div>

        <div className="flex flex-col items-start p-[4px] relative rounded-[12px] w-full">
          <div className="flex flex-col gap-[8px] items-start relative w-full">
            <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[#3f2578] text-[18px] text-center whitespace-nowrap">
              <p className="leading-[1.6]">Připojištění</p>
            </div>
            {options.map((option, index) => (
              <div key={index} className="flex flex-col items-start relative w-full">
                <div className="flex items-center justify-between relative w-full">
                  <div className={`flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[18px] text-center whitespace-nowrap ${
                    option.disabled ? 'text-[#8c7cae]' : 'text-[#3f2578]'
                  }`}>
                    <p className="leading-[1.6]">{option.name}</p>
                  </div>
                  <div className="flex gap-[10px] items-center relative">
                    {option.price && (
                      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[#6aae25] text-[18px] text-center whitespace-nowrap">
                        <p className="leading-[1.6]">{option.price}</p>
                      </div>
                    )}
                    <button
                      onClick={() => toggleOption(index)}
                      disabled={option.disabled}
                      className={`flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] w-[40.5px] transition-colors ${
                        option.disabled 
                          ? 'bg-[#e2e9f0] justify-start' 
                          : option.enabled 
                            ? 'bg-[#3f2578] justify-end' 
                            : 'bg-[#e2e9f0] justify-start'
                      }`}
                    >
                      <div className="bg-white flex gap-[0px] items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] size-[18px]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between p-[2px] relative rounded-[2px] w-full">
          <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[14px] text-[#334155] whitespace-nowrap">
            <p className="decoration-solid leading-[1.6] underline">Pojistné podmínky</p>
          </div>
          <MingIconInformationLine className="overflow-clip relative size-[24px]" />
        </div>
      </div>

      <div className="bg-[#edf2f7] border border-[#e2e9f0] border-solid flex flex-col gap-[8px] items-center px-[4px] py-[12px] relative rounded-bl-[12px] rounded-br-[12px] w-full">
        <div className="flex items-center justify-center relative">
          <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[#3f2578] text-[18px] text-center whitespace-nowrap">
            <p className="leading-[1.6]">1 563 Kč / měsíčně</p>
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

  return (
    <div className="bg-white flex flex-col gap-[24px] items-center p-[24px] w-full min-h-screen">
      <div className="bg-clip-text flex flex-col font-['Mona_Sans_VF:Display_ExtraBold',sans-serif] justify-center leading-[0] not-italic relative text-[48px] text-center tracking-[-1px] w-full" style={{ backgroundImage: "linear-gradient(231.904deg, rgb(167, 82, 169) 26.752%, rgb(63, 37, 120) 100%)", WebkitTextFillColor: "transparent" }}>
        <p className="leading-none whitespace-pre-wrap">Online pojištění majetku</p>
      </div>

      <div className="flex flex-col items-center overflow-clip px-[99px] py-[24px] relative w-full">
        <div className="flex flex-col gap-[12px] items-start relative w-full max-w-[1200px]">
          <div className="flex flex-col items-start relative w-full">
            <div className="flex items-center justify-between relative w-full">
              <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[#3f2578] text-[18px] text-center whitespace-nowrap">
                <p className="leading-[1.6]">Dostupné nabídky</p>
              </div>
              <div className="flex gap-[24px] h-[50px] items-center relative">
                <div className="flex gap-[24px] items-center relative">
                  <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[18px] text-[#94a3b8] text-center whitespace-nowrap">
                    <p className="leading-[1.6]">Frekvence plateb</p>
                  </div>
                  <div className="bg-white border border-[#e2e9f0] border-solid flex gap-[24px] h-[50px] items-center overflow-clip pl-[4px] pr-[8px] py-[4px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]">
                    <button
                      onClick={() => setFrequency('monthly')}
                      className={`flex gap-[8px] h-full items-center overflow-clip px-[12px] relative rounded-[6px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] transition-colors ${
                        frequency === 'monthly' ? 'bg-[#3f2578]' : 'bg-transparent'
                      }`}
                    >
                      <div className={`flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[14px] whitespace-nowrap ${
                        frequency === 'monthly' ? 'text-white' : 'text-[#94a3b8]'
                      }`}>
                        <p className="leading-[1.6]">Měsíčně</p>
                      </div>
                    </button>
                    <button
                      onClick={() => setFrequency('quarterly')}
                      className="flex items-center justify-center relative"
                    >
                      <div className={`flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[14px] whitespace-nowrap ${
                        frequency === 'quarterly' ? 'text-[#3f2578]' : 'text-[#94a3b8]'
                      }`}>
                        <p className="leading-[1.6]">kvartálně</p>
                      </div>
                    </button>
                    <button
                      onClick={() => setFrequency('yearly')}
                      className="flex items-center justify-center relative"
                    >
                      <div className={`flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[14px] whitespace-nowrap ${
                        frequency === 'yearly' ? 'text-[#3f2578]' : 'text-[#94a3b8]'
                      }`}>
                        <p className="leading-[1.6]">ročně</p>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="bg-[#3f2578] flex flex-col items-start p-[10px] relative rounded-[8px]">
                  <div className="flex items-center relative">
                    <div className="flex gap-[12px] items-center relative">
                      <div className="overflow-clip relative size-[24px]">
                        <div className="absolute inset-[12.5%]">
                          <img alt="" className="absolute block max-w-none size-full" src={imgSettingsIcon} />
                        </div>
                      </div>
                      <div className="flex items-center relative">
                        <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[18px] text-white text-center whitespace-nowrap">
                          <p className="leading-[1.6]">Upravit nabídku</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-[24px] items-start relative w-full">
            {renderInsuranceCard()}
            {renderInsuranceCard()}
            {renderInsuranceCard()}
          </div>

          <div className="flex flex-col items-start relative w-full mt-[24px]">
            <div className="flex items-center justify-center relative w-full">
              <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[#3f2578] text-[18px] text-center whitespace-nowrap">
                <p className="leading-[1.6]">Porovnání všech nabídek</p>
              </div>
            </div>
          </div>

          <div className="flex gap-[12px] items-start relative w-full justify-center">
            {['7 023 Kč', '7 023 Kč', '10 023 Kč', '7 023 Kč', '7 023 Kč', '10 023 Kč', '7 023 Kč', '7 023 Kč', '10 023 Kč', '7 023 Kč', '7 023 Kč'].map((price, index) => (
              <div key={index} className="flex flex-col gap-[8px] items-center relative">
                <div className={`border border-solid flex flex-col gap-[8px] items-center justify-center p-[12px] relative rounded-[8px] ${
                  index < 3 ? 'border-[#3f2578] bg-[#3f2578]' : 'border-[#e2e9f0] bg-white'
                }`}>
                  <div className={`flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[18px] text-center whitespace-nowrap ${
                    index < 3 ? 'text-white' : 'text-[#94a3b8]'
                  }`}>
                    <p className="leading-[1.6]">{price}</p>
                  </div>
                </div>
                <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[14px] text-[#3f2578] text-center whitespace-nowrap">
                  <p className="leading-[1.6]">{index < 3 ? 'AXA' : index < 6 ? 'Allianz' : index < 9 ? 'Generali' : 'Kooperativa'}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
