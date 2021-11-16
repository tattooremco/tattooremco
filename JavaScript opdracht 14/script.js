// Alert button

const buttonAlert = document.getElementById("mybutton");

buttonAlert.addEventListener("click", function (buttonClicked) {
    alert("Button clicked");
});


// Button background colorchange

function toggleColor() {
    const element = document.body;
    element.classList.toggle("red-background");
}