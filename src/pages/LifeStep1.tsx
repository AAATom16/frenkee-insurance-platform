import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LifeProgress } from '../components/LifeProgress';

const PROFESE_OPTIONS = ['Programátor', 'Úředník', 'Manuální', 'Řidič', 'Zdravotník', 'Pedagog', 'Podnikatel', 'Jiné'];

export function LifeStep1() {
  const navigate = useNavigate();
  const [jmeno, setJmeno] = useState('');
  const [prijmeni, setPrijmeni] = useState('');
  const [datumNarozeni, setDatumNarozeni] = useState('');
  const [zamestnani, setZamestnani] = useState<'zamestnanec' | 'osvc' | 'bez'>('zamestnanec');
  const [profese, setProfese] = useState('');
  const [popis, setPopis] = useState('');
  const [obcanstvi, setObcanstvi] = useState<'cesko' | 'slovensko' | 'jine'>('cesko');

  return (
    <div className="bg-white flex flex-col gap-[24px] items-center p-[24px] w-full min-h-screen">
      <h1
        className="text-[32px] md:text-[40px] font-bold text-center tracking-tight"
        style={{ fontFamily: "'Inter', sans-serif", color: '#3f2578' }}
      >
        Online sjednání životního pojištění
      </h1>

      <div className="flex flex-col gap-[24px] items-center px-4 md:px-[80px] py-[32px] w-full max-w-[1000px]">
        <LifeProgress current={1} total={8} />

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 w-full items-start">
          <div className="w-full md:w-[300px] shrink-0 flex justify-center md:justify-start order-2 md:order-1">
            <img src="/assets/life-char-1.png" alt="" className="max-h-[280px] w-auto object-contain" />
          </div>
          <div className="flex flex-col gap-[20px] w-full flex-1 min-w-0 order-1 md:order-2">
            <h2 className="text-[#3f2578] text-[20px] font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
              Základní informace o vás
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#3f2578] text-[18px] font-bold mb-[8px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Jméno <span style={{ color: '#d60021' }}>*</span>
                </label>
                <input
                  type="text"
                  value={jmeno}
                  onChange={(e) => setJmeno(e.target.value)}
                  placeholder="Jméno"
                  className="border border-[#e2e9f0] h-[44px] px-[12px] rounded-[10px] text-[16px] w-full outline-none focus:ring-2 focus:ring-[#3f2578]/30"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>
              <div>
                <label className="block text-[#3f2578] text-[18px] font-bold mb-[8px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Příjmení <span style={{ color: '#d60021' }}>*</span>
                </label>
                <input
                  type="text"
                  value={prijmeni}
                  onChange={(e) => setPrijmeni(e.target.value)}
                  placeholder="Příjmení"
                  className="border border-[#e2e9f0] h-[44px] px-[12px] rounded-[10px] text-[16px] w-full outline-none focus:ring-2 focus:ring-[#3f2578]/30"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>
            </div>

            <div>
              <label className="block text-[#3f2578] text-[18px] font-bold mb-[8px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                Datum narození <span style={{ color: '#d60021' }}>*</span>
              </label>
              <input
                type="text"
                value={datumNarozeni}
                onChange={(e) => setDatumNarozeni(e.target.value)}
                placeholder="DD.MM.RRRR"
                className="border border-[#e2e9f0] h-[44px] px-[12px] rounded-[10px] text-[16px] w-full outline-none focus:ring-2 focus:ring-[#3f2578]/30"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </div>

            <div>
              <p className="text-[#3f2578] text-[18px] font-bold mb-[8px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                Jaké je vaše zaměstnání?
              </p>
              <div className="flex flex-wrap gap-[12px]">
                <label className={`flex items-center gap-2 px-4 py-3 rounded-[10px] border-2 cursor-pointer ${zamestnani === 'zamestnanec' ? 'border-[#3f2578] bg-[#3f2578] text-white' : 'border-[#e2e9f0] bg-white'}`}>
                  <input type="radio" name="zamestnani" checked={zamestnani === 'zamestnanec'} onChange={() => setZamestnani('zamestnanec')} className="accent-[#3f2578]" />
                  <span className={`font-semibold ${zamestnani === 'zamestnanec' ? 'text-white' : 'text-[#64748b]'}`} style={{ fontFamily: "'Inter', sans-serif" }}>Zaměstnanec</span>
                </label>
                <label className={`flex items-center gap-2 px-4 py-3 rounded-[10px] border-2 cursor-pointer ${zamestnani === 'osvc' ? 'border-[#3f2578] bg-[#3f2578] text-white' : 'border-[#e2e9f0] bg-white'}`}>
                  <input type="radio" name="zamestnani" checked={zamestnani === 'osvc'} onChange={() => setZamestnani('osvc')} className="accent-[#3f2578]" />
                  <span className={`font-semibold ${zamestnani === 'osvc' ? 'text-white' : 'text-[#64748b]'}`} style={{ fontFamily: "'Inter', sans-serif" }}>OSVČ</span>
                </label>
                <label className={`flex items-center gap-2 px-4 py-3 rounded-[10px] border-2 cursor-pointer ${zamestnani === 'bez' ? 'border-[#3f2578] bg-[#3f2578] text-white' : 'border-[#e2e9f0] bg-white'}`}>
                  <input type="radio" name="zamestnani" checked={zamestnani === 'bez'} onChange={() => setZamestnani('bez')} className="accent-[#3f2578]" />
                  <span className={`font-semibold ${zamestnani === 'bez' ? 'text-white' : 'text-[#64748b]'}`} style={{ fontFamily: "'Inter', sans-serif" }}>Bez zaměstnání</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-[#3f2578] text-[18px] font-bold mb-[8px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                Profese / zaměstnání
              </label>
              <select
                value={profese}
                onChange={(e) => setProfese(e.target.value)}
                className="border border-[#e2e9f0] h-[44px] px-[12px] rounded-[10px] text-[16px] w-full outline-none bg-white"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <option value="">Vyberte...</option>
                {PROFESE_OPTIONS.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[#3f2578] text-[18px] font-bold mb-[8px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                Popis
              </label>
              <input
                type="text"
                value={popis}
                onChange={(e) => setPopis(e.target.value)}
                placeholder="Popis"
                className="border border-[#e2e9f0] h-[44px] px-[12px] rounded-[10px] text-[16px] w-full outline-none focus:ring-2 focus:ring-[#3f2578]/30"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </div>

            <div>
              <p className="text-[#3f2578] text-[18px] font-bold mb-[8px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                Občanství
              </p>
              <div className="flex flex-wrap gap-[12px]">
                <label className={`flex items-center gap-2 px-4 py-3 rounded-[10px] border-2 cursor-pointer ${obcanstvi === 'cesko' ? 'border-[#3f2578] bg-[#3f2578] text-white' : 'border-[#e2e9f0] bg-white'}`}>
                  <input type="radio" name="obcanstvi" checked={obcanstvi === 'cesko'} onChange={() => setObcanstvi('cesko')} className="accent-[#3f2578]" />
                  <span className={`font-semibold ${obcanstvi === 'cesko' ? 'text-white' : 'text-[#64748b]'}`} style={{ fontFamily: "'Inter', sans-serif" }}>Česko</span>
                </label>
                <label className={`flex items-center gap-2 px-4 py-3 rounded-[10px] border-2 cursor-pointer ${obcanstvi === 'slovensko' ? 'border-[#3f2578] bg-[#3f2578] text-white' : 'border-[#e2e9f0] bg-white'}`}>
                  <input type="radio" name="obcanstvi" checked={obcanstvi === 'slovensko'} onChange={() => setObcanstvi('slovensko')} className="accent-[#3f2578]" />
                  <span className={`font-semibold ${obcanstvi === 'slovensko' ? 'text-white' : 'text-[#64748b]'}`} style={{ fontFamily: "'Inter', sans-serif" }}>Slovensko</span>
                </label>
                <label className={`flex items-center gap-2 px-4 py-3 rounded-[10px] border-2 cursor-pointer ${obcanstvi === 'jine' ? 'border-[#3f2578] bg-[#3f2578] text-white' : 'border-[#e2e9f0] bg-white'}`}>
                  <input type="radio" name="obcanstvi" checked={obcanstvi === 'jine'} onChange={() => setObcanstvi('jine')} className="accent-[#3f2578]" />
                  <span className={`font-semibold ${obcanstvi === 'jine' ? 'text-white' : 'text-[#64748b]'}`} style={{ fontFamily: "'Inter', sans-serif" }}>Jiné</span>
                </label>
              </div>
            </div>

            <button
              type="button"
              onClick={() => navigate('/pojisteni/zivot/zdravi')}
              className="flex h-[52px] items-center justify-center rounded-[12px] w-full mt-2 text-white text-[18px] font-bold"
              style={{ backgroundColor: '#3f2578', fontFamily: "'Inter', sans-serif" }}
            >
              Pokračovat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
