/* == BACK TO TOP == */
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/* == BACK TO TOP == */
//Create A Responsive Menu Hide Show Side Menu
const header = document.querySelector(".header-scroll");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const menu = document.querySelector(".links");
// Onscroll Change Nav Bar Background
window.onscroll = () => {
  this.scrollY > 20 ? header.classList.add("sticky") : header.classList.remove("sticky");
}
/* == ANIMATION CSS == */
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 1;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("showreveal");
    }
  }
}

window.addEventListener("scroll", reveal);
/* == ANIMATION CSS == */

// Onclick For Menu Bar
menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
}

// Onclick For Cancel Menu 
cancelBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
}


/* == TAB == */
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "showCol");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "showCol");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementsByClassName("myBtnContainer");
var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
/* == TAB == */


/* == Video UnMute == */
var video = document.getElementById('video');

function toggleMute() {
  video.muted = !video.muted;
}
/* == Video UnMute == */


/* == Maquee == */
const root = document.documentElement;
const roottwo = document.documentElement;
const rootthree = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
/* == || Maquee == */
/* == Maquee Two == */
const marqueeTwoElementsDisplayed = getComputedStyle(roottwo).getPropertyValue("--marquee-two-elements-displayed");
const marqueeTwoContent = document.querySelector("ul.marquee-two-content");

roottwo.style.setProperty("--marquee-two-elements", marqueeTwoContent.children.length);

for (let i = 0; i < marqueeTwoElementsDisplayed; i++) {
  marqueeTwoContent.appendChild(marqueeTwoContent.children[i].cloneNode(true));
}
/* == || Maquee Two == */
/* == Maquee Three == */
const marqueeThreeElementsDisplayed = getComputedStyle(rootthree).getPropertyValue("--marquee-three-elements-displayed");
const marqueeThreeContent = document.querySelector("ul.marquee-three-content");

rootthree.style.setProperty("--marquee-three-elements", marqueeThreeContent.children.length);

for (let i = 0; i < marqueeThreeElementsDisplayed; i++) {
  marqueeThreeContent.appendChild(marqueeThreeContent.children[i].cloneNode(true));
}
/* == || Maquee Three == */


/* == Show More Portfolio === */
$('.accordion-drop-button').click(function (e) {
  let box = $(this).closest('.portfolio-container ').find('.row');
  if (box.hasClass('collapsed')) {
    box.removeClass('collapsed');
  } else {
    box.addClass('collapsed');
  }
});
/* == || Show More Portfolio === */


/* == Testimonial == */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("testimony");
  var dots = document.getElementsByClassName("test-dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot-change", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " dot-change";

}
/* == || Testimonial == */
