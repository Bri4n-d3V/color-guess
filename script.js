const rgbColor = document.querySelector('#rgb-color');

function randomRGB() {
  rgbColor.innerHTML = `(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}randomRGB()