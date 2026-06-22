'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  copy: string;
  tag?: string;
  placeholder?: boolean;
}

interface CaseStudyCardProps {
  project: Project;
  index: number;
}

export default function CaseStudyCard({ project, index }: CaseStudyCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  if (project.placeholder) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.06 }}
        className="relative aspect-square rounded-2xl overflow-hidden flex items-center justify-center"
        style={{
          background: 'rgba(36,40,52,0.6)',
          border: '1px solid rgba(125,83,239,0.08)',
        }}
      >
        <div className="flex flex-col items-center gap-3 opacity-20">
          <div
            className="w-8 h-8 rounded-full border-2"
            style={{ borderColor: 'var(--color-primary)' }}
          />
          <span
            className="text-xs tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-accent)', color: 'var(--color-primary)' }}
          >
            Coming Soon
          </span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative aspect-square rounded-2xl overflow-hidden flex flex-col justify-end p-6 cursor-pointer"
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
      }}
    >
      {/* Category gradient on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: 'var(--gradient-category)' }}
      />

      {/* Purple glow ring on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(125,83,239,0.4)' }}
      />

      {/* Top area: tag */}
      <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
        {project.tag && (
          <span
            className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase"
            style={{
              fontFamily: 'var(--font-accent)',
              background: 'rgba(125,83,239,0.18)',
              color: 'var(--color-primary)',
              border: '1px solid rgba(125,83,239,0.25)',
            }}
          >
            {project.tag}
          </span>
        )}
        {/* Arrow icon */}
        <svg
          className="w-5 h-5 text-white/25 group-hover:text-white/70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ml-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </div>

      {/* Bottom content */}
      <div className="relative z-10">
        <h3
          className="text-lg font-semibold text-white mb-1 group-hover:text-gradient transition-all duration-300"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {project.title}
        </h3>
        <p
          className="text-xs font-semibold mb-3 tracking-wide"
          style={{ fontFamily: 'var(--font-accent)', color: 'var(--color-accent)' }}
        >
          {project.subtitle}
        </p>
        <p
          className="text-xs leading-relaxed text-white/55 line-clamp-4"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {project.copy}
        </p>
      </div>
    </motion.article>
  );
}
