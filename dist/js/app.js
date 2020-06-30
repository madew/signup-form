const inputFirstName = document.querySelector('#firstName');
const inputLastName = document.querySelector('#lastName');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const signUpForm = document.querySelector('.signup__form');

const regexp = {
  name: /^[a-zA-Z]{2,}$/g,
  email: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
  password: /^(\w*(?=\w*\d)(?=\w*[a-z])(?=\w*[A-Z])\w*){6,}$/,
};

console.log('#########################################');

function validateInput(target, regexp) {
  target.classList.remove('input-error');
  target.nextElementSibling.classList.remove('input-error-info_show');

  if (!target.value.match(regexp)) {
    target.classList.add('input-error');
    target.nextElementSibling.classList.add('input-error-info_show');
  }
}

signUpForm.addEventListener('submit', (event) => {
  validateInput(inputFirstName, regexp.name);
  validateInput(inputLastName, regexp.name);
  validateInput(inputEmail, regexp.email);
  validateInput(inputPassword, regexp.password);

  event.preventDefault();
});
