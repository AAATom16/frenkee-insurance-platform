import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LifeProgress } from '../components/LifeProgress';
import { Button, GradientHeading, Input } from '../components/ui';

export function AutoStep2() {
  const navigate = useNavigate();
  const [jmeno, setJmeno] = useState('');
  const [prijmeni, setPrijmeni] = useState('');
  const [datumNarozeni, setDatumNarozeni] = useState('');
  const [email, setEmail] = useState('');
  const [telefon, setTelefon] = useState('');
  const [adresa, setAdresa] = useState('');

  const handleContinue = () => {
    navigate('/pojisteni/auto/krok-3');
  };

  const handleBack = () => {
    navigate('/pojisteni/auto');
  };

  return (
    <div className="bg-white flex flex-col gap-6 items-center p-4 md:p-6 w-full min-h-screen">
      <GradientHeading size="lg" className="w-full">
        Online pojištění vozidla
      </GradientHeading>

      <p className="font-mona font-bold text-[16px] text-[var(--color-primary)] text-center">
        5 kroků k povinnému ručení
      </p>

      <div className="flex flex-col gap-6 w-full max-w-[600px] px-4">
        <LifeProgress current={2} total={5} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="Jméno *" value={jmeno} onChange={(e) => setJmeno(e.target.value)} placeholder="Zadejte jméno" />
          <Input label="Příjmení *" value={prijmeni} onChange={(e) => setPrijmeni(e.target.value)} placeholder="Zadejte příjmení" />
        </div>
        <Input label="Datum narození *" type="date" value={datumNarozeni} onChange={(e) => setDatumNarozeni(e.target.value)} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="E-mail *" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="vas@email.cz" />
          <Input label="Telefon *" type="tel" value={telefon} onChange={(e) => setTelefon(e.target.value)} placeholder="+420 123 456 789" />
        </div>
        <Input label="Adresa trvalého bydliště *" value={adresa} onChange={(e) => setAdresa(e.target.value)} placeholder="Ulice 123, Praha 1, 110 00" />

        <div className="flex gap-4 justify-center pt-2">
          <Button variant="outline" size="lg" onClick={handleBack}>
            Zpět
          </Button>
          <Button variant="gradient" size="lg" onClick={handleContinue}>
            Pokračovat
          </Button>
        </div>
      </div>
    </div>
  );
}
