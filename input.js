let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }
import {getSnakeHead} from "./snake.js";

window.addEventListener('keydown', e => {
  switch (e.key) {
    case 'ArrowUp':
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: -1 }
      break
    case 'ArrowDown':
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: 1 }
      break
    case 'ArrowLeft':
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: -1, y: 0 }
      break
    case 'ArrowRight':
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: 1, y: 0 }
      break
  }
})

window.addEventListener("click", e=>{
  
  let small = (window.innerHeight>window.innerWidth)?window.innerWidth:window.innerHeight;
  let long = (window.innerHeight < window.innerWidth) ? window.innerWidth : window.innerHeight;
  let extra = (long-small)/2;
  
  let diff = (window.innerHeight < window.innerWidth) ? {x:extra, y:0}: {x:0, y:extra}
  let head = getSnakeHead();

  let y = e.clientY - (diff.y + head.y * small / 21);
  let x = e.clientX - (diff.x + head.x * small / 21);

  if(Math.abs(x)>Math.abs(y)){
    if(x>0)inputDirection={x:1, y:0}
    else inputDirection={x:-1, y:0}
  }
  else{
    if(y>0)inputDirection={x:0, y:1}
    else inputDirection={x:0, y:-1}
  }
})

export function getInputDirection() {
  lastInputDirection = inputDirection
  return inputDirection
}