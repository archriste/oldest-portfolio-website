document.ondblclick = function(e) {
    e.preventDefault();
}

let activeIndex = 0;

const slides = document.getElementsByClassName('slide');

const getMainColor = () => {
    return;
}

const setMainColor = () => {
    document.documentElement.style.setProperty('--main-color', `hsl(var(--slide${activeIndex}-h), var(--slide${activeIndex}-s), var(--slide${activeIndex}-l))`);
    document.documentElement.style.setProperty('--nav-font-color', `hsl(var(--slide${activeIndex}-h), var(--slide${activeIndex}-s), 90%`);
}

const handleClickRight = () => {
  
    const nextIndex = activeIndex + 1 > slides.length - 1 ? 0 : activeIndex + 1;

    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`);

    const nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

    currentSlide.dataset.status = "inactive-to-left";

    nextSlide.dataset.status = "active-from-right";

    const slideStyle = window.getComputedStyle(nextSlide);

    setTimeout(() => {
        nextSlide.dataset.status = "active";
        activeIndex = nextIndex;
        setMainColor();
    });

    
    //document.documentElement.style.setProperty('--main-color', slideStyle.backgroundColor);
}

const handleClickLeft = () => {
    
    const nextIndex = activeIndex - 1 < 0 ? slides.length - 1 : activeIndex - 1;

    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`);

    const nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

    const slideStyle = window.getComputedStyle(nextSlide);
    
    currentSlide.dataset.status = "inactive-to-right";

    nextSlide.dataset.status = "active-from-left";

    setTimeout(() => {
        nextSlide.dataset.status = "active";
        activeIndex = nextIndex;
        setMainColor();
    });
}

const handleClickMenu = (index) => {
    
    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`);

    const nextSlide = document.querySelector(`[data-index="${index}"]`);

    const slideStyle = window.getComputedStyle(nextSlide);

    //document.documentElement.style.setProperty('--main-color', slideStyle.backgroundColor);

    if (index === activeIndex) {
        return;
    } else if (index > activeIndex) {
        currentSlide.dataset.status = "inactive-to-left";
        nextSlide.dataset.status = "active-from-right";
    } else {
        currentSlide.dataset.status = "inactive-to-right";
        nextSlide.dataset.status = "active-from-left";
    }

    setTimeout(() => {
        nextSlide.dataset.status = "active";
        activeIndex = index;
        setMainColor();
    });
}

const handleHamburger = () => {
    const hamburger = document.querySelector('.hamburger');
    const menuItems = document.querySelector('.menu');
    const contacts = document.querySelector('.contacts');
    const burgerIcon = document.querySelector('#hamburger-icon');
    const lights = document.querySelectorAll('.light');
    hamburger.classList.toggle('unhamburger');
    menuItems.classList.toggle('active');
    contacts.classList.toggle('active');
    burgerIcon.classList.toggle('fa-bars');
    burgerIcon.classList.toggle('fa-times');
    lights.forEach((div) => {
        div.classList.toggle('dark');
    });
}