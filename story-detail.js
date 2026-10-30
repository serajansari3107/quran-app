// ---------- Quran Story Mode: detail screen renderer (Step 1B) ----------
// Yeh file Story screen khulne par hi load hoti hai (story-mode.js se). Content data/story/NNN-*.js se aata hai.
// Arabic text aur "App ka tarjuma" app ke existing surah data files se runtime par padhe jaate hain (duplicate nahi).

var storyDetailTab = 'story';

function sdEsc(text) {
  return String(text == null ? '' : text).replace(/[&<>"']/g, function (ch) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
  });
}

function sdAyahData(surahNum, ayahNum) {
  const d = window['surah' + String(surahNum).padStart(3, '0')];
  if (!d || !d.ayahs) return null;
  return d.ayahs.find(function (a) { return a.number === ayahNum; }) || null;
}

function sdSurahName(surahNum) {
  const m = (typeof surahList !== 'undefined') ? surahList.find(function (s) { return s.number === surahNum; }) : null;
  return m ? m.nameEnglish : '';
}

function sdChips(ayahs) {
  return '<div class="sm-ayah-chips">' + ayahs.map(function (n) {
    return '<span class="sm-ayah-chip">Ayah ' + n + '</span>';
  }).join('') + '</div>';
}

function sdAyahBox(surahNum, ayahNum) {
  const a = sdAyahData(surahNum, ayahNum);
  if (!a) return '';
  const arabic = String(a.arabic || '').replace(/\uFEFF/g, '').trim();
  return '<div class="sm-ayah-box">' +
    '<div class="sm-ayah-head"><span class="sm-ayah-num">' + ayahNum + '</span><span class="sm-ayah-ref">' + surahNum + ':' + ayahNum + '</span></div>' +
    '<p class="arabic-text sm-arabic">' + sdEsc(arabic) + '</p>' +
    (a.transliterationB ? '<p class="sm-translit">' + sdEsc(a.transliterationB) + '</p>' : '') +
    (a.romanUrdu ? '<p class="sm-trans-label">App ka tarjuma (Roman Urdu)</p><p class="sm-trans">' + sdEsc(a.romanUrdu) + '</p>' : '') +
    '</div>';
}

function sdRefs(refs) {
  if (!refs || !refs.length) return '';
  return '<div class="sm-refs"><p class="sm-refs-title">Mazeed Quran hawale</p>' + refs.map(function (r) {
    const a = sdAyahData(r[0], r[1]);
    const name = sdSurahName(r[0]);
    return '<details class="sm-ref"><summary>Quran ' + r[0] + ':' + r[1] + (name ? ' (' + sdEsc(name) + ')' : '') + '</summary>' +
      '<p>' + (a && a.romanUrdu ? '<span class="sm-trans-label">App ka tarjuma</span><br>' + sdEsc(a.romanUrdu) : 'Is ayah ka tarjuma app mein abhi maujood nahi.') + '</p></details>';
  }).join('') + '</div>';
}

function sdSrc(list) {
  if (!list || !list.length) return '';
  return '<p class="sm-src"><strong>Hawala:</strong> ' + list.map(sdEsc).join(' &middot; ') + '</p>';
}

// ---------- Mark as read (storage helpers story-mode.js mein hain) ----------
function sdReadIcon() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle class="sm-read-ring" cx="12" cy="12" r="9.5"/><path class="sm-read-tick" d="M7.5 12.5l3 3 6-6.5"/></svg>';
}

// Chhota "Mark as read" button. part = 0 matlab poori Surah (Parts na ho to), warna Part number.
function sdReadBtn(number, part) {
  const on = storyIsRead(number, part);
  return '<button type="button" class="sm-read-btn' + (on ? ' is-read' : '') + '" data-surah="' + number + '" data-part="' + (part || 0) + '"' +
    ' aria-pressed="' + (on ? 'true' : 'false') + '" onclick="toggleStoryRead(' + number + ',' + (part || 0) + ')">' +
    sdReadIcon() + '<span class="sm-read-label">' + (on ? 'Read' : 'Mark as read') + '</span></button>';
}

function sdReadRow(number, part) {
  return '<div class="sm-read-row">' + sdReadBtn(number, part) + '</div>';
}

// Padhne ke baad neeche wali bar
function sdReadBottom(number, part) {
  return '<div class="sm-read-bottom"><p>' + (part ? 'Is Part ko padh liya?' : 'Story padh li?') + '</p>' + sdReadBtn(number, part) + '</div>';
}

