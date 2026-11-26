  applyPiousWingsConfig();

  // =========================================================================
  // 0.9. Former Parish Vicars 3-in-a-Row Carousel (Dynamic from Admin CMS)
  // =========================================================================
  const VICARS_KEY = 'st_thomas_former_vicars';
  const DEFAULT_FORMER_VICARS = [
    {
      name: 'Rev. Fr. Varghese Painumkal',
      years: '2019 – 2024',
      photo: 'assets/images/vicar_avatar.svg',
      note: 'Solemn liturgical renewal, parish renovations, and community ministries'
    },
    {
      name: 'Rev. Fr. Joseph Kalathil',
      years: '2014 – 2019',
      photo: 'assets/images/vicar_avatar.svg',
      note: 'Pastoral family unit (BCC) strengthening and catechetical leadership'
    },
    {
      name: 'Rev. Fr. George Thekkekara',
      years: '2009 – 2014',
      photo: 'assets/images/vicar_avatar.svg',
      note: 'Parish centenary development, youth apostolate, and choral devotions'
    },
    {
      name: 'Rev. Fr. Thomas Chempukadavil',
      years: '2004 – 2009',
      photo: 'assets/images/vicar_avatar.svg',
      note: 'Sacred Heart convent pastoral coordination and village charity outreach'
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

    let activeIndex = 0; // The highlighted center vicar index

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

        card.innerHTML = `
          <div class="vicar-photo-wrap">
            <img src="${escapeHtml(photoUrl)}" alt="${escapeHtml(slot.data.name)}" loading="lazy" decoding="async">
            ${isCenter ? '<span class="vicar-center-badge"><i class="fas fa-cross"></i> Former Vicar</span>' : ''}
          </div>
          <div class="vicar-details">
            <h4 class="vicar-name">${escapeHtml(slot.data.name)}</h4>
            <div class="vicar-years-pill"><i class="fas fa-calendar-alt"></i> ${escapeHtml(slot.data.years || '')}</div>
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