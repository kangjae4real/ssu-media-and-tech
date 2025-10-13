import p5 from 'p5';

const WIDTH = 600;
const HEIGHT = 600;

// Variables to store click position
let clickX = -200;
let clickY = -50;

const main = (p5: p5) => {
  p5.setup = () => {
    const canvas = p5.createCanvas(WIDTH, HEIGHT);
    canvas.parent('app');
  };
  p5.draw = () => {
    p5.background('#F0EAD6'); // Soft background color

    // Draw tree at click position
    drawTreeAt(clickX, clickY);

    // Center the drawing for character
    p5.translate(WIDTH / 2, HEIGHT / 2);

    // Hoodie
    drawHoodie();

    // Neck
    p5.fill('#F2D3B8');
    p5.noStroke();
    p5.rect(-30, 30, 60, 50, 5);

    // Face
    drawFace();

    // Hair
    drawHair();

    // Hand
    // drawHand();
  };

  p5.keyPressed = () => {
    if (p5.key === 's') {
      p5.saveGif('saved', 10, {});  
    }
  }

  p5.mousePressed = () => {
    // Update tree position to clicked position
    clickX = p5.mouseX;
    clickY = p5.mouseY;
  }

  const drawTreeAt = (x: number, y: number) => {
    p5.push();
    p5.translate(x, y);
    p5.stroke(139, 69, 19, 150); // Brown color for branches
    p5.strokeWeight(4);

    for (let i = 0; i < 15; i++) {
      p5.line(0, 200, p5.random(-100, 100), p5.random(-200, 100));
    }

    // Lights with animation
    p5.noStroke();
    for (let i = 0; i < 25; i++) {
      const twinkle = p5.sin(p5.frameCount * 0.1 + i) * 0.5 + 0.5;
      p5.fill(255, 255, 0, 200 * twinkle);
      p5.ellipse(p5.random(-90, 90), p5.random(-180, 150), 8, 8);
    }
    p5.pop();
  }

  const drawHoodie = () => {
    p5.push();
    // Torso
    p5.fill('#D3D3D3'); // Light grey
    p5.noStroke();
    p5.beginShape();
    p5.vertex(-150, 280);
    p5.vertex(-120, 80);
    p5.vertex(120, 80);
    p5.vertex(150, 280);
    p5.endShape(p5.CLOSE);

    // Hood
    p5.fill('#C0C0C0'); // Slightly darker grey
    p5.arc(0, 25, 200, 220, p5.PI, 0);
    p5.fill('#F0EAD6'); // Background color to cut out the neck hole
    p5.ellipse(0, 50, 90, 40);

    // Hood strings
    p5.stroke(100);
    p5.strokeWeight(3);
    p5.line(-35, 80, -40, 150);
    p5.line(35, 80, 40, 150);
    p5.pop();
  }

  const drawFace = () => {
    p5.push();
    p5.noStroke();
    p5.fill('#F2D3B8'); // Skin tone
    p5.ellipse(0, 0, 200, 250);

    // Eyes with blinking animation
    const blink = p5.sin(p5.frameCount * 0.05) > 0.8 ? 0.1 : 1;
    p5.fill(0);
    p5.ellipse(-40, -10, 25, 20 * blink); // Left eye
    p5.ellipse(40, -10, 25, 20 * blink); // Right eye

    // Eye highlights
    if (blink > 0.5) {
      p5.fill(255);
      p5.ellipse(-35, -15, 8, 8);
      p5.ellipse(45, -15, 8, 8);
    }

    // Eyebrows
    p5.fill(0);
    p5.rect(-55, -40, 30, 5, 2);
    p5.rect(25, -40, 30, 5, 2);

    // Nose
    p5.stroke(50, 0, 0, 80);
    p5.strokeWeight(2);
    p5.line(0, 15, 0, 40);
    p5.line(0, 40, 10, 35);

    // Mouth
    p5.noFill();
    p5.stroke(0);
    p5.strokeWeight(2);
    p5.arc(0, 60, 30, 20, 0, p5.PI);
    p5.pop();
  }

  function drawHair() {
    p5.push();

    // Base hair color with gradient effect
    p5.fill(25, 15, 8); // Dark brown base
    p5.noStroke();

    // Main hair volume - more natural shape
    // p5.beginShape();
    // p5.vertex(-115, -135);
    // p5.bezierVertex(-140, -40, -60, -70, -25, -80);
    // p5.bezierVertex(-5, -85, 5, -85, 25, -80);
    // p5.bezierVertex(60, -70, 140, -40, 115, -135);
    // p5.vertex(115, -160);
    // p5.vertex(-115, -160);
    // p5.endShape(p5.CLOSE);

    // Hair highlights for depth
    p5.fill(40, 25, 12);
    p5.arc(0, -75, 200, 160, p5.PI, 0);

    // Natural hair strands with varying lengths
    p5.stroke(15, 10, 5);
    p5.strokeWeight(1.5);
    p5.noFill();

    // Left side - natural falling strands
    // for (let i = 0; i < 8; i++) {
    //   let x = -90 + i * 12;
    //   let variation = p5.sin(p5.frameCount * 0.02 + i) * 3; // Subtle movement
    //   p5.bezier(x, -130, x - 25 + variation, -90, x - 15, -50, x + variation, -25);
    // }

    // Right side - natural falling strands
    // for (let i = 0; i < 8; i++) {
    //   let x = 90 - i * 12;
    //   let variation = p5.sin(p5.frameCount * 0.02 + i + 10) * 3;
    //   p5.bezier(x, -130, x + 25 + variation, -90, x + 15, -50, x + variation, -25);
    // }

    // Bangs/front hair
    // p5.stroke(20, 12, 6);
    // p5.strokeWeight(2);
    // for (let i = 0; i < 6; i++) {
    //   let x = -60 + i * 20;
    //   let wave = p5.sin(p5.frameCount * 0.03 + i) * 2;
    //   p5.bezier(x, -80, x + wave, -60, x + wave * 0.5, -40, x, -20);
    // }

    // Hair texture and volume
    // p5.noStroke();
    // p5.fill(35, 22, 10);
    // p5.ellipse(-30, -100, 25, 40);
    // p5.ellipse(30, -100, 25, 40);
    // p5.ellipse(0, -110, 30, 35);

    // Side hair volume
    // p5.fill(30, 18, 8);
    // p5.ellipse(-80, -90, 35, 50);
    // p5.ellipse(80, -90, 35, 50);

    // Hair shine effect
    // p5.fill(50, 35, 15, 100);
    // p5.noStroke();
    // p5.ellipse(-20, -90, 15, 25);
    // p5.ellipse(20, -90, 15, 25);

    p5.pop();
  }

  // function drawHand() {
  //   p5.push();
  //   p5.translate(0, 80); // p5osition the hand
  //   p5.fill('#F2D3B8');
  //   p5.stroke(100);
  //   p5.strokeWeight(2);

  //   // Index finger
  //   p5.rect(10, -50, 20, 60, 10);
  //   // Middle finger
  //   p5.rect(35, -40, 20, 55, 10);

  //   // p5alm (p5artially hidden)
  //   p5.beginShape();
  //   p5.vertex(5, 10);
  //   p5.vertex(60, 15);
  //   p5.vertex(50, 40);
  //   p5.vertex(0, 35);
  //   p5.endShape(p5.CLOSE);
  //   p5.pop();
  // }
};

new p5(main);
