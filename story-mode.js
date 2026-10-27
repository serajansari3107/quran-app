// ---------- Quran Story Mode (Step 1A) ----------
// Naya file. Yeh app.js ke BAAD load hota hai (showScreen, showToast, surahList use karta hai).
// Step 1A: sirf Story Library (114 cards) + Al-Fatiha ki khaali story screen.
// Story ka content Step 1B mein aayega.

// Jin Surahs ki story ready hai (abhi sirf Al-Fatiha = 1).
const STORY_AVAILABLE_SURAHS = [1];

let storyLibraryBuilt = false;

function storyIsAvailable(number) {
  return STORY_AVAILABLE_SURAHS.indexOf(number) !== -1;
}

function storyEscape(text) {
  return String(text).replace(/[&<>"']/g, function (ch) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
  });
}

let storyArtPromise = null;

// Illustrations (story-art.js) sirf pehli baar Library kholne par load hoti hain -- startup slow nahi hota.
function ensureStoryArt() {
  if (typeof storyThumb === 'function') return Promise.resolve();
  if (!storyArtPromise) {
    storyArtPromise = new Promise(function (resolve) {
      const script = document.createElement('script');
      script.src = 'story-art.js';
      script.onload = function () { resolve(); };
      script.onerror = function () { storyArtPromise = null; resolve(); };
      document.head.appendChild(script);
    });
  }
  return storyArtPromise;
}

function buildStoryLibrary() {
  if (storyLibraryBuilt) return;
  const grid = document.getElementById('story-grid');
  if (!grid || typeof surahList === 'undefined') return;

  const artReady = typeof storyThumb === 'function';
  if (artReady && !document.getElementById('smg-glow')) {
    grid.insertAdjacentHTML('beforebegin', storyArtDefs());
  }

  grid.innerHTML = surahList.map(function (s) {
    const ready = storyIsAvailable(s.number);
    const thumb = artReady ? storyThumb(s.number) : '<span class="sm-thumb-fallback">' + s.number + '</span>';
    return '<button type="button" class="sm-card ' + (ready ? 'sm-card-available' : 'sm-card-soon') + '"' +
      ' onclick="onStoryCardTap(' + s.number + ')"' +
      ' aria-label="' + storyEscape(s.nameEnglish) + (ready ? ', Available' : ', Coming Soon') + '">' +
      '<span class="sm-thumb">' + thumb + '</span>' +
      '<span class="sm-card-info">' +
      '<span class="sm-card-top">SURAH ' + String(s.number).padStart(2, '0') + '</span>' +
      '<span class="sm-card-name">' + storyEscape(s.nameEnglish) + '</span>' +
      '<span class="sm-card-meaning">' + storyEscape(s.meaning) + '</span>' +
      '<span class="sm-chip">' + (ready ? 'Available' : 'Coming Soon') + '</span>' +
      '</span>' +
      (ready ? '<span class="sm-card-arrow" aria-hidden="true">\u203a</span>' : '') +
      '</button>';
  }).join('');

  const availableCount = surahList.filter(function (s) { return storyIsAvailable(s.number); }).length;
  const note = document.getElementById('story-lib-note');
  if (note) {
    note.textContent = availableCount + ' Available \u00b7 ' + (surahList.length - availableCount) + ' Coming Soon';
  }
  // Agar art file load nahi ho payi to agli baar dobara try hoga.
  storyLibraryBuilt = artReady;
}

function openStoryLibrary() {
  showScreen('story-library-screen');
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  ensureStoryArt().then(buildStoryLibrary);
}

function onStoryCardTap(number) {
  if (!storyIsAvailable(number)) {
    showToast('Coming Soon');
    return;
  }
  openStory(number);
}

function openStory(number) {
  const meta = surahList.find(function (s) { return s.number === number; });
  if (!meta) return;
  document.getElementById('story-title').textContent = meta.nameEnglish;
  document.getElementById('story-subtitle').textContent = 'Surah ' + meta.number + ' \u00b7 ' + meta.meaning + ' \u00b7 ' + meta.totalAyahs + ' ayahs';
  document.getElementById('story-hero-num').textContent = meta.number;
  document.getElementById('story-hero-name').textContent = meta.nameEnglish;
  document.getElementById('story-hero-meaning').textContent = meta.meaning;
  showScreen('story-screen');
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}