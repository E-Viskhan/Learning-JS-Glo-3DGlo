const modal = () => {
  const buttons = document.querySelectorAll('.popup-btn');
  const modal = document.querySelector('.popup');
  const modalContent = modal.querySelector('.popup-content');

  let valueForAnimate = 0;

  const modalAnimate = () => {
    if (screen.width < 768) { return; }

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
    modalAnimate();
  };

  const closeModal = () => modal.style.display = 'none';

  buttons.forEach(button => button.addEventListener('click', showModal));

  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      closeModal();
    }
  });
};

export default modal;