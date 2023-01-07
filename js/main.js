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



// experiment



var c = document.getElementById('canv');
var $ = c.getContext('2d');


var col = function(x, y, r, g, b) {
  $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
  $.fillRect(x, y, 1,1);
}
var R = function(x, y, t) {
  return( Math.floor(192 + 64*Math.cos( (x*x-y*y)/300 + t )) );
}

var G = function(x, y, t) {
  return( Math.floor(192 + 64*Math.sin( (x*x*Math.cos(t/4)+y*y*Math.sin(t/3))/300 ) ) );
}

var B = function(x, y, t) {
  return( Math.floor(192 + 64*Math.sin( 5*Math.sin(t/9) + ((x-100)*(x-100)+(y-100)*(y-100))/1100) ));
}

var t = 0;

var run = function() {
  for(x=0;x<=35;x++) {
    for(y=0;y<=35;y++) {
      col(x, y, R(x,y,t), G(x,y,t), B(x,y,t));
    }
  }
  t = t + 0.03;
  window.requestAnimationFrame(run);
}

run();





