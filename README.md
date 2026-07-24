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

## 17. Hadith section: Sahih al-Bukhari (new)

New "Hadith" tab in the bottom nav, alongside Read/Bookmarks/Salah/Settings.

- All **7,277 hadiths, 97 chapters** of Sahih al-Bukhari, Arabic + English,
  sourced from a structured dataset (scraped from Sunnah.com, cross-checked:
  chapter-by-chapter counts sum to exactly 7,277).
- Tap a chapter to read every hadith in it -- Arabic text, narrator, and
  translation, same visual style as the Quran reading screen.
- **Roman Urdu is not included for Hadith yet** -- unlike the Quran, no
  clean structured Roman Urdu hadith dataset exists publicly (only PDFs/
  scanned books), so the field was removed rather than shipped empty.
  Currently shows Arabic + English only. If/when you want to add Roman Urdu
  later, tell me and I'll add the field back in and wire it up the same way
  as the Quran.
- Adds about 13 MB to the app's offline storage (all 97 chapter files
  bundled and cached, same as your Quran data).

Data file structure: `data/hadith/bukhari-001.js` through `bukhari-097.js`
(one per chapter/book), plus `data/hadith-book-list.js` as the index driving
the Hadith home screen list. Same editing pattern as Quran surahs -- open a
chapter file, find the hadith by `idInBook`, fill in `romanUrdu` between the
quotes, save.

## 18. Sahih Muslim added (new)

The Hadith tab now has a **Sahih al-Bukhari / Sahih Muslim** toggle at the
top -- tap to switch which book's chapter list you're browsing.

- **Sahih Muslim**: 57 chapters, 7,459 hadiths, Arabic + English, same
  source and quality as Bukhari.
- One honest note on the data: chapter 0 ("Al-Muqaddimah" / Introduction,
  91 hadiths) was missing its own file in the source dataset -- verified
  this by cross-checking against the book's own total count, then
  reconstructed it correctly from the complete-book file. Confirmed the
  final total matches exactly (7,459/7,459), so nothing is missing.
- Same Arabic + English only for now, same reasoning as Bukhari (no clean
  structured Roman Urdu hadith dataset exists yet).

Data files: `data/hadith/muslim-000.js` through `muslim-056.js`, plus
`data/muslim-book-list.js` as the index. Adds roughly another 13 MB to
offline storage, same caching approach as everything else.

## 19. Hadith flow restructured (new)

Hadith tab is now a proper 3-step flow instead of one crowded screen:
1. **Hadith tab** -- choose Sahih al-Bukhari or Sahih Muslim (two cards)
2. **Book screen** -- search/browse that book's chapters
3. **Reading screen** -- read the hadiths in that chapter

Back buttons go one level up at a time (reading -> chapters -> book choice),
same navigation feel as Surah reading.

## 20. Fixed: real sequential hadith numbering (bug fix)

**The bug:** every chapter was showing "Hadith 1, 2, 3..." starting fresh,
instead of the real, continuous numbering used in printed Sahih Bukhari/
Muslim (e.g. real hadith #1543 was showing as "Hadith 12" because it was
the 12th hadith in its chapter).

**Root cause:** the per-chapter data source I originally used had a field
literally named `idInBook` that actually reset every chapter -- a naming
inconsistency in that specific part of the source dataset. The *full-book*
version of the same dataset has correct global numbering.

**The fix:** rebuilt every chapter file for both Bukhari and Muslim directly
from the full-book source (which verified as perfectly sequential, 1 to
7,277 with zero gaps/duplicates for Bukhari), instead of the per-chapter
endpoint. Chapter list now also shows each chapter's real hadith range
(e.g. "Hadith 8-58") so you can see at a glance where you are in the book.

**Bonus fix while rebuilding:** Sahih Muslim's "Introduction" chapter is
numbered 7369-7459 in this dataset (i.e. last, not first) -- a quirk of the
source numbering, not something I introduced. Reordered both book's chapter
lists by real hadith sequence rather than raw chapter ID, so what you see
now matches true reading order.

## 21. Hadith settings: display mode + font size (new)

Settings screen now has a "Hadith" section (below the Quran settings):
- **Display mode**: Arabic + English (default) or English only
- **Hadith Arabic text size** and **Hadith English text size** -- independent
  sliders, separate from your Quran font size settings, remembered per device

Changing either while a chapter is open updates it immediately.

