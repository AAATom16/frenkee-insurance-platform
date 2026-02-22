import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Select } from '../components/ui';

export function MajetekStep3() {
  const navigate = useNavigate();
  const [layout, setLayout] = useState('');
  const [area, setArea] = useState('');
  const [apartmentNumber, setApartmentNumber] = useState('');
  const [floor, setFloor] = useState('ground');
  const [higherFloor, setHigherFloor] = useState(false);
  const [construction, setConstruction] = useState('panel');
  const [quality, setQuality] = useState('standard');
  const [condition, setCondition] = useState('good');
  const [hasBalcony, setHasBalcony] = useState(false);
  const [hasTerrace, setHasTerrace] = useState(false);
  const [hasGarage, setHasGarage] = useState(false);
  const [hasElevator, setHasElevator] = useState(false);
  const [hasParking, setHasParking] = useState(false);
  const [propertyValue, setPropertyValue] = useState('');

  const handleContinue = () => {
    navigate('/pojisteni/majetek/krok-4');
  };

  return (
    <div className="bg-white flex flex-col gap-[24px] items-center p-[24px] w-full min-h-screen">
      <div className="bg-clip-text flex flex-col font-mona font-extrabold justify-center leading-[0] not-italic relative text-[48px] text-center tracking-[-1px] w-full" style={{ backgroundImage: "linear-gradient(231.904deg, rgb(167, 82, 169) 26.752%, rgb(63, 37, 120) 100%)", WebkitTextFillColor: "transparent" }}>
        <p className="leading-none whitespace-pre-wrap">Online pojištění majetku</p>
      </div>

      <div className="flex flex-col gap-[24px] items-center overflow-clip px-[99px] py-[24px] relative w-[1000px] max-w-full">
        <div className="flex flex-col items-start relative w-full">
          <div className="flex items-center justify-center relative">
            <div className="flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[#3f2578] text-[18px] text-center whitespace-nowrap">
              <p className="leading-[1.6]">Co budeme pojišťovat?</p>
            </div>
          </div>
        </div>

        <div className="flex gap-[12px] items-start relative w-full">
          <div className="flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
            <Select
              label="Dispozice bytu *"
              options={[
                { value: '2+kk', label: '2+kk' },
                { value: '2+1', label: '2+1' },
                { value: '3+kk', label: '3+kk' },
                { value: '3+1', label: '3+1' },
                { value: '4+kk', label: '4+kk' },
                { value: '4+1', label: '4+1' },
              ]}
              placeholder="Vyberte dispozici"
              value={layout}
              onChange={setLayout}
            />
          </div>

          <div className="flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
            <div className="flex gap-[4px] items-center leading-[0] not-italic relative w-full whitespace-nowrap">
              <div className="flex flex-col font-mona font-bold justify-center relative text-[#3f2578] text-[18px]">
                <p className="leading-[1.6]">Podlahová plocha</p>
              </div>
              <div className="flex flex-col font-inter font-normal justify-center relative text-[0px] text-[#d60021]">
                <p className="font-inter font-bold leading-[1.6] text-[14px]">*</p>
              </div>
            </div>
            <div className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center overflow-clip px-[12px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full">
              <input
                type="number"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                placeholder="0"
                className="flex flex-[1_0_0] font-mona font-bold text-[14px] text-[#94a3b8] bg-transparent border-none outline-none"
              />
              <span className="font-mona font-bold text-[14px] text-[#3f2578]">m²</span>
            </div>
          </div>

          <div className="flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
            <div className="flex gap-[4px] items-center leading-[0] not-italic relative w-full whitespace-nowrap">
              <div className="flex flex-col font-mona font-bold justify-center relative text-[#3f2578] text-[18px]">
                <p className="leading-[1.6]">Číslo bytu</p>
              </div>
            </div>
            <input
              type="text"
              value={apartmentNumber}
              onChange={(e) => setApartmentNumber(e.target.value)}
              placeholder="0"
              className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center overflow-clip px-[12px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full font-mona font-bold text-[14px] text-[#94a3b8] outline-none"
            />
          </div>
        </div>

        <div className="flex items-start relative w-full">
          <div className="flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
            <div className="flex gap-[4px] items-center leading-[0] not-italic relative w-full whitespace-nowrap">
              <div className="flex flex-col font-mona font-bold justify-center relative text-[#3f2578] text-[18px]">
                <p className="leading-[1.6]">Umístění bytu</p>
              </div>
              <div className="flex flex-col font-inter font-normal justify-center relative text-[0px] text-[#d60021]">
                <p className="font-inter font-bold leading-[1.6] text-[14px]">*</p>
              </div>
            </div>
            <div className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center overflow-clip pl-[4px] pr-[8px] py-[4px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full">
              <button
                onClick={() => setFloor('ground')}
                className={`flex flex-[1_0_0] gap-[8px] h-full items-center min-h-px min-w-px overflow-clip px-[12px] relative rounded-[6px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] transition-colors ${
                  floor === 'ground' ? 'bg-[#3f2578]' : 'bg-transparent'
                }`}
              >
                <div className={`flex flex-[1_0_0] flex-col font-mona font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-center ${
                  floor === 'ground' ? 'text-white' : 'text-[#94a3b8]'
                }`}>
                  <p className="leading-[1.6] whitespace-pre-wrap">V přízemí</p>
                </div>
              </button>
              <button
                onClick={() => setFloor('first')}
                className="flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative"
              >
                <div className={`flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[14px] whitespace-nowrap ${
                  floor === 'first' ? 'text-[#3f2578]' : 'text-[#94a3b8]'
                }`}>
                  <p className="leading-[1.6]">V 1. patře</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-start relative w-full">
          <div className="bg-[#f8fafc] flex flex-[1_0_0] gap-[10px] items-start min-h-px min-w-px p-[12px] relative rounded-[12px]">
            <div className="flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative">
              <div className="flex items-center justify-between relative w-full">
                <div className="flex items-center relative">
                  <div className="flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[18px] text-[#3f2578] text-center whitespace-nowrap">
                    <p className="leading-[1.6]">Byt se nachází ve vyšším patře</p>
                  </div>
                </div>
                <button
                  onClick={() => setHigherFloor(!higherFloor)}
                  className={`flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] w-[40.5px] transition-colors ${
                    higherFloor ? 'bg-[#3f2578] justify-end' : 'bg-gray-300 justify-start'
                  }`}
                >
                  <div className="bg-white flex gap-[0px] items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] size-[18px]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start relative w-full">
          <div className="flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
            <div className="flex gap-[4px] items-center leading-[0] not-italic relative w-full whitespace-nowrap">
              <div className="flex flex-col font-mona font-bold justify-center relative text-[#3f2578] text-[18px]">
                <p className="leading-[1.6]">Konstrukce nemovitosti</p>
              </div>
              <div className="flex flex-col font-inter font-normal justify-center relative text-[0px] text-[#d60021]">
                <p className="font-inter font-bold leading-[1.6] text-[14px]">*</p>
              </div>
            </div>
            <div className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center overflow-clip pl-[4px] pr-[8px] py-[4px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full">
              <button
                onClick={() => setConstruction('panel')}
                className={`flex flex-[1_0_0] gap-[8px] h-full items-center min-h-px min-w-px overflow-clip px-[12px] relative rounded-[6px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] transition-colors ${
                  construction === 'panel' ? 'bg-[#3f2578]' : 'bg-transparent'
                }`}
              >
                <div className={`flex flex-[1_0_0] flex-col font-mona font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-center ${
                  construction === 'panel' ? 'text-white' : 'text-[#94a3b8]'
                }`}>
                  <p className="leading-[1.6] whitespace-pre-wrap">Panel</p>
                </div>
              </button>
              <button
                onClick={() => setConstruction('wood')}
                className="flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative"
              >
                <div className={`flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[14px] whitespace-nowrap ${
                  construction === 'wood' ? 'text-[#3f2578]' : 'text-[#94a3b8]'
                }`}>
                  <p className="leading-[1.6]">Dřevo</p>
                </div>
              </button>
              <button
                onClick={() => setConstruction('brick')}
                className="flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative"
              >
                <div className={`flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[14px] whitespace-nowrap ${
                  construction === 'brick' ? 'text-[#3f2578]' : 'text-[#94a3b8]'
                }`}>
                  <p className="leading-[1.6]">Cihla</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-start relative w-full">
          <div className="flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
            <div className="flex gap-[4px] items-center leading-[0] not-italic relative w-full whitespace-nowrap">
              <div className="flex flex-col font-mona font-bold justify-center relative text-[#3f2578] text-[18px]">
                <p className="leading-[1.6]">Kvalita bytu</p>
              </div>
              <div className="flex flex-col font-inter font-normal justify-center relative text-[0px] text-[#d60021]">
                <p className="font-inter font-bold leading-[1.6] text-[14px]">*</p>
              </div>
            </div>
            <div className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center overflow-clip pl-[4px] pr-[8px] py-[4px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full">
              <button
                onClick={() => setQuality('standard')}
                className={`flex flex-[1_0_0] gap-[8px] h-full items-center min-h-px min-w-px overflow-clip px-[12px] relative rounded-[6px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] transition-colors ${
                  quality === 'standard' ? 'bg-[#3f2578]' : 'bg-transparent'
                }`}
              >
                <div className={`flex flex-[1_0_0] flex-col font-mona font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-center ${
                  quality === 'standard' ? 'text-white' : 'text-[#94a3b8]'
                }`}>
                  <p className="leading-[1.6] whitespace-pre-wrap">Standardní</p>
                </div>
              </button>
              <button
                onClick={() => setQuality('premium')}
                className="flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative"
              >
                <div className={`flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[14px] whitespace-nowrap ${
                  quality === 'premium' ? 'text-[#3f2578]' : 'text-[#94a3b8]'
                }`}>
                  <p className="leading-[1.6]">Nadstandard</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-start relative w-full">
          <div className="flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
            <div className="flex gap-[4px] items-center leading-[0] not-italic relative w-full whitespace-nowrap">
              <div className="flex flex-col font-mona font-bold justify-center relative text-[#3f2578] text-[18px]">
                <p className="leading-[1.6]">Stav bytu</p>
              </div>
              <div className="flex flex-col font-inter font-normal justify-center relative text-[0px] text-[#d60021]">
                <p className="font-inter font-bold leading-[1.6] text-[14px]">*</p>
              </div>
            </div>
            <div className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center overflow-clip pl-[4px] pr-[8px] py-[4px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full">
              <button
                onClick={() => setCondition('good')}
                className={`flex flex-[1_0_0] gap-[8px] h-full items-center min-h-px min-w-px overflow-clip px-[12px] relative rounded-[6px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] transition-colors ${
                  condition === 'good' ? 'bg-[#3f2578]' : 'bg-transparent'
                }`}
              >
                <div className={`flex flex-[1_0_0] flex-col font-mona font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-center ${
                  condition === 'good' ? 'text-white' : 'text-[#94a3b8]'
                }`}>
                  <p className="leading-[1.6] whitespace-pre-wrap">Dobrý rozvany</p>
                </div>
              </button>
              <button
                onClick={() => setCondition('perfect')}
                className="flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative"
              >
                <div className={`flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[14px] whitespace-nowrap ${
                  condition === 'perfect' ? 'text-[#3f2578]' : 'text-[#94a3b8]'
                }`}>
                  <p className="leading-[1.6]">Perfektní/nový</p>
                </div>
              </button>
              <button
                onClick={() => setCondition('damaged')}
                className="flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative"
              >
                <div className={`flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[14px] whitespace-nowrap ${
                  condition === 'damaged' ? 'text-[#3f2578]' : 'text-[#94a3b8]'
                }`}>
                  <p className="leading-[1.6]">Porušený/rekonstrukce</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-[12px] items-start relative w-full">
          <div className="flex flex-[1_0_0] items-start min-h-px min-w-px">
            <div className="bg-[#f8fafc] flex flex-[1_0_0] gap-[10px] items-start min-h-px min-w-px p-[12px] relative rounded-[12px]">
              <div className="flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative">
                <div className="flex items-center justify-between relative w-full">
                  <div className="flex items-center relative">
                    <div className="flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[18px] text-[#3f2578] text-center whitespace-nowrap">
                      <p className="leading-[1.6]">Byt má balkon</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setHasBalcony(!hasBalcony)}
                    className={`flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] w-[40.5px] transition-colors ${
                      hasBalcony ? 'bg-[#3f2578] justify-end' : 'bg-gray-300 justify-start'
                    }`}
                  >
                    <div className="bg-white flex gap-[0px] items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] size-[18px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-[1_0_0] items-start min-h-px min-w-px">
            <div className="bg-[#f8fafc] flex flex-[1_0_0] gap-[10px] items-start min-h-px min-w-px p-[12px] relative rounded-[12px]">
              <div className="flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative">
                <div className="flex items-center justify-between relative w-full">
                  <div className="flex items-center relative">
                    <div className="flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[18px] text-[#3f2578] text-center whitespace-nowrap">
                      <p className="leading-[1.6]">Byt má terasu</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setHasTerrace(!hasTerrace)}
                    className={`flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] w-[40.5px] transition-colors ${
                      hasTerrace ? 'bg-[#3f2578] justify-end' : 'bg-gray-300 justify-start'
                    }`}
                  >
                    <div className="bg-white flex gap-[0px] items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] size-[18px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[8px] items-start relative w-full">
          <div className="flex gap-[4px] items-center leading-[0] not-italic relative w-full whitespace-nowrap">
            <div className="flex flex-col font-mona font-bold justify-center relative text-[#3f2578] text-[18px]">
              <p className="leading-[1.6]">Vybavení domu a bytu</p>
            </div>
            <div className="flex flex-col font-inter font-normal justify-center relative text-[0px] text-[#d60021]">
              <p className="font-inter font-bold leading-[1.6] text-[14px]">*</p>
            </div>
          </div>
          <div className="flex gap-[12px] items-start relative w-full">
            <button
              onClick={() => setHasGarage(!hasGarage)}
              className={`flex flex-[1_0_0] gap-[10px] items-start min-h-px min-w-px p-[12px] relative rounded-[12px] transition-colors ${
                hasGarage ? 'bg-[#f0ebf8]' : 'bg-[#f8fafc]'
              }`}
            >
              <div className="flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative">
                <div className="flex items-center justify-between relative w-full">
                  <div className="flex items-center relative">
                    <div className="flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[18px] text-[#3f2578] text-center whitespace-nowrap">
                      <p className="leading-[1.6]">Garážové stání</p>
                    </div>
                  </div>
                </div>
              </div>
            </button>

            <button
              onClick={() => setHasElevator(!hasElevator)}
              className={`flex flex-[1_0_0] gap-[10px] items-start min-h-px min-w-px p-[12px] relative rounded-[12px] transition-colors ${
                hasElevator ? 'bg-[#f0ebf8]' : 'bg-[#f8fafc]'
              }`}
            >
              <div className="flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative">
                <div className="flex items-center justify-between relative w-full">
                  <div className="flex items-center relative">
                    <div className="flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[18px] text-[#3f2578] text-center whitespace-nowrap">
                      <p className="leading-[1.6]">V domě je výtah</p>
                    </div>
                  </div>
                </div>
              </div>
            </button>

            <button
              onClick={() => setHasParking(!hasParking)}
              className={`flex flex-[1_0_0] gap-[10px] items-start min-h-px min-w-px p-[12px] relative rounded-[12px] transition-colors ${
                hasParking ? 'bg-[#f0ebf8]' : 'bg-[#f8fafc]'
              }`}
            >
              <div className="flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative">
                <div className="flex items-center justify-between relative w-full">
                  <div className="flex items-center relative">
                    <div className="flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[18px] text-[#3f2578] text-center whitespace-nowrap">
                      <p className="leading-[1.6]">Parkovací stání</p>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="flex items-start relative w-full">
          <div className="flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
            <div className="flex gap-[4px] items-center leading-[0] not-italic relative w-full whitespace-nowrap">
              <div className="flex flex-col font-mona font-bold justify-center relative text-[#3f2578] text-[18px]">
                <p className="leading-[1.6]">Hodnota nemovitosti</p>
              </div>
              <div className="flex flex-col font-inter font-normal justify-center relative text-[0px] text-[#d60021]">
                <p className="font-inter font-bold leading-[1.6] text-[14px]">*</p>
              </div>
            </div>
            <div className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center overflow-clip px-[12px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full">
              <input
                type="number"
                value={propertyValue}
                onChange={(e) => setPropertyValue(e.target.value)}
                placeholder="0"
                className="flex flex-[1_0_0] font-mona font-bold text-[14px] text-[#94a3b8] bg-transparent border-none outline-none"
              />
              <span className="font-mona font-bold text-[14px] text-[#3f2578]">Kč</span>
            </div>
          </div>
        </div>

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
