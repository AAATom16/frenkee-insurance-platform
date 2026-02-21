import { Link, useLocation } from 'react-router-dom';

const imgFrenkeeLogo = "/assets/frenkee-logo.svg";
const imgActiveLine = "/assets/active-line.svg";

const NAV_ITEMS = [
  { path: '/pojisteni/auto', label: 'Auto' },
  { path: '/pojisteni/majetek', label: 'Majetek' },
  { path: '/pojisteni/mazlicci', label: 'Mazlíčci' },
  { path: '/pojisteni/cestovani', label: 'Cestování' },
  { path: '/pojisteni/odpovednost', label: 'Odpovědnost' },
  { path: '/pojisteni/zivnost', label: 'Živnost' },
  { path: '/pro-firmy', label: 'Pro firmy' },
];

export function Header() {
  const location = useLocation();

  return (
    <header className="bg-white flex items-center justify-between px-[24px] py-[12px] relative rounded-[9px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)] w-[1200px] h-[80px] overflow-visible">
      <div className="flex items-center shrink-0">
        <Link to="/">
          <img alt="Frenkee" className="h-[29.62px] w-[139.864px]" src={imgFrenkeeLogo} />
        </Link>
      </div>
      <nav className="flex gap-[12px] items-center shrink-0">
        {NAV_ITEMS.map((item) => {
          const isActive = location.pathname.startsWith(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center justify-center relative ${
                isActive ? 'bg-white px-[4px] py-[4px] rounded-[4px]' : ''
              }`}
            >
              <p 
                className={`text-[17px] leading-[20px] whitespace-nowrap ${
                  isActive ? 'text-[#3f2578]' : 'text-[#64748b]'
                }`}
                style={{ fontFamily: "'Mona Sans', sans-serif", fontWeight: 700 }}
              >
                {item.label}
              </p>
              {isActive && (
                <div className="absolute left-0 right-0 top-[calc(100%+8px)]">
                  <img alt="" className="block w-full" src={imgActiveLine} />
                </div>
              )}
            </Link>
          );
        })}
      </nav>
      <div className="flex gap-[12px] items-center shrink-0">
        <Link to="/registrace" className="bg-[#3f2578] flex items-center justify-center px-[18px] py-[10px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
          <p className="leading-[24px] text-[16px] text-white" style={{ fontFamily: "'Mona Sans', sans-serif", fontWeight: 800 }}>
            Registrace
          </p>
        </Link>
        <Link to="/kontakt" className="flex items-center justify-center">
          <p className="text-[17px] leading-[20px] text-[#3f2578] underline decoration-solid" style={{ fontFamily: "'Mona Sans', sans-serif", fontWeight: 500 }}>
            Kontakt
          </p>
        </Link>
      </div>
    </header>
  );
}
