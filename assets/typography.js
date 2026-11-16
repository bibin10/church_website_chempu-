/**
 * St. Thomas RC Church Chempu - Typography & Font Studio Engine
 * Full granular customization for:
 * - Titles & Headings (--font-heading)
 * - Descriptions & Body Text (--font-body)
 * - Navbar & Brand Links (--font-nav)
 * - Action Buttons & Pills (--font-buttons)
 * - Badges, Eyebrows & Timings (--font-accent)
 * - Global Font Scale (--font-base-size)
 */

const TYPOGRAPHY_STORAGE_KEY = 'st_thomas_chempu_typography';
const CMS_STORAGE_KEY = 'st_thomas_chempu_site_config';

const CURATED_FONTS = [
  // Classical Majestic Serifs (Sacred, Liturgical, Traditional)
  { id: 'Marcellus', name: 'Marcellus', category: 'serif', desc: 'Classical Roman Inscriptions & Facades' },
  { id: 'Cinzel', name: 'Cinzel', category: 'serif', desc: 'Majestic Cathedral Roman Capitals' },
  { id: 'Playfair Display', name: 'Playfair Display', category: 'serif', desc: 'High-Contrast Elegant Luxury' },
  { id: 'Cormorant Garamond', name: 'Cormorant Garamond', category: 'serif', desc: 'Traditional Sacred Catholic Liturgy' },
  { id: 'EB Garamond', name: 'EB Garamond', category: 'serif', desc: 'Historical Renaissance Scripture' },
  { id: 'Lora', name: 'Lora', category: 'serif', desc: 'Warm Contemporary Literary Serif' },
  { id: 'Merriweather', name: 'Merriweather', category: 'serif', desc: 'Sturdy & Highly Readable Classic' },
  { id: 'Cinzel Decorative', name: 'Cinzel Decorative', category: 'display', desc: 'Ornate Grand Ceremonial Capitals' },

  // Clean Modern Sans-Serifs (Readability, Contemporary, Crisp)
  { id: 'Plus Jakarta Sans', name: 'Plus Jakarta Sans', category: 'sans', desc: 'Ultra-Crisp Modern Geometric' },
  { id: 'Inter', name: 'Inter', category: 'sans', desc: 'Hyper-Legible Contemporary Interface' },
  { id: 'Montserrat', name: 'Montserrat', category: 'sans', desc: 'Prestigious Architectural Solid Sans' },
  { id: 'Poppins', name: 'Poppins', category: 'sans', desc: 'Friendly Balanced Geometric' },
  { id: 'Raleway', name: 'Raleway', category: 'sans', desc: 'Refined Sophisticated High-Fashion' },
  { id: 'Outfit', name: 'Outfit', category: 'sans', desc: 'Warm Balanced Minimalist' }
];

