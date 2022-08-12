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

// hamburger-icon--hide
const sideBar = document.querySelector('.sidebar-container')
const hamBtns = document.querySelectorAll('.hamburger-icon')

hamBtns.forEach(btn => {
    btn.addEventListener('click', toggleSideMenu)
})

//submenus

const sidemenuFeatureBtn = document.querySelector('.sidemenu-features--button')
const sidemenuFeature = document.querySelector('.sidemenu-features')

const sidemenuCompanyBtn = document.querySelector('.sidemenu-company--button')
const sidemenuCompany = document.querySelector('.sidemenu-company')


sidemenuFeatureBtn.addEventListener('click', () => {
    sidemenuFeature.classList.toggle('sidemenu--hidden')
    const arrows = document.querySelectorAll('.sidemenu-features--button .arrow-swg')
    arrows.forEach(arrow => arrow.classList.toggle('menu-inactive--arrow'))
})

sidemenuCompanyBtn.addEventListener('click', () => {
    sidemenuCompany.classList.toggle('sidemenu--hidden')
    const arrows = document.querySelectorAll('.sidemenu-company--button .arrow-swg')
    arrows.forEach(arrow => arrow.classList.toggle('menu-inactive--arrow'))
})



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
    hamBtns.forEach(btn => {

        btn.classList.toggle('hamburger-icon--hide')


    })
    sideBar.classList.toggle('sidebar--hide')
}


function getArrow(menu, string = '.nav-el') {
    const arrows = menu.closest(string)
    return arrows
}

function hideMenu(element) {
    element.classList.toggle('menu-inactive--arrow')
}