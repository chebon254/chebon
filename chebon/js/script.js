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
window.onscroll = ()=>{
    this.scrollY > 20 ? header.classList.add("sticky") : header.classList.remove("sticky");
}

// Onclick For Menu Bar
menuBtn.onclick = ()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");
}

// Onclick For Cancel Menu 
cancelBtn.onclick = ()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
}
