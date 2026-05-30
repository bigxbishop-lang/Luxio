import { useLocation } from 'wouter';
import { motion } from 'framer-motion';

export default function Mint() {
  const [, navigate] = useLocation();

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#00FFFF',
        fontFamily: "'Nunito', sans-serif",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '2rem',
        position: 'relative',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        <h1
          style={{
            fontFamily: "'Bangers', cursive",
            fontSize: 'clamp(2.5rem, 8vw, 4rem)',
            letterSpacing: '0.05em',
            color: '#000000',
            margin: 0,
            textTransform: 'uppercase',
          }}
        >
          COMING SOON
        </h1>
      </motion.div>
    </div>
  );
}
