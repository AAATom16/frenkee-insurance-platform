import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function AutoStep5() {
  const navigate = useNavigate();
  const [souhlas1, setSouhlas1] = useState(false);
  const [souhlas2, setSouhlas2] = useState(false);
  const [souhlas3, setSouhlas3] = useState(false);

  const handleSubmit = () => {
    if (souhlas1 && souhlas2) {
      alert('Pojištění bylo úspěšně sjednáno!');
      navigate('/');
    } else {
      alert('Musíte souhlasit s povinnými podmínkami.');
    }
  };

  const handleBack = () => {
    navigate('/pojisteni/auto/nabidky');
  };

  return (
    <div className="bg-white flex flex-col gap-[24px] items-center p-[24px] w-full min-h-screen">
      <div className="bg-clip-text flex flex-col font-mona font-extrabold justify-center leading-[0] not-italic relative text-[48px] text-center tracking-[-1px] w-full" style={{ backgroundImage: "linear-gradient(231.904deg, rgb(167, 82, 169) 26.752%, rgb(63, 37, 120) 100%)", WebkitTextFillColor: "transparent" }}>
        <p className="leading-none whitespace-pre-wrap">Shrnutí objednávky</p>
      </div>

      <div className="flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[16px] text-[#3f2578] text-center w-full">
        <p className="leading-[1.6]">Zkontrolujte si údaje před dokončením</p>
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
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.667 5L7.5 14.167L3.333 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[#3f2578] font-mona font-bold text-[14px]">Krytí</span>
          </div>
          <div className="bg-[#3f2578] h-[2px] w-[80px]" />
          <div className="flex flex-col items-center gap-[8px]">
            <div className="bg-[#3f2578] flex items-center justify-center rounded-full size-[40px]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.667 5L7.5 14.167L3.333 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[#3f2578] font-mona font-bold text-[14px]">Nabídky</span>
          </div>
          <div className="bg-[#3f2578] h-[2px] w-[80px]" />
          <div className="flex flex-col items-center gap-[8px]">
            <div className="bg-[#3f2578] flex items-center justify-center rounded-full size-[40px]">
              <span className="text-white font-mona font-bold text-[16px]">5</span>
            </div>
            <span className="text-[#3f2578] font-mona font-bold text-[14px]">Shrnutí</span>
          </div>
        </div>

        {/* Vozidlo */}
        <div className="flex items-start relative w-full">
          <div className="bg-white border border-[#edf2f7] border-solid flex flex-[1_0_0] items-start min-h-px min-w-px p-[16px] relative rounded-[12px]">
            <div className="flex flex-[1_0_0] flex-col gap-[12px] min-h-px min-w-px relative">
              <div className="flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[20px] text-[#3f2578]">
                <p className="leading-[1.6]">Vozidlo</p>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-mona font-bold text-[14px] text-[#94a3b8]">SPZ:</span>
                <span className="font-mona font-bold text-[14px] text-[#3f2578]">1A2 3456</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-mona font-bold text-[14px] text-[#94a3b8]">Značka a model:</span>
                <span className="font-mona font-bold text-[14px] text-[#3f2578]">Škoda Octavia</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-mona font-bold text-[14px] text-[#94a3b8]">Rok výroby:</span>
                <span className="font-mona font-bold text-[14px] text-[#3f2578]">2020</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pojištění */}
        <div className="flex items-start relative w-full">
          <div className="bg-white border border-[#edf2f7] border-solid flex flex-[1_0_0] items-start min-h-px min-w-px p-[16px] relative rounded-[12px]">
            <div className="flex flex-[1_0_0] flex-col gap-[12px] min-h-px min-w-px relative">
              <div className="flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[20px] text-[#3f2578]">
                <p className="leading-[1.6]">Pojištění</p>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-mona font-bold text-[14px] text-[#94a3b8]">Pojišťovna:</span>
                <span className="font-mona font-bold text-[14px] text-[#3f2578]">Kooperativa</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-mona font-bold text-[14px] text-[#94a3b8]">Typ:</span>
                <span className="font-mona font-bold text-[14px] text-[#3f2578]">Povinné ručení + Havarijní</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-mona font-bold text-[14px] text-[#94a3b8]">Limit plnění:</span>
                <span className="font-mona font-bold text-[14px] text-[#3f2578]">50 mil. Kč</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-mona font-bold text-[14px] text-[#94a3b8]">Spoluúčast:</span>
                <span className="font-mona font-bold text-[14px] text-[#3f2578]">5 000 Kč</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pojistník */}
        <div className="flex items-start relative w-full">
          <div className="bg-white border border-[#edf2f7] border-solid flex flex-[1_0_0] items-start min-h-px min-w-px p-[16px] relative rounded-[12px]">
            <div className="flex flex-[1_0_0] flex-col gap-[12px] min-h-px min-w-px relative">
              <div className="flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[20px] text-[#3f2578]">
                <p className="leading-[1.6]">Pojistník</p>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-mona font-bold text-[14px] text-[#94a3b8]">Jméno a příjmení:</span>
                <span className="font-mona font-bold text-[14px] text-[#3f2578]">Jan Novák</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-mona font-bold text-[14px] text-[#94a3b8]">E-mail:</span>
                <span className="font-mona font-bold text-[14px] text-[#3f2578]">jan.novak@email.cz</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-mona font-bold text-[14px] text-[#94a3b8]">Telefon:</span>
                <span className="font-mona font-bold text-[14px] text-[#3f2578]">+420 123 456 789</span>
              </div>
            </div>
          </div>
        </div>

        {/* Souhlasy */}
        <div className="flex items-start relative w-full">
          <div className="bg-[#f8fafc] flex flex-[1_0_0] flex-col gap-[12px] min-h-px min-w-px p-[16px] relative rounded-[12px]">
            <div className="flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[20px] text-[#3f2578]">
              <p className="leading-[1.6]">Souhlas a potvrzení</p>
            </div>
            <label className="flex items-start gap-[12px] cursor-pointer">
              <input
                type="checkbox"
                checked={souhlas1}
                onChange={(e) => setSouhlas1(e.target.checked)}
                className="mt-[4px] w-[20px] h-[20px]"
              />
              <span className="font-mona font-bold text-[14px] text-[#3f2578]">
                Souhlasím s obchodními podmínkami a podmínkami pojištění *
              </span>
            </label>
            <label className="flex items-start gap-[12px] cursor-pointer">
              <input
                type="checkbox"
                checked={souhlas2}
                onChange={(e) => setSouhlas2(e.target.checked)}
                className="mt-[4px] w-[20px] h-[20px]"
              />
              <span className="font-mona font-bold text-[14px] text-[#3f2578]">
                Souhlasím se zpracováním osobních údajů podle GDPR *
              </span>
            </label>
            <label className="flex items-start gap-[12px] cursor-pointer">
              <input
                type="checkbox"
                checked={souhlas3}
                onChange={(e) => setSouhlas3(e.target.checked)}
                className="mt-[4px] w-[20px] h-[20px]"
              />
              <span className="font-mona font-bold text-[14px] text-[#3f2578]">
                Souhlasím s zasíláním obchodních sdělení
              </span>
            </label>
          </div>
        </div>

        {/* Cena */}
        <div className="flex items-start relative w-full">
          <div className="bg-white border-2 border-[#3f2578] flex flex-[1_0_0] items-center justify-between min-h-px min-w-px p-[20px] relative rounded-[12px]">
            <div className="flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[24px] text-[#3f2578]">
              <p className="leading-[1.6]">Celková cena</p>
            </div>
            <div className="flex flex-col items-end gap-[4px]">
              <div className="flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[36px] text-[#3f2578]">
                <p className="leading-[1.2]">2 890 Kč</p>
              </div>
              <div className="flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[16px] text-[#94a3b8]">
                <p className="leading-[1.6]">/ měsíc</p>
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
            onClick={handleSubmit}
            className="flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px]"
            style={{ backgroundImage: "linear-gradient(263.127deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%), linear-gradient(90deg, rgb(89, 79, 238) 0%, rgb(89, 79, 238) 100%)" }}
          >
            <div className="flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[16px] text-white whitespace-nowrap">
              <p className="leading-[1.6]">Sjednat a zaplatit</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
