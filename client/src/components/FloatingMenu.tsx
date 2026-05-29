import { useState } from 'react';
import { useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  { label: 'HOME',       path: '/home' },
  { label: 'GALLERY',    path: '/gallery' },
  { label: 'APPLY WL',   path: '/apply' },
  { label: 'CHECK ROLE', path: '/check-role' },
  { label: 'MINT',       path: '/mint' },
];

function MenuList({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {menuItems.map((item, i) => (
        <motion.button
          key={item.label}
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.07, duration: 0.3 }}
          onClick={() => onNavigate(item.path)}
          style={{
            background: 'rgba(235,228,220,0.92)',
            border: 'none',
            borderRadius: '16px',
            padding: '14px 28px',
            fontFamily: "'Bangers', cursive",
            fontSize: '1.1rem',
            letterSpacing: '0.08em',
            color: item.label === 'MINT' ? '#999' : '#1a1a1a',
            background: item.label === 'MINT' ? 'rgba(200,195,190,0.7)' : 'rgba(235,228,220,0.92)',
            cursor: 'pointer',
            minWidth: '160px',
            textAlign: 'left',
            boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
            transition: 'transform 0.15s',
          } as React.CSSProperties}
          onMouseEnter={e => {
            if (item.label !== 'MINT')
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateX(6px)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.transform = 'translateX(0)';
          }}
        >
          {item.label}
          {item.label === 'MINT' && (
            <span style={{
              display: 'block',
              fontSize: '0.55rem',
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
              letterSpacing: '0.15em',
              color: '#aaa',
              marginTop: '2px',
            }}>
              COMING SOON
            </span>
          )}
        </motion.button>
      ))}
    </div>
  );
}

// ── Used on Home — always visible, no toggle ──────────────────────────────────
export function StaticMenu({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '2rem 1.5rem',
      }}
    >
      <MenuList onNavigate={onNavigate} />
    </motion.div>
  );
}

// ── Used on inner pages — floating toggle button ──────────────────────────────
export function FloatingMenu({ onNavigate }: { onNavigate: (path: string) => void }) {
  const [open, setOpen] = useState(false);

  const navigate = (path: string) => {
    setOpen(false);
    onNavigate(path);
  };

  return (
    <>
      {/* Floating toggle button */}
      <motion.button
        onClick={() => setOpen(p => !p)}
        whileTap={{ scale: 0.92 }}
        style={{
          position: 'fixed',
          top: '1rem',
          left: '1rem',
          zIndex: 100,
          width: '44px',
          height: '44px',
          borderRadius: '12px',
          background: 'rgba(235,228,220,0.92)',
          border: 'none',
          boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '5px',
        }}
      >
        <motion.span
          animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.22 }}
          style={{ display: 'block', width: '18px', height: '2px', background: '#1a1a1a', borderRadius: '2px' }}
        />
        <motion.span
          animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.18 }}
          style={{ display: 'block', width: '18px', height: '2px', background: '#1a1a1a', borderRadius: '2px' }}
        />
        <motion.span
          animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.22 }}
          style={{ display: 'block', width: '18px', height: '2px', background: '#1a1a1a', borderRadius: '2px' }}
        />
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,0.45)',
                zIndex: 90,
              }}
            />

            {/* Slide-in panel */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                bottom: 0,
                zIndex: 95,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '2rem 1.5rem',
                background: 'rgba(60,20,20,0.97)',
              }}
            >
              <MenuList onNavigate={navigate} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
