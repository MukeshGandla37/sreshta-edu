document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('nav');
    const banner = document.querySelector('.banner');

  
    const bannerOffset = banner.offsetTop + banner.offsetHeight;

    window.addEventListener('scroll', function () {
       
        if (window.pageYOffset > bannerOffset) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });
});
