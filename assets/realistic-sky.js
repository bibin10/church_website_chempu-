/**
 * realistic-sky.js
 * Generates an ethereal, high-fidelity sky background with soft volumetric 
 * cumulus and cirrus clouds gently drifting across the atmosphere.
 * Ultra-smooth 60fps canvas rendering, responsive, and lightweight.
 */
(function() {
  function initRealisticSky() {
    const isTargetPage = document.body.classList.contains('community-page') || document.body.classList.contains('contact-page');
    if (!isTargetPage) return;
    if (document.getElementById('realisticSkyCanvas')) return;

    // Create fixed background sky container and canvas
    const skyWrap = document.createElement('div');
    skyWrap.id = 'realisticSkyContainer';
    skyWrap.setAttribute('aria-hidden', 'true');
    skyWrap.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:-2;pointer-events:none;overflow:hidden;';

    // Sky backdrop image layer matching deep blue cumulus sky
    const skyImgLayer = document.createElement('div');
    skyImgLayer.className = 'sky-backdrop-image';
    skyImgLayer.style.cssText = 'position:absolute;inset:0;background:url("assets/images/sky_background.jpg") center center / cover no-repeat;opacity:0.88;pointer-events:none;';
    skyWrap.appendChild(skyImgLayer);

    const canvas = document.createElement('canvas');
    canvas.id = 'realisticSkyCanvas';
    canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;display:block;';
    skyWrap.appendChild(canvas);

    // Add soft sun flare / ethereal atmosphere overlay
    const atmosphereGlow = document.createElement('div');
    atmosphereGlow.className = 'sky-atmosphere-glow';
    atmosphereGlow.style.cssText = 'position:absolute;inset:0;background:radial-gradient(circle at 75% 18%, rgba(255,255,255,0.45) 0%, rgba(255,248,230,0.2) 28%, rgba(255,255,255,0) 65%), linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(240,248,255,0.4) 60%, rgba(245,250,255,0.7) 100%);pointer-events:none;';
    skyWrap.appendChild(atmosphereGlow);

    document.body.insertBefore(skyWrap, document.body.firstChild);

    const ctx = canvas.getContext('2d', { alpha: true });
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    window.addEventListener('resize', resize, { passive: true });
    resize();

    // Procedural volumetric cloud clusters
    class Cloud {
      constructor(x, y, scale, speed, opacity, layer) {
        this.x = x;
        this.y = y;
        this.baseY = y;
        this.scale = scale;
        this.speed = speed;
        this.opacity = opacity;
        this.layer = layer; // 'far', 'mid', 'foreground'
        this.puffs = [];
        this.generatePuffs();
      }

      generatePuffs() {
        const puffCount = Math.floor(18 + Math.random() * 14);
        const clusterWidth = 260 * this.scale;
        const clusterHeight = 85 * this.scale;

        for (let i = 0; i < puffCount; i++) {
          const offsetX = (Math.random() - 0.5) * clusterWidth;
          // Weighted towards bottom-center for realistic flat cloud base and billowy top
          const normY = Math.pow(Math.random(), 1.6);
          const offsetY = (normY - 0.5) * clusterHeight * 0.9;
          const radius = (35 + Math.random() * 45) * this.scale;
          const puffOpacity = 0.2 + Math.random() * 0.35;

          this.puffs.push({
            x: offsetX,
            y: offsetY,
            r: radius,
            alpha: puffOpacity
          });
        }
      }

      update(dt) {
        this.x += this.speed * dt;
        // Subtle vertical undulating bob
        this.y = this.baseY + Math.sin(this.x * 0.003) * (6 * this.scale);

        const wrapBoundary = 400 * this.scale;
        if (this.speed > 0 && this.x - wrapBoundary > width) {
          this.x = -wrapBoundary;
          this.baseY = Math.random() * (height * 0.7);
        } else if (this.speed < 0 && this.x + wrapBoundary < 0) {
          this.x = width + wrapBoundary;
          this.baseY = Math.random() * (height * 0.7);
        }
      }

      draw(context) {
        context.save();
        context.translate(this.x, this.y);

        for (let i = 0; i < this.puffs.length; i++) {
          const p = this.puffs[i];
          const grad = context.createRadialGradient(
            p.x - p.r * 0.25, p.y - p.r * 0.3, p.r * 0.05,
            p.x, p.y, p.r
          );

          // Sunlight rim glow & soft silver underbelly
          if (this.layer === 'far') {
            grad.addColorStop(0, `rgba(255, 255, 255, ${this.opacity * p.alpha * 0.85})`);
            grad.addColorStop(0.6, `rgba(240, 246, 255, ${this.opacity * p.alpha * 0.65})`);
            grad.addColorStop(1, 'rgba(230, 240, 255, 0)');
          } else if (this.layer === 'mid') {
            grad.addColorStop(0, `rgba(255, 255, 255, ${this.opacity * p.alpha * 0.95})`);
            grad.addColorStop(0.55, `rgba(242, 247, 255, ${this.opacity * p.alpha * 0.75})`);
            grad.addColorStop(0.85, `rgba(215, 230, 250, ${this.opacity * p.alpha * 0.35})`);
            grad.addColorStop(1, 'rgba(210, 226, 248, 0)');
          } else {
            // Front billowy cumulus
            grad.addColorStop(0, `rgba(255, 255, 255, ${this.opacity * p.alpha})`);
            grad.addColorStop(0.5, `rgba(250, 252, 255, ${this.opacity * p.alpha * 0.82})`);
            grad.addColorStop(0.8, `rgba(224, 237, 252, ${this.opacity * p.alpha * 0.4})`);
            grad.addColorStop(1, 'rgba(215, 230, 250, 0)');
          }

          context.fillStyle = grad;
          context.beginPath();
          context.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          context.fill();
        }

        context.restore();
      }
    }

    // Populate layered clouds with parallax speeds
    const clouds = [];
    const isMobile = window.innerWidth <= 768;
    const countFar = isMobile ? 3 : 5;
    const countMid = isMobile ? 4 : 6;
    const countFore = isMobile ? 2 : 4;

    // Layer 1: High subtle cirrus / background clouds
    for (let i = 0; i < countFar; i++) {
      clouds.push(new Cloud(
        Math.random() * width,
        Math.random() * (height * 0.5),
        0.7 + Math.random() * 0.5,
        1.2 + Math.random() * 1.5,
        0.55,
        'far'
      ));
    }

    // Layer 2: Mid-level soft cumulus
    for (let i = 0; i < countMid; i++) {
      clouds.push(new Cloud(
        Math.random() * width,
        30 + Math.random() * (height * 0.65),
        1.1 + Math.random() * 0.6,
        2.5 + Math.random() * 2.5,
        0.75,
        'mid'
      ));
    }

    // Layer 3: Foreground fluffy drifting clouds
    for (let i = 0; i < countFore; i++) {
      clouds.push(new Cloud(
        Math.random() * width,
        60 + Math.random() * (height * 0.7),
        1.5 + Math.random() * 0.8,
        4.0 + Math.random() * 3.5,
        0.88,
        'fore'
      ));
    }

    let lastTime = performance.now();

    function render(currentTime) {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      // Clear canvas so the photo-realistic deep blue sky backdrop shows through seamlessly
      ctx.clearRect(0, 0, width, height);

      // Render drifting clouds over the deep blue sky
      for (let i = 0; i < clouds.length; i++) {
        clouds[i].update(dt);
        clouds[i].draw(ctx);
      }

      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRealisticSky);
  } else {
    initRealisticSky();
  }
})();
