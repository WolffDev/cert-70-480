
function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function drawSquares() {
  const canvas = document.getElementsByTagName('canvas')[0];
  const ctx = canvas.getContext('2d');
  const offset = 15;
  const clearOffset = 30;
  const pushDownOffset = 10;
  const height = 50;
  const width = 100;
  const count = 4;

  for (let i = 0; i < count; i += 1) {
    ctx.fillRect(i * (offset + width) + offset, offset, width, height);
    ctx.clearRect(
      i * (offset + width) + (clearOffset / 2) + offset,
      offset + (clearOffset / 2) + pushDownOffset,
      width - clearOffset,
      height - clearOffset,
    );
    ctx.strokeRect(
      i * (offset + width) + offset,
      (2 * offset) + height,
      width,
      height,
    );
  }
}

function drawWithColer() {
  const canvas = document.getElementsByTagName('canvas')[0];
  const ctx = canvas.getContext('2d');
  const offset = 10;
  const size = 50;

  ctx.fillStyle = 'red';
  ctx.fillRect(
    offset + (0 * (offset + size)),
    offset,
    size,
    size,
  );
  ctx.fillRect(
    offset + (1 * (offset + size)),
    offset,
    size,
    size,
  );

  ctx.fillStyle = '#00ff00';
  ctx.fillRect(
    offset + (2 * (offset + size)),
    offset,
    size,
    size,
  );
  ctx.fillRect(
    offset + (3 * (offset + size)),
    offset,
    size,
    size,
  );

  ctx.fillStyle = 'rgba(0, 0,  255, 0.25)';
  ctx.fillRect(
    offset + (4 * (offset + size)),
    offset,
    size,
    size,
  );
  ctx.fillRect(
    offset + (5 * (offset + size)),
    offset,
    size,
    size,
  );
}

function addColorStops(gradient) {
  gradient.addColorStop('0', 'magenta');
  gradient.addColorStop('.25', 'blue');
  gradient.addColorStop('.50', 'green');
  gradient.addColorStop('.75', 'yellow');
  gradient.addColorStop('1.0', 'red');
}

function drawGradient() {
  const canvas = document.getElementsByTagName('canvas')[0];
  const ctx = canvas.getContext('2d');

  let x0 = 0;
  let y0 = 0;
  const r0 = 0;
  let x1 = 200;
  let y1 = 0;
  const r1 = 100;
  const width = 300;
  const height = 50;
  const offset = 10;

  let gradient = ctx.createLinearGradient(x0, y0, x1, y1);
  addColorStops(gradient);
  ctx.fillStyle = gradient;
  ctx.fillRect(10, 0 * (height + offset), width, height);
  ctx.fillRect(100, 1 * (height + offset), width, height);

  y1 = 300;
  gradient = ctx.createLinearGradient(x0, y0, x1, y1);
  addColorStops(gradient);
  ctx.fillStyle = gradient;
  ctx.fillRect(10, 2 * (height + offset), width, height);
  ctx.fillRect(100, 3 * (height + offset), width, height);

  x0 = width / 2;
  x1 = x0;
  y0 = 4 * (height + offset) + (height / 2);
  y1 = y0;
  gradient = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
  addColorStops(gradient);
  ctx.fillStyle = gradient;
  ctx.fillRect(10, 4 * (height + offset), width, height);
  ctx.fillRect(100, 5 * (height + offset), width, height);

  y0 = 5 * (height + offset) + (height / 2);
  y1 = y0 + 100;
  gradient = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
  addColorStops(gradient);
  ctx.fillStyle = gradient;
  ctx.fillRect(10, 6 * (height + offset), width, height);
  ctx.fillRect(100, 7 * (height + offset), width, height);
}

function drawPattern() {
  const canvas = document.getElementsByTagName('canvas')[0];
  const ctx = canvas.getContext('2d');

  const img = new Image();
  img.src = 'dot.png';
  img.onload = () => {
    const ptrn = ctx.createPattern(img, 'repeat');
    ctx.fillStyle = ptrn;
    ctx.fillRect(0, 0, 400, 400);
  };
}

function drawLineWidth() {
  const canvas = document.getElementsByTagName('canvas')[0];
  const ctx = canvas.getContext('2d');

  const offset = 40;
  const width = 5;
  const height = 5;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  for (let i = 1; i < 15; i += 1) {
    ctx.lineWidth = i;
    ctx.strokeRect(
      centerX - (width / 2) - (i * offset / 2),
      centerY - (height / 2) - (i * offset / 2),
      width + (i * offset),
      height + (i * offset),
    );
  }
}

function drawLineJoin() {
  const canvas = document.getElementsByTagName('canvas')[0];
  const ctx = canvas.getContext('2d');

  ctx.lineWidth = 20;

  ctx.lineJoin = 'round';
  ctx.strokeRect(20, 20, 50, 50);
  ctx.lineJoin = 'bevel';
  ctx.strokeRect(100, 100, 50, 50);
  ctx.lineJoin = 'miter';
  ctx.strokeRect(180, 180, 50, 50);
}

