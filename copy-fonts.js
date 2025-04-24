const fs = require('fs');
const path = require('path');

// Ensure the build/assets/fonts directory exists
const buildFontsDir = path.join(__dirname, 'build', 'assets', 'fonts');
if (!fs.existsSync(buildFontsDir)) {
  fs.mkdirSync(buildFontsDir, { recursive: true });
}

// Copy fonts from static/fonts to build/assets/fonts
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