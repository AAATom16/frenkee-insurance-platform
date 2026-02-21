import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function AutoStep4() {
  const navigate = useNavigate();
  const [selectedOffer, setSelectedOffer] = useState<number | null>(null);

  const offers = [
    { id: 1, company: 'Kooperativa', price: 2890, rating: 4.5, features: ['Asistence 24/7', 'Náhradní vozidlo', 'Limit 50 mil. Kč'] },
    { id: 2, company: 'Česká pojišťovna', price: 3120, rating: 4.7, features: ['Asistence 24/7', 'Náhradní vozidlo', 'Limit 50 mil. Kč'] },
    { id: 3, company: 'Allianz', price: 2750, rating: 4.3, features: ['Asistence 24/7', 'Limit 50 mil. Kč'] },
  ];

  const handleContinue = () => {
    if (selectedOffer !== null) {
      navigate('/pojisteni/auto/shrnuti');
    }
  };

  const handleBack = () => {
    navigate('/pojisteni/auto/krok-3');
  };

  return (
    <div className="bg-white flex flex-col gap-[24px] items-center p-[24px] w-full min-h-screen">
      <div className="bg-clip-text flex flex-col font-['Mona_Sans_VF:Display_ExtraBold',sans-serif] justify-center leading-[0] not-italic relative text-[48px] text-center tracking-[-1px] w-full" style={{ backgroundImage: "linear-gradient(231.904deg, rgb(167, 82, 169) 26.752%, rgb(63, 37, 120) 100%)", WebkitTextFillColor: "transparent" }}>
        <p className="leading-none whitespace-pre-wrap">Dostupné nabídky</p>
      </div>

      <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[16px] text-[#3f2578] text-center w-full">
        <p className="leading-[1.6]">Vyberte si nejlepší pojištění pro vaše vozidlo</p>
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
            <span className="text-[#3f2578] font-['Mona_Sans_VF:Bold',sans-serif] text-[14px]">Vozidlo</span>
          </div>
          <div className="bg-[#3f2578] h-[2px] w-[80px]" />
          <div className="flex flex-col items-center gap-[8px]">
            <div className="bg-[#3f2578] flex items-center justify-center rounded-full size-[40px]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.667 5L7.5 14.167L3.333 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[#3f2578] font-['Mona_Sans_VF:Bold',sans-serif] text-[14px]">Osobní údaje</span>
          </div>
          <div className="bg-[#3f2578] h-[2px] w-[80px]" />
          <div className="flex flex-col items-center gap-[8px]">
            <div className="bg-[#3f2578] flex items-center justify-center rounded-full size-[40px]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.667 5L7.5 14.167L3.333 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[#3f2578] font-['Mona_Sans_VF:Bold',sans-serif] text-[14px]">Krytí</span>
          </div>
          <div className="bg-[#3f2578] h-[2px] w-[80px]" />
          <div className="flex flex-col items-center gap-[8px]">
            <div className="bg-[#3f2578] flex items-center justify-center rounded-full size-[40px]">
              <span className="text-white font-['Mona_Sans_VF:Bold',sans-serif] text-[16px]">4</span>
            </div>
            <span className="text-[#3f2578] font-['Mona_Sans_VF:Bold',sans-serif] text-[14px]">Nabídky</span>
          </div>
          <div className="bg-[#e2e9f0] h-[2px] w-[80px]" />
          <div className="flex flex-col items-center gap-[8px]">
            <div className="bg-[#e2e9f0] flex items-center justify-center rounded-full size-[40px]">
              <span className="text-[#94a3b8] font-['Mona_Sans_VF:Bold',sans-serif] text-[16px]">5</span>
            </div>
            <span className="text-[#94a3b8] font-['Mona_Sans_VF:Bold',sans-serif] text-[14px]">Shrnutí</span>
          </div>
        </div>

        {/* Offers */}
        {offers.map((offer) => (
          <div
            key={offer.id}
            onClick={() => setSelectedOffer(offer.id)}
            className={`flex items-start relative w-full cursor-pointer transition-all ${
              selectedOffer === offer.id
                ? 'border-2 border-[#3f2578]'
                : 'border border-[#edf2f7]'
            } bg-white p-[16px] rounded-[12px]`}
          >
            <div className="flex flex-[1_0_0] flex-col gap-[12px] min-h-px min-w-px relative">
              <div className="flex items-center justify-between relative w-full">
                <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[24px] text-[#3f2578]">
                  <p className="leading-[1.6]">{offer.company}</p>
                </div>
                <div className="flex flex-col items-end gap-[4px]">
                  <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[32px] text-[#3f2578]">
                    <p className="leading-[1.2]">{offer.price} Kč</p>
                  </div>
                  <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[14px] text-[#94a3b8]">
                    <p className="leading-[1.6]">/ měsíc</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[4px]">
                <span className="text-[#fbbf24] text-[18px]">★</span>
                <span className="font-['Mona_Sans_VF:Bold',sans-serif] text-[14px] text-[#3f2578]">{offer.rating}</span>
              </div>
              <div className="flex flex-col gap-[8px]">
                {offer.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-[8px]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.667 5L7.5 14.167L3.333 10" stroke="#3f2578" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="font-['Mona_Sans_VF:Bold',sans-serif] text-[14px] text-[#3f2578]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Buttons */}
        <div className="flex gap-[12px] items-center justify-center relative w-full">
          <button
            onClick={handleBack}
            className="flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] border-2 border-[#3f2578]"
          >
            <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[16px] text-[#3f2578] whitespace-nowrap">
              <p className="leading-[1.6]">Zpět</p>
            </div>
          </button>
          <button
            onClick={handleContinue}
            disabled={selectedOffer === null}
            className={`flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] ${
              selectedOffer === null ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            style={{ backgroundImage: "linear-gradient(263.127deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%), linear-gradient(90deg, rgb(89, 79, 238) 0%, rgb(89, 79, 238) 100%)" }}
          >
            <div className="flex flex-col font-['Mona_Sans_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[16px] text-white whitespace-nowrap">
              <p className="leading-[1.6]">Pokračovat</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
