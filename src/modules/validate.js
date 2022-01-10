const validate = () => {
  const allInputs = document.querySelectorAll('input');
  const calcInputs = document.querySelectorAll('.calc-block input[type=text]');
  const telInputs = document.querySelectorAll('input[type=tel]');
  const nameInputs = document.querySelectorAll('input[name="user_name"]');
  const messageInputs = document.querySelectorAll('input[name="user_message"]');
  const emailInputs = document.querySelectorAll('input[type=email]');

  const inputsValidate = (inputs, pattern) => {
    inputs.forEach(input => {
      input.addEventListener('input', e => {
        e.target.value = e.target.value.replace(pattern, '');
      });
    });
  };

  allInputs.forEach(input => {
    input.addEventListener('blur', e => {
      e.target.value = e.target.value
        .trim()
        .replace(/\s{2,}/gi, ' ')
        .replace(/\-{2,}/gi, '-');
    });
  });

  inputsValidate(calcInputs, /[^\d]/gi);
  inputsValidate(telInputs, /[^\d\(\)\-\+]/gi);
  inputsValidate(emailInputs, /[^\w\@\-\.\!\~\*\']/gi);
  inputsValidate(nameInputs, /[^а-я\s]/gi);
  inputsValidate(messageInputs, /[^а-я\s\d\.\,\!\?\:\;\"\'\*]/gi);

  messageInputs.forEach(input => {
    input.addEventListener('blur', () => {
      input.value = input.value
        .replace(/^\S+\s/gi, match => {
          return match[0].toUpperCase() + match.substr(1).toLowerCase();
        });
    });
  });

  nameInputs.forEach(input => {
    input.addEventListener('blur', () => {
      input.value = input.value
        .replace(/\S+/gi, match => match[0].toUpperCase() + match.substr(1).toLowerCase());
    });
  });
};

export default validate;