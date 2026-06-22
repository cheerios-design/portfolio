'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BaibuCinemaCaseStudy() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--color-base)', padding: '6rem 24px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Navigation */}
        <Link href="/" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: 'var(--font-accent)',
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          color: 'rgba(255,255,255,0.4)',
          textDecoration: 'none',
          marginBottom: '4rem',
          transition: 'color 0.2s',
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
        onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
        >
          ← Back to Systems
        </Link>
        
        {/* Hero Section */}
        <div style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '3rem', marginBottom: '3rem' }}>
          <div style={{ 
            fontSize: 'clamp(3rem, 7vw, 6rem)', 
            fontFamily: 'var(--font-heading)', 
            color: 'transparent', 
            WebkitTextStroke: '1px rgba(255,255,255,0.1)', 
            userSelect: 'none', 
            lineHeight: 1 
          }}>
            03
          </div>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 5vw, 4rem)', 
            fontFamily: 'var(--font-heading)', 
            color: 'white', 
            textTransform: 'uppercase', 
            marginTop: '1rem', 
            marginBottom: '1.5rem', 
            lineHeight: 1.1 
          }}>
            BAIBÜ Cinema & DMS
          </h1>
          <p style={{ 
            fontFamily: 'var(--font-accent)', 
            color: 'var(--color-accent)', 
            fontSize: '0.9rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.15em', 
            fontWeight: 700 
          }}>
            Creative Brand Storytelling & Multichannel Publishing
          </p>
        </div>

        {/* Content Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '48px', 
          alignItems: 'start' 
        }}>
          
          {/* Sidebar Metrics/Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* Meta Card */}
            <div style={{ 
              background: 'var(--color-surface)', 
              border: '1px solid var(--color-border)', 
              padding: '24px', 
              borderRadius: '12px' 
            }}>
              <h3 style={{ 
                fontFamily: 'var(--font-accent)', 
                fontSize: '0.7rem', 
                color: 'rgba(255,255,255,0.3)', 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em', 
                marginBottom: '16px' 
              }}>
                Project Info
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>Client</div>
                  <div style={{ fontSize: '0.85rem', color: 'white', fontWeight: 600 }}>BAIBÜ Cinema Club</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>Role</div>
                  <div style={{ fontSize: '0.85rem', color: 'white', fontWeight: 600 }}>Visual Storyteller & Brand Designer</div>
                </div>
              </div>
            </div>

            {/* Deliverables Card */}
            <div style={{ 
              background: 'var(--color-surface)', 
              border: '1px solid var(--color-border)', 
              padding: '24px', 
              borderRadius: '12px' 
            }}>
              <h3 style={{ 
                fontFamily: 'var(--font-accent)', 
                fontSize: '0.7rem', 
                color: 'rgba(255,255,255,0.3)', 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em', 
                marginBottom: '16px' 
              }}>
                Deliverables
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Brand Identity Guidelines',
                  'Cohesive Layout Design',
                  'Cinema Review Writing',
                  'Visual Standards',
                  'Multichannel Publishing',
                  'Student Engagement',
                ].map((deliv) => (
                  <li key={deliv} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>
                    <span style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>✓</span> {deliv}
                  </li>
                ))}
              </ul>
            </div>
            
          </div>

          {/* Main Case Study Copy */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '48px', 
            fontFamily: 'var(--font-body)', 
            fontSize: '0.95rem', 
            color: 'rgba(255,255,255,0.7)', 
            lineHeight: 1.8 
          }}>
            
            <div>
              <h2 style={{ 
                fontFamily: 'var(--font-heading)', 
                color: 'white', 
                fontSize: '1.5rem', 
                textTransform: 'uppercase', 
                marginBottom: '1rem',
                borderLeft: '3px solid var(--color-primary)',
                paddingLeft: '12px'
              }}>
                The Challenge
              </h2>
              <p>
                The cinema and campus media club had a passionate core group of students, but struggled to share its excitement with the wider university student body. It lacked a cohesive visual identity and a clear layout strategy, making it difficult to spread awareness about events, reviews, and film screening schedules.
              </p>
            </div>

            <div>
              <h2 style={{ 
                fontFamily: 'var(--font-heading)', 
                color: 'white', 
                fontSize: '1.5rem', 
                textTransform: 'uppercase', 
                marginBottom: '1rem',
                borderLeft: '3px solid var(--color-primary)',
                paddingLeft: '12px'
              }}>
                The Strategy
              </h2>
              <p>
                I developed a brand identity guidelines booklet that captured the artistic, community-driven spirit of the club. I coordinated closely with our design team to design visual templates and layout assets for campus posters and social graphics. I then wrote engaging film reviews, student-centered articles, and promotional campaigns to establish a friendly, conversational brand voice.
              </p>
            </div>

            <div>
              <h2 style={{ 
                fontFamily: 'var(--font-heading)', 
                color: 'white', 
                fontSize: '1.5rem', 
                textTransform: 'uppercase', 
                marginBottom: '1rem',
                borderLeft: '3px solid var(--color-primary)',
                paddingLeft: '12px'
              }}>
                Execution & Results
              </h2>
              <p>
                The new brand identity and coordinated layouts transformed the club into a prominent campus media entity. Engagement and student discussions on social channels grew significantly. Attracting new members became easy, and the club event nights became highly-attended social hubs, fostering student connection and community on campus.
              </p>
            </div>
            
          </div>

        </div>

      </div>
    </main>
  );
}
