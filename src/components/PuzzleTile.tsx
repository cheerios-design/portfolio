'use client';

import React, { useId } from 'react';
import { motion } from 'framer-motion';

interface PuzzleTileProps {
  variant?: 'cross' | 'bridge' | 'corner' | 'grid';
  color?: string;
  opacity?: number;
  size?: number;
  className?: string;
  animate?: boolean;
}

export default function PuzzleTile({
  variant = 'cross',
  color = '#FF4600',
  opacity = 1,
  size = 200,
  className = '',
  animate = true,
}: PuzzleTileProps) {
  // Use a unique ID for the mask so multiple instances don't conflict
  const maskId = useId();

  const renderShapes = () => {
    switch (variant) {
      case 'cross':
        return (
          <>
            <mask id={maskId}>
              <rect x="0" y="0" width="200" height="200" fill="white" />
              <circle cx="70" cy="70" r="16" fill="black" />
              <circle cx="130" cy="70" r="16" fill="black" />
              <circle cx="70" cy="130" r="16" fill="black" />
              <circle cx="130" cy="130" r="16" fill="black" />
            </mask>
            <g mask={`url(#${maskId})`} fill={color}>
              <rect x="20" y="70" width="160" height="60" rx="24" />
              <rect x="70" y="20" width="60" height="160" rx="24" />
            </g>
          </>
        );
      case 'bridge':
        return (
          <>
            <mask id={maskId}>
              <rect x="0" y="0" width="200" height="200" fill="white" />
              <circle cx="80" cy="85" r="14" fill="black" />
              <circle cx="120" cy="85" r="14" fill="black" />
              <circle cx="80" cy="115" r="14" fill="black" />
              <circle cx="120" cy="115" r="14" fill="black" />
            </mask>
            <g mask={`url(#${maskId})`} fill={color}>
              <rect x="20" y="40" width="60" height="120" rx="24" />
              <rect x="120" y="40" width="60" height="120" rx="24" />
              <rect x="70" y="85" width="60" height="30" />
            </g>
          </>
        );
      case 'corner':
        return (
          <>
            <mask id={maskId}>
              <rect x="0" y="0" width="200" height="200" fill="white" />
              <circle cx="100" cy="100" r="16" fill="black" />
            </mask>
            <g mask={`url(#${maskId})`} fill={color}>
              <rect x="40" y="40" width="60" height="120" rx="24" />
              <rect x="40" y="100" width="120" height="60" rx="24" />
            </g>
          </>
        );
      case 'grid':
        return (
          <g fill={color}>
            <rect x="40" y="40" width="50" height="50" rx="16" />
            <rect x="110" y="40" width="50" height="50" rx="16" />
            <rect x="40" y="110" width="50" height="50" rx="16" />
            <rect x="110" y="110" width="50" height="50" rx="16" />
          </g>
        );
      default:
        return null;
    }
  };

  const svgContent = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={size}
      height={size}
      style={{ opacity }}
      className={`block ${className}`}
      aria-hidden="true"
    >
      {renderShapes()}
    </svg>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ display: 'inline-flex' }}
      >
        {svgContent}
      </motion.div>
    );
  }

  return <div style={{ display: 'inline-flex' }}>{svgContent}</div>;
}
