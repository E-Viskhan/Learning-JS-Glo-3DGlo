const modal = () => {
  const buttons = document.querySelectorAll('.popup-btn');
  const modal = document.querySelector('.popup');
  const modalContent = modal.querySelector('.popup-content');
  const closeBtn = modal.querySelector('.popup-close');

  let valueForAnimate = 0;

  const modalAnimate = () => {
    let idAnimate;

    if (valueForAnimate > 1) {
      cancelAnimationFrame(idAnimate);
      modalContent.style.transform = 'scale(1)';
      modal.style.opacity = '1';
      valueForAnimate = 0;
    } else {
      idAnimate = requestAnimationFrame(modalAnimate);
      modal.style.opacity = valueForAnimate;
      modalContent.style.transform = `scale(${valueForAnimate})`;
      valueForAnimate += 0.08;
    }
  };

  const showModal = () => {
    modal.style.display = 'block';
    if (screen.width > 768) {
      modalAnimate();
    }
  };
  const closeModal = () => modal.style.display = 'none';

  buttons.forEach(button => button.addEventListener('click', showModal));
  closeBtn.addEventListener('click', closeModal);
};

export default modal;