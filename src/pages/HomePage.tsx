import { motion } from 'framer-motion';
import './HomePage.css';

type HomePageProps = {
  onSelectPage: (page: 'desktop' | 'other') => void;
};

export default function HomePage({ onSelectPage }: HomePageProps) {
  return (
    <motion.div
        className='w-screen h-screen flex flex-wrap'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
          <h1 className="text-white text-4xl font-bold">🧌</h1>
        </div>
        <motion.div 
            layout 
            layoutId='desktop-page' 
            className='w-1/2 h-full transition-colors'
            style={{ color: 'var(--toggle-text)', backgroundColor: 'var(--toggle-bg-left)' }}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 0.5 }}
            whileHover={{ opacity: 1 }}
            onClick={() => onSelectPage('desktop')}
        >
          <div className="flex flex-col items-center justify-center content-center h-7/4">
            <h2 className="text-4xl font-bold">Visit my Desktop</h2>
            <p className="text-lg hover:underline cursor-pointer">click</p>
          </div>
        </motion.div>
        <motion.div 
            layout 
            layoutId='other-page' 
            className='w-1/2 h-full transition-colors'
            style={{ color: 'var(--toggle-text)', backgroundColor: 'var(--toggle-bg-right)' }}  
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 0.5 }}
            whileHover={{ opacity: 1 }}
            onClick={() => onSelectPage('other')}
        >
        </motion.div>
    </motion.div>
  );
}