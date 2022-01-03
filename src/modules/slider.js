const slider = (
  { sliderClass = 'slider',
    slideClass = 'slider__slide',
    slideActiveClass = 'slider__slide--active',
    dotsClass = 'slider__dots',
    dotClass = 'slider__dot',
    dotActiveClass = 'slider__dot--active',
    arrowsCommonClass = 'slider__arrow',
    arrowPrevClass = 'slider__arrow--prev',
    arrowNextClass = 'slider__arrow--next',
    slideTime = 2000
  }) => {
  const sliderBlock = document.querySelector(`.${sliderClass}`);
  const slides = document.querySelectorAll(`.${slideClass}`);
  const dotsContainer = document.querySelector(`.${dotsClass}`);
  let dots;

  let timeInterval = slideTime;
  let currentSlide = 0;
  let interval;

  const addDots = () => {
    slides.forEach(() => {
      dotsContainer.insertAdjacentHTML('beforeend', `<div class="${dotClass}"></div>`);
    });
    dotsContainer.firstChild.classList.add(dotActiveClass);
    dots = document.querySelectorAll(`.${dotClass}`);
  };

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };

  const autoSlide = () => {
    prevSlide(slides, currentSlide, slideActiveClass);
    prevSlide(dots, currentSlide, dotActiveClass);
    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    nextSlide(slides, currentSlide, slideActiveClass);
    nextSlide(dots, currentSlide, dotActiveClass);
  };

  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  if (sliderBlock === null) {
    console.error('Your slides container class is wrong. Option name: "sliderClass"');
    return;
  } else if (!slides.length) {
    console.error('Your slide class is wrong. Option name: "slideClass"');
    return;
  } else if (dotsContainer === null) {
    console.error('Your dots container class is wrong. Option name: "dotsClass"');
    return;
  }

  sliderBlock.addEventListener('click', (e) => {
    e.preventDefault();
    if (!e.target.matches(`.${dotClass}, .${arrowsCommonClass}`)) {
      return;
    }

    prevSlide(slides, currentSlide, slideActiveClass);
    prevSlide(dots, currentSlide, dotActiveClass);

    if (e.target.classList.contains(arrowNextClass)) {
      currentSlide++;
    } else if (e.target.classList.contains(arrowPrevClass)) {
      currentSlide--;
    } else if (e.target.classList.contains(dotClass)) {
      dots.forEach((dot, index) => {
        if (dot === e.target) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    nextSlide(slides, currentSlide, slideActiveClass);
    nextSlide(dots, currentSlide, dotActiveClass);
  });

  sliderBlock.addEventListener('mouseenter', (e) => {
    if (e.target.matches(`.${dotClass}, .${arrowsCommonClass}`)) {
      stopSlide();
    }
  }, true);
  sliderBlock.addEventListener('mouseleave', (e) => {
    if (e.target.matches(`.${dotClass}, .${arrowsCommonClass}`)) {
      startSlide(timeInterval);
    }
  }, true);

  addDots();
  startSlide(timeInterval);
};

export default slider;