const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  let statusBlock = document.createElement('div');
  statusBlock.className = 'status-block';
  const loadAnimation = document.querySelector('.sk-chase').cloneNode(true);
  let errorText = 'Ошибка...';
  const succsessText = 'Спасибо! Наш менеджер с вами свяжется!';

  const validate = (formInputs) => {
    const redBorder = (elem) => {
      elem.style.border = '2px solid red';
      setTimeout(() => elem.style.border = '', 3000);
    };

    let success = true;
    errorText = 'Ошибка...';

    formInputs.forEach(input => {
      const type = input.name;
      const value = input.value;
      let isEmpty = value === '';

      switch (type) {
        case 'user_email':
          if (isEmpty) {
            success = false;
            redBorder(input);
            errorText += '<br>' + 'Не заполнен Email!';
          }
          break;
        case 'user_message':
          if (isEmpty) {
            success = false;
            redBorder(input);
            errorText += '<br>' + 'Не заполнено поле сообщение!';
          }
          break;
        case 'user_name':
          if (value.length < 2) {
            success = false;
            redBorder(input);
            errorText += '<br>' + 'В имени должно быть от 2 букв!';
          }
          break;
        case 'user_phone':
          if (value.length < 6) {
            success = false;
            redBorder(input);
            errorText += '<br>' + 'Слишком короткий номер!';
          } else if (value.length > 12) {
            success = false;
            redBorder(input);
            errorText += '<br>' + 'Слишком длинный номер!';
          }
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
    statusBlock.innerHTML = '';
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
          statusBlock.innerHTML = succsessText;

          formElements.forEach(input => {
            input.value = '';
            input.style.border = '';
          });
        })
        .catch(error => {
          statusBlock.innerHTML = errorText;
          console.error(error);
        });
    } else {
      statusBlock.innerHTML = errorText;
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