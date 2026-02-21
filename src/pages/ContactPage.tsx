const imgLucidePhone = "/assets/icon-phone-alt.svg";
const imgLucideMail = "/assets/icon-mail-alt.svg";
const imgLucideMapPin = "/assets/icon-map-pin.svg";

export function ContactPage() {
  return (
    <div className="bg-white flex flex-col gap-[24px] items-center p-[24px] w-full">
      <div className="flex flex-col gap-[8px] items-start text-center w-[600px] max-w-full">
        <div className="bg-clip-text flex flex-col font-['Mona_Sans',sans-serif] font-extrabold justify-center w-full text-[48px] tracking-[-1px]" style={{ backgroundImage: "linear-gradient(251.328deg, rgb(167, 82, 169) 26.752%, rgb(63, 37, 120) 100%)", WebkitTextFillColor: "transparent" }}>
          <p className="leading-none">Kontaktujte nás</p>
        </div>
        <div className="flex flex-col font-['Mona_Sans',sans-serif] justify-center w-full text-[#3f2578] text-[18px]">
          <p className="leading-[1.6]">Máte dotaz? Rádi vám pomůžeme. Vyberte si způsob, který vám vyhovuje.</p>
        </div>
      </div>
      
      <div className="flex gap-[32px] items-start py-[8px] w-[1080px] max-w-full">
        <div className="flex flex-col gap-[16px] items-start w-[340px]">
          <div className="bg-[#f8fafc] border border-[#e2e9f0] flex flex-col gap-[16px] items-start p-[32px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)] w-full">
            <div className="bg-[#f0ebf8] flex items-center justify-center rounded-[12px] size-[48px]">
              <div className="size-[24px]">
                <img alt="Phone" className="w-full h-full" src={imgLucidePhone} />
              </div>
            </div>
            <p className="font-['Mona_Sans',sans-serif] font-bold leading-[1.4] text-[#3f2578] text-[18px] text-center">
              Telefon
            </p>
            <p className="font-['Mona_Sans',sans-serif] leading-[1.6] text-[#6b5e8a] text-[14px] text-center">
              +420 800 123 456
            </p>
            <p className="font-['Mona_Sans',sans-serif] leading-[1.5] text-[#8b7aad] text-[13px] text-center">
              Po–Pá: 8:00 – 18:00
            </p>
          </div>
          
          <div className="bg-[#f8fafc] border border-[#e2e9f0] flex flex-col gap-[16px] items-start p-[32px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)] w-full">
            <div className="bg-[#f0ebf8] flex items-center justify-center rounded-[12px] size-[48px]">
              <div className="size-[24px]">
                <img alt="Mail" className="w-full h-full" src={imgLucideMail} />
              </div>
            </div>
            <p className="font-['Mona_Sans',sans-serif] font-bold leading-[1.4] text-[#3f2578] text-[18px] text-center">
              E-mail
            </p>
            <p className="font-['Mona_Sans',sans-serif] leading-[1.6] text-[#6b5e8a] text-[14px] text-center">
              podpora@frenkee.cz
            </p>
            <p className="font-['Mona_Sans',sans-serif] leading-[1.5] text-[#8b7aad] text-[13px] text-center">
              Odpovíme do 24 hodin
            </p>
          </div>
          
          <div className="bg-[#f8fafc] border border-[#e2e9f0] flex flex-col gap-[16px] items-start p-[32px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)] w-full">
            <div className="bg-[#f0ebf8] flex items-center justify-center rounded-[12px] size-[48px]">
              <div className="size-[24px]">
                <img alt="Map Pin" className="w-full h-full" src={imgLucideMapPin} />
              </div>
            </div>
            <p className="font-['Mona_Sans',sans-serif] font-bold leading-[1.4] text-[#3f2578] text-[18px] text-center">
              Adresa
            </p>
            <p className="font-['Mona_Sans',sans-serif] leading-[1.6] text-[#6b5e8a] text-[14px] text-center">
              Českomoravská 2510/19, Praha 9
            </p>
            <p className="font-['Mona_Sans',sans-serif] leading-[1.5] text-[#8b7aad] text-[13px] text-center">
              Po–Pá: 9:00 – 17:00
            </p>
          </div>
        </div>
        
        <div className="flex flex-[1_0_0] flex-col items-center min-h-px min-w-px">
          <div className="bg-[#f8fafc] border border-[#e2e9f0] flex flex-col gap-[20px] items-start p-[32px] rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)] w-full">
            <div className="flex gap-[16px] items-start w-full">
              <div className="flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px">
                <p className="font-['Mona_Sans',sans-serif] font-medium leading-[1.4] text-[#6b5e8a] text-[12px]">
                  Jméno
                </p>
                <div className="bg-white border border-[#e2e9f0] flex h-[44px] items-center px-[12px] rounded-[8px] w-full">
                  <input type="text" placeholder="Jan" className="font-['Mona_Sans',sans-serif] leading-[1.6] text-[#3f2578] text-[14px] w-full bg-transparent border-none outline-none" />
                </div>
              </div>
              <div className="flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px">
                <p className="font-['Mona_Sans',sans-serif] font-medium leading-[1.4] text-[#6b5e8a] text-[12px]">
                  Příjmení
                </p>
                <div className="bg-white border border-[#e2e9f0] flex h-[44px] items-center px-[12px] rounded-[8px] w-full">
                  <input type="text" placeholder="Novák" className="font-['Mona_Sans',sans-serif] leading-[1.6] text-[#3f2578] text-[14px] w-full bg-transparent border-none outline-none" />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-[6px] items-start w-full">
              <p className="font-['Mona_Sans',sans-serif] font-medium leading-[1.4] text-[#6b5e8a] text-[12px]">
                E-mail
              </p>
              <div className="bg-white border border-[#e2e9f0] flex h-[44px] items-center px-[12px] rounded-[8px] w-full">
                <input type="email" placeholder="jan.novak@email.cz" className="font-['Mona_Sans',sans-serif] leading-[1.6] text-[#3f2578] text-[14px] w-full bg-transparent border-none outline-none" />
              </div>
            </div>
            
            <div className="flex flex-col gap-[6px] items-start w-full">
              <p className="font-['Mona_Sans',sans-serif] font-medium leading-[1.4] text-[#6b5e8a] text-[12px]">
                Předmět
              </p>
              <div className="bg-white border border-[#e2e9f0] flex h-[44px] items-center px-[12px] rounded-[8px] w-full">
                <input type="text" placeholder="Dotaz k pojištění majetku" className="font-['Mona_Sans',sans-serif] leading-[1.6] text-[#3f2578] text-[14px] w-full bg-transparent border-none outline-none" />
              </div>
            </div>
            
            <div className="flex flex-col gap-[6px] items-start w-full">
              <p className="font-['Mona_Sans',sans-serif] font-medium leading-[1.4] text-[#6b5e8a] text-[12px]">
                Zpráva
              </p>
              <div className="bg-white border border-[#e2e9f0] flex flex-col h-[120px] items-start p-[12px] rounded-[8px] w-full">
                <textarea placeholder="Dobrý den, chtěl bych se zeptat na možnosti pojištění bytu v Praze. Děkuji za informace." className="font-['Mona_Sans',sans-serif] leading-[1.6] text-[#3f2578] text-[14px] w-full h-full bg-transparent border-none outline-none resize-none" />
              </div>
            </div>
            
            <button className="flex h-[48px] items-center justify-center px-[32px] py-[12px] rounded-[8px] w-full" style={{ backgroundImage: "linear-gradient(238.963deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%)" }}>
              <p className="font-['Mona_Sans',sans-serif] font-medium leading-[1.6] text-[16px] text-white">
                Odeslat zprávu
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
