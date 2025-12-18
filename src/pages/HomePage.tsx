import { motion } from 'framer-motion';

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
        <motion.div 
            layout 
            layoutId='desktop-page' 
            className='w-1/2 h-full bg-gray-200'
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 0.5 }}
            whileHover={{ opacity: 1 }}
            onClick={() => onSelectPage('desktop')}
        >
            <h1>Desktoppie</h1>
        </motion.div>
        <motion.div 
            layout 
            layoutId='other-page' 
            className='w-1/2 h-full bg-gray-200'
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 0.5 }}
            whileHover={{ opacity: 1 }}
            onClick={() => onSelectPage('other')}
        >
            <h1>Other</h1>
        </motion.div>
    </motion.div>
  );
}