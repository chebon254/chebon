const marqueeTwoElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-two-elements-displayed");
const marqueeTwoContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-two-elements", marqueeTwoContent.children.length);

for(let i=0; i<marqueeTwoElementsDisplayed; i++) {
  marqueeTwoContent.appendChild(marqueeTwoContent.children[i].cloneNode(true));
}
/* == || Maquee == */