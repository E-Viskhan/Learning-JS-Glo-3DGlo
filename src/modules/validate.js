const validate = () => {
  const forms = document.querySelectorAll('form');

  const validateInput = (e, regexp) => {
    if (e.target.value.match(regexp)) {
      e.target.classList.add('validation-error');
    } else {
      e.target.classList.remove('validation-error');
    }
  };

  forms.forEach(form => {
    form.addEventListener('input', (e) => {
      if (e.target.name === 'user_phone') {
        validateInput(e, /[^\d\(\)\-\+]/gi);
      } else if (e.target.name === 'user_name') {
        validateInput(e, /[^а-я\s]/gi);
      } else if (e.target.name === 'user_message') {
        validateInput(e, /[^\\а-я\s\d\.\,\!\?\:\-\+\*\=\;\'\"\@\(\)]/gi);
      }
    });
  });

  // Код выше и ниже где-то повторяют функционал друг друга, если раскоментировать код выше,
  // нужно закоментировать код ниже, и наоборот.

  // const allInputs = document.querySelectorAll('input');
  // const calcInputs = document.querySelectorAll('.calc-block input[type=text]');
  // const telInputs = document.querySelectorAll('input[type=tel]');
  // const emailInputs = document.querySelectorAll('input[type=email]');
  // const textInputs = document.querySelectorAll('input[type=text]:not(.calc-item)');

  // const inputsValidate = (inputs, pattern) => {
  //   inputs.forEach(input => {
  //     input.addEventListener('input', e => {
  //       e.target.value = e.target.value.replace(pattern, '');
  //     });
  //   });
  // };

  // inputsValidate(calcInputs, /[^\d]/gi);
  // inputsValidate(telInputs, /[^\d\(\)\-\+]/gi);
  // inputsValidate(textInputs, /[^а-я\-\s]/gi);
  // inputsValidate(emailInputs, /[^\w\@\-\.\!\~\*\']/gi);

  // allInputs.forEach(input => {
  //   input.addEventListener('blur', e => {
  //     e.target.value = e.target.value
  //       .replace(/^[\s\-]+/gi, '')
  //       .replace(/[\s\-]+$/gi, '')
  //       .replace(/\s{2,}/gi, ' ')
  //       .replace(/\-{2,}/gi, '-');
  //   });
  // });

  // textInputs.forEach(input => {
  //   input.addEventListener('blur', e => {
  //     e.target.value = e.target.value.replace(/\S+/gi, match => match[0].toUpperCase() + match.substr(1).toLowerCase());
  //   });
  // });

};

export default validate;