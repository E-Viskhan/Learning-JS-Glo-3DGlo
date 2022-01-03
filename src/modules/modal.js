import { animate } from "./helpers";

const modal = () => {
  const buttons = document.querySelectorAll('.popup-btn');
  const modal = document.querySelector('.popup');
  const modalContent = modal.querySelector('.popup-content');

  const showModal = () => {
    modal.style.display = 'block';
    animate({
      duration: 300,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        modalContent.style.transform = `scale(${progress})`;
        modal.style.opacity = progress;
      }
    });
  };

  const closeModal = () => {
    animate({
      duration: 300,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        modalContent.style.transform = `scale(${1 - progress})`;
        modal.style.opacity = 1 - progress;
      }
    });
    setTimeout(() => modal.style.display = 'none', 300);
  };

  buttons.forEach(button => button.addEventListener('click', showModal));

  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      closeModal();
    }
  });
};

export default modal;