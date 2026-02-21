import { Link } from 'react-router-dom';
import { useState } from 'react';

const imgPhoneIcon = "/assets/phone-icon.svg";
const imgMailIcon = "/assets/mail-icon.svg";
const imgInstagramIcon = "/assets/instagram-icon.svg";
const imgLinkedinIcon = "/assets/linkedin-icon.svg";
const imgFacebookIcon = "/assets/facebook-icon.svg";
const imgEuFlag = "/assets/eu-flag.png";

const CUSTOMER_SERVICE_LINKS = [
  { to: '/obchodni-podminky', label: 'Obchodní podmínky' },
  { to: '/spolupracujici-instituce', label: 'Spolupracující instituce' },
  { to: '/licence', label: 'Licence a certifikace' },
  { to: '/ochrana-udaju', label: 'Ochrana osobních údajů' },
  { to: '/reklamacni-rad', label: 'Reklamační řád' },
  { to: '/zpetna-vazba', label: 'Zpětná vazba' },
  { to: '/whistleblowing', label: 'Whistleblowing' },
];

export function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-white flex flex-col items-start w-full">
      <div className="flex gap-[64px] items-start px-[120px] py-[56px] w-full">
        <div className="flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-0">
          <Link to="/">
            <p className="bg-clip-text font-mona font-bold leading-none text-[36px]" style={{ backgroundImage: "linear-gradient(260.245deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%)", WebkitTextFillColor: "transparent" }}>
              Frenkee
            </p>
          </Link>
          <p className="font-mona leading-[1.7] text-[#64748b] text-[14px]">
            Provozovatel portálu Frenkee je společnost InSureMe.com s.r.o. zapsaná v registru ČNB jako Samostatný zprostředkovatel dle zákona o distribuci pojištění a zajištění a Samostatný zprostředkovatel banky dle zákona o spotřebitelském úvěru
          </p>
        </div>
        <div className="flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-0">
          <p className="font-mona font-bold leading-[1.6] text-[15px] text-black">
            Zákaznický servis
          </p>
          <div className="bg-gradient-to-t from-[#a752a9] h-[2px] rounded-[1px] to-[#3f2578] w-[28px]" />
          {CUSTOMER_SERVICE_LINKS.map((link) => (
            <Link key={link.to} to={link.to}>
              <p className="font-mona leading-[1.9] text-[#3f2578] text-[14px]">
                {link.label}
              </p>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-[14px] items-start w-[200px]">
          <p className="font-mona font-bold leading-[1.6] text-[15px] text-black">
            Buďte v kontaktu
          </p>
          <div className="flex flex-col gap-[16px] items-start p-[20px] rounded-[12px] w-full" style={{ backgroundImage: "linear-gradient(-73.762deg, rgb(167, 82, 169) 1.3604%, rgb(63, 37, 120) 99.929%)" }}>
            <div className="flex gap-[10px] items-center">
              <img alt="" className="size-[18px]" src={imgPhoneIcon} />
              <p className="font-mona font-bold leading-[1.6] text-[14px] text-white">
                +420 226 633 522
              </p>
            </div>
            <div className="flex gap-[10px] items-center">
              <img alt="" className="size-[18px]" src={imgPhoneIcon} />
              <p className="font-mona font-bold leading-[1.6] text-[14px] text-white">
                +420 790 421 030
              </p>
            </div>
            <p className="font-mona leading-[1.5] text-[#d4c8ed] text-[12px]">
              Po – Pá (09:00 – 17:00)
            </p>
            <div className="flex gap-[10px] items-center">
              <img alt="" className="size-[18px]" src={imgMailIcon} />
              <p className="font-mona font-bold leading-[1.6] text-[14px] text-white">
                info@frenkee.cz
              </p>
            </div>
            <div className="flex gap-[12px] items-start pt-[4px]">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img alt="Instagram" className="size-[20px]" src={imgInstagramIcon} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img alt="LinkedIn" className="size-[20px]" src={imgLinkedinIcon} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img alt="Facebook" className="size-[20px]" src={imgFacebookIcon} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center px-[120px] w-full">
        <div className="flex items-center justify-between px-[48px] py-[36px] rounded-[16px] w-full" style={{ backgroundImage: "linear-gradient(-84.8207deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 99.198%)" }}>
          <div className="flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-0">
            <p className="font-mona font-bold leading-[1.3] text-[22px] text-white">
              Nenechte si ujít novinky a tipy
            </p>
            <p className="font-mona leading-[1.6] text-[#d4c8ed] text-[14px]">
              Přihlaste se k odběru a dostávejte praktické rady o pojištění přímo do schránky.
            </p>
          </div>
          <div className="flex gap-[12px] items-center">
            <input
              type="email"
              placeholder="váš@email.cz"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border-[1.5px] border-solid border-white h-[48px] px-[16px] rounded-[10px] w-[260px] font-mona leading-[1.6] text-[#d4c8ed] text-[14px] placeholder:text-[#d4c8ed]"
            />
            <button className="bg-white h-[48px] px-[28px] rounded-[10px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.08)] font-mona font-bold leading-[1.6] text-[#3f2578] text-[14px]">
              Odebírat
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-start px-[120px] w-full">
        <div className="bg-[#e2e9f0] flex-[1_0_0] h-px" />
      </div>
      <div className="flex gap-[16px] items-center px-[120px] py-[20px] w-full">
        <div className="flex items-center max-w-[207px] px-[9.33px] w-[207px]">
          <img alt="EU Flag" className="h-[25.073px] w-[157.437px]" src={imgEuFlag} />
        </div>
        <p className="font-mona leading-[1.5] text-[#64748b] text-[13px]">
          Na tento projekt byla poskytnuta finanční podpora od Evropské Unie.
        </p>
      </div>
      <div className="border-[#e2e9f0] border-solid border-t flex items-center justify-center pb-[24px] pt-[16px] px-[120px] w-full">
        <p className="font-mona leading-[1.9] text-[#64748b] text-[14px] text-center">
          © 2026 Frenkee.cz All rights reserved
        </p>
      </div>
    </footer>
  );
}
