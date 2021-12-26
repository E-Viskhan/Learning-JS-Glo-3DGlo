const menu = () => {

  const menuBtn = document.querySelector('.menu');
  const menu = document.querySelector('menu');
  const closeBtn = menu.querySelector('.close-btn');
  const menuItems = menu.querySelectorAll('ul>li>a');
  const nextSlideBtn = document.querySelector('[href="#service-block"]');

  const handleMenu = () => menu.classList.toggle('active-menu');

  const smoothScroll = (link, event) => {
    event.preventDefault();

    const href = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(href);
    const scrollValue = targetElement.getBoundingClientRect().top;

    window.scrollBy({
      top: scrollValue,
      behavior: 'smooth'
    });
  };

  menuBtn.addEventListener('click', handleMenu);
  closeBtn.addEventListener('click', handleMenu);
  menuItems.forEach(menuItem => menuItem.addEventListener('click', (event) => {
    handleMenu();
    smoothScroll(menuItem, event);
  }));
  nextSlideBtn.addEventListener('click', (event) => smoothScroll(nextSlideBtn, event));

};

export default menu;