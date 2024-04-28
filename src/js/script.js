const toggleMenuBtn = document.querySelector('#menu-btn');
const toggleMenuImg = document.querySelector('#menu-btn i');
const toggleMenu = document.querySelector('#toggle-menu');
const menuLinks = document.querySelector('#main-nav ul a');

toggleMenuBtn.addEventListener('click', toggleNav);

function toggleNav() {
    toggleMenu.classList.toggle('-translate-y-full');
    
    if(toggleMenu.classList.contains('-translate-y-full')) {
        toggleMenuImg.classList.add('bi', 'bi-list');
        toggleMenuImg.classList.remove('bi', 'bi-x');
        toggleMenuBtn.setAttribute("aria-expanded", "false");
    }
    else {
        toggleMenuImg.classList.add('bi', 'bi-x');
        toggleMenuImg.classList.remove('bi-list');
        toggleMenuBtn.setAttribute("aria-expanded", "true");
    }
}
