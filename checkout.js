// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  const decideLogo = theme => {

    var logo = document.getElementById('theme-logo')

    if (localStorage.getItem('theme') === 'light') {
        logo.src = './img/dc_light.png'
    } else {
        logo.src = './img/dc_color_.png'
    }

  }


  decideLogo();
})()
