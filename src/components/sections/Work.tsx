'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import GlyphText from '../glyph/GlyphText';
import Glyph from '../glyph/Glyph';
import SectionHeader from './SectionHeader';
import { PROJECTS } from '@/lib/site';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Work() {
  const [active, setActive] = useState<number | null>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 24 });
  const sy = useSpring(y, { stiffness: 200, damping: 24 });

  const onMove = (e: React.PointerEvent) => {
    const r = listRef.current?.getBoundingClientRect();
    if (!r) return;
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
  };

  const project = active !== null ? PROJECTS[active] : null;

  return (
    <section id="work" className="relative bg-ink px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader index="04" note="Selected projects" title="WORK" count="03" size="min(24vw, 15rem)" />

        <ul ref={listRef} className="relative" onPointerMove={onMove} onPointerLeave={() => setActive(null)}>
          {/* Preview tile that trails the cursor */}
          <AnimatePresence>
            {project && (
              <motion.div
                key="preview"
                className="pointer-events-none absolute left-0 top-0 z-20 hidden md:block"
                style={{ x: sx, y: sy }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <div
                  className="flex h-64 w-56 flex-col justify-between rounded-[32px] bg-lime p-5 text-ink"
                  style={{ translate: '-50% -55%', rotate: '-6deg' }}
                >
                  <span className="label font-bold">{project.num} / 03</span>
                  <div className="grid place-items-center">
                    <Glyph key={project.slug} shapes={[project.icon, 'sparkle']} size={110} interval={1400} />
                  </div>
                  <span className="note">{project.client}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {PROJECTS.map((p, i) => {
            const isActive = active === i;
            const dimmed = active !== null && !isActive;
            return (
              <motion.li
                key={p.slug}
                className="border-t border-ink-3 last:border-b"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8% 0px' }}
                transition={{ duration: 0.8, ease: EASE, delay: i * 0.1 }}
              >
                <Link
                  href={`/pages/${p.slug}`}
                  data-cursor="View"
                  onPointerEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  className="grid grid-cols-[auto_1fr] items-center gap-x-6 gap-y-4 py-10 transition-opacity duration-300 sm:gap-x-12 md:grid-cols-[auto_1fr_auto] md:py-14"
                  style={{ opacity: dimmed ? 0.35 : 1 }}
                >
                  <GlyphText
                    text={p.num}
                    size="clamp(3rem, 8vw, 7rem)"
                    hovered={isActive}
                    decorative
                    className={`transition-colors duration-300 ${isActive ? 'text-lime' : 'text-paper/20'}`}
                  />
                  <motion.div animate={{ x: isActive ? 16 : 0 }} transition={{ duration: 0.5, ease: EASE }}>
                    <span className="label mb-3 block text-lime">{p.subtitle}</span>
                    <h3 className="font-display text-[clamp(2rem,5vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-tight">
                      {p.title}
                    </h3>
                  </motion.div>
                  <div className="col-span-2 flex flex-col gap-5 md:col-span-1 md:max-w-xs md:items-end md:text-right">
                    <p className="leading-relaxed text-mute">{p.summary}</p>
                    <span className="label flex items-center gap-3 text-paper">
                      Case study
                      <motion.span
                        className="grid h-9 w-9 place-items-center rounded-full border border-lime/40 text-lime"
                        animate={{ rotate: isActive ? -45 : 0, backgroundColor: isActive ? 'rgba(212,255,31,1)' : 'rgba(212,255,31,0)', color: isActive ? '#0c0d0a' : '#d4ff1f' }}
                        transition={{ duration: 0.4, ease: EASE }}
                      >
                        <Glyph shapes={['arrowRight']} size={14} radius={0.5} />
                      </motion.span>
                    </span>
                  </div>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
