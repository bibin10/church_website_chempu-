/**
 * realistic-sky.js
 * The single, dedicated, authentic daytime sky with calm volumetric 
 * cumulus clouds gently drifting leftward across the atmosphere.
 * Ultra-smooth 60fps canvas rendering, responsive, and lightweight.
 */
(function() {
  function initRealisticSky() {
    const isTargetPage = document.body.classList.contains('community-page') || 
                         document.body.classList.contains('contact-page') ||
                         document.body.classList.contains('index-page') ||
                         window.location.pathname.endsWith('index.html') ||
                         window.location.pathname === '/' ||
                         window.location.pathname.endsWith('/');
    if (!isTargetPage) return;

    // Clean up any old duplicate containers if present
    const existing = document.getElementById('realisticSkyContainer');
    if (existing) existing.remove();

    // Create fixed background sky container
    const skyWrap = document.createElement('div');
    skyWrap.id = 'realisticSkyContainer';
    skyWrap.setAttribute('aria-hidden', 'true');
    skyWrap.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:-2;pointer-events:none;overflow:hidden;';

    // Single static high-res photo backdrop layer
    const skyImgLayer = document.createElement('div');
    skyImgLayer.id = 'skyBackdropImgLayer';
    skyImgLayer.style.cssText = 'position:absolute;inset:0;background:url("assets/images/sky_background.jpg") center center / cover no-repeat;opacity:0.88;pointer-events:none;';
    skyWrap.appendChild(skyImgLayer);

    const canvas = document.createElement('canvas');
    canvas.id = 'realisticSkyCanvas';
    canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;display:block;';
    skyWrap.appendChild(canvas);

    // Ethereal sunlight glow overlay
    const atmosphereGlow = document.createElement('div');
    atmosphereGlow.id = 'skyAtmosphereGlow';
    atmosphereGlow.style.cssText = 'position:absolute;inset:0;background:radial-gradient(circle at 75% 18%, rgba(255,255,255,0.45) 0%, rgba(255,248,230,0.18) 28%, rgba(255,255,255,0) 65%);pointer-events:none;';
    skyWrap.appendChild(atmosphereGlow);

    document.body.insertBefore(skyWrap, document.body.firstChild);

    // Harmonize matching deep oceanic footer background
    document.documentElement.style.setProperty(
      '--sky-footer-bg',
      'linear-gradient(180deg, rgba(14, 38, 82, 0.94) 0%, rgba(8, 22, 52, 0.98) 100%)'
    );

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
        // Calm, gentle leftward drift speed
        this.baseSpeed = speed * 4.5;
        this.opacity = opacity;
        this.layer = layer;
        this.puffs = [];
        this.generatePuffs();
      }

      generatePuffs() {
        const puffCount = Math.floor(16 + Math.random() * 12);
        const clusterWidth = 260 * this.scale;
        const clusterHeight = 85 * this.scale;

        for (let i = 0; i < puffCount; i++) {
          const offsetX = (Math.random() - 0.5) * clusterWidth;
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
        // Steady leftward motion
        this.x -= this.baseSpeed * dt;
        this.y = this.baseY + Math.sin(this.x * 0.003) * (6 * this.scale);

        const wrapBoundary = 400 * this.scale;
        if (this.x + wrapBoundary < 0) {
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

          const alpha = this.opacity * p.alpha;
          grad.addColorStop(0, `rgba(255, 255, 255, ${alpha * 0.95})`);
          grad.addColorStop(0.65, `rgba(215, 230, 250, ${alpha * 0.35})`);
          grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

          context.fillStyle = grad;
          context.beginPath();
          context.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          context.fill();
        }

        context.restore();
      }
    }

    const clouds = [];
    const isMobile = window.innerWidth <= 768;
    const countFar = isMobile ? 3 : 5;
    const countMid = isMobile ? 4 : 6;
    const countFore = isMobile ? 2 : 4;

    for (let i = 0; i < countFar; i++) {
      clouds.push(new Cloud(Math.random() * width, Math.random() * (height * 0.5), 0.7 + Math.random() * 0.5, 1.2 + Math.random() * 1.5, 0.55, 'far'));
    }
    for (let i = 0; i < countMid; i++) {
      clouds.push(new Cloud(Math.random() * width, 30 + Math.random() * (height * 0.65), 1.1 + Math.random() * 0.6, 2.5 + Math.random() * 2.5, 0.75, 'mid'));
    }
    for (let i = 0; i < countFore; i++) {
      clouds.push(new Cloud(Math.random() * width, 60 + Math.random() * (height * 0.7), 1.5 + Math.random() * 0.8, 4.0 + Math.random() * 3.5, 0.88, 'fore'));
    }

    let lastTime = performance.now();

    function render(currentTime) {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      ctx.clearRect(0, 0, width, height);

      // Draw drifting clouds
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
