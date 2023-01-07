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

// to change icon

const mode = document.querySelector('.nav-mode')

mode.addEventListener('click', (e) => {
  let current_mode = e.currentTarget.children[0].children[0];
  current_mode.getAttribute('href') === '#to-light'
  ? current_mode.setAttribute('href', '#to-dark')
  : current_mode.setAttribute('href', '#to-light')
})