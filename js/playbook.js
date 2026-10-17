(function () {
  var d = document.getElementById('pbside');
  if (window.matchMedia('(max-width: 900px)').matches) d.removeAttribute('open');
  var links = Array.prototype.slice.call(document.querySelectorAll('.pb-side .sections a'));
  var targets = links.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); });
  function update() {
    var y = window.scrollY + 120, cur = 0;
    targets.forEach(function (t, i) { if (t && t.getBoundingClientRect().top + window.scrollY <= y) cur = i; });
    links.forEach(function (a, i) { a.classList.toggle('on', i === cur); });
  }
  window.addEventListener('scroll', update, { passive: true }); update();
})();
