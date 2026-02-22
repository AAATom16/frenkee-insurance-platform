import { useNavigate } from 'react-router-dom';
import { LifeProgress } from '../components/LifeProgress';
import { Button, GradientHeading } from '../components/ui';

const imgTravelPerson = '/assets/travel-person.png';

const PACKAGES = [
  { id: 'zakladni', name: 'Základní', price: 300, features: ['Léčebné výlohy', 'Asistenční služby', 'Úrazové pojištění'] },
  { id: 'standard', name: 'Standard', price: 450, features: ['Léčebné výlohy', 'Asistenční služby', 'Úrazové pojištění', 'Pojištění zavazadel'] },
  { id: 'komplet', name: 'Komplet', price: 600, features: ['Vše v Standard', 'Sportovní aktivity', 'Rozšířené krytí'] },
];

export function TravelStep2() {
  const navigate = useNavigate();

  return (
    <div className="bg-white flex flex-col gap-6 items-center p-4 md:p-6 w-full min-h-screen">
      <GradientHeading size="lg" className="w-full">
        Online sjednání cestovního pojištění
      </GradientHeading>

      <p className="font-mona font-bold text-[16px] text-[var(--color-primary)] text-center">
        4 kroky k pojištění vaší cesty
      </p>

      <div className="flex flex-col lg:flex-row gap-8 items-start justify-center w-full max-w-[1200px] px-4 md:px-12">
        <div className="hidden lg:block shrink-0 w-[200px]">
          <img src={imgTravelPerson} alt="" className="max-h-[200px] w-auto object-contain opacity-90" />
        </div>
        <div className="flex flex-col gap-6 flex-1 min-w-0 w-full">
        <LifeProgress current={2} total={4} />

        <div className="bg-[var(--color-background-alt)] flex gap-6 items-center px-4 py-3 rounded-[var(--radius-lg)] w-full flex-wrap">
          <span className="text-[14px] text-[var(--color-text-muted)] font-inter">Datum: 1.10. – 10.10.</span>
          <span className="text-[14px] text-[var(--color-text-muted)] font-inter">Destinace: Německo</span>
          <span className="text-[14px] text-[var(--color-text-muted)] font-inter">Důvod cesty: Rekreace</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="border border-[var(--color-border)] flex flex-col gap-4 p-6 rounded-[var(--radius-lg)] bg-white shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center gap-2">
                <div className="size-10 rounded-[var(--radius-md)] bg-[var(--color-primary-light)] flex items-center justify-center">
                  <span className="text-[var(--color-primary)] text-[18px] font-bold font-mona">🛡</span>
                </div>
                <div>
                  <p className="text-[var(--color-primary)] text-[18px] font-bold font-mona">{pkg.name}</p>
                  <p className="text-[var(--color-text-muted)] text-[12px] font-inter">4,5 ★ 200 hodnocení</p>
                </div>
              </div>
              <ul className="flex flex-col gap-2">
                {pkg.features.map((f) => (
                  <li key={f} className="flex gap-2 items-center text-[14px] text-[var(--color-primary)] font-inter">
                    <span className="text-green-600">✓</span> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-3">
                <p className="text-[24px] font-bold text-[var(--color-primary)] font-mona">{pkg.price} Kč</p>
                <Button
                  type="button"
                  variant="gradient"
                  size="md"
                  className="w-full h-11"
                  onClick={() => navigate('/pojisteni/cestovani/udaje')}
                >
                  Zvolit
                </Button>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}