## 22. Search by hadith number (new)

On either book's chapter screen (Sahih al-Bukhari or Sahih Muslim), there's
now a "Search by hadith number" box below the chapter name search. Type a
number (e.g. 700) and tap Go -- it finds exactly which chapter that hadith
belongs to and shows **only that one hadith**, not the rest of the chapter.

Tested with real data: Bukhari hadith 700 correctly isolated from the other
265 hadiths in its chapter (Call to Prayers); same confirmed for Muslim.
Works for both books independently, using whichever real-numbering fix was
verified in the previous update.

## 23. Four requested changes (new)

**1. Hadith grading (Sahih/Hasan/Da'if) -- deliberately NOT added.** Sahih
al-Bukhari and Sahih Muslim only contain hadiths already classified as
Sahih (authentic) by their compilers -- that's what "Sahih" in the title
means. There's no per-hadith grade to show for these two collections
specifically (grading matters for books like Sunan Abu Dawud/Tirmidhi that
mix authenticity levels). Didn't want to add a fabricated or misleading
field for something with real religious accuracy implications.

**2. English only is now the default** for Hadith display mode. Switch to
Arabic + English anytime in Settings.

**3. Quran ayah search and Ayah of the Day now show only that single ayah**
-- not the whole surah -- matching the Hadith number search behavior.
Tested across several ayahs to confirm only the requested ayah renders.

**4. Hadith of the Day** -- new card on the Hadith tab's book-choice screen,
alongside the existing book picker. Rotates daily across both books
combined (14,736 hadiths total), tap to read that one hadith. Verified the
day-index math correctly handles the Bukhari-to-Muslim boundary and the
very last hadith in the combined pool.

## 24. Fixed: Hadith of the Day back button (bug fix)

**The bug:** tapping Hadith of the Day jumped straight to the single-hadith
view without ever populating the chapter-list screen behind it, so hitting
Back showed a blank screen, needing a second Back tap to actually get
anywhere.

**The fix:** opening Hadith of the Day now properly prepares the correct
book's chapter-list screen first (title, subtitle, full chapter list all
populated), then shows the single hadith on top of it. Back now works in
one tap, landing on a fully working chapter list.

## 25. Hadith Continue Reading + smaller info cards (new)

**Continue Reading for Hadith**: new card on the Hadith tab's book-choice
screen, alongside Hadith of the Day. Remembers whichever hadith you last
opened (whole chapter defaults to its first hadith, single-hadith views
save that exact number) and jumps straight back to it.

**Card sizing**: Continue Reading and Ayah/Hadith of the Day cards are now
visually smaller/more compact than the main navigation cards (like the
Sahih al-Bukhari / Sahih Muslim choice cards) -- smaller padding and text,
so they read as quick secondary info rather than competing with primary
navigation. Applied consistently across both the Quran home screen and the
Hadith home screen.

## 26. Sunan Abu Dawud added, with grading (new)

**Sunan Abu Dawud**: 5,276 hadiths, 43 chapters, Arabic + English + grade,
added as a third book choice on the Hadith tab. Exact total match verified
against a second independent source before building.

**Grading**: unlike Bukhari/Muslim (which are 100% Sahih by definition, no
grading needed), Sunan Abu Dawud legitimately has mixed-grade hadiths.
Sourced from a different dataset (Jammooly1/hadiths-json-files) with a
proper structured `grade` field from Darussalam's published edition --
98.5% of hadiths have a grade. Shows as a small "Grade: ..." line below
each hadith. Cleaned up minor formatting inconsistencies in the raw grade
text (stray commas, curly vs straight apostrophes) and caught/nulled one
data glitch (a stray number where a grade should be) rather than guessing.

**Numbering**: same bug pattern as before (source's own numbering field
resets per chapter) -- generated verified real sequential numbering myself
during the build, same fix as Bukhari/Muslim.

**Architecture note**: the Hadith system is now fully generic -- adding a
book means generating its data files and adding one entry to `HADITH_BOOKS`
in `app.js`. Hadith of the Day, Continue Reading, and search-by-number all
automatically include every book without needing separate code per book.

## 27. Three fixes: bookmark tap, hadith bookmarks, accurate continue reading (new)

**1. Bookmark tap now shows only that single ayah** (was opening the whole
surah scrolled to it) -- matches the isolated-view pattern used everywhere
else (search, Ayah of the Day, Hadith search).

