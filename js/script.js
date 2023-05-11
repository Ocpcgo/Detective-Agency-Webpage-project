// Togle class active

const navbarNav = document.querySelector('.navbar-nav');

// When clicked
document.querySelector('#stack-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// To deactivate stack-menu
const stackMenu = document.querySelector('#stack-menu');

document.addEventListener('click', function(click) {
    if (!stackMenu.contains(click.target) && !navbarNav.contains(click.target)){
        navbarNav.classList.remove('active');
    }

});