// Parts list ke upar: "3 of 24 Parts read" + chhoti progress bar
function sdReadProgress(number, data) {
  const total = data.parts.length;
  const done = storyReadCount(number);
  return '<div class="sm-read-progress"><span>' + (done === total ? '\u2713 All ' + total + ' Parts read' : done + ' of ' + total + ' Parts read') + '</span>' +
    '<span class="sm-read-progress-bar" aria-hidden="true"><span style="width:' + Math.round(done * 100 / total) + '%"></span></span></div>';
}

// Button dabane par: save karo, phir us Surah/Part ke saare buttons ek saath badal do
function toggleStoryRead(number, part) {
  const next = !storyIsRead(number, part || 0);
  if (!storySetRead(number, part || 0, next)) {
    showToast('Could not save (storage unavailable)');
    return;
  }
  document.querySelectorAll('.sm-read-btn[data-surah="' + number + '"][data-part="' + (part || 0) + '"]').forEach(function (btn) {
    btn.classList.toggle('is-read', next);
    btn.setAttribute('aria-pressed', next ? 'true' : 'false');
    btn.querySelector('.sm-read-label').textContent = next ? 'Read' : 'Mark as read';
  });
  if (typeof storyUpdateReadBadges === 'function') storyUpdateReadBadges();
  showToast(next ? 'Marked as read \u2713' : 'Removed from read');
}

function sdHero(meta, data) {
  const art = (typeof storyThumb === 'function')
    ? storyThumb(meta.number).replace('<svg ', '<svg preserveAspectRatio="xMidYMid slice" ')
    : '';
  return '<section class="sm-hero">' +
    '<div class="sm-hero-banner">' + art + '<span class="sm-hero-fade"></span></div>' +
    '<div class="sm-hero-body">' +
      '<div class="sm-hero-top">' +
        '<span class="sm-hero-num">' + meta.number + '</span>' +
        '<div><p class="sm-hero-kicker">SURAH ' + String(meta.number).padStart(2, '0') + '</p>' +
        '<h2 class="sm-hero-name">' + sdEsc(meta.nameEnglish) + '</h2>' +
        '<p class="sm-hero-meaning">' + sdEsc(meta.meaning) + '</p></div>' +
      '</div>' +
      '<div class="sm-hero-chips">' + (data.chips || []).map(function (c) { return '<span>' + sdEsc(c) + '</span>'; }).join('') + '</div>' +
      '<p class="sm-hero-intro">' + sdEsc(data.intro) + '</p>' +
      (data.names ? '<p class="sm-hero-names">' + sdEsc(data.names) + '</p>' : '') +
    '</div></section>';
}

function sdStoryPanel(data, surahNum) {
  let html = '';
  html += '<div class="sm-note">' + sdEsc(data.disclaimer) + '</div>';
  html += '<div class="sm-note sm-note-gold">' + sdEsc(data.ayahNote) + '</div>';

  html += '<section class="sm-flow"><p class="sm-flow-title">Surah ka bahao</p><div class="sm-flow-steps">' +
    data.flow.map(function (f, i) {
      return (i ? '<span class="sm-flow-arrow" aria-hidden="true">&rsaquo;</span>' : '') +
        '<div class="sm-flow-step"><p class="sm-flow-ayahs">' + sdEsc(f.ayahs) + '</p><p class="sm-flow-label">' + sdEsc(f.label) + '</p><p class="sm-flow-text">' + sdEsc(f.text) + '</p></div>';
    }).join('') + '</div><p class="sm-flow-note">' + sdEsc(data.flowNote) + '</p></section>';

  data.sections.forEach(function (s) {
    html += '<article class="sm-sec">' +
      '<header class="sm-sec-head"><span class="sm-sec-n">' + s.n + '</span><h3>' + sdEsc(s.title) + '</h3></header>' +
      sdChips(s.ayahs) +
      s.boxes.map(function (n) { return sdAyahBox(surahNum, n); }).join('') +
      s.paras.map(function (p) { return '<p class="sm-para">' + sdEsc(p) + '</p>'; }).join('') +
      '<div class="sm-key"><strong>Yaad rakhein</strong><p>' + sdEsc(s.key) + '</p></div>' +
      sdRefs(s.refs) + sdSrc(s.src) +
      '</article>';
  });

  html += '<article class="sm-sec sm-sec-summary"><header class="sm-sec-head"><h3>' + sdEsc(data.summary.title) + '</h3></header>' +
    '<p class="sm-para">' + sdEsc(data.summary.text) + '</p>' + sdSrc(data.summary.src) + '</article>';
  return html;
}

