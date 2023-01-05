const primaryNav = document.querySelector('.nav-links-side');
const navToggle = document.querySelector('.nav-menu');


navToggle.addEventListener("click", () => {
  const visibile = primaryNav.getAttribute('data-visible');

  if (visibile == 'false') {
    primaryNav.setAttribute('data-visible', true);
  }
  else if (visibile == 'true') {
    primaryNav.setAttribute('data-visible', false);
  }
});

function myFunction(x) {
  x.classList.toggle("change");
}


function modeSwitch() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}