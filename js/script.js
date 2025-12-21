// 1. Inisialisasi AOS (Animasi)
AOS.init({
  once: false,
  mirror: true,
  duration: 1000,
  disable: 'mobile',
});

// 2. Konfigurasi Contact Forms
const scriptURL = 'https://script.google.com/macros/s/AKfycbwYO5aTouQVgzAzYDypnVwxl0KzmegYtRSdjHO4A1ZG9EmTzCDkUxT5zx3rBgdOZtJm8w/exec';
const form = document.forms['billy-contact-form'];

const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');
const myAlertError = document.querySelector('.my-alert-error');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Tampilkan Loading
  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none');

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      // Sukses
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      myAlert.classList.toggle('d-none');
      form.reset();
      console.log('Success!', response);
    })
    .catch((error) => {
      // Error
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      myAlertError.classList.toggle('d-none');
      console.error('Error!', error.message);
    });
});
