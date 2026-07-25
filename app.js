// This file contains the "engine" of the app.
// You should not need to edit this file while adding translations —
// you only ever edit files inside the data/ folder for that.

// surahList and each surahData object (e.g. surah001) come from the
// data/*.js files loaded before this one in index.html.

// ---------- Scroll-position tracking (keeps "Continue Reading" accurate) ----------
// Full surah / full chapter views can be long -- this watches scroll position
// and updates lastRead/hadithLastRead to whichever item is actually near the
// top of the screen, instead of freezing at whatever was true when opened.

let scrollTrackTicking = false;

function findTopmostVisibleCard(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return null;
  const cards = container.querySelectorAll('.ayah-card');
  let closest = null;
  let closestDist = Infinity;
  cards.forEach(function (card) {
    const rect = card.getBoundingClientRect();
    const dist = Math.abs(rect.top - 90); // ~top-bar height offset
    if (rect.bottom > 0 && dist < closestDist) {
      closestDist = dist;
      closest = card;
    }
  });
  return closest;
}

function onAppScroll() {
  if (scrollTrackTicking) return;
  scrollTrackTicking = true;
  window.requestAnimationFrame(function () {
    scrollTrackTicking = false;

    const readingVisible = !document.getElementById('reading-screen').classList.contains('hidden');
    if (readingVisible && currentOpenSurah) {
      const card = findTopmostVisibleCard('ayah-list');
      if (card) {
        const parts = card.id.split('-'); // "ayah-<surah>-<ayah>"
        const ayahNum = Number(parts[2]);
        if (ayahNum) saveJSON('lastRead', { surah: currentOpenSurah, ayah: ayahNum });
      }
    }

    const hadithReadingVisible = !document.getElementById('hadith-reading-screen').classList.contains('hidden');
    if (hadithReadingVisible && currentOpenHadithChapter) {
      const card = findTopmostVisibleCard('hadith-list');
      if (card && card.dataset.hadithNumber) {
        saveJSON('hadithLastRead', { book: currentHadithBook, number: Number(card.dataset.hadithNumber) });
      }
    }
  });
}

window.addEventListener('scroll', onAppScroll, { passive: true });

// ---------- Small storage helpers (saved on this device only) ----------

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
}

function saveJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // storage full or unavailable -- fail quietly, app still works
  }
}

// ---------- Home screen: surah list + "Continue Reading" ----------

function renderSurahList(list) {
  const container = document.getElementById('surah-list');
  container.innerHTML = list.map(function (s) {
    const hasTranslation = s.hasTranslation ? '' : 'no-translation';
    return (
      '<div class="surah-row ' + hasTranslation + '" onclick="openSurah(' + s.number + ')">' +
        '<div class="surah-number">' + s.number + '</div>' +
        '<div class="surah-info">' +
          '<p class="name">' + s.nameEnglish + '</p>' +
          '<p class="meta">' + s.meaning + ' &middot; ' + s.totalAyahs + ' ayahs</p>' +
        '</div>' +
      '</div>'
    );
  }).join('');
}

function filterSurahList() {
  const query = document.getElementById('search-box').value.toLowerCase();
  const filtered = surahList.filter(function (s) {
    return s.nameEnglish.toLowerCase().includes(query) || String(s.number).includes(query);
  });
  renderSurahList(filtered);
}

function renderContinueReading() {
  const box = document.getElementById('continue-reading');
  const lastRead = loadJSON('lastRead', null);
  if (!lastRead) {
    box.innerHTML = '';
    box.classList.add('hidden');
    return;
  }
  const meta = surahList.find(function (s) { return s.number === lastRead.surah; });
  if (!meta) {
    box.innerHTML = '';
    box.classList.add('hidden');
    return;
  }
  box.classList.remove('hidden');
  box.innerHTML =
    '<div class="continue-card compact-card" onclick="openSurah(' + lastRead.surah + ', ' + lastRead.ayah + ')">' +
      '<p class="continue-label">Continue reading</p>' +
      '<p class="continue-title">' + meta.nameEnglish + ' &middot; Ayah ' + lastRead.ayah + '</p>' +
    '</div>';
}

// ---------- Reading screen ----------

let currentOpenSurah = null;
let currentOpenJuz = null;
let currentOpenHadithChapter = null;
let quranReturnScreen = 'home-screen';
let hadithReturnScreen = 'hadith-book-screen';

function buildReadingAyahCard(surahNumber, ayah, bookmarks, lang, translitStyle, displayMode) {
  const translitText = translitStyle === 'b' ? ayah.transliterationB : ayah.transliteration;
  const translit = translitText
    ? '<p class="transliteration-text">' + translitText + '</p>'
    : '';
  const translationText = lang === 'english' ? ayah.english : ayah.romanUrdu;
  const translation = translationText && translationText.trim()
    ? '<p class="roman-urdu-text">' + translationText + '</p>'
    : '<p class="roman-urdu-text missing">Translation not added yet.</p>';

  const arabicBlock = (displayMode === 'translation' || displayMode === 'transliteration')
    ? '' : '<p class="arabic-text">' + ayah.arabic + '</p>';
  let translationBlock;
  if (displayMode === 'arabic') {
    translationBlock = '';
  } else if (displayMode === 'translation') {
    translationBlock = translation;
  } else if (displayMode === 'transliteration') {
    translationBlock = translit;
  } else {
    translationBlock = translit + translation;
  }

  const isBookmarked = bookmarks.some(function (b) { return b.surah === surahNumber && b.ayah === ayah.number; });
  const starClass = isBookmarked ? 'bookmark-btn active' : 'bookmark-btn';
  const starSymbol = isBookmarked ? '\u2605' : '\u2606';

  return (
    '<div class="ayah-card" id="ayah-' + surahNumber + '-' + ayah.number + '">' +
      '<div class="ayah-card-header">' +
        '<p class="ayah-number">Ayah ' + ayah.number + '</p>' +
        '<button class="' + starClass + '" onclick="toggleBookmark(' + surahNumber + ',' + ayah.number + ')">' + starSymbol + '</button>' +
      '</div>' +
      arabicBlock +
      translationBlock +
    '</div>'
  );
}

function resetReadingScroll() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  const ayahList = document.getElementById('ayah-list');
  if (ayahList) ayahList.scrollTop = 0;
}

