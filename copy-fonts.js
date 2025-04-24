const fs = require('fs');
const path = require('path');

// Ensure the build/static/fonts directory exists
const buildFontsDir = path.join(__dirname, 'build', 'static', 'fonts');
if (!fs.existsSync(buildFontsDir)) {
  fs.mkdirSync(buildFontsDir, { recursive: true });
}

// Copy fonts from static/fonts to build/static/fonts
const staticFontsDir = path.join(__dirname, 'static', 'fonts');
const fonts = fs.readdirSync(staticFontsDir);

fonts.forEach(font => {
  // Copy all font files (ttf, woff, woff2)
  if (font.endsWith('.ttf') || font.endsWith('.woff') || font.endsWith('.woff2')) {
    fs.copyFileSync(
      path.join(staticFontsDir, font),
      path.join(buildFontsDir, font)
    );
  }
}); 