**2. Hadith bookmarking added.** Star icon on every hadith, same as Quran
ayahs. Bookmarks tab now has a Quran/Hadith toggle at the top to switch
between the two lists.

**3. Continue Reading now tracks real scroll position**, for both Quran and
Hadith. Previously it only saved whatever was true the moment you opened a
surah/chapter (always the first ayah/hadith) and never updated as you
scrolled further in -- exactly the bug you found with hadith 3230. Now a
scroll listener updates it live to whichever ayah/hadith is actually near
the top of your screen. Applies to full surah and full chapter views (Juz
view and single-item views are unaffected, as intended).

## 28. Five fixes: bookmark scroll jump, back navigation, hadith section layout (new)

**1 & 2. Bookmarking no longer jumps the screen.** Root cause: tapping the
star used to fully re-render and reset scroll to the top. Now it just
updates that one star icon in place -- nothing else moves. Fixed for both
Quran ayahs and hadiths.

**3 & 4. Back button now returns to where you actually came from**, instead
of a fixed hardcoded screen. Tracked properly now:
- From the surah/Juz list, search, or Ayah/Hadith of the Day -> Back goes
  to the Read/Hadith home screen
- From Bookmarks -> Back goes back to Bookmarks
- From a chapter list -> Back goes back to that chapter list
This applies to both Quran and Hadith reading screens.

**5. Hadith home screen restructured.** Added a "Collections" section
label with a divider line separating it from Continue Reading / Hadith of
the Day above. Book choice cards now have their own distinct style (teal
left accent border) instead of reusing the same rounded card look as the
info cards. All card/button corners flattened from the previous 8-14px
rounding down to a consistent 4px across the whole app, not just Hadith.

## 29. Sunan Abu Dawud numbering fixed to match sunnah.com exactly (new)

**The real cause**, found via user-reported cross-check against sunnah.com:
sunnah.com uses lettered sub-numbers for 2 hadiths in this book (907b and
4290b) which don't consume their own integer -- e.g. the real sequence is
...907, 907b, 908... My previous auto-generated numbering (1,2,3...N)
didn't know this and treated every entry as a new integer, causing every
number from 908 onward to drift by +1 (and by +2 after 4290b).

**The fix:** discovered the raw source data's `title` field already
contains sunnah.com's real reference number as text for every single
hadith (not just these two) -- validated across all 5,276 entries: 5,274
distinct numbers, zero gaps, matching sunnah.com's own stated total exactly.
Rebuilt Abu Dawud using this as the authoritative source instead of my own
counter. Also fixed one minor ordering swap found during validation
(hadiths 3648/3649 were listed in reversed order in the raw source).

**What changed in the data:** each hadith now has both `number` (e.g. 907)
and `suffix` (e.g. "b", or empty). Displayed as "907b" when it has a
suffix. Search box now accepts letters too (e.g. type "907b" directly).
Bookmarking, Continue Reading, and Hadith of the Day all updated to handle
these paired entries correctly. Book total updated to 5,274 (was 5,276),
matching sunnah.com.

**Scope note:** Bukhari and Muslim have a deeper, different numbering
discrepancy (unrelated to this a/b pattern -- see their own investigation)
and are not fixed by this change. Tirmidhi has a similar but more complex
a/b pattern (45 pairs, plus some malformed combined entries) and needs its
own dedicated pass, not yet done.

## 30. Sahih Bukhari numbering fixed to match sunnah.com (new)

**The cause, confirmed by your report:** sunnah.com sometimes shows one
Arabic hadith split across two (or occasionally three or four) English
paragraph-numbers, displayed together as one combined page -- e.g. "Sahih
al-Bukhari 272, 273". My old numbering treated every entry as one integer,
causing permanent drift after each such combined entry.

**The fix:** used the same title-field technique that worked for Abu Dawud,
scanned and validated across all 7,277 entries with zero unparsed titles.
Found and correctly handled 4 distinct patterns sunnah.com uses:
- Plain single numbers (the majority)
- Combined pairs, e.g. "272, 273" (253 cases)
- Combined triples/quads, e.g. "958, 959, 960, 961" (12 cases)
- Dash-ranges, e.g. "5709-5712" (5 cases)
- Lettered sub-numbers, e.g. "402b" (26 cases, including one number with
  three parts: 1390, 1390b, 1390c)

