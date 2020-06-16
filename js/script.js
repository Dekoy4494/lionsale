// MouseWheel
$(document).ready(function() {
  $('html, body, *').mousewheel(function(e, delta) {
      this.scrollLeft -= (delta * 50);
      e.preventDefault();
  });

  $('.slider').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  
});

// CircleText
var circleTxt = document.getElementById('banner-text'); 
const Circle = new CircleType(circleTxt);
Circle.radius(90);
let style = circleTxt;
let x = 0;
style.style.transform = 'rotate(' + x + 'deg)';


if (style.style.transform !== 'rotate(359deg)') {
  setInterval(function() {
    x += 3;
    style.style.transform = 'rotate(' + x + 'deg)';
    
        if ( x > 360 ) {
        x = 0
      }
  }, 40);
} 

// dots

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});
particlesJS.load('particles-js2', 'js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

particlesJS.load('particles-js3', 'js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});


// space key off scrolling
var SPACE_KEYCODE=32;
document.onkeydown=function(e){
	var keycode=e.keyCode||e.charCode,
		body=document.body;

	if(keycode!=SPACE_KEYCODE)
		return;
	
	e.preventDefault();
}


//parallax 

$(window).stellar();