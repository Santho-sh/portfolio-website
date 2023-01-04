const primaryNav = document.querySelector('.nav__links');
const navToggle = document.querySelector('.menu__toggle');


    navToggle.addEventListener("click", () => {
        const visibile = primaryNav.getAttribute('data-visible');

        if (visibile == 'false') {
          primaryNav.setAttribute('data-visible', true);
        }
        else if (visibile == 'true') {
          primaryNav.setAttribute('data-visible', false);
        }
    });

