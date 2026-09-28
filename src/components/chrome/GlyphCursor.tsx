'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

type Mode = 'default' | 'link' | 'label' | 'hidden';

const SHAPES: Record<Mode, { width: number; height: number; borderRadius: number }> = {
  default: { width: 12, height: 12, borderRadius: 4 },
  link: { width: 52, height: 52, borderRadius: 16 },
  label: { width: 96, height: 96, borderRadius: 30 },
  hidden: { width: 0, height: 0, borderRadius: 0 },
};

// A single glyph "cell" that follows the pointer; grows over links and shows a label over [data-cursor]
const QUERY = '(pointer: fine) and (prefers-reduced-motion: no-preference)';
const subscribe = (cb: () => void) => {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener('change', cb);
  return () => mq.removeEventListener('change', cb);
};

export default function GlyphCursor() {
  const enabled = useSyncExternalStore(subscribe, () => window.matchMedia(QUERY).matches, () => false);
  const [mode, setMode] = useState<Mode>('default');
  const [label, setLabel] = useState('');
  const [pressed, setPressed] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 600, damping: 42, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 600, damping: 42, mass: 0.4 });

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add('has-glyph-cursor');

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const over = (e: MouseEvent) => {
      const el = (e.target as Element).closest('[data-cursor], a, button, input, textarea, select, label');
      if (!el) return setMode('default');
      if (el.matches('input, textarea, select')) return setMode('hidden');
      const text = el.getAttribute('data-cursor');
      if (text) {
        setLabel(text);
        setMode('label');
      } else {
        setMode('link');
      }
    };
    const leave = () => setVisible(false);
    const down = () => setPressed(true);
    const up = () => setPressed(false);

    window.addEventListener('pointermove', move);
    document.addEventListener('mouseover', over);
    document.documentElement.addEventListener('mouseleave', leave);
    window.addEventListener('pointerdown', down);
    window.addEventListener('pointerup', up);
    return () => {
      document.documentElement.classList.remove('has-glyph-cursor');
      window.removeEventListener('pointermove', move);
      document.removeEventListener('mouseover', over);
      document.documentElement.removeEventListener('mouseleave', leave);
      window.removeEventListener('pointerdown', down);
      window.removeEventListener('pointerup', up);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const isLabel = mode === 'label';

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{ x: sx, y: sy, mixBlendMode: isLabel ? 'normal' : 'difference' }}
      animate={{ opacity: visible ? 1 : 0 }}
    >
      <motion.div
        className="absolute grid place-items-center overflow-hidden"
        style={{ translate: '-50% -50%', borderStyle: 'solid', borderColor: 'var(--color-lime)' }}
        animate={{
          ...SHAPES[mode],
          scale: pressed ? 0.8 : 1,
          backgroundColor: mode === 'link' ? 'rgba(212,255,31,0)' : 'rgba(212,255,31,1)',
          borderWidth: mode === 'link' ? 1.5 : 0,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
        initial={false}
      >
        <motion.span
          className="label relative text-ink"
          style={{ fontSize: '0.68rem', fontWeight: 700 }}
          animate={{ opacity: isLabel ? 1 : 0, scale: isLabel ? 1 : 0.6 }}
        >
          {label}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
