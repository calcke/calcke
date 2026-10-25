# calcke

Mental math trainer. One repo -> website + Android APK + Windows app.

Push to `main` and GitHub Actions will:
1. Deploy the site to GitHub Pages
2. Build `calcke.apk` (Android)
3. Build `calcke-setup.exe` and `calcke-portable.exe` (Windows)
4. Publish all three in the **Releases** tab under "latest"

One-time setup: repo **Settings -> Pages -> Source: GitHub Actions**.

Site URL: `https://<your-username>.github.io/<repo-name>/`
