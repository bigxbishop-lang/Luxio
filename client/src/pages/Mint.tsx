import { useLocation } from 'wouter';
import { motion } from 'framer-motion';

export default function Mint() {
  const [, navigate] = useLocation();

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#7d4a55',
        fontFamily: "'Nunito', sans-serif",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '2rem',
        position: 'relative',
      }}
    >
      {/* Back */}
      <button
        onClick={() => navigate('/home')}
        style={{
          position: 'absolute',
          top: '1.5rem',
          left: '1.5rem',
          background: 'rgba(255,255,255,0.12)',
          border: 'none',
          borderRadius: '100px',
          padding: '8px 18px',
          fontFamily: "'Bangers', cursive",
          fontSize: '0.95rem',
          letterSpacing: '0.08em',
          color: '#fff',
          cursor: 'pointer',
        }}
      >
        ← BACK
      </button>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          background: 'rgba(220,210,205,0.15)',
          border: '2px dashed rgba(255,255,255,0.2)',
          borderRadius: '28px',
          padding: '4rem 3rem',
          textAlign: 'center',
          maxWidth: '400px',
          width: '100%',
        }}
      >
        {/* Lock icon */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          style={{ fontSize: '4rem', marginBottom: '1.5rem', filter: 'grayscale(0.3)' }}
        >
          🔒
        </motion.div>

        <h2
          style={{
            fontFamily: "'Bangers', cursive",
            fontSize: 'clamp(2rem, 8vw, 3rem)',
            letterSpacing: '0.1em',
            color: 'rgba(255,255,255,0.25)',
            marginBottom: '0.75rem',
          }}
        >
          MINT
        </h2>

        <p
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 800,
            fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.4)',
            lineHeight: 1.7,
            marginBottom: '2rem',
          }}
        >
          The mint page is locked.<br />
          Coming soon for whitelisted Outworlders.
        </p>

        <div
          style={{
            display: 'inline-block',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '100px',
            padding: '8px 24px',
            fontFamily: "'Bangers', cursive",
            fontSize: '0.9rem',
            letterSpacing: '0.15em',
            color: 'rgba(255,255,255,0.35)',
          }}
        >
          COMING SOON
        </div>
      </motion.div>
    </div>
  );
}
