/* This script controls the navbar position and navlink highlighting */
$(document).ready(function() {

    console.log("main.js loaded");

    // Selectors for all the elements we'll need
    const navbar = document.querySelector('.sticky-nav');
    const links = document.querySelectorAll('.sticky-nav a');
    const navbarTop = navbar.offsetTop;
    const sections = document.querySelectorAll('section');

    // Scroll event listener to update the active section in the navbar
    $(window).scroll(function() {

        // Get the current scroll position
        const scrollPos = $(window).scrollTop();

        // If the user has scrolled past the hero section, add the stuck class to the navbar
        if (scrollPos >= navbarTop) {
            navbar.classList.add('stuck');
            console.log("added stuck");
        // Otherwise, the stuck class should be removed if it is present
        } else {
            navbar.classList.remove('stuck');
        }

        // Loop through all the sections and check if the current scroll position is within the section
        sections.forEach(function() {
            if($(this).is(':visible')){// The top of the section is the offset of the section minus the height of the navbar
            const top = $(this).offset().top - 50;
            const bottom = top + $(this).outerHeight();

            // If the current scroll position is within the section, add the active class to the corresponding navlink
            if (scrollPos >= top && scrollPos <= bottom) {
                links.removeClass('active');
                const currentId = `#${$(this).attr('id')}`;
                const currentLink = $(`a[href="${currentId}"]`);
                currentLink.addClass('active');
                console.log("added active");
            }}
        });
    });
});