'use strict';

var menu = document.querySelector('.menu');

menu.addEventListener('click', function () {
    var icon = menu.children[0];
    var responseNav = document.querySelector('.visibility');
    if (icon.className === 'menu__icon') {
        icon.classList.remove('menu__icon');
        icon.classList.add('menu__icon--clicked');
        responseNav.style.display = 'block';
    } else {
        icon.classList.remove('menu__icon--clicked');
        icon.classList.add('menu__icon');
        responseNav.style.display = 'none';
    }
});

$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<a href="#" class="arrow arrow--right">></a>',
    prevArrow: '<a href="#" class="arrow arrow--left"><</a>',
    responsive: [{
        breakpoint: 600,
        settings: {

            slidesToShow: 2
        }
    }, {
        breakpoint: 420,
        settings: {
            slidesToShow: 1

        }
    }]

});

document.body.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
        e.preventDefault();
    }
});