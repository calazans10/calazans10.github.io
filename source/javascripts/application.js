//= require_tree .

function toggleMenu(event) {
  event.preventDefault();
  document.querySelector('body').classList.toggle('overlay');
}

document.addEventListener("DOMContentLoaded", function() {
  var elements = document.querySelectorAll('a[data-toggle]');

  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", toggleMenu, false);
  }
});
