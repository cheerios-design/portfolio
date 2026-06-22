'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function EliteExteriorsCaseStudy() {
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
            01
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
            Elite Exteriors
          </h1>
          <p style={{ 
            fontFamily: 'var(--font-accent)', 
            color: 'var(--color-accent)', 
            fontSize: '0.9rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.15em', 
            fontWeight: 700 
          }}>
            Purposeful Copywriting & Inbound Storytelling
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
                  <div style={{ fontSize: '0.85rem', color: 'white', fontWeight: 600 }}>Elite Exteriors VA</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>Role</div>
                  <div style={{ fontSize: '0.85rem', color: 'white', fontWeight: 600 }}>Content Creator & Copywriter</div>
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
                  'Inbound Blog Articles',
                  'Editorial Planning',
                  'Reader-Focused SEO',
                  'Layout Coordination',
                  'Conversion Copywriting',
                  'Trust-Building Strategy',
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
                Homeowners facing roofing issues often feel stressed and overwhelmed by options. The client needed helpful, trustworthy content that explained roofing and repair solutions clearly and empathetically, rather than aggressive advertising. The goal was to build a sustainable inbound channel that felt like a trusted advisor, rather than just another commercial company.
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
                Instead of posting generic marketing materials, I researched homeowner concerns and structured an educational content calendar of blog posts. I collaborated closely with our graphic designers and layout specialists to ensure that the final articles were visually structured and easy to read. Each article addressed real questions, incorporating SEO principles naturally so readers could easily find honest answers online.
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
                By publishing search-optimized, reader-first blog posts, the site began capturing high-value traffic directly at the point of decision. Rather than simple traffic gains, the copy was designed with clear micro-conversion hooks (instant quote estimates, inspection scheduling blocks), successfully transforming passive organic searchers into qualified sales inquiries and building a relationship of trust with local homeowners.
              </p>
            </div>
            
          </div>

        </div>

      </div>
    </main>
  );
}
