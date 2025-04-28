// Move landing text up while scrolling
const landingText = document.querySelector('.landing h1');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (scrollY < window.innerHeight) {
    landingText.style.transform = `translateY(-${scrollY * 0.5}px)`;
  }

  // Fade-in images when about-me section comes into view
  const images = document.querySelectorAll('.fade-in');
  images.forEach(img => {
    const imgTop = img.getBoundingClientRect().top;
    if (imgTop < window.innerHeight - 100) { // Adjust 100px to trigger earlier
      img.classList.add('show');
    }
  });
});
