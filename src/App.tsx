import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import DesktopPage from './pages/DesktopPage'
import HomePage from './pages/HomePage';
import OtherPage from './pages/OtherPage';

export default function App() {
  const [page, setPage] = useState<'desktop' | 'home' | 'other'>('home');

  return (
    <AnimatePresence mode="wait">
      {page === 'home' && <HomePage key="home" onSelectPage={setPage} />}
      {page === 'desktop' && <DesktopPage key="desktop" />}
      {page === 'other' && <OtherPage key="other" />}
    </AnimatePresence>
  );
}