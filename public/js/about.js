//Define burger button
const aboutBurgerBtn = document.getElementById('aboutBtn');
const aboutMenu = document.getElementById('mobile-menu');


//hide/unhide burgerbtn
aboutBurgerBtn.addEventListener('click', () => {
    if (aboutMenu.style.display === 'none') {
        aboutMenu.style.display = 'block';
    } else {
        aboutMenu.style.display = 'none';
    }
    console.log('Hello')
});


//Want to make the elements appear...
//By having it fade in when you scroll
// window.addEventListener('scroll', function() {
//     const element = this.document.querySelector('.opacity-0');
//     const position = element.getBoundingClientRect().top;

//     if (position < this.window.innerHeight) {
//         element.classList.add('opacity-100');
//         element.classList.remove('opacity-0');

//     }
// });




