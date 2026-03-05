/**
 * ClickUp Hygiene Campaign — Slide deck navigation
 */

(function () {
  const deck = document.getElementById('deck');
  const slides = Array.from(deck.querySelectorAll('.slide'));
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const counterEl = document.getElementById('counter');
  const dotsEl = document.getElementById('dots');

  let currentIndex = 0;
  const total = slides.length;

  function goTo(index) {
    const next = Math.max(0, Math.min(index, total - 1));
    if (next === currentIndex) return;
    slides[currentIndex].classList.remove('is-active');
    currentIndex = next;
    slides[currentIndex].classList.add('is-active');
    updateCounter();
    updateDots();
  }

  function updateCounter() {
    counterEl.textContent = `${currentIndex + 1} / ${total}`;
  }

  function updateDots() {
    dotsEl.innerHTML = '';
    slides.forEach((_, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'deck-dots__dot' + (i === currentIndex ? ' is-active' : '');
      btn.setAttribute('aria-label', `Go to slide ${i + 1}`);
      btn.addEventListener('click', () => goTo(i));
      dotsEl.appendChild(btn);
    });
  }

  prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
  nextBtn.addEventListener('click', () => goTo(currentIndex + 1));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') goTo(currentIndex - 1);
    if (e.key === 'ArrowRight') goTo(currentIndex + 1);
  });

  // Initialize
  slides.forEach((s, i) => s.classList.toggle('is-active', i === 0));
  updateCounter();
  updateDots();
})();
