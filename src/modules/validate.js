const validate = () => {
  const calcInputs = document.querySelectorAll('.calc-block input[type=text]');
  const telInputs = document.querySelectorAll('input[type=tel]');
  const messageInputs = document.querySelectorAll('input[type=text][placeholder="Ваше сообщение"]');
  const emailInputs = document.querySelectorAll('input[type=email]');

  const inputsValidate = (inputs, pattern) => {
    inputs.forEach(input => input.addEventListener('input', e => {
      e.target.value = e.target.value.replace(pattern, '');
    }));
  };

  inputsValidate(calcInputs, /[^\d]/gi);
  inputsValidate(telInputs, /[^\d\(\)\-]/gi);
  inputsValidate(messageInputs, /[^а-я\-\s]/gi);
  inputsValidate(emailInputs, /[^\w\@\-\.\!\~\*\']/gi);
};

export default validate;