function sdSamjhoPanel(data) {
  return '<p class="sm-panel-intro">Zaroori lafzon aur ayat ko alag alag aasaan karke samjha gaya hai.</p>' +
    data.concepts.map(function (c) {
      return '<article class="sm-card-concept">' +
        '<header class="sm-sec-head"><h3>' + sdEsc(c.title) + '</h3></header>' +
        sdChips(c.ayahs) +
        '<div class="sm-block"><p class="sm-block-h">Seedha matlab</p><p>' + sdEsc(c.simple) + '</p></div>' +
        (c.parts ? '<div class="sm-parts">' + c.parts.map(function (p) {
          return '<div class="sm-part"><p class="sm-part-h">' + sdEsc(p.h) + '</p><p>' + sdEsc(p.t) + '</p></div>';
        }).join('') + '</div>' : '') +
        '<div class="sm-block"><p class="sm-block-h">Ayat ke context mein</p><p>' + sdEsc(c.context) + '</p></div>' +
        '<div class="sm-block"><p class="sm-block-h">Tafsir ka context</p><p>' + sdEsc(c.note) + '</p></div>' +
        sdRefs(c.refs) + sdSrc(c.src) +
        '</article>';
    }).join('');
}

function sdLessonsPanel(data) {
  return '<p class="sm-panel-intro">Surah se seedha judne wale amli sabaq.</p>' +
    data.lessons.map(function (l, i) {
      return '<article class="sm-card-lesson">' +
        '<header class="sm-sec-head"><span class="sm-sec-n">' + (i + 1) + '</span><h3>' + sdEsc(l.title) + '</h3></header>' +
        sdChips(l.ayahs) +
        '<div class="sm-block"><p class="sm-block-h">Surah aur tafsir se</p><p>' + sdEsc(l.fromSurah) + '</p></div>' +
        '<div class="sm-block sm-block-amal"><p class="sm-block-h">Amal mein (amli mashwara)</p><p>' + sdEsc(l.amal) + '</p></div>' +
        sdSrc(l.src) + '</article>';
    }).join('') +
    '<div class="sm-note sm-note-gold">' + sdEsc(data.lessonsNote) + '</div>';
}

function sdSources(data) {
  return '<details class="sm-sources"><summary>Hawale aur verification</summary>' +
    '<ul>' + data.sources.map(function (s) {
      return '<li><strong>' + sdEsc(s.name) + '</strong><br><span>' + sdEsc(s.detail) + '</span><br>' +
        s.links.map(function (l) {
          return '<a href="' + sdEsc(l.url) + '" target="_blank" rel="noopener noreferrer">' + sdEsc(l.label) + '</a>';
        }).join(' ') + '</li>';
    }).join('') + '</ul>' +
    '<p class="sm-src">Is content ka kisi aalim se review nahi hua. Tafsir aur hadith ke hawale upar diye gaye pages se padhe gaye hain (baaz pages secondary / mirror sites par hain). Koi ghalti nazar aaye to zaroor bataiye.</p>' +
    '</details>';
}

function switchStoryTab(name) {
  storyDetailTab = name;
  ['story', 'samjho', 'lessons'].forEach(function (t) {
    const btn = document.getElementById('story-tab-' + t);
    const panel = document.getElementById('story-panel-' + t);
    if (!btn || !panel) return;
    const on = t === name;
    btn.setAttribute('aria-selected', on ? 'true' : 'false');
    btn.setAttribute('tabindex', on ? '0' : '-1');
    btn.classList.toggle('active', on);
    panel.classList.toggle('hidden', !on);
  });
  const tabs = document.getElementById('story-tabs');
  if (tabs && tabs.getBoundingClientRect().top < 0 && tabs.scrollIntoView) tabs.scrollIntoView({ block: 'start' });
}

function storyTabKey(event, name) {
  const order = ['story', 'samjho', 'lessons'];
  let i = order.indexOf(name);
  if (event.key === 'ArrowRight') i = (i + 1) % order.length;
  else if (event.key === 'ArrowLeft') i = (i + order.length - 1) % order.length;
  else return;
  event.preventDefault();
  switchStoryTab(order[i]);
  const b = document.getElementById('story-tab-' + order[i]);
  if (b) b.focus();
}

