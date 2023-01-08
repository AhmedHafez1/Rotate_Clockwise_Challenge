const topLeft = document.getElementById('btn1');
const topCenter = document.getElementById('btn2');
const topRight = document.getElementById('btn3');
const rightCenter = document.getElementById('btn6');
const bottomRight = document.getElementById('btn9');
const bottomCenter = document.getElementById('btn8');
const bottomLeft = document.getElementById('btn7');
const leftCenter = document.getElementById('btn4');

const center = document.getElementById('btn5');

const rotateClockwise = () => {
  [
    topLeft.textContent,
    topCenter.textContent,
    topRight.textContent,
    rightCenter.textContent,
    bottomRight.textContent,
    bottomCenter.textContent,
    bottomLeft.textContent,
    leftCenter.textContent,
  ] = [
    leftCenter.textContent,
    topLeft.textContent,
    topCenter.textContent,
    topRight.textContent,
    rightCenter.textContent,
    bottomRight.textContent,
    bottomCenter.textContent,
    bottomLeft.textContent,
  ];
};

center.addEventListener('click', rotateClockwise);
