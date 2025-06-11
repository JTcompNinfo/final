const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})


function toggleVisibility() {
const element = document.getElementById("myElement");
if (element.style.visibility === "hidden") {
    element.style.visibility = "visible";
} else {
    element.style.visibility = "hidden";
}
}