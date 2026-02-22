import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="flex justify-center px-4 md:px-8 lg:px-[120px] pt-4 md:pt-6 pb-3 relative z-10">
        <Header />
      </div>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