const TYPOGRAPHY_PRESETS = [
  {
    id: 'chempu-heritage',
    name: 'Chempu Heritage (Default)',
    icon: 'fa-cross',
    desc: 'Marcellus titles, Plus Jakarta Sans body, Cinzel accents',
    fonts: {
      heading: 'Marcellus',
      body: 'Plus Jakarta Sans',
      nav: 'Plus Jakarta Sans',
      buttons: 'Plus Jakarta Sans',
      accent: 'Cinzel',
      baseSize: '100%'
    }
  },
  {
    id: 'sacred-cathedral',
    name: 'Sacred Cathedral',
    icon: 'fa-church',
    desc: 'Majestic Cinzel throughout with Plus Jakarta Sans body',
    fonts: {
      heading: 'Cinzel',
      body: 'Plus Jakarta Sans',
      nav: 'Cinzel',
      buttons: 'Cinzel',
      accent: 'Cinzel',
      baseSize: '100%'
    }
  },
  {
    id: 'venerable-classical',
    name: 'Venerable Classical',
    icon: 'fa-monument',
    desc: 'Marcellus titles, EB Garamond scripture body, Montserrat nav',
    fonts: {
      heading: 'Marcellus',
      body: 'EB Garamond',
      nav: 'Montserrat',
      buttons: 'Montserrat',
      accent: 'Cinzel',
      baseSize: '105%'
    }
  },
  {
    id: 'historical-liturgical',
    name: 'Historical Liturgical',
    icon: 'fa-book-bible',
    desc: 'Cormorant Garamond titles, Lora literary body, Raleway nav',
    fonts: {
      heading: 'Cormorant Garamond',
      body: 'Lora',
      nav: 'Raleway',
      buttons: 'Lora',
      accent: 'Cormorant Garamond',
      baseSize: '105%'
    }
  },
  {
    id: 'modern-elegant',
    name: 'Modern Elegant',
    icon: 'fa-crown',
    desc: 'Playfair Display titles, Plus Jakarta body, Poppins nav & buttons',
    fonts: {
      heading: 'Playfair Display',
      body: 'Plus Jakarta Sans',
      nav: 'Poppins',
      buttons: 'Poppins',
      accent: 'Montserrat',
      baseSize: '100%'
    }
  },
  {
    id: 'contemporary-clean',
    name: 'Contemporary Minimalist',
    icon: 'fa-gem',
    desc: 'Montserrat architectural titles, Inter hyper-clean body & nav',
    fonts: {
      heading: 'Montserrat',
      body: 'Inter',
      nav: 'Inter',
      buttons: 'Inter',
      accent: 'Plus Jakarta Sans',
      baseSize: '100%'
    }
  }
];

const DEFAULT_TYPOGRAPHY = {
  heading: 'Marcellus',
  body: 'Plus Jakarta Sans',
  nav: 'Plus Jakarta Sans',
  buttons: 'Plus Jakarta Sans',
  accent: 'Cinzel',
  baseSize: '100%'
};

/**
 * Helper to determine fallback serif / sans
 */
function getFontFamilyValue(fontName) {
  if (!fontName) return "'Plus Jakarta Sans', sans-serif";
  const item = CURATED_FONTS.find(f => f.id === fontName);
  const fallback = item && item.category === 'serif' ? 'serif' : (item && item.category === 'display' ? 'serif' : 'sans-serif');
  return `'${fontName}', ${fallback}`;
}

/**
 * Apply Typography directly to DOM Root CSS Variables
 */
function applyTypography(config, saveToStorage = true) {
  const cfg = { ...DEFAULT_TYPOGRAPHY, ...config };
  const root = document.documentElement;

  root.style.setProperty('--font-heading', getFontFamilyValue(cfg.heading));
  root.style.setProperty('--font-body', getFontFamilyValue(cfg.body));
  root.style.setProperty('--font-nav', getFontFamilyValue(cfg.nav));
  root.style.setProperty('--font-buttons', getFontFamilyValue(cfg.buttons));
  root.style.setProperty('--font-accent', getFontFamilyValue(cfg.accent));
  root.style.setProperty('--font-sans', getFontFamilyValue(cfg.body));
  root.style.setProperty('--font-serif', getFontFamilyValue(cfg.heading));

  if (cfg.baseSize) {
    root.style.setProperty('--font-base-size', cfg.baseSize);
    root.style.fontSize = cfg.baseSize;
  }

  if (saveToStorage) {
    try {
      localStorage.setItem(TYPOGRAPHY_STORAGE_KEY, JSON.stringify(cfg));
      // Also update CMS config object for complete sync
      const cmsSaved = localStorage.getItem(CMS_STORAGE_KEY);
      const cms = cmsSaved ? JSON.parse(cmsSaved) : {};
      cms.font_heading = cfg.heading;
      cms.font_body = cfg.body;
      cms.font_nav = cfg.nav;
      cms.font_buttons = cfg.buttons;
      cms.font_accent = cfg.accent;
      cms.font_base_size = cfg.baseSize;
      localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(cms));
    } catch (e) {
      console.warn('Could not persist typography config:', e);
    }
  }

  // Update live preview in Admin Panel if present
  updateAdminTypographyPreview(cfg);

  // Dispatch custom event for reactive components
  window.dispatchEvent(new CustomEvent('church-typography-changed', { detail: cfg }));
}