function openJuz(juzNumber, returnTo) {
  const juz = juzList.find(function (j) { return j.number === juzNumber; });
  if (!juz) return;

  currentOpenJuz = juzNumber;
  currentOpenSurah = null;
  quranReturnScreen = returnTo || 'home-screen';
  document.getElementById('download-surah-btn').classList.add('hidden');

  showScreen('reading-screen');
  document.getElementById('reading-title').textContent = 'Juz ' + juzNumber;

  const startMeta = surahList.find(function (s) { return s.number === juz.startSurah; });
  const endMeta = surahList.find(function (s) { return s.number === juz.endSurah; });
  document.getElementById('reading-subtitle').textContent =
    startMeta.nameEnglish + ' ' + juz.startAyah + ' \u2013 ' + endMeta.nameEnglish + ' ' + juz.endAyah;

  const ayahList = document.getElementById('ayah-list');
  const bookmarks = loadJSON('bookmarks', []);
  const lang = loadJSON('translationLanguage', 'romanUrdu');
  const translitStyle = loadJSON('transliterationStyle', 'b');
  const displayMode = loadJSON('displayMode', 'both');

  let html = '';
  for (let surahNum = juz.startSurah; surahNum <= juz.endSurah; surahNum++) {
    const meta = surahList.find(function (s) { return s.number === surahNum; });
    const data = window['surah' + String(surahNum).padStart(3, '0')];
    if (!meta || !data) continue;

    const fromAyah = (surahNum === juz.startSurah) ? juz.startAyah : 1;
    const toAyah = (surahNum === juz.endSurah) ? juz.endAyah : meta.totalAyahs;

    html += '<p class="juz-surah-heading">' + surahNum + '. ' + meta.nameEnglish + '</p>';

    for (let i = 0; i < data.ayahs.length; i++) {
      const ayah = data.ayahs[i];
      if (ayah.number < fromAyah || ayah.number > toAyah) continue;
      html += buildReadingAyahCard(surahNum, ayah, bookmarks, lang, translitStyle, displayMode);
    }
  }

  ayahList.innerHTML = html;
  saveJSON('lastRead', { surah: juz.startSurah, ayah: juz.startAyah });
  resetReadingScroll();
}

