const scriptURL = 'https://script.google.com/macros/s/AKfycbx2bzoe0szzz7gukEeLQ62VuT7B6Fx2pIkdYGcCl-cGpMrqhNHyE_2Sjrh8C9tV6yrE/exec'
const form = document.forms['form-submit']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})


