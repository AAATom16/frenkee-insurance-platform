import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GradientHeading } from '../components/ui';

// Assets from Figma
const imgTravelPerson = '/assets/travel-main-person.png';
const imgEuropeMap = '/assets/europe-map.png';
const imgWorldUsa = '/assets/travel-world-usa.png';
const imgGlobeEuropeAfrica = '/assets/globe-europe-africa.svg';
const imgCzechMap = '/assets/czech-map.png';
const imgIconCar = '/assets/icon-car.svg';
const imgIconAirplane = '/assets/icon-airplane.svg';
const imgIconTransformation = '/assets/icon-transformation.svg';
const imgTravelWork = '/assets/travel-work.png';
const imgTravelRelax = '/assets/travel-relax.png';
const imgTravelSport = '/assets/travel-sport.png';
const imgTravelOrganizedSport = '/assets/travel-organized-sport.png';

const STEPS = ['Cesta', 'Výběr pojištění', 'Osobní údaje', 'Platba'];

export function TravelStep1() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('svet-usa');
  const [transport, setTransport] = useState('letadlo');
  const [tripType, setTripType] = useState('relax');
  const [insuranceType, setInsuranceType] = useState('rok');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [travelerName, setTravelerName] = useState('');
  const [travelerSurname, setTravelerSurname] = useState('');
  const [travelerBirthdate, setTravelerBirthdate] = useState('');

  const handleContinue = () => {
    navigate('/pojisteni/cestovani/nabidky');
  };

  const dayCount = dateFrom && dateTo 
    ? Math.max(0, Math.ceil((new Date(dateTo).getTime() - new Date(dateFrom).getTime()) / (1000 * 60 * 60 * 24)))
    : 0;

  return (
    <div className="bg-white flex flex-col gap-6 items-center p-6 w-full min-h-screen">
      <GradientHeading size="lg" className="w-full">
        Online sjednání cestovního pojištění
      </GradientHeading>

      {/* Step Progress */}
      <div className="flex items-center gap-4">
        {STEPS.map((step, i) => (
          <div key={step} className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center ${i === 0 ? 'bg-[#3f2578]' : 'bg-[#edf2f7] border border-[#e2e9f0]'}`}>
                {i === 0 && <div className="w-2 h-2 bg-white rounded-full" />}
              </div>
              <span className={`font-mona font-medium text-[16px] ${i === 0 ? 'text-[#020617]' : 'text-[#94a3b8]'}`}>
                {step}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <span className="text-[#94a3b8]">›</span>
            )}
          </div>
        ))}
      </div>

      <div className="flex gap-12 items-start justify-center w-full max-w-[1200px]">
        {/* Levá část: Formulář */}
        <div className="flex flex-col gap-6 w-full max-w-[592px]">
          
          {/* Kam pojedete? */}
          <div className="flex flex-col gap-2">
            <h3 className="font-mona font-bold text-[18px] text-[#3f2578]">Kam pojedete?</h3>
            <div className="flex gap-6">
              {[
                { id: 'evropa', label: 'Evropa', img: imgEuropeMap, imgStyle: 'w-[100px] h-[100px] object-contain' },
                { id: 'svet-usa', label: 'Svět vč. USA\na Kanady', img: imgWorldUsa, imgStyle: 'w-[75px] h-[90px] object-contain' },
                { id: 'svet-bez-usa', label: 'Svět bez. USA\na Kanady', img: imgGlobeEuropeAfrica, imgStyle: 'w-[70px] h-[70px]' },
                { id: 'cesko', label: 'Česká republika', img: imgCzechMap, imgStyle: 'w-[100px] h-[100px] object-contain' },
              ].map((d) => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setDestination(d.id)}
                  className={`flex flex-col items-center gap-1 p-3 w-[130px] h-[180px] rounded-lg border transition-all ${
                    destination === d.id
                      ? 'border-[#34c759] bg-white'
                      : 'border-[#e9e9e9] hover:border-[#3f2578]/50'
                  }`}
                >
                  <div className="w-[100px] h-[100px] flex items-center justify-center">
                    <img src={d.img} alt="" className={d.imgStyle} />
                  </div>
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${destination === d.id ? 'border-[#34c759] bg-[#34c759]' : 'border-[#94a3b8]'}`}>
                    {destination === d.id && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                  <span className="font-mona font-medium text-[16px] text-[#3f2578] text-center whitespace-pre-line leading-tight">
                    {d.label}
                  </span>
                </button>
              ))}
            </div>
            <p className="text-[14px] text-[#94a3b8] font-mona flex items-center gap-2">
              <span className="text-[#3f2578]">ⓘ</span> Které státy patří do Evropy?
            </p>
          </div>

          {/* Jak se tam dostanete? */}
          <div className="flex flex-col gap-2">
            <h3 className="font-mona font-bold text-[18px] text-[#3f2578]">Jak se tam dostanete?</h3>
            <div className="flex gap-6">
              {[
                { id: 'auto', label: 'Auto', img: imgIconCar },
                { id: 'letadlo', label: 'Letadlo', img: imgIconAirplane },
                { id: 'auto-letadlo', label: 'Auto i Letadlo', img: null, combo: true },
                { id: 'ostatni', label: 'Vše ostatní', img: imgIconTransformation },
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTransport(t.id)}
                  className={`flex flex-col items-center justify-end gap-1 p-3 w-[130px] h-[180px] rounded-lg border transition-all ${
                    transport === t.id
                      ? 'border-[#34c759] bg-white'
                      : 'border-[#e9e9e9] hover:border-[#3f2578]/50'
                  }`}
                >
                  <div className="w-[100px] h-[100px] flex items-center justify-center relative">
                    {t.combo ? (
                      <>
                        <img src={imgIconAirplane} alt="" className="absolute w-[50px] h-[50px] top-0 left-0" />
                        <span className="text-[#3f2578] text-[32px] font-mona font-bold">+</span>
                        <img src={imgIconCar} alt="" className="absolute w-[50px] h-[50px] bottom-0 right-0" />
                      </>
                    ) : (
                      <img src={t.img!} alt="" className="w-[100px] h-[100px]" />
                    )}
                  </div>
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${transport === t.id ? 'border-[#34c759] bg-[#34c759]' : 'border-[#94a3b8]'}`}>
                    {transport === t.id && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                  <span className="font-mona font-medium text-[16px] text-[#3f2578] text-center whitespace-pre-line leading-tight">
                    {t.label}
                  </span>
                </button>
              ))}
            </div>
            <p className="text-[14px] text-[#94a3b8] font-mona flex items-center gap-2">
              <span className="text-[#3f2578]">ⓘ</span> Proč se ptáme?
            </p>
          </div>

          <div className="h-px bg-[#e9e9e9] w-full" />

          {/* Jaký je typ vaší cesty? */}
          <div className="flex flex-col gap-2">
            <h3 className="font-mona font-bold text-[18px] text-[#3f2578]">Jaký je typ vaší cesty?</h3>
            <div className="flex gap-6">
              {[
                { id: 'pracovni', label: 'Pracovní', img: imgTravelWork },
                { id: 'relax', label: 'Relax', img: imgTravelRelax },
                { id: 'adrenalin', label: 'Adrenalin a\nsport', img: imgTravelSport },
                { id: 'organizovany', label: 'Organizovaný\nsport', img: imgTravelOrganizedSport },
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTripType(t.id)}
                  className={`flex flex-col items-center justify-end gap-1 p-3 w-[130px] h-[180px] rounded-lg border transition-all overflow-hidden ${
                    tripType === t.id
                      ? 'border-[#34c759] bg-white'
                      : 'border-[#e9e9e9] hover:border-[#3f2578]/50'
                  }`}
                >
                  <div className="w-[100px] h-[100px] flex items-center justify-center overflow-hidden">
                    <img src={t.img} alt="" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${tripType === t.id ? 'border-[#34c759] bg-[#34c759]' : 'border-[#94a3b8]'}`}>
                    {tripType === t.id && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                  <span className="font-mona font-medium text-[16px] text-[#3f2578] text-center whitespace-pre-line leading-tight">
                    {t.label}
                  </span>
                </button>
              ))}
            </div>
            <p className="text-[14px] text-[#94a3b8] font-mona flex items-center gap-2">
              <span className="text-[#3f2578]">ⓘ</span> Proč se ptáme?
            </p>
          </div>

          <div className="h-px bg-[#e9e9e9] w-full" />

          {/* Chci pojistit */}
          <div className="flex flex-col gap-2">
            <h3 className="font-mona font-bold text-[18px] text-[#3f2578]">Chci pojistit</h3>
            <div className="flex justify-between">
              {[
                { id: 'jedna', label: 'Jednu cestu' },
                { id: 'opakovane', label: 'Opakované cesty' },
                { id: 'rok', label: 'Celý rok' },
              ].map((t) => (
                <label key={t.id} className="flex items-center gap-2 cursor-pointer p-1">
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${insuranceType === t.id ? 'border-[#34c759] bg-[#34c759]' : 'border-[#94a3b8]'}`}>
                    {insuranceType === t.id && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                  <input
                    type="radio"
                    name="insuranceType"
                    value={t.id}
                    checked={insuranceType === t.id}
                    onChange={(e) => setInsuranceType(e.target.value)}
                    className="sr-only"
                  />
                  <span className="font-mona font-medium text-[16px] text-[#334155]">{t.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="h-px bg-[#e9e9e9] w-full" />

          {/* Datum */}
          <div className="flex gap-6 items-end">
            <div className="flex flex-col gap-3 w-[192px]">
              <label className="font-mona font-medium text-[18px] text-[#3f2578]">Od</label>
              <input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="h-10 px-3 rounded-lg border border-[#e5e5e5] shadow-sm font-mona text-[14px] text-[#94a3b8] outline-none focus:border-[#3f2578]"
              />
            </div>
            <div className="flex flex-col gap-3 w-[192px]">
              <label className="font-mona font-medium text-[18px] text-[#3f2578]">Do</label>
              <input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="h-10 px-3 rounded-lg border border-[#e5e5e5] shadow-sm font-mona text-[14px] text-[#94a3b8] outline-none focus:border-[#3f2578]"
              />
            </div>
            <div className="flex flex-col gap-3 items-center">
              <label className="font-mona font-medium text-[18px] text-[#3f2578]">Počet dní:</label>
              <div className="h-10 w-[42px] px-3 flex items-center justify-center rounded-lg border border-[#e5e5e5] shadow-sm font-mona text-[18px] text-[#94a3b8]">
                {dayCount || '—'}
              </div>
            </div>
          </div>

          <div className="h-px bg-[#e9e9e9] w-full" />

          {/* Pojištění osoby */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <span className="font-mona font-medium text-[18px] text-[#3f2578]">Pojištění osoby</span>
                <span className="text-[#d60021] text-[14px]">*</span>
              </div>
              <button
                type="button"
                className="h-10 px-3 rounded-[10px] bg-[#edf2f7] border border-[#e2e9f0] font-mona font-medium text-[14px] text-[#3f2578]"
              >
                Přidat cestujícího
              </button>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Jméno"
                value={travelerName}
                onChange={(e) => setTravelerName(e.target.value)}
                className="flex-1 h-10 px-3 rounded-lg border border-[#e2e9f0] shadow-sm font-mona text-[14px] text-[#94a3b8] placeholder:text-[#94a3b8] outline-none focus:border-[#3f2578]"
              />
              <input
                type="text"
                placeholder="Příjmení"
                value={travelerSurname}
                onChange={(e) => setTravelerSurname(e.target.value)}
                className="flex-1 h-10 px-3 rounded-lg border border-[#e2e9f0] shadow-sm font-mona text-[14px] text-[#94a3b8] placeholder:text-[#94a3b8] outline-none focus:border-[#3f2578]"
              />
              <input
                type="date"
                placeholder="Datum narození"
                value={travelerBirthdate}
                onChange={(e) => setTravelerBirthdate(e.target.value)}
                className="flex-1 h-10 px-3 rounded-lg border border-[#e5e5e5] shadow-sm font-mona text-[14px] text-[#94a3b8] outline-none focus:border-[#3f2578]"
              />
            </div>
            <p className="text-[14px] text-[#94a3b8] font-mona flex items-center gap-2">
              <span className="text-[#3f2578]">ⓘ</span> Proč se ptáme?
            </p>
          </div>

          {/* CTA Button */}
          <button
            type="button"
            onClick={handleContinue}
            className="h-12 px-5 rounded-xl font-inter font-medium text-[16px] text-white shadow-[0px_4px_9.2px_0px_#a752a9]"
            style={{ backgroundImage: 'linear-gradient(261deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%)' }}
          >
            Zobrazit nabídky
          </button>
        </div>

        {/* Pravá část: Ilustrace cestovatele */}
        <div className="hidden lg:block shrink-0 w-[330px] relative">
          <img src={imgTravelPerson} alt="" className="w-full h-auto object-contain" />
        </div>
      </div>
    </div>
  );
}
