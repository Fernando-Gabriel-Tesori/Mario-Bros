const form = document.querySelector("form");
const mascara = document.querySelector(".mascara-form");

function clickButton() {
    form.style.top = "50%";
    form.style.left = "50%";
    form.style.transform = "translate(-50%, -50%)";
    mascara.style.visibility = "visible";
}

function clickInMask() {
    form.style.top = "30%";
    form.style.left = "-300px";
    form.style.transform = "translate(0)";
    mascara.style.visibility = "hidden";
}