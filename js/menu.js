'use strict'




// Nav menu Desktop

const featuresButton = document.querySelector('.menu-features')
const companyButton = document.querySelector('.menu-company')

const featuresMenu = document.querySelector('.menu-features ~ .nav-menu')
const companyMenu = document.querySelector('.menu-company ~ .nav-menu')

featuresButton.addEventListener('click', toggleMenu)
companyButton.addEventListener('click', toggleMenu)

// Nav menu Mobile

// TODO: A. hamburger menu interaction
//      B. sub menu interaction

const hamBtns = document.querySelectorAll('.hamburger-icon')

hamBtns.forEach(btn => {
    btn.addEventListener('click', toggleSideMenu)
})

// hamburger-icon--hide

// Helper functions

function toggleMenu(event) {
    const path = event.target.closest('.nav-el')
    const arrows = path.querySelectorAll('.arrow-swg')
    const menu = path.querySelector('.nav-menu')

    arrows.forEach(arrow => arrow.classList.toggle('menu-inactive--arrow'))

    menu.classList.remove('menu-inactive')
    menu.classList.toggle('nav-menu--hidden')
    menu.addEventListener('transitionend', hideMenu)
}

function toggleSideMenu() {

    // event.target.classList.toggle('hamburger-icon--hide')
    hamBtns.forEach(btn => {
        console.log(btn.classList)
        btn.classList.toggle('hamburger-icon--hide')
        // console.log(btn)
        console.log(btn.classList)
    })
}


function getArrow(menu) {
    const arrows = menu.closest('.nav-el')
    return arrows
}

function hideMenu(element) {
    element.classList.toggle('menu-inactive--arrow')
}