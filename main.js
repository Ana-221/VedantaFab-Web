//javascript for responsive navigation 
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");

});

//javascript for video slider navigation
var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.navbtn');
let currentSlide = 1;

//javascript for video manual navigation
var manualNav = function(manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((navbtn) => {
            navbtn.classList.remove('active');
        });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}
btns.forEach((navbtn, i) => {
    navbtn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});

//javascript for video slider autoplay

var repeat = function(activeClass) {
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
        setTimeout(function() {

            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if (slides.length == i) {
                i = 0;
            }
            if (i >= slides.length) {
                return;
            }
            repeater();
        }, 10000);
    }
    repeater();
}
repeat();
//const btns = document.querySelectorAll(".nav-btn");
//const slides = document.querySelectorAll(".video-slide");
//const contents = document.querySelectorAll(".content");

//var sliderNav = function(manual) {
//  btns.forEach((btn) => {
//    btn.classList.remove("active");
//});
//slides.forEach((slide) => {
//  slide.classList.remove("active");
//});
//contents.forEach((content) => {
//  content.classList.remove("active");
//});
//btns[manual].classList.add("active");
//slides[manual].classList.add("active");
//contents[manual].classList.add("active");
//}

//btns.forEach((btn, i) => {
//  btn.addEventListener("click", () => {
//    sliderNav(i);
//});
//});

//Navigation bar effects on scroll

window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
});

// Servces section -modal
const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick) {
    serviceModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtns, i) => {
    learnmoreBtns.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtns) => {
    modalCloseBtns.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});


//products section
const productsModals = document.querySelectorAll(".products-model");
const imgCards = document.querySelectorAll(".img-card");
const productsCloseBtns = document.querySelectorAll(".products-close-btn");

var productsModal = function(productsModalClick) {
    productsModals[productsModalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        productsModal(i);
    });
});

productsCloseBtns.forEach((productsCloseBtns) => {
    productsCloseBtns.addEventListener("click", () => {
        productsModals.forEach((productsModalView) => {
            productsModalView.classList.remove("active");
        });
    });
});

//website light/dark theme

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localSrorage.setItem("saved-theme", getCurrentTheme());
    localSrorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if (savedTheme) {
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

//scroll to the top button

const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function() {
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
//Navigation menu items active on page scroll

window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".navigation-items a[href*=" + id + "] ").classList.add("active");
        } else {
            document.querySelector(".navigation-items a[href*=" + id + "]").classList.remove("active")
        }
    });
});
//scroll reveal animations


// common reveal options to create reveal animations

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100
});

//target elements, and specify options to create reveal animations
ScrollReveal().reveal('.home .content h1 span , .section-title-01, .section-title-02', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.home .content h1 , .home .content p, .about-info .btn, .about-btn', { delay: 400, origin: 'right' });
ScrollReveal().reveal('.home .content a', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.about-img', { delay: 300, origin: 'bottom' });
ScrollReveal().reveal('.description,', { delay: 400, origin: 'right' });
ScrollReveal().reveal('.about .epc-achievements li', { delay: 400, origin: 'right', interval: 200 });
ScrollReveal().reveal('.services-description', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.service-card', { delay: 600, origin: 'bottom', interval: 200 });