function openSurah(number, scrollToAyah, returnTo) {
  currentOpenSurah = number;
  currentOpenJuz = null;
  currentSingleAyahView = null;
  quranReturnScreen = returnTo || 'home-screen';
  document.getElementById('download-surah-btn').classList.remove('hidden');
  const meta = surahList.find(function (s) { return s.number === number; });
  const data = window['surah' + String(number).padStart(3, '0')]; // e.g. surah001

  showScreen('reading-screen');
  document.getElementById('reading-title').textContent = meta.nameEnglish;
  document.getElementById('reading-subtitle').textContent = meta.meaning + ' \u00b7 ' + meta.totalAyahs + ' ayahs';

  const ayahList = document.getElementById('ayah-list');

  if (!data) {
    ayahList.innerHTML =
      '<div class="empty-state">' +
        '<p>You have not added this surah\'s file yet.</p>' +
        '<p>Copy data/001-al-fatiha.js, rename it, and fill in the ayahs for this surah.</p>' +
      '</div>';
    return;
  }

  const bookmarks = loadJSON('bookmarks', []);
  const lang = loadJSON('translationLanguage', 'romanUrdu');
  const translitStyle = loadJSON('transliterationStyle', 'b');
  const displayMode = loadJSON('displayMode', 'both');

  ayahList.innerHTML = data.ayahs.map(function (ayah) {
    return buildReadingAyahCard(number, ayah, bookmarks, lang, translitStyle, displayMode);
  }).join('');

  saveJSON('lastRead', { surah: number, ayah: scrollToAyah || 1 });

  if (scrollToAyah) {
    resetReadingScroll();
    setTimeout(function () {
      const el = document.getElementById('ayah-' + number + '-' + scrollToAyah);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  } else {
    resetReadingScroll();
  }
}

function toggleBookmark(surahNum, ayahNum) {
  let bookmarks = loadJSON('bookmarks', []);
  const idx = bookmarks.findIndex(function (b) { return b.surah === surahNum && b.ayah === ayahNum; });
  let nowBookmarked;
  if (idx >= 0) {
    bookmarks.splice(idx, 1);
    nowBookmarked = false;
  } else {
    bookmarks.push({ surah: surahNum, ayah: ayahNum });
    nowBookmarked = true;
  }
  saveJSON('bookmarks', bookmarks);

  const btn = document.querySelector('#ayah-' + surahNum + '-' + ayahNum + ' .bookmark-btn');
  if (btn) {
    btn.classList.toggle('active', nowBookmarked);
    btn.textContent = nowBookmarked ? '\u2605' : '\u2606';
  }
}

// ---------- Bookmarks screen ----------

let currentBookmarksTab = 'quran';

function setBookmarksTab(tab) {
  currentBookmarksTab = tab;
  document.getElementById('bookmarks-toggle-quran').classList.toggle('active', tab === 'quran');
  document.getElementById('bookmarks-toggle-hadith').classList.toggle('active', tab === 'hadith');
  document.getElementById('bookmarks-list').classList.toggle('hidden', tab !== 'quran');
  document.getElementById('hadith-bookmarks-list').classList.toggle('hidden', tab !== 'hadith');
  if (tab === 'quran') {
    renderBookmarksScreen();
  } else {
    renderHadithBookmarksScreen();
  }
}

function renderHadithBookmarksScreen() {
  const bookmarks = loadJSON('hadithBookmarks', []);
  const list = document.getElementById('hadith-bookmarks-list');

  if (bookmarks.length === 0) {
    list.innerHTML = '<div class="empty-state"><p>No hadith bookmarks yet.</p><p>Tap the star on any hadith while reading to save it here.</p></div>';
    return;
  }

  list.innerHTML = bookmarks.map(function (b) {
    const info = HADITH_BOOKS[b.book];
    if (!info) return '';
    const chapter = info.list().find(function (c) { return c.chapterId === b.chapterId; });
    const data = window[info.varPrefix + String(b.chapterId).padStart(3, '0')];
    const hadith = data && data.hadiths[b.index];
    if (!chapter || !hadith) return '';
    return (
      '<div class="surah-row" onclick="openHadithAtLocation(\'' + b.book + '\', ' + b.chapterId + ', ' + b.index + ', \'bookmarks-screen\')">' +
        '<div class="surah-number">\u2605</div>' +
        '<div class="surah-info">' +
          '<p class="name">' + info.label + ', Hadith ' + hadithDisplayNumber(hadith) + '</p>' +
          '<p class="meta">' + chapter.englishTitle + '</p>' +
        '</div>' +
      '</div>'
    );
  }).join('');
}

function renderBookmarksScreen() {
  const bookmarks = loadJSON('bookmarks', []);
  const list = document.getElementById('bookmarks-list');

  if (bookmarks.length === 0) {
    list.innerHTML = '<div class="empty-state"><p>No bookmarks yet.</p><p>Tap the star on any ayah while reading to save it here.</p></div>';
    return;
  }

  list.innerHTML = bookmarks.map(function (b) {
    const meta = surahList.find(function (s) { return s.number === b.surah; });
    if (!meta) return '';
    return (
      '<div class="surah-row" onclick="openSingleAyah(' + b.surah + ', ' + b.ayah + ', \'bookmarks-screen\')">' +
        '<div class="surah-number">\u2605</div>' +
        '<div class="surah-info">' +
          '<p class="name">' + meta.nameEnglish + ', Ayah ' + b.ayah + '</p>' +
          '<p class="meta">' + meta.meaning + '</p>' +
        '</div>' +
      '</div>'
    );
  }).join('');
}

// ---------- Settings screen (font size) ----------

const FONT_SIZE_MIN = 14;
const FONT_SIZE_MAX = 30;

function applyFontSizes() {
  const arabicSize = loadJSON('arabicFontSize', 20);
  const translationSize = loadJSON('translationFontSize', 19);
  document.documentElement.style.setProperty('--arabic-font-size', arabicSize + 'px');
  document.documentElement.style.setProperty('--translation-font-size', translationSize + 'px');
  document.getElementById('arabic-size-value').textContent = arabicSize + 'px';
  document.getElementById('translation-size-value').textContent = translationSize + 'px';
  document.getElementById('arabic-size-slider').value = arabicSize;
  document.getElementById('translation-size-slider').value = translationSize;
}

function onArabicSizeChange(value) {
  saveJSON('arabicFontSize', Number(value));
  applyFontSizes();
}

function onTranslationSizeChange(value) {
  saveJSON('translationFontSize', Number(value));
  applyFontSizes();
}

// ---------- Screen + bottom nav switching ----------

function showScreen(id) {
  ['home-screen', 'reading-screen', 'bookmarks-screen', 'settings-screen', 'salah-screen', 'hadith-home-screen', 'hadith-book-screen', 'hadith-reading-screen'].forEach(function (s) {
    document.getElementById(s).classList.toggle('hidden', s !== id);
  });
  document.getElementById('bottom-nav').classList.toggle('hidden', id === 'reading-screen' || id === 'hadith-book-screen' || id === 'hadith-reading-screen');
  document.querySelectorAll('.nav-item').forEach(function (el) {
    el.classList.toggle('active', el.dataset.target === id);
  });
  if (id === 'home-screen') {
    renderContinueReading();
    renderAyahOfDay();
  }
  if (id === 'bookmarks-screen') setBookmarksTab(currentBookmarksTab);
  if (id === 'salah-screen') renderSalahScreen();
  if (id === 'hadith-home-screen') {
    renderContinueReadingHadith();
    renderHadithOfDay();
  }
}

function showHomeScreen() {
  showScreen('home-screen');
}

// ---------- Juz (Para) navigation ----------

function setListMode(mode) {
  const surahBtn = document.getElementById('toggle-surah');
  const juzBtn = document.getElementById('toggle-juz');
  const surahListEl = document.getElementById('surah-list');
  const juzListEl = document.getElementById('juz-list');

  if (mode === 'juz') {
    surahBtn.classList.remove('active');
    juzBtn.classList.add('active');
    surahListEl.classList.add('hidden');
    juzListEl.classList.remove('hidden');
    renderJuzList();
  } else {
    juzBtn.classList.remove('active');
    surahBtn.classList.add('active');
    juzListEl.classList.add('hidden');
    surahListEl.classList.remove('hidden');
  }
}

function renderJuzList() {
  const container = document.getElementById('juz-list');
  container.innerHTML = juzList.map(function (j) {
    const startMeta = surahList.find(function (s) { return s.number === j.startSurah; });
    const endMeta = surahList.find(function (s) { return s.number === j.endSurah; });
    const rangeText = startMeta.nameEnglish + ' ' + j.startAyah + ' \u2013 ' + endMeta.nameEnglish + ' ' + j.endAyah;
    return (
      '<div class="surah-row" onclick="openJuz(' + j.number + ')">' +
        '<div class="surah-number">' + j.number + '</div>' +
        '<div class="surah-info">' +
          '<p class="name">Juz ' + j.number + '</p>' +
          '<p class="meta">' + rangeText + '</p>' +
        '</div>' +
      '</div>'
    );
  }).join('');
}

// ---------- Quick jump to a specific ayah (typed into the search box) ----------

function tryJumpFromSearch() {
  const box = document.getElementById('search-box');
  const raw = box.value.trim();
  const match = raw.match(/^(\d{1,3})\s*[:./]\s*(\d{1,3})$/);
  if (!match) return; // not "surah:ayah" -- Enter does nothing extra, list is already filtered

  const surahNum = Number(match[1]);
  const ayahNum = Number(match[2]);
  const meta = surahList.find(function (s) { return s.number === surahNum; });
  if (!meta) {
    alert('There is no surah number ' + surahNum + '. Surahs go from 1 to 114.');
    return;
  }
  if (ayahNum < 1 || ayahNum > meta.totalAyahs) {
    alert(meta.nameEnglish + ' only has ' + meta.totalAyahs + ' ayahs.');
    return;
  }
  box.value = '';
  filterSurahList();
  openSingleAyah(surahNum, ayahNum);
}

let currentSingleAyahView = null; // { surah, ayah } when showing one isolated ayah

function openSingleAyah(surahNum, ayahNum, returnTo) {
  const meta = surahList.find(function (s) { return s.number === surahNum; });
  const data = window['surah' + String(surahNum).padStart(3, '0')];
  const ayah = data.ayahs.find(function (a) { return a.number === ayahNum; });
  if (!ayah) return;

  currentOpenSurah = null;
  currentOpenJuz = null;
  currentSingleAyahView = { surah: surahNum, ayah: ayahNum };
  quranReturnScreen = returnTo || 'home-screen';
  document.getElementById('download-surah-btn').classList.add('hidden');

  showScreen('reading-screen');
  document.getElementById('reading-title').textContent = meta.nameEnglish + ', Ayah ' + ayahNum;
  document.getElementById('reading-subtitle').textContent = meta.meaning;

  const bookmarks = loadJSON('bookmarks', []);
  const lang = loadJSON('translationLanguage', 'romanUrdu');
  const translitStyle = loadJSON('transliterationStyle', 'b');
  const displayMode = loadJSON('displayMode', 'both');

  document.getElementById('ayah-list').innerHTML =
    buildReadingAyahCard(surahNum, ayah, bookmarks, lang, translitStyle, displayMode);

  saveJSON('lastRead', { surah: surahNum, ayah: ayahNum });
  resetReadingScroll();
}

// ---------- Ayah of the Day ----------

function renderAyahOfDay() {
  const box = document.getElementById('ayah-of-day');

  const totalAyahs = surahList.reduce(function (sum, s) { return sum + s.totalAyahs; }, 0);

  // Same ayah all day (changes at midnight), based on the day of the year.
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - startOfYear) / 86400000);
  const targetIndex = dayOfYear % totalAyahs;

  let remaining = targetIndex;
  let chosenSurah = null;
  let chosenAyah = null;
  for (let i = 0; i < surahList.length; i++) {
    const s = surahList[i];
    if (remaining < s.totalAyahs) {
      chosenSurah = s.number;
      chosenAyah = remaining + 1;
      break;
    }
    remaining -= s.totalAyahs;
  }

  const data = window['surah' + String(chosenSurah).padStart(3, '0')];
  if (!data) {
    box.classList.add('hidden');
    return;
  }
  const meta = surahList.find(function (s) { return s.number === chosenSurah; });

  box.classList.remove('hidden');
  box.innerHTML =
    '<div class="ayah-of-day-card compact-card" onclick="openSingleAyah(' + chosenSurah + ', ' + chosenAyah + ')">' +
      '<p class="continue-label">Ayah of the day</p>' +
      '<p class="continue-title">' + meta.nameEnglish + ' \u00b7 Ayah ' + chosenAyah + '</p>' +
    '</div>';
}

