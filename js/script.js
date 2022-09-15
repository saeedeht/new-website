const hamburgerIcon = document.querySelector('.hamburger_icon');
const hamburgerMenu = document.querySelector('.hamburger_menu');
const crossIcon = document.querySelector('.cross_icon');
const showMoreMenu = document.querySelector('#show_more_menu');
const showProductMenu = document.querySelector('#show_product_menu');

hamburgerIcon.addEventListener('click', function () {
  hamburgerMenu.classList.add('show_hamburger_menu');
});

crossIcon.addEventListener('click', function () {
  hamburgerMenu.classList.remove('show_hamburger_menu');
});

showMoreMenu.addEventListener('mouseenter', function (e) {
  const div = e.target.childNodes[5];
  div.style.animation = 'showUp 0.35s 1';
  div.style.display = 'block';
});

showMoreMenu.addEventListener('mouseleave', function (e) {
  const div = e.target.childNodes[5];
  div.style.display = 'none';
});

showProductMenu.addEventListener('mouseenter', function (e) {
  const div = e.target.childNodes[5];
  div.style.animation = 'showUp 0.35s 1';
  div.style.display = 'flex';
});

showProductMenu.addEventListener('mouseleave', function (e) {
  const div = e.target.childNodes[5];
  div.style.display = 'none';
});




let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}