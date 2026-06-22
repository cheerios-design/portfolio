'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function RisingGenerationCaseStudy() {
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
            02
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
            Rising Generation
          </h1>
          <p style={{ 
            fontFamily: 'var(--font-accent)', 
            color: 'var(--color-accent)', 
            fontSize: '0.9rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.15em', 
            fontWeight: 700 
          }}>
            Global Community Engagement & Cross-Cultural Storytelling
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
                  <div style={{ fontSize: '0.85rem', color: 'white', fontWeight: 600 }}>Rising Gen Europe</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>Role</div>
                  <div style={{ fontSize: '0.85rem', color: 'white', fontWeight: 600 }}>Community Coordinator & Cross-Cultural Writer</div>
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
                  'Student & Mentor Interviews',
                  'Multi-Cultural Content',
                  'Global Engagement',
                  'Newsletter Campaigns',
                  'Social Storytelling',
                  'Team Collaboration',
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
                Rising Gen Europe connects young adults from dozens of countries and languages. The organization struggled to build deep, personal connections and maintain a unified digital communication system. They needed an inspiring, cross-border storytelling approach to help members feel welcome and motivate them to participate in large-scale summits and events.
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
                Instead of focusing on broadcast announcements, I centered our content on the community members themselves. I conducted interviews with students, mentors, and local leaders to bring authentic, personal stories to the forefront. I drafted engaging social media campaigns and structured newsletter updates that celebrated cultural diversity, and designed template packages so regional leaders could easily share updates in their own community spaces.
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
                The story-driven approach created a supportive and cohesive online community. By highlighting student journeys and mentor perspectives, we saw significantly higher registrations and check-ins at global summits. Sharing authentic voices created a lasting sense of belonging and collaboration, strengthening community bonds across Europe.
              </p>
            </div>
            
          </div>

        </div>

      </div>
    </main>
  );
}
