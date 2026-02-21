import { Link } from 'react-router-dom';

const imgTravelPerson = "/assets/travel-person-new.png";
const imgBusinessPerson = "/assets/business-person-new.png";
const imgHouseImage = "/assets/house-image-new.png";
const imgLifeInsurance = "/assets/life-insurance-new.png";
const imgPetInsurance = "/assets/pet-insurance-new.png";
const imgForeignerInsurance = "/assets/foreigner-insurance-new.png";
const imgCarIcon1 = "/assets/car-icon-1.svg";
const imgCarIcon2 = "/assets/car-icon-2.svg";
const imgHeroGradient = "/assets/hero-gradient.png";
const imgEllipseBg = "/assets/ellipse-bg.svg";
const imgHeroPerson = "/assets/hero-person.png";

export function LandingPage() {
  return (
    <div className="bg-white flex flex-col gap-[24px] items-center w-full">
      {/* Hero Section */}
      <div className="bg-white flex flex-col gap-[48px] items-center pb-[80px] pt-[120px] px-[24px] relative w-full">
        <div className="absolute left-[598px] opacity-50 size-[1000px] top-[-230px] pointer-events-none">
          <img alt="" className="absolute inset-0 max-w-none object-contain size-full" src={imgHeroGradient} />
        </div>
        <div className="absolute h-[721px] left-[3px] top-[697px] w-[685px] pointer-events-none">
          <img alt="" className="block max-w-none size-full" src={imgEllipseBg} />
        </div>
        
        <div className="flex gap-[48px] items-start max-w-[1200px] relative w-full z-10">
          {/* Left: Heading */}
          <div className="flex flex-col gap-[0px] items-center w-[391px] py-[40px]">
            <div className="flex flex-col gap-[8px] items-start leading-[0] text-center w-full">
              <div className="bg-clip-text flex flex-col font-['Mona_Sans_VF:Display_ExtraBold',sans-serif] justify-center text-[72px] tracking-[-1px] w-full" style={{ backgroundImage: "linear-gradient(265.802deg, rgb(167, 82, 169) 26.752%, rgb(63, 37, 120) 100%)", WebkitTextFillColor: "transparent" }}>
                <p className="leading-none whitespace-pre-wrap">Finance jednoduše</p>
              </div>
              <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center text-[#3f2578] text-[20px] w-full">
                <p className="leading-[1.6] whitespace-pre-wrap">Bez chytáků a otravných schůzek</p>
              </div>
            </div>
          </div>

          {/* Right: Bento Grid */}
          <div className="flex flex-col gap-[24px] items-end flex-1 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)]">
            {/* Top Row */}
            <div className="flex flex-wrap gap-[24px] h-[300px] items-start justify-center w-full">
              {/* Auto Insurance - Large */}
              <div className="bg-[#f8fafc] flex flex-col gap-[24px] h-[300px] items-start p-[24px] rounded-[8px] flex-1 min-w-[300px]">
                <div className="flex flex-col gap-[8px] items-start justify-center w-full">
                  <div className="bg-clip-text flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] text-[36px]" style={{ backgroundImage: "linear-gradient(258.806deg, rgb(167, 82, 169) 47.239%, rgb(63, 37, 120) 98.853%)", WebkitTextFillColor: "transparent" }}>
                    <p className="leading-[1.1] whitespace-pre-wrap">Pojištění aut</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[1.5] text-[#3f2578] text-[16px] whitespace-pre-wrap">
                    <p className="mb-0">Jednoduché online sjednání.</p>
                    <p>Ušetřete čas a peníze!</p>
                  </div>
                </div>
                <div className="flex flex-col gap-[8px] items-start">
                  <div className="bg-white border border-[#ced4da] flex flex-col gap-[10px] h-[48px] items-start overflow-clip rounded-[10px] w-[343px] relative">
                    <div className="flex flex-1 items-center min-h-px min-w-px overflow-clip w-full">
                      <div className="bg-[#039] flex flex-col h-full items-start justify-between px-[7px] py-[9px] w-[28px]">
                        <img alt="" className="h-[8.806px] w-[13.617px]" src={imgCarIcon1} />
                        <img alt="" className="h-[13.809px] w-[14.403px]" src={imgCarIcon2} />
                      </div>
                    </div>
                    <div className="absolute flex flex-col items-center justify-center left-1/2 -translate-x-1/2 opacity-50 top-[15px]">
                      <p className="font-['Open_Sans:Regular',sans-serif] leading-normal text-[#635c73] text-[15px]">Zadejte SPZ</p>
                    </div>
                  </div>
                  <Link to="/pojisteni/auto" className="flex gap-[8px] h-[48px] items-center justify-center px-[20px] py-[12px] rounded-[12px] w-[344px]" style={{ backgroundImage: "linear-gradient(252.181deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%)" }}>
                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] text-[16px] text-white whitespace-nowrap">Chci povinné ručení + havarijní pojištění</p>
                  </Link>
                </div>
              </div>

              {/* Travel Insurance */}
              <div className="bg-[#f8fafc] flex flex-col gap-[8px] h-[300px] items-start justify-end p-[24px] rounded-[8px] w-[282px]">
                <div className="flex items-center justify-center -scale-y-100 rotate-180">
                  <div className="h-[241.75px] w-[256px] relative">
                    <img alt="" className="absolute h-[158.84%] left-0 max-w-none top-[-15.31%] w-full" src={imgTravelPerson} />
                  </div>
                </div>
                <div className="flex flex-col gap-[8px] items-start leading-[0] w-full">
                  <div className="bg-clip-text flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center text-[36px] w-full" style={{ backgroundImage: "linear-gradient(266.07deg, rgb(167, 82, 169) 47.239%, rgb(63, 37, 120) 98.853%)", WebkitTextFillColor: "transparent" }}>
                    <p className="leading-[1.1] whitespace-pre-wrap">Cestovní pojištění</p>
                  </div>
                  <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] text-[#3f2578] text-[16px]">Se slevou až 50%!</p>
                </div>
                <Link to="/pojisteni/cestovani" className="flex gap-[8px] items-center justify-center py-[2px] rounded-[6px] text-[#ef8600] text-center">
                  <p className="font-['Mona_Sans_VF:SemiBold',sans-serif] leading-[1.5] text-[16px]">Spočítat</p>
                  <p className="text-[18px]">→</p>
                </Link>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex gap-[24px] items-start justify-center w-full">
              {/* Left Column */}
              <div className="flex flex-col gap-[24px] items-center w-[282px]">
                {/* Business Insurance */}
                <div className="bg-[#f8fafc] flex flex-col gap-[8px] h-[300px] items-start justify-end p-[24px] rounded-[8px] w-full">
                  <div className="h-[116px] w-[246.764px] relative">
                    <img alt="" className="absolute h-[164.68%] left-[-7.86%] max-w-none top-[-37.74%] w-[116.12%]" src={imgBusinessPerson} />
                  </div>
                  <div className="bg-clip-text flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] text-[36px] w-full" style={{ backgroundImage: "linear-gradient(266.07deg, rgb(167, 82, 169) 47.239%, rgb(63, 37, 120) 98.853%)", WebkitTextFillColor: "transparent" }}>
                    <p className="leading-[1.1] whitespace-pre-wrap">Pojištění pro firmy a OSVČ</p>
                  </div>
                  <Link to="/pro-firmy" className="flex gap-[8px] items-center justify-center py-[2px] rounded-[6px] text-[#ef8600] text-center">
                    <p className="font-['Mona_Sans_VF:SemiBold',sans-serif] leading-[1.5] text-[16px]">Spočítat</p>
                    <p className="text-[18px]">→</p>
                  </Link>
                </div>

                {/* Property Insurance */}
                <div className="bg-[#f8fafc] flex flex-col gap-[8px] h-[300px] items-start justify-end p-[24px] rounded-[8px] w-full">
                  <div className="h-[171.8px] w-[204.8px] relative">
                    <img alt="" className="absolute h-[178.81%] left-0 max-w-none top-[-30.38%] w-full" src={imgHouseImage} />
                  </div>
                  <div className="flex flex-col gap-[8px] items-start leading-[0] w-full">
                    <div className="bg-clip-text flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center text-[36px] w-full" style={{ backgroundImage: "linear-gradient(266.07deg, rgb(167, 82, 169) 47.239%, rgb(63, 37, 120) 98.853%)", WebkitTextFillColor: "transparent" }}>
                      <p className="leading-[1.1] whitespace-pre-wrap">Pojištění majetku</p>
                    </div>
                    <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] text-[#3f2578] text-[16px]">Stačí pár kliknutí a můžete v klidu spát!</p>
                    <Link to="/pojisteni/majetek" className="flex gap-[8px] items-center justify-center py-[2px] rounded-[6px] text-[#ef8600] text-center">
                      <p className="font-['Mona_Sans_VF:SemiBold',sans-serif] leading-[1.5] text-[16px]">Spočítat</p>
                      <p className="text-[18px]">→</p>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-[24px] items-center flex-1">
                {/* Life Insurance */}
                <div className="bg-[#f8fafc] flex gap-[8px] h-[300px] items-end p-[24px] rounded-[8px] w-full">
                  <div className="flex flex-col gap-[8px] items-start flex-1">
                    <div className="bg-clip-text flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] text-[36px]" style={{ backgroundImage: "linear-gradient(266.187deg, rgb(167, 82, 169) 47.239%, rgb(63, 37, 120) 98.853%)", WebkitTextFillColor: "transparent" }}>
                      <p className="leading-[1.1] whitespace-pre-wrap">Životní pojištění</p>
                    </div>
                    <p className="font-['Inter:Bold',sans-serif] font-bold leading-[0] text-[#3f2578] text-[16px]">Životko, které dává smysl</p>
                    <Link to="/pojisteni/zivot" className="flex gap-[8px] h-[48px] items-center justify-center px-[20px] py-[12px] rounded-[12px]" style={{ backgroundImage: "linear-gradient(264.45deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%)" }}>
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] text-[16px] text-white">Spočítat</p>
                    </Link>
                  </div>
                  <div className="h-[282px] w-[172px] relative">
                    <img alt="" className="absolute h-[111.35%] left-[-21.61%] max-w-none top-0 w-[121.71%]" src={imgLifeInsurance} />
                  </div>
                </div>

                {/* Bottom Row: Pet & Foreigner */}
                <div className="flex flex-wrap gap-[24px] items-start justify-center w-full">
                  {/* Pet Insurance */}
                  <div className="bg-[#f8fafc] flex flex-col gap-[8px] h-[300px] items-start justify-center p-[24px] rounded-[8px] flex-1 min-w-[200px]">
                    <div className="bg-clip-text flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] text-[36px] w-full" style={{ backgroundImage: "linear-gradient(267.185deg, rgb(167, 82, 169) 47.239%, rgb(63, 37, 120) 98.853%)", WebkitTextFillColor: "transparent" }}>
                      <p className="leading-[1.1] whitespace-pre-wrap">Pojištění mazlíčků</p>
                    </div>
                    <div className="h-[143px] w-[175.789px] relative">
                      <img alt="" className="absolute h-[184.39%] left-0 max-w-none top-[-39.38%] w-full" src={imgPetInsurance} />
                    </div>
                    <Link to="/pojisteni/mazlicci" className="flex gap-[8px] items-center justify-center py-[2px] rounded-[6px] text-[#ef8600] text-center">
                      <p className="font-['Mona_Sans_VF:SemiBold',sans-serif] leading-[1.5] text-[16px]">Spočítat</p>
                      <p className="text-[18px]">→</p>
                    </Link>
                  </div>

                  {/* Foreigner Insurance */}
                  <div className="bg-[#f8fafc] flex flex-col h-[300px] items-start justify-between p-[24px] rounded-[8px] flex-1 min-w-[200px]">
                    <div className="w-full relative" style={{ aspectRatio: "307/202" }}>
                      <img alt="" className="absolute h-[126.73%] left-[-12.38%] max-w-none top-[-11.88%] w-[125.08%]" src={imgForeignerInsurance} />
                    </div>
                    <div className="flex flex-col gap-[4px] items-start w-full">
                      <div className="bg-clip-text flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] text-[30px] w-full" style={{ backgroundImage: "linear-gradient(266.589deg, rgb(167, 82, 169) 47.239%, rgb(63, 37, 120) 98.853%)", WebkitTextFillColor: "transparent" }}>
                        <p className="leading-[1.1] whitespace-pre-wrap">Pojištění pro cizince</p>
                      </div>
                      <Link to="/pojisteni/cizinci" className="flex gap-[8px] items-center justify-center py-[2px] rounded-[6px] text-[#ef8600] text-center">
                        <p className="font-['Mona_Sans_VF:SemiBold',sans-serif] leading-[1.5] text-[16px]">Spočítat</p>
                        <p className="text-[18px]">→</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Person - Absolute positioned */}
          <div className="absolute left-[-110px] top-[344px] pointer-events-none">
            <img alt="" className="h-[583px] w-[388.667px] object-cover" src={imgHeroPerson} />
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="flex gap-[48px] items-start justify-center max-w-[1200px] pb-[200px] pt-[10px] w-[1200px]">
        <div className="flex flex-col gap-[0px] items-start flex-1 pb-[48px]">
          <div className="flex flex-col gap-[8px] items-start leading-[0] w-full">
            <div className="bg-clip-text flex flex-col font-['Mona_Sans_VF:Display_ExtraBold',sans-serif] justify-center text-[48px] tracking-[-1px] w-full" style={{ backgroundImage: "linear-gradient(252.026deg, rgb(167, 82, 169) 26.752%, rgb(63, 37, 120) 100%)", WebkitTextFillColor: "transparent" }}>
              <p className="leading-none whitespace-pre-wrap">Proč si vybrat nás?</p>
            </div>
            <div className="flex flex-col font-['Mona_Sans_VF:Regular',sans-serif] justify-center text-[#3f2578] text-[18px] w-full">
              <p className="whitespace-pre-wrap">
                <span className="leading-[1.5]">Frenkee není jen další nudný porovnávač, kam se musí zadat telefon a e-mail, abyste vůbec viděli nabídku. Nejde nám o to, dostat vás do nekonečného kolotoče otravných telefonátů. Děláme to jinak. </span>
                <span className="font-['Mona_Sans_VF:Black',sans-serif] leading-[1.5] text-[#ef8600]">Dáváme rady, tipy a férové nabídky až v okamžiku, kdy sami uznáte za vhodné.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[40px] items-start w-[576px]">
          {/* Feature 1 */}
          <div className="flex gap-[12px] items-center w-full">
            <div className="flex gap-[0px] items-center p-[16px] rounded-[600px]">
              <img alt="" className="size-[36px]" src="/assets/icon-call-slash.svg" />
            </div>
            <div className="flex flex-col gap-[2px] items-start justify-center leading-[0] flex-1 text-[#3f2578]">
              <div className="bg-clip-text flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center text-[18px] w-full" style={{ backgroundImage: "linear-gradient(245.185deg, rgb(167, 82, 169) 26.752%, rgb(63, 37, 120) 100%)", WebkitTextFillColor: "transparent" }}>
                <p className="leading-[1.6] whitespace-pre-wrap">Bez otravných telefonátů a nabídek</p>
              </div>
              <p className="font-['Inter:Regular',sans-serif] leading-[1.9] text-[16px] w-full">Nikdy vám nebudeme volat a otravovat Vás s nabídkami, které jste nechtěli.</p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="flex gap-[12px] items-center w-full">
            <div className="flex gap-[0px] items-center p-[16px] rounded-[600px]">
              <img alt="" className="size-[36px]" src="/assets/icon-global-edit.svg" />
            </div>
            <div className="flex flex-col gap-[2px] items-start justify-center leading-[0] flex-1 text-[#3f2578]">
              <div className="bg-clip-text flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center text-[18px] w-full" style={{ backgroundImage: "linear-gradient(245.185deg, rgb(167, 82, 169) 26.752%, rgb(63, 37, 120) 100%)", WebkitTextFillColor: "transparent" }}>
                <p className="leading-[1.6] whitespace-pre-wrap">100% Online a bez "papírování"</p>
              </div>
              <p className="font-['Inter:Regular',sans-serif] leading-[1.9] text-[16px] w-full">Frenkee funguje online, téměř vše si vyřešiíte z pohodlí svého gauč</p>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="flex gap-[12px] items-center w-full">
            <div className="flex gap-[0px] items-center p-[16px] rounded-[600px]">
              <img alt="" className="size-[36px]" src="/assets/icon-lamp-on.svg" />
            </div>
            <div className="flex flex-col gap-[2px] items-start justify-center leading-[0] flex-1 text-[#3f2578]">
              <div className="bg-clip-text flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center text-[18px] w-full" style={{ backgroundImage: "linear-gradient(245.185deg, rgb(167, 82, 169) 26.752%, rgb(63, 37, 120) 100%)", WebkitTextFillColor: "transparent" }}>
                <p className="leading-[1.6] whitespace-pre-wrap">Tým expertů 20 roky zkušeností a AI Asistentem</p>
              </div>
              <p className="font-['Inter:Regular',sans-serif] leading-[1.9] text-[16px] w-full">Když si nebudete vědět rady, můžete se obrátit na Frenka, AI asistenta, který vám se vším pomůže nebo se spojit s jedním z našich specialstů.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="flex flex-col gap-[48px] items-center max-w-[1200px] w-full">
        <div className="flex flex-col gap-[8px] items-start leading-[0] text-center w-[600px]">
          <div className="bg-clip-text flex flex-col font-['Mona_Sans_VF:Display_ExtraBold',sans-serif] justify-center text-[48px] tracking-[-1px] w-full" style={{ backgroundImage: "linear-gradient(251.328deg, rgb(167, 82, 169) 26.752%, rgb(63, 37, 120) 100%)", WebkitTextFillColor: "transparent" }}>
            <p className="leading-none whitespace-pre-wrap">Co říkají naši klienti</p>
          </div>
          <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.6] text-[#3f2578] text-[18px] w-full">Přečtěte si reálné recenze z Googlu</p>
        </div>
        <div className="flex gap-[24px] items-start justify-center w-full">
          {/* Testimonial 1 */}
          <div className="bg-[rgba(246,238,247,0.5)] border border-[#d8b0d8] flex flex-col items-start justify-between p-[24px] rounded-[16px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-[389px]">
            <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.9] text-[16px] text-[#1e293b] mb-[24px]">
              Naprostá spokojenost. Velmi rychlý a ochotný přístup. Od minulého roku jsem tu začal sjednávat všechny pojistky a vůbec neuvažuji o tom, že bych měl přejít někam jinam.
            </p>
            <div className="flex gap-[24px] items-center w-full">
              <img alt="" className="rounded-full size-[48px]" src="/assets/avatar.png" />
              <div className="flex flex-col gap-[2px] items-start leading-[0] flex-1">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] text-[18px] text-[#020617]">Vojtěch Horálek</p>
                <p className="font-['Inter:Regular',sans-serif] leading-[1.9] text-[16px] text-[#64748b]">Před 9 měsíci</p>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-[rgba(246,238,247,0.5)] border border-[#d8b0d8] flex flex-col items-start justify-between p-[24px] rounded-[16px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-[389px]">
            <p className="font-['Inter:Regular',sans-serif] leading-[1.9] text-[16px] text-[#1e293b] mb-[24px]">
              Bezkonkurenční spokojenost všemi směry. Doporučuji! Až budu zase něco potřebovat, vím na koho se mohu obrátit a kdo mi hlavně pomůže. Děkuji :)
            </p>
            <div className="flex gap-[24px] items-center w-full">
              <img alt="" className="rounded-full size-[48px]" src="/assets/avatar.png" />
              <div className="flex flex-col gap-[2px] items-start leading-[0] flex-1">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] text-[18px] text-[#020617]">Gabriela Činovcová</p>
                <p className="font-['Inter:Regular',sans-serif] leading-[1.9] text-[16px] text-[#64748b]">Před 9 měsíci</p>
              </div>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-[rgba(246,238,247,0.5)] border border-[#d8b0d8] flex flex-col items-start justify-between p-[24px] rounded-[16px] shadow-[0px_0.301px_0.51px_0px_rgba(0,0,0,0.06),0px_1.144px_2.72px_0px_rgba(0,0,0,0.02)] w-[389px]">
            <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.9] text-[16px] text-[#1e293b] mb-[24px]">
              Rád bych poděkoval týmu Frenkee za jejich vynikající pomoc a profesionalitu. Byli nejen ochotní, ale i velmi vstřícní a rychle reagovali na všechny mé potřeby. Určitě je doporučuji všem, kteří hledají spolehlivou a kvalitní pomoc. Jsou opravdu nejlepší v tom, co dělají. Děkuji vám
            </p>
            <div className="flex gap-[24px] items-center w-full">
              <img alt="" className="rounded-full size-[48px]" src="/assets/avatar.png" />
              <div className="flex flex-col gap-[2px] items-start leading-[0] flex-1">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] text-[18px] text-[#020617]">Dam ko</p>
                <p className="font-['Inter:Regular',sans-serif] leading-[1.9] text-[16px] text-[#64748b]">Před 9 měsíci</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Media & Blog Sections - Simplified for now */}
      <div className="flex flex-col gap-[48px] items-start max-w-[1200px] py-[120px] w-full">
        <div className="flex flex-col gap-[8px] items-start leading-[0] max-w-[600px] w-full">
          <div className="bg-clip-text flex flex-col font-['Mona_Sans_VF:Display_ExtraBold',sans-serif] justify-center text-[48px] tracking-[-1px] w-full" style={{ backgroundImage: "linear-gradient(251.328deg, rgb(167, 82, 169) 26.752%, rgb(63, 37, 120) 100%)", WebkitTextFillColor: "transparent" }}>
            <p className="leading-none whitespace-pre-wrap">Frenkee v médiích</p>
          </div>
          <p className="font-['Mona_Sans_VF:Regular',sans-serif] leading-[1.5] text-[#3f2578] text-[18px] text-justify w-full">
            Podívejte se, co píšou a říkají o Frenkeem média, a nahlédněte pod pokličku projektu s jeho CEO Jiřím Hluchým. Dozvíte se, jak vám Frenkee pomůže pohodlně a online zařídit pojistky, hypotéku nebo chytře investovat.
          </p>
        </div>
        {/* Media grid and blog section would go here - keeping existing implementation for now */}
      </div>
    </div>
  );
}
