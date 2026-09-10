document.addEventListener('DOMContentLoaded', function () {
  /* Mobile navigation toggle */
  var burger = document.querySelector('.navbar-burger');
  var menu = document.getElementById('mainMenu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('is-active');
      burger.classList.toggle('is-active', open);
      burger.setAttribute('aria-expanded', open);
    });
  }

  /* Landing page fade carousel: cycles every 6 seconds, dots jump to a slide */
  var slides = Array.prototype.slice.call(document.querySelectorAll('.carousel-slide'));
  var dotsContainer = document.querySelector('.carousel-dots');
  if (slides.length > 1 && dotsContainer) {
    var current = 0;
    var timer;
    var dots = slides.map(function (_, i) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'carousel-dot';
      dot.setAttribute('aria-label', 'Show slide ' + (i + 1));
      dot.addEventListener('click', function () { show(i); start(); });
      dotsContainer.appendChild(dot);
      return dot;
    });
    function show(i) {
      slides[current].classList.remove('is-active');
      dots[current].classList.remove('is-active');
      current = i;
      slides[current].classList.add('is-active');
      dots[current].classList.add('is-active');
    }
    function start() {
      clearInterval(timer);
      timer = setInterval(function () { show((current + 1) % slides.length); }, 6000);
    }
    show(0);
    start();
  }

  /* Rainbow text-shadow animation on the "Gender Inclusive" text */
  var inclusive = document.getElementById('inclusive');
  if (inclusive) {
    var palette = ['#19F', '#EA0', '#E62', '#C25'];
    var base = [];
    palette.forEach(function (c) { for (var n = 0; n < 5; n++) base.push(c); });
    var step = 0;
    setInterval(function () {
      var shadows = [];
      for (var k = 0; k < base.length; k++) {
        var px = (k + 1) * 0.25;
        shadows.push(px + 'px ' + px + 'px 0 ' + base[(k - step + base.length) % base.length]);
      }
      inclusive.style.textShadow = shadows.join(', ');
      step = (step + 1) % base.length;
    }, 40);
  }
});
