
function menuMob() {
    const navBurger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const menuRight = document.querySelector('.menu--right');



    navBurger.addEventListener('click', function (evt) {
        evt.preventDefault();
        nav.append(menuRight);

        nav.classList.toggle('mobActive');
        this.classList.toggle('active');
    });
}