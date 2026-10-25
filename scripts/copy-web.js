// Copies the website files into www/ (used by Capacitor as the app's web content).
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const out = path.join(root, 'www');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
for (const f of fs.readdirSync(root)) {
  if (/^(index\.html|sw\.js|manifest\.webmanifest|icon-.*\.png)$/.test(f)) {
    fs.copyFileSync(path.join(root, f), path.join(out, f));
  }
}
console.log('www/ ready:', fs.readdirSync(out).join(', '));
