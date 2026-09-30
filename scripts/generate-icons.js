import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

// Ensure public directory exists
const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Generate an SVG icon
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="50%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#ef4444"/>
    </linearGradient>
    <linearGradient id="beaconGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ef4444"/>
      <stop offset="100%" stop-color="#b91c1c"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Background Shield -->
  <path d="M256 32 L430 96 C430 280 256 460 256 460 C256 460 82 280 82 96 Z" fill="url(#shieldGrad)" stroke="url(#borderGrad)" stroke-width="16" stroke-linejoin="round"/>

  <!-- Inner Campus Map Grid lines -->
  <path d="M140 180 Q256 220 372 180 M120 280 Q256 320 392 280 M256 120 L256 410" stroke="#334155" stroke-width="6" stroke-dasharray="8 8" fill="none"/>

  <!-- Radar Rings -->
  <circle cx="256" cy="250" r="100" stroke="#0284c7" stroke-width="4" stroke-opacity="0.5" fill="none"/>
  <circle cx="256" cy="250" r="60" stroke="#38bdf8" stroke-width="4" stroke-opacity="0.7" fill="none"/>

  <!-- Pin Marker / Beacon -->
  <path d="M256 170 C226 170 202 194 202 224 C202 268 256 330 256 330 C256 330 310 268 310 224 C310 194 286 170 256 170 Z" fill="url(#beaconGrad)" filter="url(#glow)"/>
  
  <!-- Pin Center Dot -->
  <circle cx="256" cy="224" r="18" fill="#ffffff"/>
  <circle cx="256" cy="224" r="9" fill="#ef4444"/>

  <!-- DHSGSU Badge Text / Star -->
  <polygon points="256,60 265,82 288,82 270,96 277,118 256,104 235,118 242,96 224,82 247,82" fill="#f59e0b"/>

  <!-- Security Cross / Star on Lower Shield -->
  <rect x="250" y="380" width="12" height="34" rx="4" fill="#38bdf8"/>
  <rect x="239" y="391" width="34" height="12" rx="4" fill="#38bdf8"/>
</svg>`;

fs.writeFileSync(path.join(publicDir, 'icon.svg'), svgContent, 'utf-8');

// Simple minimal PNG generator using zlib to write valid RGBA PNG images
function createPng(width, height, r, g, b, isMaskable = false) {
  // PNG signature
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  // IHDR chunk
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr.writeUInt8(8, 8); // bit depth 8
  ihdr.writeUInt8(6, 9); // RGBA
  ihdr.writeUInt8(0, 10); // compression
  ihdr.writeUInt8(0, 11); // filter
  ihdr.writeUInt8(0, 12); // interlace

  // Raw image data: filter type byte (0) + width * 4 bytes per row
  const rowSize = 1 + width * 4;
  const rawData = Buffer.alloc(rowSize * height);

  const cx = width / 2;
  const cy = height / 2;
  const outerRadius = width / 2;
  const safeRadius = width * 0.4;

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    rawData[rowOffset] = 0; // None filter
    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (isMaskable) {
        // Solid dark background for maskable safe-zone
        if (dist < safeRadius * 0.7) {
          // Central red shield accent
          rawData[pxOffset] = 239; // R
          rawData[pxOffset + 1] = 68; // G
          rawData[pxOffset + 2] = 68; // B
          rawData[pxOffset + 3] = 255;
        } else if (dist < safeRadius) {
          // Blue ring
          rawData[pxOffset] = 56;
          rawData[pxOffset + 1] = 189;
          rawData[pxOffset + 2] = 248;
          rawData[pxOffset + 3] = 255;
        } else {
          // Dark background #0f172a
          rawData[pxOffset] = 15;
          rawData[pxOffset + 1] = 23;
          rawData[pxOffset + 2] = 42;
          rawData[pxOffset + 3] = 255;
        }
      } else {
        // Rounded badge / circular icon
        if (dist <= outerRadius - 2) {
          if (dist < outerRadius * 0.35) {
            // Center beacon (crimson red)
            rawData[pxOffset] = 239;
            rawData[pxOffset + 1] = 68;
            rawData[pxOffset + 2] = 68;
            rawData[pxOffset + 3] = 255;
          } else if (dist < outerRadius * 0.6) {
            // Blue radar wave
            rawData[pxOffset] = 14;
            rawData[pxOffset + 1] = 165;
            rawData[pxOffset + 2] = 233;
            rawData[pxOffset + 3] = 255;
          } else {
            // Outer dark shield
            rawData[pxOffset] = 30;
            rawData[pxOffset + 1] = 41;
            rawData[pxOffset + 2] = 59;
            rawData[pxOffset + 3] = 255;
          }
        } else {
          // Transparent
          rawData[pxOffset] = 0;
          rawData[pxOffset + 1] = 0;
          rawData[pxOffset + 2] = 0;
          rawData[pxOffset + 3] = 0;
        }
      }
    }
  }

  const compressedData = zlib.deflateSync(rawData);

  // Helper to make PNG chunk with CRC
  function makeChunk(type, data) {
    const len = data.length;
    const buf = Buffer.alloc(12 + len);
    buf.writeUInt32BE(len, 0);
    buf.write(type, 4, 4, 'ascii');
    data.copy(buf, 8);
    const crc = crc32(buf.subarray(4, 8 + len));
    buf.writeUInt32BE(crc, 8 + len);
    return buf;
  }

  // CRC32 table
  function crc32(buf) {
    let c = 0xffffffff;
    for (let i = 0; i < buf.length; i++) {
      c ^= buf[i];
      for (let k = 0; k < 8; k++) {
        c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
      }
    }
    return (c ^ 0xffffffff) >>> 0;
  }

  const ihdrChunk = makeChunk('IHDR', ihdr);
  const idatChunk = makeChunk('IDAT', compressedData);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// Generate PNG icons
fs.writeFileSync(path.join(publicDir, 'pwa-192x192.png'), createPng(192, 192, 15, 23, 42));
fs.writeFileSync(path.join(publicDir, 'pwa-512x512.png'), createPng(512, 512, 15, 23, 42));
fs.writeFileSync(path.join(publicDir, 'pwa-maskable-512x512.png'), createPng(512, 512, 15, 23, 42, true));
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), createPng(180, 180, 15, 23, 42));

console.log('Icons successfully created in public directory!');
