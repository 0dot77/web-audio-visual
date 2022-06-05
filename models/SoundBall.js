import { distance } from '../functions/interaction';

export default class Ball {
  /**
   * @param {canvasAPI} ctx
   * @param {HTML cavnas DOM} ctxDom
   * @param {ball x} x
   * @param {ball y} y
   * @param {radius} radius
   */

  constructor(ctx, ctxDom, x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.ctx = ctx;
    this.ctxDom = ctxDom;
    this.path = null;
    this.BALL_SPEED_X = Math.trunc(Math.random() * 3);
    this.BALL_SPEED_Y = Math.trunc(Math.random() * 4);

    //random generate color
    this.r = Math.trunc(Math.random() * 256);
    this.g = Math.trunc(Math.random() * 256);
    this.b = Math.trunc(Math.random() * 256);

    this.color = `rgb(${this.r}, ${this.g}, ${this.b})`;

    // this.isMouseClicked = false;

    // audio
    this.audioContext = new AudioContext();
  }
  display() {
    this.path = new Path2D();
    this.path.fillStyle = 'red';
    this.path.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.stroke(this.path);
    // this.ctx.fill(this.path);

    // this.ctx.beginPath();
    // this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    // this.ctx.fillStyle = this.color;
    // this.ctx.fill();
  }

  move() {
    this.x += this.BALL_SPEED_X;
    this.y += this.BALL_SPEED_Y;
    if (this.x + this.radius / 2 > this.ctx.canvas.width || this.x - this.radius / 2 < 0) {
      this.BALL_SPEED_X *= -1;
    }
    if (this.y + this.radius / 2 > this.ctx.canvas.height || this.y - this.radius / 2 < 0) this.BALL_SPEED_Y *= -1;
  }

  colorGenerate() {
    this.r = Math.trunc(Math.random() * 256);
    this.g = Math.trunc(Math.random() * 256);
    this.b = Math.trunc(Math.random() * 256);

    this.color = `rgb(${this.r}, ${this.g}, ${this.b})`;
  }

  mouseCheck() {
    this.ctxDom.addEventListener('click', (e) => {
      const x = e.layerX;
      const y = e.layerY;
      const dist = distance(x, this.x, y, this.y);
      if (dist < this.radius) {
        this.colorGenerate();
        this.sound(this.isMouseClicked);
      }
    });
  }
  //   //   // this.sound(this.isMouseClicked);

  sound() {
    const oscillatorNode = this.audioContext.createOscillator();
    oscillatorNode.type = 'square';
    oscillatorNode.frequency.value = 440;
    oscillatorNode.detune.value = 12;
    oscillatorNode.connect(this.audioContext.destination);
    oscillatorNode.start();
    oscillatorNode.stop(this.audioContext.currentTime + 1);
  }
}
