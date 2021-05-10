let css = document.querySelector("h3");
let defaultColor1 = getRandomColor();
let defaultColor2 = getRandomColor();
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");

(function setDefault() {
    body.style.background = "linear-gradient(to right, " + defaultColor1 + "," + defaultColor2 + ")";
    color1.value = defaultColor1;
    color2.value = defaultColor2;
    css.textContent = body.style.background + ";";
})();

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// let defaultColor1 = "#ff0000";
// let defaultColor2 = "#ffff00";
// "#" + Math.floor(Math.random()*16777215).toString(16);
// '#' + (Math.random()*0xFFFFFF<<0).toString(16);