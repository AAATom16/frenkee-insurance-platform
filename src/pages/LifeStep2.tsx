import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LifeProgress } from '../components/LifeProgress';

const POVOLANI = ['Úředník', 'Manuální', 'Řidič', 'Zdravotník', 'Pedagog', 'Podnikatel', 'Jiné'];
const SPORT = ['Žádný', 'Rekreačně', 'Běh', 'Cyklismus', 'Fotbal', 'Lyžování', 'Jiné'];
const KONICKY = ['Žádné', 'Horolezectví', 'Potápění', 'Létání', 'Jiné'];
const CESTOVANI = ['Ne', 'Občas', 'Často do rizikových oblastí'];

export function LifeStep2() {
  const navigate = useNavigate();
  const [vaha, setVaha] = useState('');
  const [vyska, setVyska] = useState('');
  const [povolani, setPovolani] = useState('');
  const [sport, setSport] = useState('');
  const [konicky, setKonicky] = useState('');
  const [cestovani, setCestovani] = useState('');
  const [predchoziPojisteni, setPredchoziPojisteni] = useState<'ano' | 'ne'>('ano');
  const [onemocneni, setOnemocneni] = useState('');

  return (
    <div className="bg-white flex flex-col gap-[24px] items-center p-[24px] w-full min-h-screen">
      <h1 className="text-[32px] md:text-[40px] font-bold text-center tracking-tight" style={{ fontFamily: "'Mona Sans', sans-serif", color: '#3f2578' }}>
        Online sjednání životního pojištění
      </h1>

      <div className="flex flex-col gap-[24px] items-center px-4 md:px-[80px] py-[32px] w-full max-w-[1000px]">
        <LifeProgress current={2} total={8} />

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full items-start">
          <div className="flex flex-col gap-[20px] w-full flex-1 min-w-0">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[#3f2578] text-[18px] font-bold mb-[8px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Váha (kg)</label>
              <input type="number" value={vaha} onChange={(e) => setVaha(e.target.value)} placeholder="70" className="border border-[#e2e9f0] h-[44px] px-[12px] rounded-[10px] text-[16px] w-full outline-none" style={{ fontFamily: "'Inter', sans-serif" }} />
            </div>
            <div>
              <label className="block text-[#3f2578] text-[18px] font-bold mb-[8px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Výška (cm)</label>
              <input type="number" value={vyska} onChange={(e) => setVyska(e.target.value)} placeholder="175" className="border border-[#e2e9f0] h-[44px] px-[12px] rounded-[10px] text-[16px] w-full outline-none" style={{ fontFamily: "'Inter', sans-serif" }} />
            </div>
          </div>

          <div>
            <label className="block text-[#3f2578] text-[18px] font-bold mb-[8px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Povolání</label>
            <select value={povolani} onChange={(e) => setPovolani(e.target.value)} className="border border-[#e2e9f0] h-[44px] px-[12px] rounded-[10px] text-[16px] w-full outline-none bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
              <option value="">Vyberte...</option>
              {POVOLANI.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-[#3f2578] text-[18px] font-bold mb-[8px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Sporty</label>
            <select value={sport} onChange={(e) => setSport(e.target.value)} className="border border-[#e2e9f0] h-[44px] px-[12px] rounded-[10px] text-[16px] w-full outline-none bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
              <option value="">Vyberte...</option>
              {SPORT.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-[#3f2578] text-[18px] font-bold mb-[8px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Koníčky</label>
            <select value={konicky} onChange={(e) => setKonicky(e.target.value)} className="border border-[#e2e9f0] h-[44px] px-[12px] rounded-[10px] text-[16px] w-full outline-none bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
              <option value="">Vyberte...</option>
              {KONICKY.map((k) => <option key={k} value={k}>{k}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-[#3f2578] text-[18px] font-bold mb-[8px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Cestování</label>
            <select value={cestovani} onChange={(e) => setCestovani(e.target.value)} className="border border-[#e2e9f0] h-[44px] px-[12px] rounded-[10px] text-[16px] w-full outline-none bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
              <option value="">Vyberte...</option>
              {CESTOVANI.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div>
            <p className="text-[#3f2578] text-[18px] font-bold mb-[8px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Mám již pojištění?</p>
            <div className="flex gap-[12px]">
              <label className={`flex items-center gap-2 px-4 py-3 rounded-[10px] border-2 cursor-pointer ${predchoziPojisteni === 'ano' ? 'border-[#3f2578] bg-[#f5f3ff]' : 'border-[#e2e9f0]'}`}>
                <input type="radio" name="predchozi" checked={predchoziPojisteni === 'ano'} onChange={() => setPredchoziPojisteni('ano')} className="accent-[#3f2578]" />
                <span className="font-semibold text-[#3f2578]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Ano</span>
              </label>
              <label className={`flex items-center gap-2 px-4 py-3 rounded-[10px] border-2 cursor-pointer ${predchoziPojisteni === 'ne' ? 'border-[#3f2578] bg-[#f5f3ff]' : 'border-[#e2e9f0]'}`}>
                <input type="radio" name="predchozi" checked={predchoziPojisteni === 'ne'} onChange={() => setPredchoziPojisteni('ne')} className="accent-[#3f2578]" />
                <span className="font-semibold text-[#3f2578]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Ne</span>
              </label>
            </div>
          </div>
          <div>
            <label className="block text-[#3f2578] text-[18px] font-bold mb-[8px]" style={{ fontFamily: "'Mona Sans', sans-serif" }}>Závažná onemocnění</label>
            <select value={onemocneni} onChange={(e) => setOnemocneni(e.target.value)} className="border border-[#e2e9f0] h-[44px] px-[12px] rounded-[10px] text-[16px] w-full outline-none bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
              <option value="">Vyberte...</option>
              <option value="ne">Žádná</option>
              <option value="ano">Ano</option>
            </select>
          </div>

          <button type="button" onClick={() => navigate('/pojisteni/zivot/kryti')} className="flex h-[52px] items-center justify-center rounded-[12px] w-full mt-2 text-white text-[18px] font-bold" style={{ backgroundImage: 'linear-gradient(263.127deg, rgb(167, 82, 169) 0%, rgb(63, 37, 120) 100%)', fontFamily: "'Mona Sans', sans-serif" }}>Pokračovat</button>
          </div>
          <div className="w-full md:w-[280px] shrink-0 flex justify-center md:justify-end">
            <img src="/assets/life-char-2.svg" alt="" className="max-h-[280px] w-auto object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
