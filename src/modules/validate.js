const validate = () => {
  const forms = document.querySelectorAll('form');
  const calcBlock = document.querySelector('.calc-block');
  const nameInputs = document.querySelectorAll('input[name="user_name"]');
  const emailInputs = document.querySelectorAll('input[name="user_email"]');
  const phoneInputs = document.querySelectorAll('input[name="user_phone"]');

  const inputReplacer = (input, pattern) => {
    input.value = input.value.replace(pattern, '');
  };

  const validateWithRegExp = (input, regexp) => {
    if (input.value.match(regexp)) {
      input.classList.add('validation-error');
    } else {
      input.classList.remove('validation-error');
    }
  };

  const validateLength = (input, minLength = 0, maxLength = Infinity) => {

    if (input.value.length < minLength || input.value.length > maxLength) {
      input.classList.add('validation-error');
    } else {
      input.classList.remove('validation-error');
    }
  };

  forms.forEach(form => {
    form.addEventListener('input', (e) => {
      let input = e.target;

      if (input.name === 'user_phone') {
        validateWithRegExp(input, /[^\d\(\)\-\+]/gi);
      } else if (input.name === 'user_name') {
        validateWithRegExp(input, /[^а-я\s]/gi);
      } else if (input.name === 'user_message') {
        validateWithRegExp(input, /[^\\а-я\s\d\.\,\!\?\:\-\+\*\=\;\'\"\@\(\)]/gi);
      }
    });
  });

  calcBlock.addEventListener('input', (e) => {
    if (e.target.type === 'text') { inputReplacer(e.target, /[^\d]/gi); }
  });

  nameInputs.forEach(nameInput => {
    nameInput.addEventListener('blur', () => validateLength(nameInput, 2));
  });

  emailInputs.forEach(emailInput => {
    emailInput.addEventListener('blur', () => validateLength(emailInput, 1));
  });

  phoneInputs.forEach(phoneInput => {
    phoneInput.addEventListener('blur', () => validateLength(phoneInput, 7, 11));
    phoneInput.addEventListener('input', (e) => inputReplacer(e.target, /[^\d]/gi));
  });

};

export default validate;