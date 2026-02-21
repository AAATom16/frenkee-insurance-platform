import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function AutoStep2() {
  const navigate = useNavigate();
  const [jmeno, setJmeno] = useState('');
  const [prijmeni, setPrijmeni] = useState('');
  const [datumNarozeni, setDatumNarozeni] = useState('');
  const [email, setEmail] = useState('');
  const [telefon, setTelefon] = useState('');
  const [adresa, setAdresa] = useState('');

  const handleContinue = () => {
    navigate('/pojisteni/auto/krok-3');
  };

  const handleBack = () => {
    navigate('/pojisteni/auto');
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
              <span className="text-white font-mona font-bold text-[16px]">2</span>
            </div>
            <span className="text-[#3f2578] font-mona font-bold text-[14px]">Osobní údaje</span>
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

        {/* Jméno a Příjmení */}
        <div className="flex gap-[12px] items-start relative w-full">
          <div className="bg-white border border-[#edf2f7] border-solid flex flex-[1_0_0] items-start min-h-px min-w-px p-[12px] relative rounded-[12px]">
            <div className="flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
              <div className="flex items-center justify-between relative w-full">
                <div className="flex gap-[4px] items-center leading-[0] not-italic relative whitespace-nowrap">
                  <div className="flex flex-col font-mona font-bold justify-center relative text-[#3f2578] text-[18px]">
                    <p className="leading-[1.6]">Jméno</p>
                  </div>
                  <div className="flex flex-col font-inter font-normal justify-center relative text-[0px] text-[#d60021]">
                    <p className="font-inter font-bold leading-[1.6] text-[14px]">*</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center min-w-[200px] overflow-clip px-[12px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full">
                <input
                  type="text"
                  value={jmeno}
                  onChange={(e) => setJmeno(e.target.value)}
                  placeholder="Zadejte jméno"
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
                    <p className="leading-[1.6]">Příjmení</p>
                  </div>
                  <div className="flex flex-col font-inter font-normal justify-center relative text-[0px] text-[#d60021]">
                    <p className="font-inter font-bold leading-[1.6] text-[14px]">*</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center min-w-[200px] overflow-clip px-[12px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full">
                <input
                  type="text"
                  value={prijmeni}
                  onChange={(e) => setPrijmeni(e.target.value)}
                  placeholder="Zadejte příjmení"
                  className="flex flex-[1_0_0] flex-col font-mona font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[#3f2578] placeholder:text-[#94a3b8] bg-transparent border-none outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Datum narození */}
        <div className="flex items-start relative w-full">
          <div className="bg-white border border-[#edf2f7] border-solid flex flex-[1_0_0] items-start min-h-px min-w-px p-[12px] relative rounded-[12px]">
            <div className="flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
              <div className="flex items-center justify-between relative w-full">
                <div className="flex gap-[4px] items-center leading-[0] not-italic relative whitespace-nowrap">
                  <div className="flex flex-col font-mona font-bold justify-center relative text-[#3f2578] text-[18px]">
                    <p className="leading-[1.6]">Datum narození</p>
                  </div>
                  <div className="flex flex-col font-inter font-normal justify-center relative text-[0px] text-[#d60021]">
                    <p className="font-inter font-bold leading-[1.6] text-[14px]">*</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center min-w-[200px] overflow-clip px-[12px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full">
                <input
                  type="date"
                  value={datumNarozeni}
                  onChange={(e) => setDatumNarozeni(e.target.value)}
                  className="flex flex-[1_0_0] flex-col font-mona font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[#3f2578] placeholder:text-[#94a3b8] bg-transparent border-none outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Email a Telefon */}
        <div className="flex gap-[12px] items-start relative w-full">
          <div className="bg-white border border-[#edf2f7] border-solid flex flex-[1_0_0] items-start min-h-px min-w-px p-[12px] relative rounded-[12px]">
            <div className="flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
              <div className="flex items-center justify-between relative w-full">
                <div className="flex gap-[4px] items-center leading-[0] not-italic relative whitespace-nowrap">
                  <div className="flex flex-col font-mona font-bold justify-center relative text-[#3f2578] text-[18px]">
                    <p className="leading-[1.6]">E-mail</p>
                  </div>
                  <div className="flex flex-col font-inter font-normal justify-center relative text-[0px] text-[#d60021]">
                    <p className="font-inter font-bold leading-[1.6] text-[14px]">*</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center min-w-[200px] overflow-clip px-[12px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="vas@email.cz"
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
                    <p className="leading-[1.6]">Telefon</p>
                  </div>
                  <div className="flex flex-col font-inter font-normal justify-center relative text-[0px] text-[#d60021]">
                    <p className="font-inter font-bold leading-[1.6] text-[14px]">*</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center min-w-[200px] overflow-clip px-[12px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full">
                <input
                  type="tel"
                  value={telefon}
                  onChange={(e) => setTelefon(e.target.value)}
                  placeholder="+420 123 456 789"
                  className="flex flex-[1_0_0] flex-col font-mona font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[#3f2578] placeholder:text-[#94a3b8] bg-transparent border-none outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Adresa */}
        <div className="flex items-start relative w-full">
          <div className="bg-white border border-[#edf2f7] border-solid flex flex-[1_0_0] items-start min-h-px min-w-px p-[12px] relative rounded-[12px]">
            <div className="flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
              <div className="flex items-center justify-between relative w-full">
                <div className="flex gap-[4px] items-center leading-[0] not-italic relative whitespace-nowrap">
                  <div className="flex flex-col font-mona font-bold justify-center relative text-[#3f2578] text-[18px]">
                    <p className="leading-[1.6]">Adresa trvalého bydliště</p>
                  </div>
                  <div className="flex flex-col font-inter font-normal justify-center relative text-[0px] text-[#d60021]">
                    <p className="font-inter font-bold leading-[1.6] text-[14px]">*</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center min-w-[200px] overflow-clip px-[12px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full">
                <input
                  type="text"
                  value={adresa}
                  onChange={(e) => setAdresa(e.target.value)}
                  placeholder="Ulice 123, Praha 1, 110 00"
                  className="flex flex-[1_0_0] flex-col font-mona font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[#3f2578] placeholder:text-[#94a3b8] bg-transparent border-none outline-none"
                />
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
              <p className="leading-[1.6]">Pokračovat</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