/**
 * Read current typography configuration
 */
function getTypographyConfig() {
  try {
    // 1. Check dedicated typography storage
    const saved = localStorage.getItem(TYPOGRAPHY_STORAGE_KEY);
    if (saved) return { ...DEFAULT_TYPOGRAPHY, ...JSON.parse(saved) };

    // 2. Check CMS main storage
    const cmsSaved = localStorage.getItem(CMS_STORAGE_KEY);
    if (cmsSaved) {
      const cms = JSON.parse(cmsSaved);
      if (cms.font_heading || cms.font_body) {
        return {
          heading: cms.font_heading || DEFAULT_TYPOGRAPHY.heading,
          body: cms.font_body || DEFAULT_TYPOGRAPHY.body,
          nav: cms.font_nav || DEFAULT_TYPOGRAPHY.nav,
          buttons: cms.font_buttons || DEFAULT_TYPOGRAPHY.buttons,
          accent: cms.font_accent || DEFAULT_TYPOGRAPHY.accent,
          baseSize: cms.font_base_size || DEFAULT_TYPOGRAPHY.baseSize
        };
      }
    }
  } catch (e) {
    console.warn('Error reading typography config:', e);
  }
  return { ...DEFAULT_TYPOGRAPHY };
}

/**
 * Update the interactive Live Preview box inside the Admin Panel
 */
function updateAdminTypographyPreview(cfg) {
  const preview = document.getElementById('typographyLivePreviewBox');
  if (!preview) return;

  const hEl = preview.querySelector('.preview-heading');
  const bEl = preview.querySelector('.preview-body');
  const nEl = preview.querySelector('.preview-nav');
  const btnEl = preview.querySelector('.preview-btn');
  const aEl = preview.querySelector('.preview-accent');

  if (hEl) hEl.style.fontFamily = getFontFamilyValue(cfg.heading);
  if (bEl) bEl.style.fontFamily = getFontFamilyValue(cfg.body);
  if (nEl) nEl.style.fontFamily = getFontFamilyValue(cfg.nav);
  if (btnEl) btnEl.style.fontFamily = getFontFamilyValue(cfg.buttons);
  if (aEl) aEl.style.fontFamily = getFontFamilyValue(cfg.accent);
}

/**
 * Build HTML for Font <select> Dropdown options
 */
function buildFontSelectOptions(selectedFontId) {
  const serifs = CURATED_FONTS.filter(f => f.category === 'serif' || f.category === 'display');
  const sans = CURATED_FONTS.filter(f => f.category === 'sans');

  const renderGroup = (label, list) => {
    const opts = list.map(f =>
      `<option value="${f.id}" ${f.id === selectedFontId ? 'selected' : ''} style="font-family:'${f.id}', sans-serif;">${f.name} &bull; ${f.desc}</option>`
    ).join('');
    return `<optgroup label="${label}">${opts}</optgroup>`;
  };

  return `${renderGroup('Majestic Serifs & Classical Tradition', serifs)}${renderGroup('Clean Modern Sans-Serifs', sans)}`;
}

/**
 * Inject the Quick Font Studio Drawer on the Live Site (index.html)
 */
