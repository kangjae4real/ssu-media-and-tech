import p5 from 'p5';

const WIDTH = 600;
const HEIGHT = 600;

const main = (p5: p5) => {
  p5.setup = () => {
    const canvas = p5.createCanvas(WIDTH, HEIGHT);
    canvas.parent('app');
  };
  p5.draw = () => {
    p5.background(248, 248, 252);

    p5.noStroke();
    p5.fill(120, 160, 255, 200);
    p5.ellipse(300, 250, 200, 200);

    p5.fill(255, 180, 80, 150);
    p5.ellipse(350, 200, 140, 140);

    p5.fill(180, 255, 120, 120);
    p5.ellipse(250, 300, 120, 120);

    p5.stroke(60, 60, 100);
    p5.strokeWeight(8);
    p5.line(50, 120, 180, 80);
    p5.line(180, 80, 420, 60);
    p5.line(420, 60, 550, 120);

    p5.stroke(200, 60, 60);
    p5.strokeWeight(5);
    p5.line(80, 420, 280, 380);
    p5.line(280, 380, 520, 420);

    p5.stroke(60, 160, 60);
    p5.strokeWeight(6);
    p5.line(120, 520, 480, 480);

    p5.noStroke();
    p5.fill(255, 120, 160, 180);
    p5.triangle(100, 180, 160, 140, 220, 180);

    p5.fill(160, 120, 255, 150);
    p5.triangle(440, 280, 500, 240, 560, 280);

    p5.fill(255, 255, 120, 130);
    p5.triangle(180, 440, 240, 400, 300, 440);

    p5.fill(100, 100, 140, 100);
    p5.rect(60, 60, 140, 100);

    p5.fill(200, 160, 120, 110);
    p5.rect(400, 400, 120, 80);

    p5.fill(120, 200, 200, 90);
    p5.rect(500, 180, 100, 120);

    p5.fill(255, 60, 60);
    p5.ellipse(120, 120, 20, 20);
    p5.ellipse(480, 400, 24, 24);

    p5.fill(60, 200, 60);
    p5.ellipse(180, 360, 18, 18);
    p5.ellipse(420, 140, 22, 22);

    p5.fill(200, 60, 200);
    p5.ellipse(150, 460, 16, 16);
    p5.ellipse(450, 460, 14, 14);

    p5.fill(60, 60, 200);
    p5.ellipse(200, 120, 12, 12);
    p5.ellipse(400, 480, 26, 26);

    p5.stroke(120, 120, 220);
    p5.strokeWeight(4);
    p5.noFill();
    p5.arc(200, 200, 100, 100, 0, p5.PI);
    p5.arc(400, 360, 120, 120, p5.PI, p5.TWO_PI);

    p5.stroke(220, 120, 120);
    p5.strokeWeight(5);
    p5.arc(300, 420, 80, 80, p5.PI / 2, 3 * p5.PI / 2);

    p5.stroke(120, 220, 120);
    p5.strokeWeight(3);
    p5.arc(500, 300, 60, 60, 0, p5.PI / 2);

    p5.stroke(160, 160, 160);
    p5.strokeWeight(1);
    for (let i = 0; i < 6; i++) {
      p5.line(50 + i * 12, 320, 120 + i * 12, 340);
      p5.line(480 + i * 10, 100, 540 + i * 10, 120);
    }

    p5.fill(0, 0, 0);
    p5.noStroke();
    p5.ellipse(300, 250, 10, 10);

    p5.fill(255, 255, 255);
    p5.ellipse(280, 230, 6, 6);
    p5.ellipse(320, 270, 6, 6);
  };
};

new p5(main);
