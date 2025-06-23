import fs from 'fs';
import path from 'path';

// Ensure dist directory exists
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist', { recursive: true });
}

// Function to safely copy a file if it exists
function safeCopyFile(src, dest) {
  try {
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
      console.log(`Copied ${src} to ${dest}`);
    } else {
      console.log(`Warning: Source file ${src} does not exist, creating it at destination`);
      // If the source file doesn't exist, create it at the destination
      if (path.basename(src) === '_redirects') {
        fs.writeFileSync(dest, '/* /index.html 200');
      } else if (path.basename(src) === '_headers') {
        fs.writeFileSync(dest, '/*\n  Cache-Control: no-cache, no-store, must-revalidate\n\n/assets/*\n  Cache-Control: public, max-age=31536000, immutable');
      }
    }
  } catch (error) {
    console.error(`Error copying ${src} to ${dest}:`, error);
  }
}

// Copy or create _redirects file to ensure SPA routing works
safeCopyFile(
  path.resolve('public', '_redirects'),
  path.resolve('dist', '_redirects')
);

// Copy or create _headers file for proper caching
safeCopyFile(
  path.resolve('public', '_headers'),
  path.resolve('dist', '_headers')
);

// Copy 404.html file for fallback routing
safeCopyFile(
  path.resolve('public', '404.html'),
  path.resolve('dist', '404.html')
);

console.log('Configuration files processed for dist directory');