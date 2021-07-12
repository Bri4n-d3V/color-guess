// Gera números aleatórios no formato RGB.
function randomRgb() {
  let rgbColor = document.querySelector('#rgb-color');
  let ball = document.querySelectorAll('.ball');
  rgbColor.innerHTML = ball[Math.floor(Math.random()) * 5].style.backgroundColor;
}

function colorInBalls() {
  let ball = document.querySelectorAll('.ball');

  for (let i = 0; i < ball.length; i += 1) {
    ball[i].style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
  }
}


colorInBalls()
randomRgb()
