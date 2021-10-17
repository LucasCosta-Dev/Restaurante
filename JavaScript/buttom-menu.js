var menuBar = document.querySelector('a.icon-menu');

menuBar.addEventListener('click', (e) => {
    e.preventDefault();
    let menuMobile = document.querySelector('.mobile-menu ul');
    if (menuMobile.classList.contains('show-menu')){
        menuMobile.classList.remove('show-menu')
    } else {
        menuMobile.classList.add('show-menu')
    }
});