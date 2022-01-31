import { update as updateSnake, draw as drawSnake, SECONDS_BETWEEN_MOVE, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

const gameBoard = document.getElementById('game-board');
let lastRenderTime = 0
let gameOver = false


window.requestAnimationFrame(gameLoop)

function gameLoop(currentTime) {
  if (gameOver) {
    if (confirm('You lost. Press ok to restart.')) window.location = '/';
    return;
  }
  window.requestAnimationFrame(gameLoop);

  if(!isTimeToMove(currentTime)) return;
  console.log("jk")
  update();
  draw();
}

function isTimeToMove(currentTime) {
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < SECONDS_BETWEEN_MOVE) return false;
  lastRenderTime = currentTime;
  return true;
}

function update() {
  updateSnake()
  updateFood()
  checkDeath()
}

function draw() {
  // gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}