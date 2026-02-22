import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LifeProgress } from '../components/LifeProgress';
import { Button, GradientHeading, Input } from '../components/ui';

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
    <div className="bg-white flex flex-col gap-6 items-center p-4 md:p-6 w-full min-h-screen">
      <GradientHeading size="lg" className="w-full">
        Online sjednání životního pojištění
      </GradientHeading>

      <div className="flex flex-col gap-6 items-center px-4 md:px-20 py-8 w-full max-w-[1000px]">
        <LifeProgress current={5} total={8} />

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full items-start">
          <div className="flex flex-col gap-4 w-full flex-1 min-w-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Jméno" value={jmeno} onChange={(e) => setJmeno(e.target.value)} placeholder="Jméno" />
            <Input label="Příjmení" value={prijmeni} onChange={(e) => setPrijmeni(e.target.value)} placeholder="Příjmení" />
          </div>
          <Input type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@example.cz" />
          <Input type="tel" label="Telefon" value={telefon} onChange={(e) => setTelefon(e.target.value)} placeholder="+420 123 456 789" />
          <Input label="Ulice a číslo popisné" value={ulice} onChange={(e) => setUlice(e.target.value)} placeholder="Ulice 123" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <Input label="Město" value={mesto} onChange={(e) => setMesto(e.target.value)} placeholder="Praha" />
            </div>
            <Input label="PSČ" value={psc} onChange={(e) => setPsc(e.target.value)} placeholder="110 00" />
          </div>
          <label className="flex items-center gap-3 cursor-pointer pt-2">
            <input type="checkbox" checked={souhlas} onChange={(e) => setSouhlas(e.target.checked)} className="size-[18px] accent-[#3f2578]" />
            <span className="font-inter text-[#64748b] text-[14px]">
              Souhlasím s{' '}
              <a href="/obchodni-podminky" className="text-[#3f2578] underline font-medium">obchodními podmínkami</a>
            </span>
          </label>

          <Button type="button" variant="gradient" size="lg" className="w-full h-[52px] rounded-[var(--radius-lg)] text-lg mt-2" onClick={() => navigate('/pojisteni/zivot/shrnuti')}>Pokračovat</Button>
          </div>
          <div className="w-full md:w-[200px] shrink-0 flex justify-center md:justify-end">
            <img src="/assets/life-house.svg" alt="" className="max-h-[180px] w-auto object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
