const menu = () => {
  const menu = document.querySelector('menu');

  const handleMenu = () => menu.classList.toggle('active-menu');

  const smoothScroll = (link, e) => {
    e.preventDefault();

    const href = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(href);
    const scrollValue = targetElement.getBoundingClientRect().top;

    window.scrollBy({
      top: scrollValue,
      behavior: 'smooth'
    });
  };

  document.addEventListener('click', (e) => {
    if (e.target.closest('.menu')) {
      handleMenu();
    } else if (e.target.classList.contains('close-btn')) {
      handleMenu();
    } else if (e.target.matches('menu.active-menu a')) {
      handleMenu();
      smoothScroll(e.target, e);
    } else if (menu.classList.contains('active-menu') && !e.target.closest('.active-menu')) {
      handleMenu();
    } else if (e.target.closest('a[href="#service-block"]')) {
      const nextSlideBtn = e.target.closest('a[href="#service-block"]');
      smoothScroll(nextSlideBtn, e);
    }
  });

};

export default menu;