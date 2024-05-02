const container = document.querySelector('#container');

const btn = document.querySelector('#btn');

const rbtn = document.querySelector('#rbtn');

let rainbowBtn = false;

function createGrid(size) {
    container.innerHTML = '';
    const squareSize = 100 / size;

  for (let i = 0; i < size * size; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.style.width = `${squareSize}%`;
      square.style.height = `${squareSize}%`;
      container.appendChild(square);
    }
 
   container.querySelectorAll('.square').forEach(square => {
    function inkOn() {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let color = 'rgb('+ red +', '+ green +', '+ blue +')';

        if (rainbowBtn === true) {
            square.style.backgroundColor = color;
        } else {
            square.style.backgroundColor = 'black';
        };
        let opacity = Number(square.style.opacity);
        if (opacity < 1) {
            opacity += 0.1;
            square.style.opacity = opacity.toString();
        }
    }

    square.addEventListener('mousedown', function(event) {
        event.preventDefault();
        inkOn();
    });

    square.addEventListener('mousemove', function(event) {
        if (event.buttons === 1 && square.style.backgroundColor !== 'black') {
            inkOn();
        }
    });

    square.addEventListener('mouseenter', function(event) {
        if (event.buttons === 1) {
            inkOn();
        }
    });
  });
};

createGrid(16);

btn.addEventListener('click', function() {
    let choice = +prompt('Choose Grid Size', '16');

    while (choice < 0 || choice > 100 || isNaN(choice)) {
        alert('Invalid selection. Choose a value between 0 and 100');
        choice = +prompt('Choose Grid Size', '16');
    };

    createGrid(choice);
});

rbtn.addEventListener('click', () => {
    rainbowBtn = !rainbowBtn;
});