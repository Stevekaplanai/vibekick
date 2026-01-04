const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

function createIcon(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Background with rounded corners
  const radius = size * 0.2;
  ctx.fillStyle = '#0a0a0f';
  ctx.beginPath();
  ctx.roundRect(0, 0, size, size, radius);
  ctx.fill();

  // Lightning bolt
  ctx.fillStyle = '#00d4ff';
  const scale = size / 16;

  ctx.beginPath();
  ctx.moveTo(10 * scale, 1.5 * scale);
  ctx.lineTo(5.5 * scale, 8.5 * scale);
  ctx.lineTo(8 * scale, 8.5 * scale);
  ctx.lineTo(6 * scale, 14.5 * scale);
  ctx.lineTo(11.5 * scale, 6.5 * scale);
  ctx.lineTo(9 * scale, 6.5 * scale);
  ctx.closePath();
  ctx.fill();

  // Add glow effect for larger icons
  if (size >= 48) {
    ctx.shadowColor = '#00d4ff';
    ctx.shadowBlur = size * 0.1;
    ctx.fill();
  }

  return canvas.toBuffer('image/png');
}

const iconsDir = path.join(__dirname, 'extension', 'icons');

// Create icons directory if it doesn't exist
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Generate icons
const sizes = [16, 48, 128];
sizes.forEach(size => {
  const buffer = createIcon(size);
  const filePath = path.join(iconsDir, `icon${size}.png`);
  fs.writeFileSync(filePath, buffer);
  console.log(`Created: icon${size}.png`);
});

console.log('All icons generated successfully!');
