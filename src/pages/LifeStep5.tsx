import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LifeProgress } from '../components/LifeProgress';
import { Button } from '../components/ui';

export function LifeStep5() {
  const navigate = useNavigate();
  const [jmeno, setJmeno] = useState('');
  const [prijmeni, setPrijmeni] = useState('');
  const [email, setEmail] = useState('');
  const [telefon, setTelefon] = useState('');
  const [ulice, setUlice] = useState('');
  const [mesto, setMesto] = useState('');
  const [psc, setPsc] = useState('');
  const [souhlas, setSouhlas] = useState(false);

  return (
    <div className="bg-white flex flex-col gap-[24px] items-center p-[24px] w-full min-h-screen">
      <h1 className="heading-2 text-[var(--color-primary)] text-center tracking-tight">
        Online sjednání životního pojištění
      </h1>

      <div className="flex flex-col gap-[24px] items-center px-4 md:px-[80px] py-[32px] w-full max-w-[1000px]">
        <LifeProgress current={5} total={8} />

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full items-start">
          <div className="flex flex-col gap-[16px] w-full flex-1 min-w-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[#3f2578] text-[16px] font-bold mb-[6px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Jméno</label>
              <input type="text" value={jmeno} onChange={(e) => setJmeno(e.target.value)} className="border border-[#e2e9f0] h-[44px] px-[12px] rounded-[10px] text-[16px] w-full outline-none" style={{ fontFamily: "'Inter', sans-serif" }} />
            </div>
            <div>
              <label className="block text-[#3f2578] text-[16px] font-bold mb-[6px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Příjmení</label>
              <input type="text" value={prijmeni} onChange={(e) => setPrijmeni(e.target.value)} className="border border-[#e2e9f0] h-[44px] px-[12px] rounded-[10px] text-[16px] w-full outline-none" style={{ fontFamily: "'Inter', sans-serif" }} />
            </div>
          </div>
          <div>
            <label className="block text-[#3f2578] text-[16px] font-bold mb-[6px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-[#e2e9f0] h-[44px] px-[12px] rounded-[10px] text-[16px] w-full outline-none" style={{ fontFamily: "'Inter', sans-serif" }} />
          </div>
          <div>
            <label className="block text-[#3f2578] text-[16px] font-bold mb-[6px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Telefon</label>
            <input type="tel" value={telefon} onChange={(e) => setTelefon(e.target.value)} className="border border-[#e2e9f0] h-[44px] px-[12px] rounded-[10px] text-[16px] w-full outline-none" style={{ fontFamily: "'Inter', sans-serif" }} />
          </div>
          <div>
            <label className="block text-[#3f2578] text-[16px] font-bold mb-[6px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Ulice a číslo popisné</label>
            <input type="text" value={ulice} onChange={(e) => setUlice(e.target.value)} className="border border-[#e2e9f0] h-[44px] px-[12px] rounded-[10px] text-[16px] w-full outline-none" style={{ fontFamily: "'Inter', sans-serif" }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-[#3f2578] text-[16px] font-bold mb-[6px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Město</label>
              <input type="text" value={mesto} onChange={(e) => setMesto(e.target.value)} className="border border-[#e2e9f0] h-[44px] px-[12px] rounded-[10px] text-[16px] w-full outline-none" style={{ fontFamily: "'Inter', sans-serif" }} />
            </div>
            <div>
              <label className="block text-[#3f2578] text-[16px] font-bold mb-[6px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>PSČ</label>
              <input type="text" value={psc} onChange={(e) => setPsc(e.target.value)} placeholder="110 00" className="border border-[#e2e9f0] h-[44px] px-[12px] rounded-[10px] text-[16px] w-full outline-none" style={{ fontFamily: "'Inter', sans-serif" }} />
            </div>
          </div>
          <label className="flex items-center gap-3 cursor-pointer pt-2">
            <input type="checkbox" checked={souhlas} onChange={(e) => setSouhlas(e.target.checked)} className="size-[18px] accent-[#3f2578]" />
            <span className="text-[#64748b] text-[14px]" style={{ fontFamily: "'Inter', sans-serif" }}>
              Souhlasím s{' '}
              <a href="/obchodni-podminky" className="text-[#3f2578] underline font-medium">obchodními podmínkami</a>
            </span>
          </label>

          <Button type="button" size="lg" className="w-full h-[52px] rounded-[var(--radius-lg)] text-lg mt-2" onClick={() => navigate('/pojisteni/zivot/shrnuti')}>Pokračovat</Button>
          </div>
          <div className="w-full md:w-[200px] shrink-0 flex justify-center md:justify-end">
            <img src="/assets/life-house.svg" alt="" className="max-h-[180px] w-auto object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
