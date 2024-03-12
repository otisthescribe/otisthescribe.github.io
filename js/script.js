const SanbudNav = document.getElementById("SanbudNav");
const SanbudNavBrand = document.getElementById("SanbudNavBrand");

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        SanbudNav.classList.add('navbar-light');
        SanbudNav.classList.remove('navbar-dark');
        SanbudNav.classList.add('bg-light');
        SanbudNav.classList.remove('bg-dark');
        SanbudNav.classList.add('custom-navbar-scrolled');
        SanbudNav.classList.remove('custom-navbar');
        SanbudNavBrand.classList.add('border-bottom');
    }
    else {
        SanbudNav.classList.remove('navbar-light');
        SanbudNav.classList.add('navbar-dark');
        SanbudNav.classList.remove('bg-light');
        SanbudNav.classList.add('bg-dark');
        SanbudNav.classList.remove('custom-navbar-scrolled');
        SanbudNav.classList.add('custom-navbar');
        SanbudNavBrand.classList.remove('border-bottom');
    }
});