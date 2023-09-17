const getElement = (id) => document.getElementById(id);
const addClass = (element, className) => element.classList.add(className);
const removeClass = (element, className) => element.classList.remove(className);
const queryAll = (selector) => document.querySelectorAll(selector);

const navToggle = getElement('nav-toggle');
const navClose = getElement('nav-close');
const navMenu = getElement('nav-menu');
const navLink = queryAll('.nav__link');
const header = getElement('header');

const toggleMenu = () => navMenu.classList.toggle('show-menu');
const linkAction = () => removeClass(navMenu, 'show-menu');
const toggleHeaderBg = () => header.classList.toggle('bg-header', window.scrollY >= 50);

navToggle?.addEventListener('click', toggleMenu);
navClose?.addEventListener('click', toggleMenu);
navLink.forEach((n) => n.addEventListener('click', linkAction));
window.addEventListener('scroll', toggleHeaderBg);

gsap.from('.home__img-2', { opacity: 0, y: 200, duration: 1.2, delay: 0.1 });
gsap.from('.home__img-3', { opacity: 0, y: 200, duration: 1.2, delay: 0.5 });
gsap.from('.home__data', { opacity: 0, y: -60, duration: 1.2, delay: 1 });
gsap.from('.home__bird-1', { opacity: 0, y: -80, duration: 1.2, delay: 1.1 });
gsap.from('.home__bird-2', { opacity: 0, y: 80, duration: 1.2, delay: 1.2 });
gsap.from('.home__img-1', { opacity: 0, y: 200, duration: 1.2, delay: 1.2 });
gsap.from('.home__img-4', { opacity: 0, y: 200, duration: 1.2, delay: 1.3 });
