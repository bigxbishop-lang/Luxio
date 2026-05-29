import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Set your target date here
const TARGET_DATE = new Date('2026-06-05T00:00:00Z');

function useCountdown(target: Date) {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      done:    diff === 0,
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Mint() {
  const [, navigate] = useLocation();
  const { days, hours, minutes, seconds, done } = useCountdown(TARGET_DATE);

  const timeString = done
    ? '0:00:00:00'
    : `${days}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

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

        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          style={{
            background: '#FF4444',
            borderRadius: '16px',
            padding: '16px 40px',
            fontFamily: "'Bangers', cursive",
            fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
            color: '#FFFFFF',
            letterSpacing: '0.05em',
            minWidth: '240px',
            textAlign: 'center',
            lineHeight: 1,
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          }}
        >
          {timeString}
        </motion.div>
      </motion.div>
    </div>
  );
}
