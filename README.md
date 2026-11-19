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
- On the device, tap the tiny dot next to the "calcke" name to open the hidden guide. It also has the switch back to normal mode, a key-sound toggle, and a button that turns the device over to show the back (four screws, grip, USB-C).
- The app remembers which view you used last.

## Voice mode

Tap **Voice: Off** in the session bar to turn it on, then press **Start**. The trainer reads each question aloud, listens for your spoken answer, says whether you were right (and the correct answer if not), and moves on by itself. Every mode works: square root, day of week, cube root, multiplication and memory span (the digits are read out in groups of three instead of flashed).

What you can say:
- the answer: `sixty-eight point eight five four`, `four seven six one`, `4761`, or `Tuesday`
- **repeat** to hear the question again (not in memory span)
- **skip** to give up on a question (scored as incorrect, answer is read out)
- **stop** to end the session, **slower** / **faster** to change the voice speed

Tap the mic pill to skip the spoken question, or to finish talking early. Typing still works at any time.

Where it works:
- **Chrome / Edge (website or installed app), desktop and Android:** speaking and listening both work. Listening uses the browser's online recognizer, so it needs internet.
- **Android APK:** listening goes through the `@capacitor-community/speech-recognition` plugin (added to `package.json`; the first run asks for microphone permission).
- **Windows EXE (Electron):** Electron has no speech recognizer, so the app reads the questions aloud and you type the answers. For full voice on a PC, use the website in Chrome or Edge.
- Voice answers are timed from the end of the question to the end of your speech. Those log entries carry `voice: true`; spoken times are not directly comparable to typed times.
- Fast mode is switched off while voice mode is on. The calculator view has no voice.
