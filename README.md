# calcke

Mental math trainer. One repo -> website + Android APK + Windows app.

Push to `main` and GitHub Actions will:
1. Deploy the site to GitHub Pages
2. Build `calcke.apk` (Android)
3. Build `calcke-setup.exe` and `calcke-portable.exe` (Windows)
4. Publish all three in the **Releases** tab under "latest"

One-time setup: repo **Settings -> Pages -> Source: GitHub Actions**.

Site URL: `https://<your-username>.github.io/<repo-name>/`

## Two views, one app

- **Normal mode**: the full trainer (charts, history, session reports).
- **Calculator view**: a realistic calcke handheld. Tap **Calculator view** (top right) to switch.
- On the device, tap the tiny dot next to the "calcke" name to open the hidden guide. It also has the switch back to normal mode, a key-sound toggle, and a button that turns the device over to show the back (battery door and USB-C).
- The app remembers which view you used last.
