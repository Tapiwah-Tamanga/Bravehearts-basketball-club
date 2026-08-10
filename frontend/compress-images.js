const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, 'public');
const QUALITY = 60;
const MAX_WIDTH = 800;
const MAX_HEIGHT = 800;

async function compressImage(filePath) {
  try {
    const stat = fs.statSync(filePath);
    const originalSize = stat.size;
    
    const ext = path.extname(filePath).toLowerCase();
    const buffer = fs.readFileSync(filePath);
    
    let sharpInstance = sharp(buffer);
    const metadata = await sharpInstance.metadata();
    
    // Resize if too large
    if (metadata.width > MAX_WIDTH || metadata.height > MAX_HEIGHT) {
      sharpInstance = sharpInstance.resize(MAX_WIDTH, MAX_HEIGHT, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }
    
    let outputBuffer;
    if (ext === '.jpg' || ext === '.jpeg') {
      outputBuffer = await sharpInstance
        .jpeg({ quality: QUALITY, progressive: true })
        .toBuffer();
    } else if (ext === '.png') {
      outputBuffer = await sharpInstance
        .png({ quality: QUALITY, compressionLevel: 9 })
        .toBuffer();
    } else if (ext === '.webp') {
      outputBuffer = await sharpInstance
        .webp({ quality: QUALITY })
        .toBuffer();
    } else {
      return;
    }
    
    if (outputBuffer.length < originalSize) {
      fs.writeFileSync(filePath, outputBuffer);
      const saved = ((1 - outputBuffer.length / originalSize) * 100).toFixed(1);
      console.log(`✓ ${path.basename(filePath)}: ${(originalSize/1024).toFixed(1)}KB → ${(outputBuffer.length/1024).toFixed(1)}KB (${saved}% saved)`);
    } else {
      console.log(`- ${path.basename(filePath)}: Already optimal`);
    }
  } catch (err) {
    console.error(`✗ ${path.basename(filePath)}: ${err.message}`);
  }
}

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (/\.(jpg|jpeg|png|webp)$/i.test(entry.name)) {
      await compressImage(fullPath);
    }
  }
}

async function main() {
  console.log('Compressing images...');
  console.log(`Quality: ${QUALITY}%, Max dimensions: ${MAX_WIDTH}x${MAX_HEIGHT}`);
  console.log('---');
  
  await processDirectory(PUBLIC_DIR);
  
  console.log('---');
  console.log('Done!');
}

main().catch(console.error);
