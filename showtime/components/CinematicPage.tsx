'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CinematicPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero parallax - image moves slower than scroll
      gsap.to('.hero-img', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Hero text fades out on scroll
      gsap.to(heroTextRef.current, {
        opacity: 0,
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: '20% top',
          end: '60% top',
          scrub: true,
        },
      });

      // Gallery horizontal scroll driven by vertical scroll
      if (galleryRef.current) {
        const scrollWidth = galleryRef.current.scrollWidth - window.innerWidth;
        gsap.to(galleryRef.current, {
          x: -scrollWidth,
          ease: 'none',
          scrollTrigger: {
            trigger: '.gallery-pin',
            start: 'top top',
            end: () => `+=${scrollWidth}`,
            scrub: 1,
            pin: true,
          },
        });
      }

      // Services reveal
      gsap.utils.toArray('.service-item').forEach((el, i) => {
        gsap.from(el as Element, {
          opacity: 0,
          y: 60,
          duration: 0.8,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: el as Element,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });

      // Stats counter animation
      gsap.utils.toArray('.stat-number').forEach((el) => {
        gsap.from(el as Element, {
          textContent: 0,
          duration: 2,
          ease: 'power2.out',
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: el as Element,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      });

      // Testimonial cards stagger
      gsap.from('.testimonial-card', {
        opacity: 0,
        y: 80,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.testimonials-section',
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });

      // Final CTA scale-in
      gsap.from(ctaRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section ref={heroRef} style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <div className="hero-img" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image src="/images/birthday.jpg" alt="Showtime celebration" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(5,5,8,0.92) 0%, rgba(5,5,8,0.7) 40%, rgba(5,5,8,0.3) 100%)', zIndex: 1 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,5,8,1) 0%, transparent 30%)', zIndex: 1 }} />

        <div ref={heroTextRef} style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 8%', maxWidth: '700px' }}>
          <p style={{ fontSize: '13px', letterSpacing: '2px', color: 'var(--accent)', marginBottom: '20px', textTransform: 'uppercase' }}>Private Theatre · Pondicherry & Chennai</p>
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '24px' }}>
            Walk in with a plan.<br />
            <span style={{ color: 'var(--accent)' }}>Walk out with a memory.</span>
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '36px', maxWidth: '480px' }}>
            Birthdays. Anniversaries. Proposals. Date nights. Private cinema celebrations that make people cry happy tears.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '20px' }}>
            <a href="/booking" style={{ background: 'var(--accent)', color: '#fff', padding: '16px 32px', borderRadius: '8px', fontSize: '15px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px', transition: 'transform 0.2s, box-shadow 0.2s' }}>
              Book a Celebration
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="https://wa.me/919363799250?text=Hi!%20I%27d%20like%20to%20book%20a%20celebration" target="_blank" rel="noopener noreferrer" style={{ background: 'var(--green)', color: '#fff', padding: '16px 32px', borderRadius: '8px', fontSize: '15px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
              WhatsApp Us
            </a>
          </div>
          <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.6 }}>Starting ₹1,999 · 6–14 guests · Free cancellation 48hrs before</p>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section style={{ padding: '80px 8%', background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap', maxWidth: '900px', margin: '0 auto' }}>
          {[
            { num: '500', suffix: '+', label: 'Celebrations' },
            { num: '4.9', suffix: '★', label: 'Google Rating' },
            { num: '13', suffix: 'K+', label: 'Instagram' },
            { num: '2', suffix: ' Cities', label: 'Locations' },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', fontWeight: 800, color: 'var(--accent)', letterSpacing: '-0.03em', lineHeight: 1 }}>
                <span className="stat-number">{s.num}</span>{s.suffix}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '8px', letterSpacing: '1px', textTransform: 'uppercase' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ GALLERY — Horizontal scroll pinned ═══ */}
      <section className="gallery-pin" style={{ height: '100vh', overflow: 'hidden', background: 'var(--surface)' }}>
        <div ref={galleryRef} style={{ display: 'flex', alignItems: 'center', height: '100%', gap: '24px', paddingLeft: '8%', paddingRight: '200px', width: 'max-content' }}>
          <div style={{ minWidth: '300px', marginRight: '40px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Real celebrations.<br /><span style={{ color: 'var(--muted)' }}>Not stock photos.</span>
            </h2>
            <p style={{ color: 'var(--muted)', marginTop: '16px', fontSize: '15px', maxWidth: '280px', lineHeight: 1.6 }}>Every image is from a real surprise we set up.</p>
          </div>
          {[
            { src: '/images/birthday.jpg', alt: 'Birthday celebration', w: 500, h: 380 },
            { src: '/images/anniversary.jpg', alt: 'Anniversary setup', w: 450, h: 380 },
            { src: '/images/theatre-1.png', alt: 'Theatre interior', w: 420, h: 380 },
            { src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80', alt: 'Party balloons', w: 460, h: 380 },
            { src: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&q=80', alt: 'Celebration lights', w: 480, h: 380 },
            { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80', alt: 'Confetti', w: 440, h: 380 },
          ].map((img, i) => (
            <div key={i} className="img-zoom" style={{ width: `${img.w}px`, height: `${img.h}px`, borderRadius: '16px', overflow: 'hidden', position: 'relative', flexShrink: 0, border: '1px solid var(--border)' }}>
              <Image src={img.src} alt={img.alt} fill style={{ objectFit: 'cover' }} unoptimized={img.src.startsWith('http')} />
            </div>
          ))}
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section ref={servicesRef} style={{ padding: '120px 8%', background: 'var(--bg)', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '80px', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontSize: '36px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '20px' }}>
              We handle<br />everything.
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.8, marginBottom: '28px' }}>
              You show up with the person you want to surprise. We set up the screen, the decorations, the cake, the fog machine — whatever makes them gasp when they walk in.
            </p>
            <a href="https://wa.me/919363799250?text=Hi!%20I%20need%20help%20planning%20a%20celebration" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', fontSize: '15px', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              Tell us what you need
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
            {[
              { title: 'Private Screening', desc: '4K projector, 150" screen, Dolby surround sound. Your movie, your volume.' },
              { title: 'Themed Decorations', desc: 'Balloons, LED strips, neon signs, banners. We match any theme you want.' },
              { title: 'Custom Cakes', desc: 'Photo cakes, fondant designs, eggless options. From ₹499.' },
              { title: 'Fog Entry', desc: 'Smoke machine at the door. They walk in, the fog parts, they see everything.' },
              { title: 'Bouquets & Gifts', desc: 'Fresh roses, mixed arrangements. Wrapped surprise gifts ready on arrival.' },
              { title: 'Photography', desc: 'Candid + posed shots of the reveal moment and celebrations after.' },
              { title: 'Food & Drinks', desc: 'Popcorn, nachos, soft drinks, juice. Full snack platters available.' },
              { title: 'Custom Requests', desc: 'Live guitar? Specific movie? LED name board? Just ask — we make it happen.' },
            ].map((s, i) => (
              <div key={s.title} className="service-item" style={{ padding: '24px', borderBottom: '1px solid var(--border)', borderRight: i % 2 === 0 ? '1px solid var(--border)' : 'none' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '8px', color: '#fff' }}>{s.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="testimonials-section" style={{ padding: '120px 8%', background: 'var(--surface)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ fontSize: '13px', letterSpacing: '2px', color: 'var(--accent)', marginBottom: '16px', textTransform: 'uppercase' }}>What people say</p>
          <h2 style={{ fontSize: '32px', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '48px' }}>After they walk out</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { quote: 'We walked in and my wife started crying. The balloons, the screen playing our wedding video, the cake — everything was perfect.', name: 'Ramesh K.', occasion: 'Anniversary' },
              { quote: 'Booked at 11 PM for the next morning. They still pulled it off beautifully. The fog entry alone was worth it. My friend had no idea.', name: 'Anitha M.', occasion: 'Birthday surprise' },
              { quote: "I've done 4 celebrations here now. Every time the team remembers what I liked last time. That kind of attention is rare.", name: 'Priya S.', occasion: 'Repeat customer' },
            ].map((t, i) => (
              <div key={i} className="testimonial-card" style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '16px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <p style={{ fontSize: '15px', color: '#ccc', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '24px' }}>"{t.quote}"</p>
                <div>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>{t.name}</p>
                  <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>{t.occasion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INSTAGRAM ═══ */}
      <section style={{ padding: '100px 8%', background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '13px', letterSpacing: '2px', color: 'var(--accent)', marginBottom: '16px', textTransform: 'uppercase' }}>@showtime_privatemovietheatre</p>
            <h2 style={{ fontSize: '32px', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '20px' }}>See it happen live</h2>
            <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.7, marginBottom: '28px' }}>234 posts of real celebrations. Real reactions. Real tears of joy. Follow us for daily surprise reveals and behind-the-scenes setups.</p>
            <div style={{ display: 'flex', gap: '24px', marginBottom: '28px' }}>
              <div><span style={{ fontSize: '24px', fontWeight: 700, color: '#fff' }}>13K</span><br /><span style={{ fontSize: '12px', color: 'var(--muted)' }}>followers</span></div>
              <div><span style={{ fontSize: '24px', fontWeight: 700, color: '#fff' }}>234</span><br /><span style={{ fontSize: '12px', color: 'var(--muted)' }}>posts</span></div>
              <div><span style={{ fontSize: '24px', fontWeight: 700, color: '#fff' }}>Daily</span><br /><span style={{ fontSize: '12px', color: 'var(--muted)' }}>reels</span></div>
            </div>
            <a href="https://instagram.com/showtime_privatemovietheatre" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, #833AB4, #FD1D1D, #F77737)', color: '#fff', padding: '14px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: 600 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
              Follow on Instagram
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {['/images/birthday.jpg', '/images/anniversary.jpg', '/images/theatre-1.png', 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&q=80'].map((src, i) => (
              <div key={i} style={{ aspectRatio: '1', borderRadius: '12px', overflow: 'hidden', position: 'relative', border: '1px solid var(--border)' }}>
                <Image src={src} alt="Instagram post" fill style={{ objectFit: 'cover' }} unoptimized={src.startsWith('http')} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.3)', opacity: 0, transition: 'opacity 0.3s' }} onMouseEnter={e => (e.currentTarget.style.opacity = '1')} onMouseLeave={e => (e.currentTarget.style.opacity = '0')}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="white" opacity={0.9}><polygon points="9.5,7.5 16.5,12 9.5,16.5"/></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section ref={ctaRef} style={{ padding: '120px 8%', background: 'linear-gradient(180deg, var(--surface) 0%, var(--bg) 100%)', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '20px' }}>
            Ready to make<br />someone cry?
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '17px', lineHeight: 1.7, marginBottom: '40px' }}>
            The happy kind. Book your private theatre celebration — we handle the rest.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '24px' }}>
            <a href="/booking" className="glow" style={{ background: 'var(--accent)', color: '#fff', padding: '18px 40px', borderRadius: '10px', fontSize: '16px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Book a Celebration
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="https://wa.me/919363799250?text=Hi!%20I%27d%20like%20to%20book" target="_blank" rel="noopener noreferrer" style={{ background: 'var(--green)', color: '#fff', padding: '18px 40px', borderRadius: '10px', fontSize: '16px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
              WhatsApp Us
            </a>
            <a href="tel:+919363799250" style={{ background: 'transparent', color: '#fff', padding: '18px 40px', borderRadius: '10px', fontSize: '16px', fontWeight: 600, border: '1px solid var(--border)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              Call Now
            </a>
          </div>
          <p style={{ fontSize: '13px', color: '#444' }}>₹1,999 onwards · 50% deposit · Free cancellation 48hrs before · Mon–Sun 9am–11pm</p>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ padding: '48px 8%', background: '#030305', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '40px' }}>
          <div>
            <p style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>SHOW<span style={{ color: 'var(--accent)' }}>TIME</span></p>
            <p style={{ fontSize: '13px', color: 'var(--muted)', maxWidth: '250px', lineHeight: 1.6 }}>Private theatre celebrations in Pondicherry. Opening soon in Chennai.</p>
          </div>
          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontSize: '12px', color: '#555', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Contact</p>
              <a href="tel:+919363799250" style={{ display: 'block', fontSize: '14px', color: 'var(--muted)', marginBottom: '8px' }}>+91 9363 799 250</a>
              <a href="https://wa.me/919363799250" target="_blank" rel="noopener noreferrer" style={{ display: 'block', fontSize: '14px', color: 'var(--green)' }}>WhatsApp</a>
            </div>
            <div>
              <p style={{ fontSize: '12px', color: '#555', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Social</p>
              <a href="https://instagram.com/showtime_privatemovietheatre" target="_blank" rel="noopener noreferrer" style={{ display: 'block', fontSize: '14px', color: 'var(--muted)', marginBottom: '8px' }}>Instagram</a>
              <a href="#" style={{ display: 'block', fontSize: '14px', color: 'var(--muted)' }}>Facebook</a>
            </div>
            <div>
              <p style={{ fontSize: '12px', color: '#555', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Pages</p>
              <a href="/about" style={{ display: 'block', fontSize: '14px', color: 'var(--muted)', marginBottom: '8px' }}>About</a>
              <a href="/booking" style={{ display: 'block', fontSize: '14px', color: 'var(--muted)', marginBottom: '8px' }}>Book Now</a>
              <a href="/terms" style={{ display: '14px', color: 'var(--muted)' }}>Terms</a>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: '1100px', margin: '32px auto 0', paddingTop: '24px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#444' }}>
          <span>© 2026 Showtime Private Theatre. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="/terms" style={{ color: '#444' }}>Terms</a>
            <a href="/privacy" style={{ color: '#444' }}>Privacy</a>
            <a href="/refund" style={{ color: '#444' }}>Refund Policy</a>
          </div>
        </div>
      </footer>

      {/* ═══ FLOATING WHATSAPP ═══ */}
      <a href="https://wa.me/919363799250?text=Hi!%20I%27d%20like%20to%20book%20a%20celebration" target="_blank" rel="noopener noreferrer" style={{ position: 'fixed', bottom: '24px', right: '24px', width: '56px', height: '56px', borderRadius: '50%', background: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(37,211,102,0.4)', zIndex: 999, transition: 'transform 0.2s' }} onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')} onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
      </a>

      {/* Mobile responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .gallery-pin { height: auto !important; }
          section > div[style*="grid-template-columns: 1fr 1.5fr"] { grid-template-columns: 1fr !important; gap: 40px !important; }
          section > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          section > div[style*="grid-template-columns: repeat(3"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