function injectLiveSiteFontDrawer() {
  if (document.getElementById('fontStudioDrawer') || document.body.classList.contains('admin-page') || document.querySelector('.admin-workspace')) {
    return; // Don't inject on admin pages
  }

  // 1. Floating Launcher Pill
  const launcher = document.createElement('button');
  launcher.id = 'fontLauncherBtn';
  launcher.className = 'font-launcher-btn';
  launcher.setAttribute('aria-label', 'Open Typography & Font Customizer');
  launcher.setAttribute('title', 'Change Fonts & Typography');
  launcher.innerHTML = `
    <span class="font-launcher-icon"><i class="fas fa-font"></i></span>
    <span class="font-launcher-text">Fonts</span>
  `;

  // 2. Backdrop & Drawer Container
  const backdrop = document.createElement('div');
  backdrop.id = 'fontDrawerBackdrop';
  backdrop.className = 'font-drawer-backdrop';

  const drawer = document.createElement('div');
  drawer.id = 'fontStudioDrawer';
  drawer.className = 'font-studio-drawer';
  drawer.setAttribute('role', 'dialog');
  drawer.setAttribute('aria-labelledby', 'fontDrawerTitle');

  const currentCfg = getTypographyConfig();

  drawer.innerHTML = `
    <div class="font-drawer-header">
      <div class="font-drawer-title-wrap">
        <i class="fas fa-font" style="color:var(--gold-primary);"></i>
        <h3 id="fontDrawerTitle">Website Typography Studio</h3>
      </div>
      <button class="close-font-drawer-btn" id="closeFontDrawerBtn" aria-label="Close Font Customizer">
        <i class="fas fa-times"></i>
      </button>
    </div>

    <div class="font-drawer-body">
      <!-- Typography Presets Section -->
      <div class="font-drawer-section">
        <div class="font-section-title">
          <span>Curated Typography Pairings</span>
          <span class="font-section-badge">1-Click Apply</span>
        </div>
        <div class="font-presets-grid" id="fontPresetsGrid">
          ${TYPOGRAPHY_PRESETS.map(p => `
            <button type="button" class="font-preset-card" data-preset-id="${p.id}">
              <div class="preset-card-top">
                <i class="fas ${p.icon}"></i>
                <strong>${p.name}</strong>
              </div>
              <p>${p.desc}</p>
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Field-by-Field Selectors -->
      <div class="font-drawer-section">
        <div class="font-section-title">
          <span>Individual Field Customization</span>
        </div>

        <div class="font-control-group">
          <label><i class="fas fa-heading"></i> Titles &amp; Headings Font</label>
          <small>Hero title, Section titles, Card headers</small>
          <select id="liveFontHeadingSelect" class="font-select-field">
            ${buildFontSelectOptions(currentCfg.heading)}
          </select>
        </div>

        <div class="font-control-group">
          <label><i class="fas fa-paragraph"></i> Descriptions &amp; Body Text Font</label>
          <small>Paragraphs, Section leads, History story, Notes</small>
          <select id="liveFontBodySelect" class="font-select-field">
            ${buildFontSelectOptions(currentCfg.body)}
          </select>
        </div>

        <div class="font-control-group">
          <label><i class="fas fa-compass"></i> Navbar &amp; Brand Links Font</label>
          <small>Header menu links, Church brand name, Subtitle</small>
          <select id="liveFontNavSelect" class="font-select-field">
            ${buildFontSelectOptions(currentCfg.nav)}
          </select>
        </div>

        <div class="font-control-group">
          <label><i class="fas fa-toggle-on"></i> Action Buttons &amp; Pills Font</label>
          <small>Hero pills, Holy Mass buttons, Call to actions</small>
          <select id="liveFontButtonsSelect" class="font-select-field">
            ${buildFontSelectOptions(currentCfg.buttons)}
          </select>
        </div>

        <div class="font-control-group">
          <label><i class="fas fa-clock"></i> Badges, Eyebrows &amp; Timings Font</label>
          <small>Section badges, Mass timing boxes, Feast dates</small>
          <select id="liveFontAccentSelect" class="font-select-field">
            ${buildFontSelectOptions(currentCfg.accent)}
          </select>
        </div>

        <div class="font-control-group">
          <label><i class="fas fa-text-height"></i> Overall Font Size Scale</label>
          <div class="font-size-scale-pills">
            <button type="button" class="font-scale-btn ${currentCfg.baseSize === '95%' ? 'active' : ''}" data-scale="95%">Compact (95%)</button>
            <button type="button" class="font-scale-btn ${currentCfg.baseSize === '100%' || !currentCfg.baseSize ? 'active' : ''}" data-scale="100%">Standard (100%)</button>
            <button type="button" class="font-scale-btn ${currentCfg.baseSize === '105%' ? 'active' : ''}" data-scale="105%">Comfort (105%)</button>
            <button type="button" class="font-scale-btn ${currentCfg.baseSize === '110%' ? 'active' : ''}" data-scale="110%">Large (110%)</button>
          </div>
        </div>
      </div>
    </div>

    <div class="font-drawer-footer">
      <button type="button" class="btn-secondary" id="resetTypographyBtn" style="flex:1; padding:0.65rem 1rem; font-size:0.85rem;">
        <i class="fas fa-undo"></i> Reset to Default
      </button>
      <button type="button" class="btn-primary" id="closeDrawerApplyBtn" style="flex:1; padding:0.65rem 1rem; font-size:0.85rem;">
        <i class="fas fa-check"></i> Done
      </button>
    </div>
  `;

  document.body.appendChild(launcher);
  document.body.appendChild(backdrop);
  document.body.appendChild(drawer);

  // Bind Drawer Events
  function openDrawer() {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  launcher.addEventListener('click', openDrawer);
  document.getElementById('closeFontDrawerBtn').addEventListener('click', closeDrawer);
  document.getElementById('closeDrawerApplyBtn').addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });

  // Event handlers for field selects
  const getDrawerValues = () => ({
    heading: document.getElementById('liveFontHeadingSelect').value,
    body: document.getElementById('liveFontBodySelect').value,
    nav: document.getElementById('liveFontNavSelect').value,
    buttons: document.getElementById('liveFontButtonsSelect').value,
    accent: document.getElementById('liveFontAccentSelect').value,
    baseSize: drawer.querySelector('.font-scale-btn.active')?.getAttribute('data-scale') || '100%'
  });

  ['liveFontHeadingSelect', 'liveFontBodySelect', 'liveFontNavSelect', 'liveFontButtonsSelect', 'liveFontAccentSelect'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('change', () => {
        applyTypography(getDrawerValues(), true);
      });
    }
  });

  // Scale buttons
  drawer.querySelectorAll('.font-scale-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      drawer.querySelectorAll('.font-scale-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyTypography(getDrawerValues(), true);
    });
  });

  // Presets click
  drawer.querySelectorAll('.font-preset-card').forEach(card => {
    card.addEventListener('click', () => {
      const pid = card.getAttribute('data-preset-id');
      const preset = TYPOGRAPHY_PRESETS.find(p => p.id === pid);
      if (preset) {
        document.getElementById('liveFontHeadingSelect').value = preset.fonts.heading;
        document.getElementById('liveFontBodySelect').value = preset.fonts.body;
        document.getElementById('liveFontNavSelect').value = preset.fonts.nav;
        document.getElementById('liveFontButtonsSelect').value = preset.fonts.buttons;
        document.getElementById('liveFontAccentSelect').value = preset.fonts.accent;

        drawer.querySelectorAll('.font-scale-btn').forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-scale') === preset.fonts.baseSize);
        });

        applyTypography(preset.fonts, true);
      }
    });
  });

  // Reset
  document.getElementById('resetTypographyBtn').addEventListener('click', () => {
    document.getElementById('liveFontHeadingSelect').value = DEFAULT_TYPOGRAPHY.heading;
    document.getElementById('liveFontBodySelect').value = DEFAULT_TYPOGRAPHY.body;
    document.getElementById('liveFontNavSelect').value = DEFAULT_TYPOGRAPHY.nav;
    document.getElementById('liveFontButtonsSelect').value = DEFAULT_TYPOGRAPHY.buttons;
    document.getElementById('liveFontAccentSelect').value = DEFAULT_TYPOGRAPHY.accent;

    drawer.querySelectorAll('.font-scale-btn').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-scale') === '100%');
    });

    applyTypography(DEFAULT_TYPOGRAPHY, true);
  });
}

/**
 * Initialize Typography Engine
 */
function initTypographyEngine() {
  const currentCfg = getTypographyConfig();
  applyTypography(currentCfg, false);

  // If live site, inject drawer
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectLiveSiteFontDrawer);
  } else {
    injectLiveSiteFontDrawer();
  }
}

// Auto-run immediately so CSS variables are active before page paint
initTypographyEngine();

