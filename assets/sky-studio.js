/**
 * sky-studio.js
 * Comprehensive Sky Customizer with 36+ Atmospheric Sky Presets.
 * Offers live switching, color palettes, cloud styles (cumulus, cirrus, aurora, twilight, storm, celestial, starry),
 * real-time procedural animations, and persistent LocalStorage sync.
 */
(function() {
  const SKY_KEY = 'st_thomas_active_sky';

  // 36+ Curated Atmospheric Sky Styles across 6 Categories
  const SKY_PRESETS = [
    // --- CATEGORY 1: DAYLIGHT & CELESTIAL BLUE ---
    {
      id: 'azure-majesty',
      name: 'Azure Majesty (Default)',
      category: 'daylight',
      tag: 'Daylight',
      skyGradient: ['#367bd6', '#5697e6', '#87bdf5', '#b8dbfb', '#e4f1fc'],
      backdrop: 'assets/images/sky_background.jpg',
      cloudStyle: 'cumulus', // volumetric billowy
      cloudColor: 'rgba(255, 255, 255, 0.95)',
      cloudTint: 'rgba(215, 230, 250, 0.4)',
      sunGlow: 'rgba(255, 255, 255, 0.45)',
      speed: 1.0,
      badge: '#0284c7'
    },
    {
      id: 'mediterranean-cyan',
      name: 'Mediterranean Cyan',
      category: 'daylight',
      tag: 'Daylight',
      skyGradient: ['#0284c7', '#38bdf8', '#7dd3fc', '#bae6fd', '#f0f9ff'],
      backdrop: 'assets/images/sky_background.jpg',
      cloudStyle: 'cumulus',
      cloudColor: 'rgba(255, 255, 255, 0.95)',
      cloudTint: 'rgba(186, 230, 253, 0.35)',
      sunGlow: 'rgba(255, 250, 230, 0.5)',
      speed: 1.2,
      badge: '#0ea5e9'
    },
    {
      id: 'sapphire-depths',
      name: 'Deep Sapphire Heavens',
      category: 'daylight',
      tag: 'Daylight',
      skyGradient: ['#0f3460', '#164e87', '#2563eb', '#60a5fa', '#dbeafe'],
      backdrop: 'assets/images/sky_background.jpg',
      cloudStyle: 'cumulus',
      cloudColor: 'rgba(255, 255, 255, 0.92)',
      cloudTint: 'rgba(191, 219, 254, 0.4)',
      sunGlow: 'rgba(255, 255, 255, 0.4)',
      speed: 0.9,
      badge: '#1d4ed8'
    },
    {
      id: 'ethereal-mist',
      name: 'Ethereal Cloud Mist',
      category: 'daylight',
      tag: 'Daylight',
      skyGradient: ['#64748b', '#94a3b8', '#cbd5e1', '#e2e8f0', '#f8fafc'],
      backdrop: 'assets/images/sky_background.jpg',
      cloudStyle: 'wispy',
      cloudColor: 'rgba(255, 255, 255, 0.85)',
      cloudTint: 'rgba(203, 213, 225, 0.3)',
      sunGlow: 'rgba(255, 255, 255, 0.6)',
      speed: 0.7,
      badge: '#64748b'
    },
    {
      id: 'alpine-crisp',
      name: 'Alpine High-Altitude',
      category: 'daylight',
      tag: 'Daylight',
      skyGradient: ['#1e40af', '#3b82f6', '#93c5fd', '#dbeafe', '#eff6ff'],
      backdrop: 'assets/images/sky_background.jpg',
      cloudStyle: 'cirrus',
      cloudColor: 'rgba(255, 255, 255, 0.9)',
      cloudTint: 'rgba(219, 234, 254, 0.25)',
      sunGlow: 'rgba(255, 255, 255, 0.55)',
      speed: 0.8,
      badge: '#2563eb'
    },
    {
      id: 'summer-noon',
      name: 'Bright Summer Noon',
      category: 'daylight',
      tag: 'Daylight',
      skyGradient: ['#0369a1', '#0ea5e9', '#38bdf8', '#bae6fd', '#ffffff'],
      backdrop: 'assets/images/sky_background.jpg',
      cloudStyle: 'cumulus',
      cloudColor: 'rgba(255, 255, 255, 0.98)',
      cloudTint: 'rgba(224, 242, 254, 0.3)',
      sunGlow: 'rgba(255, 247, 214, 0.7)',
      speed: 1.1,
      badge: '#0284c7'
    },

    // --- CATEGORY 2: GOLDEN HOUR & SUNRISE ---
    {
      id: 'golden-dawn',
      name: 'Golden Chempu Dawn',
      category: 'sunrise',
      tag: 'Dawn',
      skyGradient: ['#e11d48', '#f97316', '#fbbf24', '#fde68a', '#fffbeb'],
      cloudStyle: 'cumulus',
      cloudColor: 'rgba(255, 247, 230, 0.92)',
      cloudTint: 'rgba(251, 146, 60, 0.45)',
      sunGlow: 'rgba(255, 215, 0, 0.65)',
      speed: 0.9,
      badge: '#ea580c'
    },
    {
      id: 'rose-sunrise',
      name: 'Rose & Pearl Morning',
      category: 'sunrise',
      tag: 'Dawn',
      skyGradient: ['#be185d', '#f43f5e', '#fb7185', '#fed7aa', '#fdf2f8'],
      cloudStyle: 'wispy',
      cloudColor: 'rgba(255, 245, 248, 0.9)',
      cloudTint: 'rgba(244, 63, 94, 0.35)',
      sunGlow: 'rgba(255, 228, 230, 0.6)',
      speed: 0.8,
      badge: '#e11d48'
    },
    {
      id: 'divine-gold-radiance',
      name: 'Divine Gold Radiance',
      category: 'sunrise',
      tag: 'Dawn',
      skyGradient: ['#b45309', '#d97706', '#f59e0b', '#fde047', '#fef9c3'],
      cloudStyle: 'cumulus',
      cloudColor: 'rgba(255, 253, 240, 0.95)',
      cloudTint: 'rgba(245, 158, 11, 0.4)',
      sunGlow: 'rgba(254, 240, 138, 0.8)',
      speed: 1.0,
      badge: '#d97706'
    },
    {
      id: 'amber-horizon',
      name: 'Amber Light Horizon',
      category: 'sunrise',
      tag: 'Dawn',
      skyGradient: ['#9a3412', '#c2410c', '#ea580c', '#fdba74', '#fff7ed'],
      cloudStyle: 'cumulus',
      cloudColor: 'rgba(255, 248, 240, 0.92)',
      cloudTint: 'rgba(234, 88, 12, 0.35)',
      sunGlow: 'rgba(253, 186, 116, 0.65)',
      speed: 1.1,
      badge: '#c2410c'
    },
    {
      id: 'morning-haze',
      name: 'Soft Morning Haze',
      category: 'sunrise',
      tag: 'Dawn',
      skyGradient: ['#475569', '#64748b', '#fb923c', '#fed7aa', '#fff7ed'],
      cloudStyle: 'cirrus',
      cloudColor: 'rgba(255, 248, 240, 0.85)',
      cloudTint: 'rgba(251, 146, 60, 0.3)',
      sunGlow: 'rgba(254, 215, 170, 0.55)',
      speed: 0.7,
      badge: '#f97316'
    },
    {
      id: 'himalayan-sunbreak',
      name: 'Himalayan Sunbreak',
      category: 'sunrise',
      tag: 'Dawn',
      skyGradient: ['#1e3a8a', '#3b82f6', '#f59e0b', '#fde047', '#fefce8'],
      cloudStyle: 'cumulus',
      cloudColor: 'rgba(255, 255, 255, 0.95)',
      cloudTint: 'rgba(245, 158, 11, 0.45)',
      sunGlow: 'rgba(253, 224, 71, 0.75)',
      speed: 1.0,
      badge: '#eab308'
    },

    // --- CATEGORY 3: SUNSET & DUSK (TWILIGHT) ---
    {
      id: 'crimson-dusk',
      name: 'Crimson Cathedral Sunset',
      category: 'sunset',
      tag: 'Sunset',
      skyGradient: ['#4c0519', '#881337', '#be123c', '#fb7185', '#ffe4e6'],
      cloudStyle: 'cumulus',
      cloudColor: 'rgba(255, 228, 230, 0.9)',
      cloudTint: 'rgba(190, 18, 60, 0.45)',
      sunGlow: 'rgba(251, 113, 133, 0.6)',
      speed: 0.85,
      badge: '#9f1239'
    },
    {
      id: 'violet-twilight',
      name: 'Violet Twilight',
      category: 'sunset',
      tag: 'Sunset',
      skyGradient: ['#2e1065', '#581c87', '#7e22ce', '#c084fc', '#f3e8ff'],
      cloudStyle: 'wispy',
      cloudColor: 'rgba(245, 235, 255, 0.88)',
      cloudTint: 'rgba(168, 85, 247, 0.4)',
      sunGlow: 'rgba(216, 180, 254, 0.55)',
      speed: 0.75,
      badge: '#7e22ce'
    },
    {
      id: 'fiery-solstice',
      name: 'Fiery Solstice',
      category: 'sunset',
      tag: 'Sunset',
      skyGradient: ['#581c87', '#991b1b', '#c2410c', '#f59e0b', '#fef08a'],
      cloudStyle: 'cumulus',
      cloudColor: 'rgba(255, 245, 230, 0.9)',
      cloudTint: 'rgba(220, 38, 38, 0.45)',
      sunGlow: 'rgba(245, 158, 11, 0.7)',
      speed: 0.9,
      badge: '#b91c1c'
    },
    {
      id: 'lavender-evening',
      name: 'Lavender Serenade',
      category: 'sunset',
      tag: 'Sunset',
      skyGradient: ['#3b0764', '#6b21a8', '#9333ea', '#e9d5ff', '#faf5ff'],
      cloudStyle: 'cirrus',
      cloudColor: 'rgba(250, 245, 255, 0.85)',
      cloudTint: 'rgba(192, 132, 252, 0.35)',
      sunGlow: 'rgba(233, 213, 255, 0.5)',
      speed: 0.65,
      badge: '#9333ea'
    },
    {
      id: 'coral-afterglow',
      name: 'Coral Afterglow',
      category: 'sunset',
      tag: 'Sunset',
      skyGradient: ['#312e81', '#4338ca', '#f43f5e', '#fb923c', '#ffedd5'],
      cloudStyle: 'cumulus',
      cloudColor: 'rgba(255, 241, 235, 0.9)',
      cloudTint: 'rgba(244, 63, 94, 0.4)',
      sunGlow: 'rgba(251, 146, 60, 0.6)',
      speed: 0.95,
      badge: '#f43f5e'
    },
    {
      id: 'purple-gold-hymn',
      name: 'Purple & Gold Vespers',
      category: 'sunset',
      tag: 'Sunset',
      skyGradient: ['#1e1b4b', '#3730a3', '#7c3aed', '#f59e0b', '#fef3c7'],
      cloudStyle: 'cumulus',
      cloudColor: 'rgba(254, 249, 235, 0.92)',
      cloudTint: 'rgba(124, 58, 237, 0.4)',
      sunGlow: 'rgba(245, 158, 11, 0.75)',
      speed: 0.8,
      badge: '#6d28d9'
    },

    // --- CATEGORY 4: NIGHT & STARRY HEAVENS ---
    {
      id: 'midnight-starlight',
      name: 'Midnight Starlight Heavens',
      category: 'night',
      tag: 'Night',
      skyGradient: ['#020617', '#090d16', '#0f172a', '#1e293b', '#334155'],
      cloudStyle: 'night-stars',
      cloudColor: 'rgba(148, 163, 184, 0.35)',
      cloudTint: 'rgba(30, 41, 59, 0.6)',
      sunGlow: 'rgba(255, 255, 255, 0.25)',
      speed: 0.5,
      stars: true,
      badge: '#0f172a'
    },
    {
      id: 'deep-cosmos',
      name: 'Deep Cosmic Nebula',
      category: 'night',
      tag: 'Night',
      skyGradient: ['#050515', '#0d1330', '#1c1b4d', '#2e1065', '#0f172a'],
      cloudStyle: 'night-stars',
      cloudColor: 'rgba(192, 132, 252, 0.4)',
      cloudTint: 'rgba(46, 16, 101, 0.7)',
      sunGlow: 'rgba(167, 139, 250, 0.4)',
      speed: 0.45,
      stars: true,
      badge: '#1e1b4b'
    },
    {
      id: 'full-moon-halo',
      name: 'Full Moon Silver Halo',
      category: 'night',
      tag: 'Night',
      skyGradient: ['#030712', '#111827', '#1f2937', '#374151', '#4b5563'],
      cloudStyle: 'cumulus',
      cloudColor: 'rgba(229, 231, 235, 0.55)',
      cloudTint: 'rgba(75, 85, 99, 0.4)',
      sunGlow: 'rgba(255, 255, 255, 0.85)', // moon glow
      speed: 0.6,
      stars: true,
      badge: '#374151'
    },
    {
      id: 'indigo-constellation',
      name: 'Indigo Constellation',
      category: 'night',
      tag: 'Night',
      skyGradient: ['#020817', '#081735', '#0f275c', '#1e3a8a', '#172554'],
      cloudStyle: 'wispy',
      cloudColor: 'rgba(191, 219, 254, 0.35)',
      cloudTint: 'rgba(30, 58, 138, 0.6)',
      sunGlow: 'rgba(219, 234, 254, 0.3)',
      speed: 0.5,
      stars: true,
      badge: '#1e3a8a'
    },
    {
      id: 'bethlehem-star',
      name: 'Holy Star of Bethlehem',
      category: 'night',
      tag: 'Night',
      skyGradient: ['#05081c', '#0a1236', '#122055', '#243b82', '#0f172a'],
      cloudStyle: 'night-stars',
      cloudColor: 'rgba(254, 240, 138, 0.4)',
      cloudTint: 'rgba(18, 32, 85, 0.6)',
      sunGlow: 'rgba(254, 240, 138, 0.9)',
      speed: 0.55,
      stars: true,
      badge: '#eab308'
    },
    {
      id: 'velvet-midnight',
      name: 'Velvet Midnight Blue',
      category: 'night',
      tag: 'Night',
      skyGradient: ['#01040d', '#040d21', '#091c44', '#0f2c69', '#153c8e'],
      cloudStyle: 'cirrus',
      cloudColor: 'rgba(147, 197, 253, 0.3)',
      cloudTint: 'rgba(15, 44, 105, 0.5)',
      sunGlow: 'rgba(191, 219, 254, 0.3)',
      speed: 0.4,
      stars: true,
      badge: '#091c44'
    },

    // --- CATEGORY 5: AURORA & CELESTIAL WONDERS ---
    {
      id: 'emerald-aurora',
      name: 'Emerald Northern Lights',
      category: 'aurora',
      tag: 'Aurora',
      skyGradient: ['#022c22', '#064e3b', '#047857', '#10b981', '#022c22'],
      cloudStyle: 'aurora',
      cloudColor: 'rgba(110, 231, 183, 0.65)',
      cloudTint: 'rgba(16, 185, 129, 0.5)',
      sunGlow: 'rgba(167, 243, 208, 0.6)',
      speed: 1.3,
      stars: true,
      badge: '#059669'
    },
    {
      id: 'mystic-boreal',
      name: 'Mystic Cyan & Violet Aurora',
      category: 'aurora',
      tag: 'Aurora',
      skyGradient: ['#082f49', '#0e7490', '#6366f1', '#a855f7', '#0f172a'],
      cloudStyle: 'aurora',
      cloudColor: 'rgba(165, 243, 252, 0.6)',
      cloudTint: 'rgba(168, 85, 247, 0.5)',
      sunGlow: 'rgba(129, 140, 248, 0.6)',
      speed: 1.2,
      stars: true,
      badge: '#0891b2'
    },
    {
      id: 'celestial-sanctuary',
      name: 'Angelic Celestial Sanctuary',
      category: 'aurora',
      tag: 'Celestial',
      skyGradient: ['#1e1b4b', '#4338ca', '#818cf8', '#e0e7ff', '#ffffff'],
      cloudStyle: 'cumulus',
      cloudColor: 'rgba(255, 255, 255, 0.95)',
      cloudTint: 'rgba(165, 180, 252, 0.4)',
      sunGlow: 'rgba(254, 240, 138, 0.85)',
      speed: 0.9,
      badge: '#4f46e5'
    },
    {
      id: 'polar-light-ribbon',
      name: 'Polar Light Ribbon',
      category: 'aurora',
      tag: 'Aurora',
      skyGradient: ['#021b1a', '#043834', '#0d9488', '#5eead4', '#021b1a'],
      cloudStyle: 'aurora',
      cloudColor: 'rgba(94, 234, 212, 0.6)',
      cloudTint: 'rgba(13, 148, 136, 0.45)',
      sunGlow: 'rgba(204, 251, 241, 0.6)',
      speed: 1.4,
      stars: true,
      badge: '#0d9488'
    },
    {
      id: 'glory-cloud',
      name: 'Mount Tabor Glory Cloud',
      category: 'aurora',
      tag: 'Celestial',
      skyGradient: ['#78350f', '#d97706', '#fbbf24', '#fef08a', '#ffffff'],
      cloudStyle: 'cumulus',
      cloudColor: 'rgba(255, 255, 255, 0.98)',
      cloudTint: 'rgba(251, 191, 36, 0.5)',
      sunGlow: 'rgba(255, 255, 255, 0.95)',
      speed: 1.0,
      badge: '#b45309'
    },
    {
      id: 'marian-blue-sheen',
      name: 'Marian Grace & Sheen',
      category: 'aurora',
      tag: 'Celestial',
      skyGradient: ['#1e3a8a', '#2563eb', '#60a5fa', '#bfdbfe', '#ffffff'],
      cloudStyle: 'cumulus',
      cloudColor: 'rgba(255, 255, 255, 0.96)',
      cloudTint: 'rgba(191, 219, 254, 0.45)',
      sunGlow: 'rgba(254, 240, 138, 0.7)',
      speed: 0.85,
      badge: '#2563eb'
    },

    // --- CATEGORY 6: MONSOON & DRAMATIC WEATHER ---
    {
      id: 'kerala-monsoon',
      name: 'Kerala Edavappathi Monsoon',
      category: 'monsoon',
      tag: 'Monsoon',
      skyGradient: ['#1e293b', '#334155', '#475569', '#64748b', '#94a3b8'],
      cloudStyle: 'storm',
      cloudColor: 'rgba(100, 116, 139, 0.75)',
      cloudTint: 'rgba(30, 41, 59, 0.6)',
      sunGlow: 'rgba(203, 213, 225, 0.3)',
      speed: 1.8,
      badge: '#334155'
    },
    {
      id: 'dramatic-overcast',
      name: 'Silver Lining Overcast',
      category: 'monsoon',
      tag: 'Monsoon',
      skyGradient: ['#374151', '#4b5563', '#6b7280', '#9ca3af', '#e5e7eb'],
      cloudStyle: 'cumulus',
      cloudColor: 'rgba(255, 255, 255, 0.88)',
      cloudTint: 'rgba(75, 85, 99, 0.5)',
      sunGlow: 'rgba(255, 255, 255, 0.65)',
      speed: 1.4,
      badge: '#4b5563'
    },
    {
      id: 'ocean-tempest',
      name: 'Arabian Sea Tempest',
      category: 'monsoon',
      tag: 'Monsoon',
      skyGradient: ['#0f172a', '#1e293b', '#0369a1', '#0284c7', '#38bdf8'],
      cloudStyle: 'storm',
      cloudColor: 'rgba(148, 163, 184, 0.7)',
      cloudTint: 'rgba(15, 23, 42, 0.65)',
      sunGlow: 'rgba(125, 211, 252, 0.4)',
      speed: 2.0,
      badge: '#0369a1'
    },
    {
      id: 'slate-thunderhead',
      name: 'Slate Thunderhead',
      category: 'monsoon',
      tag: 'Monsoon',
      skyGradient: ['#111827', '#1f2937', '#374151', '#4b5563', '#6b7280'],
      cloudStyle: 'storm',
      cloudColor: 'rgba(156, 163, 175, 0.65)',
      cloudTint: 'rgba(17, 24, 39, 0.7)',
      sunGlow: 'rgba(243, 244, 246, 0.3)',
      speed: 1.7,
      badge: '#1f2937'
    },
    {
      id: 'sunlit-rain',
      name: 'Sunlit Rain Clouds',
      category: 'monsoon',
      tag: 'Monsoon',
      skyGradient: ['#1e3a8a', '#3b82f6', '#64748b', '#cbd5e1', '#fef08a'],
      cloudStyle: 'cumulus',
      cloudColor: 'rgba(255, 255, 255, 0.9)',
      cloudTint: 'rgba(71, 85, 105, 0.45)',
      sunGlow: 'rgba(254, 240, 138, 0.75)',
      speed: 1.3,
      badge: '#3b82f6'
    },
    {
      id: 'peaceful-clearing',
      name: 'Post-Rain Peaceful Clearing',
      category: 'monsoon',
      tag: 'Monsoon',
      skyGradient: ['#0284c7', '#38bdf8', '#94a3b8', '#e2e8f0', '#ffffff'],
      cloudStyle: 'wispy',
      cloudColor: 'rgba(255, 255, 255, 0.95)',
      cloudTint: 'rgba(148, 163, 184, 0.35)',
      sunGlow: 'rgba(255, 255, 255, 0.7)',
      speed: 0.9,
      badge: '#0ea5e9'
    }
  ];

  // Active Sky Runtime State
  let activeSky = loadSavedSky();
  let skyRenderEngine = null;

  function loadSavedSky() {
    try {
      const saved = localStorage.getItem(SKY_KEY);
      if (saved) {
        const found = SKY_PRESETS.find(s => s.id === saved);
        if (found) return found;
      }
    } catch (e) {
      console.warn('Error reading saved sky', e);
    }
    return SKY_PRESETS[0]; // Azure Majesty
  }

  function saveSky(skyObj) {
    activeSky = skyObj;
    localStorage.setItem(SKY_KEY, skyObj.id);
    if (skyRenderEngine) {
      skyRenderEngine.applySkyPreset(skyObj);
    }
    highlightActiveSkyCard(skyObj.id);
  }

  // --- SKY RENDERING ENGINE ---
  function initSkyEngine() {
    const isTargetPage = document.body.classList.contains('community-page') || 
                         document.body.classList.contains('contact-page') ||
                         document.body.classList.contains('index-page') ||
                         window.location.pathname.endsWith('index.html') ||
                         window.location.pathname === '/' ||
                         window.location.pathname.endsWith('/');
    if (!isTargetPage) return;

    // Remove legacy canvas if present
    const oldCanvas = document.getElementById('realisticSkyCanvas');
    if (oldCanvas && oldCanvas.parentElement) {
      oldCanvas.parentElement.remove();
    }

    const skyWrap = document.createElement('div');
    skyWrap.id = 'realisticSkyContainer';
    skyWrap.setAttribute('aria-hidden', 'true');
    skyWrap.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:-2;pointer-events:none;overflow:hidden;';

    // Sky backdrop image layer (for presets with photo backdrop)
    const skyImgLayer = document.createElement('div');
    skyImgLayer.id = 'skyBackdropImgLayer';
    skyImgLayer.style.cssText = 'position:absolute;top:0;left:0;width:300vw;height:100vh;background:url("assets/images/sky_background.jpg") repeat-x left center;background-size:auto 100%;opacity:0.88;transition:opacity 0.6s ease;pointer-events:none;will-change:transform;';
    skyWrap.appendChild(skyImgLayer);

    const canvas = document.createElement('canvas');
    canvas.id = 'realisticSkyCanvas';
    canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;display:block;';
    skyWrap.appendChild(canvas);

    // Atmosphere Glow
    const glowDiv = document.createElement('div');
    glowDiv.id = 'skyAtmosphereGlow';
    glowDiv.style.cssText = 'position:absolute;inset:0;pointer-events:none;transition:background 0.6s ease;';
    skyWrap.appendChild(glowDiv);

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

    // Procedural Stars for Night / Aurora
    const stars = [];
    for (let i = 0; i < 160; i++) {
      stars.push({
        x: Math.random(),
        y: Math.random(),
        r: 0.6 + Math.random() * 1.6,
        alpha: 0.3 + Math.random() * 0.7,
        blinkSpeed: 1 + Math.random() * 3
      });
    }

    // Procedural volumetric cloud clusters
    class Cloud {
      constructor(x, y, scale, speed, opacity, layer) {
        this.x = x;
        this.y = y;
        this.baseY = y;
        this.scale = scale;
        // Make base speed visibly active (between 25px and 70px per second)
        this.baseSpeed = speed * 22;
        this.opacity = opacity;
        this.layer = layer;
        this.puffs = [];
        this.generatePuffs();
      }

      generatePuffs() {
        const puffCount = Math.floor(16 + Math.random() * 14);
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

      update(dt, speedMult) {
        // Move steadily towards the left side
        this.x -= (this.baseSpeed * speedMult) * dt;
        this.y = this.baseY + Math.sin(this.x * 0.003) * (6 * this.scale);

        const wrapBoundary = 400 * this.scale;
        // When clouds exit completely off the left edge, wrap them to the right edge
        if (this.x + wrapBoundary < 0) {
          this.x = width + wrapBoundary;
          this.baseY = Math.random() * (height * 0.7);
        }
      }

      draw(context, preset) {
        context.save();
        context.translate(this.x, this.y);

        for (let i = 0; i < this.puffs.length; i++) {
          const p = this.puffs[i];
          const grad = context.createRadialGradient(
            p.x - p.r * 0.25, p.y - p.r * 0.3, p.r * 0.05,
            p.x, p.y, p.r
          );

          const alpha = this.opacity * p.alpha;
          grad.addColorStop(0, preset.cloudColor.replace(/[\d\.]+\)$/, `${alpha})`));
          grad.addColorStop(0.65, preset.cloudTint.replace(/[\d\.]+\)$/, `${alpha * 0.7})`));
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

    function applySkyPreset(preset) {
      if (preset.backdrop) {
        skyImgLayer.style.opacity = '0.85';
      } else {
        skyImgLayer.style.opacity = '0';
      }

      glowDiv.style.background = `radial-gradient(circle at 75% 18%, ${preset.sunGlow} 0%, rgba(255,255,255,0.08) 35%, transparent 65%)`;

      // Dynamically compute and inject matching footer background & atmospheric styling
      applyMatchingFooterColor(preset);
    }

    function applyMatchingFooterColor(preset) {
      const stops = preset.skyGradient || [];
      const primaryDeep = stops[0] || '#0f1c3f';
      const secondaryDeep = stops[1] || stops[0] || '#172a5a';

      // Create rich, harmonized gradient based on the sky atmosphere
      let footerBg = '';
      if (preset.category === 'daylight') {
        footerBg = `linear-gradient(180deg, rgba(14, 38, 82, 0.92) 0%, rgba(8, 22, 52, 0.98) 100%)`;
      } else if (preset.category === 'sunrise') {
        footerBg = `linear-gradient(180deg, rgba(76, 20, 15, 0.92) 0%, rgba(42, 10, 8, 0.98) 100%)`;
      } else if (preset.category === 'sunset') {
        footerBg = `linear-gradient(180deg, rgba(46, 16, 85, 0.92) 0%, rgba(24, 8, 48, 0.98) 100%)`;
      } else if (preset.category === 'night') {
        footerBg = `linear-gradient(180deg, rgba(6, 12, 28, 0.95) 0%, rgba(2, 6, 16, 0.99) 100%)`;
      } else if (preset.category === 'aurora') {
        footerBg = `linear-gradient(180deg, rgba(4, 38, 30, 0.92) 0%, rgba(2, 22, 18, 0.98) 100%)`;
      } else if (preset.category === 'monsoon') {
        footerBg = `linear-gradient(180deg, rgba(22, 32, 48, 0.94) 0%, rgba(12, 18, 28, 0.98) 100%)`;
      } else {
        footerBg = `linear-gradient(180deg, ${primaryDeep}ee 0%, ${secondaryDeep}fa 100%)`;
      }

      document.documentElement.style.setProperty('--sky-footer-bg', footerBg);
    }

    applySkyPreset(activeSky);

    let lastTime = performance.now();
    let skyBackdropOffset = 0;

    function render(currentTime) {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      // Continuously slide the backdrop image layer to the left
      if (skyImgLayer && activeSky.backdrop) {
        skyBackdropOffset = (skyBackdropOffset + 35 * dt) % (width || 1920);
        skyImgLayer.style.transform = `translateX(-${skyBackdropOffset}px)`;
      }

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Sky Gradient
      if (!activeSky.backdrop || activeSky.category !== 'daylight') {
        const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
        const stops = activeSky.skyGradient;
        const step = 1 / (stops.length - 1);
        stops.forEach((c, idx) => {
          skyGrad.addColorStop(Math.min(idx * step, 1.0), c);
        });
        ctx.fillStyle = skyGrad;
        ctx.fillRect(0, 0, width, height);
      }

      // 2. Draw Stars (if night or aurora)
      if (activeSky.stars) {
        ctx.save();
        for (let i = 0; i < stars.length; i++) {
          const s = stars[i];
          const blink = 0.4 + 0.6 * Math.sin(currentTime * 0.002 * s.blinkSpeed + i);
          ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha * blink})`;
          ctx.beginPath();
          ctx.arc(s.x * width, s.y * height, s.r, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      // 3. Draw Aurora Ribbons (if aurora style)
      if (activeSky.cloudStyle === 'aurora') {
        ctx.save();
        const timeFactor = currentTime * 0.001;
        for (let a = 0; a < 3; a++) {
          const ribbonGrad = ctx.createLinearGradient(0, 0, width, 0);
          ribbonGrad.addColorStop(0, 'rgba(16, 185, 129, 0)');
          ribbonGrad.addColorStop(0.3 + 0.1 * a, activeSky.cloudColor);
          ribbonGrad.addColorStop(0.7, activeSky.cloudTint);
          ribbonGrad.addColorStop(1, 'rgba(16, 185, 129, 0)');

          ctx.fillStyle = ribbonGrad;
          ctx.beginPath();
          ctx.moveTo(0, height * 0.2 + a * 50);
          for (let x = 0; x <= width; x += 40) {
            const wave = Math.sin(x * 0.005 + timeFactor + a) * 45 + Math.cos(x * 0.008 - timeFactor) * 25;
            ctx.lineTo(x, height * 0.25 + a * 60 + wave);
          }
          ctx.lineTo(width, height * 0.5 + a * 70);
          ctx.lineTo(0, height * 0.5 + a * 70);
          ctx.closePath();
          ctx.fill();
        }
        ctx.restore();
      }

      // 4. Draw Drifting Clouds
      for (let i = 0; i < clouds.length; i++) {
        clouds[i].update(dt, activeSky.speed || 1.0);
        clouds[i].draw(ctx, activeSky);
      }

      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);

    return {
      applySkyPreset
    };
  }

  // --- FLOATING LAUNCHER & SKY STUDIO DRAWER ---
  function buildSkyStudioDrawer() {
    if (document.getElementById('skyStudioDrawer')) return;

    // 1. Floating Sky Button
    const skyLauncher = document.createElement('button');
    skyLauncher.id = 'skyLauncherBtn';
    skyLauncher.className = 'sky-launcher-btn';
    skyLauncher.setAttribute('aria-label', 'Open 36+ Sky & Cloud Studio');
    skyLauncher.setAttribute('title', 'Change Sky & Cloud Atmospheres (36+ Styles)');
    skyLauncher.innerHTML = `
      <span class="sky-launcher-icon"><i class="fas fa-cloud-sun"></i></span>
      <span class="sky-launcher-text">36+ Skies</span>
    `;
    document.body.appendChild(skyLauncher);

    // 2. Backdrop & Drawer
    const backdrop = document.createElement('div');
    backdrop.id = 'skyDrawerBackdrop';
    backdrop.className = 'sky-drawer-backdrop';
    document.body.appendChild(backdrop);

    const drawer = document.createElement('aside');
    drawer.id = 'skyStudioDrawer';
    drawer.className = 'sky-studio-drawer';
    drawer.setAttribute('role', 'dialog');
    drawer.setAttribute('aria-labelledby', 'skyDrawerTitle');

    drawer.innerHTML = `
      <div class="sky-drawer-header">
        <div class="sky-drawer-title-wrap">
          <div class="sky-title-badge"><i class="fas fa-cloud-sun"></i></div>
          <div>
            <h3 id="skyDrawerTitle">Atmospheric Sky Studio</h3>
            <span class="sky-preset-count">36+ Handcrafted Atmospheres</span>
          </div>
        </div>
        <button class="close-sky-drawer-btn" id="closeSkyDrawerBtn" aria-label="Close Sky Customizer">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="sky-drawer-toolbar">
        <div class="sky-search-box">
          <i class="fas fa-search"></i>
          <input type="text" id="skySearchInput" placeholder="Search 36+ skies (e.g. Dawn, Sunset, Aurora, Deep Azure)..." aria-label="Search skies">
        </div>
        <div class="sky-category-pills" id="skyCategoryPills">
          <button class="sky-cat-pill active" data-cat="all">All (36)</button>
          <button class="sky-cat-pill" data-cat="daylight">Daylight (6)</button>
          <button class="sky-cat-pill" data-cat="sunrise">Sunrise & Dawn (6)</button>
          <button class="sky-cat-pill" data-cat="sunset">Sunset & Twilight (6)</button>
          <button class="sky-cat-pill" data-cat="night">Starry Night (6)</button>
          <button class="sky-cat-pill" data-cat="aurora">Aurora & Celestial (6)</button>
          <button class="sky-cat-pill" data-cat="monsoon">Monsoon & Storm (6)</button>
        </div>
      </div>

      <div class="sky-drawer-body">
        <div class="sky-grid" id="skyPresetsGrid">
          <!-- Populated dynamically -->
        </div>
      </div>

      <div class="sky-drawer-footer">
        <button type="button" class="btn-reset-sky" id="resetSkyBtn">
          <i class="fas fa-undo"></i> Reset Azure Sky
        </button>
        <span class="sky-footer-note">Real-time 60fps cloud rendering</span>
      </div>
    `;
    document.body.appendChild(drawer);

    renderSkyCards('all', '');

    // Event Listeners
    skyLauncher.addEventListener('click', () => {
      drawer.classList.add('open');
      backdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    function closeDrawer() {
      drawer.classList.remove('open');
      backdrop.classList.remove('open');
      document.body.style.overflow = '';
    }

    document.getElementById('closeSkyDrawerBtn').addEventListener('click', closeDrawer);
    backdrop.addEventListener('click', closeDrawer);

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        closeDrawer();
      }
    });

    // Category Filter
    const catPills = document.querySelectorAll('.sky-cat-pill');
    catPills.forEach(pill => {
      pill.addEventListener('click', () => {
        catPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const cat = pill.getAttribute('data-cat');
        const query = document.getElementById('skySearchInput').value.trim().toLowerCase();
        renderSkyCards(cat, query);
      });
    });

    // Search Input
    document.getElementById('skySearchInput').addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();
      const activeCat = document.querySelector('.sky-cat-pill.active')?.getAttribute('data-cat') || 'all';
      renderSkyCards(activeCat, query);
    });

    // Reset button
    document.getElementById('resetSkyBtn').addEventListener('click', () => {
      saveSky(SKY_PRESETS[0]);
    });
  }

  function renderSkyCards(category, query) {
    const grid = document.getElementById('skyPresetsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const filtered = SKY_PRESETS.filter(sky => {
      const matchCat = category === 'all' || sky.category === category;
      const matchQuery = !query || sky.name.toLowerCase().includes(query) || sky.tag.toLowerCase().includes(query);
      return matchCat && matchQuery;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `<div class="sky-empty-state"><i class="fas fa-cloud-moon"></i><p>No sky presets match your search.</p></div>`;
      return;
    }

    filtered.forEach(sky => {
      const card = document.createElement('div');
      card.className = `sky-card ${sky.id === activeSky.id ? 'active' : ''}`;
      card.setAttribute('data-sky-id', sky.id);

      // Create gradient preview string
      const gradStops = sky.skyGradient.join(', ');
      const previewBg = `linear-gradient(135deg, ${gradStops})`;

      card.innerHTML = `
        <div class="sky-card-preview" style="background:${previewBg};">
          <div class="sky-card-cloud-demo" style="background:${sky.cloudColor};"></div>
          <span class="sky-tag-badge" style="background:${sky.badge};">${sky.tag}</span>
          ${sky.id === activeSky.id ? '<span class="sky-active-check"><i class="fas fa-check"></i></span>' : ''}
        </div>
        <div class="sky-card-info">
          <h4 class="sky-card-name">${sky.name}</h4>
          <span class="sky-card-type"><i class="fas fa-wind"></i> ${sky.cloudStyle.toUpperCase()} CLOUDS</span>
        </div>
      `;

      card.addEventListener('click', () => {
        saveSky(sky);
      });

      grid.appendChild(card);
    });
  }

  function highlightActiveSkyCard(activeId) {
    const cards = document.querySelectorAll('.sky-card');
    cards.forEach(card => {
      const id = card.getAttribute('data-sky-id');
      if (id === activeId) {
        card.classList.add('active');
        if (!card.querySelector('.sky-active-check')) {
          const preview = card.querySelector('.sky-card-preview');
          if (preview) {
            const check = document.createElement('span');
            check.className = 'sky-active-check';
            check.innerHTML = '<i class="fas fa-check"></i>';
            preview.appendChild(check);
          }
        }
      } else {
        card.classList.remove('active');
        const check = card.querySelector('.sky-active-check');
        if (check) check.remove();
      }
    });
  }

  function init() {
    skyRenderEngine = initSkyEngine();
    buildSkyStudioDrawer();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
