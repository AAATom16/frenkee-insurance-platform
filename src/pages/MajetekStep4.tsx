import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const imgSearchIcon = "/assets/search-icon.svg";
const imgDropdownArrow = "/assets/dropdown-arrow.svg";

function MingIconSearch3Line({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"}>
      <div className="absolute inset-[8.33%_11.99%_11.99%_8.33%]">
        <img alt="" className="absolute block max-w-none size-full" src={imgSearchIcon} />
      </div>
    </div>
  );
}

type PersonType = 'citizen' | 'entrepreneur' | 'legal' | 'foreigner';

export function MajetekStep4() {
  const navigate = useNavigate();
  const [personType, setPersonType] = useState<PersonType>('citizen');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthNumber, setBirthNumber] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleContinue = () => {
    navigate('/pojisteni/majetek/nabidky');
  };

  return (
    <div className="bg-white flex flex-col gap-[24px] items-center p-[24px] w-full min-h-screen">
      <div className="bg-clip-text flex flex-col font-mona font-extrabold justify-center leading-[0] not-italic relative text-[48px] text-center tracking-[-1px] w-full" style={{ backgroundImage: "linear-gradient(231.904deg, rgb(167, 82, 169) 26.752%, rgb(63, 37, 120) 100%)", WebkitTextFillColor: "transparent" }}>
        <p className="leading-none whitespace-pre-wrap">Online pojištění majetku</p>
      </div>

      <div className="flex flex-col items-center justify-center pb-[340px] pt-[24px] px-[99px] relative">
        <div className="flex flex-col gap-[24px] items-center justify-center overflow-clip pb-[340px] pt-[24px] px-[99px] relative">
          <div className="flex flex-col gap-[8px] items-start relative w-full">
            <div className="flex gap-[4px] items-center leading-[0] not-italic relative w-full whitespace-nowrap">
              <div className="flex flex-col font-mona font-bold justify-center relative text-[#3f2578] text-[18px]">
                <p className="leading-[1.6]">Informace o vás</p>
              </div>
              <div className="flex flex-col font-mona justify-center relative text-[14px] text-[#64748b]">
                <p className="leading-[1.6]">&nbsp;</p>
              </div>
              <div className="flex flex-col font-inter font-bold justify-center relative text-[14px] text-[#d60021]">
                <p className="leading-[1.6]">*</p>
              </div>
            </div>
            <div className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center overflow-clip pl-[4px] pr-[8px] py-[4px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full">
              <button
                onClick={() => setPersonType('citizen')}
                className={`flex flex-1 gap-[8px] h-full items-center overflow-clip px-[12px] relative rounded-[6px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] transition-colors ${
                  personType === 'citizen' ? 'bg-[#3f2578]' : 'bg-transparent'
                }`}
              >
                <div className={`flex flex-1 flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[14px] text-center ${
                  personType === 'citizen' ? 'text-white' : 'text-[#94a3b8]'
                }`}>
                  <p className="leading-[1.6] whitespace-pre-wrap">Občan</p>
                </div>
              </button>
              <button
                onClick={() => setPersonType('entrepreneur')}
                className="flex flex-1 items-center justify-center relative"
              >
                <div className={`flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[14px] whitespace-nowrap ${
                  personType === 'entrepreneur' ? 'text-[#3f2578]' : 'text-[#94a3b8]'
                }`}>
                  <p className="leading-[1.6]">OSVČ</p>
                </div>
              </button>
              <button
                onClick={() => setPersonType('legal')}
                className="flex flex-1 items-center justify-center relative"
              >
                <div className={`flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[14px] whitespace-nowrap ${
                  personType === 'legal' ? 'text-[#3f2578]' : 'text-[#94a3b8]'
                }`}>
                  <p className="leading-[1.6]">Pravnická osoba</p>
                </div>
              </button>
              <button
                onClick={() => setPersonType('foreigner')}
                className="flex flex-1 items-center justify-center relative"
              >
                <div className={`flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[14px] whitespace-nowrap ${
                  personType === 'foreigner' ? 'text-[#3f2578]' : 'text-[#94a3b8]'
                }`}>
                  <p className="leading-[1.6]">Cizinec</p>
                </div>
              </button>
            </div>
          </div>

          <div className="flex flex-col items-start relative w-full">
            <div className="flex flex-col gap-[8px] items-start relative w-full">
              <div className="flex gap-[4px] items-center leading-[0] not-italic relative w-full whitespace-nowrap">
                <div className="flex flex-col font-mona font-bold justify-center relative text-[#3f2578] text-[18px]">
                  <p className="leading-[1.6]">Jméno</p>
                </div>
                <div className="flex flex-col font-mona justify-center relative text-[14px] text-[#64748b]">
                  <p className="leading-[1.6]">&nbsp;</p>
                </div>
                <div className="flex flex-col font-inter font-bold justify-center relative text-[14px] text-[#d60021]">
                  <p className="leading-[1.6]">*</p>
                </div>
              </div>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Jméno"
                className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center overflow-clip px-[12px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full font-mona font-bold text-[14px] text-[#94a3b8] leading-[1.6] outline-none focus:border-[#3f2578]"
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Přijmení"
                className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center overflow-clip px-[12px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full font-mona font-bold text-[14px] text-[#94a3b8] leading-[1.6] outline-none focus:border-[#3f2578]"
              />
            </div>
          </div>

          <div className="flex flex-col items-start relative w-[600px]">
            <div className="flex flex-col gap-[8px] items-start relative w-full">
              <div className="flex gap-[4px] items-center leading-[0] not-italic relative w-full whitespace-nowrap">
                <div className="flex flex-col font-mona font-bold justify-center relative text-[#3f2578] text-[18px]">
                  <p className="leading-[1.6]">Rodné cíšlo</p>
                </div>
                <div className="flex flex-col font-mona justify-center relative text-[14px] text-[#64748b]">
                  <p className="leading-[1.6]">&nbsp;</p>
                </div>
                <div className="flex flex-col font-inter font-bold justify-center relative text-[14px] text-[#d60021]">
                  <p className="leading-[1.6]">*</p>
                </div>
              </div>
              <input
                type="text"
                value={birthNumber}
                onChange={(e) => setBirthNumber(e.target.value)}
                placeholder="rodné číslo"
                className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center overflow-clip px-[12px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full font-mona font-bold text-[14px] text-[#94a3b8] leading-[1.6] outline-none focus:border-[#3f2578]"
              />
            </div>
          </div>

          <div className="flex flex-col items-start relative w-[600px]">
            <div className="flex gap-[8px] items-start leading-[0] not-italic relative whitespace-nowrap">
              <div className="flex flex-col font-mona font-bold justify-center relative text-[#3f2578] text-[18px]">
                <p className="leading-[1.6]">Kontaktní adresa</p>
              </div>
              <div className="flex flex-col font-inter font-bold justify-center relative text-[14px] text-[#d60021]">
                <p className="leading-[1.6]">*</p>
              </div>
            </div>
            <div className="bg-white flex flex-col gap-[0px] items-start relative rounded-[12px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full">
              <div className="flex flex-col gap-[8px] items-start relative w-full">
                <div className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center overflow-clip px-[12px] relative rounded-tl-[12px] rounded-tr-[12px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full">
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Adresa"
                    className="flex flex-1 flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[14px] text-[#94a3b8] outline-none bg-transparent"
                  />
                  <MingIconSearch3Line className="overflow-clip relative size-[24px]" />
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-start relative w-full">
                <div className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center overflow-clip px-[12px] relative shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full">
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="Země původu"
                    className="flex flex-1 flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[14px] text-[#94a3b8] outline-none bg-transparent"
                  />
                  <div className="overflow-clip relative size-[20px]">
                    <div className="absolute inset-[34.76%_22.26%_33.33%_22.26%]">
                      <img alt="" className="absolute block max-w-none size-full" src={imgDropdownArrow} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-start relative w-full">
                <div className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center overflow-clip px-[12px] relative shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full">
                  <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="Stát"
                    className="flex flex-1 flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[14px] text-[#94a3b8] outline-none bg-transparent"
                  />
                  <div className="overflow-clip relative size-[20px]">
                    <div className="absolute inset-[34.76%_22.26%_33.33%_22.26%]">
                      <img alt="" className="absolute block max-w-none size-full" src={imgDropdownArrow} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start relative w-full">
                <div className="flex flex-1 flex-col gap-[8px] items-start relative">
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Město"
                    className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center overflow-clip px-[12px] relative rounded-bl-[12px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full font-mona font-bold text-[14px] text-[#94a3b8] leading-[1.6] outline-none focus:border-[#3f2578]"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[8px] items-start relative">
                  <input
                    type="text"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    placeholder="Směrovací číslo"
                    className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center overflow-clip px-[12px] relative rounded-br-[12px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full font-mona text-[14px] text-[#94a3b8] leading-[1.6] outline-none focus:border-[#3f2578]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start relative w-[600px]">
            <div className="flex gap-[8px] items-start leading-[0] not-italic relative whitespace-nowrap">
              <div className="flex flex-col font-mona font-bold justify-center relative text-[#3f2578] text-[18px]">
                <p className="leading-[1.6]">Kontaktní údaje</p>
              </div>
              <div className="flex flex-col font-inter font-bold justify-center relative text-[14px] text-[#d60021]">
                <p className="leading-[1.6]">*</p>
              </div>
            </div>
            <div className="flex flex-col gap-[8px] items-start relative w-full">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Telefon"
                className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center overflow-clip px-[12px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full font-mona font-bold text-[14px] text-[#94a3b8] leading-[1.6] outline-none focus:border-[#3f2578]"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center overflow-clip px-[12px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full font-mona font-bold text-[14px] text-[#94a3b8] leading-[1.6] outline-none focus:border-[#3f2578]"
              />
            </div>
          </div>

          <button
            onClick={handleContinue}
            className="flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] shadow-[0px_4px_9.2px_0px_#a752a9,0px_0.301px_0.51px_0px_#a752a9,0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]"
            style={{ backgroundImage: "linear-gradient(263.127deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%), linear-gradient(90deg, rgb(89, 79, 238) 0%, rgb(89, 79, 238) 100%)" }}
          >
            <div className="flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[16px] text-white whitespace-nowrap">
              <p className="leading-[1.6]">Pokračovat</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
