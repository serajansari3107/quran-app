# Al-Quran (Roman Urdu) — starter app

This is a working starter version of your app. It already runs — no installs needed to try it.

**All 114 surahs already have Arabic text AND a Roman Urdu translation filled in
for every one of the 6,236 ayahs.** The translation is Abul A'la Maududi's
well-known Roman Urdu translation (sourced from quranromanurdu.com), so you're
not starting from a blank app — you can browse it right away.

Since you specifically want to write the translation yourself, think of what's
there now as a first draft to **edit, not just fill blanks** — every `romanUrdu:`
field already has text; just open the file for whichever surah you want to
personalize and rewrite it in your own words, ayah by ayah, at your own pace.

Before you publish this app anywhere, it's worth spot-checking a few Arabic
ayahs and translations against a source you trust (e.g. quran.com), just as a
sanity check — Quran text and translation should always be verified, not taken
on trust from any single source, mine included.

## 1. Try it right now

1. Unzip this folder anywhere on your computer (e.g. Desktop).
2. Open the folder, find `index.html`, and double-click it.
3. It opens in your web browser and works like the app — tap a surah, see the Arabic
   and your Roman Urdu translation. Only "Al-Fatiha" and "Al-Ikhlas" have data right
   now; the rest show "no translation yet."

## 2. Set up VS Code (so editing is easy)

1. Download VS Code (free): https://code.visualstudio.com — pick the Windows version.
2. Install it (next, next, finish — defaults are fine).
3. In VS Code: File → Open Folder → select this `quran-app` folder.
4. You'll see all the files on the left. Click any file in `data/` to edit it.

Optional but helpful: install the **Live Server** extension inside VS Code
(Extensions icon on the left → search "Live Server" → Install). Then right-click
`index.html` → "Open with Live Server". This auto-refreshes your browser every
time you save a file, so you see your changes instantly.

## 3. How to edit the Roman Urdu translation

Every surah's file already has Arabic text AND a Roman Urdu translation for
every ayah — you're editing existing text, not filling blanks.

1. In VS Code, open the `data` folder and pick a surah file, e.g. `002-al-baqarah.js`.
2. Find the ayah you want to change, e.g.:
   ```js
   { number: 5, arabic: "...", romanUrdu: "Yehi log hidayat par hain." }
   ```
3. Replace the text between the quotes after `romanUrdu:` with your own wording.
4. Save the file (`Ctrl+S`), refresh your browser — that ayah now shows your edit.

Do this at whatever pace you like, ayah by ayah or surah by surah. Nothing else
in the app needs to change — you're only ever editing text between quotes.

## 4. Editing your Roman Urdu later

Just open the relevant file in `data/`, find the ayah by its `number`, edit the
text between the quotes after `romanUrdu:`, save. Nothing else to do.

## 5. Getting it onto your Android phone

**Quickest option — installable web app (no extra tools):**
1. Put this folder on a free web host (see note below) OR use a local network
   trick to open it on your phone's Chrome browser.
2. In Chrome on your phone, tap the menu (⋮) → "Add to Home screen."
   It now behaves like an installed app with its own icon.
   (We'll add an offline "service worker" file in a later step so it keeps
   working without internet after that first load.)

**Real installable .apk (Play Store-style app):**
This is a later step using a tool called Capacitor, once your data and design
are further along — happy to walk through it when you're ready.

## Project files

```
quran-app/
  index.html          <- the app's two screens (home + reading)
  style.css            <- all the visual styling
  app.js                <- the logic that reads your data and displays it
  data/
    surah-list.js       <- names/meanings/ayah counts for all 114 surahs
    001-al-fatiha.js     <- full example surah (Arabic + translation)
    112-al-ikhlas.js     <- example surah that's only half-translated
```

## 6. About the Arabic script style (Uthmani vs Indo-Pak)

The Arabic *text* in this app is standard **Uthmani script** (the Madani Mushaf
style, used by Tanzil.net, Quran.com, etc.) — cross-checked against a second
independent dataset for accuracy.