function renderStoryDetail(number) {
  const root = document.getElementById('story-detail-root');
  const data = window['storyData' + String(number).padStart(3, '0')];
  const meta = surahList.find(function (s) { return s.number === number; });
  if (!root || !data || !meta) return;
  if (typeof storyArtDefs === 'function' && !document.getElementById('smg-glow')) {
    root.insertAdjacentHTML('beforebegin', storyArtDefs());
  }
  if (data.parts) { renderStoryParts(number, data, meta); return; } // Parts System (lambi Surahs)
  const tab = function (id, label) {
    return '<button type="button" role="tab" id="story-tab-' + id + '" class="sm-tab" aria-controls="story-panel-' + id + '" aria-selected="false" tabindex="-1"' +
      ' onclick="switchStoryTab(\'' + id + '\')" onkeydown="storyTabKey(event,\'' + id + '\')">' + label + '</button>';
  };
  root.innerHTML = sdHero(meta, data) + sdReadRow(number, 0) +
    '<div id="story-tabs" class="sm-tabs" role="tablist" aria-label="Story Mode sections">' +
      tab('story', 'Story') + tab('samjho', 'Samjho') + tab('lessons', 'Lessons') + '</div>' +
    '<div id="story-panel-story" class="sm-panel" role="tabpanel" aria-labelledby="story-tab-story">' + sdStoryPanel(data, number) + '</div>' +
    '<div id="story-panel-samjho" class="sm-panel hidden" role="tabpanel" aria-labelledby="story-tab-samjho">' + sdSamjhoPanel(data) + '</div>' +
    '<div id="story-panel-lessons" class="sm-panel hidden" role="tabpanel" aria-labelledby="story-tab-lessons">' + sdLessonsPanel(data) + '</div>' +
    sdReadBottom(number, 0) +
    sdSources(data);
  switchStoryTab('story');
}

// ---------- Parts System (lambi Surahs ke liye, jaise Al-Baqarah) ----------
// Jis Surah ke story data mein "parts" ho, uska content yahan se dikhta hai. Al-Fatiha (bina parts) upar wale rasta se hi chalti hai.
// Data format: data/story/002-al-baqarah.js dekhein (groups, parts[ {n,from,to,g,title,sub,heads,intro,points,key,src,samjho,lessons} ]).
var storyPartCurrent = 0; // 0 = Parts ki list

function sdPartRange(p) {
  return p.from === p.to ? 'Ayah ' + p.from : 'Ayah ' + p.from + '\u2013' + p.to;
}

function sdScrollTop() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function sdPartsList(number, data) {
  let html = sdReadProgress(number, data) + '<div class="sm-note">' + sdEsc(data.disclaimer) + '</div>' +
    '<div class="sm-note sm-note-gold">' + sdEsc(data.partsNote) + '</div>';
  let lastGroup = 0;
  data.parts.forEach(function (p) {
    if (p.g !== lastGroup) {
      lastGroup = p.g;
      const g = data.groups[p.g - 1];
      if (g) {
        html += '<div class="sm-group"><h3 class="sm-group-h">' + sdEsc(g.title) + '</h3>' +
          '<p class="sm-group-r">' + sdEsc(sdPartRange(g)) + '</p><p class="sm-group-t">' + sdEsc(g.text) + '</p></div>';
      }
    }
    const partRead = storyIsRead(number, p.n);
    html += '<button type="button" class="sm-part-card' + (partRead ? ' sm-part-read' : '') + '" onclick="openStoryPart(' + number + ',' + p.n + ')">' +
      '<span class="sm-part-badge">' + p.n + '</span>' +
      '<span class="sm-part-info"><span class="sm-part-title">' + sdEsc(p.title) + '</span>' +
      '<span class="sm-part-sub">' + sdEsc(p.sub) + '</span>' +
      '<span class="sm-part-range">' + sdEsc(sdPartRange(p)) + '</span></span>' +
      (partRead ? '<span class="sm-part-tick" role="img" aria-label="Read">' + sdReadIcon() + '</span>' : '') +
      '<span class="sm-part-go" aria-hidden="true">&rsaquo;</span></button>';
  });
  return html;
}

