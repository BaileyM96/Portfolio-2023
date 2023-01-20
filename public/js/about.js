//Define burger button
const aboutBurgerBtn = document.getElementById('aboutBtn');
const aboutMenu = document.getElementById('mobile-menu');

//Define carousel buttons
const prevButton = document.querySelector('.carousel-control-prev');
const nextButton = document.querySelector('.carousel-control-next');

//Define carousel item
const carouselItem = document.querySelectorAll('.carousel-item');

//iterate over images
let carouselIndex = 0;


//hide/unhide burgerbtn
aboutBurgerBtn.addEventListener('click', () => {
    if (aboutMenu.style.display === 'none') {
        aboutMenu.style.display = 'block';
    } else {
        aboutMenu.style.display = 'none';
    }
    console.log('Hello')
});

// //Toggle previous photo
// prevButton.addEventListener('click', () => {
//     carouselItem[carouselIndex].classList.remove('active');
//     //show previous image with ternary operator
//     carouselIndex = carouselIndex > 0 ? carouselIndex -1 : carouselItem.length - 1;
//     carouselItem[carouselIndex].classList.add('active');
//     console.log('click previous');
// });

// // //Next button
// nextButton.addEventListener('click', () => {
//     carouselItem[carouselIndex].classList.remove('active');
//     //show next image with ternary operator
//     carouselIndex = carouselIndex < carouselItem.length -1 ? carouselIndex + 1 : 0;
//     carouselItem[carouselIndex].classList.add('active');
//     console.log('click next');
// });


