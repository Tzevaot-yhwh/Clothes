const open = document.getElementById('open')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')

if (open) {
  open.addEventListener('click', function () {
          nav.classList.add('active');
          console.log('its working')
      })  
}

if (close) {
    close.addEventListener('click', function () {
            nav.classList.remove('active');
        })  
  }