'use strict'

const hamburger = document.querySelector('.hamburger');
const mobileMenuContainer = document.querySelector('.menu-mobile-container')

const toggleMenu = (e) => {
    mobileMenuContainer.classList.toggle('open')
}

hamburger.addEventListener('click', toggleMenu)