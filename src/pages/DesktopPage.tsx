import { motion } from 'framer-motion';
import Desktop from '../components/Desktop';

export default function DesktopPage() {
  return (
    <motion.div layout layoutId='desktop-page' className='w-screen h-screen'>
      <Desktop />
    </motion.div>
  );
}