// ---------- Download as HTML ----------

let downloadScope = 'surah'; // 'surah' or 'full'

function openDownloadModal(scope) {
  downloadScope = scope;
  const title = scope === 'full' ? 'Download full Quran' : 'Download this surah';
  document.getElementById('download-modal-title').textContent = title;
  document.getElementById('download-modal').classList.remove('hidden');
}

function closeDownloadModal() {
  document.getElementById('download-modal').classList.add('hidden');
}

function buildAyahHtml(ayah, mode, translitStyle, lang) {
  const translitText = translitStyle === 'b' ? ayah.transliterationB : ayah.transliteration;
  const translationText = lang === 'english' ? ayah.english : ayah.romanUrdu;

  let out = '<div class="d-ayah"><p class="d-ayah-num">Ayah ' + ayah.number + '</p>';
  if (mode === 'all' || mode === 'arabic') {
    out += '<p class="d-arabic">' + ayah.arabic + '</p>';
  }
  if ((mode === 'all' || mode === 'transliteration') && translitText) {
    out += '<p class="d-translit">' + translitText + '</p>';
  }
  if ((mode === 'all' || mode === 'translation') && translationText) {
    out += '<p class="d-translation">' + translationText + '</p>';
  }
  out += '</div>';
  return out;
}

function buildSurahSectionHtml(surahNum, mode, translitStyle, lang) {
  const meta = surahList.find(function (s) { return s.number === surahNum; });
  const data = window['surah' + String(surahNum).padStart(3, '0')];
  if (!meta || !data) return '';

  let out = '<h2 class="d-surah-title">' + surahNum + '. ' + meta.nameEnglish + ' <span class="d-surah-meaning">(' + meta.meaning + ')</span></h2>';
  out += data.ayahs.map(function (ayah) {
    return buildAyahHtml(ayah, mode, translitStyle, lang);
  }).join('');
  return out;
}

function buildDownloadDocument(bodyHtml, docTitle) {
  return '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
    '<title>' + docTitle + '</title>' +
    '<style>' +
    'body{font-family:Arial,Helvetica,sans-serif;background:#f7f3ea;color:#2a2a2a;max-width:700px;margin:0 auto;padding:20px;line-height:1.6;}' +
    'h1{font-size:22px;border-bottom:2px solid #b8934a;padding-bottom:10px;}' +
    '.d-surah-title{font-size:19px;margin-top:36px;color:#7a5a1e;border-bottom:1px solid #ddd;padding-bottom:6px;}' +
    '.d-surah-meaning{font-size:14px;font-weight:normal;color:#777;}' +
    '.d-ayah{margin:16px 0;padding-bottom:14px;border-bottom:1px solid #eee;}' +
    '.d-ayah-num{font-size:11px;color:#999;margin:0 0 8px;}' +
    '.d-arabic{direction:rtl;text-align:right;font-size:24px;line-height:2;margin:0 0 8px;font-family:"Scheherazade New","Traditional Arabic",serif;}' +
    '.d-translit{font-style:italic;color:#2f6f5e;margin:0 0 6px;font-size:15px;}' +
    '.d-translation{margin:0;font-size:15px;}' +
    '.d-footer{margin-top:40px;font-size:12px;color:#999;text-align:center;}' +
    '</style></head><body>' +
    '<h1>' + docTitle + '</h1>' +
    bodyHtml +
    '<p class="d-footer">Generated from your Al-Quran (Roman Urdu) offline app.</p>' +
    '</body></html>';
}

function triggerHtmlDownload(filename, htmlContent) {
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
}

function confirmDownload(mode) {
  const translitStyle = loadJSON('transliterationStyle', 'b');
  const lang = loadJSON('translationLanguage', 'romanUrdu');
  const modeLabel = { all: 'Full', arabic: 'Arabic-only', translation: 'Translation-only', transliteration: 'Transliteration-only' }[mode];

  if (downloadScope === 'surah') {
    const meta = surahList.find(function (s) { return s.number === currentOpenSurah; });
    const body = buildSurahSectionHtml(currentOpenSurah, mode, translitStyle, lang);
    const title = meta.nameEnglish + ' (' + modeLabel + ')';
    const html = buildDownloadDocument(body, title);
    triggerHtmlDownload(meta.nameEnglish.replace(/\s+/g, '-') + '-' + mode + '.html', html);
  } else {
    let body = '';
    for (let i = 1; i <= 114; i++) {
      body += buildSurahSectionHtml(i, mode, translitStyle, lang);
    }
    const title = 'Full Quran (' + modeLabel + ')';
    const html = buildDownloadDocument(body, title);
    triggerHtmlDownload('Full-Quran-' + mode + '.html', html);
  }

  closeDownloadModal();
}

// ---------- Hadith (Sahih al-Bukhari / Sahih Muslim) ----------

let currentHadithBook = 'bukhari';

