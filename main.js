import './style.css';
import Ball from './models/SoundBall';

const ctx = document.getElementById('canvas').getContext('2d');
const cavnasDom = document.getElementById('canvas');

// make sound ball
const ball = new Ball(ctx, cavnasDom, 100, 100, 50);
const ball2 = new Ball(ctx, cavnasDom, 50, 50, 25);
const ball3 = new Ball(ctx, cavnasDom, 120, 120, 60);
const balls = [ball, ball2, ball3];
// let mouseVector = {};
// let isMouseClicked = false;

// const mouseClikced = (e) => {
//   const mouseX = e.layerX;
//   const mouseY = e.layerY;

//   mouseVector.x = mouseX;
//   mouseVector.y = mouseY;

//   if (!isMouseClicked) {
//     isMouseClicked = true;
//   } else {
//     isMouseClicked = false;
//   }
// };

// cavnasDom.addEventListener('mousedown', (e) => mouseClikced(e));
// 마우스의 위치 값이 계속 그대로 있는 문제는 어떻게 해결할 수 있을지?
const draw = () => {
  // 캔버스 지우기
  // 포지션은 그냥 0,0 - 캔버스 최대 크기로 생각하면 된다.
  ctx.clearRect(0, 0, 1000, 1000);
  // for (const b in balls) {
  //   balls[b].display();
  //   balls[b].move();
  //   balls[b].mouseCheck();
  // }
  ball.display();
  ball.move();
  ball.mouseCheck();
  // 재귀적으로 돌림
  requestAnimationFrame(draw);
};
window.requestAnimationFrame(draw);
