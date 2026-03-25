import { glob } from 'node:fs/promises';
import { stat, writeFile, readFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve('public/images/Projects');
const MAX_WIDTH = 1920;
const QUALITY = 80;

let totalBefore = 0;
let totalAfter = 0;
let processed = 0;

// Collect all jpg/jpeg files
const files = [];
for await (const entry of glob('**/*.{jpg,jpeg}', { cwd: ROOT })) {
  files.push(path.join(ROOT, entry));
}

console.log(`Found ${files.length} JPEG files in ${ROOT}\n`);

for (const filePath of files) {
  const before = (await stat(filePath)).size;
  const buffer = await readFile(filePath);
  const metadata = await sharp(buffer).metadata();

  let pipeline = sharp(buffer);

  // Only resize if wider than MAX_WIDTH
  if (metadata.width && metadata.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  const output = await pipeline
    .jpeg({ quality: QUALITY, progressive: true, mozjpeg: true })
    .toBuffer();

  await writeFile(filePath, output);
  const after = output.length;

  totalBefore += before;
  totalAfter += after;
  processed++;

  const saved = ((1 - after / before) * 100).toFixed(1);
  const rel = path.relative(ROOT, filePath);
  console.log(
    `${rel}: ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB (${saved}% saved)`
  );
}

console.log(`\n--- Summary ---`);
console.log(`Processed: ${processed} files`);
console.log(
  `Total: ${(totalBefore / 1024 / 1024).toFixed(1)}MB → ${(totalAfter / 1024 / 1024).toFixed(1)}MB`
);
console.log(`Saved: ${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%`);
