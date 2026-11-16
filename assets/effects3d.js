/**
 * St. Thomas Church Chempu - 3D Interactive Dots Engine, 3D Tilt & Security Utilities
 * Includes: 3D perspective particle constellation, 3D card tilt with glare, 3D scroll reveal, Lazy Loading
 */

(function() {
  'use strict';

  // =========================================================================
  // 1. INTERACTIVE 3D PARTICLES / DOTS CANVAS
  // =========================================================================
  class DotsSpace3D {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');
      if (!this.ctx) return;

      this.particles = [];
      this.numParticles = window.innerWidth < 768 ? 65 : 120;
      this.fov = 380;
      this.maxConnectDist = window.innerWidth < 768 ? 85 : 110;

      this.angleX = 0;
      this.angleY = 0;
      this.targetAngleX = 0;
      this.targetAngleY = 0;

      this.mouseX = 0;
      this.mouseY = 0;
      this.isMouseMoving = false;
      this.mouseTimeout = null;

      this.width = 0;
      this.height = 0;
      this.centerX = 0;
      this.centerY = 0;
      this.animId = null;
      this.isRunning = false;

      this.init();
    }

    init() {
      this.resize();
      this.createParticles();
      this.bindEvents();
      this.start();
    }

    resize() {
      const rect = this.canvas.parentElement ? this.canvas.parentElement.getBoundingClientRect() : { width: window.innerWidth, height: window.innerHeight };
      this.width = this.canvas.width = rect.width;
      this.height = this.canvas.height = rect.height;
      this.centerX = this.width / 2;
      this.centerY = this.height / 2;
    }

    createParticles() {
      this.particles = [];
      const spreadX = Math.min(this.width * 0.9, 800);
      const spreadY = Math.min(this.height * 0.9, 500);
      const spreadZ = 600;

      for (let i = 0; i < this.numParticles; i++) {
        // Distribute in 3D ellipsoidal space
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);
        const r = Math.cbrt(Math.random()); // cubic root for uniform volume distribution

        const x = (r * Math.sin(phi) * Math.cos(theta)) * (spreadX * 0.5);
        const y = (r * Math.sin(phi) * Math.sin(theta)) * (spreadY * 0.5);
        const z = (r * Math.cos(phi)) * (spreadZ * 0.5);

        this.particles.push({
          x: x,
          y: y,
          z: z,
          baseRadius: Math.random() * 2.2 + 1.2,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          vz: (Math.random() - 0.5) * 0.4,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.03 + 0.015,
          isGold: Math.random() > 0.3
        });
      }
    }

    bindEvents() {
      window.addEventListener('resize', () => {
        this.resize();
      }, { passive: true });

      const hero = this.canvas.closest('.hero-section') || this.canvas.parentElement || window;
      hero.addEventListener('mousemove', (e) => {
        const rect = this.canvas.getBoundingClientRect();
        this.mouseX = e.clientX - rect.left;
        this.mouseY = e.clientY - rect.top;

        // Subtle 3D angular shift based on mouse relative to center
        this.targetAngleY = ((this.mouseX - this.centerX) / this.centerX) * 0.45;
        this.targetAngleX = -((this.mouseY - this.centerY) / this.centerY) * 0.35;

        this.isMouseMoving = true;
        clearTimeout(this.mouseTimeout);
        this.mouseTimeout = setTimeout(() => {
          this.isMouseMoving = false;
        }, 1200);
      }, { passive: true });

      // Touch listener for mobile devices
      hero.addEventListener('touchmove', (e) => {
        if (e.touches && e.touches[0]) {
          const rect = this.canvas.getBoundingClientRect();
          this.mouseX = e.touches[0].clientX - rect.left;
          this.mouseY = e.touches[0].clientY - rect.top;
          this.targetAngleY = ((this.mouseX - this.centerX) / this.centerX) * 0.4;
          this.targetAngleX = -((this.mouseY - this.centerY) / this.centerY) * 0.3;
        }
      }, { passive: true });

      // Performance: Pause when not visible in viewport
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.start();
            } else {
              this.stop();
            }
          });
        }, { threshold: 0.05 });
        observer.observe(this.canvas);
      }
    }

    start() {
      if (!this.isRunning) {
        this.isRunning = true;
        this.render = this.render.bind(this);
        this.animId = requestAnimationFrame(this.render);
      }
    }

    stop() {
      this.isRunning = false;
      if (this.animId) {
        cancelAnimationFrame(this.animId);
        this.animId = null;
      }
    }

    getThemeColors() {
      const styles = getComputedStyle(document.documentElement);
      const gold = styles.getPropertyValue('--gold-primary').trim() || '#d4a34b';
      const glow = styles.getPropertyValue('--gold-glow').trim() || '#eec578';
      const primaryLight = styles.getPropertyValue('--primary-light').trim() || '#28448f';
      return { gold, glow, primaryLight };
    }

    render() {
      if (!this.isRunning) return;

      this.ctx.clearRect(0, 0, this.width, this.height);

      // Smooth damping interpolation for mouse tilt + constant gentle drift
      this.angleX += (this.targetAngleX - this.angleX) * 0.05 + 0.0008;
      this.angleY += (this.targetAngleY - this.angleY) * 0.05 + 0.0012;

      const cosY = Math.cos(this.angleY);
      const sinY = Math.sin(this.angleY);
      const cosX = Math.cos(this.angleX);
      const sinX = Math.sin(this.angleX);

      const colors = this.getThemeColors();

      // Project each particle to 2D
      const projected = [];

      for (let i = 0; i < this.particles.length; i++) {
        const p = this.particles[i];

        // Animate internal slow 3D drift
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;
        p.pulse += p.pulseSpeed;

        // Soft boundaries bounce
        const limitX = this.width * 0.45;
        const limitY = this.height * 0.45;
        const limitZ = 280;

        if (p.x < -limitX || p.x > limitX) p.vx *= -1;
        if (p.y < -limitY || p.y > limitY) p.vy *= -1;
        if (p.z < -limitZ || p.z > limitZ) p.vz *= -1;

        // 3D Rotation Matrix Math
        // Rotate around Y axis
        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;

        // Rotate around X axis
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        // Perspective projection
        const depth = this.fov + z2;
        if (depth <= 10) continue; // behind camera

        const scale = this.fov / depth;
        const projX = this.centerX + x1 * scale;
        const projY = this.centerY + y2 * scale;

        // Pulse scale
        const pulseFactor = 1 + Math.sin(p.pulse) * 0.2;
        const radius = Math.max(0.6, p.baseRadius * scale * pulseFactor);
        const alpha = Math.min(1, Math.max(0.12, (scale * 0.85) * (1 - z2 / 500)));

        projected.push({
          p,
          projX,
          projY,
          z2,
          scale,
          radius,
          alpha,
          isGold: p.isGold
        });
      }

      // Sort by depth (painter's algorithm) so front particles render over back ones
      projected.sort((a, b) => b.z2 - a.z2);

      // Draw 3D connecting lines between close points
      const len = projected.length;
      for (let i = 0; i < len; i++) {
        const pi = projected[i];
        for (let j = i + 1; j < len; j++) {
          const pj = projected[j];

          // 3D Euclidean distance
          const dx = pi.p.x - pj.p.x;
          const dy = pi.p.y - pj.p.y;
          const dz = pi.p.z - pj.p.z;
          const dist3D = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist3D < this.maxConnectDist) {
            const lineAlpha = (1 - dist3D / this.maxConnectDist) * Math.min(pi.alpha, pj.alpha) * 0.38;
            this.ctx.beginPath();
            this.ctx.moveTo(pi.projX, pi.projY);
            this.ctx.lineTo(pj.projX, pj.projY);
            this.ctx.strokeStyle = `rgba(212, 163, 75, ${lineAlpha.toFixed(3)})`;
            this.ctx.lineWidth = Math.max(0.4, (pi.scale + pj.scale) * 0.5);
            this.ctx.stroke();
          }
        }
      }

      // Draw 3D glowing dots
      for (let i = 0; i < len; i++) {
        const pt = projected[i];

        // Draw soft outer halo for foreground particles
        if (pt.scale > 0.8) {
          const haloGrad = this.ctx.createRadialGradient(
            pt.projX, pt.projY, 0,
            pt.projX, pt.projY, pt.radius * 3.5
          );
          haloGrad.addColorStop(0, `rgba(238, 197, 120, ${(pt.alpha * 0.5).toFixed(3)})`);
          haloGrad.addColorStop(1, 'rgba(212, 163, 75, 0)');
          this.ctx.beginPath();
          this.ctx.arc(pt.projX, pt.projY, pt.radius * 3.5, 0, Math.PI * 2);
          this.ctx.fillStyle = haloGrad;
          this.ctx.fill();
        }

        // Draw bright central core
        this.ctx.beginPath();
        this.ctx.arc(pt.projX, pt.projY, pt.radius, 0, Math.PI * 2);
        if (pt.isGold) {
          this.ctx.fillStyle = `rgba(238, 197, 120, ${pt.alpha.toFixed(3)})`;
        } else {
          this.ctx.fillStyle = `rgba(255, 255, 255, ${(pt.alpha * 0.9).toFixed(3)})`;
        }
        this.ctx.fill();
      }

      this.animId = requestAnimationFrame(this.render);
    }
  }

  // =========================================================================
  // 2. INTERACTIVE 3D CARD TILT WITH PERSPECTIVE & GLARE
  // =========================================================================
  function init3DCardTilt() {
    // Select cards for 3D tilt
    const cardSelectors = [
      '.mass-card',
      '.assoc-card',
      '.institution-card',
      '.sd-convent-card',
      '.filial-church-card',
      '.kandathil-compact-card',
      '.archbishop-portrait-frame',
      '.pillar-card'
    ];

    const cards = document.querySelectorAll(cardSelectors.join(', '));
    if (!cards.length) return;

    cards.forEach(card => {
      card.classList.add('tilt-3d-card');

      // Create glare overlay element if not present
      let glare = card.querySelector('.tilt-glare');
      if (!glare) {
        glare = document.createElement('div');
        glare.className = 'tilt-glare';
        card.appendChild(glare);
      }

      let bounds = null;

      card.addEventListener('mouseenter', () => {
        bounds = card.getBoundingClientRect();
      });

      card.addEventListener('mousemove', (e) => {
        if (!bounds) bounds = card.getBoundingClientRect();
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;

        const centerX = bounds.width / 2;
        const centerY = bounds.height / 2;

        const rotateX = -((y - centerY) / centerY) * 7.5; // max tilt degrees
        const rotateY = ((x - centerX) / centerX) * 7.5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;

        // Move glare reflection
        const glareX = (x / bounds.width) * 100;
        const glareY = (y / bounds.height) * 100;
        glare.style.opacity = '1';
        glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 65%)`;
      }, { passive: true });

      card.addEventListener('mouseleave', () => {
        bounds = null;
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        glare.style.opacity = '0';
      });
    });
  }

  // =========================================================================
  // 3. 3D SCROLL REVEAL (Perspective Fade & Tilt on Scroll)
  // =========================================================================
  function init3DScrollReveal() {
    const targets = document.querySelectorAll(`
      .section-title-wrap,
      .history-layout,
      .kandathil-compact-card,
      .mass-cards-grid > *,
      .featured-festival-card,
      .gallery-grid > *,
      .sd-convent-card,
      .filial-church-card,
      .institutions-grid > *,
      .pious-associations-grid > *,
      .contact-card-top-grid
    `);

    if (!targets.length || !('IntersectionObserver' in window)) return;

    targets.forEach((el, index) => {
      el.classList.add('reveal-3d');
      // Subtle staggered delay for siblings
      const delay = (index % 4) * 0.08;
      el.style.transitionDelay = `${delay}s`;
    });

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed-3d');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12
    });

    targets.forEach(el => observer.observe(el));
  }

  // =========================================================================
  // 4. LAZY LOADING WITH NATIVE DECODING & PROGRESSIVE REVEAL
  // =========================================================================
  function initLazyLoading() {
    const images = document.querySelectorAll('img:not(.hero-bg-media)');
    images.forEach(img => {
      if (!img.getAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      if (!img.getAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }

      // Check if already loaded
      if (img.complete) {
        img.classList.add('img-lazy-ready');
      } else {
        img.addEventListener('load', () => {
          img.classList.add('img-lazy-ready');
        }, { once: true });
      }
    });
  }

  // =========================================================================
  // 5. CLIENT-SIDE SECURITY HARDENING
  // =========================================================================
  function initSecurityHardening() {
    // 1. Enforce rel="noopener noreferrer" on all external or target="_blank" links
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
      const currentRel = link.getAttribute('rel') || '';
      const needed = ['noopener', 'noreferrer'];
      const relParts = currentRel.split(' ').filter(Boolean);
      needed.forEach(n => {
        if (!relParts.includes(n)) relParts.push(n);
      });
      link.setAttribute('rel', relParts.join(' '));
    });

    // 2. Global Sanitization Utility
    window.secureSanitize = function(input) {
      if (typeof input !== 'string') return '';
      return input
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    };

    // 3. Prevent clickjacking / framing detection check
    try {
      if (window.top !== window.self) {
        // Enforce same origin framing only
        if (window.top.location.hostname !== window.self.location.hostname) {
          window.top.location = window.self.location;
        }
      }
    } catch (e) {
      // Cross-origin framing attempt detected; break out
      window.top.location = window.self.location;
    }
  }

  // =========================================================================
  // INITIALIZATION ON DOM READY
  // =========================================================================
  function initializeAll() {
    // 1. Initialize 3D Dots Canvas in Hero if canvas exists or create it
    let canvas = document.getElementById('canvas3dDots');
    if (!canvas) {
      const hero = document.querySelector('.hero-section');
      if (hero) {
        canvas = document.createElement('canvas');
        canvas.id = 'canvas3dDots';
        canvas.className = 'canvas-3d-dots';
        hero.insertBefore(canvas, hero.firstChild);
      }
    }

    if (canvas) {
      new DotsSpace3D('canvas3dDots');
    }

    // 2. Initialize 3D Card Tilt Effects
    init3DCardTilt();

    // 3. Initialize 3D Scroll Reveal
    init3DScrollReveal();

    // 4. Initialize Lazy Loading
    initLazyLoading();

    // 5. Initialize Security Hardening
    initSecurityHardening();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAll);
  } else {
    initializeAll();
  }

})();

