const animate = ({ timing, draw, duration }) => {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
};

const blockBody = () => {
  const calcScroll = () => {
    let scrollWidth = 0;
    let scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );

    if (scrollHeight > document.documentElement.clientHeight) {
      let div = document.createElement('div');
      div.style.width = '500px';
      div.style.height = '500px';
      div.style.overflowY = 'scroll';
      div.style.visibility = 'hidden';
      document.body.appendChild(div);
      scrollWidth = div.offsetWidth - div.clientWidth;
      div.remove();
    }
    return scrollWidth;
  };
  document.body.style.marginRight = `${calcScroll()}px`;
  document.body.style.overflow = 'hidden';
};

const unblockBody = () => {
  document.body.style.marginRight = '0';
  document.body.style.overflow = 'auto';
};

export { animate, blockBody, unblockBody };