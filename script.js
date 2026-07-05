const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

const profileImage = document.querySelector('.profile-orbit img');
if (profileImage) {
  profileImage.src = 'assets/profile-photo.svg';
  profileImage.alt = 'Sai Raj Vasa profile photo';
}

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.skill-card, .project-card, .arch-card, .timeline-item').forEach((card) => {
  observer.observe(card);
});
