let canvas = document.getElementById("game");
let context = canvas.getContext("2d");

let resumeBtn = document.getElementById("resume-btn");
let pauseBtn = document.getElementById("pause-btn");
let animationId;
let gameRunning = false;

let grid = 16;
let count = 0;
let score = 0;
highScore = document.getElementById("hsvalue");
showScore();

let snake = {
  x: 160,
  y: 160,

  dx: grid, // snake velocity. moves one grid length every frame in
  dy: 0, // either the x or y direction

  cells: [], // keep track of all grids the snake body occupies
  maxCells: 4, // length of the snake. grows when eating an apple
};
let apple = {
  x: 320,
  y: 320,
};

// get random whole numbers in a specific range
// @see https://stackoverflow.com/a/1527820/2124254
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// game loop
function loop() {
  animationId = requestAnimationFrame(loop);

  // slow game loop to 15 fps instead of 60 (60/15 = 4)
  if (count++ < 7) {
    return;
  }

  count = 0;
  context.clearRect(0, 0, canvas.width, canvas.height);

  // move snake by it's velocity
  snake.x += snake.dx;
  snake.y += snake.dy;

  // wrap snake position horizontally on edge of screen
  if (snake.x < 0) {
    snake.x = canvas.width;
  } else if (snake.x >= canvas.width) {
    snake.x = 0;
  }

  // wrap snake position vertically on edge of screen
  if (snake.y < 0) {
    snake.y = canvas.height - grid;
  } else if (snake.y >= canvas.height) {
    snake.y = 0;
  }

  // keep track of where snake has been. front of the array is always the head
  snake.cells.unshift({ x: snake.x, y: snake.y });

  // remove cells as we move away from them
  if (snake.cells.length > snake.maxCells) {
    snake.cells.pop();
  }

  // draw apple
  context.fillStyle = "#ff3333";
  context.fillRect(apple.x, apple.y, grid - 1, grid - 1);

  // draw snake one cell at a time
  context.fillStyle = "#3eba25";
  snake.cells.forEach(function (cell, index) {
    // drawing 1 px smaller than the grid creates a grid effect in the snake body so you can see how long it is
    context.fillRect(cell.x, cell.y, grid - 1, grid - 1);

    // snake ate apple
    if (cell.x === apple.x && cell.y === apple.y) {
      snake.maxCells++;
      score++;
      if (score > highScore.innerHTML) {
        highScore.innerHTML = score;
        saveScore();
      }
      document.querySelector("#value").textContent = score;

      // canvas is 400x400 which is 25x25 grids
      apple.x = getRandomInt(0, 25) * grid;
      apple.y = getRandomInt(0, 25) * grid;
    }

    // check collision with all cells after this one (modified bubble sort)
    for (let i = index + 1; i < snake.cells.length; i++) {
      // snake occupies same space as a body part. reset game
      if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
        snake.x = 160;
        snake.y = 160;
        snake.cells = [];
        snake.maxCells = 4;
        snake.dx = grid;
        snake.dy = 0;
        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;
        window.alert("You Scored: " + score);
        score = 0;
        document.querySelector("#value").textContent = score;
      }
    }
  });
}

// keyboard events
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft" && snake.dx === 0) {
    snake.dx = -grid;
    snake.dy = 0;
  } else if (e.key === "ArrowRight" && snake.dx === 0) {
    snake.dx = grid;
    snake.dy = 0;
  } else if (e.key === "ArrowUp" && snake.dy === 0) {
    snake.dy = -grid;
    snake.dx = 0;
  } else if (e.key === "ArrowDown" && snake.dy === 0) {
    snake.dy = grid;
    snake.dx = 0;
  }
});

//mobile mode
let t = document.querySelector(".top");
let d = document.querySelector(".down");
let l = document.querySelector(".left");
let r = document.querySelector(".right");

t.addEventListener("click", function () {
  if (snake.dy === 0) {
    snake.dy = -grid;
    snake.dx = 0;
  }
});
d.addEventListener("click", function () {
  if (snake.dy === 0) {
    snake.dy = grid;
    snake.dx = 0;
  }
});
l.addEventListener("click", function () {
  if (snake.dx === 0) {
    snake.dx = -grid;
    snake.dy = 0;
  }
});
r.addEventListener("click", function () {
  if (snake.dx === 0) {
    snake.dx = grid;
    snake.dy = 0;
  }
});

// game start
resumeBtn.addEventListener("click", function () {
  if (!gameRunning) {
    // only start the game if gameRunning is false
    gameRunning = true; // set gameRunning to true when the game starts
    loop();
  }
});

pauseBtn.addEventListener("click", function () {
  gameRunning = false;
  cancelAnimationFrame(animationId);
});

document.addEventListener("keydown", function (e) {
  if (!gameRunning) {
    if (e.key == "Enter") {
      gameRunning = true;
      loop();
    }
  } else {
    if (e.key == "Enter") {
      gameRunning = false;
      cancelAnimationFrame(animationId);
    }
  }
});

// local storage
function saveScore() {
  localStorage.setItem("highscore", highScore.innerHTML);
}
function showScore() {
  highScore.innerHTML = localStorage.getItem("highscore");
}