const HADITH_BOOKS = {
  bukhari: {
    label: 'Sahih al-Bukhari',
    list: function () { return hadithBookList; },
    varPrefix: 'hadithChapter',
    chapterCount: 97
  },
  muslim: {
    label: 'Sahih Muslim',
    list: function () { return muslimBookList; },
    varPrefix: 'muslimChapter',
    chapterCount: 57
  },
  abudawud: {
    label: 'Sunan Abu Dawud',
    list: function () { return abudawudBookList; },
    varPrefix: 'abudawudChapter',
    chapterCount: 43
  },
  tirmidhi: {
    label: "Jami' at-Tirmidhi",
    list: function () { return tirmidhiBookList; },
    varPrefix: 'tirmidhiChapter',
    chapterCount: 49
  },
  ibnmajah: {
    label: 'Sunan Ibn Majah',
    list: function () { return ibnmajahBookList; },
    varPrefix: 'ibnmajahChapter',
    chapterCount: 38
  },
  nasai: {
    label: "Sunan an-Nasa'i",
    list: function () { return nasaiBookList; },
    varPrefix: 'nasaiChapter',
    chapterCount: 52
  }
};

function openHadithBook(book) {
  currentHadithBook = book;
  const info = HADITH_BOOKS[book];
  showScreen('hadith-book-screen');
  document.getElementById('hadith-book-title').textContent = info.label;
  document.getElementById('hadith-book-subtitle').textContent = info.chapterCount + ' chapters \u00b7 offline';
  document.getElementById('hadith-search-box').value = '';
  renderHadithBookList(info.list());
}

function renderHadithBookList(list) {
  const container = document.getElementById('hadith-book-list');
  container.innerHTML = list.map(function (c) {
    return (
      '<div class="surah-row" onclick="openHadithChapter(' + c.chapterId + ')">' +
        '<div class="surah-number">' + c.chapterId + '</div>' +
        '<div class="surah-info">' +
          '<p class="name">' + c.englishTitle + '</p>' +
          '<p class="meta">Hadith ' + (c.displayFirstNumber || c.firstNumber) + '\u2013' + (c.displayLastNumber || c.lastNumber) + ' &middot; ' + c.hadithCount + ' hadiths</p>' +
        '</div>' +
      '</div>'
    );
  }).join('');
}

function filterHadithBookList() {
  const query = document.getElementById('hadith-search-box').value.toLowerCase();
  const fullList = HADITH_BOOKS[currentHadithBook].list();
  const filtered = fullList.filter(function (c) {
    return c.englishTitle.toLowerCase().indexOf(query) !== -1 || String(c.chapterId).indexOf(query) !== -1;
  });
  renderHadithBookList(filtered);
}

let currentHadithLocation = null; // { book, chapterId, index } -- always points to exactly ONE hadith
let currentHadithSearchQuery = null; // { book, num, suffix } -- only set when a search returned multiple results

function searchHadithByNumber() {
  const raw = document.getElementById('hadith-number-search-box').value.trim();
  const match = raw.match(/^(\d+)\s*([a-z]?)$/i);

  if (!match) {
    alert('Type a whole hadith number, e.g. 700 (or 907b for lettered sub-numbers)');
    return;
  }
  const num = Number(match[1]);
  const suffix = match[2].toLowerCase();

  const info = HADITH_BOOKS[currentHadithBook];
  const fullList = info.list();
  const maxNumber = fullList.reduce(function (max, c) { return Math.max(max, c.lastNumber); }, 0);

  if (num > maxNumber) {
    alert(info.label + ' only has ' + maxNumber + ' hadiths.');
    return;
  }

  const matches = findAllHadithMatches(info, num, suffix);
  if (matches.length === 0) {
    alert('Could not find that hadith. Please try a different number.');
    return;
  }

  currentHadithSearchQuery = { book: currentHadithBook, num: num, suffix: suffix };
  currentHadithLocation = matches.length === 1
    ? { book: currentHadithBook, chapterId: matches[0].chapterId, index: matches[0].index }
    : null;
  currentOpenHadithChapter = null;
  hadithReturnScreen = 'hadith-book-screen';
  document.getElementById('hadith-number-search-box').value = '';

  renderHadithResults(matches, info);

  if (matches.length === 1) {
    saveJSON('hadithLastRead', { book: currentHadithBook, chapterId: matches[0].chapterId, index: matches[0].index });
  }
}

// Returns EVERY hadith matching this number (a number can legitimately belong
// to more than one distinct hadith, e.g. Tirmidhi 391 has two separate
// narrations both numbered 391 on sunnah.com) -- never just the first found.
function findAllHadithMatches(info, num, suffix) {
  const fullList = info.list();
  const candidateChapters = fullList.filter(function (c) { return num >= c.firstNumber && num <= c.lastNumber; });

  const mainMatches = [];
  const introMatches = [];
  candidateChapters.forEach(function (chapter) {
    const data = window[info.varPrefix + String(chapter.chapterId).padStart(3, '0')];
    if (!data || data.isPlaceholder) return;
    data.hadiths.forEach(function (hadith, index) {
      if (!hadithMatchesNumber(hadith, num, suffix)) return;
      const entry = { chapterId: chapter.chapterId, chapter: chapter, index: index, hadith: hadith };
      if (hadith.isIntroduction) introMatches.push(entry);
      else mainMatches.push(entry);
    });
  });
  return mainMatches.length > 0 ? mainMatches : introMatches;
}

function hadithDisplayNumber(hadith) {
  const parts = hadith.refs.map(function (r) { return r.number + (r.suffix || ''); });
  let s = parts.join(', ');
  if (hadith.isIntroduction) s = 'Introduction ' + s;
  return s;
}

function hadithMatchesNumber(hadith, num, suffix) {
  return hadith.refs.some(function (r) { return r.number === num && (r.suffix || '') === (suffix || ''); });
}

function buildHadithCard(hadith, chapter, info, bookKey, hadithBookmarks, hadithDisplayMode, chapterId, index) {
  const displayNum = hadithDisplayNumber(hadith);
  const arabicBlock = hadithDisplayMode === 'english' ? '' : '<p class="hadith-arabic-text">' + hadith.arabic + '</p>';
  const isBookmarked = hadithBookmarks.some(function (b) { return b.book === bookKey && b.chapterId === chapterId && b.index === index; });
  const starClass = isBookmarked ? 'bookmark-btn active' : 'bookmark-btn';
  const starSymbol = isBookmarked ? '\u2605' : '\u2606';
  const domId = 'hadith-' + bookKey + '-' + chapterId + '-' + index;

  return (
    '<div class="hadith-card" id="' + domId + '">' +
      '<div class="hadith-number-banner">' + info.label + ' ' + displayNum + '</div>' +
      '<div class="hadith-card-body">' +
        '<div class="hadith-narrator-row">' +
          '<span class="hadith-narrator-icon">&#128173;</span>' +
          (hadith.narrator ? '<p class="hadith-narrator">' + hadith.narrator + '</p>' : '<span></span>') +
          '<button class="' + starClass + '" onclick="toggleHadithBookmark(\'' + bookKey + '\',' + chapterId + ',' + index + ')">' + starSymbol + '</button>' +
        '</div>' +
        arabicBlock +
        '<p class="hadith-english-text">' + hadith.english + '</p>' +
        (hadith.grade ? '<p class="hadith-grade">Grade: ' + hadith.grade + '</p>' : '') +
      '</div>' +
    '</div>'
  );
}

