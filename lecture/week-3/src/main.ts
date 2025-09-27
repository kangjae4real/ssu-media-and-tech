import p5 from 'p5';

const WIDTH: number = 600;
const HEIGHT: number = 600;
const DEFAULT_SPEED: number = 4;
const DEFAULT_DIAM: number = 50;

class Ball {
  p5: p5;

  xPos: number;
  xDir: number;

  yPos: number;
  yDir: number;

  diam: number;

  constructor(p5: p5, xPos?: number, xDir?: number, yPos?: number, yDir?: number, diam?: number) {
    this.p5 = p5;
    this.xPos = xPos ?? WIDTH / 2;
    this.xDir = xDir ?? DEFAULT_SPEED;
    this.yPos = yPos ?? HEIGHT / 2;
    this.yDir = yDir ?? DEFAULT_SPEED;
    this.diam = diam ?? DEFAULT_DIAM;
  }

  public getRect() {
    const { p5, xPos, yPos, diam } = this;
    return p5.ellipse(xPos, yPos, diam);
  }
}

const main = (p5: p5) => {
  let xPos: number;
  let xDir: number;
  let yPos: number;
  let yDir: number;

  let diam: number;
  let speed: number;

  p5.setup = () => {
    const canvas = p5.createCanvas(WIDTH, HEIGHT);
    canvas.parent('app');
    speed = DEFAULT_SPEED;
    xPos = WIDTH / 2; // 공을 화면의 중심에서 출발
    xDir = speed;
    yPos = HEIGHT / 2;
    yDir = speed;
    diam = DEFAULT_DIAM;
  };
  p5.draw = () => {
    p5.background(128);

    // ball drawing and movement
    p5.ellipse(xPos, yPos, diam, diam);
    xPos = xPos + xDir;
    yPos = yPos + yDir;

    // ball bouncing
    if (xPos - diam / 2 < 0 || xPos + diam / 2 > WIDTH) xDir *= -1;
    if (yPos - diam / 2 < 0 || yPos + diam / 2 > HEIGHT) yDir *= -1;
  };
};

new p5(main);
