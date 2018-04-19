'use strict';

var menu = document.querySelector('.menu');
var btn = document.querySelector('.nav__btn--box');
var aside = document.querySelector('.aside');

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

btn.addEventListener('click', function () {
    aside.classList.add('aside--active');
    btn.classList.remove('nav__btn--active');
});

aside.addEventListener('mouseleave', function () {
    aside.classList.remove('aside--active');
    btn.classList.add('nav__btn--active');
});

document.body.addEventListener('touchstart', function (e) {
    if (e.targetTouches[0].target.className === 'section-sandwich') {
        aside.classList.remove('aside--active');
        btn.classList.add('nav__btn--active');
    }
});