function scrollToElement(element) {
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });
}

document.querySelector('a[href="#contact"]').addEventListener('click', (e) => {
  e.preventDefault();
  scrollToElement('#contact');
});

document.querySelector('a[href="#my-work"]').addEventListener('click', (e) => {
  e.preventDefault();
  scrollToElement('#my-work');
});