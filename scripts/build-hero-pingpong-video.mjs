/**
 * Builds a ping-pong hero background: forward + reversed copy concatenated (ffmpeg).
 * Optional — Hero uses the raw orbit clip for reliable browser playback; ping-pong
 * concat can cause early decode stalls in Chrome/Edge/Safari for some exports.
 *
 *   node scripts/build-hero-pingpong-video.mjs
 */
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { existsSync } from 'node:fs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const input = join(root, 'public', 'videos', 'kitchen-island-wide-animated-orbit.mp4');
const output = join(root, 'public', 'videos', 'kitchen-island-wide-animated-orbit-pingpong.mp4');

if (!existsSync(input)) {
  console.error('Missing source file:', input);
  process.exit(1);
}

const r = spawnSync(
  'ffmpeg',
  [
    '-y',
    '-i',
    input,
    '-filter_complex',
    '[0:v]split[v0][v1];[v1]reverse[v1r];[v0][v1r]concat=n=2:v=1:a=0[outv]',
    '-map',
    '[outv]',
    '-an',
    '-c:v',
    'libx264',
    '-crf',
    '18',
    '-pix_fmt',
    'yuv420p',
    '-movflags',
    '+faststart',
    output,
  ],
  { stdio: 'inherit', shell: false }
);

process.exit(r.status ?? 1);
