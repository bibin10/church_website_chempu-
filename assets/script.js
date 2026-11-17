// St. Thomas RC Church Chempu - Interactive Client Scripts
// Integrated with Parish CMS Admin Synchronizer

const STORAGE_KEY = 'st_thomas_chempu_site_config';
const INTENTIONS_KEY = 'st_thomas_prayer_intentions';

const DEFAULT_ADMIN_CONFIG = {
  vicar_name: 'Rev. Fr. Vicar',
  vicar_malayalam: 'ഇടവക വികാരി',
  vicar_role: 'Vicar & Pastoral Head',
  vicar_phone: '+91 4829-273176',
  vicar_photo: 'assets/images/vicar_avatar.svg',
  vicar_desc: 'Oversees all liturgical celebrations, sacraments, pastoral care, and spiritual guidance of St. Thomas Church Chempu.',
  trustee1_name: 'Parish Trustee 1',
  trustee1_malayalam: 'കൈക്കാരൻ',
  trustee1_role: 'Church Trustee',
  trustee1_phone: '+91 94470 00000',
  trustee1_photo: 'assets/images/trustee1_avatar.svg',
  trustee1_desc: 'Managing temporal administration, church assets, accounts, and festive celebrations.',
  trustee2_name: 'Parish Trustee 2',
  trustee2_malayalam: 'കൈക്കാരൻ',
  trustee2_role: 'Church Trustee',
  trustee2_phone: '+91 94470 00000',
  trustee2_photo: 'assets/images/trustee2_avatar.svg',
  trustee2_desc: 'Overseeing parish development projects, development initiatives, and community logistics.',
  vice_chairman_name: 'Family Unit Vice Chairman',
  vice_chairman_malayalam: 'കുടുംബകൂട്ടായ്മ വൈസ് ചെയർമാൻ',
  vice_chairman_role: 'Pastoral Council Vice Chairman',
  vice_chairman_phone: '+91 94470 00000',
  vice_chairman_photo: 'assets/images/vice_chairman_avatar.svg',
  vice_chairman_desc: 'Coordinating 12+ Kudumba Kootayma (Family Units), monthly ward prayer meetings, and parish fellowship.',
  history_image: 'assets/images/st_thomas_chempu_church_vertical.jpg',
  kandathil_photo: 'assets/images/mar_augustine_kandathil_portrait.jpg',
  mass_novena_time: 'Every Thursday 06:15 PM'
};

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 0. Content Hydration from Admin CMS LocalStorage
  // =========================================================================
  function applyAdminConfig() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      let parsed = {};
      if (saved) {
        try { parsed = JSON.parse(saved); } catch (e) { parsed = {}; }
      }
      const cfg = { ...DEFAULT_ADMIN_CONFIG, ...parsed };

      // Helper function to safely update text content
      const setText = (id, val, fallback) => {
        const el = document.getElementById(id);
        if (!el) return;
        if (val !== undefined && val !== null && String(val).trim() !== '') {
          el.textContent = val;
        } else if (fallback !== undefined) {
          el.textContent = fallback;
        }
      };

      const setHTML = (id, val, fallback) => {
        const el = document.getElementById(id);
        if (!el) return;
        if (val !== undefined && val !== null && String(val).trim() !== '') {
          el.innerHTML = val;
        } else if (fallback !== undefined) {
          el.innerHTML = fallback;
        }
      };

      const setImage = (id, val, fallbackSrc) => {
        const el = document.getElementById(id);
        if (!el) return;
        if (val && String(val).trim() !== '') {
          el.src = val;
        } else if (fallbackSrc) {
          el.src = fallbackSrc;
        }
      };

      // 1. Notice Bar
      setText('live_notice_badge', cfg.notice_badge);
      setText('live_notice_text', cfg.notice_text);
      if (cfg.notice_phone) {
        const pEl = document.getElementById('live_notice_phone');
        if (pEl) pEl.innerHTML = `<i class="fas fa-phone-alt"></i> ${cfg.notice_phone}`;
      }
      if (cfg.notice_address) {
        const aEl = document.getElementById('live_notice_address');
        if (aEl) aEl.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${cfg.notice_address}`;
      }

      // 2. Hero Section
      const heroImg = document.getElementById('live_hero_bg_media');
      if (cfg.hero_image && heroImg) {
        heroImg.src = cfg.hero_image;
      }
      if (cfg.hero_badge) {
        const bEl = document.getElementById('live_hero_badge');
        if (bEl) bEl.innerHTML = `<i class="fas fa-dove"></i> ${cfg.hero_badge}`;
      }
      if (cfg.hero_title1 && cfg.hero_title2) {
        setHTML('live_hero_title', `${cfg.hero_title1} <br><span>${cfg.hero_title2}</span>`);
      }
      setText('live_hero_malayalam', cfg.hero_malayalam);
      setText('live_hero_desc', cfg.hero_desc);
      setText('live_stat1_val', cfg.stat1_val);
      setText('live_stat1_lbl', cfg.stat1_lbl);
      setText('live_stat2_val', cfg.stat2_val);
      setText('live_stat2_lbl', cfg.stat2_lbl);
      setText('live_stat3_val', cfg.stat3_val);
      setText('live_stat3_lbl', cfg.stat3_lbl);

      // 3. Mass Ribbon
      setText('live_ribbon_daily', cfg.mass_ribbon_daily);
      setText('live_ribbon_thu', cfg.mass_ribbon_thu);
      setText('live_ribbon_sunday', cfg.mass_ribbon_sunday);

      // 4. Detailed Mass Timings
      setText('live_mass_sun1', cfg.mass_sun1_time);
      setText('live_mass_sun2', cfg.mass_sun2_time);
      setText('live_mass_catechism', cfg.mass_catechism_time);
      setText('live_mass_weekday1', cfg.mass_weekday1_time);
      setText('live_mass_thu', cfg.mass_thu_time);
      setText('live_mass_fri', cfg.mass_fri_time);
      setText('live_mass_sat', cfg.mass_sat_time);
      setText('live_mass_confession', cfg.mass_confession_time);
      if (cfg.mass_novena_time === 'First Fridays 06:00 PM' || cfg.mass_novena_time === 'Thursdays 06:00 PM') {
        cfg.mass_novena_time = 'Every Thursday 06:15 PM';
      }
      setText('live_mass_novena', cfg.mass_novena_time, 'Every Thursday 06:15 PM');

      // 5. History
      setImage('live_history_img', cfg.history_image, 'assets/images/st_thomas_chempu_church_vertical.jpg');
      setText('live_history_eyebrow', cfg.history_eyebrow);
      setText('live_history_title', cfg.history_title);
      setText('live_history_lead', cfg.history_lead);
      setText('live_history_p1', cfg.history_p1);
      setText('live_history_p2', cfg.history_p2);

      // 5.5. Mar Augustine Kandathil Showcase
      setImage('live_kandathil_photo', cfg.kandathil_photo, 'assets/images/mar_augustine_kandathil_portrait.jpg');
      setText('live_kandathil_eyebrow', cfg.kandathil_eyebrow);
      setText('live_kandathil_title', cfg.kandathil_title);
      setText('live_kandathil_sub', cfg.kandathil_sub || cfg.kandathil_subtitle);
      setText('live_kandathil_lead', cfg.kandathil_lead);
      setText('live_kandathil_p1', cfg.kandathil_p1);
      setText('live_kandathil_p2', cfg.kandathil_p2);
      setText('live_kandathil_p3', cfg.kandathil_p3);
      setText('live_kandathil_quote', cfg.kandathil_quote);

      // 6. Feasts (Main Patronal Feast)
      setText('live_feast_main_name', cfg.feast_main_name);
      if (cfg.feast_main_date) {
        const dEl = document.getElementById('live_feast_main_date');
        if (dEl) dEl.innerHTML = `<i class="far fa-calendar-alt"></i> ${cfg.feast_main_date}`;
      }
      setText('live_feast_main_desc', cfg.feast_main_desc);

      // 7. Administration & Leadership
      const setContactPhone = (wrapId, textId, val, fallback) => {
        const wrap = document.getElementById(wrapId);
        const el = document.getElementById(textId);
        if (!el) return;
        const phone = (val !== undefined && val !== null && String(val).trim() !== '') ? String(val).trim() : (fallback || '');
        if (phone) {
          el.textContent = phone;
          if (wrap) wrap.style.display = 'inline-flex';
        } else {
          if (wrap) wrap.style.display = 'none';
        }
      };

      setText('live_vicar_name', cfg.vicar_name, 'Rev. Fr. Vicar');
      setText('live_vicar_malayalam', cfg.vicar_malayalam, 'ഇടവക വികാരി');
      setText('live_vicar_role', cfg.vicar_role, 'Vicar & Pastoral Head');
      setText('live_vicar_desc', cfg.vicar_desc || cfg.admin_vicar_desc, 'Oversees all liturgical celebrations, sacraments, pastoral care, and spiritual guidance of St. Thomas Church Chempu.');
      setContactPhone('live_vicar_phone_wrap', 'live_vicar_phone', cfg.vicar_phone, '+91 4829-273176');
      setImage('live_vicar_photo', cfg.vicar_photo, 'assets/images/vicar_avatar.svg');

      setText('live_trustee1_name', cfg.trustee1_name, 'Parish Trustee 1');
      setText('live_trustee1_malayalam', cfg.trustee1_malayalam, 'കൈക്കാരൻ');
      setText('live_trustee1_role', cfg.trustee1_role, 'Church Trustee');
      setText('live_trustee1_desc', cfg.trustee1_desc || cfg.admin_trustees_desc, 'Managing temporal administration, church assets, accounts, and festive celebrations.');
      setContactPhone('live_trustee1_phone_wrap', 'live_trustee1_phone', cfg.trustee1_phone, '+91 94470 00000');
      setImage('live_trustee1_photo', cfg.trustee1_photo, 'assets/images/trustee1_avatar.svg');

      setText('live_trustee2_name', cfg.trustee2_name, 'Parish Trustee 2');
      setText('live_trustee2_malayalam', cfg.trustee2_malayalam, 'കൈക്കാരൻ');
      setText('live_trustee2_role', cfg.trustee2_role, 'Church Trustee');
      setText('live_trustee2_desc', cfg.trustee2_desc || cfg.admin_trustees_desc, 'Overseeing parish development projects, development initiatives, and community logistics.');
      setContactPhone('live_trustee2_phone_wrap', 'live_trustee2_phone', cfg.trustee2_phone, '+91 94470 00000');
      setImage('live_trustee2_photo', cfg.trustee2_photo, 'assets/images/trustee2_avatar.svg');

      setText('live_vice_chairman_name', cfg.vice_chairman_name, 'Family Unit Vice Chairman');
      setText('live_vice_chairman_malayalam', cfg.vice_chairman_malayalam, 'കുടുംബകൂട്ടായ്മ വൈസ് ചെയർമാൻ');
      setText('live_vice_chairman_role', cfg.vice_chairman_role, 'Pastoral Council Vice Chairman');
      setText('live_vice_chairman_desc', cfg.vice_chairman_desc || cfg.admin_council_desc, 'Coordinating 12+ Kudumba Kootayma (Family Units), monthly ward prayer meetings, and parish fellowship.');
      setContactPhone('live_vice_chairman_phone_wrap', 'live_vice_chairman_phone', cfg.vice_chairman_phone, '+91 94470 00000');
      setImage('live_vice_chairman_photo', cfg.vice_chairman_photo, 'assets/images/vice_chairman_avatar.svg');

      // 7.5. SD Sisters & Convent
      setText('live_sd_title', cfg.sd_title, 'Sisters of the Destitute (SD Convent, Chempu)');
      setText('live_sd_malayalam', cfg.sd_malayalam, 'ദീനദയാലു സന്യാസിനി സമൂഹം (എസ്.ഡി. കോൺവെന്റ്, ചെമ്പ്)');
      if (cfg.sd_years_chempu) {
        setHTML('live_sd_years_chempu', `<i class="fas fa-medal"></i> ${cfg.sd_years_chempu}`);
      }
      if (cfg.sd_years_congregation) {
        setHTML('live_sd_years_congregation', `<i class="fas fa-star"></i> ${cfg.sd_years_congregation}`);
      }
      setText('live_sd_desc', cfg.sd_desc);

      // 7.6. Filial Church: St. Mary's Chemmanakary (Holyland)
      setText('live_chemmanakary_title', cfg.chemmanakary_title, "St. Mary's Church, Chemmanakary (Holyland)");
      setText('live_chemmanakary_malayalam', cfg.chemmanakary_malayalam, 'സെന്റ് മേരീസ് പള്ളി, ചെമ്മനാകരി (ഹോളിലാൻഡ് ദേവാലയം)');
      if (cfg.chemmanakary_badge1) {
        setHTML('live_chemmanakary_badge1', `<i class="fas fa-landmark"></i> ${cfg.chemmanakary_badge1}`);
      }
      if (cfg.chemmanakary_badge2) {
        setHTML('live_chemmanakary_badge2', `<i class="fas fa-map-marker-alt"></i> ${cfg.chemmanakary_badge2}`);
      }
      setText('live_chemmanakary_desc', cfg.chemmanakary_desc);

      // 7.7. Parish Institutions & Facilities
      setText('live_inst_school_title', cfg.inst_school_title, 'St. Thomas L.P. School, Chempu');
      setText('live_inst_school_malayalam', cfg.inst_school_malayalam, 'സെന്റ് തോമസ് എൽ.പി. സ്കൂൾ, ചെമ്പ്');
      setText('live_inst_school_desc', cfg.inst_school_desc);

      setText('live_inst_cultural_title', cfg.inst_cultural_title, 'St. Thomas Cultural Centre, Chempu');
      setText('live_inst_cultural_malayalam', cfg.inst_cultural_malayalam, 'സെന്റ് തോമസ് കൾച്ചറൽ സെന്റർ, ചെമ്പ്');
      setText('live_inst_cultural_desc', cfg.inst_cultural_desc);

      setText('live_inst_complex_title', cfg.inst_complex_title, 'St. Thomas Shopping Complex, Chempu');
      setText('live_inst_complex_malayalam', cfg.inst_complex_malayalam, 'സെന്റ് തോമസ് ഷോപ്പിംഗ് കോംപ്ലക്സ്, ചെമ്പ്');
      setText('live_inst_complex_desc', cfg.inst_complex_desc);

      // 7.8. Pious Associations & Pastoral Wings Header
      if (cfg.wings_eyebrow) {
        setHTML('live_wings_eyebrow', `<i class="fas fa-hands-helping"></i> ${escapeHtml(cfg.wings_eyebrow)}`);
      }
      setText('live_wings_title', cfg.wings_title, 'Pious Associations & Pastoral Wings');
      setText('live_wings_lead', cfg.wings_lead);

      // 8. Contact
      if (cfg.contact_phone) {
        const cpEl = document.getElementById('live_contact_phone');
        if (cpEl) cpEl.innerHTML = `<a href="tel:${cfg.contact_phone}">${cfg.contact_phone}</a>`;
      }
      setText('live_contact_diocese', cfg.contact_diocese);
      if (cfg.contact_address) {
        const caEl = document.getElementById('live_contact_address');
        if (caEl) caEl.innerHTML = cfg.contact_address.replace(/\n/g, '<br>');
      }
      if (cfg.contact_hours) {
        const chEl = document.getElementById('live_contact_hours');
        if (chEl) chEl.innerHTML = cfg.contact_hours.replace(/\n/g, '<br>');
      }
    } catch (e) {
      console.warn('Config hydration error', e);
    }
  }
  applyAdminConfig();

  // Real-time synchronization when LocalStorage updates from Admin tab
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY || !e.key) {
      applyAdminConfig();
    }
    if (e.key === NAV_ITEMS_KEY || !e.key) {
      applyNavConfig();
    }
    if (e.key === FEASTS_KEY || !e.key) {
      if (typeof applyFeastsConfig === 'function') applyFeastsConfig();
    }
    if (e.key === HIGHLIGHTS_KEY || !e.key) {
      if (typeof applyHighlightsConfig === 'function') applyHighlightsConfig();
    }
  });

  // =========================================================================
  // 0.5. Dynamic Navbar Hydration from Admin CMS LocalStorage
  // =========================================================================
  const NAV_ITEMS_KEY = 'st_thomas_nav_items';
  const DEFAULT_NAV_ITEMS = [
    { label: 'Home', url: '#home' },
    { label: 'Heritage & History', url: '#about' },
    { label: 'Holy Mass', url: '#mass-timings' },
    { label: 'Feasts', url: '#feasts' },
    { label: 'Gallery', url: '#gallery' },
    { label: 'Parish Council', url: '#administration' },
    { label: 'Community', url: 'community.html' },
    { label: 'Contact', url: 'contact.html' }
  ];

  function applyNavConfig() {
    const navUl = document.getElementById('navLinks');
    if (!navUl) return;

    const isCommunityPage = window.location.pathname.endsWith('community.html');
    const isContactPage = window.location.pathname.endsWith('contact.html');

    let items = DEFAULT_NAV_ITEMS;
    try {
      const saved = localStorage.getItem(NAV_ITEMS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          items = parsed;
        }
      }
    } catch (e) {
      console.warn('Navbar config error', e);
    }

    if (!Array.isArray(items) || items.length === 0) return;

    // Normalize any legacy stored #contact or index.html#contact links to contact.html
    items = items.map(item => {
      if (item.label.toLowerCase() === 'contact' || item.url === '#contact' || item.url === 'index.html#contact') {
        return { label: item.label, url: 'contact.html' };
      }
      return item;
    });

    // Ensure Community link exists in menu
    if (!items.some(i => i.url === 'community.html')) {
      const contactIdx = items.findIndex(i => i.url === 'contact.html');
      if (contactIdx >= 0) {
        items.splice(contactIdx, 0, { label: 'Community', url: 'community.html' });
      } else {
        items.push({ label: 'Community', url: 'community.html' });
      }
    }

    const currentHash = window.location.hash || '#home';
    navUl.innerHTML = '';

    items.forEach((item, index) => {
      const li = document.createElement('li');
      const a = document.createElement('a');

      let targetUrl = item.url;
      let isActive = false;

      if (isCommunityPage) {
        if (item.url === 'community.html') {
          isActive = true;
          targetUrl = '#top';
        } else if (item.url.startsWith('#')) {
          targetUrl = `index.html${item.url}`;
        }
      } else if (isContactPage) {
        if (item.url === 'contact.html') {
          isActive = true;
          targetUrl = '#top';
        } else if (item.url.startsWith('#')) {
          targetUrl = `index.html${item.url}`;
        }
      } else {
        if (item.url === 'contact.html') {
          targetUrl = 'contact.html';
        } else if (item.url === currentHash || (index === 0 && (!window.location.hash || window.location.hash === '#'))) {
          isActive = true;
        }
      }

      a.href = targetUrl;
      a.textContent = item.label;
      if (isActive) a.classList.add('active');

      // Close mobile menu on click
      a.addEventListener('click', () => {
        navUl.classList.remove('open');
        const mobileToggle = document.getElementById('mobileNavToggle');
        if (mobileToggle) {
          const icon = mobileToggle.querySelector('i');
          if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
          }
        }
      });

      li.appendChild(a);
      navUl.appendChild(li);
    });
  }

  applyNavConfig();

  // =========================================================================
  // 0.6. Dynamic Other Feasts Hydration from Admin CMS LocalStorage
  // =========================================================================
  const FEASTS_KEY = 'st_thomas_parish_feasts';
  const DEFAULT_FEASTS = [
    {
      month: 'Jan',
      day: '06',
      title: 'Danaha Thirunal (Epiphany / Rakkuli)',
      desc: 'Commemoration of the Baptism of Jesus with water blessing and festive prayers.'
    },
    {
      month: 'Apr',
      day: 'Pass',
      title: 'Holy Week & Easter (ഉയിർപ്പ് തിരുനാൾ)',
      desc: 'Solemn liturgical services of Pesaha, Passion Friday, and Glorious Easter Resurrection.'
    },
    {
      month: 'Sep',
      day: '08',
      title: 'Nativity of Mother Mary (എട്ടുനോമ്പ്)',
      desc: 'Eight days of devotion, harvest offerings (Puthari), and Marian prayers.'
    },
    {
      month: 'Dec',
      day: '25',
      title: 'Christmas (പിറവി തിരുനാൾ)',
      desc: 'Midnight Holy Qurbana, Christmas carol visits across parish wards, and community joy.'
    }
  ];

  function applyFeastsConfig() {
    const container = document.getElementById('other-feasts-container');
    if (!container) return;

    let items = DEFAULT_FEASTS;
    try {
      const saved = localStorage.getItem(FEASTS_KEY);
      if (saved) items = JSON.parse(saved);
    } catch (e) {
      console.warn('Feasts config error', e);
    }

    if (!Array.isArray(items) || items.length === 0) {
      container.innerHTML = '<p style="color:#64748b; font-style:italic;">No upcoming parish feasts scheduled.</p>';
      return;
    }

    container.innerHTML = '';
    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'feast-mini-card';
      card.innerHTML = `
        <div class="feast-date-box">
          <span class="date-box-month">${escapeHtml(item.month || 'Feast')}</span>
          <span class="date-box-day">${escapeHtml(item.day || '•')}</span>
        </div>
        <div class="feast-mini-info">
          <h4>${escapeHtml(item.title || '')}</h4>
          <p>${escapeHtml(item.desc || '')}</p>
        </div>
      `;
      container.appendChild(card);
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }

  applyFeastsConfig();

  // =========================================================================
  // 0.7. Dynamic Main Feast Highlights Hydration from Admin CMS
  // =========================================================================
  const HIGHLIGHTS_KEY = 'st_thomas_feast_highlights';
  const DEFAULT_HIGHLIGHTS = [
    'Solemn Kodiyettu Ceremony',
    'Grand Evening Raza & Procession',
    'Melodious Liturgical Choir',
    'Parish Nercha & Snehabhojanam'
  ];

  function resolveIconForKeyword(text) {
    if (!text) return 'fa-circle-check';
    const lower = text.toLowerCase();

    if (lower.includes('kodi') || lower.includes('flag') || lower.includes('hoist') || lower.includes('banner')) return 'fa-flag';
    if (lower.includes('raza') || lower.includes('procession') || lower.includes('pradakshinam') || lower.includes('pradakhshinam') || lower.includes('fire') || lower.includes('candle') || lower.includes('torch')) return 'fa-fire';
    if (lower.includes('choir') || lower.includes('music') || lower.includes('sing') || lower.includes('song') || lower.includes('hymn') || lower.includes('band') || lower.includes('melody') || lower.includes('melodious')) return 'fa-music';
    if (lower.includes('nercha') || lower.includes('snehabhojan') || lower.includes('bhojan') || lower.includes('food') || lower.includes('meal') || lower.includes('feast') || lower.includes('eat') || lower.includes('utensil') || lower.includes('pachor')) return 'fa-utensils';
    if (lower.includes('cross') || lower.includes('thomas') || lower.includes('apostle') || lower.includes('saint')) return 'fa-cross';
    if (lower.includes('qurbana') || lower.includes('mass') || lower.includes('chalice') || lower.includes('altar') || lower.includes('eucharist') || lower.includes('liturg')) return 'fa-wine-glass-alt';
    if (lower.includes('pray') || lower.includes('rosary') || lower.includes('novena') || lower.includes('adoration') || lower.includes('bless') || lower.includes('worship')) return 'fa-hands-praying';
    if (lower.includes('bell') || lower.includes('chime') || lower.includes('mani')) return 'fa-bell';
    if (lower.includes('light') || lower.includes('star') || lower.includes('spark') || lower.includes('diya')) return 'fa-star';
    if (lower.includes('dove') || lower.includes('spirit') || lower.includes('peace')) return 'fa-dove';
    if (lower.includes('gift') || lower.includes('offer') || lower.includes('kaazh') || lower.includes('kazhcha')) return 'fa-gift';
    if (lower.includes('book') || lower.includes('bible') || lower.includes('gospel') || lower.includes('read') || lower.includes('scripture')) return 'fa-book-bible';
    if (lower.includes('water') || lower.includes('baptis') || lower.includes('rakkuli')) return 'fa-water';
    if (lower.includes('love') || lower.includes('heart') || lower.includes('charity') || lower.includes('karunya')) return 'fa-heart';
    if (lower.includes('crown') || lower.includes('king') || lower.includes('queen') || lower.includes('raja')) return 'fa-crown';

    return 'fa-check-circle';
  }

  function applyHighlightsConfig() {
    const container = document.getElementById('live_fest_features');
    if (!container) return;

    let items = DEFAULT_HIGHLIGHTS;
    try {
      const saved = localStorage.getItem(HIGHLIGHTS_KEY);
      if (saved) items = JSON.parse(saved);
    } catch (e) {
      console.warn('Highlights config error', e);
    }

    if (!Array.isArray(items) || items.length === 0) {
      container.innerHTML = '';
      return;
    }

    container.innerHTML = '';
    items.forEach(text => {
      const icon = resolveIconForKeyword(text);
      const div = document.createElement('div');
      div.className = 'fest-feat-item';
      div.innerHTML = `<i class="fas ${icon}"></i> ${escapeHtml(text)}`;
      container.appendChild(div);
    });
  }

  applyHighlightsConfig();

  // =========================================================================
  // 0.8. Dynamic Pious Associations & Pastoral Wings Hydration from Admin CMS
  // =========================================================================
  const WINGS_KEY = 'st_thomas_pious_wings';
  const DEFAULT_PIOUS_WINGS = [
    {
      icon: 'fa-hand-holding-heart',
      tag: 'Charity & Relief',
      title: 'St. Vincent de Paul Society',
      malayalam: 'വിൻസെന്റ് ഡി പോൾ സൊസൈറ്റി (SVP)',
      desc: 'Providing compassionate monthly ration distribution, medical aid, education support, and emergency relief to underprivileged parish families.',
      footer: 'Weekly Family Care & Mercy Ministry'
    },
    {
      icon: 'fa-dove',
      tag: 'Family Ministry',
      title: 'Mathruvedi',
      malayalam: "മാതൃവേദി (Mothers' Guild)",
      desc: 'Fostering Christian motherhood, domestic prayers, altar floral arrangements, family values, and pastoral solidarity among parish mothers.',
      footer: 'Domestic Church & Marian Fellowship'
    },
    {
      icon: 'fa-shield-alt',
      tag: 'Parish Guardians',
      title: 'Pithruvedi',
      malayalam: "പിതൃവേദി (Fathers' Guild)",
      desc: 'Catholic fathers committed to spiritual leadership, temporal parish security, feast logistics, and youth mentoring.',
      footer: 'Temporal Leadership & Feast Support'
    },
    {
      icon: 'fa-fire',
      tag: 'Youth Wing',
      title: 'SMYM Youth Movement',
      malayalam: 'എസ്.എം.വൈ.എം. യൂത്ത് മൂവ്മെന്റ്',
      desc: 'Energizing parish youth through gospel values, blood donation drives, sports, creative arts, and leadership conventions.',
      footer: 'Youth Leadership & Community Service'
    },
    {
      icon: 'fa-music',
      tag: 'Sacred Choral',
      title: 'St. Thomas Liturgical Choir',
      malayalam: 'ദേവാലയ ഗായകസംഘം',
      desc: 'Leading celestial East-Syriac and Malayalam liturgical hymns, sacred psalms, and solemn choral devotions during Holy Qurbana.',
      footer: 'Sacred Music & Feast Choral Service'
    },
    {
      icon: 'fa-crown',
      tag: 'Marian Devotion',
      title: 'Legion of Mary',
      malayalam: 'ലെജിയൻ ഓഫ് മേരി',
      desc: 'Devoted Marian legionaries engaged in weekly rosary chains, hospital visitations, and comforting the homebound elderly.',
      footer: 'Weekly Rosary & Spiritual Solace'
    }
  ];

  function applyPiousWingsConfig() {
    const container = document.getElementById('piousWingsContainer');
    if (!container) return;

    let items = DEFAULT_PIOUS_WINGS;
    try {
      const saved = localStorage.getItem(WINGS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) items = parsed;
      }
    } catch (e) {
      console.warn('Pious wings config error', e);
    }

    container.innerHTML = '';
    const isIndex = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/');

    items.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = isIndex ? 'pious-wing-card scroll-reveal anim-wing-card' : 'pious-wing-card';
      if (isIndex) {
        const delay = (index % 4) * 100;
        card.setAttribute('data-reveal-delay', delay.toString());
      }

      const iconClass = (item.icon || 'fa-hands-helping').replace(/^fa[srbld]?\s+/, '').trim();

      card.innerHTML = `
        <div class="pious-wing-top">
          <div class="pious-wing-icon"><i class="fas ${iconClass}"></i></div>
          <span class="pious-wing-tag">${escapeHtml(item.tag || 'Ministry')}</span>
        </div>
        <h4>${escapeHtml(item.title)}</h4>
        ${item.malayalam ? `<div class="pious-wing-malayalam">${escapeHtml(item.malayalam)}</div>` : ''}
        <p>${escapeHtml(item.desc)}</p>
        ${item.footer ? `<div class="pious-wing-footer"><i class="fas fa-check-circle"></i> ${escapeHtml(item.footer)}</div>` : ''}
      `;
      container.appendChild(card);
    });
  }

  applyPiousWingsConfig();

  // =========================================================================
  // 1. Mobile Menu Toggle
  // =========================================================================
  const mobileToggle = document.getElementById('mobileNavToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (navLinks.classList.contains('open')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    });
  }

  // =========================================================================
  // 2. Active Navigation Highlighting on Scroll
  // =========================================================================
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetNav = document.querySelector(`.nav-links a[href*="${sectionId}"]`);
      if (targetNav) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetNav.classList.add('active');
        } else {
          targetNav.classList.remove('active');
        }
      }
    });
  });

  // =========================================================================
  // 3. Dynamic Mass Timings countdown / Next Mass indicator
  // =========================================================================
  function updateUpcomingMass() {
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday, 4 is Thursday
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentMins = hours * 60 + minutes;

    let nextMassText = 'Sunday: 7:00 AM & 9:15 AM';
    let statusText = 'Next Liturgy';

    if (day === 0) { // Sunday
      if (currentMins < 7 * 60) {
        nextMassText = 'Today at 7:00 AM (Holy Qurbana)';
        statusText = 'Next Mass Today';
      } else if (currentMins < 9 * 60 + 15) {
        nextMassText = 'Today at 9:15 AM (Second Holy Qurbana)';
        statusText = 'Next Mass Today';
      } else {
        nextMassText = 'Tomorrow (Monday) at 6:15 AM';
        statusText = 'Upcoming Mass';
      }
    } else if (day === 4) { // Thursday
      if (currentMins < 17 * 60 + 30) {
        nextMassText = 'Today at 5:30 PM (Evening Mass)';
        statusText = 'Next Mass Today';
      } else {
        nextMassText = 'Tomorrow (Friday) at 6:15 AM';
        statusText = 'Upcoming Mass';
      }
    } else if (day === 3) { // Wednesday
      if (currentMins < 6 * 60 + 15) {
        nextMassText = 'Today at 6:15 AM';
        statusText = 'Next Mass Today';
      } else {
        nextMassText = 'Tomorrow (Thursday) at 5:30 PM (Evening)';
        statusText = 'Upcoming Mass';
      }
    } else if (day === 6) { // Saturday
      if (currentMins < 6 * 60 + 15) {
        nextMassText = 'Today at 6:15 AM';
        statusText = 'Next Mass Today';
      } else {
        nextMassText = 'Tomorrow (Sunday) at 7:00 AM & 9:15 AM';
        statusText = 'Upcoming Mass';
      }
    } else { // Monday, Tuesday, Friday
      if (currentMins < 6 * 60 + 15) {
        nextMassText = 'Today at 6:15 AM';
        statusText = 'Next Mass Today';
      } else {
        nextMassText = 'Tomorrow at 6:15 AM';
        statusText = 'Upcoming Mass';
      }
    }

    const nextMassEl = document.getElementById('nextMassDisplay');
    const statusLabelEl = document.getElementById('nextMassLabel');
    if (nextMassEl) nextMassEl.textContent = nextMassText;
    if (statusLabelEl) statusLabelEl.textContent = statusText;
  }
  updateUpcomingMass();

  // =========================================================================
  // 4. Dynamic Gallery, Category Filtering & Lightbox
  // =========================================================================
  const GALLERY_KEY = 'st_thomas_gallery';
  const galleryGrid = document.getElementById('galleryGrid');

  function initGallery() {
    if (!galleryGrid) return;

    try {
      const saved = localStorage.getItem(GALLERY_KEY);
      if (saved) {
        const items = JSON.parse(saved);
        if (Array.isArray(items) && items.length > 0) {
          galleryGrid.innerHTML = items.map(item => `
            <div class="gallery-item" data-category="${item.category}" data-title="${item.title}">
              <img src="${item.src}" alt="${item.title}" loading="lazy" decoding="async">
              <div class="gallery-item-overlay">
                <h4>${item.title}</h4>
                <p><i class="fas fa-search-plus"></i> ${item.subtitle || 'St. Thomas Church Chempu'}</p>
              </div>
            </div>
          `).join('');
        }
      }
    } catch (e) {
      console.warn('Could not hydrate gallery from storage:', e);
    }

    bindGalleryFiltersAndLightbox();
  }

  function bindGalleryFiltersAndLightbox() {
    const filterButtons = document.querySelectorAll('.gallery-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');

    filterButtons.forEach(btn => {
      btn.onclick = () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');
        galleryItems.forEach(item => {
          if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
            item.style.display = 'block';
            item.style.animation = 'fadeIn 0.4s ease forwards';
          } else {
            item.style.display = 'none';
          }
        });
      };
    });

    if (lightbox && lightboxImg && lightboxCaption) {
      galleryItems.forEach(item => {
        item.onclick = () => {
          const img = item.querySelector('img');
          const caption = item.getAttribute('data-title') || (img ? img.alt : '');
          if (img) {
            lightboxImg.src = img.src;
            lightboxCaption.textContent = caption;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
          }
        };
      });
    }
  }

  initGallery();

  // =========================================================================
  // 5. Lightbox Modal Closing & Keybinds
  // =========================================================================
  const lightbox = document.getElementById('lightboxModal');
  const lightboxClose = document.getElementById('lightboxClose');

  if (lightbox && lightboxClose) {
    const closeModal = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    };

    lightboxClose.addEventListener('click', closeModal);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeModal();
      }
    });
  }

  // =========================================================================
  // 6. Floating Scroll to Top Button
  // =========================================================================
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  if (scrollToTopBtn) {
    const handleScrollBtnVisibility = () => {
      if (window.pageYOffset > 320) {
        scrollToTopBtn.classList.add('visible');
      } else {
        scrollToTopBtn.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', handleScrollBtnVisibility, { passive: true });
    // Check initial position
    handleScrollBtnVisibility();

    scrollToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // =========================================================================
  // 7. Interactive 3D Moving Dots Engine for Dark Background Areas
  // Perspective projection with continuous rotation & cursor tracking
  // =========================================================================
  function initAll3DDots() {
    function setup3DCard(container, canvas) {
      if (!container || !canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      let width = 0;
      let height = 0;
      let centerX = 0;
      let centerY = 0;
      let animId = null;
      let isRunning = false;

      const isSmall = container.offsetWidth < 500 || container.offsetHeight < 200;
      const numParticles = isSmall ? 35 : (window.innerWidth < 768 ? 45 : 70);
      const fov = 340;
      const maxConnectDist = isSmall ? 75 : 95;
      const particles = [];

      let angleX = 0;
      let angleY = 0;
      let targetAngleX = 0;
      let targetAngleY = 0;

      function resize() {
        const rect = container.getBoundingClientRect();
        width = canvas.width = rect.width;
        height = canvas.height = rect.height;
        centerX = width / 2;
        centerY = height / 2;
      }

      function createParticles() {
        particles.length = 0;
        const spreadX = Math.max(100, width * 0.95);
        const spreadY = Math.max(100, height * 0.95);
        const spreadZ = 450;

        for (let i = 0; i < numParticles; i++) {
          particles.push({
            x: (Math.random() - 0.5) * spreadX,
            y: (Math.random() - 0.5) * spreadY,
            z: (Math.random() - 0.5) * spreadZ,
            baseRadius: Math.random() * 2 + 1.2,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35,
            vz: (Math.random() - 0.5) * 0.35,
            pulse: Math.random() * Math.PI * 2,
            pulseSpeed: Math.random() * 0.03 + 0.015,
            isGold: Math.random() > 0.25
          });
        }
      }

      function getThemeColors() {
        const styles = getComputedStyle(document.documentElement);
        const gold = styles.getPropertyValue('--gold-primary').trim() || '#d4a34b';
        const glow = styles.getPropertyValue('--gold-glow').trim() || '#eec578';
        return { gold, glow };
      }

      function render() {
        if (!isRunning) return;
        ctx.clearRect(0, 0, width, height);

        angleX += (targetAngleX - angleX) * 0.05 + 0.0007;
        angleY += (targetAngleY - angleY) * 0.05 + 0.0011;

        const cosY = Math.cos(angleY);
        const sinY = Math.sin(angleY);
        const cosX = Math.cos(angleX);
        const sinX = Math.sin(angleX);

        const colors = getThemeColors();
        const projected = [];

        const limitX = Math.max(50, width * 0.48);
        const limitY = Math.max(50, height * 0.48);
        const limitZ = 220;

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          p.z += p.vz;
          p.pulse += p.pulseSpeed;

          if (p.x < -limitX || p.x > limitX) p.vx *= -1;
          if (p.y < -limitY || p.y > limitY) p.vy *= -1;
          if (p.z < -limitZ || p.z > limitZ) p.vz *= -1;

          const x1 = p.x * cosY + p.z * sinY;
          const z1 = -p.x * sinY + p.z * cosY;
          const y2 = p.y * cosX - z1 * sinX;
          const z2 = p.y * sinX + z1 * cosX;

          const depth = fov + z2;
          if (depth <= 10) continue;

          const scale = fov / depth;
          const projX = centerX + x1 * scale;
          const projY = centerY + y2 * scale;

          const pulseFactor = 1 + Math.sin(p.pulse) * 0.25;
          const radius = Math.max(0.6, p.baseRadius * scale * pulseFactor);
          const alpha = Math.min(0.9, Math.max(0.15, (scale - 0.3) * 0.85));

          projected.push({ x: projX, y: projY, z: z2, scale, radius, alpha, isGold: p.isGold });
        }

        // 3D Proximity connecting links
        for (let i = 0; i < projected.length; i++) {
          for (let j = i + 1; j < projected.length; j++) {
            const p1 = projected[i];
            const p2 = projected[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxConnectDist) {
              const lineAlpha = (1 - dist / maxConnectDist) * Math.min(p1.alpha, p2.alpha) * 0.45;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(238, 197, 120, ${lineAlpha})`;
              ctx.lineWidth = Math.max(0.4, 1.2 * ((p1.scale + p2.scale) / 2));
              ctx.stroke();
            }
          }
        }

        // Draw particles
        for (let i = 0; i < projected.length; i++) {
          const p = projected[i];
          ctx.save();
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

          if (p.isGold) {
            ctx.fillStyle = colors.glow;
            ctx.shadowColor = colors.gold;
            ctx.shadowBlur = p.radius * 3.5;
          } else {
            ctx.fillStyle = '#ffffff';
            ctx.shadowColor = 'rgba(255, 255, 255, 0.7)';
            ctx.shadowBlur = p.radius * 2;
          }

          ctx.globalAlpha = p.alpha;
          ctx.fill();
          ctx.restore();
        }

        animId = requestAnimationFrame(render);
      }

      function start() {
        if (!isRunning) {
          isRunning = true;
          animId = requestAnimationFrame(render);
        }
      }

      function stop() {
        isRunning = false;
        if (animId) cancelAnimationFrame(animId);
        animId = null;
      }

      container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        targetAngleY = ((mouseX - centerX) / (centerX || 1)) * 0.45;
        targetAngleX = -((mouseY - centerY) / (centerY || 1)) * 0.35;
      }, { passive: true });

      container.addEventListener('mouseleave', () => {
        targetAngleX = 0;
        targetAngleY = 0;
      });

      window.addEventListener('resize', () => {
        resize();
        createParticles();
      }, { passive: true });

      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) start();
            else stop();
          });
        }, { threshold: 0.05 });
        observer.observe(container);
      }

      resize();
      createParticles();
      start();
    }

    // 1. Existing Featured Feast card
    const feastCard = document.querySelector('.featured-festival-card');
    const feastCanvas = document.getElementById('feast3dDotsCanvas');
    if (feastCard && feastCanvas) {
      setup3DCard(feastCard, feastCanvas);
    }

    // 2. All elements marked with data-3d-dots="true"
    const dynamicCards = document.querySelectorAll('[data-3d-dots="true"]');
    dynamicCards.forEach((elem) => {
      let canvas = elem.querySelector('canvas.interactive-3d-dots-canvas');
      if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.className = 'interactive-3d-dots-canvas';
        elem.prepend(canvas);
      }
      setup3DCard(elem, canvas);
    });
  }

  initAll3DDots();

  // =========================================================================
  // 8. Distinct Scroll-Triggered Animations for Each Section
  // =========================================================================
  function initSectionScrollAnimations() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    if (!revealElements.length) return;

    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      revealElements.forEach(el => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = el.getAttribute('data-reveal-delay') || 0;
          if (delay) {
            setTimeout(() => {
              el.classList.add('is-revealed');
            }, parseInt(delay, 10));
          } else {
            el.classList.add('is-revealed');
          }
          obs.unobserve(el);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  }

  initSectionScrollAnimations();

  // =========================================================================
  // 9. Interactive 3D Card Tilt & Projection Engine (History Image Card)
  // =========================================================================
  function initHistory3DTilt() {
    const card = document.getElementById('history3dCard');
    if (!card) return;

    const inner = card.querySelector('.history-3d-card-inner');
    const glare = card.querySelector('.history-3d-glare');
    const overlay = card.querySelector('.history-overlay-card');
    if (!inner) return;

    let reqId = null;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isHovered = false;

    function onMouseMove(e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate tilt angles (max ~14 deg)
      targetY = ((x - centerX) / centerX) * 12;
      targetX = -((y - centerY) / centerY) * 12;

      // Update glare position
      if (glare) {
        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;
        glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.45) 0%, rgba(212, 163, 75, 0.2) 40%, transparent 70%)`;
        glare.style.opacity = '1';
      }
    }

    function animate() {
      // Smooth lerp damping
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      if (inner) {
        inner.style.transform = `perspective(1000px) rotateX(${currentX.toFixed(2)}deg) rotateY(${currentY.toFixed(2)}deg) translateZ(15px)`;
        inner.style.boxShadow = `${(-currentY * 1.5).toFixed(1)}px ${(currentX * 1.5 + 20).toFixed(1)}px 45px rgba(15, 28, 63, 0.24)`;
      }

      if (overlay) {
        overlay.style.transform = `translateZ(55px) rotateX(${(-currentX * 0.25).toFixed(2)}deg) rotateY(${(-currentY * 0.25).toFixed(2)}deg)`;
      }

      if (isHovered || Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
        reqId = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(reqId);
        reqId = null;
      }
    }

    card.addEventListener('mouseenter', () => {
      isHovered = true;
      if (!reqId) reqId = requestAnimationFrame(animate);
    });

    card.addEventListener('mousemove', onMouseMove);

    card.addEventListener('mouseleave', () => {
      isHovered = false;
      targetX = 0;
      targetY = 0;
      if (glare) glare.style.opacity = '0';
      if (!reqId) reqId = requestAnimationFrame(animate);
    });
  }

  initHistory3DTilt();

  // =========================================================================
  // 10. Interactive 3D Card Tilt Engine for Mar Augustine Kandathil
  // =========================================================================
  function initKandathil3DTilt() {
    const card = document.getElementById('kandathil3dCard');
    if (!card) return;

    const wrap = card.querySelector('.kandathil-photo-wrap');
    const glare = card.querySelector('.kandathil-3d-glare');
    const crest = card.querySelector('.photo-crest');
    const caption = card.querySelector('.kandathil-photo-caption');
    if (!wrap) return;

    let reqId = null;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isHovered = false;

    function onMouseMove(e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      targetY = ((x - centerX) / centerX) * 11;
      targetX = -((y - centerY) / centerY) * 11;

      if (glare) {
        const frameRect = glare.parentElement.getBoundingClientRect();
        const glareX = ((e.clientX - frameRect.left) / frameRect.width) * 100;
        const glareY = ((e.clientY - frameRect.top) / frameRect.height) * 100;
        glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.5) 0%, rgba(212, 163, 75, 0.22) 40%, transparent 70%)`;
        glare.style.opacity = '1';
      }
    }

    function animate() {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      if (wrap) {
        wrap.style.transform = `perspective(1000px) rotateX(${currentX.toFixed(2)}deg) rotateY(${currentY.toFixed(2)}deg) translateZ(12px)`;
      }

      if (crest) {
        crest.style.transform = `translateZ(55px) rotateX(${(-currentX * 0.3).toFixed(2)}deg) rotateY(${(-currentY * 0.3).toFixed(2)}deg)`;
      }

      if (caption) {
        caption.style.transform = `translateZ(30px) rotateX(${(-currentX * 0.2).toFixed(2)}deg) rotateY(${(-currentY * 0.2).toFixed(2)}deg)`;
      }

      if (isHovered || Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
        reqId = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(reqId);
        reqId = null;
      }
    }

    card.addEventListener('mouseenter', () => {
      isHovered = true;
      if (!reqId) reqId = requestAnimationFrame(animate);
    });

    card.addEventListener('mousemove', onMouseMove);

    card.addEventListener('mouseleave', () => {
      isHovered = false;
      targetX = 0;
      targetY = 0;
      if (glare) glare.style.opacity = '0';
      if (!reqId) reqId = requestAnimationFrame(animate);
    });
  }

  initKandathil3DTilt();

  // =========================================================================
  // 11. Interactive 3D Perspective Tilt for Holy Mass Schedule Cards
  // =========================================================================
  function initMassCards3DTilt() {
    const wrappers = document.querySelectorAll('.mass-card-3d-wrapper');
    if (!wrappers.length) return;

    wrappers.forEach(wrap => {
      const card = wrap.querySelector('.mass-card');
      const glare = wrap.querySelector('.mass-card-glare');
      const icon = wrap.querySelector('.mass-icon');
      if (!card) return;

      let reqId = null;
      let targetX = 0;
      let targetY = 0;
      let currentX = 0;
      let currentY = 0;
      let isHovered = false;

      function onMouseMove(e) {
        const rect = wrap.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        targetY = ((x - centerX) / centerX) * 10;
        targetX = -((y - centerY) / centerY) * 10;

        if (glare) {
          const glareX = (x / rect.width) * 100;
          const glareY = (y / rect.height) * 100;
          glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.6) 0%, rgba(212, 163, 75, 0.2) 45%, transparent 75%)`;
          glare.style.opacity = '1';
        }
      }

      function animate() {
        currentX += (targetX - currentX) * 0.12;
        currentY += (targetY - currentY) * 0.12;

        wrap.style.transform = `perspective(1000px) rotateX(${currentX.toFixed(2)}deg) rotateY(${currentY.toFixed(2)}deg) translateZ(10px)`;
        wrap.style.boxShadow = `${(-currentY * 1.5).toFixed(1)}px ${(currentX * 1.5 + 18).toFixed(1)}px 35px rgba(15, 28, 63, 0.18)`;

        if (icon) {
          icon.style.transform = `translateZ(30px) rotateX(${(-currentX * 0.2).toFixed(2)}deg) rotateY(${(-currentY * 0.2).toFixed(2)}deg)`;
        }

        if (isHovered || Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
          reqId = requestAnimationFrame(animate);
        } else {
          cancelAnimationFrame(reqId);
          reqId = null;
        }
      }

      wrap.addEventListener('mouseenter', () => {
        isHovered = true;
        if (!reqId) reqId = requestAnimationFrame(animate);
      });

      wrap.addEventListener('mousemove', onMouseMove);

      wrap.addEventListener('mouseleave', () => {
        isHovered = false;
        targetX = 0;
        targetY = 0;
        if (glare) glare.style.opacity = '0';
        if (!reqId) reqId = requestAnimationFrame(animate);
      });
    });
  }

  initMassCards3DTilt();

  // =========================================================================
  // 11b. Interactive 3D Perspective Tilt for Featured Feast of St. Thomas Card
  // =========================================================================
  function initFeastFeatured3DTilt() {
    const card = document.getElementById('feastFeatured3dCard');
    if (!card) return;

    const glare = card.querySelector('.featured-festival-card-glare');
    const badge = card.querySelector('.fest-badge');
    const dateTag = card.querySelector('.fest-date-tag');
    const btn = card.querySelector('.btn-primary');

    let reqId = null;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isHovered = false;

    function onMouseMove(e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate tilt angles (smooth realistic 3D perspective ~10-12 deg)
      targetY = ((x - centerX) / centerX) * 11;
      targetX = -((y - centerY) / centerY) * 11;

      if (glare) {
        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;
        glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.5) 0%, rgba(212, 163, 75, 0.22) 40%, transparent 72%)`;
        glare.style.opacity = '1';
      }
    }

    function animate() {
      // Damped smooth spring physics
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      card.style.transform = `perspective(1100px) rotateX(${currentX.toFixed(2)}deg) rotateY(${currentY.toFixed(2)}deg) translateZ(12px)`;
      card.style.boxShadow = `${(-currentY * 2).toFixed(1)}px ${(currentX * 2 + 20).toFixed(1)}px 45px rgba(11, 21, 48, 0.38), 0 0 35px rgba(212, 163, 75, 0.32)`;

      if (badge) {
        badge.style.transform = `translateZ(30px) rotateX(${(-currentX * 0.2).toFixed(2)}deg) rotateY(${(-currentY * 0.2).toFixed(2)}deg)`;
      }
      if (dateTag) {
        dateTag.style.transform = `translateZ(25px)`;
      }
      if (btn) {
        btn.style.transform = `translateZ(28px)`;
      }

      if (isHovered || Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
        reqId = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(reqId);
        reqId = null;
      }
    }

    card.addEventListener('mouseenter', () => {
      isHovered = true;
      if (!reqId) reqId = requestAnimationFrame(animate);
    });

    card.addEventListener('mousemove', onMouseMove);

    card.addEventListener('mouseleave', () => {
      isHovered = false;
      targetX = 0;
      targetY = 0;
      if (glare) glare.style.opacity = '0';
      if (!reqId) reqId = requestAnimationFrame(animate);
    });
  }

  initFeastFeatured3DTilt();

  // =========================================================================
  // 11c. Interactive 3D Perspective Tilt for Next Mass Ribbon Block
  // =========================================================================
  function initNextMassRibbon3D() {
    const ribbon = document.getElementById('nextMass3dRibbon');
    if (!ribbon) return;

    const glare = ribbon.querySelector('.next-mass-ribbon-glare');
    const statusCircle = ribbon.querySelector('.status-icon-circle');
    const actionBtn = ribbon.querySelector('.ribbon-action .btn-primary');

    let reqId = null;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isHovered = false;

    function onMouseMove(e) {
      const rect = ribbon.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Realistic subtle 3D tilt angles for wide rectangular bar (~6 deg X, ~7 deg Y)
      targetY = ((x - centerX) / centerX) * 7.5;
      targetX = -((y - centerY) / centerY) * 6;

      if (glare) {
        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;
        glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.45) 0%, rgba(212, 163, 75, 0.18) 45%, transparent 75%)`;
        glare.style.opacity = '1';
      }
    }

    function animate() {
      // Smooth lerp damping
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      ribbon.style.transform = `perspective(1200px) rotateX(${currentX.toFixed(2)}deg) rotateY(${currentY.toFixed(2)}deg) translateZ(10px)`;
      ribbon.style.boxShadow = `${(-currentY * 2).toFixed(1)}px ${(currentX * 1.5 + 26).toFixed(1)}px 50px rgba(10, 20, 47, 0.22), 0 8px 24px rgba(212, 163, 75, 0.16)`;

      if (statusCircle) {
        statusCircle.style.transform = `translateZ(24px) rotateX(${(-currentX * 0.2).toFixed(2)}deg) rotateY(${(-currentY * 0.2).toFixed(2)}deg)`;
      }
      if (actionBtn) {
        actionBtn.style.transform = `translateZ(20px)`;
      }

      if (isHovered || Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
        reqId = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(reqId);
        reqId = null;
      }
    }

    ribbon.addEventListener('mouseenter', () => {
      isHovered = true;
      if (!reqId) reqId = requestAnimationFrame(animate);
    });

    ribbon.addEventListener('mousemove', onMouseMove);

    ribbon.addEventListener('mouseleave', () => {
      isHovered = false;
      targetX = 0;
      targetY = 0;
      if (glare) glare.style.opacity = '0';
      if (!reqId) reqId = requestAnimationFrame(animate);
    });
  }

  initNextMassRibbon3D();

  // =========================================================================
  // 12. Contact Form Handler (contact.html)
  // =========================================================================
  function initContactForm() {
    const form = document.getElementById('parishContactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const alertBox = document.getElementById('contactFormAlert');
      const submitBtn = form.querySelector('.contact-submit-btn');

      if (submitBtn) {
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
      }

      setTimeout(() => {
        if (alertBox) {
          alertBox.className = 'contact-form-alert success';
          alertBox.style.display = 'block';
        }
        form.reset();
        if (submitBtn) {
          submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent';
          setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
            submitBtn.disabled = false;
          }, 3000);
        }
      }, 700);
    });
  }

  initContactForm();
});
