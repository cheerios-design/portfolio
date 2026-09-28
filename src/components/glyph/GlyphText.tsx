'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion, type Variants } from 'framer-motion';
import { buildCells, hash, type Cell } from '@/lib/glyph/geometry';
import { ASCENT, CAP, glyphFor } from '@/lib/glyph/font';

const EASE = [0.22, 1, 0.36, 1] as const;
const SPREAD = 0.7; // seconds the build-in sweeps across a line

type Piece = Cell & { kind: 'body' | 'fillet'; delay: number; hoverDelay: number };
type Ctx = { p: Piece; entered: boolean; reduce: boolean };

const variants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  fused: ({ p, entered, reduce }: Ctx) =>
    p.kind === 'body'
      ? {
          opacity: 1,
          scale: 1,
          d: p.body,
          transition: reduce ? { duration: 0 } : { duration: 0.55, ease: EASE, delay: entered ? p.hoverDelay : p.delay },
        }
      : {
          opacity: 1,
          transition: reduce ? { duration: 0 } : { duration: 0.3, delay: (entered ? p.hoverDelay : p.delay) + 0.2 },
        },
  // Hover state: letters dissolve back into their dot-matrix grid
  dots: ({ p }: Ctx) =>
    p.kind === 'body'
      ? { opacity: 1, scale: 0.8, d: p.dot, transition: { duration: 0.35, ease: EASE, delay: p.hoverDelay } }
      : { opacity: 0, transition: { duration: 0.15 } },
};

function layout(text: string, radius: number, align: 'left' | 'center' | 'right', tracking: number, leading: number) {
  const lines = text.toUpperCase().split('\n').map((line) => {
    const glyphs = [...line].map(glyphFor);
    const width = glyphs.reduce((w, g) => w + g[0].length, 0) + Math.max(0, glyphs.length - 1) * tracking;
    const tall = glyphs.some((g) => g.length > CAP);
    return { glyphs, width, tall };
  });

  const width = Math.max(...lines.map((l) => l.width));
  const pieces: Piece[] = [];
  let y = 0;

  lines.forEach((line, li) => {
    const capTop = y + (line.tall ? ASCENT : 0);
    let x = align === 'left' ? 0 : align === 'center' ? (width - line.width) / 2 : width - line.width;

    for (const g of line.glyphs) {
      for (const c of buildCells(g, radius, x, capTop - (g.length - CAP))) {
        if (!c.filled && !c.hasFillet) continue;
        pieces.push({
          ...c,
          kind: c.filled ? 'body' : 'fillet',
          delay: (c.x / width) * SPREAD + hash(c.x, c.y) * 0.25 + li * 0.12,
          hoverDelay: (c.x / width) * 0.25 + hash(c.y, c.x) * 0.05,
        });
      }
      x += g[0].length + tracking;
    }
    y = capTop + CAP + leading;
  });

  return { pieces, width, height: y - leading };
}

interface GlyphTextProps {
  text: string;
  as?: React.ElementType;
  /** Cap height (CSS length) when fit="height" */
  size?: string;
  /** "height": size by cap height; "width": stretch to the container's width */
  fit?: 'height' | 'width';
  align?: 'left' | 'center' | 'right';
  /** Dissolve into dots when hovered */
  interactive?: boolean;
  /** Controlled hover state (e.g. when the whole row is hovered) */
  hovered?: boolean;
  delay?: number;
  radius?: number;
  tracking?: number;
  leading?: number;
  /** Skip the screen-reader copy (when a parent already provides the text) */
  decorative?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function GlyphText({
  text,
  as: Tag = 'span',
  size = '4rem',
  fit = 'height',
  align = 'left',
  interactive = false,
  hovered,
  delay = 0,
  radius = 0.5,
  tracking = 1,
  leading = 2,
  decorative = false,
  className = '',
  style,
}: GlyphTextProps) {
  const ref = useRef<SVGSVGElement>(null);
  const reduce = !!useReducedMotion();
  const inView = useInView(ref, { once: true, margin: '-6% 0px' });
  const [entered, setEntered] = useState(false);
  const [selfHover, setSelfHover] = useState(false);

  const { pieces, width, height } = useMemo(
    () => layout(text, radius, align, tracking, leading),
    [text, radius, align, tracking, leading]
  );

  useEffect(() => {
    if (!inView || entered) return;
    const t = setTimeout(() => setEntered(true), (delay + SPREAD + 1) * 1000);
    return () => clearTimeout(t);
  }, [inView, entered, delay]);

  const isHovered = hovered ?? (interactive && selfHover);
  const state = !inView && !reduce ? 'hidden' : isHovered ? 'dots' : 'fused';
  const ratio = width / height;

  return (
    <Tag className={`block ${className}`} style={style}>
      {!decorative && <span className="sr-only">{text}</span>}
      <motion.svg
        ref={ref}
        viewBox={`-0.05 -0.05 ${width + 0.1} ${height + 0.1}`}
        aria-hidden="true"
        initial={reduce ? false : 'hidden'}
        animate={state}
        onHoverStart={interactive ? () => setSelfHover(true) : undefined}
        onHoverEnd={interactive ? () => setSelfHover(false) : undefined}
        style={{
          display: 'block',
          overflow: 'visible',
          aspectRatio: `${width + 0.1} / ${height + 0.1}`,
          height: 'auto',
          width: fit === 'width' ? '100%' : `calc(${size} * ${ratio.toFixed(4)})`,
          maxWidth: '100%',
          marginLeft: align === 'left' ? undefined : 'auto',
          marginRight: align === 'center' ? 'auto' : undefined,
        }}
      >
        {pieces.map((p, i) => (
          <motion.path
            key={i}
            custom={{ p: { ...p, delay: p.delay + delay }, entered, reduce }}
            variants={variants}
            d={p.kind === 'body' ? p.body : p.fillet}
            fill="currentColor"
            stroke="currentColor"
            strokeWidth={0.03}
            style={p.kind === 'body' ? { transformBox: 'fill-box', transformOrigin: 'center' } : undefined}
          />
        ))}
      </motion.svg>
    </Tag>
  );
}
