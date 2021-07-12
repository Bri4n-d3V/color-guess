const rgbColor = document.querySelector('#rgb-color');

// Gera números aleatórios no formato RGB.
function randomRGB() {
  rgbColor.innerHTML = `(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}
randomRGB()

