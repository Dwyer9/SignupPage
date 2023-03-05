const form = document.querySelector('.form');
const password = document.querySelector('.password');
const passwordConfirm = document.querySelector('.confirm-password');
const passowordError = document.querySelector('.password-error');

form.addEventListener('submit', () => {
  if (password.value !== passwordConfirm.value) {
    password.classList.add('error');
    passwordConfirm.classList.add('error');
    passowordError.classList.remove('hidden');
  } else {
    password.classList.remove('error');
    passwordConfirm.classList.remove('error');
    passowordError.classList.add('hidden');
  }
});
