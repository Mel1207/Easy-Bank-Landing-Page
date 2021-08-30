'use strict'

const hamburger = document.querySelector('.hamburger');
const mobileMenuContainer = document.querySelector('.menu-mobile-container');
const body = document.querySelector('body')

const toggleMenu = (e) => {
    mobileMenuContainer.classList.toggle('open')
    body.classList.toggle('overflow-hide')
}

hamburger.addEventListener('click', toggleMenu)