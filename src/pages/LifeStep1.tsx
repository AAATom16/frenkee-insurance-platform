import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LifeProgress } from '../components/LifeProgress';

const imgLifeCharacter = "/assets/life-char-1.svg";
const imgDropdownArrow = "/assets/dropdown-arrow.svg";

type EmploymentType = 'zamestnanec' | 'osvc' | 'bez';
type CitizenshipType = 'cesko' | 'slovensko' | 'jine';

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function LifeStep1() {
  const navigate = useNavigate();
  const [jmeno, setJmeno] = useState('');
  const [prijmeni, setPrijmeni] = useState('');
  const [datumNarozeni, setDatumNarozeni] = useState('');
  const [zamestnani, setZamestnani] = useState<EmploymentType>('zamestnanec');
  const [profese, setProfese] = useState('');
  const [popis, setPopis] = useState('');
  const [obcanstvi, setObcanstvi] = useState<CitizenshipType>('cesko');

  return (
    <div className="bg-white flex flex-col gap-[24px] items-center p-[24px] w-full min-h-screen">
      <div
        className="bg-clip-text flex flex-col font-mona font-extrabold justify-center leading-[0] not-italic relative text-[48px] text-center tracking-[-1px] w-full"
        style={{
          backgroundImage: 'linear-gradient(231.904deg, rgb(167, 82, 169) 26.752%, rgb(63, 37, 120) 100%)',
          WebkitTextFillColor: 'transparent',
        }}
      >
        <p className="leading-none whitespace-pre-wrap">Online sjednání životního pojištění</p>
      </div>

      <div className="flex flex-col items-center justify-center pt-[24px] pb-[120px] w-full max-w-[1200px]">
        <LifeProgress current={1} total={8} />

        <div className="flex flex-col lg:flex-row gap-[48px] items-start justify-center w-full mt-[24px]">
          <div className="flex justify-center lg:justify-start shrink-0 w-full lg:w-[317px]">
            <img src={imgLifeCharacter} alt="" className="max-h-[320px] w-auto object-contain" />
          </div>

          <div className="flex flex-col gap-[16px] w-full max-w-[600px]">
            <div className="flex items-center justify-center w-full">
              <div className="flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[#3f2578] text-[18px] text-center whitespace-nowrap">
                <p className="leading-[1.6]">Základní informace o vás</p>
              </div>
            </div>

            <div className="flex flex-col gap-[8px] items-start w-full">
              <div className="flex gap-[4px] items-center leading-[0] not-italic w-full whitespace-nowrap">
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
              <div className="flex flex-col sm:flex-row gap-[8px] w-full">
                <input
                  type="text"
                  value={jmeno}
                  onChange={(e) => setJmeno(e.target.value)}
                  placeholder="Jméno"
                  className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center overflow-clip px-[12px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full font-mona font-bold text-[14px] text-[#94a3b8] leading-[1.6] outline-none focus:border-[#3f2578]"
                />
                <input
                  type="text"
                  value={prijmeni}
                  onChange={(e) => setPrijmeni(e.target.value)}
                  placeholder="Příjmení"
                  className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center overflow-clip px-[12px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full font-mona font-bold text-[14px] text-[#94a3b8] leading-[1.6] outline-none focus:border-[#3f2578]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-[8px] items-start w-full">
              <div className="flex gap-[4px] items-center leading-[0] not-italic w-full whitespace-nowrap">
                <div className="flex flex-col font-mona font-bold justify-center relative text-[#3f2578] text-[18px]">
                  <p className="leading-[1.6]">Datum narození</p>
                </div>
                <div className="flex flex-col font-mona justify-center relative text-[14px] text-[#64748b]">
                  <p className="leading-[1.6]">&nbsp;</p>
                </div>
                <div className="flex flex-col font-inter font-bold justify-center relative text-[14px] text-[#d60021]">
                  <p className="leading-[1.6]">*</p>
                </div>
              </div>
              <div className="bg-white border border-[#e2e9f0] border-solid flex h-[40px] items-center justify-between px-[12px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] w-full">
                <input
                  type="text"
                  value={datumNarozeni}
                  onChange={(e) => setDatumNarozeni(e.target.value)}
                  placeholder="25.6.2025"
                  className="flex flex-1 font-inter font-normal leading-[20px] text-[14px] text-[#94a3b8] outline-none bg-transparent"
                />
                <div className="overflow-clip relative size-[16px]">
                  <img alt="" className="absolute block max-w-none size-full" src={imgDropdownArrow} />
                </div>
              </div>
            </div>

            <div className="bg-[#f8fafc] flex flex-col gap-[10px] items-start p-[12px] relative rounded-[12px] w-full">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <div className="flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[18px] text-[#3f2578] text-center whitespace-nowrap">
                    <p className="leading-[1.6]">Jaké je vaše zaměstnání?</p>
                  </div>
                </div>
                <button type="button" aria-label="Zavřít" className="text-[#94a3b8]">
                  <CloseIcon className="size-[24px]" />
                </button>
              </div>

              <div className="bg-white border border-[#e2e9f0] border-solid flex h-[40px] items-center overflow-clip pl-[4px] pr-[8px] py-[4px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full max-w-[400px]">
                <button
                  type="button"
                  onClick={() => setZamestnani('zamestnanec')}
                  className={`flex gap-[8px] h-full items-center overflow-clip px-[12px] relative rounded-[6px] transition-colors ${
                    zamestnani === 'zamestnanec' ? 'bg-[#3f2578] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]' : 'bg-transparent'
                  }`}
                >
                  <div className={`flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[14px] whitespace-nowrap ${
                    zamestnani === 'zamestnanec' ? 'text-white' : 'text-[#94a3b8]'
                  }`}>
                    <p className="leading-[1.6]">Zaměstnanec</p>
                  </div>
                </button>
                <button type="button" onClick={() => setZamestnani('osvc')} className="flex items-center justify-center relative px-[12px]">
                  <div className={`flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[14px] whitespace-nowrap ${
                    zamestnani === 'osvc' ? 'text-[#3f2578]' : 'text-[#94a3b8]'
                  }`}>
                    <p className="leading-[1.6]">OSVČ</p>
                  </div>
                </button>
                <button type="button" onClick={() => setZamestnani('bez')} className="flex items-center justify-center relative px-[12px]">
                  <div className={`flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[14px] whitespace-nowrap ${
                    zamestnani === 'bez' ? 'text-[#3f2578]' : 'text-[#94a3b8]'
                  }`}>
                    <p className="leading-[1.6]">Bez zaměstnání</p>
                  </div>
                </button>
              </div>

              <div className="flex flex-col gap-[4px] items-start w-full">
                <div className="flex flex-col font-mona font-medium justify-center leading-[0] not-italic relative text-[14px] text-[#3f2578] text-center whitespace-nowrap">
                  <p className="leading-none">Profese / zaměstnání</p>
                </div>
                <div className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center overflow-clip px-[12px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full">
                  <input
                    type="text"
                    value={profese}
                    onChange={(e) => setProfese(e.target.value)}
                    placeholder="Programátor"
                    className="flex flex-1 flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[14px] text-[#94a3b8] outline-none bg-transparent"
                  />
                  <div className="overflow-clip relative size-[20px]">
                    <img alt="" className="absolute block max-w-none size-full" src={imgDropdownArrow} />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[4px] items-start w-full">
                <div className="flex flex-col font-mona font-medium justify-center leading-[0] not-italic relative text-[14px] text-[#3f2578] text-center whitespace-nowrap">
                  <p className="leading-none">Popis</p>
                </div>
                <input
                  type="text"
                  value={popis}
                  onChange={(e) => setPopis(e.target.value)}
                  placeholder="Programátor"
                  className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center overflow-clip px-[12px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full font-mona font-bold text-[14px] text-[#94a3b8] leading-[1.6] outline-none focus:border-[#3f2578]"
                />
              </div>

              <div className="flex flex-col gap-[4px] items-start w-full">
                <div className="flex flex-col font-mona font-medium justify-center leading-[0] not-italic relative text-[14px] text-[#3f2578] text-center whitespace-nowrap">
                  <p className="leading-none">Občanství</p>
                </div>
                <div className="bg-white border border-[#e2e9f0] border-solid flex gap-[8px] h-[40px] items-center overflow-clip pl-[4px] pr-[8px] py-[4px] relative rounded-[8px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-full max-w-[320px]">
                  <button
                    type="button"
                    onClick={() => setObcanstvi('cesko')}
                    className={`flex gap-[8px] h-full items-center overflow-clip px-[12px] relative rounded-[6px] transition-colors ${
                      obcanstvi === 'cesko' ? 'bg-[#3f2578] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]' : 'bg-transparent'
                    }`}
                  >
                    <div className={`flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[14px] whitespace-nowrap ${
                      obcanstvi === 'cesko' ? 'text-white' : 'text-[#94a3b8]'
                    }`}>
                      <p className="leading-[1.6]">Česko</p>
                    </div>
                  </button>
                  <button type="button" onClick={() => setObcanstvi('slovensko')} className="flex items-center justify-center relative px-[12px]">
                    <div className={`flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[14px] whitespace-nowrap ${
                      obcanstvi === 'slovensko' ? 'text-[#3f2578]' : 'text-[#94a3b8]'
                    }`}>
                      <p className="leading-[1.6]">Slovensko</p>
                    </div>
                  </button>
                  <button type="button" onClick={() => setObcanstvi('jine')} className="flex items-center justify-center relative px-[12px]">
                    <div className={`flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[14px] whitespace-nowrap ${
                      obcanstvi === 'jine' ? 'text-[#3f2578]' : 'text-[#94a3b8]'
                    }`}>
                      <p className="leading-[1.6]">Jiné</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => navigate('/pojisteni/zivot/zdravi')}
              className="flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] w-full shadow-[0px_4px_9.2px_0px_#a752a9,0px_0.301px_0.51px_0px_#a752a9,0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]"
              style={{
                backgroundImage:
                  'linear-gradient(263.233deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%), linear-gradient(90deg, rgb(89, 79, 238) 0%, rgb(89, 79, 238) 100%)',
              }}
            >
              <div className="flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[16px] text-white whitespace-nowrap">
                <p className="leading-[1.6]">Pokračovat</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
