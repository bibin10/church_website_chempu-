// St. Thomas RC Church Chempu - Interactive Client Scripts
// Integrated with Parish CMS Admin Synchronizer

const STORAGE_KEY = 'st_thomas_chempu_site_config';
const INTENTIONS_KEY = 'st_thomas_prayer_intentions';

const DEFAULT_ADMIN_CONFIG = {
  // 0. Site Theme
  site_theme: 'chempu-classic',

  // 1. Notice Bar
  notice_badge: 'Annual Feast',
  notice_text: 'Feast of St. Thomas the Apostle (Dukhrana) celebrated with traditional Raza & solemn prayers',
  notice_phone: '+91 4829-273176',
  notice_address: 'Chempu P.O., Vaikom, Kottayam',

  // 2. Hero Section
  hero_image: 'assets/images/st_thomas_chempu_church_facade_v3.jpg',
  hero_badge: 'Archdiocese of Ernakulam-Angamaly • Estd. 1307 AD',
  hero_title1: 'St. Thomas Syro-Malabar',
  hero_title2: 'Roman Catholic Church, Chempu',
  hero_malayalam: 'St. Thomas Church Chempu Dedicated to Apostle St. Thomas',
  hero_desc: 'Over 700 years of living Christian faith, apostolic communion, and spiritual brotherhood rooted along the serene waters of Chempu, Vaikom.',
  stat1_val: '1307 AD',
  stat1_lbl: 'Historic Foundation',
  stat2_val: '700+ Years',
  stat2_lbl: 'Apostolic Tradition',
  stat3_val: 'Daily Liturgy',
  stat3_lbl: 'Holy Qurbana & Prayers',

  // 3. Mass Schedules & Ribbon
  mass_ribbon_display: 'Sunday: 7:00 AM & 9:15 AM',
  mass_ribbon_daily: '6:15 AM (Mon - Wed, Fri - Sat)',
  mass_ribbon_thu: '5:15 PM (Thursday)',
  mass_ribbon_sunday: '7:00 AM &<br><span style="white-space: nowrap;">9:15 AM</span>',
  mass_sun1_time: '07:00 AM',
  mass_sun2_time: '09:15 AM',
  mass_catechism_time: '10:30 AM - 12:15 PM',
  mass_weekday1_time: '06:15 AM',
  mass_thu_time: '05:15 PM',
  mass_fri_time: '06:15 AM',
  mass_sat_time: '06:15 AM',
  mass_confession_time: 'Saturdays 05:00 PM',
  mass_novena_time: 'Every Thursday 06:15 PM',

  // 4. History
  history_image: 'assets/images/st_thomas_chempu_church_vertical.jpg',
  history_eyebrow: 'Apostolic Heritage',
  history_title: 'Seven Centuries of Divine Grace',
  history_lead: 'The historic St. Thomas Catholic Church of Chempu represents a venerable legacy of St. Thomas Christians (Nasranis) nestled in Kottayam district.',
  history_p1: 'Established in early fourteenth century (1307 AD), St. Thomas Church Chempu is one of the revered historical churches under the Syro-Malabar Major Archiepiscopal Archdiocese of Ernakulam-Angamaly.',
  history_p2: 'Surrounded by coconut groves and picturesque backwaters of the Vembanad region near Vaikom, the parish has nurtured generations of devoted families, preserved authentic East-Syriac liturgical customs, and sustained community welfare for centuries.',

  // 4.5. Mar Augustine Kandathil Showcase
  kandathil_photo: 'assets/images/mar_augustine_kandathil_portrait.jpg',
  kandathil_eyebrow: 'Parish Pride & Archdiocesan Patriarch',
  kandathil_title: 'Mar Augustine Kandathil',
  kandathil_malayalam: 'Mar Augustine Kandathil (1874 – 1956) • First Metropolitan Archbishop',
  kandathil_lead: 'Chempu is eternally honored in the history of the Catholic Church as the native parish and birthplace of Mar Augustine Kandathil — the first indigenous Metropolitan Archbishop of India and the founding father of the Syro-Malabar Hierarchy.',
  kandathil_p1: 'Born on August 25, 1874, in the devout Kandathil family of Chempu to parents Kandathil Varkey and Thressia, young Augustine was baptized, nourished in Christian faith, and formed spiritually right here at St. Thomas Church, Chempu. The quiet backwaters and devout parish community of Chempu provided the spiritual cradle that nurtured his early call to priestly service.',
  kandathil_p2: 'On December 21, 1923, His Holiness Pope Pius XI issued the historic apostolic constitution Romani Pontifices, re-establishing the indigenous Syro-Malabar Catholic Hierarchy and elevating the Vicariate of Ernakulam into a Metropolitan Archdiocese. Mar Augustine Kandathil was consecrated as its first Metropolitan Archbishop, creating history as the very first native Indian to hold the rank and exercise the authority of a Catholic Metropolitan Archbishop.',
  kandathil_p3: 'During his transformative episcopate spanning more than three decades as Metropolitan (and 44 years as a Bishop), Mar Augustine guided the Syro-Malabar Church into a flourishing golden era. He founded the Congregation of the Sisters of Nazareth (CSN) in 1948, pioneered colleges, high schools, and orphanages, and championed social uplift across Kerala. When he was called to eternal rest on January 10, 1956, his mortal remains were entombed in the sanctuary of St. Mary\'s Cathedral Basilica, Ernakulam.',
  kandathil_quote: '"St. Thomas Church Chempu stands honored forever in history as the spiritual fountainhead that gave the universal Church one of its greatest archbishops and visionaries."',

  // 5. Feasts
  feast_main_name: 'Feast of St. Thomas the Apostle',
  feast_main_date: 'July 3 (Dukhrana) & Traditional Parish Feast',
  feast_main_desc: 'The annual parish festival is marked with high spiritual solemnity. The traditional "Kodiyettu" (flag hoisting), Raza Qurbana, grand candle-lit processions carrying holy relics and traditional silk parasols (Muthukkuda), and fellowship meals unite the entire village of Chempu.',

  // 6. Administration & Leadership
  vicar_name: 'Rev. Fr. Varghese Painumkal',
  vicar_malayalam: 'Parish Vicar',
  vicar_role: 'Vicar & Pastoral Head',
  vicar_phone: '+91 94475 08299',
  vicar_photo: 'assets/images/fr_varghese_painumkal.jpg',
  vicar_desc: 'Oversees all liturgical celebrations, sacraments, pastoral care, and spiritual guidance of St. Thomas Church Chempu.',

  trustee1_name: 'Thomas Mathai Maniyela',
  trustee1_malayalam: 'Parish Trustee',
  trustee1_role: 'Church Trustee',
  trustee1_phone: '+91 94463 04922',
  trustee1_photo: 'assets/images/thomas_mathai_maniyela.jpg',
  trustee1_desc: 'Managing temporal administration, church assets, accounts, and festive celebrations.',

  trustee2_name: 'Paul Thomas<br>Kunnathu',
  trustee2_malayalam: 'Parish Trustee',
  trustee2_role: 'Church Trustee',
  trustee2_phone: '+91 98957 94773',
  trustee2_photo: 'assets/images/trustee2_avatar.svg',
  trustee2_desc: 'Overseeing parish development projects, development initiatives, and community logistics.',

  vice_chairman_name: 'Siju Jose<br>Kandathil',
  vice_chairman_malayalam: 'കുടുംബകൂട്ടായ്മ വൈസ് ചെയർമാൻ',
  vice_chairman_role: 'Vice Chairman',
  vice_chairman_phone: '+91 86060 40293',
  vice_chairman_photo: 'assets/images/vice_chairman_avatar.svg',
  vice_chairman_desc: 'Coordinating 12+ Kudumba Kootayma (Family Units), monthly ward prayer meetings, and parish fellowship.',

  admin_vicar_desc: 'Oversees liturgical celebrations, spiritual welfare, sacraments, and pastoral guidance of all parishioners.',
  admin_trustees_desc: 'Elected parish representatives managing church assets, annual feast logistics, and development initiatives.',
  admin_council_desc: 'Coordinating 12+ Kudumba Kootayma (Family Units) fostering fellowship, charity, and mutual support.',
  admin_faith_desc: 'Dedicated animators and teachers imparting Catholic faith, catechism, and moral values to parish children.',

  // 6.5. SD Sisters (Convent)
  sd_img: 'assets/images/sd_convent_chempu.jpg',
  sd_title: 'Sisters of the Destitute (SD Convent, Chempu)',
  sd_malayalam: 'Sisters of the Destitute (SD Convent)',
  sd_years_chempu: '75 Years in Chempu',
  sd_years_congregation: '100 Years of Congregation',
  sd_desc: 'For over 75 dedicated years, the Sisters of the Destitute (SD) have been an integral spiritual pillar of St. Thomas Church Chempu. Formed nearly 100 years ago (1927) by Venerable Fr. Varghese Payyappilly with the charism of compassionate love for the poor and marginalized, the SD Sisters in Chempu tirelessly serve our parish community through nursery education (Carmel Nursery), Sunday catechism, home visitations of the sick and elderly, liturgical altar service, and continual Eucharistic adoration.',

  // 6.6. Filial Church: St. Mary's Church Chemmanakary (Holyland)
  chemmanakary_img: 'assets/images/st_mary_chemmanakary_church.jpg',
  chemmanakary_title: "St. Mary's Church, Chemmanakary (Holyland)",
  chemmanakary_malayalam: "St. Mary's Church, Chemmanakary (Holyland)",
  chemmanakary_badge1: 'Filial Church',
  chemmanakary_badge2: 'Chemmanakary, Chempu',
  chemmanakary_desc: "Situated along the serene Chemmanakary backwaters, St. Mary's Church, Chemmanakary (Holyland) is a revered filial church and sacred pilgrimage center under the parental parish and pastoral care of St. Thomas Syro-Malabar Church, Chempu. Under the direct pastoral guidance of the Chempu parish vicar, the church ministers to the spiritual life of the Chemmanakary community with Holy Qurbana, Marian devotions, and the solemn celebration of its annual parish feast.",

  // 6.7. Parish Institutions & Facilities
  inst_school_img: 'assets/images/st_thomas_lp_school.jpg',
  inst_school_title: 'St. Thomas L.P. School, Chempu',
  inst_school_malayalam: 'St. Thomas L.P. School, Chempu',
  inst_school_desc: 'Established in 1921 under the patronage and management of St. Thomas Church Chempu, this centenary educational institution has nurtured generations of children across Chempu and neighbouring villages with primary education, moral discipline, and values.',
  inst_cultural_img: 'assets/images/st_thomas_cultural_centre.jpg',
  inst_cultural_title: 'St. Thomas Cultural Centre, Chempu',
  inst_cultural_malayalam: 'St. Thomas Cultural Centre, Chempu',
  inst_cultural_desc: 'A spacious modern parish auditorium and cultural venue accommodating community gatherings, solemn wedding banquets, parish general assemblies, youth festivals, and cultural events for all residents of Chempu.',
  inst_complex_img: 'assets/images/st_thomas_shopping_complex.jpg',
  inst_complex_title: 'St. Thomas Shopping Complex, Chempu',
  inst_complex_malayalam: 'St. Thomas Shopping Complex, Chempu',
  inst_complex_desc: 'Situated in the heart of Chempu, the parish commercial shopping complex provides essential retail spaces, local businesses, and community utilities, contributing to village commerce and supporting church temporal ministries.',

  // 6.8. Pious Associations & Pastoral Wings Header
  wings_eyebrow: 'Parish Fellowship & Lay Ministries',
  wings_title: 'Pious Associations & Pastoral Wings',
  wings_lead: 'Dedicated lay ministries fostering fellowship, spiritual enrichment, charity, and liturgical participation across our parish community.',

  // 7. Contact
  contact_phone: '+91 4829-273176',
  contact_diocese: 'Archdiocese of Ernakulam-Angamaly • Vaikom Forane',
  contact_address: 'St. Thomas Syro-Malabar Roman Catholic Church, Chempu P.O., Vaikom, Kottayam District, Kerala - 686 615, India',
  contact_hours: 'Tuesday - Saturday: 09:00 AM - 12:30 PM • 04:00 PM - 06:00 PM | Sunday: After Holy Qurbana',

  // 8. Typography & Font Customizer (Permanent Locked Defaults)
  font_heading: 'Marcellus',
  font_body: 'Cinzel',
  font_nav: 'Cinzel',
  font_buttons: 'Cinzel',
  accent: 'Cinzel',
  caption: 'Marcellus',
  font_base_size: '16px'
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
      if (cfg.mass_ribbon_sunday) {
        setHTML('live_ribbon_sunday', cfg.mass_ribbon_sunday.includes('<br>') ? cfg.mass_ribbon_sunday : cfg.mass_ribbon_sunday.replace('&', '&<br><span style="white-space: nowrap;">') + (cfg.mass_ribbon_sunday.includes('&') ? '</span>' : ''));
      }

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
      setText('live_vicar_malayalam', cfg.vicar_malayalam, 'Parish Vicar');
      setText('live_vicar_role', cfg.vicar_role, 'Vicar & Pastoral Head');
      setText('live_vicar_desc', cfg.vicar_desc || cfg.admin_vicar_desc, 'Oversees all liturgical celebrations, sacraments, pastoral care, and spiritual guidance of St. Thomas Church Chempu.');
      setContactPhone('live_vicar_phone_wrap', 'live_vicar_phone', cfg.vicar_phone, '+91 4829-273176');
      setImage('live_vicar_photo', cfg.vicar_photo, 'assets/images/vicar_avatar.svg');

      setHTML('live_trustee1_name', cfg.trustee1_name ? cfg.trustee1_name.replace('Maniyela', '<br>Maniyela') : 'Thomas Mathai<br>Maniyela');
      setText('live_trustee1_malayalam', cfg.trustee1_malayalam, 'Parish Trustee');
      setText('live_trustee1_role', cfg.trustee1_role, 'Church Trustee');
      setText('live_trustee1_desc', cfg.trustee1_desc || cfg.admin_trustees_desc, 'Managing temporal administration, church assets, accounts, and festive celebrations.');
      setContactPhone('live_trustee1_phone_wrap', 'live_trustee1_phone', cfg.trustee1_phone, '+91 94470 00000');
      setImage('live_trustee1_photo', cfg.trustee1_photo, 'assets/images/thomas_mathai_maniyela.jpg');

      setHTML('live_trustee2_name', cfg.trustee2_name ? (cfg.trustee2_name.includes('<br>') ? cfg.trustee2_name : cfg.trustee2_name.replace('Kunnathu', '<br>Kunnathu')) : 'Paul Thomas<br>Kunnathu');
      setText('live_trustee2_malayalam', cfg.trustee2_malayalam, 'Parish Trustee');
      setText('live_trustee2_role', cfg.trustee2_role, 'Church Trustee');
      setText('live_trustee2_desc', cfg.trustee2_desc || cfg.admin_trustees_desc, 'Overseeing parish development projects, development initiatives, and community logistics.');
      setContactPhone('live_trustee2_phone_wrap', 'live_trustee2_phone', cfg.trustee2_phone, '+91 94470 00000');
      setImage('live_trustee2_photo', cfg.trustee2_photo, 'assets/images/trustee2_avatar.svg');

      setHTML('live_vice_chairman_name', cfg.vice_chairman_name ? (cfg.vice_chairman_name.includes('<br>') ? cfg.vice_chairman_name : cfg.vice_chairman_name.replace('Kandathil', '<br>Kandathil')) : 'Siju Jose<br>Kandathil');
      setText('live_vice_chairman_malayalam', cfg.vice_chairman_malayalam, 'Family Units Vice Chairman');
      setText('live_vice_chairman_role', 'Vice Chairman');
      setText('live_vice_chairman_desc', cfg.vice_chairman_desc || cfg.admin_council_desc, 'Coordinating 12+ Kudumba Kootayma (Family Units), monthly ward prayer meetings, and parish fellowship.');
      setContactPhone('live_vice_chairman_phone_wrap', 'live_vice_chairman_phone', cfg.vice_chairman_phone, '+91 94470 00000');
      setImage('live_vice_chairman_photo', (cfg.vice_chairman_photo && !cfg.vice_chairman_photo.includes('vice_chairman_avatar.svg')) ? cfg.vice_chairman_photo : 'assets/images/siju_jose_kandathil.jpg', 'assets/images/siju_jose_kandathil.jpg');

      // 7.5. SD Sisters & Convent
      setText('live_sd_title', cfg.sd_title, 'Sisters of the Destitute (SD Convent, Chempu)');
      setText('live_sd_malayalam', cfg.sd_malayalam, 'Sisters of the Destitute (SD Convent)');
      if (cfg.sd_years_chempu) {
        setHTML('live_sd_years_chempu', `<i class="fas fa-medal"></i> ${cfg.sd_years_chempu}`);
      }
      if (cfg.sd_years_congregation) {
        setHTML('live_sd_years_congregation', `<i class="fas fa-star"></i> ${cfg.sd_years_congregation}`);
      }
      setText('live_sd_desc', cfg.sd_desc);
      setImage('live_sd_img', cfg.sd_img, 'assets/images/sd_convent_chempu.jpg');

      // 7.6. Filial Church: St. Mary's Chemmanakary (Holyland)
      setText('live_chemmanakary_title', cfg.chemmanakary_title, "St. Mary's Church, Chemmanakary (Holyland)");
      setText('live_chemmanakary_malayalam', cfg.chemmanakary_malayalam, "St. Mary's Church, Chemmanakary (Holyland)");
      if (cfg.chemmanakary_badge1) {
        setHTML('live_chemmanakary_badge1', `<i class="fas fa-landmark"></i> ${cfg.chemmanakary_badge1}`);
      }
      if (cfg.chemmanakary_badge2) {
        setHTML('live_chemmanakary_badge2', `<i class="fas fa-map-marker-alt"></i> ${cfg.chemmanakary_badge2}`);
      }
      setText('live_chemmanakary_desc', cfg.chemmanakary_desc);
      setImage('live_chemmanakary_img', cfg.chemmanakary_img, 'assets/images/st_mary_chemmanakary_church.jpg');

      // 7.7. Parish Institutions & Facilities
      setText('live_inst_school_title', cfg.inst_school_title, 'St. Thomas L.P. School, Chempu');
      setText('live_inst_school_malayalam', cfg.inst_school_malayalam, 'St. Thomas L.P. School, Chempu');
      setText('live_inst_school_desc', cfg.inst_school_desc);
      setImage('live_inst_school_img', cfg.inst_school_img, 'assets/images/st_thomas_lp_school.jpg');

      setText('live_inst_cultural_title', cfg.inst_cultural_title, 'St. Thomas Cultural Centre, Chempu');
      setText('live_inst_cultural_malayalam', cfg.inst_cultural_malayalam, 'St. Thomas Cultural Centre, Chempu');
      setText('live_inst_cultural_desc', cfg.inst_cultural_desc);
      setImage('live_inst_cultural_img', cfg.inst_cultural_img, 'assets/images/st_thomas_cultural_centre.jpg');

      setText('live_inst_complex_title', cfg.inst_complex_title, 'St. Thomas Shopping Complex, Chempu');
      setText('live_inst_complex_malayalam', cfg.inst_complex_malayalam, 'St. Thomas Shopping Complex, Chempu');
      setText('live_inst_complex_desc', cfg.inst_complex_desc);
      setImage('live_inst_complex_img', cfg.inst_complex_img, 'assets/images/st_thomas_shopping_complex.jpg');

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
    { label: 'History', url: '#about' },
    { label: 'Holy Mass', url: '#mass-timings' },
    { label: 'Feasts', url: '#feasts' },
    { label: 'Gallery', url: '#gallery' },
    { label: 'Community', url: 'community' },
    { label: 'Santhom Maria', url: 'magazine' },
    { label: 'Contact', url: 'contact' }
  ];

  function applyNavConfig() {
    const navUl = document.getElementById('navLinks');
    if (!navUl) return;

    const path = window.location.pathname.toLowerCase();
    const isIndexPage = path === '/' || path.endsWith('/index.html') || path.endsWith('/index') || path === '';
    const isSubPage = !isIndexPage;

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

    // Normalize any legacy stored #contact or index.html#contact links to contact
    items = items.map(item => {
      if (item.label.toLowerCase() === 'contact' || item.url === '#contact' || item.url === 'index.html#contact') {
        return { label: item.label, url: 'contact' };
      }
      return item;
    });

    // Ensure Community link exists in menu without duplicate
    if (!items.some(i => i.url === 'community' || i.url === 'community.html')) {
      const contactIdx = items.findIndex(i => i.url === 'contact' || i.url === 'contact.html');
      if (contactIdx >= 0) {
        items.splice(contactIdx, 0, { label: 'Community', url: 'community' });
      } else {
        items.push({ label: 'Community', url: 'community' });
      }
    }

    const currentHash = window.location.hash || '#home';
    navUl.innerHTML = '';

    items.forEach((item, index) => {
      const li = document.createElement('li');
      const a = document.createElement('a');

      let targetUrl = item.url;
      let isActive = false;

      if (isSubPage) {
        if (targetUrl.startsWith('#')) {
          targetUrl = `index.html${targetUrl}`;
        }
        if (path.includes('community') && (item.url === 'community' || item.url === 'community.html')) {
          isActive = true;
        } else if (path.includes('contact') && (item.url === 'contact' || item.url === 'contact.html')) {
          isActive = true;
        } else if (path.includes('clergy') && (item.url === 'clergy' || item.url === 'clergy.html')) {
          isActive = true;
        } else if (path.includes('magazine') && (item.url === 'magazine' || item.url === 'magazine.html')) {
          isActive = true;
        }
      } else {
        if (item.url === currentHash || (index === 0 && (!window.location.hash || window.location.hash === '#'))) {
          isActive = true;
        }
      }

      a.href = targetUrl;
      if (item.label.toLowerCase().includes('santhom maria') || item.url.includes('magazine')) {
        a.innerHTML = '<i class="fas fa-book-open" style="margin-right: 5px; color: var(--gold-glow);"></i> ' + item.label;
      } else {
        a.textContent = item.label;
      }
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
  function computeGregorianEaster(year) {
    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const month = Math.floor((h + l - 7 * m + 114) / 31);
    const day = ((h + l - 7 * m + 114) % 31) + 1;
    return new Date(year, month - 1, day);
  }

  function getUpcomingHolyWeekDates() {
    const now = new Date();
    let yr = now.getFullYear();
    let easter = computeGregorianEaster(yr);
    if (now > easter) {
      yr += 1;
      easter = computeGregorianEaster(yr);
    }
    const palmSunday = new Date(easter.getTime() - 7 * 24 * 60 * 60 * 1000);
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let monthLabel = '';
    let dayLabel = '';
    const pad = n => (n < 10 ? '0' + n : '' + n);

    if (palmSunday.getMonth() === easter.getMonth()) {
      monthLabel = monthNames[easter.getMonth()];
      dayLabel = `${pad(palmSunday.getDate())}-${pad(easter.getDate())}`;
    } else {
      monthLabel = `${monthNames[palmSunday.getMonth()]}/${monthNames[easter.getMonth()]}`;
      dayLabel = `${palmSunday.getDate()}-${pad(easter.getDate())}`;
    }
    return {
      year: yr,
      month: monthLabel,
      day: dayLabel,
      palmDateStr: `${palmSunday.getDate()} ${monthNames[palmSunday.getMonth()]} ${yr}`,
      easterDateStr: `${easter.getDate()} ${monthNames[easter.getMonth()]} ${yr}`
    };
  }

  const upcomingHolyWeek = getUpcomingHolyWeekDates();

  const FEASTS_KEY = 'st_thomas_parish_feasts';
  const DEFAULT_FEASTS = [
    {
      month: 'Jan',
      day: 'Sun*',
      title: 'Feast of St. Sebastian (അമ്പു തിരുനാൾ)',
      desc: 'Celebrated on the Sunday following January 20th. Features the solemn Ambu Pradakshinam (arrow procession) traversing all 12 parish ward units, followed by solemn Holy Mass in the morning.'
    },
    {
      month: 'Mar',
      day: '19',
      title: 'Feast of St. Joseph (ഊട്ടുനേർച്ച)',
      desc: 'Solemn Feast of St. Joseph featuring festive Holy Mass and the traditional grand Oottu Nercha fellowship banquet served lovingly to over 1,500+ faithful and pilgrims every year.'
    },
    {
      month: upcomingHolyWeek.month,
      day: upcomingHolyWeek.day,
      title: 'Holy Week & Easter',
      desc: `Solemn liturgical services of Palm Sunday (${upcomingHolyWeek.palmDateStr}), Pesaha Holy Thursday, Good Friday, and the Glorious Resurrection of Easter (${upcomingHolyWeek.easterDateStr}).`
    },
    {
      month: 'Dec',
      day: '25',
      title: 'Christmas (Feast of Nativity)',
      desc: 'Midnight Holy Qurbana, Christmas carol visits across parish wards, and community joy.'
    }
  ];

  function applyFeastsConfig() {
    const container = document.getElementById('other-feasts-container');
    if (!container) return;

    let items = DEFAULT_FEASTS;
    try {
      const saved = localStorage.getItem(FEASTS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Only use saved if it's an array and doesn't contain obsolete Danaha entry
        if (Array.isArray(parsed) && parsed.length > 0) {
          const hasObsoleteDanaha = parsed.some(it => it && it.title && it.title.toLowerCase().includes('danaha'));
          if (hasObsoleteDanaha) {
            localStorage.removeItem(FEASTS_KEY);
            items = DEFAULT_FEASTS;
          } else {
            items = parsed;
          }
        }
      }
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
      malayalam: 'St. Vincent de Paul Society (SVP)',
      desc: 'Providing compassionate monthly ration distribution, medical aid, education support, and emergency relief to underprivileged parish families.',
      footer: 'Weekly Family Care & Mercy Ministry'
    },
    {
      icon: 'fa-dove',
      tag: 'Family Ministry',
      title: 'Mathruvedi',
      malayalam: "Mothers' Guild",
      desc: 'Fostering Christian motherhood, domestic prayers, altar floral arrangements, family values, and pastoral solidarity among parish mothers.',
      footer: 'Domestic Church & Marian Fellowship'
    },
    {
      icon: 'fa-shield-alt',
      tag: 'Parish Guardians',
      title: 'Pithruvedi',
      malayalam: "Fathers' Guild",
      desc: 'Catholic fathers committed to spiritual leadership, temporal parish security, feast logistics, and youth mentoring.',
      footer: 'Temporal Leadership & Feast Support'
    },
    {
      icon: 'fa-fire',
      tag: 'Youth Wing',
      title: 'SMYM Youth Movement',
      malayalam: 'Syro-Malabar Youth Movement',
      desc: 'Energizing parish youth through gospel values, blood donation drives, sports, creative arts, and leadership conventions.',
      footer: 'Youth Leadership & Community Service'
    },
    {
      icon: 'fa-music',
      tag: 'Sacred Choral',
      title: 'St. Thomas Liturgical Choir',
      malayalam: 'Parish Liturgical Choir',
      desc: 'Leading celestial East-Syriac and Malayalam liturgical hymns, sacred psalms, and solemn choral devotions during Holy Qurbana.',
      footer: 'Sacred Music & Feast Choral Service'
    },
    {
      icon: 'fa-crown',
      tag: 'Marian Devotion',
      title: 'Legion of Mary',
      malayalam: 'Legion of Mary',
      desc: 'Devoted Marian legionaries engaged in weekly rosary chains, hospital visitations, and comforting the homebound elderly.',
      footer: 'Weekly Rosary & Spiritual Solace'
    }
  ];

  // Smart Auto-Inference for Pious Associations / Pastoral Wings
  function inferPiousWingDetails(name) {
    if (!name || typeof name !== 'string') {
      return {
        icon: 'fa-hands-helping',
        tag: 'Parish Ministry',
        subtitle: '',
        desc: 'Dedicated parish organization serving spiritual life, fellowship, and community ministry.'
      };
    }

    const s = name.toLowerCase();

    // 1. Charity / St Vincent de Paul
    if (s.includes('vincent') || s.includes('svp') || s.includes('charity') || s.includes('relief') || s.includes('poor') || s.includes('mercy') || s.includes('samaritan') || s.includes('care')) {
      return {
        icon: 'fa-hand-holding-heart',
        tag: 'Charity & Relief',
        subtitle: s.includes('vincent') ? 'St. Vincent de Paul Society (SVP)' : 'Parish Charity & Mercy Outreach',
        desc: 'Providing compassionate care, medical aid, sustenance support, and emergency relief to parish and local community families in need.'
      };
    }

    // 2. Mothers / Women / Mathruvedi
    if (s.includes('mathru') || s.includes('mother') || s.includes('women') || s.includes('ladies') || s.includes('vanitha') || s.includes('st. anne') || s.includes('st anne') || s.includes('monica')) {
      return {
        icon: 'fa-dove',
        tag: 'Family Ministry',
        subtitle: "Mothers' Guild & Marian Family Fellowship",
        desc: 'Fostering Christian motherhood, domestic prayers, altar support, family sanctification, and pastoral solidarity among parish mothers.'
      };
    }

    // 3. Fathers / Men / Pithruvedi
    if (s.includes('pithru') || s.includes('father') || s.includes('men') || s.includes('joseph') || s.includes('purusha')) {
      return {
        icon: 'fa-shield-alt',
        tag: 'Parish Guardians',
        subtitle: "Fathers' Guild & Temporal Leadership",
        desc: 'Catholic fathers committed to spiritual leadership, temporal parish guardianship, feast coordination, and youth mentoring.'
      };
    }

    // 4. Youth / SMYM / KCYM / Teens / Young Adults
    if (s.includes('smym') || s.includes('kcym') || s.includes('youth') || s.includes('teen') || s.includes('young') || s.includes('yuva') || s.includes('yuvathi') || s.includes('yuvajanam')) {
      return {
        icon: 'fa-fire',
        tag: 'Youth Movement',
        subtitle: s.includes('smym') ? 'Syro-Malabar Youth Movement' : 'Parish Catholic Youth Wing',
        desc: 'Energizing parish youth through active gospel witness, humanitarian service, sports, creative arts, and leadership conventions.'
      };
    }

    // 5. Choir / Music / Choral
    if (s.includes('choir') || s.includes('music') || s.includes('choral') || s.includes('sing') || s.includes('hymn') || s.includes('voice') || s.includes('organ') || s.includes('band')) {
      return {
        icon: 'fa-music',
        tag: 'Sacred Choral',
        subtitle: 'Parish Liturgical Choir & Sacred Melody',
        desc: 'Leading celestial East-Syriac and liturgical hymns, sacred choral psalms, and solemn devotion during Holy Qurbana and festive liturgies.'
      };
    }

    // 6. Legion of Mary / Marian / Rosary / Our Lady
    if (s.includes('legion') || s.includes('mary') || s.includes('marian') || s.includes('rosary') || s.includes('matha') || s.includes('our lady') || s.includes('madonna') || s.includes('immaculate')) {
      return {
        icon: 'fa-crown',
        tag: 'Marian Devotion',
        subtitle: s.includes('legion') ? 'Legion of Mary' : 'Marian Devotional Guild',
        desc: 'Dedicated to prayer, spiritual warfare through the Holy Rosary, home visitations, and comforting elderly and homebound parishioners.'
      };
    }

    // 7. Mission League / CML / Children's Mission
    if (s.includes('mission') || s.includes('cml') || s.includes('cherupushpa') || s.includes('therese') || s.includes('theresa') || s.includes('little flower')) {
      return {
        icon: 'fa-child-reaching',
        tag: 'Mission League',
        subtitle: 'Cherupushpa Mission League (CML)',
        desc: 'Inspiring children and adolescents with love for world missions, spiritual self-sacrifice, and evangelical charity in the spirit of St. Thérèse.'
      };
    }

    // 8. Catechism / Sunday School / Faith Formation
    if (s.includes('catechism') || s.includes('sunday school') || s.includes('faith') || s.includes('formation') || s.includes('teacher') || s.includes('bible')) {
      return {
        icon: 'fa-book-bible',
        tag: 'Faith Formation',
        subtitle: 'Parish Catechetical & Scripture Ministry',
        desc: 'Nurturing children and youth in Catholic doctrine, Sacred Scripture, moral teachings, and deep sacramental initiation.'
      };
    }

    // 9. Altar Servers / Alter Boys / Knights of the Altar
    if (s.includes('altar') || s.includes('server') || s.includes('acolyte') || s.includes('sacristan')) {
      return {
        icon: 'fa-cross',
        tag: 'Liturgical Service',
        subtitle: 'Knights of the Altar & Sacramental Guild',
        desc: 'Assisting the priests reverently during Holy Mass, novenas, liturgical processions, and Eucharistic celebrations.'
      };
    }

    // 10. Senior Citizens / Elders / Grandparents
    if (s.includes('elder') || s.includes('senior') || s.includes('grandparent') || s.includes('pensioner') || s.includes('golden')) {
      return {
        icon: 'fa-heart',
        tag: 'Senior Ministry',
        subtitle: 'Elders & Senior Parishioners Fellowship',
        desc: 'Honoring senior parishioners with pastoral care, fellowship circles, spiritual retreats, and companionship.'
      };
    }

    // 11. Family Units / Ward Prayer / Kudumbakootayma
    if (s.includes('ward') || s.includes('unit') || s.includes('kootayma') || s.includes('bhavan') || s.includes('family unit')) {
      return {
        icon: 'fa-people-roof',
        tag: 'Family Units',
        subtitle: 'Basic Christian Community (BCC)',
        desc: 'Promoting grassroots Christian fellowship, weekly ward rosaries, mutual assistance, and vibrant neighborhood fraternity.'
      };
    }

    // 12. Eucharistic / Adoration / Blessed Sacrament
    if (s.includes('eucharist') || s.includes('adoration') || s.includes('sacrament') || s.includes('monstrance') || s.includes('perpetual')) {
      return {
        icon: 'fa-sun',
        tag: 'Eucharistic Adoration',
        subtitle: 'Perpetual Adoration & Intercession Wing',
        desc: 'Fostering continuous prayer, silent contemplation, and adoration before the Most Blessed Sacrament for church and world intentions.'
      };
    }

    // 13. Health / Medical / Healing Ministry
    if (s.includes('health') || s.includes('medical') || s.includes('doctor') || s.includes('nurse') || s.includes('clinic') || s.includes('healing')) {
      return {
        icon: 'fa-kit-medical',
        tag: 'Health & Wellness',
        subtitle: 'Parish Health & Medical Guild',
        desc: 'Organizing medical camps, emergency health support, free health screenings, and wellness counsel for parishioners.'
      };
    }

    // 14. Media / Communication / Tech / IT Wing
    if (s.includes('media') || s.includes('press') || s.includes('tech') || s.includes('broadcast') || s.includes('communication') || s.includes('it wing')) {
      return {
        icon: 'fa-video',
        tag: 'Media & Digital',
        subtitle: 'Parish Digital & Media Communications',
        desc: 'Managing parish digital outreach, livestreaming sacred liturgies, website updates, event photography, and bulletin publication.'
      };
    }

    // 15. St. Thomas / Apostles / Patron
    if (s.includes('thomas') || s.includes('apostle') || s.includes('patron')) {
      return {
        icon: 'fa-landmark',
        tag: 'Apostolic Guild',
        subtitle: 'Apostle St. Thomas Patronal Fellowship',
        desc: 'Preserving the deep heritage, spiritual fervor, and apostolic traditions inherited from our patron Saint Thomas the Apostle.'
      };
    }

    return {
      icon: 'fa-hands-helping',
      tag: 'Parish Ministry',
      subtitle: name,
      desc: `Active pastoral association dedicated to prayer, Christian service, and fellowship in St. Thomas Parish Chempu.`
    };
  }

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
      // Auto-infer icon, tag, or subtitle if omitted or empty
      const inferred = inferPiousWingDetails(item.title || '');
      const iconRaw = item.icon || inferred.icon || 'fa-hands-helping';
      const iconClass = iconRaw.replace(/^fa[srbld]?\s+/, '').trim();
      const tagText = item.tag || inferred.tag || 'Parish Ministry';
      const subtitleText = item.malayalam || inferred.subtitle || '';

      const card = document.createElement('div');
      card.className = isIndex ? 'pious-wing-card scroll-reveal anim-wing-card' : 'pious-wing-card';
      if (isIndex) {
        const delay = (index % 4) * 100;
        card.setAttribute('data-reveal-delay', delay.toString());
      }

      card.innerHTML = `
        <div class="pious-wing-top">
          <div class="pious-wing-icon"><i class="fas ${iconClass}"></i></div>
          <span class="pious-wing-tag">${escapeHtml(tagText)}</span>
        </div>
        <h4>${escapeHtml(item.title || '')}</h4>
        ${subtitleText ? `<div class="pious-wing-malayalam">${escapeHtml(subtitleText)}</div>` : ''}
      `;
      container.appendChild(card);
    });
  }

  applyPiousWingsConfig();

  // =========================================================================
  // 0.9. Former Parish Vicars 3-in-a-Row Carousel (Dynamic from Admin CMS)
  // =========================================================================
  const VICARS_KEY = 'st_thomas_former_vicars';
  const DEFAULT_FORMER_VICARS = [
  {
    name: 'Rev. Fr. Sebastian Thottappilly',
    years: '1971 – 1980',
    photo: 'assets/images/fr_sebastian_thottappilly.jpg',
    note: 'Pastoral ministry, spiritual shepherd & church renovation visionary'
  },
  {
    name: 'Rev. Fr. Joseph Chakiyath',
    years: '1980 – 1982',
    photo: 'assets/images/fr_joseph_chakiyath.jpg',
    note: 'Vicar at 1981 Blessing & Dedication of Renovated Church'
  },
  {
    name: 'Rev. Fr. George Pananjickal',
    years: '1982 – 1989',
    photo: 'assets/images/fr_george_pananjickal.jpg',
    note: 'Pastoral care, spiritual leadership, and parish ministry'
  },
  {
    name: 'Rev. Fr. George Payyappally',
    years: '1989',
    photo: 'assets/images/fr_george_payyappally.jpg',
    note: 'Devoted pastoral ministry and sacramental service'
  },
  {
    name: 'Mar Jacob Manathodath',
    years: '1989 – 1990',
    photo: 'assets/images/fr_jacob_manathodath.jpg',
    note: 'Parish Vicar; subsequently consecrated Bishop of Palakkad'
  },
  {
    name: 'Rev. Fr. Hormis Mynatti',
    years: '1990 – 1991',
    photo: 'assets/images/fr_hormis_mynatti.jpg',
    note: 'Spiritual guidance, pastoral shepherding, and community devotion'
  },
  {
    name: 'Rev. Fr. George Manguzhikari',
    years: '1991 – 1996',
    photo: 'assets/images/fr_george_manguzhikari.jpg',
    note: 'Pastoral governance, family welfare, and parish fellowship'
  },
  {
    name: 'Rev. Fr. Paul Kanjirakkattukari',
    years: '1996 – 1999',
    photo: 'assets/images/fr_paul_kanjirakkattukari.jpg',
    note: 'Faith leadership, pastoral guidance, and liturgical life'
  },
  {
    name: 'Rev. Fr. John Thekkanathu',
    years: '1999 – 2000',
    photo: 'assets/images/fr_john_thekkanath.jpg',
    note: 'Devoted pastoral ministry and sacramental leadership'
  },
  {
    name: 'Rev. Fr. Jose Vailikodathu',
    years: '2000 – 2005',
    photo: 'assets/images/fr_jose_vailikodathu.jpg',
    note: 'Pastoral shepherding, youth ministry, and spiritual renewal'
  },
  {
    name: 'Rev. Fr. Xavier Avallil',
    years: '2005 – 2012',
    photo: 'assets/images/fr_xavier_avallil.jpg',
    note: 'Church renovation & front Portico (mondalam) blessed by Cardinal Mar Varkey Vithayathil (2007)'
  },
  {
    name: 'Rev. Fr. Varghese Mampilly',
    years: '2012 – 2018',
    photo: 'assets/images/fr_varghese_mampilly.jpg',
    note: 'Church renovation re-dedicated by Mar Jacob Manathodath (Bishop of Palakkad & Former Vicar, 2018)'
  },
  {
    name: 'Rev. Fr. Antony Paravara',
    years: '2018 – 2020',
    photo: 'assets/images/fr_antony_paravara.jpg',
    note: 'Venerable pastoral care, spiritual leadership, and devoted service'
  },
  {
    name: 'Rev. Fr. Hormis Thottakara',
    years: '2020 – 2025',
    photo: 'assets/images/fr_hormis_thottakara.jpg',
    note: 'Pastoral guidance, spiritual leadership, and parish community ministry'
  },
  {
    name: 'Rev. Fr. Varghese Painumkal',
    years: '2025 – PRESENT',
    photo: 'assets/images/fr_varghese_painumkal.jpg',
    note: 'Present Vicar and Pastoral Head of St. Thomas Church Chempu'
  }
];

  function initFormerVicarsCarousel() {
    const stage = document.getElementById('vicarsTrioStage');
    const dotsWrap = document.getElementById('vicarDots');
    const prevBtn = document.getElementById('vicarPrevBtn');
    const nextBtn = document.getElementById('vicarNextBtn');
    const wrapper = document.getElementById('vicarsCarouselWrapper');

    if (!stage) return;

    let vicars = DEFAULT_FORMER_VICARS;
    try {
      const saved = localStorage.getItem(VICARS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) vicars = parsed;
      }
    } catch (e) {
      console.warn('Could not read former vicars from storage', e);
    }

    if (vicars.length === 0) {
      stage.innerHTML = '<p style="text-align:center; color:var(--text-muted); padding:2rem;">No former vicar records available.</p>';
      return;
    }

    // Default center card to Present Vicar (the last item)
    let activeIndex = vicars.length - 1;

    function renderTrio() {
      stage.innerHTML = '';
      const total = vicars.length;

      // Determine Left (Previous), Center (Active), and Right (Next) indices
      const prevIdx = (activeIndex - 1 + total) % total;
      const currIdx = activeIndex;
      const nextIdx = (activeIndex + 1) % total;

      const itemsToRender = [
        { data: vicars[prevIdx], role: 'prev', index: prevIdx },
        { data: vicars[currIdx], role: 'center', index: currIdx },
        { data: vicars[nextIdx], role: 'next', index: nextIdx }
      ];

      itemsToRender.forEach(slot => {
        const card = document.createElement('div');
        card.className = `vicar-trio-card vicar-${slot.role}`;
        card.setAttribute('data-index', slot.index.toString());

        const photoUrl = slot.data.photo || 'assets/images/vicar_avatar.svg';
        const isCenter = slot.role === 'center';
        const isPresent = (slot.data.years || '').toUpperCase().includes('PRESENT');
        const badgeText = isPresent ? 'Present Vicar' : 'Former Vicar';
        const badgeClass = isPresent ? 'vicar-badge-present' : 'vicar-badge-former';

        card.innerHTML = `
          <div class="vicar-photo-wrap">
            <img src="${escapeHtml(photoUrl)}" alt="${escapeHtml(slot.data.name)}" loading="lazy" decoding="async">
            ${isCenter ? `<span class="vicar-center-badge ${badgeClass}"><i class="fas fa-cross"></i> ${badgeText}</span>` : ''}
          </div>
          <div class="vicar-details">
            <h4 class="vicar-name">${escapeHtml(slot.data.name)}</h4>
            <div class="vicar-years-pill ${isPresent ? 'pill-present' : ''}"><i class="${isPresent ? 'fas fa-certificate' : 'fas fa-calendar-alt'}"></i> ${escapeHtml(slot.data.years || '')}</div>
            ${slot.data.note ? `<p class="vicar-note">${escapeHtml(slot.data.note)}</p>` : ''}
          </div>
        `;

        // Clicking side cards shifts them to center
        card.addEventListener('click', () => {
          if (slot.role === 'prev') {
            goPrev();
          } else if (slot.role === 'next') {
            goNext();
          }
        });

        stage.appendChild(card);
      });

      renderDots();
    }

    function renderDots() {
      if (!dotsWrap) return;
      dotsWrap.innerHTML = '';
      vicars.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = `vicar-dot ${i === activeIndex ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to Vicar ${i + 1}`);
        dot.addEventListener('click', () => {
          activeIndex = i;
          renderTrio();
        });
        dotsWrap.appendChild(dot);
      });
    }

    function goNext() {
      activeIndex = (activeIndex + 1) % vicars.length;
      renderTrio();
    }

    function goPrev() {
      activeIndex = (activeIndex - 1 + vicars.length) % vicars.length;
      renderTrio();
    }

    if (nextBtn) nextBtn.addEventListener('click', goNext);
    if (prevBtn) prevBtn.addEventListener('click', goPrev);

    // Keyboard support when hovering carousel
    if (wrapper) {
      wrapper.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') goNext();
        if (e.key === 'ArrowLeft') goPrev();
      });

      // Touch swipe support for mobile devices
      let touchStartX = 0;
      wrapper.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });
      wrapper.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        if (touchEndX < touchStartX - 45) goNext();
        if (touchEndX > touchStartX + 45) goPrev();
      }, { passive: true });
    }

    renderTrio();
  }

  initFormerVicarsCarousel();

  // =========================================================================
  // 0.95. Vocations Filter Bar (Priests & Religious Sisters from Parish)
  // =========================================================================
  function initVocationsFilter() {
    const filterBtns = document.querySelectorAll('.vocations-filter-btn');
    const cards = document.querySelectorAll('.vocation-member-card');
    if (!filterBtns.length || !cards.length) return;

    let priestCount = 0;
    let sisterCount = 0;

    cards.forEach(card => {
      const type = (card.getAttribute('data-vocation-type') || '').toLowerCase();
      if (type === 'priest') priestCount++;
      else if (type === 'sister') sisterCount++;
    });

    const totalCount = priestCount + sisterCount;

    // Update count labels inside filter button chips
    filterBtns.forEach(btn => {
      const filter = btn.getAttribute('data-vocation-filter');
      const span = btn.querySelector('span');
      if (span) {
        if (filter === 'all') span.textContent = totalCount.toString();
        else if (filter === 'priest') span.textContent = priestCount.toString();
        else if (filter === 'sister') span.textContent = sisterCount.toString();
      }

      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const activeFilter = btn.getAttribute('data-vocation-filter');
        cards.forEach(card => {
          const type = (card.getAttribute('data-vocation-type') || '').toLowerCase();
          if (activeFilter === 'all' || type === activeFilter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  initVocationsFilter();

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

  const DEFAULT_GALLERY_ITEMS = [];

  function initGallery() {
    if (!galleryGrid) return;

    let items = [];
    try {
      const saved = localStorage.getItem(GALLERY_KEY);
      if (saved) {
        items = JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Could not hydrate gallery from storage:', e);
    }

    if (!Array.isArray(items) || items.length === 0) {
      galleryGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1.5rem; background: rgba(255, 255, 255, 0.5); border: 1.5px dashed var(--border-gold, rgba(212, 163, 75, 0.4)); border-radius: var(--radius-lg, 18px); margin: 1rem auto; max-width: 600px;">
          <i class="fas fa-camera-retro" style="font-size: 2.2rem; color: var(--gold-primary, #d4a34b); margin-bottom: 0.8rem; display: block;"></i>
          <h4 style="font-family: var(--font-heading); color: var(--primary-deep, #0f1c3f); font-size: 1.25rem; margin-bottom: 0.4rem;">Photo Gallery Coming Soon</h4>
          <p style="color: var(--text-muted, #5d6778); font-size: 0.92rem; margin: 0; line-height: 1.6;">Parish gallery photographs will appear here once uploaded via the administration panel.</p>
        </div>
      `;
      return;
    }

    galleryGrid.innerHTML = items.map(q => `
      <div class="gallery-item" data-category="${q.category}" data-title="${q.title}">
        <img src="${q.src}" alt="${q.title}" loading="lazy" decoding="async">
        <div class="gallery-item-overlay">
          <h4>${q.title}</h4>
          <p><i class="fas fa-search-plus"></i> ${q.subtitle || 'St. Thomas Church Chempu'}</p>
        </div>
      </div>
    `).join('');

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

    revealElements.forEach(el => {
      if (el.id === 'nextMass3dRibbon') {
        const ribbonObserver = new IntersectionObserver((entries, rObs) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              rObs.unobserve(entry.target);
            }
          });
        }, {
          threshold: 0.25,
          rootMargin: '0px 0px -30px 0px'
        });
        ribbonObserver.observe(el);
      } else {
        observer.observe(el);
      }
    });
  }

  initSectionScrollAnimations();

  // =========================================================================
  // 9. History Image Card (Static & Stable - No Hover Tilt Movement)
  // =========================================================================
  // initHistory3DTilt removed upon user request to keep the image card stable and static on cursor hover.

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

      // Glare disabled
      if (glare) {
        glare.style.opacity = '0';
        glare.style.display = 'none';
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
        caption.style.transform = 'none';
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

        // Glare disabled
        if (glare) {
          glare.style.opacity = '0';
          glare.style.display = 'none';
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

      // White glare effect removed per user request
      if (glare) {
        glare.style.opacity = '0';
        glare.style.display = 'none';
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

    let landingCompleted = false;

    // Check when entrance rotation animation completes so mouse movement doesn't disrupt landing
    ribbon.addEventListener('transitionend', (e) => {
      if (e.propertyName === 'transform') {
        landingCompleted = true;
      }
    });

    // Fallback timer if transitionend is missed
    setTimeout(() => { landingCompleted = true; }, 1400);

    function onMouseMove(e) {
      if (!landingCompleted) return;
      const rect = ribbon.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Realistic subtle 3D tilt angles for wide rectangular bar (~6 deg X, ~7 deg Y)
      targetY = ((x - centerX) / centerX) * 7.5;
      targetX = -((y - centerY) / centerY) * 6;

      // Glare disabled
      if (glare) {
        glare.style.opacity = '0';
        glare.style.display = 'none';
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

  // =========================================================================
  // 13. Dedicated Devotional Hymn Audio Player & Interactive 3D Soundwaves
  // =========================================================================
  function initDevotionalAudioPlayer() {
    const audio = document.getElementById('muthappanAudio');
    const playBtn = document.getElementById('muthappanPlayBtn');
    const playIcon = document.getElementById('muthappanPlayIcon');
    const progressBar = document.getElementById('muthappanProgressBar');
    const currentTimeEl = document.getElementById('muthappanCurrentTime');
    const durationEl = document.getElementById('muthappanDuration');
    const discVisual = document.getElementById('hymnDiscVisual');
    const hymnCard = document.getElementById('devotionalHymnCard');
    const hymnGlare = document.getElementById('devotionalHymnGlare');
    const canvas = document.getElementById('hymnVisualizerCanvas');

    // 1. Smooth 3D Card Tilt with Dynamic Glare
    if (hymnCard) {
      let isHovered = false;
      let rotX = 0, rotY = 0;
      let targetRotX = 0, targetRotY = 0;
      let animFrame = null;

      function updateTilt() {
        rotX += (targetRotX - rotX) * 0.12;
        rotY += (targetRotY - rotY) * 0.12;
        hymnCard.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;

        if (isHovered || Math.abs(rotX) > 0.05 || Math.abs(rotY) > 0.05) {
          animFrame = requestAnimationFrame(updateTilt);
        } else {
          hymnCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
          animFrame = null;
        }
      }

      hymnCard.addEventListener('mousemove', (e) => {
        isHovered = true;
        const rect = hymnCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        targetRotX = -((y - centerY) / centerY) * 7;
        targetRotY = ((x - centerX) / centerX) * 7;

        // Glare disabled
        if (hymnGlare) {
          hymnGlare.style.opacity = '0';
          hymnGlare.style.display = 'none';
        }

        if (!animFrame) animFrame = requestAnimationFrame(updateTilt);
      });

      hymnCard.addEventListener('mouseleave', () => {
        isHovered = false;
        targetRotX = 0;
        targetRotY = 0;
        if (hymnGlare) hymnGlare.style.opacity = '0';
        if (!animFrame) animFrame = requestAnimationFrame(updateTilt);
      });
    }

    // 2. Ambient 3D Sacred Waveform Flow Canvas with Floating Golden Music Notes & Glittering Stars
    if (canvas) {
      const ctx = canvas.getContext('2d');
      let w = 0, h = 0;
      let waveStep = 0;

      // Golden music symbols and glittering stars
      const symbols = ['♪', '♫', '♬', '♩', '𝄞', '✨', '✦', '★', '⋆'];
      const particles = [];
      const numParticles = 28;

      function createParticle(initial = false) {
        return {
          x: Math.random() * (w || 800),
          y: initial ? Math.random() * (h || 400) : (h || 400) + 20,
          size: Math.random() * 12 + 10, // 10px to 22px
          symbol: symbols[Math.floor(Math.random() * symbols.length)],
          vx: (Math.random() - 0.5) * 0.5,
          vy: -(Math.random() * 0.65 + 0.3), // gentle floating upwards
          maxAlpha: Math.random() * 0.55 + 0.35,
          twinkleSpeed: Math.random() * 0.04 + 0.015,
          twinklePhase: Math.random() * Math.PI * 2,
          rotation: Math.random() * Math.PI * 2,
          vRot: (Math.random() - 0.5) * 0.02
        };
      }

      function resizeCanvas() {
        w = canvas.width = canvas.parentElement.offsetWidth;
        h = canvas.height = canvas.parentElement.offsetHeight;
        if (particles.length === 0) {
          for (let i = 0; i < numParticles; i++) {
            particles.push(createParticle(true));
          }
        }
      }
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      function renderWaves() {
        ctx.clearRect(0, 0, w, h);
        const isPlaying = audio && !audio.paused;
        waveStep += isPlaying ? 0.045 : 0.015;

        // Soundwave curves
        const numWaves = 4;
        const colors = [
          'rgba(212, 163, 75, 0.22)',
          'rgba(74, 144, 226, 0.20)',
          'rgba(238, 197, 120, 0.16)',
          'rgba(30, 58, 138, 0.30)'
        ];

        for (let i = 0; i < numWaves; i++) {
          ctx.beginPath();
          ctx.strokeStyle = colors[i];
          ctx.lineWidth = isPlaying ? 2.5 : 1.5;

          const baseAmp = (isPlaying ? 35 : 12) + i * 6;
          const freq = 0.005 + i * 0.0018;
          const yCenter = h * 0.65 + Math.sin(waveStep * 0.5 + i) * 15;

          for (let x = 0; x <= w; x += 6) {
            const y = yCenter + Math.sin(x * freq + waveStep + i * 1.8) * baseAmp * Math.sin((x / w) * Math.PI);
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }

        // Render floating golden musical notes & glittering stars
        const speedMultiplier = isPlaying ? 1.5 : 1.0;
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.vx * speedMultiplier;
          p.y += p.vy * speedMultiplier;
          p.rotation += p.vRot * speedMultiplier;
          p.twinklePhase += p.twinkleSpeed * speedMultiplier;

          // Horizontal drift
          p.x += Math.sin(p.twinklePhase) * 0.3;

          const currentAlpha = Math.max(0.12, p.maxAlpha * (0.5 + 0.5 * Math.sin(p.twinklePhase)));

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);

          // Golden glow
          ctx.shadowColor = 'rgba(238, 197, 120, 0.85)';
          ctx.shadowBlur = isPlaying ? 12 : 7;
          ctx.fillStyle = `rgba(245, 212, 122, ${currentAlpha.toFixed(3)})`;

          if (p.symbol === '★' || p.symbol === '✦' || p.symbol === '✨') {
            ctx.font = `${Math.round(p.size * 0.9)}px "Segoe UI Symbol", sans-serif`;
          } else {
            ctx.font = `bold ${Math.round(p.size)}px "Cinzel", "Segoe UI Symbol", serif`;
          }
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(p.symbol, 0, 0);

          ctx.restore();

          // Respawn particle at bottom
          if (p.y < -30 || p.x < -30 || p.x > w + 30) {
            particles[i] = createParticle(false);
          }
        }

        requestAnimationFrame(renderWaves);
      }
      renderWaves();
    }

    if (!audio || !playBtn) return;

    function formatTime(sec) {
      if (isNaN(sec) || sec < 0) return '0:00';
      const m = Math.floor(sec / 60);
      const s = Math.floor(sec % 60);
      return `${m}:${s < 10 ? '0' : ''}${s}`;
    }

    playBtn.addEventListener('click', () => {
      if (audio.paused) {
        audio.play().then(() => {
          if (playIcon) {
            playIcon.classList.remove('fa-play');
            playIcon.classList.add('fa-pause');
          }
          if (discVisual) discVisual.classList.add('is-playing');
        }).catch(err => console.log('Audio play error:', err));
      } else {
        audio.pause();
        if (playIcon) {
          playIcon.classList.remove('fa-pause');
          playIcon.classList.add('fa-play');
        }
        if (discVisual) discVisual.classList.remove('is-playing');
      }
    });

    audio.addEventListener('loadedmetadata', () => {
      if (durationEl) durationEl.textContent = formatTime(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {
      if (currentTimeEl) currentTimeEl.textContent = formatTime(audio.currentTime);
      if (progressBar && audio.duration) {
        progressBar.value = (audio.currentTime / audio.duration) * 100;
      }
    });

    if (progressBar) {
      progressBar.addEventListener('input', () => {
        if (audio.duration) {
          audio.currentTime = (progressBar.value / 100) * audio.duration;
        }
      });
    }

    audio.addEventListener('ended', () => {
      if (playIcon) {
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
      }
      if (discVisual) discVisual.classList.remove('is-playing');
      if (progressBar) progressBar.value = 0;
      if (currentTimeEl) currentTimeEl.textContent = '0:00';
    });
  }

  initDevotionalAudioPlayer();
});