function sdPartStoryPanel(part, number) {
  let html = '<div class="sm-note sm-note-gold">Is Part ki hadd: ' + sdEsc(sdPartRange(part)) +
    '. Yeh hadd Tafsir Ibn Kathir ke tafsir-entries par hai. Us hisse ke unwan (English): ' +
    sdEsc(part.heads.join(' \u00b7 ')) + '</div>';
  html += '<p class="sm-para">' + sdEsc(part.intro) + '</p>';
  part.points.forEach(function (pt, i) {
    const boxes = [];
    for (let a = pt.r[0]; a <= pt.r[1]; a++) boxes.push(sdAyahBox(number, a));
    const rangeLabel = pt.r[0] === pt.r[1] ? 'Ayah ' + pt.r[0] : 'Ayah ' + pt.r[0] + '\u2013' + pt.r[1];
    html += '<article class="sm-sec">' +
      '<header class="sm-sec-head"><span class="sm-sec-n">' + (i + 1) + '</span><h3>' + sdEsc(pt.h) + '</h3></header>' +
      '<div class="sm-ayah-chips"><span class="sm-ayah-chip">' + sdEsc(rangeLabel) + '</span></div>' +
      '<p class="sm-para">' + sdEsc(pt.t) + '</p>' +
      '<details class="sm-ref sm-ayat-open"><summary>Ayat dekhein (' + sdEsc(rangeLabel) + ')</summary>' + boxes.join('') + '</details>' +
      '</article>';
  });
  html += '<article class="sm-sec sm-sec-summary"><header class="sm-sec-head"><h3>Is Part ka khulasa</h3></header>' +
    '<p class="sm-para">' + sdEsc(part.key) + '</p>' + sdSrc(part.src) + '</article>';
  return html;
}

function sdPartView(number, data, part) {
  const tab = function (id, label) {
    return '<button type="button" role="tab" id="story-tab-' + id + '" class="sm-tab" aria-controls="story-panel-' + id + '" aria-selected="false" tabindex="-1"' +
      ' onclick="switchStoryTab(\'' + id + '\')" onkeydown="storyTabKey(event,\'' + id + '\')">' + label + '</button>';
  };
  const total = data.parts.length;
  const prev = part.n > 1 ? '<button type="button" class="sm-part-nav-btn" onclick="openStoryPart(' + number + ',' + (part.n - 1) + ')">&lsaquo; Pichla Part</button>' : '<span></span>';
  const next = part.n < total ? '<button type="button" class="sm-part-nav-btn" onclick="openStoryPart(' + number + ',' + (part.n + 1) + ')">Agla Part &rsaquo;</button>' : '<span></span>';
  return '<button type="button" class="sm-part-back" onclick="showStoryParts(' + number + ')">&larr; Saare Parts</button>' +
    '<section class="sm-part-hero"><p class="sm-hero-kicker">PART ' + part.n + ' / ' + total + ' \u00b7 ' + sdEsc(sdPartRange(part)) + '</p>' +
    '<h2 class="sm-part-hero-title">' + sdEsc(part.title) + '</h2><p class="sm-hero-meaning">' + sdEsc(part.sub) + '</p>' + sdReadRow(number, part.n) + '</section>' +
    '<div id="story-tabs" class="sm-tabs" role="tablist" aria-label="Story Mode sections">' +
      tab('story', 'Story') + tab('samjho', 'Samjho') + tab('lessons', 'Lessons') + '</div>' +
    '<div id="story-panel-story" class="sm-panel" role="tabpanel" aria-labelledby="story-tab-story">' + sdPartStoryPanel(part, number) + '</div>' +
    '<div id="story-panel-samjho" class="sm-panel hidden" role="tabpanel" aria-labelledby="story-tab-samjho">' + sdSamjhoPanel({ concepts: part.samjho }) + '</div>' +
    '<div id="story-panel-lessons" class="sm-panel hidden" role="tabpanel" aria-labelledby="story-tab-lessons">' + sdLessonsPanel({ lessons: part.lessons, lessonsNote: data.lessonsNote }) + '</div>' +
    sdReadBottom(number, part.n) +
    '<div class="sm-part-nav">' + prev + next + '</div>' +
    sdSources(data);
}

function showStoryParts(number) {
  const root = document.getElementById('story-detail-root');
  const data = window['storyData' + String(number).padStart(3, '0')];
  const meta = surahList.find(function (s) { return s.number === number; });
  if (!root || !data || !meta || !data.parts) return;
  storyPartCurrent = 0;
  root.innerHTML = sdHero(meta, data) + sdPartsList(number, data) + sdSources(data);
  sdScrollTop();
}

function openStoryPart(number, n) {
  const root = document.getElementById('story-detail-root');
  const data = window['storyData' + String(number).padStart(3, '0')];
  if (!root || !data || !data.parts) return;
  const part = data.parts.find(function (p) { return p.n === n; });
  if (!part) return;
  storyPartCurrent = n;
  root.innerHTML = sdPartView(number, data, part);
  switchStoryTab('story');
  sdScrollTop();
}

function renderStoryParts(number, data, meta) {
  showStoryParts(number);
}