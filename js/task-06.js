const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', () => {
const inputLength = validationInput.dataset.length;
const inputValueLength = validationInput.value.length;

if (inputValueLength === Number(inputLength)) {
validationInput.classList.remove('invalid');
validationInput.classList.add('valid');
} else {
validationInput.classList.remove('valid');
validationInput.classList.add('invalid');
}
});