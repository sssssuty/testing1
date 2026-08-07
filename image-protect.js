(function () {
  var SELECTOR = "img, picture, .thumb, .project-media, .about-media, .about-block-media";

  document.addEventListener("contextmenu", function (e) {
    if (e.target.closest(SELECTOR)) e.preventDefault();
  }, true);

  document.addEventListener("dragstart", function (e) {
    if (e.target.closest(SELECTOR)) e.preventDefault();
  }, true);
})();
