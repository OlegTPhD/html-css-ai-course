// Optional: highlight current page in nav
document.addEventListener('DOMContentLoaded', () => {
  const current = window.location.pathname.split("/").pop();
  const links = document.querySelectorAll('a');

  links.forEach(link => {
    if (link.getAttribute('href').includes(current)) {
      link.style.fontWeight = 'bold';
      link.style.color = '#2980b9';
    }
  });
});