// Renders one hadith, or several when a number is genuinely shared by more
// than one distinct hadith -- each card is independently identified and
// bookmarkable via its own (chapterId, index), so nothing is ambiguous.
function renderHadithResults(matches, info) {
  showScreen('hadith-reading-screen');
  const hadithDisplayMode = loadJSON('hadithDisplayMode', 'english');
  const hadithBookmarks = loadJSON('hadithBookmarks', []);

  if (matches.length === 1) {
    document.getElementById('hadith-reading-title').textContent = 'Hadith ' + hadithDisplayNumber(matches[0].hadith);
    document.getElementById('hadith-reading-subtitle').textContent = info.label + ' \u00b7 ' + matches[0].chapter.englishTitle;
  } else {
    document.getElementById('hadith-reading-title').textContent = matches.length + ' hadiths found';
    document.getElementById('hadith-reading-subtitle').textContent = info.label + ' \u00b7 this number is shared by more than one hadith';
  }

  document.getElementById('hadith-list').innerHTML = matches.map(function (m) {
    return buildHadithCard(m.hadith, m.chapter, info, currentHadithBook, hadithBookmarks, hadithDisplayMode, m.chapterId, m.index);
  }).join('');

  resetReadingScroll();
}

function openHadithAtLocation(book, chapterId, index, returnTo) {
  currentHadithBook = book;
  hadithReturnScreen = returnTo || hadithReturnScreen || 'hadith-home-screen';

  const info = HADITH_BOOKS[book];
  const chapter = info.list().find(function (c) { return c.chapterId === chapterId; });
  const data = window[info.varPrefix + String(chapterId).padStart(3, '0')];
  if (!chapter || !data) return;
  const hadith = data.hadiths[index];
  if (!hadith) return;

  currentHadithLocation = { book: book, chapterId: chapterId, index: index };
  currentHadithSearchQuery = null;
  currentOpenHadithChapter = null;

  renderHadithResults([{ chapterId: chapterId, chapter: chapter, index: index, hadith: hadith }], info);

  saveJSON('hadithLastRead', { book: book, chapterId: chapterId, index: index });
}

function openHadithChapter(chapterId) {
  currentOpenHadithChapter = chapterId;
  currentHadithLocation = null;
  currentHadithSearchQuery = null;
  hadithReturnScreen = 'hadith-book-screen';
  const info = HADITH_BOOKS[currentHadithBook];
  const meta = info.list().find(function (c) { return c.chapterId === chapterId; });
  const data = window[info.varPrefix + String(chapterId).padStart(3, '0')];

  showScreen('hadith-reading-screen');
  document.getElementById('hadith-reading-title').textContent = meta.englishTitle;
  document.getElementById('hadith-reading-subtitle').textContent = info.label + ' \u00b7 ' + meta.hadithCount + ' hadiths';

  const list = document.getElementById('hadith-list');

  if (!data) {
    list.innerHTML = '<div class="empty-state"><p>This chapter\'s data is not available yet.</p></div>';
    return;
  }

  if (data.isPlaceholder) {
    list.innerHTML =
      '<div class="empty-state">' +
        '<p>This book (sunnah.com hadiths ' + meta.firstNumber + '-' + meta.lastNumber + ') is not ' +
        'available in this app\'s data source -- an entire book missing from the digitized ' +
        'source used to build this, not a bug in the app.</p>' +
      '</div>';
    return;
  }

  const hadithDisplayMode = loadJSON('hadithDisplayMode', 'english');
  const hadithBookmarks = loadJSON('hadithBookmarks', []);
  const bookKey = currentHadithBook;

  saveJSON('hadithLastRead', { book: currentHadithBook, chapterId: chapterId, index: 0 });

  list.innerHTML = data.hadiths.map(function (h, index) {
    return buildHadithCard(h, meta, info, bookKey, hadithBookmarks, hadithDisplayMode, chapterId, index);
  }).join('');

  resetReadingScroll();
}

// ---------- Hadith settings: display mode + font sizes ----------

function setHadithDisplayMode(mode) {
  saveJSON('hadithDisplayMode', mode);
  applyHadithDisplayMode();
  rerenderCurrentHadithView();
}

function rerenderCurrentHadithView() {
  if (currentHadithSearchQuery) {
    const info = HADITH_BOOKS[currentHadithSearchQuery.book];
    const matches = findAllHadithMatches(info, currentHadithSearchQuery.num, currentHadithSearchQuery.suffix);
    if (matches.length) renderHadithResults(matches, info);
  } else if (currentHadithLocation) {
    openHadithAtLocation(currentHadithLocation.book, currentHadithLocation.chapterId, currentHadithLocation.index);
  } else if (currentOpenHadithChapter) {
    openHadithChapter(currentOpenHadithChapter);
  }
}

function applyHadithDisplayMode() {
  const mode = loadJSON('hadithDisplayMode', 'english');
  document.getElementById('hadith-display-both').classList.toggle('active', mode === 'both');
  document.getElementById('hadith-display-english').classList.toggle('active', mode === 'english');
}

function applyHadithFontSizes() {
  const arabicSize = loadJSON('hadithArabicFontSize', 22);
  const englishSize = loadJSON('hadithEnglishFontSize', 15);
  document.documentElement.style.setProperty('--hadith-arabic-font-size', arabicSize + 'px');
  document.documentElement.style.setProperty('--hadith-english-font-size', englishSize + 'px');
  document.getElementById('hadith-arabic-size-value').textContent = arabicSize + 'px';
  document.getElementById('hadith-english-size-value').textContent = englishSize + 'px';
  document.getElementById('hadith-arabic-size-slider').value = arabicSize;
  document.getElementById('hadith-english-size-slider').value = englishSize;
}

function onHadithArabicSizeChange(value) {
  saveJSON('hadithArabicFontSize', Number(value));
  applyHadithFontSizes();
}

function onHadithEnglishSizeChange(value) {
  saveJSON('hadithEnglishFontSize', Number(value));
  applyHadithFontSizes();
}

