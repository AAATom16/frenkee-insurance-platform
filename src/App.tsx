import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './components/layout';
import {
  LandingPage,
  ContactPage,
  KanbanPage,
  ZakladniUdajePage,
  DetailBytuPage,
  DomacnostPage,
  OsobniUdajePage,
} from './pages';
import { TravelStep1 } from './pages/TravelStep1';
import { TravelStep2 } from './pages/TravelStep2';
import { TravelStep3 } from './pages/TravelStep3';
import { TravelStep4 } from './pages/TravelStep4';
import { MajetekStep1 } from './pages/MajetekStep1';
import { MajetekStep2 } from './pages/MajetekStep2';
import { MajetekStep3 } from './pages/MajetekStep3';
import { MajetekStep4 } from './pages/MajetekStep4';
import { MajetekStep5 } from './pages/MajetekStep5';
import { MajetekSummary } from './pages/MajetekSummary';
import { AutoStep1 } from './pages/AutoStep1';
import { AutoStep2 } from './pages/AutoStep2';
import { AutoStep3 } from './pages/AutoStep3';
import { AutoStep4 } from './pages/AutoStep4';
import { AutoStep5 } from './pages/AutoStep5';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="kontakt" element={<ContactPage />} />
          <Route path="pojisteni/cestovani" element={<TravelStep1 />} />
          <Route path="pojisteni/cestovani/nabidky" element={<TravelStep2 />} />
          <Route path="pojisteni/cestovani/udaje" element={<TravelStep3 />} />
          <Route path="pojisteni/cestovani/platba" element={<TravelStep4 />} />
          <Route path="pojisteni/auto" element={<AutoStep1 />} />
          <Route path="pojisteni/auto/krok-2" element={<AutoStep2 />} />
          <Route path="pojisteni/auto/krok-3" element={<AutoStep3 />} />
          <Route path="pojisteni/auto/nabidky" element={<AutoStep4 />} />
          <Route path="pojisteni/auto/shrnuti" element={<AutoStep5 />} />
          <Route path="kanban" element={<KanbanPage />} />
          <Route path="pojisteni/majetek" element={<MajetekStep1 />} />
          <Route path="pojisteni/majetek/krok-2" element={<MajetekStep2 />} />
          <Route path="pojisteni/majetek/krok-3" element={<MajetekStep3 />} />
          <Route path="pojisteni/majetek/krok-4" element={<MajetekStep4 />} />
          <Route path="pojisteni/majetek/nabidky" element={<MajetekStep5 />} />
          <Route path="pojisteni/majetek/shrnuti" element={<MajetekSummary />} />
          <Route path="pojisteni/majetek/zakladni-udaje" element={<ZakladniUdajePage />} />
          <Route path="pojisteni/majetek/detail" element={<DetailBytuPage />} />
          <Route path="pojisteni/majetek/domacnost" element={<DomacnostPage />} />
          <Route path="pojisteni/majetek/osobni-udaje" element={<OsobniUdajePage />} />
          <Route path="pojisteni/mazlicci" element={<LandingPage />} />
          <Route path="pojisteni/odpovednost" element={<LandingPage />} />
          <Route path="pojisteni/zivnost" element={<LandingPage />} />
          <Route path="pro-firmy" element={<LandingPage />} />
          <Route path="registrace" element={<LandingPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