function drawStrokeStyle() {
  const canvas = document.getElementsByTagName('canvas')[0];
  const ctx = canvas.getContext('2d');

  let x0 = 0;
  let y0 = 0;
  const r0 = 0;
  let x1 = 200;
  let y1 = 0;
  const r1 = 100;
  const width = 300;
  const height = 40;
  const offset = 25;

  ctx.lineWidth = 15;
  let gradient = ctx.createLinearGradient(x0, y0, x1, y1);
  addColorStops(gradient);
  ctx.strokeStyle = gradient;
  ctx.fillRect(10, 0 * (height + offset), width, height);
  ctx.fillRect(100, 1 * (height + offset), width, height);

  y1 = 300;
  gradient = ctx.createLinearGradient(x0, y0, x1, y1);
  addColorStops(gradient);
  ctx.strokeStyle = gradient;
  ctx.fillRect(10, 2 * (height + offset), width, height);
  ctx.fillRect(100, 3 * (height + offset), width, height);

  x0 = width / 2;
  x1 = x0;
  y0 = 4 * (height + offset) + (height / 2);
  y1 = y0;
  gradient = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
  addColorStops(gradient);
  ctx.strokeStyle = gradient;
  ctx.fillRect(10, 4 * (height + offset), width, height);
  ctx.fillRect(100, 5 * (height + offset), width, height);

  y0 = 5 * (height + offset) + (height / 2);
  y1 = y0 + 100;
  gradient = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
  addColorStops(gradient);
  ctx.strokeStyle = gradient;
  ctx.fillRect(10, 6 * (height + offset), width, height);
  ctx.fillRect(100, 7 * (height + offset), width, height);
}

function drawLines() {
  const canvas = document.getElementsByTagName('canvas')[0];
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'green';
  ctx.strokeStyle = 'yellow';
  ctx.lineWidth = 10;

  ctx.beginPath();
  ctx.moveTo(100, 250);
  ctx.lineTo(150, 350);
  ctx.lineTo(50, 350);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(150, 250);
  ctx.lineTo(250, 250);
  ctx.lineTo(200, 350);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(300, 250);
  ctx.lineTo(350, 350);
  ctx.lineTo(250, 350);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(500, 250);
  ctx.lineTo(500, 350);
  ctx.moveTo(450, 300);
  ctx.lineTo(550, 300);
  ctx.fill();
  ctx.stroke();
}

function drawRects() {
  const canvas = document.getElementsByTagName('canvas')[0];
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'green';
  ctx.strokeStyle = 'yellow';
  ctx.lineWidth = 10;

  ctx.beginPath();
  ctx.moveTo(100, 300);
  ctx.lineTo(150, 250);
  ctx.lineTo(200, 300);
  ctx.rect(100, 300, 100, 100);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(300, 300);
  ctx.lineTo(350, 250);
  ctx.lineTo(400, 300);
  ctx.rect(300, 300, 100, 100);
  ctx.stroke();
  ctx.fill();
}

function drawBoard() {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  const bw = 800;
  const bh = 600;
  const p = 0;

  for (let x = 0; x <= bw; x += 50) {
    context.moveTo(x, p);
    context.lineTo(x, bh);
  }

  for (let x = 0; x <= bh; x += 50) {
    context.moveTo(p, x);
    context.lineTo(bw, x);
  }

  context.strokeStyle = 'rgba(240, 75, 220, 0.3)';
  context.stroke();
}

function drawArcTo() {
  const canvas = document.getElementsByTagName('canvas')[0];
  const ctx = canvas.getContext('2d');

  ctx.strokeStyle = 'gray';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(300, 200);
  ctx.lineTo(400, 500);
  ctx.lineTo(600, 300);
  ctx.stroke();

  ctx.strokeStyle = 'black';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(300, 200);
  ctx.arcTo(400, 500, 600, 300, 100);
  ctx.stroke();
}

function drawReverseArc() {
  const canvas = document.getElementsByTagName('canvas')[0];
  const ctx = canvas.getContext('2d');

  ctx.strokeStyle = 'gray';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(300, 200);
  ctx.lineTo(400, 500);
  ctx.lineTo(600, 300);
  ctx.stroke();

  ctx.strokeStyle = 'black';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(300, 200);
  ctx.arcTo(400, 500, 600, 300, 250);
  ctx.stroke();
}

function drawCircle() {
  const canvas = document.getElementsByTagName('canvas')[0];
  const ctx = canvas.getContext('2d');

  ctx.strokeStyle = 'blue';
  ctx.fillStyle = 'yellow';
  ctx.lineWidth = 5;

  ctx.beginPath();
  // ctx.arc(400, 300, 100, 0, 2 * Math.PI);
  ctx.arc(400, 300, 100, 0, 1 * Math.PI);
  ctx.fill();
  ctx.stroke();
}

function drawText() {
  const canvas = document.getElementsByTagName('canvas')[0];
  const ctx = canvas.getContext('2d');

  ctx.strokeStyle = 'magenta';
  ctx.fillStyle = 'yellow';
  ctx.lineWidth = 2;
  ctx.font = 'bold 100pt TimesNewRoman';

  ctx.beginPath();
  ctx.moveTo(100, 300);
  ctx.lineTo(700, 300);
  ctx.stroke();

  ctx.strokeStyle = 'blue';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('HELLO', 400, 300);
  ctx.strokeText('HELLO', 400, 300);
}

docReady(() => {
  drawBoard();
  drawText();
});
