const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')
const hamburger = document.querySelector('.hamburger')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

window.onscroll = function() {myFunction()};

let sticky = hamburger.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky) {
        hamburger.classList.add('sticky')
    } else {
        hamburger.classList.remove('sticky')
    }
}
