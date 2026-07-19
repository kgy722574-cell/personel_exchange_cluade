// 카드 스크롤 등장 애니메이션
const cards = document.querySelectorAll('.card');

if ('IntersectionObserver' in window && cards.length){
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting){
        setTimeout(() => entry.target.classList.add('is-visible'), i % 4 * 70);
        cardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  cards.forEach(card => cardObserver.observe(card));
} else {
  cards.forEach(card => card.classList.add('is-visible'));
}

// 네비게이션 활성 링크 표시
const navLinks = document.querySelectorAll('[data-nav]');
const sections = Array.from(navLinks)
  .map(link => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

function setActiveNav(){
  const scrollPos = window.scrollY + 120;
  let current = sections[0];

  sections.forEach(section => {
    if (section.offsetTop <= scrollPos) current = section;
  });

  navLinks.forEach(link => {
    const match = link.getAttribute('href') === `#${current.id}`;
    link.classList.toggle('is-active', match);
  });
}

if (sections.length){
  window.addEventListener('scroll', setActiveNav, { passive: true });
  setActiveNav();
}