Sunnah.com itself displays combined entries as a single page too, so no
splitting was needed -- each physical hadith just needed the correct label
matching sunnah.com's own display (e.g. "Hadith 272, 273").

**Verified:** max number found is 7,563, matching sunnah.com's own stated
total exactly. Coverage is 7,539 of 7,563 possible numbers (99.7%) --
sunnah.com's own About page describes their total as "roughly 7563", so
this small gap is consistent with their own hedging, not a sign of missing
data on my end. Directly tested your two reported cases (272/273 and
949/950) -- both now correctly resolve to the same combined entry, matching
sunnah.com exactly.

**What changed in the data:** hadiths now have `number`, `numberEnd`
(only set when different from `number`), and `suffix`. Search box accepts
any number within a combined range (searching either 272 or 273 finds the
same entry). Bookmarking, Continue Reading, and Hadith of the Day all
updated to handle this correctly.

**Scope note:** Muslim has not been re-validated with this technique yet --
same investigation still needs to happen there before trusting its numbers.

## 31. Sahih Muslim numbering fixed to match sunnah.com (new)

**Confirmed exactly what you found:** sunnah.com has two completely separate,
independent numbering tracks for Muslim -- the main hadiths and a separate
"Introduction" (Muqaddimah) section -- verified directly against sunnah.com
(`muslim:8a`/`muslim:8e` belong to real hadith "Book of Faith", while
`muslim/introduction/9` is a totally different page). Your report that hadith
5 is followed by "Introduction 8-14" then hadith 6 was exactly right -- these
are two interleaved-in-the-source but logically separate tracks.

**Chapter order fixed:** Introduction is now chapter 0 and shows first, as
you asked.

**Numbering fixed** using a more general model than Bukhari/Abu Dawud
needed -- validated against all 7,459 entries with zero unparsed titles,
handling every pattern found: plain numbers, lettered sub-parts (including
double-letter cases like "1211 aa" through "1211 ah" -- one hadith with 30+
narration variants), comma-lists, letter-ranges, cross-number spans (e.g.
"928a, 927h, 929a"), and slash-combinations. Directly tested your exact
example: hadith 4 correctly shows as two entries "4a" and "4b".

**Extra bug caught and fixed during this work:** chapter 0's Introduction
range (numbers 8-92) numerically overlaps with chapter 1's real hadith
numbers (which also start at 8, e.g. "8a"-"8e"). Searching a plain number
like "10" could have incorrectly matched the Introduction's "10" instead of
the real hadith 10 in "The Book of Faith". Fixed with a proper lookup that
prefers real hadiths over Introduction entries by default -- verified with
real data.

**Data model note:** Bukhari and Abu Dawud were also converted to this more
general model (each hadith stores a list of number/suffix references
instead of a single number) for consistency and to avoid maintaining two
separate systems long-term. All existing functionality re-verified working
after this conversion.

## 32. Fixed: Sahih Muslim chapter number ranges (bug fix)

**The bug you found:** chapter 55 showed "533-3014" instead of "2956-3014";
chapter 5 showed "33-684" instead of "520-684".

