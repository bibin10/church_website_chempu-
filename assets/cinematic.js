// St. Thomas Church Chempu - Cinematic Interface Logic

document.addEventListener('DOMContentLoaded', () => {
  // 1. Slide Drawer Open/Close
  const drawerTrigger = document.getElementById('drawerTrigger');
  const slideDrawer = document.getElementById('slideDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const drawerLinks = document.querySelectorAll('.drawer-link, .drawer-cta-btn');

  function openDrawer() {
    if (slideDrawer) {
      slideDrawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (slideDrawer) {
      slideDrawer.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (drawerTrigger) drawerTrigger.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && slideDrawer && slideDrawer.classList.contains('open')) {
      closeDrawer();
    }
  });

  // 2. Active Pill Navigation Highlighting on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navPills = document.querySelectorAll('.nav-pill');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 140;
      const sectionId = section.getAttribute('id');
      const targetPill = document.querySelector(`.pill-nav a[href="#${sectionId}"]`);

      if (targetPill) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navPills.forEach(p => p.classList.remove('active'));
          targetPill.classList.add('active');
        }
      }
    });
  });

  // 3. Liturgy Tabs Switcher
  const tabButtons = document.querySelectorAll('.liturgy-tab-btn');
  const tabContents = document.querySelectorAll('.liturgy-tab-content');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const tabTarget = btn.getAttribute('data-tab');
      const activeContent = document.getElementById(`tab-${tabTarget}`);
      if (activeContent) {
        activeContent.classList.add('active');
      }
    });
  });

  // 4. Dynamic Current Mass Calculator
  function updateLiturgyStatus() {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday
    const hours = now.getHours();
    const mins = now.getMinutes();
    const totalMinutes = hours * 60 + mins;

    let title = 'Sunday Holy Qurbana';
    let subtitle = '07:00 AM & 09:15 AM';

    if (day === 0) { // Sunday
      if (totalMinutes < 7 * 60) {
        title = 'First Holy Qurbana Today at 7:00 AM';
        subtitle = 'Followed by Second Holy Qurbana at 9:15 AM & Catechism at 10:30 AM';
      } else if (totalMinutes < 9 * 60 + 15) {
        title = 'Second Holy Qurbana Today at 9:15 AM';
        subtitle = 'Followed by Catechism at 10:30 AM';
      } else {
        title = 'Tomorrow Morning Holy Qurbana at 6:15 AM';
        subtitle = 'Weekday prayers and Holy Sacrifice';
      }
    } else if (day === 4) { // Thursday
      if (totalMinutes < 17 * 60 + 30) {
        title = 'Holy Qurbana Today at 5:30 PM';
        subtitle = 'Evening Holy Qurbana & Novena';
      } else {
        title = 'Tomorrow Morning Holy Qurbana at 6:15 AM';
        subtitle = 'Friday morning prayers and Holy Sacrifice';
      }
    } else if (day === 3) { // Wednesday
      if (totalMinutes < 6 * 60 + 15) {
        title = 'Holy Qurbana Today at 6:15 AM';
        subtitle = 'Morning Syro-Malabar Liturgy';
      } else {
        title = 'Tomorrow Holy Qurbana at 5:30 PM (Evening)';
        subtitle = 'Thursday Evening Mass';
      }
    } else if (day === 6) { // Saturday
      if (totalMinutes < 6 * 60 + 15) {
        title = 'Holy Qurbana Today at 6:15 AM';
        subtitle = 'Morning Syro-Malabar Liturgy';
      } else {
        title = 'Tomorrow (Sunday) at 7:00 AM & 9:15 AM';
        subtitle = 'Dominical Holy Qurbana';
      }
    } else {
      if (totalMinutes < 6 * 60 + 15) {
        title = 'Holy Qurbana Today at 6:15 AM';
        subtitle = 'Morning Syro-Malabar Liturgy';
      } else {
        title = 'Upcoming Holy Qurbana Tomorrow at 6:15 AM';
        subtitle = 'Morning Syro-Malabar Liturgy & prayers';
      }
    }

    const massTitleEl = document.getElementById('currentMassTitle');
    const massSubEl = document.getElementById('currentMassSubtitle');
    const drawerMassEl = document.getElementById('drawerMassTime');

    if (massTitleEl) massTitleEl.textContent = title;
    if (massSubEl) massSubEl.textContent = subtitle;
    if (drawerMassEl) drawerMassEl.textContent = title;
  }
  updateLiturgyStatus();

  // 5. Mosaic Gallery Filter Bar
  const filterPills = document.querySelectorAll('.filter-pill');
  const mosaicItems = document.querySelectorAll('.mosaic-item');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filterCategory = pill.getAttribute('data-filter');

      mosaicItems.forEach(item => {
        if (filterCategory === 'all' || item.getAttribute('data-category') === filterCategory) {
          item.style.display = 'block';
          item.style.animation = 'fadeIn 0.35s ease forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 6. Lightbox Modal
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  if (lightbox && lightboxImg && lightboxCaption && lightboxClose) {
    mosaicItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const title = item.getAttribute('data-title') || (img ? img.alt : '');
        if (img) {
          lightboxImg.src = img.src;
          lightboxCaption.textContent = title;
          lightbox.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  // 7. Prayer Request Form Submission Toast
  const prayerForm = document.getElementById('prayerRequestForm');
  const formSuccess = document.getElementById('formSuccessMsg');

  if (prayerForm && formSuccess) {
    prayerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = prayerForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';

      setTimeout(() => {
        prayerForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        formSuccess.style.display = 'flex';

        setTimeout(() => {
          formSuccess.style.display = 'none';
        }, 8000);
      }, 800);
    });
  }
});