function toggleHadithBookmark(book, chapterId, index) {
  let bookmarks = loadJSON('hadithBookmarks', []);
  const idx = bookmarks.findIndex(function (b) { return b.book === book && b.chapterId === chapterId && b.index === index; });
  let nowBookmarked;
  if (idx >= 0) {
    bookmarks.splice(idx, 1);
    nowBookmarked = false;
  } else {
    bookmarks.push({ book: book, chapterId: chapterId, index: index });
    nowBookmarked = true;
  }
  saveJSON('hadithBookmarks', bookmarks);

  const btn = document.querySelector('#hadith-' + book + '-' + chapterId + '-' + index + ' .bookmark-btn');
  if (btn) {
    btn.classList.toggle('active', nowBookmarked);
    btn.textContent = nowBookmarked ? '\u2605' : '\u2606';
  }
}

// ---------- Hadith: Continue Reading ----------

function renderContinueReadingHadith() {
  const box = document.getElementById('hadith-continue-reading');
  const lastRead = loadJSON('hadithLastRead', null);
  if (!lastRead || lastRead.chapterId === undefined) {
    box.classList.add('hidden');
    box.innerHTML = '';
    return;
  }
  const info = HADITH_BOOKS[lastRead.book];
  const chapter = info.list().find(function (c) { return c.chapterId === lastRead.chapterId; });
  const data = window[info.varPrefix + String(lastRead.chapterId).padStart(3, '0')];
  const hadith = data && data.hadiths[lastRead.index];
  if (!chapter || !hadith) {
    box.classList.add('hidden');
    box.innerHTML = '';
    return;
  }
  box.classList.remove('hidden');
  box.innerHTML =
    '<div class="continue-card compact-card" onclick="openHadithAtLocation(\'' + lastRead.book + '\', ' + lastRead.chapterId + ', ' + lastRead.index + ')">' +
      '<p class="continue-label">Continue reading</p>' +
      '<p class="continue-title">' + info.label + ' \u00b7 Hadith ' + hadithDisplayNumber(hadith) + '</p>' +
    '</div>';
}

// ---------- Hadith of the Day ----------

function pickHadithByFlatIndex(info, flatIndex) {
  const list = info.list();
  let remaining = flatIndex;
  for (let i = 0; i < list.length; i++) {
    const c = list[i];
    if (!c.hadithCount) continue;
    if (remaining < c.hadithCount) {
      const data = window[info.varPrefix + String(c.chapterId).padStart(3, '0')];
      if (!data) return null;
      return { chapterId: c.chapterId, chapter: c, index: remaining, hadith: data.hadiths[remaining] };
    }
    remaining -= c.hadithCount;
  }
  return null;
}

function renderHadithOfDay() {
  const box = document.getElementById('hadith-of-day');

  const bookKeys = Object.keys(HADITH_BOOKS);
  const bookTotals = bookKeys.map(function (key) {
    return HADITH_BOOKS[key].list().reduce(function (s, c) { return s + c.hadithCount; }, 0);
  });
  const combinedTotal = bookTotals.reduce(function (a, b) { return a + b; }, 0);

  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - startOfYear) / 86400000);
  let targetIndex = dayOfYear % combinedTotal;

  let book, flatIndex;
  for (let i = 0; i < bookKeys.length; i++) {
    if (targetIndex < bookTotals[i]) {
      book = bookKeys[i];
      flatIndex = targetIndex;
      break;
    }
    targetIndex -= bookTotals[i];
  }

  const info = HADITH_BOOKS[book];
  const picked = pickHadithByFlatIndex(info, flatIndex);
  if (!picked) {
    box.classList.add('hidden');
    return;
  }

  box.classList.remove('hidden');
  box.innerHTML =
    '<div class="hadith-of-day-card compact-card" onclick="openHadithAtLocation(\'' + book + '\', ' + picked.chapterId + ', ' + picked.index + ')">' +
      '<p class="continue-label">Hadith of the day</p>' +
      '<p class="continue-title">' + info.label + ' \u00b7 Hadith ' + hadithDisplayNumber(picked.hadith) + '</p>' +
    '</div>';
}

// ---------- Salah Times ----------

const PRAYER_LABELS = [
  { key: 'fajr', label: 'Fajr' },
  { key: 'sunrise', label: 'Sunrise' },
  { key: 'dhuhr', label: 'Dhuhr' },
  { key: 'asr', label: 'Asr' },
  { key: 'maghrib', label: 'Maghrib' },
  { key: 'isha', label: 'Isha' }
];

const DEFAULT_SALAH_LOCATION = { name: 'Faridabad', state: 'Haryana', lat: 28.4089, lng: 77.3178 };

function detectLocation() {
  if (!('geolocation' in navigator)) {
    alert('Your browser does not support location detection. You can still work, just without auto-detected Salah times.');
    return;
  }
  document.getElementById('salah-location-text').textContent = 'Detecting your location...';
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const loc = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        name: 'Current location'
      };
      saveJSON('salahLocation', loc);
      renderSalahScreen();
    },
    function () {
      document.getElementById('salah-location-text').textContent =
        'Could not detect location. Check your device location permission and try again.';
    }
  );
}

