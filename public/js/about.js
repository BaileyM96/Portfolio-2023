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