Indo-Pak Mushafs use a different calligraphic style (**Nastaliq**) and some
different orthographic conventions. A full, freely machine-downloadable
Indo-Pak *text* dataset isn't easily available — the one real source
(Tarteel's Quranic Universal Library, qul.tarteel.ai) requires downloading
manually through their website, possibly with a free account.

As a practical middle ground, this app now displays the (verified) Uthmani
text using the **Noto Nastaliq Urdu** font, so it visually resembles the
Indo-Pak style you're used to, even though the underlying Unicode text is
Uthmani. If you later get the real Indo-Pak text file from QUL, share it and
it can be merged into your data files the same way the translation was.

## 7. Transliteration line

Every ayah now also has a `transliteration` field (English-letter phonetic
reading of the Arabic, e.g. "Bismi Allahi alrrahmani alrraheemi") sourced from
a Tanzil.net-based dataset, same family of sources as your Arabic text. It
shows between the Arabic and your Roman Urdu translation. You generally
shouldn't need to edit this one, but it lives in the same ayah object as
`arabic` and `romanUrdu` if you ever want to tweak it.

Text sizing: Arabic is 20px, transliteration and Roman Urdu are both 19px, so
all three feel like one connected block rather than mismatched sizes.

Color scheme for the three lines (tuned for the Midnight Navy theme):
- Arabic — soft white, the visual anchor
- Transliteration — teal, italic
- Roman Urdu — warm cream, matching the manuscript-like feel of the app

## 8. Offline support, bookmarks, and text size (new)

**Offline support:** the app now has `sw.js` (a "service worker"), which
saves every file to your browser/phone permanently after the first visit —
including the Google Font. After that first load, the app keeps working with
no internet at all.

Important: whenever you edit any file (a translation, styling, etc.), open
`sw.js` and change the number in this line:
```js
const CACHE_NAME = "quran-app-v1";
```
to `"quran-app-v2"`, `"v3"`, etc. This tells the browser "forget the old
cached files, fetch my new ones" — otherwise it may keep showing your old
content even after you've changed it.

**Bookmarks:** tap the star (☆) next to any ayah while reading to save it.
Find all your saved ayahs under the Bookmarks tab at the bottom. Tapping one
jumps straight back to that ayah.

**Continue reading:** the app now remembers the last surah/ayah you opened
and shows a "Continue reading" card at the top of the home screen.

**Text size:** the Settings tab has two sliders — one for the Arabic size,
one for the transliteration + Roman Urdu size (kept equal to each other, as
you wanted). Your choice is remembered on this device.

All three of these save their data using the browser's built-in storage
(`localStorage`) — nothing leaves your device, no account or internet needed
for them to work.

## 9. Juz navigation, ayah jump, font switch, Ayah of the Day (new)

**Juz (Para) navigation:** on the home screen, tap the "Juz" toggle (next to
"Surahs") to browse by the standard 30-part division instead of by surah name.
Tapping a Juz jumps straight to its starting ayah.

**Quick jump to an ayah:** type something like `2:255` into the "Jump to
ayah" box on the home screen and tap Go (or press Enter) to go straight there.

**Arabic font style:** in Settings, choose between "Nastaliq (Indo-Pak)" and
"Uthmani" — switches the Arabic display font without touching any text data.

**Ayah of the Day:** a card on the home screen shows one ayah that changes
once per day (based on today's date), tap it to read that surah from there.

All of these were added to `sw.js`'s cached file list too, and the cache
version was bumped to `v2` so your browser picks up the changes instead of
serving old cached files.

## 10. English translation, 2 more themes, second transliteration style (new)

**English translation:** every ayah now also has an `english` field (Abdullah
Yusuf Ali's classic, public-domain English translation, 6,236/6,236 matched).
Switch to it from Settings → Translation language. Only one translation shows
at a time — Roman Urdu is the default.

**Two more themes:** Settings → Theme now has 3 options:
- Midnight Navy (original, dark)
- Charcoal (dark, minimal black/gray)
- Sepia (light, warm parchment/manuscript look)

**Second transliteration style:** every ayah now also has a
`transliterationB` field (a "double-vowel" style, e.g. "Bismillaahir
Rahmaanir Raheem", common in printed transliterated Qurans). Switch between
Style A (original) and Style B from Settings → Transliteration style.

All three settings are remembered per device, same as your other preferences.

## 11. App icon & real "installed app" behavior (new)

Added `manifest.json` and a custom icon set (gold crescent on navy, matching
the default Midnight Navy theme) in the `icons/` folder.

What this changes when you "Add to Home Screen" on Android now:
- Real app icon instead of a generic browser icon
- Opens full-screen with no browser address bar (feels like a real app)
- Shows "Al-Quran" as the app name under the icon

If you want a different icon later, replace the files in `icons/` (keep the
same filenames and sizes) — no code changes needed, just swap the images.

## 12. Display mode: Both / Arabic only / Translation only (new)

Settings → Display mode now has 3 options:
- **Both** (default, same as before) — Arabic, transliteration, and translation
- **Arabic only** — hides transliteration and translation
- **Translation only** — hides Arabic and transliteration, shows only the translation text

## 13. Salah Times (new)

A new "Salah" tab in the bottom navigation shows today's 6 prayer times
(Fajr, Sunrise, Dhuhr, Asr, Maghrib, Isha), calculated entirely on your
device using the `adhan.min.js` library (MIT licensed, bundled locally --
no internet needed once your location is set, no external API calls ever).

- Tap "Use my current location" to detect your location via your phone's
  GPS/location services (needs a location permission prompt the first time).
- **Asr calculation (madhab):** switch between Hanafi and Shafi (Standard) --
  this is the classical difference in how Asr's start time is calculated
  (Hanafi uses a longer shadow length, so Asr starts later).
- **Calculation method:** Karachi (default, common in South Asia), Muslim
  World League, or Umm Al-Qura -- these affect the Fajr/Isha angle
  conventions slightly, different regions/organizations prefer different ones.

Location and both settings are remembered on this device. Since this is a
personal estimate calculated from astronomical formulas (not looked up from
a mosque's official schedule), treat it as a helpful guide and confirm
against your local masjid's posted times when precision matters.

## 14. Faridabad default + Indian city picker (new)

Salah Times now defaults to **Faridabad, Haryana** if you haven't set a
location yet -- no more "location not set" on first open.

To change it: type any Indian city name into the search box on the Salah
screen (e.g. "Mumbai", "Lucknow") and tap a match from the dropdown. Backed
by a dataset of 528 Indian cities (population 100k+) with verified
coordinates. "Use my current GPS location" is still available too, if you'd
rather auto-detect instead of picking from the list.

## 15. Fully offline from the very first open (new)

Previously, two fonts (Noto Nastaliq Urdu, Scheherazade New) loaded from
Google's servers on first use, meaning the very first time you opened the
app needed internet. Both are now downloaded and bundled directly inside
`fonts/` (SIL Open Font License -- free to bundle, see `fonts/LICENSE.txt`),
referenced locally instead of from the internet. Combined with the offline
cache already covering everything else, the app now needs **zero internet,
ever**, for these two fonts and every other feature -- not even on the very
first open.

**One honest exception: the Indo-Pak Nastaleeq font** (Settings -> Arabic
font style -> Indo-Pak). It's only hosted on Tarteel's own servers
(qul.tarteel.ai), and there's no other place to download it from to bundle
it the same way. It still needs internet the first time you select it;
after that first successful load, it's cached and works offline from then
on, same as everything else. If this matters to you, you can download that
font file yourself from qul.tarteel.ai, save it as
`fonts/IndopakNastaleeq.ttf`, and I can update `style.css` to point to that
local file instead -- just let me know once you have it.

**What "internet only for updates" now actually means:** once you've done
one fresh install of the app (extracting a new zip after we make changes),
it needs zero internet until the next time you want a new update from me.
Day-to-day reading, translation switching, Salah times, bookmarks, Juz
navigation -- all fully offline, permanently.

## 16. Transliteration-only display mode + Download as HTML (new)

**Transliteration only:** Settings -> Display mode now has a 4th option,
showing just the transliteration with nothing else.

**Download as HTML:** two ways to trigger it:
- While reading any surah, tap the download icon (top right of the reading
  screen) to download *that* surah.
- Settings -> "Download full Quran as HTML" downloads all 114 surahs in
  one file.

Either way, you'll be asked what to include: Arabic + Transliteration +
Translation (all), Arabic only, Translation only, or Transliteration only.
The result is a single, self-contained HTML file (works in any browser, no
internet or app needed to open it later) using your current transliteration
style and translation language settings. A full-Quran "all content" download
is roughly 5-6 MB; single-content downloads are much smaller.
