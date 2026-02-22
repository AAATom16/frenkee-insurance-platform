import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const imgApartmentIcon = "/assets/apartment-icon.png";
const imgHouseIcon = "/assets/house-3d.png";
const imgCottageIcon = "/assets/cottage-icon.png";

export function MajetekStep2() {
  const navigate = useNavigate();
  const [propertyType, setPropertyType] = useState<'apartment' | 'house' | 'cottage'>('house');
  const [relationship, setRelationship] = useState<'owner' | 'tenant'>('owner');
  const [renting, setRenting] = useState<'no' | 'yes'>('no');
  const [ownershipType, setOwnershipType] = useState<'personal' | 'cooperative'>('personal');
  const [address, setAddress] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [apartmentType, setApartmentType] = useState<'building' | 'house' | 'none'>('building');
  const [hasGoodCondition, setHasGoodCondition] = useState(true);

  const handleContinue = () => {
    navigate('/pojisteni/majetek/krok-3');
  };

  return (
    <div className="bg-white flex flex-col gap-[24px] items-center p-[24px] w-full min-h-screen">
      <div className="bg-clip-text flex flex-col font-mona font-extrabold justify-center leading-[0] not-italic relative text-[48px] text-center tracking-[-1px] w-full" style={{ backgroundImage: "linear-gradient(231.904deg, rgb(167, 82, 169) 26.752%, rgb(63, 37, 120) 100%)", WebkitTextFillColor: "transparent" }}>
        <p className="leading-none whitespace-pre-wrap">Online pojištění majetku</p>
      </div>

      <div className="flex flex-col gap-[24px] items-center overflow-clip px-[99px] py-[24px] relative w-[1000px] max-w-full">
        <div className="flex flex-col items-start relative w-full">
          <div className="flex flex-col items-start relative w-full">
            <div className="flex items-center justify-center relative">
              <div className="flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[#3f2578] text-[18px] text-center whitespace-nowrap">
                <p className="leading-[1.6]">Základní údaje o nemovitosti</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[8px] items-start relative w-full">
          <div className="flex items-start relative w-full">
            <div className="flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
              <div className="flex gap-[4px] items-center leading-[0] not-italic relative w-full whitespace-nowrap">
                <div className="flex flex-col font-mona font-bold justify-center relative text-[#3f2578] text-[18px]">
                  <p className="leading-[1.6]">Jakou nemovitost chcete pojistit?</p>
                </div>
                <div className="flex flex-col font-inter font-normal justify-center relative text-[0px] text-[#d60021]">
                  <p className="font-inter font-bold leading-[1.6] text-[14px]">*</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-[24px] items-center relative w-full">
            <button
              onClick={() => setPropertyType('apartment')}
              className={`border border-solid flex flex-[1_0_0] flex-col gap-[4px] h-[250px] items-center justify-end min-h-px min-w-px overflow-clip p-[12px] relative rounded-[8px] transition-colors ${
                propertyType === 'apartment' ? 'border-[#34c759] bg-white' : 'border-[#e9e9e9]'
              }`}
            >
              <div className="h-[174px] relative w-[225px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="Byt" className="absolute h-[177.44%] left-[2.35%] max-w-none top-[-37.3%] w-[91.48%]" src={imgApartmentIcon} />
                </div>
              </div>
              <div className="overflow-clip relative size-[16px]">
                {propertyType === 'apartment' ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" fill="#34c759" stroke="#34c759" strokeWidth="2"/>
                    <circle cx="8" cy="8" r="3" fill="white"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="#94a3b8" strokeWidth="1.5"/>
                  </svg>
                )}
              </div>
              <div className="flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[#3f2578] text-[16px] text-center whitespace-nowrap">
                <p className="leading-[1.6]">Byt</p>
              </div>
            </button>

            <button
              onClick={() => setPropertyType('house')}
              className={`border border-solid flex flex-[1_0_0] flex-col gap-[4px] h-[250px] items-center justify-end min-h-px min-w-px overflow-clip p-[12px] relative rounded-[8px] transition-colors ${
                propertyType === 'house' ? 'border-[#34c759] bg-white' : 'border-[#e9e9e9]'
              }`}
            >
              <div className="h-[176px] relative w-[200px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="Dům" className="absolute h-[170.45%] left-0 max-w-none top-[-29.6%] w-full" src={imgHouseIcon} />
                </div>
              </div>
              <div className="overflow-clip relative size-[16px]">
                {propertyType === 'house' ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" fill="#34c759" stroke="#34c759" strokeWidth="2"/>
                    <circle cx="8" cy="8" r="3" fill="white"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="#94a3b8" strokeWidth="1.5"/>
                  </svg>
                )}
              </div>
              <div className="flex flex-col font-mona font-bold justify-center leading-[0] min-w-full not-italic relative text-[#3f2578] text-[16px] text-center w-[min-content]">
                <p className="leading-[1.6] whitespace-pre-wrap">Dům</p>
              </div>
            </button>

            <button
              onClick={() => setPropertyType('cottage')}
              className={`border border-solid flex flex-[1_0_0] flex-col gap-[4px] h-[250px] items-center justify-end min-h-px min-w-px overflow-clip p-[12px] relative rounded-[8px] transition-colors ${
                propertyType === 'cottage' ? 'border-[#34c759] bg-white' : 'border-[#e9e9e9]'
              }`}
            >
              <div className="h-[172px] relative w-[201px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="Chata, chalupa" className="absolute h-[161.34%] left-[3.98%] max-w-none top-[-22.09%] w-[92.04%]" src={imgCottageIcon} />
                </div>
              </div>
              <div className="overflow-clip relative size-[16px]">
                {propertyType === 'cottage' ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" fill="#34c759" stroke="#34c759" strokeWidth="2"/>
                    <circle cx="8" cy="8" r="3" fill="white"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="#94a3b8" strokeWidth="1.5"/>
                  </svg>
                )}
              </div>
              <div className="flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[#3f2578] text-[16px] text-center whitespace-nowrap">
                <p className="leading-[1.6]">Chata, chalupa</p>
              </div>
            </button>
          </div>
        </div>

        <div className="flex gap-[12px] items-start relative w-full">
          <div className="flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
            <div className="flex gap-[4px] items-center leading-[0] not-italic relative w-full whitespace-nowrap">
              <div className="flex flex-col font-mona font-bold justify-center relative text-[#3f2578] text-[18px]">
                <p className="leading-[1.6]">Vztah k nemovitosti</p>
              </div>
              <div className="flex flex-col font-inter font-normal justify-center relative text-[0px] text-[#d60021]">
                <p className="font-inter font-bold leading-[1.6] text-[14px]">*</p>
              </div>
            </div>
            <div className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center overflow-clip pl-[4px] pr-[8px] py-[4px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full">
              <button
                onClick={() => setRelationship('owner')}
                className={`flex flex-[1_0_0] gap-[8px] h-full items-center min-h-px min-w-px overflow-clip px-[12px] relative rounded-[6px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] transition-colors ${
                  relationship === 'owner' ? 'bg-[#3f2578]' : 'bg-transparent'
                }`}
              >
                <div className={`flex flex-[1_0_0] flex-col font-mona font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-center ${
                  relationship === 'owner' ? 'text-white' : 'text-[#94a3b8]'
                }`}>
                  <p className="leading-[1.6] whitespace-pre-wrap">Vlastník</p>
                </div>
              </button>
              <button
                onClick={() => setRelationship('tenant')}
                className="flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative"
              >
                <div className={`flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[14px] whitespace-nowrap ${
                  relationship === 'tenant' ? 'text-[#3f2578]' : 'text-[#94a3b8]'
                }`}>
                  <p className="leading-[1.6]">Nájemce</p>
                </div>
              </button>
            </div>
          </div>

          <div className="flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
            <div className="flex gap-[4px] items-center leading-[0] not-italic relative w-full whitespace-nowrap">
              <div className="flex flex-col font-mona font-bold justify-center relative text-[#3f2578] text-[18px]">
                <p className="leading-[1.6]">Pronajímáte nemovitost</p>
              </div>
              <div className="flex flex-col font-inter font-normal justify-center relative text-[0px] text-[#d60021]">
                <p className="font-inter font-bold leading-[1.6] text-[14px]">*</p>
              </div>
            </div>
            <div className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center overflow-clip pl-[4px] pr-[8px] py-[4px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full">
              <button
                onClick={() => setRenting('no')}
                className={`flex flex-[1_0_0] gap-[8px] h-full items-center min-h-px min-w-px overflow-clip px-[12px] relative rounded-[6px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] transition-colors ${
                  renting === 'no' ? 'bg-[#3f2578]' : 'bg-transparent'
                }`}
              >
                <div className={`flex flex-[1_0_0] flex-col font-mona font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-center ${
                  renting === 'no' ? 'text-white' : 'text-[#94a3b8]'
                }`}>
                  <p className="leading-[1.6] whitespace-pre-wrap">Ne</p>
                </div>
              </button>
              <button
                onClick={() => setRenting('yes')}
                className="flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative"
              >
                <div className={`flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[14px] whitespace-nowrap ${
                  renting === 'yes' ? 'text-[#3f2578]' : 'text-[#94a3b8]'
                }`}>
                  <p className="leading-[1.6]">Ano</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-start relative w-full">
          <div className="flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
            <div className="flex gap-[4px] items-center leading-[0] not-italic relative w-full whitespace-nowrap">
              <div className="flex flex-col font-mona font-bold justify-center relative text-[#3f2578] text-[18px]">
                <p className="leading-[1.6]">Druh vlastnictví</p>
              </div>
              <div className="flex flex-col font-inter font-normal justify-center relative text-[0px] text-[#d60021]">
                <p className="font-inter font-bold leading-[1.6] text-[14px]">*</p>
              </div>
            </div>
            <div className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center overflow-clip pl-[4px] pr-[8px] py-[4px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]">
              <button
                onClick={() => setOwnershipType('personal')}
                className={`flex gap-[8px] h-full items-center overflow-clip px-[12px] relative rounded-[6px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] transition-colors ${
                  ownershipType === 'personal' ? 'bg-[#3f2578]' : 'bg-transparent'
                }`}
              >
                <div className={`flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[14px] whitespace-nowrap ${
                  ownershipType === 'personal' ? 'text-white' : 'text-[#94a3b8]'
                }`}>
                  <p className="leading-[1.6]">Osobní</p>
                </div>
              </button>
              <button
                onClick={() => setOwnershipType('cooperative')}
                className="flex items-center justify-center relative"
              >
                <div className={`flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[14px] whitespace-nowrap ${
                  ownershipType === 'cooperative' ? 'text-[#3f2578]' : 'text-[#94a3b8]'
                }`}>
                  <p className="leading-[1.6]">Družstevní</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start relative w-full">
          <div className="flex flex-col gap-[8px] items-start relative w-full">
            <div className="flex gap-[8px] items-start leading-[0] not-italic relative whitespace-nowrap">
              <div className="flex flex-col font-mona font-bold justify-center relative text-[#3f2578] text-[18px]">
                <p className="leading-[1.6]">Adresa</p>
              </div>
              <div className="flex flex-col font-inter font-normal justify-center relative text-[0px] text-[#d60021]">
                <p className="font-inter font-bold leading-[1.6] text-[14px]">*</p>
              </div>
            </div>
            <div className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center overflow-clip px-[12px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full">
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Adresa"
                className="flex flex-[1_0_0] flex-col font-mona font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[#94a3b8] bg-transparent border-none outline-none"
              />
            </div>
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              placeholder="Stát"
              className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center overflow-clip px-[12px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full font-mona font-bold text-[14px] text-[#94a3b8] outline-none"
            />
            <div className="flex gap-[8px] items-start relative w-full">
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Město"
                className="bg-white border border-[#e2e9f0] border-solid flex flex-[1_0_0] gap-[8px] h-[40px] items-center overflow-clip px-[12px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] font-mona font-bold text-[14px] text-[#94a3b8] outline-none"
              />
              <input
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="Směrovací číslo"
                className="bg-white border border-[#e2e9f0] border-solid flex flex-[1_0_0] gap-[8px] h-[40px] items-center overflow-clip px-[12px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] font-mona font-bold text-[14px] text-[#94a3b8] outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Katastrální území"
              className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center overflow-clip px-[12px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full font-mona font-bold text-[14px] text-[#94a3b8] outline-none"
            />
            <input
              type="text"
              placeholder="Číslo parcely"
              className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center overflow-clip px-[12px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full font-mona font-bold text-[14px] text-[#94a3b8] outline-none"
            />
          </div>
        </div>

        <div className="flex items-start relative w-full">
          <div className="flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
            <div className="flex gap-[4px] items-center leading-[0] not-italic relative w-full whitespace-nowrap">
              <div className="flex flex-col font-mona font-bold justify-center relative text-[#3f2578] text-[18px]">
                <p className="leading-[1.6]">Typ parcely</p>
              </div>
              <div className="flex flex-col font-inter font-normal justify-center relative text-[0px] text-[#d60021]">
                <p className="font-inter font-bold leading-[1.6] text-[14px]">*</p>
              </div>
            </div>
            <div className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center overflow-clip pl-[4px] pr-[8px] py-[4px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full">
              <button
                onClick={() => setApartmentType('building')}
                className={`flex flex-[1_0_0] gap-[8px] h-full items-center min-h-px min-w-px overflow-clip px-[12px] relative rounded-[6px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] transition-colors ${
                  apartmentType === 'building' ? 'bg-[#3f2578]' : 'bg-transparent'
                }`}
              >
                <div className={`flex flex-[1_0_0] flex-col font-mona font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-center ${
                  apartmentType === 'building' ? 'text-white' : 'text-[#94a3b8]'
                }`}>
                  <p className="leading-[1.6] whitespace-pre-wrap">Stavební</p>
                </div>
              </button>
              <button
                onClick={() => setApartmentType('house')}
                className="flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative"
              >
                <div className={`flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[14px] whitespace-nowrap ${
                  apartmentType === 'house' ? 'text-[#3f2578]' : 'text-[#94a3b8]'
                }`}>
                  <p className="leading-[1.6]">Pozemková / Nevstupní typ</p>
                </div>
              </button>
              <button
                onClick={() => setApartmentType('none')}
                className="flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative"
              >
                <div className={`flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[14px] whitespace-nowrap ${
                  apartmentType === 'none' ? 'text-[#3f2578]' : 'text-[#94a3b8]'
                }`}>
                  <p className="leading-[1.6]">Nemá příslušný typ</p>
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
                    <p className="leading-[1.6]">Domácnost je v dobrém stavu a bez chybějících prvků</p>
                  </div>
                </div>
                <button
                  onClick={() => setHasGoodCondition(!hasGoodCondition)}
                  className={`flex h-[22.5px] items-center overflow-clip p-[2.25px] relative rounded-[675px] w-[40.5px] transition-colors ${
                    hasGoodCondition ? 'bg-[#3f2578] justify-end' : 'bg-gray-300 justify-start'
                  }`}
                >
                  <div className="bg-white flex gap-[0px] items-center justify-center overflow-clip p-[2.25px] rounded-[675px] shadow-[0px_0.169px_0.563px_0px_rgba(0,0,0,0.02),0px_0.644px_2.25px_0px_rgba(0,0,0,0.08)] size-[18px]" />
                </button>
              </div>
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
