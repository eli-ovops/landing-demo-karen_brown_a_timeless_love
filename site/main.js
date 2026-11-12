(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items = document.querySelectorAll('.reveal');

  if (reduced || !('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -6% 0px' });
    items.forEach((item) => observer.observe(item));
  }

  const choices = document.querySelectorAll('[data-copilot-role]');
  const detail = document.querySelector('.copilot-detail-copy');
  const outcome = document.querySelector('.copilot-outcome');
  const messages = {
    story: {
      detail: 'A friend or family member can be the primary storyteller, bringing the history and warmth only they know.',
      outcome: 'One ceremony. Personally told. Professionally held.'
    },
    karen: {
      detail: 'Karen works alongside your storyteller as the experienced celebrant, handling the professional legal components of the ceremony.',
      outcome: 'Your people bring the story. Karen brings the steady guidance.'
    }
  };

  choices.forEach((choice) => {
    choice.addEventListener('click', () => {
      const role = choice.dataset.copilotRole;
      choices.forEach((item) => {
        const selected = item === choice;
        item.classList.toggle('is-active', selected);
        item.setAttribute('aria-pressed', String(selected));
      });
      if (detail && outcome && messages[role]) {
        detail.textContent = messages[role].detail;
        outcome.textContent = messages[role].outcome;
      }
    });
  });
})();
