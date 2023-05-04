/* This script controls the navbar position and navlink highlighting */
$(document).ready(function () {
  console.log("main.js loaded");

  // Selectors for all the elements we'll need
  const navbar = document.querySelector(".sticky-nav");
  const links = document.querySelectorAll(".sticky-nav a");
  const navbarTop = navbar.offsetTop;
  const sections = document.querySelectorAll("section");
  const hero = document.querySelector("#hero");
  const content = document.querySelector("#content");

  // Scroll event listener to update the active section in the navbar
  $(window).scroll(function () {
    // Get the current scroll position
    const scrollPos = $(window).scrollTop();

    // If the user has scrolled past the hero section, add the stuck class to the navbar
    if (scrollPos >= navbarTop) {
      navbar.classList.add("stuck");
      console.log("added stuck");
      // Otherwise, the stuck class should be removed if it is present
    } else {
      navbar.classList.remove("stuck");
    }

    // Loop through all the sections and check if the current scroll position is within the section
    sections.forEach(function (section) {
      if ($(section).is(":visible")) {
        // The top of the section is the offset of the section minus the height of the navbar
        const top = $(section).offset().top - navbar.offsetHeight;
        const bottom = top + $(section).outerHeight();

        console.log(
          `current section: ${section.getAttribute(
            "id"
          )} \ntop: ${top} \nbottom: ${bottom} \nscrollPos: ${scrollPos} \nnavbarTop: ${navbarTop} \nnavbar.top: ${
            navbar.top
          } \nhero.offsetHeight: ${hero.offsetHeight} \nnavbar.offsetHeight: ${navbar.offsetHeight} \nnavbar.outerHeight: ${navbar.outerHeight}
        `);

        // If the current scroll position is within the section, add the active class to the corresponding navlink
        if (
          scrollPos >= navbarTop &&
          scrollPos <= bottom &&
          scrollPos >= top &&
          scrollPos >= content.offsetTop - navbar.offsetHeight
        ) {
          const currentId = `#goto-${$(section).attr("id")}`;
          const currentLink = $(`a[href="${currentId}"]`);
          currentLink.addClass("active");
          console.log("added active");
          return;
        }
        console.log(`${section.getAttribute("id")} not active}`);
        $(`a[href="#goto-${section.getAttribute("id")}"]`).removeClass("active");
        console.log(`removed active from ${section.getAttribute("id")}`);
        return;
      }
    });
  });
});