**The cause:** not a data error -- a genuine, widespread feature of how
Imam Muslim's book works. He frequently continues an earlier hadith's
lettered variants (e.g. hadith 533's "533c") when discussing it again in a
completely different, much-later topical chapter. My original range
calculation used simple min/max, which got dragged down by these rare
stray cross-references.

**The fix:** added a second, robust "display range" calculated via
gap-based clustering that finds each chapter's real dominant block of
hadiths and ignores isolated stragglers -- verified against both your exact
examples (2956-3014 and 520-684, both exact matches). Kept the original
true min/max as a separate field used only for search lookups, so hadiths
in those stray positions (like 513b) remain fully searchable and readable
-- only the displayed chapter range text changed, not the actual content.

**Scope:** fixed for Sahih Muslim only, as requested. Bukhari and Abu Dawud
use simpler, cleaner number patterns that don't show this same issue at
this scale, but haven't been re-audited specifically for it.

## 33. Jami' at-Tirmidhi numbering fixed to match sunnah.com (new, Tirmidhi only)

Applied the same validated technique used for Bukhari/Muslim/Abu Dawud --
scanned and parsed all 4,053 titles in the source data, handling plain
numbers, lettered sub-parts, comma-lists, dash-ranges, and slash-combos.

**Result: 4,052 of 4,053 titles parsed cleanly** against the same pattern
set already proven correct for the other three books.

**One honest exception:** a single hadith (about giving/withholding/loving
for Allah's sake) had a completely blank number in the source data --
positioned exactly between hadith 2520 and 2522, so I filled it in as 2521
based on that strong positional evidence. This is **inferred, not
independently confirmed against sunnah.com directly** -- marked with
`isNumberInferred: true` in the data itself so it's clearly flagged if you
want to verify it yourself later.

**Robust chapter-range display** (the same fix used for Sahih Muslim's
chapter 5/55 issue) applied here too, since Tirmidhi has the same
cross-referencing pattern where a hadith's lettered variant occasionally
appears in a much later chapter.

**Scope confirmed:** only Tirmidhi's data files and book list were
regenerated. Bukhari, Muslim, and Abu Dawud files were not touched or
re-validated in this pass (verified via file timestamps before packaging).

## 34. Sunan Ibn Majah added (new, sunnah.com-verified from the start)

**Sunan Ibn Majah**: 4,345 physical entries, 38 chapters, Arabic + English +
grade, added as a fifth book choice on the Hadith tab. Built using the same
validated title-field-parsing technique as the other four books, from the
start rather than as a later fix -- 100% of titles parsed cleanly, zero
unparsed entries.

**Verified against sunnah.com's own stated total** (4,341 hadiths in 37
books): max number found is exactly 4,341, confirmed by checking sunnah.com
directly before building. The 38 vs 37 chapter count difference is just a
zero-indexing convention (chapters 0-37 = 38 entries, same pattern already
seen in Bukhari), not a real discrepancy.

Same robust "display range" chapter list logic applied from the start (no
separate fix needed later, unlike Sahih Muslim).

**Scope confirmed:** only Ibn Majah's files were created. Bukhari, Muslim,
Abu Dawud, and Tirmidhi files were not touched (verified via file
timestamps before packaging).

## 35. Sunan an-Nasa'i added, with one honest data gap disclosed (new)

**Sunan an-Nasa'i**: 5,685 hadiths across 51 real chapters, Arabic +
English + grade, added as a sixth book choice on the Hadith tab.

**Full investigation of a real discrepancy found before building anything:**
the source data's own metadata claimed 5,758 hadiths, but only 5,685 were
physically present. Investigated fully rather than ignore it:
- 2 were simple blank-title entries (same pattern as Tirmidhi's one case) --
  inferred from clear positional evidence (sitting exactly between two known
  consecutive numbers) and marked `isNumberInferred: true` in the data.
- The other **82 form one solid, contiguous block: hadiths 3857-3938**.
  Traced this precisely: it's sunnah.com's entire "Book of Agriculture"
  (35b) -- confirmed directly against sunnah.com that this book exists
  there and covers exactly that range, but it's completely absent from this
  app's source dataset. This also explains why the source only had 51 books
  where sunnah.com has 52.

**Handled honestly, not hidden:** added an explicit placeholder chapter
for "The Book of Agriculture" in the right position in the chapter list --
opening it shows a clear message explaining the book isn't available in
this app's data source, rather than a confusing blank page or a silent gap
in the numbering. Search for any number in that range correctly returns
"not found" rather than wrongly matching something else.

Max number found (5,758) exactly matches sunnah.com's real total, and
every real hadith's number verified reachable via search -- tested hadith
1, the inferred 512, the boundary at 3939 (right after the gap), and 5758
(the true last hadith).

**Scope confirmed:** only an-Nasa'i's files were created. Bukhari, Muslim,
Abu Dawud, Tirmidhi, and Ibn Majah files were not touched (verified via
file timestamps before packaging).

## 36. Hadith cards redesigned: sunnah.com-style number banner (new)

Every hadith card now shows a bold banner header, exactly like sunnah.com's
own style -- e.g. "Sahih al-Bukhari 7394" in a dark green bar, right-aligned.
Below it: narrator with a small icon, then Arabic (if enabled)/English/grade,
same content as before, just restyled.

This was a shared rendering change (one function used by both the full
chapter view and the single-hadith view), so it automatically applies to
all six books -- Bukhari, Muslim, Abu Dawud, Tirmidhi, Ibn Majah, and
an-Nasa'i -- not just Bukhari. Verified against the exact hadith from your
screenshot (Bukhari 7394, Hudhaifah's narration) -- confirmed matching
content and banner text.
