import { useState } from 'react';

const imgHouseIcon = "/assets/house-icon.svg";
const imgShieldCheckIcon = "/assets/shield-check-icon.svg";
const imgShieldIcon = "/assets/shield-icon.svg";
const imgShieldPlusIcon = "/assets/shield-plus-icon.svg";
const imgDropletsIcon = "/assets/droplets-icon.svg";
const imgUserIcon = "/assets/user-icon.svg";
const imgCheckIcon = "/assets/check-simple-icon.svg";

export function MajetekSummary() {
  const [consent1, setConsent1] = useState(false);
  const [consent2, setConsent2] = useState(false);
  const [consent3, setConsent3] = useState(true);
  const [consent4, setConsent4] = useState(false);

  const handleSubmit = () => {
    if (consent1 && consent2) {
      alert('Pojištění bylo sjednáno!');
    } else {
      alert('Musíte souhlasit s podmínkami.');
    }
  };

  return (
    <div className="bg-white flex flex-col gap-[24px] items-center p-[24px] w-full min-h-screen">
      <div className="bg-clip-text flex flex-col font-mona font-extrabold justify-center leading-[0] not-italic relative text-[48px] text-center tracking-[-1px] w-full" style={{ backgroundImage: "linear-gradient(231.904deg, rgb(167, 82, 169) 26.752%, rgb(63, 37, 120) 100%)", WebkitTextFillColor: "transparent" }}>
        <p className="leading-none whitespace-pre-wrap">Online pojištění majetku</p>
      </div>

      <div className="flex flex-col items-center justify-center px-[99px] py-[24px] relative">
        <div className="flex flex-col items-center justify-center overflow-clip px-[99px] py-[24px] relative">
          <div className="flex flex-col gap-[24px] items-center overflow-clip px-[40px] py-[48px] relative">
            <div className="flex flex-col gap-[24px] items-start overflow-clip relative w-[600px]">
              <div className="flex flex-col gap-[8px] items-center not-italic overflow-clip relative text-[#3f2578] w-full">
                <p className="font-mona font-bold leading-[1.3] relative text-[28px]">
                  Shrnutí
                </p>
                <p className="font-mona font-medium leading-[1.6] relative text-[14px]">
                  Zkontrolujte údaje o nemovitosti a pojištění před odesláním
                </p>
              </div>

              <div className="bg-[#f8fafc] border border-[#e2e9f0] border-solid flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)] w-full">
                <div className="flex items-center justify-between overflow-clip relative w-full">
                  <div className="flex gap-[10px] items-center overflow-clip relative">
                    <div className="relative size-[20px]">
                      <img alt="House" className="absolute block max-w-none size-full" src={imgHouseIcon} />
                    </div>
                    <p className="font-mona font-bold leading-[1.4] not-italic relative text-[#3f2578] text-[18px]">
                      Nemovitost
                    </p>
                  </div>
                  <p className="font-mona font-medium leading-[1.4] not-italic relative text-[#8b7aad] text-[13px] cursor-pointer">
                    Upravit
                  </p>
                </div>
                <div className="bg-[#e2e9f0] h-px w-full" />
                <div className="flex flex-col gap-[12px] items-start leading-[1.6] not-italic overflow-clip relative text-[14px] w-full">
                  <div className="flex items-start justify-between overflow-clip relative w-full">
                    <p className="font-mona relative text-[#6b5e8a]">
                      Typ nemovitosti
                    </p>
                    <p className="font-mona font-medium relative text-[#3f2578]">
                      Byt v osobním vlastnictví
                    </p>
                  </div>
                  <div className="flex items-start justify-between overflow-clip relative w-full">
                    <p className="font-mona relative text-[#6b5e8a]">
                      Adresa
                    </p>
                    <p className="font-mona font-medium relative text-[#3f2578]">
                      Vinohradská 12, Praha 2
                    </p>
                  </div>
                  <div className="flex items-start justify-between overflow-clip relative w-full">
                    <p className="font-mona relative text-[#6b5e8a]">
                      Podlahová plocha
                    </p>
                    <p className="font-mona font-medium relative text-[#3f2578]">
                      68 m²
                    </p>
                  </div>
                  <div className="flex items-start justify-between overflow-clip relative w-full">
                    <p className="font-mona relative text-[#6b5e8a]">
                      Rok kolaudace
                    </p>
                    <p className="font-mona font-medium relative text-[#3f2578]">
                      2005
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8fafc] border border-[#e2e9f0] border-solid flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)] w-full">
                <div className="flex items-center justify-between overflow-clip relative w-full">
                  <div className="flex gap-[10px] items-center overflow-clip relative">
                    <div className="relative size-[20px]">
                      <img alt="Shield Check" className="absolute block max-w-none size-full" src={imgShieldCheckIcon} />
                    </div>
                    <p className="font-mona font-bold leading-[1.4] not-italic relative text-[#3f2578] text-[18px]">
                      Pojištění
                    </p>
                  </div>
                  <p className="font-mona font-medium leading-[1.4] not-italic relative text-[#8b7aad] text-[13px] cursor-pointer">
                    Upravit
                  </p>
                </div>
                <div className="bg-[#e2e9f0] h-px w-full" />
                <div className="flex flex-col gap-[12px] items-start overflow-clip relative w-full">
                  <div className="flex items-center justify-between overflow-clip relative w-full">
                    <div className="flex gap-[8px] items-center overflow-clip relative">
                      <div className="relative size-[18px]">
                        <img alt="Shield" className="absolute block max-w-none size-full" src={imgShieldIcon} />
                      </div>
                      <p className="font-mona font-medium leading-[1.6] not-italic relative text-[#3f2578] text-[14px]">
                        Pojištění nemovitosti
                      </p>
                    </div>
                    <p className="font-mona font-medium leading-[1.6] not-italic relative text-[#3f2578] text-[14px]">
                      Ano
                    </p>
                  </div>
                  <div className="flex items-center justify-between overflow-clip relative w-full">
                    <div className="flex gap-[8px] items-center overflow-clip relative">
                      <div className="relative size-[18px]">
                        <img alt="Shield Plus" className="absolute block max-w-none size-full" src={imgShieldPlusIcon} />
                      </div>
                      <p className="font-mona leading-[1.6] not-italic relative text-[#6b5e8a] text-[14px]">
                        Pojištění domácnosti
                      </p>
                    </div>
                    <p className="font-mona font-medium leading-[1.6] not-italic relative text-[#3f2578] text-[14px]">
                      Ano
                    </p>
                  </div>
                  <div className="flex items-center justify-between overflow-clip relative w-full">
                    <div className="flex gap-[8px] items-center overflow-clip relative">
                      <div className="relative size-[18px]">
                        <img alt="Droplets" className="absolute block max-w-none size-full" src={imgDropletsIcon} />
                      </div>
                      <p className="font-mona leading-[1.6] not-italic relative text-[#6b5e8a] text-[14px]">
                        Pojištění proti povodni
                      </p>
                    </div>
                    <p className="font-mona font-medium leading-[1.6] not-italic relative text-[#3f2578] text-[14px]">
                      Ano
                    </p>
                  </div>
                  <div className="flex items-start justify-between leading-[1.6] not-italic overflow-clip relative text-[14px] w-full">
                    <p className="font-mona relative text-[#6b5e8a]">
                      Limit plnění
                    </p>
                    <p className="font-mona font-medium relative text-[#3f2578]">
                      5 000 000 Kč
                    </p>
                  </div>
                  <div className="flex items-start justify-between leading-[1.6] not-italic overflow-clip relative text-[14px] w-full">
                    <p className="font-mona relative text-[#6b5e8a]">
                      Počátek pojištění
                    </p>
                    <p className="font-mona font-medium relative text-[#3f2578]">
                      01. 03. 2026
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8fafc] border border-[#e2e9f0] border-solid flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)] w-full">
                <div className="flex items-center justify-between overflow-clip relative w-full">
                  <div className="flex gap-[10px] items-center overflow-clip relative">
                    <div className="relative size-[20px]">
                      <img alt="User" className="absolute block max-w-none size-full" src={imgUserIcon} />
                    </div>
                    <p className="font-mona font-bold leading-[1.4] not-italic relative text-[#3f2578] text-[18px]">
                      Pojistník
                    </p>
                  </div>
                  <p className="font-mona font-medium leading-[1.4] not-italic relative text-[#8b7aad] text-[13px] cursor-pointer">
                    Upravit
                  </p>
                </div>
                <div className="bg-[#e2e9f0] h-px w-full" />
                <div className="flex flex-col gap-[12px] items-start leading-[1.6] not-italic overflow-clip relative text-[14px] w-full">
                  <div className="flex items-start justify-between overflow-clip relative w-full">
                    <p className="font-mona relative text-[#6b5e8a]">
                      Jméno a příjmení
                    </p>
                    <p className="font-mona font-medium relative text-[#3f2578]">
                      Ladislav Švábek
                    </p>
                  </div>
                  <div className="flex items-start justify-between overflow-clip relative w-full">
                    <p className="font-mona relative text-[#6b5e8a]">
                      Rodné číslo
                    </p>
                    <p className="font-mona font-medium relative text-[#3f2578]">
                      000324/1213
                    </p>
                  </div>
                  <div className="flex items-start justify-between overflow-clip relative w-full">
                    <p className="font-mona relative text-[#6b5e8a]">
                      Trvalé bydliště
                    </p>
                    <p className="font-mona font-medium relative text-[#3f2578]">
                      Vinohradská 12, Praha 2
                    </p>
                  </div>
                  <div className="flex items-start justify-between overflow-clip relative w-full">
                    <p className="font-mona relative text-[#6b5e8a]">
                      Vztah k nemovitosti
                    </p>
                    <p className="font-mona font-medium relative text-[#3f2578]">
                      Vlastník
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8fafc] border border-[#e2e9f0] border-solid flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)] w-full">
                <div className="flex gap-[10px] items-center overflow-clip relative w-full">
                  <div className="relative size-[20px]">
                    <img alt="Shield Check" className="absolute block max-w-none size-full" src={imgShieldCheckIcon} />
                  </div>
                  <p className="font-mona font-bold leading-[1.4] not-italic relative text-[#3f2578] text-[18px]">
                    Souhlas a potvrzení
                  </p>
                </div>
                <div className="bg-[#e2e9f0] h-px w-full" />
                <div className="flex gap-[12px] items-start overflow-clip relative w-full">
                  <button
                    onClick={() => setConsent1(!consent1)}
                    className={`border-[1.5px] border-solid rounded-[4px] size-[20px] flex items-center justify-center transition-colors ${
                      consent1 ? 'bg-[#3f2578] border-[#3f2578]' : 'bg-white border-[#e2e9f0]'
                    }`}
                  >
                    {consent1 && (
                      <div className="relative size-[14px]">
                        <img alt="Check" className="absolute block max-w-none size-full" src={imgCheckIcon} />
                      </div>
                    )}
                  </button>
                  <p className="font-mona leading-[1.6] not-italic relative text-[#3f2578] text-[14px]">
                    Odesláním formuláře souhlasíte s obchodními podmínkami a potvrzujete, že sjednávané pojištění odpovídá vašim požadavkům a potřebám.
                  </p>
                </div>
                <div className="flex gap-[12px] items-start overflow-clip relative w-full">
                  <button
                    onClick={() => setConsent2(!consent2)}
                    className={`border-[1.5px] border-solid rounded-[4px] size-[20px] flex items-center justify-center transition-colors ${
                      consent2 ? 'bg-[#3f2578] border-[#3f2578]' : 'bg-white border-[#e2e9f0]'
                    }`}
                  >
                    {consent2 && (
                      <div className="relative size-[14px]">
                        <img alt="Check" className="absolute block max-w-none size-full" src={imgCheckIcon} />
                      </div>
                    )}
                  </button>
                  <p className="font-mona leading-[1.6] not-italic relative text-[#3f2578] text-[14px]">
                    Souhlasím se zpracováním osobních údajů v souladu s GDPR.
                  </p>
                </div>
                <div className="flex gap-[12px] items-center overflow-clip relative w-full">
                  <button
                    onClick={() => setConsent3(!consent3)}
                    className={`border-[1.5px] border-solid rounded-[4px] size-[20px] flex items-center justify-center transition-colors ${
                      consent3 ? 'bg-[#3f2578] border-[#3f2578]' : 'bg-white border-[#e2e9f0]'
                    }`}
                  >
                    {consent3 && (
                      <div className="relative size-[14px]">
                        <img alt="Check" className="absolute block max-w-none size-full" src={imgCheckIcon} />
                      </div>
                    )}
                  </button>
                  <p className="font-mona leading-[1.6] not-italic relative text-[#3f2578] text-[14px]">
                    Chci dostávat informace o novinkách a speciálních nabídkách.
                  </p>
                </div>
                <div className="flex gap-[12px] items-start overflow-clip relative w-full">
                  <button
                    onClick={() => setConsent4(!consent4)}
                    className={`border-[1.5px] border-solid rounded-[4px] size-[20px] flex items-center justify-center transition-colors ${
                      consent4 ? 'bg-[#3f2578] border-[#3f2578]' : 'bg-white border-[#e2e9f0]'
                    }`}
                  >
                    {consent4 && (
                      <div className="relative size-[14px]">
                        <img alt="Check" className="absolute block max-w-none size-full" src={imgCheckIcon} />
                      </div>
                    )}
                  </button>
                  <p className="font-mona leading-[1.6] not-italic relative text-[#3f2578] text-[14px]">
                    Souhlasím s podmínkami pojišťovny a zasíláním elektronické komunikace.
                  </p>
                </div>
              </div>

              <div className="bg-white border-2 border-[#3f2578] border-solid flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[12px] shadow-[0px_2px_8px_0px_rgba(63,37,120,0.08)] w-full">
                <div className="flex font-mona font-bold items-center justify-between not-italic overflow-clip relative text-[#3f2578] w-full">
                  <p className="leading-[1.4] relative text-[18px]">
                    Pojištění majetku
                  </p>
                  <p className="leading-[1.3] relative text-[28px]">
                    389 Kč / měsíc
                  </p>
                </div>
                <div className="bg-[#d4c8ed] h-px w-full" />
                <p className="font-mona leading-[1.5] not-italic relative text-[#6b5e8a] text-[13px]">
                  Cena zahrnuje pojištění nemovitosti, domácnosti a pojištění proti povodni. Platba jednou měsíčně.
                </p>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] shadow-[0px_4px_9.2px_0px_#a752a9,0px_0.301px_0.51px_0px_#a752a9,0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)]"
              style={{ backgroundImage: "linear-gradient(260.661deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%), linear-gradient(90deg, rgb(89, 79, 238) 0%, rgb(89, 79, 238) 100%)" }}
            >
              <div className="flex flex-col font-mona font-bold justify-center leading-[0] not-italic relative text-[16px] text-white whitespace-nowrap">
                <p className="leading-[1.6]">Sjednat a zaplatit</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
