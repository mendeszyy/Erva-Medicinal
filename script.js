// Scroll suave e destaque do menu conforme seção visível
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    navLinks.forEach(lnk => lnk.classList.remove('active'));
    link.classList.add('active');

    const id = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(id);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 75,
        behavior: 'smooth',
      });
    }
  });
});

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 80;
  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);
    if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
      navLinks.forEach(lnk => lnk.classList.remove('active'));
      link.classList.add('active');
    }
