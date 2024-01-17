const hamburger = document.querySelector('.header .navbar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .navbar .nav-list ul');
const header = document.querySelector('.header .container');
const links = document.querySelectorAll('.nav-link')
const headerBackground = document.querySelector('.header');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

// WHEN A LINK OF THE NAVBAR IS CLICKED, THE MOBILE MENU IS CLOSE
links.forEach(function(link) {
    link.addEventListener('click', () => {
        mobile_menu.classList.remove('active');
        hamburger.classList.remove('active')
    })
});

// SCROLL ANIMATION TO THE NAVBAR (HEADER) COLOR
document.addEventListener('scroll', () => {
    var scrollY = window.scrollY;

    if (scrollY > 250){
        headerBackground.style.backgroundColor = "#1d3557";
    }
    else {
        headerBackground.style.backgroundColor = "transparent";
    }
})