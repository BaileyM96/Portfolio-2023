//Define burger button
const aboutBurgerBtn = document.getElementById('aboutBtn');
const aboutMenu = document.getElementById('mobile-menu');

//Define carousel buttons
const prevButton = document.querySelectorAll('.carousel-control-prev');
const nextButton = document.querySelectorAll('.carousel-control-next');

//Define carousel item
const carouselItem = document.querySelectorAll('.carousel-item');


//create an index that is 0
//The index has to start at 0 so it can keep building up
let index = 0;

//Create addEventListener
prevButton.addEventListener('click', () => {
    // I LEFT OFF HERE DONT FORGET
})

//hide/unhide burgerbtn
aboutBurgerBtn.addEventListener('click', () => {
    if (aboutMenu.style.display === 'none') {
        aboutMenu.style.display = 'block';
    } else {
        aboutMenu.style.display = 'none';
    }
    console.log('Hello')
});


