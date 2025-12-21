import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import DesktopPage from './pages/DesktopPage'
import HomePage from './pages/HomePage';
import OtherPage from './pages/OtherPage';
import DarkModeSelector from './components/DarkModeSelector';
import HomeButton from './components/HomeButton';

export default function App() {
  const [page, setPage] = useState<'desktop' | 'home' | 'other'>('home');
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored === 'dark') return true;
      if (stored === 'light') return false;
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      // If localStorage or window isn't available (SSR), default to false
      return false;
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <>
      {/* Global darkmode selector */}
      <div className='fixed bottom-4 left-4 z-50'>
        <DarkModeSelector 
          isOn={darkMode}
          onToggle={() => setDarkMode(!darkMode)}
        />
      </div>

      {/* Back/Home button on all non-home pages */}
      {page !== 'home' && (
        <div className="fixed bottom-4 right-4 z-50">
          <HomeButton onClick={() => setPage('home')} />
        </div>
      )}

      {/* Pages */}
      <AnimatePresence mode="wait" data-theme={darkMode ? 'dark' : 'light'}>
        {page === 'home' && <HomePage key="home" onSelectPage={setPage} />}
        {page === 'desktop' && <DesktopPage key="desktop" />}
        {page === 'other' && <OtherPage key="other" />}
      </AnimatePresence>
    </>
  );
}