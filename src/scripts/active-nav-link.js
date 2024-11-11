document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('.primary-nav-ul');
  const navLinks = nav.querySelectorAll('.nav-link');
  const currentPage = window.location.href;
  navLinks.forEach((link) => {
    if (link.href === currentPage) {
      link.classList.add('active');
    }
  })
});