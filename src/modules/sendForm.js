const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  let statusBlock = document.createElement('div');
  statusBlock.className = 'status-block';
  const loadAnimation = document.querySelector('.sk-chase').cloneNode(true);
  const errorText = 'Ошибка...';
  const succsessText = 'Спасибо! Наш менеджер с вами свяжется!';

  const validate = (list) => {
    let success = true;

    list.forEach(input => {
      if (input.classList.contains('validation-error')) {
        success = false;
      }
    });

    return success;
  };

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json"
      }
    }).then(res => res.json());
  };

  const submitForm = () => {
    const formData = new FormData(form);
    const formBody = {};
    const formElements = form.querySelectorAll('input');

    loadAnimation.classList.remove('d-none');
    statusBlock.textContent = '';
    statusBlock.insertAdjacentElement('beforeend', loadAnimation);

    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach(elem => {
      const element = document.getElementById(elem.id);
      const elementContent = elem.type === 'input' ? element.value : element.textContent;

      formBody[elem.id] = elementContent;
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then(() => {
          statusBlock.textContent = succsessText;

          formElements.forEach(input => {
            input.value = '';
            input.style.border = '';
          });
        })
        .catch(error => {
          statusBlock.textContent = errorText;
          console.error(error);
        });
    } else {
      statusBlock.textContent = errorText;
      alert('Данные заполнены неверно!!!');
    }
  };

  try {
    if (!form) {
      throw new Error('Формы с данным id нет на странице!');
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      submitForm();
    });
  } catch (error) {
    console.error(error.message);
  }
};

export default sendForm;