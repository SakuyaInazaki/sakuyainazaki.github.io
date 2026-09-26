import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const memesDir = path.resolve('public/assets/memes');
const thumbsDir = path.join(memesDir, 'thumbs');

if (!fs.existsSync(thumbsDir)) {
  fs.mkdirSync(thumbsDir, { recursive: true });
}

const files = fs.readdirSync(memesDir).filter((f) => /\.(jpg|jpeg|png|webp|gif)$/i.test(f));

for (const file of files) {
  const src = path.join(memesDir, file);
  const ext = path.extname(file).toLowerCase();
  const baseName = path.basename(file, ext);
  const dest = path.join(thumbsDir, `${baseName}.webp`);

  if (!fs.existsSync(dest)) {
    try {
      if (ext === '.gif') {
        fs.copyFileSync(src, path.join(thumbsDir, file));
      } else {
        await sharp(src)
          .resize({ width: 250, height: 250, fit: 'inside', withoutEnlargement: true })
          .webp({ quality: 75 })
          .toFile(dest);
      }
    } catch (err) {
      console.warn(`Could not generate thumbnail for ${file}:`, err.message);
    }
  }
}
