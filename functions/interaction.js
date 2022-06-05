/**
 * 인터렉션에 필요한 함수 모으기
 */

export function mouseCheck(ctx) {
  console.log(ctx);
}

// 마우스의 x 값과 y 값, 원 오브젝트의 x,y 값 활용
export function distance(mouseX, ballX, mouseY, ballY) {
  return Math.sqrt(Math.pow(mouseX - ballX, 2) + Math.pow(mouseY - ballY, 2));
}
