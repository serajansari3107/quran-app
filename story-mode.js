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

function buildStoryLibrary() {
  if (storyLibraryBuilt) return;
  const grid = document.getElementById('story-grid');
  if (!grid || typeof surahList === 'undefined') return;

  grid.innerHTML = surahList.map(function (s) {
    const ready = storyIsAvailable(s.number);
    return '<button type="button" class="sm-card ' + (ready ? 'sm-card-available' : 'sm-card-soon') + '"' +
      ' onclick="onStoryCardTap(' + s.number + ')"' +
      ' aria-label="' + storyEscape(s.nameEnglish) + (ready ? ', Available' : ', Coming Soon') + '">' +
      '<span class="sm-card-num">' + s.number + '</span>' +
      '<p class="sm-card-name">' + storyEscape(s.nameEnglish) + '</p>' +
      '<p class="sm-card-meaning">' + storyEscape(s.meaning) + '</p>' +
      '<span class="sm-chip">' + (ready ? 'Available' : 'Coming Soon') + '</span>' +
      '</button>';
  }).join('');

  const availableCount = surahList.filter(function (s) { return storyIsAvailable(s.number); }).length;
  const note = document.getElementById('story-lib-note');
  if (note) {
    note.textContent = availableCount + ' Available \u00b7 ' + (surahList.length - availableCount) + ' Coming Soon';
  }
  storyLibraryBuilt = true;
}

function openStoryLibrary() {
  buildStoryLibrary();
  showScreen('story-library-screen');
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
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