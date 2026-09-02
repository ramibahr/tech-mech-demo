/* ── Hamburger ── */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
let menuLastFocused = null;
function openMobile() {
  menuLastFocused = document.activeElement;
  hamburger.classList.add('open');
  mobileMenu.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  hamburger.setAttribute('aria-label', 'Close menu');
  document.body.style.overflow = 'hidden';
  const firstLink = mobileMenu.querySelector('a');
  if (firstLink) firstLink.focus();
}
function closeMobile() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.setAttribute('aria-label', 'Open menu');
  document.body.style.overflow = '';
  if (menuLastFocused) menuLastFocused.focus();
}
hamburger.addEventListener('click', () => {
  if (mobileMenu.classList.contains('open')) closeMobile(); else openMobile();
});
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobile));

/* Keeps Tab/Shift+Tab cycling within an open overlay's own focusable elements,
   instead of letting focus escape into content still hidden behind it. */
function trapFocus(container, e) {
  const focusables = container.querySelectorAll('a[href], button:not([disabled])');
  if (!focusables.length) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

document.addEventListener('keydown', e => {
  if (!mobileMenu.classList.contains('open')) return;
  if (e.key === 'Escape') { closeMobile(); return; }
  if (e.key === 'Tab') trapFocus(mobileMenu, e);
});

/* ── Active nav link ── */
(function () {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[href], .mobile-menu a[href]').forEach(a => {
    if (a.getAttribute('href') === page) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
  });
})();

/* ── Scroll-to-top ── */
const scrollBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
  scrollBtn.classList.toggle('visible', window.scrollY > 500);
});
scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ── Fade-in on scroll ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

/* ── Hero slideshow ── */
const heroSlideshow = document.getElementById('hero-slideshow');
if (heroSlideshow) {
  const slides = heroSlideshow.querySelectorAll('.hero-slide');
  // Defer the non-first slides so they don't compete with the LCP image on first paint,
  // but don't gate them on the full page `load` event — on a slow mobile connection that
  // can take longer than the 6s crossfade interval below, so the first swap lands on a
  // slide with no background set yet (looks like the slideshow froze). requestIdleCallback
  // (with a short setTimeout fallback/cap) fires as soon as the browser is idle instead.
  const loadSlideBackgrounds = () => {
    slides.forEach(s => {
      const bg = s.getAttribute('data-bg');
      if (bg) s.style.backgroundImage = `url('${bg}')`;
    });
  };
  if ('requestIdleCallback' in window) {
    requestIdleCallback(loadSlideBackgrounds, { timeout: 2000 });
  } else {
    setTimeout(loadSlideBackgrounds, 300);
  }
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (slides.length > 1 && !reduceMotion) {
    let current = 0;
    setInterval(() => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 6000);
  }
}

/* ── Gallery lightbox ── */
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  const lightboxImg   = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');
  const galleryItems  = document.querySelectorAll('.gallery-item');
  let lastFocused = null;

  const openLightbox = (item) => {
    const img = item.querySelector('img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lastFocused = document.activeElement;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lightboxClose.focus();
  };
  const closeLightbox = () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  };

  galleryItems.forEach(item => {
    item.addEventListener('click', () => openLightbox(item));
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(item); }
    });
  });
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') { closeLightbox(); return; }
    if (e.key === 'Tab') trapFocus(lightbox, e);
  });
}

/* ── Form submit placeholder ── */
const bookingForm = document.getElementById('booking-form');
if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!bookingForm.checkValidity()) {
      bookingForm.reportValidity();
      return;
    }
    const btn = e.target.querySelector('.form-submit');
    const orig = btn.innerHTML;
    btn.innerHTML = `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Message Sent`;
    btn.disabled = true;
    setTimeout(() => { btn.innerHTML = orig; btn.disabled = false; }, 3500);
  });
}

/* ── Reg Lookup ── */
const regBtn = document.getElementById('reg-btn');
if (regBtn) {
  const regInput        = document.getElementById('reg-input');
  const regResult       = document.getElementById('reg-result');
  const regPlateDisplay = document.getElementById('reg-plate-display');
  const regError        = document.getElementById('reg-error');
  const plateWrap       = document.querySelector('.plate-wrap');

  regInput.addEventListener('input', () => {
    regInput.value = regInput.value.toUpperCase().replace(/[^A-Z0-9 ]/g, '');
    plateWrap.classList.remove('error');
    regError.textContent = '';
  });

  regInput.addEventListener('keydown', e => { if (e.key === 'Enter') regBtn.click(); });

  regBtn.addEventListener('click', () => {
    const plate = regInput.value.trim();
    if (!plate) {
      plateWrap.classList.add('error');
      regError.textContent = 'Enter a registration first';
      regInput.focus();
      return;
    }
    plateWrap.classList.remove('error');
    regError.textContent = '';
    regBtn.disabled = true;
    regBtn.innerHTML = '<span class="reg-spinner"></span> Checking…';
    regResult.classList.remove('visible');
    setTimeout(() => {
      regPlateDisplay.textContent = plate;
      regResult.classList.add('visible');
      regBtn.disabled = false;
      regBtn.innerHTML = 'Check Vehicle';
      regResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 1000);
  });
}