function filterCityOptions() {
  const query = document.getElementById('city-search-box').value.trim().toLowerCase();
  const optionsBox = document.getElementById('city-options');

  if (!query) {
    optionsBox.classList.add('hidden');
    optionsBox.innerHTML = '';
    return;
  }

  const matches = indianCities.filter(function (c) {
    return c.name.toLowerCase().indexOf(query) === 0;
  }).slice(0, 8);

  if (matches.length === 0) {
    optionsBox.innerHTML = '<div class="city-option-empty">No matching city found.</div>';
    optionsBox.classList.remove('hidden');
    return;
  }

  optionsBox.innerHTML = matches.map(function (c) {
    return (
      '<div class="city-option" onclick="selectCity(\'' + c.name.replace(/'/g, "\\'") + '\', \'' + c.state.replace(/'/g, "\\'") + '\', ' + c.lat + ', ' + c.lng + ')">' +
        c.name + ', <span class="city-option-state">' + c.state + '</span>' +
      '</div>'
    );
  }).join('');
  optionsBox.classList.remove('hidden');
}

function selectCity(name, state, lat, lng) {
  saveJSON('salahLocation', { name: name, state: state, lat: lat, lng: lng });
  document.getElementById('city-search-box').value = '';
  document.getElementById('city-options').classList.add('hidden');
  document.getElementById('city-options').innerHTML = '';
  renderSalahScreen();
}

function getCalculationParams() {
  const method = loadJSON('salahCalcMethod', 'karachi');
  let params;
  if (method === 'mwl') {
    params = adhan.CalculationMethod.MuslimWorldLeague();
  } else if (method === 'ummalqura') {
    params = adhan.CalculationMethod.UmmAlQura();
  } else {
    params = adhan.CalculationMethod.Karachi();
  }
  const madhab = loadJSON('salahAsrMadhab', 'hanafi');
  params.madhab = madhab === 'shafi' ? adhan.Madhab.Shafi : adhan.Madhab.Hanafi;
  return params;
}

function renderSalahScreen() {
  const dateEl = document.getElementById('salah-date');
  const today = new Date();
  dateEl.textContent = today.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  // reflect current toggle states
  const madhab = loadJSON('salahAsrMadhab', 'hanafi');
  document.getElementById('asr-hanafi').classList.toggle('active', madhab === 'hanafi');
  document.getElementById('asr-shafi').classList.toggle('active', madhab === 'shafi');

  const method = loadJSON('salahCalcMethod', 'karachi');
  document.getElementById('calc-karachi').classList.toggle('active', method === 'karachi');
  document.getElementById('calc-mwl').classList.toggle('active', method === 'mwl');
  document.getElementById('calc-ummalqura').classList.toggle('active', method === 'ummalqura');

  const loc = loadJSON('salahLocation', DEFAULT_SALAH_LOCATION);
  const locationText = document.getElementById('salah-location-text');
  const timesList = document.getElementById('salah-times-list');

  const nameLine = loc.name
    ? loc.name + (loc.state ? ', ' + loc.state : '')
    : 'Lat ' + loc.lat.toFixed(3) + ', Lng ' + loc.lng.toFixed(3);
  locationText.textContent = nameLine;

  const coordinates = new adhan.Coordinates(loc.lat, loc.lng);
  const params = getCalculationParams();
  const prayerTimes = new adhan.PrayerTimes(coordinates, today, params);

  timesList.innerHTML = PRAYER_LABELS.map(function (p) {
    const time = prayerTimes[p.key];
    const timeStr = time.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' });
    return (
      '<div class="prayer-row">' +
        '<span class="prayer-name">' + p.label + '</span>' +
        '<span class="prayer-time">' + timeStr + '</span>' +
      '</div>'
    );
  }).join('');
}

function setAsrMadhab(value) {
  saveJSON('salahAsrMadhab', value);
  renderSalahScreen();
}

function setCalcMethod(value) {
  saveJSON('salahCalcMethod', value);
  renderSalahScreen();
}

// ---------- Display mode (Both / Arabic only / Translation only) ----------

function setDisplayMode(mode) {
  saveJSON('displayMode', mode);
  applyDisplayMode();
  if (currentSingleAyahView) {
    openSingleAyah(currentSingleAyahView.surah, currentSingleAyahView.ayah);
  } else if (currentOpenSurah) {
    openSurah(currentOpenSurah);
  }
}

function applyDisplayMode() {
  const mode = loadJSON('displayMode', 'both');
  document.getElementById('display-both').classList.toggle('active', mode === 'both');
  document.getElementById('display-arabic').classList.toggle('active', mode === 'arabic');
  document.getElementById('display-translation').classList.toggle('active', mode === 'translation');
  document.getElementById('display-transliteration').classList.toggle('active', mode === 'transliteration');
}

// ---------- Theme (Midnight Navy / Charcoal / Sepia) ----------

const THEME_BG_COLORS = {
  navy: '#0a0e1a',
  charcoal: '#0d0d0d',
  sepia: '#f5ecd9'
};

function setTheme(theme) {
  saveJSON('theme', theme);
  applyTheme();
}

function applyTheme() {
  const theme = loadJSON('theme', 'navy');
  if (theme === 'navy') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', theme);
  }
  document.getElementById('theme-color-meta').setAttribute('content', THEME_BG_COLORS[theme] || THEME_BG_COLORS.navy);

  document.getElementById('theme-navy').classList.toggle('active', theme === 'navy');
  document.getElementById('theme-charcoal').classList.toggle('active', theme === 'charcoal');
  document.getElementById('theme-sepia').classList.toggle('active', theme === 'sepia');
}

// ---------- Transliteration style (A vs B) ----------

function setTransliterationStyle(style) {
  saveJSON('transliterationStyle', style);
  applyTransliterationStyle();
  if (currentSingleAyahView) {
    openSingleAyah(currentSingleAyahView.surah, currentSingleAyahView.ayah);
  } else if (currentOpenSurah) {
    openSurah(currentOpenSurah);
  }
}

function applyTransliterationStyle() {
  const style = loadJSON('transliterationStyle', 'b');
  document.getElementById('translit-a').classList.toggle('active', style === 'a');
  document.getElementById('translit-b').classList.toggle('active', style === 'b');
}

// ---------- Translation language (Roman Urdu vs English) ----------

function setTranslationLanguage(lang) {
  saveJSON('translationLanguage', lang);
  applyTranslationLanguage();
  if (currentSingleAyahView) {
    openSingleAyah(currentSingleAyahView.surah, currentSingleAyahView.ayah);
  } else if (currentOpenSurah) {
    openSurah(currentOpenSurah); // re-render the open surah with the new language
  }
}

function applyTranslationLanguage() {
  const lang = loadJSON('translationLanguage', 'romanUrdu');
  document.getElementById('lang-romanUrdu').classList.toggle('active', lang === 'romanUrdu');
  document.getElementById('lang-english').classList.toggle('active', lang === 'english');
}

// ---------- Arabic font style (Nastaliq vs Uthmani) ----------

function setArabicFontStyle(style) {
  saveJSON('arabicFontStyle', style);
  applyArabicFontStyle();
}

function applyArabicFontStyle() {
  const style = loadJSON('arabicFontStyle', 'nastaliq');
  let fontFamily;
  if (style === 'uthmani') {
    fontFamily = '"Scheherazade New", serif';
  } else if (style === 'indopak') {
    fontFamily = '"Indopak Nastaleeq", "Noto Nastaliq Urdu", serif';
  } else {
    fontFamily = '"Noto Nastaliq Urdu", serif';
  }
  document.documentElement.style.setProperty('--arabic-font-family', fontFamily);

  document.getElementById('font-nastaliq').classList.toggle('active', style === 'nastaliq');
  document.getElementById('font-indopak').classList.toggle('active', style === 'indopak');
  document.getElementById('font-uthmani').classList.toggle('active', style === 'uthmani');
}

// ---------- Startup ----------

surahList.forEach(function (s) {
  s.hasTranslation = !!window['surah' + String(s.number).padStart(3, '0')];
});

renderSurahList(surahList);
renderContinueReading();
renderAyahOfDay();
applyTheme();
applyFontSizes();
applyArabicFontStyle();
applyTranslationLanguage();
applyTransliterationStyle();
applyDisplayMode();
applyHadithDisplayMode();
applyHadithFontSizes();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('sw.js').catch(function () {
      // offline caching just won't be available -- app still works online
    });
  });
}
