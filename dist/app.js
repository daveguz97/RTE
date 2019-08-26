// Sticky menu background
window.addEventListener("scroll", function() {
  if (window.scrollY > 150) {
    document.querySelector("#desktop-nav").style.opacity = 0.9;
  } else {
    document.querySelector("#desktop-nav").style.opacity = 1;
  }
});

// Smooth Scrolling
$("#navbar a").on("click", function(e) {
  if (this.has !== "") {
    e.preventDefault();
    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      900
    );
  }
});

// Toggles the menu on and off when a link is clicked
$(".menu-wrap a").on("click", function(e) {
  e.preventDefault();
  document.querySelector(".toggler").checked = false;
});
