// Gera números aleatórios no formato RGB.
function randomRgb() {
  let rgbColor = document.querySelector('#rgb-color');
  let ball = document.querySelectorAll('.ball');

  rgbColor.innerHTML = ball[Math.floor(Math.random() * 5)].style.backgroundColor;
}

// Gera cores aleatórias para as bolas.
function colorInBalls() {
  let ball = document.querySelectorAll('.ball');

  for (let i = 0; i < ball.length; i += 1) {
    ball[i].style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
  }
}

// Clicar em um circulo colorido, deve ser mostrado um texto indicando se está correto.
function clickBall() {
  let ball = document.querySelectorAll('.ball');
  let rgbColor = document.querySelector('#rgb-color');
  let answer = document.querySelector('#answer');

  ball.forEach(element => {
    element.addEventListener('click', (event) => {
      if (event.target.style.backgroundColor === rgbColor.innerHTML) {
        answer.innerHTML = 'Acertou!'
      } else {
        answer.innerHTML = 'Errou! Tente novamente!'
      }
    })
  });
}

// Botão para reiniciar
function reset() {
  let reiniciar = document.querySelector('#reset-game');
  let answer = document.querySelector('#answer');

  reiniciar.addEventListener('click', () => {
    answer.innerHTML = 'Escolha uma cor';
    colorInBalls()
    randomRgb()
    clickBall()
  })
}

colorInBalls()
randomRgb()
clickBall()
reset()
