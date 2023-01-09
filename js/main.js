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

// handburger menu

function myFunction(x) {
  x.classList.toggle("change");
}


// dark mode / light mode

let darkMode = localStorage.getItem("darkMode")
const mode = document.querySelector('.nav-mode')


const enableDarkMode = () => {
  document.body.classList.add('dark-mode');
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('darkMode', null);
};


//check for previously used mode and apply that

//icon
let currentMode = mode.children[0].children[0];

if (darkMode === 'enabled') {
  enableDarkMode();
  currentMode.setAttribute('href', '#to-dark')
}
else{
  disableDarkMode();
  currentMode.setAttribute('href', '#to-light')
};



mode.addEventListener('click', () => {

  darkMode = localStorage.getItem('darkMode')

  if (darkMode !== 'enabled') {
    enableDarkMode();
  }
  else{
    disableDarkMode();
  };

  //change icon

  let current_mode = mode.children[0].children[0];
  current_mode.getAttribute('href') === '#to-light'
  ? current_mode.setAttribute('href', '#to-dark')
  : current_mode.setAttribute('href', '#to-light')
});