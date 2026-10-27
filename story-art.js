// ---------- Quran Story Mode: Surah thumbnails (inline SVG, no image files) ----------
// Har Surah ke theme ke hisaab se alag illustration. Sirf nature, landscape, architecture aur
// symbols -- koi Nabi/Allah/sacred shakhsiyat ya insaani chehra depict nahi kiya gaya.
// Yeh file Library khulne par hi load hoti hai (startup slow nahi hota).
(function () {
  var G = '#D6B56D', W = '#F3E3B3', B = '#3B82F6', C = '#8FB4F5', L = '#E9EEF7', N = '#0B2147',
      M = '#12305C', K = '#071426', R = '#C9873F', E = '#3F9F7A', S = '#C9A36B', D = '#8A5A3C', P = '#8B6BB0';

  // ---- tiny helpers ----
  function T(d, f, x) { return '<path d="' + d + '" fill="' + f + '"' + (x || '') + '/>'; }
  function O(d, s, w, x) { return '<path d="' + d + '" fill="none" stroke="' + s + '" stroke-width="' + (w || 2) + '" stroke-linecap="round" stroke-linejoin="round"' + (x || '') + '/>'; }
  function Ci(x, y, r, f, x2) { return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + f + '"' + (x2 || '') + '/>'; }
  function Re(x, y, w, h, f, r, x2) { return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '"' + (r ? ' rx="' + r + '"' : '') + ' fill="' + f + '"' + (x2 || '') + '/>'; }
  function El(x, y, rx, ry, f, x2) { return '<ellipse cx="' + x + '" cy="' + y + '" rx="' + rx + '" ry="' + ry + '" fill="' + f + '"' + (x2 || '') + '/>'; }
  function glow(x, y, r, op) { return Ci(x, y, r, 'url(#smg-glow)', ' opacity="' + (op == null ? 1 : op) + '"'); }
  function r1(n) { return Math.round(n * 10) / 10; }
  function poly(cx, cy, R, r, n, rot) {
    var d = '';
    for (var i = 0; i < n * 2; i++) {
      var rad = i % 2 === 0 ? R : r, a = (rot || 0) + i * Math.PI / n - Math.PI / 2;
      d += (i ? 'L' : 'M') + r1(cx + rad * Math.cos(a)) + ' ' + r1(cy + rad * Math.sin(a));
    }
    return d + 'Z';
  }
  function star4(x, y, r) { return T('M' + x + ' ' + (y - r) + ' Q' + x + ' ' + y + ' ' + (x + r) + ' ' + y + ' Q' + x + ' ' + y + ' ' + x + ' ' + (y + r) + ' Q' + x + ' ' + y + ' ' + (x - r) + ' ' + y + ' Q' + x + ' ' + y + ' ' + x + ' ' + (y - r) + 'Z', W); }
  function cres(cx, cy, r, f) {
    var ax = r1(cx + 0.3 * r), ay = r1(cy - 0.95 * r), by = r1(cy + 0.95 * r), ri = r1(r * 0.8);
    return T('M' + ax + ' ' + ay + ' A' + r + ' ' + r + ' 0 1 0 ' + ax + ' ' + by + ' A' + ri + ' ' + ri + ' 0 1 1 ' + ax + ' ' + ay + 'Z', f || L);
  }
  function flame(x, y, s, f) { return T('M' + x + ' ' + y + ' Q' + (x - 4 * s) + ' ' + (y - 5 * s) + ' ' + x + ' ' + (y - 11 * s) + ' Q' + (x + 4 * s) + ' ' + (y - 5 * s) + ' ' + x + ' ' + y + 'Z', f || G); }
  function rays(cx, cy, r0, r1_, n, col, w, a0, a1) {
    var d = '', i, a;
    for (i = 0; i < n; i++) {
      a = a0 + (a1 - a0) * (n === 1 ? 0 : i / (n - 1));
      d += 'M' + r1(cx + r0 * Math.cos(a)) + ' ' + r1(cy + r0 * Math.sin(a)) + 'L' + r1(cx + r1_ * Math.cos(a)) + ' ' + r1(cy + r1_ * Math.sin(a));
    }
    return O(d, col, w);
  }
  function gear(cx, cy, r, n, col) {
    var s = Ci(cx, cy, r, col), i;
    for (i = 0; i < n; i++) s += Re(cx - r * 0.16, cy - r * 1.28, r * 0.32, r * 0.36, col, 1, ' transform="rotate(' + r1(i * 360 / n) + ' ' + cx + ' ' + cy + ')"');
    return s + Ci(cx, cy, r * 0.42, K) + Ci(cx, cy, r * 0.16, col);
  }
  function spiral(cx, cy, rEnd, turns, off, col, w) {
    var d = '', i, steps = 60, a, rr;
    for (i = 0; i <= steps; i++) {
      a = off + i / steps * turns * 2 * Math.PI; rr = 2 + (rEnd - 2) * i / steps;
      d += (i ? 'L' : 'M') + r1(cx + rr * Math.cos(a)) + ' ' + r1(cy + rr * Math.sin(a));
    }
    return O(d, col, w);
  }
  function bird(x, y, s, c) { return O('M' + r1(x - 6 * s) + ' ' + y + ' Q' + r1(x - 3 * s) + ' ' + r1(y - 5 * s) + ' ' + x + ' ' + y + ' Q' + r1(x + 3 * s) + ' ' + r1(y - 5 * s) + ' ' + r1(x + 6 * s) + ' ' + y, c || L, 2); }
  function pArch(w, h, col, sw) {
    return O('M' + (44 - w) + ' 70 V' + r1(70 - h * 0.55) + ' Q' + (44 - w) + ' ' + r1(70 - h * 0.9) + ' 44 ' + (70 - h) + ' Q' + (44 + w) + ' ' + r1(70 - h * 0.9) + ' ' + (44 + w) + ' ' + r1(70 - h * 0.55) + ' V70', col, sw || 2.4);
  }
  function loop(n, fn) { var s = '', i; for (i = 0; i < n; i++) s += fn(i); return s; }

  // ---- skies (shared gradients) ----
  var SKY = {
    night: ['#071426', '#12305C'], dawn: ['#12305C', '#D6B56D'], day: ['#1F4F9C', '#8FB4F5'], noon: ['#3B82F6', '#F3E3B3'],
    dusk: ['#0B2147', '#B9774A'], storm: ['#0A1B33', '#47597A'], deep: ['#0B2147', '#1479A8'], sand: ['#1D3A6B', '#E3C487'],
    emerald: ['#0B2F3A', '#2F8F7A'], cosmic: ['#05101F', '#34307A'], cave: ['#040B16', '#1A2A45'], gold: ['#3A2E12', '#D6B56D']
  };
  var GCOL = {
    night: ['#12305C', '#0A1B33'], dawn: ['#7A5A45', '#3B2F33'], day: ['#2B5FAE', '#143B73'], noon: ['#C9A36B', '#8A6A3C'],
    dusk: ['#4A3550', '#1F1A35'], storm: ['#1D2A42', '#0D1626'], deep: ['#0D4F78', '#0A2F4F'], sand: ['#C9A36B', '#A67C45'],
    emerald: ['#1F6B5A', '#0F4A3D'], cosmic: ['#1D1B4F', '#0D0B2E'], cave: ['#0F1B30', '#07101E'], gold: ['#8A6A2C', '#4A3A18']
  };
  var STARRY = { night: 1, dusk: 1, cosmic: 1, cave: 1, dawn: 1 };
  var CLOUDY = { day: 1, noon: 1, sand: 1 };

  function rnd(seed) { var s = seed * 9301 + 49297; return function () { s = (s * 9301 + 49297) % 233280; return s / 233280; }; }

  function decor(sky, seed) {
    var r = rnd(seed + 3), out = '', i, n;
    if (STARRY[sky]) {
      n = sky === 'cosmic' ? 16 : 9;
      for (i = 0; i < n; i++) out += Ci(r1(4 + r() * 80), r1(4 + r() * 38), r1(0.5 + r() * 1.1), W, ' opacity="' + r1(0.35 + r() * 0.6) + '"');
    } else if (CLOUDY[sky]) {
      for (i = 0; i < 2; i++) {
        var cx = 14 + r() * 60, cy = 12 + r() * 14;
        out += El(r1(cx), r1(cy), 11, 3.6, '#FFFFFF', ' opacity=".35"') + El(r1(cx + 5), r1(cy - 3), 7, 3.6, '#FFFFFF', ' opacity=".35"');
      }
    } else if (sky === 'deep') {
      for (i = 0; i < 8; i++) out += Ci(r1(6 + r() * 76), r1(8 + r() * 50), r1(0.8 + r() * 1.8), 'none', ' stroke="' + C + '" stroke-width=".7" opacity=".6"');
    } else if (sky === 'emerald') {
      for (i = 0; i < 8; i++) out += Ci(r1(6 + r() * 76), r1(6 + r() * 40), r1(0.6 + r() * 0.9), G, ' opacity=".7"');
    } else if (sky === 'storm') {
      out += El(18, 14, 18, 5, '#000', ' opacity=".25"') + El(66, 10, 20, 5, '#000', ' opacity=".25"');
    } else if (sky === 'gold') {
      out += rays(44, 44, 26, 60, 9, '#FFFFFF', 1, -Math.PI * 0.95, -Math.PI * 0.05).replace('stroke-width="1"', 'stroke-width="1" opacity=".18"');
    }
    return out;
  }

  // ---- ground ----
  function ground(kind, sky, seed) {
    var c = GCOL[sky], a = (seed % 5) - 2, b = (seed % 3) - 1;
    switch (kind) {
      case 'dunes': return T('M0 ' + (64 + a) + ' Q20 54 38 62 T76 ' + (60 + b) + ' T88 62 V88 H0Z', c[0]) + T('M0 ' + (74 + b) + ' Q26 64 48 72 T88 ' + (70 + a) + ' V88 H0Z', c[1]);
      case 'hills': return T('M0 ' + (66 + a) + ' Q22 ' + (52 + a) + ' 44 64 T88 ' + (62 + b) + ' V88 H0Z', c[0]) + T('M0 ' + (76 + b) + ' Q30 ' + (66 + a) + ' 56 74 T88 72 V88 H0Z', c[1]);
      case 'grass': return T('M0 ' + (68 + a) + ' Q24 56 46 66 T88 ' + (64 + b) + ' V88 H0Z', c[0]) + T('M0 78 Q30 70 58 77 T88 74 V88 H0Z', c[1]);
      case 'mountains': return T('M0 70 L18 ' + (48 + a) + ' L34 66 L52 ' + (44 + b) + ' L70 66 L88 ' + (52 + a) + ' V88 H0Z', c[0]) + T('M0 80 L24 66 L44 78 L66 64 L88 78 V88 H0Z', c[1]);
      case 'waves': return T('M0 ' + (66 + a) + ' Q11 60 22 66 T44 66 T66 66 T88 66 V88 H0Z', c[0], ' opacity=".9"') + T('M0 76 Q11 70 22 76 T44 76 T66 76 T88 76 V88 H0Z', c[1]);
      case 'rocks': return T('M0 70 L10 ' + (58 + a) + ' L22 66 L34 ' + (56 + b) + ' L48 68 L62 ' + (58 + a) + ' L76 66 L88 ' + (60 + b) + ' V88 H0Z', c[0]) + T('M0 80 L20 72 L40 80 L62 72 L88 80 V88 H0Z', c[1]);
      case 'water': return Re(0, 64, 88, 24, c[0], 0, ' opacity=".85"') + O('M8 70 H30 M44 74 H74 M14 80 H40', L, 1, ' opacity=".35"');
      default: return '';
    }
  }

  // ---- motifs: 88 x 88 space ----
  var M_ = {
    rehal: function () { return glow(44, 34, 26, 0.9) + O('M30 68 L44 52 L58 68', G, 2.5) + T('M20 34 Q32 30 44 36 V58 Q32 52 20 56Z', L) + T('M68 34 Q56 30 44 36 V58 Q56 52 68 56Z', W) + O('M44 36 V58', G, 1.5) + O('M25 41 Q32 39 39 42 M25 46 Q32 44 39 47 M25 51 Q32 49 39 52 M49 42 Q56 39 63 41 M49 47 Q56 44 63 46 M49 52 Q56 49 63 51', B, 1.2) + T(poly(44, 18, 6, 2.6, 8, 0), G); },
    cow: function () { return Re(22, 38, 38, 17, L, 8) + Re(54, 33, 16, 13, L, 6) + T('M56 34 L52 27 L59 31Z', G) + T('M68 34 L73 27 L66 32Z', G) + Re(26, 50, 5, 16, L, 2) + Re(36, 50, 5, 16, L, 2) + Re(48, 50, 5, 16, L, 2) + Re(56, 50, 5, 16, L, 2) + Ci(32, 44, 4, B) + Ci(44, 42, 3.5, B) + El(68, 42, 4, 3, '#E3B7A0') + O('M22 42 Q15 46 17 56', L, 2) + Ci(17, 57, 2, G) + Ci(62, 38, 1.3, K); },
    house: function () { return glow(44, 48, 28, 0.5) + T('M26 68 V44 Q26 30 44 30 Q62 30 62 44 V68Z', M, ' stroke="' + G + '" stroke-width="2"') + T('M35 68 V51 Q35 42 44 42 Q53 42 53 51 V68Z', G) + T('M32 30 Q44 10 56 30Z', G) + Ci(44, 9, 2, G) + O('M22 70 H66', S, 2); },
    heart: function () { return glow(44, 44, 28, 0.6) + T('M44 64 C22 48 22 28 35 28 C41 28 44 32 44 36 C44 32 47 28 53 28 C66 28 66 48 44 64Z', B) + O('M32 34 Q29 39 31 44', C, 2) + T('M54 33 A7 7 0 1 0 60 44 A5.6 5.6 0 1 1 54 33Z', G) + star4(25, 22, 4) + star4(66, 20, 3); },
    table: function () { return El(44, 60, 30, 7, G) + El(44, 57, 25, 5, W) + Ci(33, 50, 6, R) + Ci(46, 47, 7.5, E) + Ci(57, 51, 5.5, '#C0504D') + El(41, 41, 8, 4, '#D9A66A', ' transform="rotate(-12 41 41)"') + O('M46 40 Q50 34 56 34', E, 2) + Re(40, 63, 8, 6, D); },
    sheep: function () { return Ci(30, 46, 9, L) + Ci(40, 40, 10, L) + Ci(52, 41, 10, L) + Ci(60, 48, 8, L) + Ci(42, 50, 10, L) + Ci(52, 52, 8, L) + El(68, 48, 6, 7.5, M) + El(63, 40, 2.4, 4.5, M, ' transform="rotate(-30 63 40)"') + Ci(69, 46, 1.2, W) + O('M34 58 V68 M44 60 V68 M54 60 V68 M60 56 V68', M, 3); },
    heights: function () { return glow(44, 40, 30, 0.35) + T('M6 70 L26 30 L42 54 L60 26 L82 70Z', M, ' stroke="' + C + '" stroke-width="1"') + T('M26 30 L20 41 L26 38 L31 42Z', L) + T('M60 26 L53 38 L60 35 L66 40Z', L) + Re(36, 50, 16, 18, N, 0, ' stroke="' + G + '" stroke-width="1.4"') + Re(36, 46, 4, 4, G) + Re(42, 46, 4, 4, G) + Re(48, 46, 4, 4, G) + T('M42 68 V60 Q44 55 46 60 V68Z', G); },
    banner: function () { return glow(54, 36, 26, 0.4) + O('M32 20 V70', L, 2.5) + T('M32 22 Q46 16 56 24 Q66 30 76 24 V46 Q66 52 56 46 Q46 40 32 46Z', G) + cres(52, 34, 7, K) + Ci(32, 18, 2.8, G) + Re(26, 66, 12, 4, S, 1); },
    gate: function () { return glow(44, 46, 30, 0.8) + O('M44 36 V10 M32 38 L24 18 M56 38 L64 18', G, 1.6, ' opacity=".8"') + T('M24 68 V42 Q24 24 44 24 Q64 24 64 42 V68Z', M, ' stroke="' + G + '" stroke-width="2"') + T('M34 68 V44 Q34 36 44 36 Q54 36 54 44 V68Z', W) + T('M34 68 V44 Q34 36 40 35 V66Z', N) + Re(22, 66, 44, 3, S); },
    whale: function () { return O('M30 32 Q30 22 24 18 M30 32 Q30 22 36 18', L, 1.8) + T('M12 46 Q22 30 44 34 Q60 38 68 34 L80 24 L78 40 L82 50 L68 46 Q58 58 38 58 Q18 58 12 46Z', B) + T('M18 50 Q40 60 64 50 Q50 58 30 57Z', C) + Ci(24, 43, 1.8, K) + O('M16 50 Q22 52 28 50', K, 1); },
    winddunes: function () { return O('M12 30 Q28 22 42 30 T72 28 Q80 28 78 36 Q74 40 70 36', L, 3) + O('M10 44 Q26 36 40 44 T70 42', L, 3, ' opacity=".8"') + O('M18 54 Q32 48 44 54 T66 52', L, 2.5, ' opacity=".6"') + Ci(78, 50, 1.4, G) + Ci(74, 56, 1, G) + Ci(16, 24, 1.2, G); },
    dream: function () { return glow(24, 24, 16, 0.9) + Ci(24, 24, 7, G) + T('M62 14 A9 9 0 1 0 66 32 A7.2 7.2 0 1 1 62 14Z', L) + loop(11, function (i) { return Ci(14 + i * 6, r1(48 - Math.sin(i / 10 * Math.PI) * 14), 1.7, W); }) + Re(32, 54, 24, 12, S) + El(44, 54, 12, 4, K, ' stroke="' + G + '" stroke-width="1.4"') + El(44, 55, 8, 2, B); },
    storm: function () { return T('M20 40 Q16 28 30 28 Q34 16 48 20 Q58 16 62 28 Q74 30 68 40Z', L, ' opacity=".92"') + T('M46 40 L37 55 H46 L40 70 L58 48 H49 L55 40Z', G) + O('M24 48 l-3 7 M60 46 l-3 7 M68 50 l-3 7', C, 1.6, ' opacity=".7"'); },
    kaaba: function () { return El(44, 66, 36, 7, 'none', ' stroke="' + G + '" stroke-width="1.2" stroke-dasharray="1 4" opacity=".8"') + T('M26 34 L36 30 H72 L62 34Z', N) + T('M62 34 L72 30 V58 L62 64Z', M) + Re(26, 34, 36, 30, K, 0, ' stroke="' + G + '" stroke-width="1.2"') + Re(26, 40, 36, 5, G) + Re(34, 50, 8, 14, G, 1) + glow(44, 18, 14, 0.5); },
    cliffs: function () { return T('M4 70 V30 L20 24 L24 36 L36 22 V70Z', '#B08A58') + T('M52 70 V36 L66 26 L72 34 L86 30 V70Z', '#A37D4D') + T('M10 66 V52 Q10 44 16 44 Q22 44 22 52 V66Z', K) + T('M26 66 V58 Q26 52 31 52 Q36 52 36 58 V66Z', K) + T('M58 66 V54 Q58 46 65 46 Q72 46 72 54 V66Z', K) + Re(8, 40, 16, 3, '#8A6A3C') + Re(56, 42, 18, 3, '#8A6A3C') + Re(76, 52, 6, 14, K, 3); },
    bee: function () { return loop(4, function (i) { return T(poly(18 + (i % 2) * 22 + (i > 1 ? 11 : 0), 20 + (i > 1 ? 18 : 0), 9, 9, 3, 0.52), 'none', ' stroke="' + G + '" stroke-width="1.2" opacity=".5"'); }) + El(40, 32, 8, 5.5, L, ' opacity=".75" transform="rotate(-25 40 32)"') + El(50, 32, 8, 5.5, L, ' opacity=".75" transform="rotate(25 50 32)"') + El(44, 46, 14, 9.5, G) + O('M38 39 V53 M45 38 V54 M52 40 V52', K, 3.5) + Ci(58, 45, 5.2, K) + O('M60 41 Q64 34 69 34', K, 1.3) + T('M30 46 L23 44 L30 48Z', K) + Ci(60, 44, 1.2, W); },
    aqsa: function () { return O('M6 28 Q24 10 40 16', L, 1.5, ' stroke-dasharray="2 3"') + cres(70, 20, 8, L) + Re(22, 50, 44, 18, M, 0, ' stroke="' + G + '" stroke-width="1.4"') + loop(5, function (i) { return T('M' + (26 + i * 8) + ' 68 V60 Q' + (28 + i * 8) + ' 56 ' + (30 + i * 8) + ' 60 V68Z', G); }) + Re(30, 40, 28, 10, N, 0, ' stroke="' + G + '" stroke-width="1.2"') + T('M32 40 Q32 20 44 20 Q56 20 56 40Z', G) + O('M44 20 V11', G, 1.5); },
    cave: function () { return T('M6 70 Q10 30 44 26 Q78 30 82 70Z', '#34445F') + T('M30 70 Q30 44 44 44 Q58 44 58 70Z', K) + El(44, 64, 11, 6, G, ' opacity=".55"') + glow(44, 62, 14, 0.9) + Ci(14, 40, 4, E, ' opacity=".8"') + Ci(72, 38, 3.5, E, ' opacity=".8"') + Ci(24, 34, 3, '#2A7A5A'); },
    palm: function () { return O('M42 70 Q48 52 44 34', D, 5) + O('M44 34 Q30 26 16 36', E, 3.5) + O('M44 34 Q34 20 22 20', E, 3.5) + O('M44 34 Q58 26 72 36', E, 3.5) + O('M44 34 Q54 20 66 20', E, 3.5) + O('M44 34 Q44 20 44 12', E, 3.5) + Ci(40, 39, 2.4, R) + Ci(46, 40, 2.4, R) + Ci(43, 43, 2.4, R) + O('M16 68 Q44 60 72 68', C, 2); },
    lantern: function () { return glow(44, 42, 28, 0.8) + O('M44 8 V18', G, 1.6) + T('M36 22 Q44 14 52 22Z', G) + T('M34 24 H54 L58 36 V54 L54 62 H34 L30 54 V36Z', M, ' stroke="' + G + '" stroke-width="1.8"') + flame(44, 54, 2.2, G) + Re(32, 62, 24, 4, G, 1); },
    beacons: function () { return T('M6 70 L26 44 L44 56 L62 30 L82 70Z', M) + glow(26, 38, 12, 1) + flame(26, 44, 1.5, G) + glow(44, 50, 12, 1) + flame(44, 56, 1.5, G) + glow(62, 24, 14, 1) + flame(62, 30, 1.8, G); },
    tents: function () { return T('M6 62 L28 32 L50 62Z', S) + Re(27, 22, 3, 10, L) + T('M22 70 L32 52 L42 70Z', L) + T('M40 70 L50 50 L60 70Z', L) + T('M58 70 L66 54 L74 70Z', L) + T('M30 70 L32 62 L34 70Z', K) + T('M48 70 L50 60 L52 70Z', K); },
    rug: function () { return Re(26, 22, 36, 46, B, 3, ' stroke="' + G + '" stroke-width="2"') + T('M33 64 V42 Q33 30 44 30 Q55 30 55 42 V64Z', 'none', ' stroke="' + G + '" stroke-width="2"') + O('M44 30 V24', G, 1.4) + flame(44, 40, 1.4, W) + O('M30 18 V22 M36 18 V22 M42 18 V22 M48 18 V22 M54 18 V22 M60 18 V22', G, 1.4) + O('M30 68 V72 M36 68 V72 M42 68 V72 M48 68 V72 M54 68 V72 M60 68 V72', G, 1.4); },
    nichelamp: function () { return glow(44, 46, 26, 1) + T('M26 70 V38 Q26 18 44 18 Q62 18 62 38 V70Z', N, ' stroke="' + G + '" stroke-width="2"') + T('M44 36 Q36 46 38 56 H50 Q52 46 44 36Z', G) + Re(36, 56, 16, 3, G, 1) + O('M44 20 V30', G, 1) + rays(44, 48, 14, 24, 8, G, 1, -Math.PI * 0.9, -Math.PI * 0.1); },
    split: function () { return Ci(44, 42, 22, K) + T('M44 20 A22 22 0 0 0 44 64Z', G) + O('M44 18 V66', W, 1.5) + Ci(44, 42, 22, 'none', ' stroke="' + G + '" stroke-width="1.6"') + Ci(30, 40, 3.4, W, ' opacity=".9"') + star4(57, 34, 4) + Ci(54, 52, 1.2, C) + Ci(62, 44, 1, C); },
    quill: function () { return Re(22, 42, 40, 22, W, 3) + El(22, 53, 3, 11, L) + El(62, 53, 3, 11, L) + O('M28 49 H56 M28 54 H56 M28 59 H48', B, 1.4) + T('M72 14 Q56 20 44 42 L49 45 Q64 34 72 14Z', G) + O('M70 16 Q58 30 46 43', K, 1, ' opacity=".5"'); },
    ant: function () { return T('M10 64 Q44 34 78 64 Q44 74 10 64Z', E) + O('M14 64 Q44 56 74 64', '#2A7A5A', 1.4) + Ci(34, 52, 3.4, K) + Ci(43, 50, 4, K) + Ci(53, 49.5, 5, K) + O('M43 52 L39 60 M46 52 L46 60 M50 52 L54 60 M36 54 L31 60 M55 53 L61 59', K, 1.4) + O('M57 45 Q61 39 65 39 M56 45 Q58 39 61 35', K, 1.2); },
    scroll: function () { return Re(26, 20, 36, 46, W, 3) + El(44, 20, 20, 4, L) + El(44, 66, 20, 4, L) + O('M32 30 H56 M32 36 H56 M32 42 H56 M32 48 H50 M32 54 H56', B, 1.6) + Ci(54, 58, 4.2, R) + O('M20 18 V24 M68 62 V68', G, 1.5); },
    web: function () { return O('M44 2 V38', L, 1.2) + loop(8, function (i) { var a = i * Math.PI / 4; return O('M44 42 L' + r1(44 + 28 * Math.cos(a)) + ' ' + r1(42 + 28 * Math.sin(a)), L, 1, ' opacity=".8"'); }) + T(poly(44, 42, 10, 10, 4, 0), 'none', ' stroke="' + L + '" stroke-width="1" opacity=".8"') + T(poly(44, 42, 18, 18, 4, 0), 'none', ' stroke="' + L + '" stroke-width="1" opacity=".8"') + T(poly(44, 42, 26, 26, 4, 0), 'none', ' stroke="' + L + '" stroke-width="1" opacity=".8"') + O('M38 38 L32 34 M50 38 L56 34 M38 46 L32 50 M50 46 L56 50', G, 1.2) + Ci(44, 42, 3.8, G); },
    columns: function () { return T('M12 30 L44 14 L76 30Z', L) + Re(12, 30, 64, 4, W) + loop(3, function (i) { var x = 24 + i * 20; return Re(x - 5, 34, 10, 30, L) + Re(x - 7, 31, 14, 4, W) + Re(x - 7, 64, 14, 4, W) + O('M' + (x - 2) + ' 36 V62 M' + (x + 2) + ' 36 V62', C, 0.8, ' opacity=".7"'); }); },
    tree: function () { return Re(41, 48, 6, 22, D, 1) + O('M44 54 L36 46 M44 56 L53 47', D, 3) + Ci(44, 34, 16, E) + Ci(32, 42, 10, E) + Ci(56, 42, 10, E) + Ci(44, 24, 9, '#58B894') + Ci(38, 34, 2.2, G) + Ci(52, 38, 2.2, G) + Ci(44, 42, 2.2, G) + Ci(60, 44, 2, G) + Ci(28, 44, 2, G); },
    mihrab: function () { return glow(44, 40, 28, 0.5) + T('M22 70 V42 Q22 22 44 10 Q66 22 66 42 V70Z', N, ' stroke="' + G + '" stroke-width="2"') + T('M30 70 V44 Q30 30 44 22 Q58 30 58 44 V70Z', M) + O('M44 22 V70 M44 30 Q36 38 30 46 M44 30 Q52 38 58 46', G, 1, ' opacity=".6"') + O('M44 24 V34', G, 1) + T('M40 34 H48 L46 42 H42Z', G); },
    trench: function () { return T('M26 62 H62 L54 78 H34Z', K) + T('M4 62 L10 50 L16 62Z', L) + T('M14 62 L20 52 L26 62Z', L) + T('M62 62 L68 50 L74 62Z', L) + T('M72 62 L78 52 L84 62Z', L) + cres(44, 24, 9, L) + O('M38 62 L44 74 L50 62', G, 1.2, ' opacity=".6"'); },
    dam: function () { return Ci(8, 50, 9, E) + Re(7, 52, 3, 14, D) + Ci(80, 50, 9, E) + Re(78, 52, 3, 14, D) + Re(14, 40, 60, 4, '#8A6A3C') + Re(14, 44, 60, 22, '#B9A07A') + loop(3, function (i) { return T('M' + (19 + i * 19) + ' 66 V56 Q' + (25 + i * 19) + ' 48 ' + (31 + i * 19) + ' 56 V66Z', C); }) + Re(14, 66, 60, 3, B); },
    birds: function () { return bird(26, 30, 1.2) + bird(46, 22, 1.5) + bird(64, 34, 1.2) + bird(36, 46, 1) + bird(56, 50, 1.3, G) + bird(20, 56, 0.9) + bird(72, 22, 0.9) + O('M10 66 Q40 60 78 64', C, 1, ' opacity=".5"'); },
    sprout: function () { return glow(44, 20, 22, 1) + Ci(44, 20, 7, G) + rays(44, 20, 11, 16, 10, G, 1.4, 0, Math.PI * 2) + El(44, 68, 24, 5, D) + O('M44 68 Q44 56 44 46', E, 3) + T('M44 52 Q30 50 26 38 Q40 40 44 52Z', E) + T('M44 48 Q58 46 62 34 Q48 36 44 48Z', '#58B894'); },
    ranks: function () { return loop(6, function (i) { return T(poly(18 + i * 10.4, 26, 3, 1.2, 4, 0.78), G); }) + loop(5, function (i) { return T(poly(18 + i * 13, 40, 4, 1.6, 4, 0.78), G); }) + loop(4, function (i) { return T(poly(21 + i * 15.4, 56, 5.4, 2.2, 4, 0.78), W); }); },
    ringstar: function () { return glow(44, 42, 30, 0.6) + Ci(44, 42, 24, 'none', ' stroke="' + G + '" stroke-width="2"') + Ci(44, 42, 18, 'none', ' stroke="' + C + '" stroke-width="1.2" stroke-dasharray="2 3"') + loop(8, function (i) { var a = i * Math.PI / 4; return Ci(r1(44 + 24 * Math.cos(a)), r1(42 + 24 * Math.sin(a)), 2, G); }) + cres(40, 42, 9, G) + star4(52, 42, 5); },
    gates: function () { return T('M10 68 V40 Q10 22 28 22 Q46 22 46 40 V68Z', G) + T('M17 68 V42 Q17 30 28 30 Q39 30 39 42 V68Z', W) + T('M44 68 V40 Q44 22 62 22 Q80 22 80 40 V68Z', K, ' stroke="' + B + '" stroke-width="2"') + T('M51 68 V42 Q51 30 62 30 Q73 30 73 42 V68Z', N) + Ci(20, 74, 1.8, W) + Ci(28, 77, 1.8, W) + Ci(36, 74, 1.8, W) + Ci(58, 76, 1.8, C) + Ci(66, 74, 1.8, C); },
    hands: function () { return glow(44, 28, 22, 1) + Ci(44, 26, 7, G) + rays(44, 26, 11, 17, 8, G, 1.4, -Math.PI * 0.95, -Math.PI * 0.05) + T('M16 46 Q18 62 44 66 Q70 62 72 46 Q58 54 44 52 Q30 54 16 46Z', L) + O('M24 52 Q44 60 64 52', C, 1.4); },
    pages: function () { return Re(28, 26, 34, 40, C, 3, ' transform="rotate(-9 44 46)"') + Re(28, 26, 34, 40, W, 3, ' transform="rotate(5 44 46)"') + Re(26, 22, 36, 44, L, 3) + O('M32 32 H56 M32 38 H56 M32 44 H56 M32 50 H50 M32 56 H56', B, 1.5) + T('M52 22 V38 L55 34 L58 38 V22Z', R); },
    circledots: function () { return glow(44, 42, 26, 0.7) + Ci(44, 42, 20, 'none', ' stroke="' + C + '" stroke-width="1" opacity=".6"') + loop(8, function (i) { var a = i * Math.PI / 4, x = r1(44 + 20 * Math.cos(a)), y = r1(42 + 20 * Math.sin(a)); return O('M44 42 L' + x + ' ' + y, C, 0.8, ' opacity=".5"') + Ci(x, y, 3.2, i % 2 ? L : G); }) + Ci(44, 42, 6, G); },
    ornament: function () { return glow(44, 42, 28, 0.6) + T(poly(44, 40, 22, 11, 8, 0), G) + Ci(44, 40, 11, K) + Ci(44, 40, 5.5, G) + loop(8, function (i) { var a = i * Math.PI / 4 + Math.PI / 8; return Ci(r1(44 + 27 * Math.cos(a)), r1(40 + 27 * Math.sin(a)), 1.8, W); }) + O('M44 64 V70', G, 1.4) + T('M44 68 Q50 74 44 80 Q38 74 44 68Z', G); },
    smoke: function () { return T('M30 70 Q18 56 32 48 Q20 38 34 30 Q30 20 44 18 Q58 16 56 30 Q68 34 58 46 Q68 54 56 62 Q58 68 52 70Z', '#6B7A96', ' opacity=".9"') + T('M38 66 Q30 56 40 50 Q32 42 42 36 Q48 30 54 38 Q60 44 52 52 Q58 58 50 66Z', '#8B99B3', ' opacity=".85"') + flame(44, 72, 1.3, R) + flame(52, 72, 1, G); },
    domeslight: function () { return glow(44, 22, 24, 1) + Ci(44, 22, 7, G) + rays(44, 22, 11, 20, 9, G, 1.4, 0.2 * Math.PI, 0.8 * Math.PI) + loop(5, function (i) { var x = 14 + i * 15, h = 50 + (i % 2) * 4; return T('M' + (x - 7) + ' 72 Q' + (x - 7) + ' ' + h + ' ' + x + ' ' + (h - 2) + ' Q' + (x + 7) + ' ' + h + ' ' + (x + 7) + ' 72Z', M, ' stroke="' + G + '" stroke-width="1.2"'); }); },
    dunearch: function () { return glow(44, 44, 16, 0.5) + cres(44, 46, 9, L) + T('M16 70 V44 Q16 22 44 22 Q72 22 72 44 V70 H58 V46 Q58 36 44 36 Q30 36 30 46 V70Z', '#C9A36B') + O('M20 34 Q30 26 40 26', '#E8C990', 1.6); },
    nabawi: function () { return glow(44, 40, 28, 0.4) + T('M30 56 Q30 30 44 30 Q58 30 58 56Z', E) + Re(28, 56, 32, 12, L) + T('M40 68 V62 Q44 58 48 62 V68Z', G) + Re(11, 36, 7, 32, L) + T('M9 36 L14.5 24 L20 36Z', G) + Re(70, 36, 7, 32, L) + T('M68 36 L73.5 24 L79 36Z', G) + O('M44 30 V22', G, 1.5) + cres(46, 20, 4, G); },
    victory: function () { return glow(44, 42, 34, 1) + T('M20 70 V40 Q20 20 44 20 Q68 20 68 40 V70Z', M, ' stroke="' + G + '" stroke-width="2"') + T('M32 70 V44 Q32 34 44 34 Q56 34 56 44 V70Z', W) + O('M44 20 V6', G, 1.5) + T('M44 6 L58 10 L44 15Z', G) + rays(44, 44, 26, 36, 7, G, 1.2, -Math.PI * 0.9, -Math.PI * 0.1); },
    rooms: function () { return loop(3, function (i) { var x = 8 + i * 24; return Re(x, 44, 22, 22, S) + Re(x - 2, 41, 26, 3, '#8A6A3C') + T('M' + (x + 8) + ' 66 V56 Q' + (x + 11) + ' 52 ' + (x + 14) + ' 56 V66Z', K) + Re(x + 3, 48, 4, 4, N) + Re(x + 15, 48, 4, 4, N); }) + star4(44, 22, 6) + Ci(18, 28, 1.3, W) + Ci(70, 30, 1.3, W); },
    mountainring: function () { return glow(44, 42, 30, 0.7) + loop(12, function (i) { var a = i * Math.PI / 6, c = Math.cos(a), s = Math.sin(a), px = -s, py = c; return T('M' + r1(44 + 32 * c) + ' ' + r1(42 + 32 * s) + ' L' + r1(44 + 22 * c + 6 * px) + ' ' + r1(42 + 22 * s + 6 * py) + ' L' + r1(44 + 22 * c - 6 * px) + ' ' + r1(42 + 22 * s - 6 * py) + 'Z', M, ' stroke="' + G + '" stroke-width="1"'); }) + Ci(44, 42, 15, B) + O('M36 38 Q42 34 46 40 Q44 46 50 48', E, 2); },
    windgrains: function () { return O('M8 28 Q30 20 52 28 T80 26', L, 2.6) + O('M6 42 Q28 34 50 42 T82 40', L, 2.6, ' opacity=".8"') + O('M10 56 Q30 50 50 56 T78 54', L, 2.4, ' opacity=".6"') + loop(14, function (i) { var r = rnd(i + 11); return Ci(r1(10 + r() * 70), r1(20 + r() * 40), 1.4, G); }); },
    tur: function () { return glow(44, 28, 30, 0.9) + T('M6 70 L44 14 L82 70Z', '#6B5A4A') + T('M44 14 L82 70 H56 L48 40Z', '#4A3C33') + T('M30 50 Q22 50 22 44 Q22 38 30 40 Q32 34 40 36 Q46 32 50 38 Q58 38 56 44 Q58 50 50 50Z', L, ' opacity=".92"') + rays(44, 22, 16, 24, 7, G, 1.2, -Math.PI * 0.95, -Math.PI * 0.05); },
    starfall: function () { return O('M56 30 L10 74', G, 3, ' opacity=".55"') + O('M56 30 L26 62', W, 1.6, ' opacity=".8"') + glow(56, 30, 26, 1) + T('M56 10 Q58 28 76 30 Q58 32 56 52 Q54 32 36 30 Q54 28 56 10Z', W) + star4(22, 18, 4) + star4(74, 56, 3); },
    moonsplit: function () { return glow(44, 42, 30, 0.7) + T('M42 20 A22 22 0 0 0 42 64 L37 54 L44 46 L37 38 L43 30Z', L) + T('M48 20 L43 30 L49 38 L43 46 L49 54 L45 64 A22 22 0 0 0 48 20Z', W, ' transform="translate(3 -1) rotate(4 46 42)"') + Ci(34, 36, 2, C, ' opacity=".5"') + Ci(56, 52, 2.6, C, ' opacity=".4"'); },
    sunmoon: function () { return glow(20, 22, 16, 0.9) + Ci(20, 22, 7, G) + rays(20, 22, 10, 14, 8, G, 1.4, 0, Math.PI * 2) + cres(68, 22, 8, L) + T('M28 70 V46 Q28 30 44 30 Q60 30 60 46 V70Z', E, ' stroke="' + G + '" stroke-width="1.6"') + T('M36 70 V48 Q36 38 44 38 Q52 38 52 48 V70Z', '#58B894') + Ci(40, 58, 2.4, R) + Ci(48, 54, 2.4, '#C0504D') + Ci(44, 62, 2.4, G); },
    tiers: function () { return glow(44, 26, 24, 1) + Ci(44, 24, 6, G) + Re(14, 58, 60, 10, M, 2, ' stroke="' + C + '" stroke-width="1"') + Re(24, 46, 40, 12, '#1D3A6B', 2, ' stroke="' + C + '" stroke-width="1"') + Re(34, 34, 20, 12, '#2B5FAE', 2, ' stroke="' + G + '" stroke-width="1.2"'); },
    gear: function () { return gear(40, 40, 18, 10, C) + gear(66, 58, 9, 8, G) + O('M10 70 H78', S, 2); },
    dialogue: function () { return T('M12 20 H48 Q54 20 54 26 V40 Q54 46 48 46 H32 L22 56 V46 H18 Q12 46 12 40Z', B) + T('M34 38 H70 Q76 38 76 44 V58 Q76 64 70 64 H66 V74 L56 64 H40 Q34 64 34 58Z', G) + O('M20 28 H46 M20 34 H40', L, 1.6) + O('M42 48 H68 M42 54 H62', K, 1.6, ' opacity=".7"'); },
    fort: function () { return Re(26, 40, 36, 28, '#C9A36B') + Re(16, 30, 14, 38, '#B08A58') + Re(58, 30, 14, 38, '#B08A58') + loop(4, function (i) { return Re(26 + i * 10, 36, 6, 4, '#C9A36B'); }) + loop(2, function (i) { return Re(16 + i * 8, 26, 5, 4, '#B08A58') + Re(58 + i * 8, 26, 5, 4, '#B08A58'); }) + T('M38 68 V54 Q44 46 50 54 V68Z', K) + O('M44 26 V14', L, 1.4) + T('M44 14 L54 17 L44 20Z', G); },
    lens: function () { return Ci(40, 38, 17, C, ' opacity=".2"') + Ci(40, 38, 17, 'none', ' stroke="' + C + '" stroke-width="5"') + O('M53 51 L68 66', G, 6) + O('M31 38 L38 46 L50 30', W, 3.5) + Ci(34, 28, 2, L, ' opacity=".6"'); },
    bricks: function () { return loop(6, function (r) { return loop(4, function (c) { var x = 12 + c * 17 + (r % 2 ? -8 : 0); if (x < 6) x = 6; return Re(x, 18 + r * 9.5, 16, 8, (r + c) % 4 === 0 ? G : (r + c) % 2 ? M : '#2B5FAE', 1.5, ' stroke="' + K + '" stroke-width=".8"'); }); }); },
    noonmosque: function () { return glow(44, 22, 30, 1) + Ci(44, 22, 11, G) + rays(44, 22, 15, 22, 12, G, 1.4, 0, Math.PI * 2) + T('M30 64 Q30 46 44 46 Q58 46 58 64Z', L) + Re(24, 62, 40, 7, W) + Re(14, 48, 5, 20, L) + T('M13 48 L16.5 40 L20 48Z', G) + Re(69, 48, 5, 20, L) + T('M68 48 L71.5 40 L75 48Z', G) + O('M44 46 V40', G, 1.4); },
    mask: function () { return T('M22 22 Q44 12 66 22 Q68 46 44 66 Q20 46 22 22Z', L) + T('M44 16 Q56 17 66 22 Q68 46 44 66Z', B, ' opacity=".75"') + T('M28 32 Q35 28 40 35 Q34 38 28 32Z', K) + T('M48 35 Q53 28 60 32 Q54 38 48 35Z', K) + O('M30 50 Q37 56 44 52', K, 2) + O('M44 52 Q51 48 58 54', K, 2) + O('M44 20 V64', G, 1.2); },
    swap: function () { return O('M22 40 A22 22 0 0 1 62 28', G, 4.5) + T('M68 20 L70 38 L54 31Z', G) + O('M66 46 A22 22 0 0 1 26 58', C, 4.5) + T('M20 66 L18 48 L34 55Z', C) + Ci(44, 43, 4, W); },
    moonphases: function () {
      var r = 6.8, ks = [0, 4, 0, 4, 0];
      return loop(5, function (i) {
        var x = 14 + i * 15, y = 42, d, base = Ci(x, y, r, N, ' stroke="' + L + '" stroke-width=".8" opacity=".9"');
        if (i === 0) return base;
        if (i === 4) return Ci(x, y, r, L);
        d = 'M' + x + ' ' + (y - r) + ' A' + r + ' ' + r + ' 0 0 1 ' + x + ' ' + (y + r);
        d += i === 2 ? ' Z' : ' A' + ks[i] + ' ' + r + ' 0 0 ' + (i === 1 ? 0 : 1) + ' ' + x + ' ' + (y - r) + ' Z';
        return base + T(d, L);
      }) + O('M8 56 Q44 64 80 56', C, 1, ' opacity=".5"');
    },
    lock: function () { return glow(44, 46, 26, 0.5) + O('M35 44 V34 Q35 22 44 22 Q53 22 53 34 V44', L, 5) + T('M30 44 H58 V62 Q58 68 52 68 H36 Q30 68 30 62Z', G) + Ci(44, 54, 3.5, K) + Re(42.5, 54, 3, 8, K); },
    lampssky: function () { var pts = [0.12, 0.3, 0.5, 0.7, 0.88]; return O('M8 58 Q44 -6 80 58', C, 1.6, ' opacity=".7"') + pts.map(function (t) { var x = (1 - t) * (1 - t) * 8 + 2 * (1 - t) * t * 44 + t * t * 80, y = (1 - t) * (1 - t) * 58 + 2 * (1 - t) * t * (-6) + t * t * 58; return O('M' + r1(x) + ' ' + r1(y) + ' V' + r1(y + 8), G, 1) + glow(r1(x), r1(y + 11), 8, 1) + Ci(r1(x), r1(y + 11), 3.2, W); }).join(''); },
    penink: function () { return O('M12 28 Q22 22 32 28 M14 36 Q22 32 30 36', L, 1.5, ' opacity=".7"') + Re(30, 50, 24, 17, N, 4, ' stroke="' + G + '" stroke-width="1.4"') + Re(34, 44, 16, 6, '#1D3A6B') + T('M44 48 L72 12 L77 17 L48 53Z', G) + T('M44 48 L48 53 L41 56Z', K) + Ci(22, 66, 2, B); },
    scales: function () { return scalesDraw(0); },
    scalestilt: function () { return scalesDraw(8); },
    stairs: function () { return glow(70, 24, 20, 1) + T('M8 70 H28 V60 H40 V50 H52 V40 H64 V30 H80 V70Z', M, ' stroke="' + C + '" stroke-width="1.2"') + Ci(72, 20, 5, G) + rays(72, 20, 8, 12, 8, G, 1.2, 0, Math.PI * 2); },
    ark: function () { return O('M16 12 l-3 8 M30 8 l-3 8 M48 10 l-3 8 M64 8 l-3 8 M76 14 l-3 8', C, 1.4, ' opacity=".6"') + T('M14 50 H74 Q72 64 58 66 H30 Q16 64 14 50Z', D) + Re(32, 38, 26, 12, S) + T('M30 38 L44 26 L60 38Z', D) + Re(42, 42, 5, 8, K) + O('M44 26 V16', L, 1.4); },
    flameswirl: function () { return glow(44, 42, 30, 0.6) + spiral(44, 42, 26, 2.4, 0, G, 3) + spiral(44, 42, 20, 2.4, 3.14, R, 2.4) + cres(70, 16, 6, L) + star4(18, 20, 4) + Ci(44, 42, 3, W); },
    candle: function () { return glow(44, 32, 22, 1) + Re(39, 40, 10, 26, L, 2) + O('M40 46 V52 M48 44 V50', W, 1.4) + flame(44, 40, 2.2, G) + T('M44 38 Q41 33 44 28 Q47 33 44 38Z', W) + El(44, 68, 16, 4, G) + Re(43.4, 37, 1.2, 4, K); },
    cloak: function () { return star4(44, 14, 6) + T('M20 28 Q44 20 68 28 L74 68 Q44 60 14 68Z', B) + O('M30 30 Q28 48 24 64 M44 28 Q44 46 44 62 M58 30 Q60 48 64 64', C, 1.4, ' opacity=".7"') + O('M20 28 Q44 36 68 28', G, 2); },
    horn: function () { return glow(62, 34, 20, 0.6) + T('M18 62 Q20 28 56 24 L60 34 Q34 36 28 64Z', G) + El(60, 29, 5, 9, W, ' transform="rotate(-18 60 29)"') + O('M68 18 Q78 26 74 40 M72 14 Q84 24 80 44', L, 1.6, ' opacity=".7"') + O('M26 56 Q30 40 46 34', W, 1.2, ' opacity=".6"'); },
    drop: function () { return El(44, 68, 18, 3.5, 'none', ' stroke="' + C + '" stroke-width="1" opacity=".6"') + El(44, 68, 26, 5, 'none', ' stroke="' + C + '" stroke-width=".8" opacity=".4"') + T('M44 12 Q64 38 64 52 Q64 66 44 66 Q24 66 24 52 Q24 38 44 12Z', B) + O('M33 52 Q33 60 40 62', C, 2.4) + O('M44 62 V52', E, 2) + T('M44 54 Q36 54 34 47 Q42 47 44 54Z', E) + T('M44 51 Q52 51 54 44 Q46 44 44 51Z', '#58B894'); },
    gusts: function () { return T('M14 26 Q12 18 22 18 Q26 10 36 14 Q44 10 48 18 Q56 20 52 26Z', L, ' opacity=".9"') + O('M10 40 Q34 32 58 42 Q70 46 66 54', L, 3) + T('M62 58 L70 54 L66 46Z', L) + O('M14 54 Q34 48 50 56', L, 2.6, ' opacity=".75"') + O('M20 66 Q40 60 60 66', L, 2.2, ' opacity=".55"'); },
    pegs: function () { return Re(0, 52, 88, 36, D, 0, ' opacity=".6"') + T('M12 52 L44 14 L76 52Z', '#8AA0C0') + T('M44 14 L76 52 H54Z', '#6F86A8') + T('M44 14 L38 24 L44 22 L50 25Z', L) + T('M30 52 L44 76 L58 52Z', '#6B5A4A') + O('M0 52 H88', G, 1, ' opacity=".6"'); },
    spiral: function () { return glow(44, 42, 30, 0.6) + spiral(44, 42, 28, 2.6, 0, C, 3) + spiral(44, 42, 24, 2.6, 2.1, L, 2.2) + spiral(44, 42, 20, 2.6, 4.2, G, 2) + Ci(44, 42, 3.4, W); },
    wheat: function () { function ear(x, y, rot) { return loop(5, function (i) { return El(x + (i % 2 ? 2.6 : -2.6), y - i * 5, 2.2, 4, G, ' transform="rotate(' + (i % 2 ? 24 : -24) + ' ' + (x + (i % 2 ? 2.6 : -2.6)) + ' ' + (y - i * 5) + ')"'); }) + El(x, y - 25, 2, 4, G); } return O('M30 70 Q30 50 28 36', E, 2) + O('M44 70 V30', E, 2) + O('M58 70 Q58 50 60 36', E, 2) + ear(28, 36) + ear(44, 32) + ear(60, 36); },
    eclipse: function () { return glow(44, 42, 32, 1) + rays(44, 42, 20, 28, 20, W, 1.4, 0, Math.PI * 2) + Ci(44, 42, 17, G) + Ci(46, 41, 16, K) + Ci(44, 42, 17, 'none', ' stroke="' + W + '" stroke-width="1.6"'); },
    splitsky: function () { return O('M10 62 A34 34 0 0 1 78 62', C, 2) + O('M44 28 L40 38 L48 44 L42 54 L46 62', G, 2.4) + O('M24 30 l-3 7 M64 28 l3 7 M30 20 l-2 5 M58 18 l2 5', W, 1.6) + Ci(18, 46, 1.6, W) + Ci(70, 44, 1.6, W); },
    horizonarcs: function () { return glow(44, 44, 28, 1) + T('M8 70 Q14 32 40 18 Q26 42 28 70Z', N, ' stroke="' + C + '" stroke-width="1.2"') + T('M80 70 Q74 32 48 18 Q62 42 60 70Z', N, ' stroke="' + C + '" stroke-width="1.2"') + star4(44, 36, 5) + Ci(44, 54, 2, W); },
    towerstars: function () { return O('M10 16 L30 24 L46 12 L66 22 L78 12', C, 1, ' opacity=".7"') + [[10, 16], [30, 24], [46, 12], [66, 22], [78, 12]].map(function (p) { return star4(p[0], p[1], 3.4); }).join('') + loop(3, function (i) { var x = 12 + i * 24, h = 26 + (i % 2) * 8; return Re(x, 70 - h, 14, h, L, 1) + T('M' + (x - 2) + ' ' + (70 - h) + ' L' + (x + 7) + ' ' + (58 - h) + ' L' + (x + 16) + ' ' + (70 - h) + 'Z', G) + Re(x + 5, 70 - h + 8, 4, 5, N); }); },
    starpierce: function () { return glow(44, 36, 26, 1) + T('M44 6 Q46 30 68 36 Q46 42 44 66 Q42 42 20 36 Q42 30 44 6Z', W) + star4(16, 18, 3) + star4(72, 58, 3) + Ci(70, 16, 1.4, W); },
    higharches: function () { return star4(44, 12, 6) + pArch(30, 54, G) + pArch(22, 46, C) + pArch(14, 38, G) + pArch(7, 30, C); },
    veil: function () { return T('M34 70 Q34 56 44 56 Q54 56 54 70Z', G) + T('M0 36 Q14 24 28 34 Q42 22 58 34 Q72 24 88 34 V50 Q72 60 58 48 Q42 60 28 48 Q14 58 0 50Z', L, ' opacity=".88"') + O('M8 40 Q22 34 34 40 M54 40 Q66 34 80 40', C, 1.2, ' opacity=".7"'); },
    sunrise: function () { return glow(44, 62, 36, 1) + rays(44, 62, 28, 40, 9, G, 1.6, -Math.PI * 0.95, -Math.PI * 0.05) + T('M20 66 A24 24 0 0 1 68 66Z', G) + T('M28 66 A16 16 0 0 1 60 66Z', W, ' opacity=".7"'); },
    city: function () { return T('M0 64 L20 38 L40 60 L60 34 L88 64Z', '#1D3A6B') + Re(6, 48, 10, 20, M) + Re(18, 42, 8, 26, N) + Re(28, 52, 12, 16, M) + T('M42 68 V54 Q42 40 52 40 Q62 40 62 54 V68Z', L) + T('M42 54 Q42 40 52 40 Q62 40 62 54Z', G) + Re(64, 46, 8, 22, N) + T('M63 46 L68 36 L73 46Z', G) + Re(74, 54, 10, 14, M) + loop(5, function (i) { return Ci(11 + i * 13, 56 + (i % 2) * 6, 1, W); }); },
    sun: function () { return glow(44, 42, 34, 1) + rays(44, 42, 18, 24, 12, G, 2, 0, Math.PI * 2) + Ci(44, 42, 14, G) + Ci(44, 42, 10, W, ' opacity=".7"'); },
    moonnight: function () { return glow(44, 36, 30, 0.8) + T('M52 10 A28 28 0 1 0 76 52 A22 22 0 1 1 52 10Z', L) + star4(22, 20, 4) + star4(70, 14, 3) + Ci(30, 40, 1.4, W); },
    morning: function () { return glow(44, 54, 34, 1) + rays(44, 54, 22, 40, 11, G, 1.8, -Math.PI * 0.97, -Math.PI * 0.03) + Ci(44, 54, 16, W) + bird(20, 26, 1) + bird(68, 22, 1.2); },
    bloom: function () { var cols = [B, C]; return glow(44, 46, 28, 0.9) + loop(8, function (i) { return El(44, 32, 6.4, 14, cols[i % 2], ' transform="rotate(' + (i * 45) + ' 44 46)" opacity=".92"'); }) + Ci(44, 46, 7, G) + Ci(44, 46, 3, W); },
    fig: function () { return O('M44 68 Q56 52 74 34', D, 2.6) + El(52, 56, 5, 2.4, E, ' transform="rotate(-40 52 56)"') + El(60, 46, 5, 2.4, E, ' transform="rotate(-40 60 46)"') + El(68, 38, 5, 2.4, E, ' transform="rotate(-40 68 38)"') + Ci(57, 59, 2.4, K) + Ci(65, 50, 2.4, K) + T('M28 22 Q40 20 40 32 Q42 46 32 54 Q22 46 24 32 Q24 24 28 22Z', P) + T('M16 36 Q26 34 26 44 Q28 54 20 60 Q12 54 14 44 Q14 38 16 36Z', '#A084C4') + O('M28 22 Q30 16 34 16', E, 1.6); },
    hira: function () { return glow(38, 60, 24, 0.9) + O('M38 50 V8', G, 1.6, ' opacity=".6"') + star4(38, 12, 4) + T('M6 70 L34 24 L50 46 L66 30 L84 70Z', '#5A4A4A') + T('M30 70 Q30 54 38 54 Q46 54 46 70Z', K) + El(38, 66, 6, 3, G, ' opacity=".6"'); },
    lightbeam: function () { return Ci(44, 40, 30, 'none', ' stroke="' + C + '" stroke-width="1" stroke-dasharray="1 4" opacity=".6"') + T('M34 0 H54 L62 66 H26Z', G, ' opacity=".3"') + T('M39 0 H49 L53 66 H35Z', W, ' opacity=".55"') + T('M30 70 Q30 54 44 54 Q58 54 58 70Z', L) + Re(26, 68, 36, 4, W) + star4(16, 22, 3) + star4(72, 30, 3); },
    crystal: function () { return glow(44, 42, 28, 0.8) + T('M22 34 L33 18 H55 L66 34 L44 68Z', C) + T('M22 34 H66 L44 68Z', B, ' opacity=".85"') + T('M33 18 H55 L51 34 H37Z', W, ' opacity=".9"') + O('M22 34 H66 M33 18 L37 34 L44 68 M55 18 L51 34 L44 68', K, 1, ' opacity=".45"') + star4(70, 16, 4) + star4(16, 22, 3); },
    quake: function () { return T('M0 66 L26 64 L30 72 L44 66 L50 74 L66 66 L88 68 V88 H0Z', D) + O('M44 50 L40 62 L46 68 L42 80', G, 2) + Re(12, 38, 10, 28, S, 1, ' transform="rotate(-12 17 66)"') + Re(60, 34, 12, 32, '#B08A58', 1, ' transform="rotate(14 66 66)"') + Ci(36, 60, 2, S) + Ci(52, 62, 2.4, S) + Ci(30, 56, 1.4, S); },
    horse: function () { return Ci(14, 66, 6, S, ' opacity=".5"') + Ci(24, 68, 4, S, ' opacity=".4"') + O('M25 38 Q16 34 12 42', G, 3.2) + El(42, 40, 17, 8.5, G) + T('M54 34 L62 18 L68 22 L60 40Z', G) + T('M62 18 L74 22 L72 28 L64 27Z', G) + O('M56 30 Q58 22 62 18', K, 1.6) + O('M32 46 L24 62 L18 60', G, 3.2) + O('M36 48 L33 66', G, 3.2) + O('M50 47 L60 58 L66 56', G, 3.2) + O('M54 46 L64 52', G, 3.2) + Ci(70, 24, 1, K); },
    fluff: function () { return Ci(24, 56, 10, B) + Ci(36, 52, 12, G) + Ci(50, 56, 12, C) + Ci(62, 52, 10, L) + Ci(70, 60, 8, R) + Ci(44, 44, 9, L, ' opacity=".85"') + Ci(30, 42, 7, B, ' opacity=".8"') + Ci(58, 42, 7, G, ' opacity=".85"') + O('M20 20 l-2 5 M44 14 l-2 5 M66 20 l-2 5', W, 1.6); },
    coins: function () { function stack(x, n) { return loop(n, function (j) { return El(x, 66 - j * 5, 10, 3.6, G, ' stroke="' + R + '" stroke-width=".8"'); }); } return stack(22, 3) + stack(44, 7) + stack(66, 4) + O('M44 20 V12 M40 16 L44 11 L48 16', W, 1.6); },
    hourglass: function () { return glow(44, 42, 26, 0.5) + T('M32 20 H56 L46 38 H42Z', G) + T('M32 66 H56 L50 56 Q44 50 38 56Z', G) + O('M44 38 V54', G, 1.2) + O('M28 16 H60 L46 42 L60 68 H28 L42 42Z', L, 2.2) + Re(24, 12, 40, 4, G, 2) + Re(24, 68, 40, 4, G, 2); },
    flame: function () { return glow(44, 44, 30, 0.8) + T('M44 10 Q64 30 62 50 Q60 68 44 68 Q28 68 26 50 Q26 36 36 28 Q36 38 44 40 Q42 24 44 10Z', R) + T('M44 30 Q56 44 54 54 Q52 64 44 64 Q36 64 34 54 Q34 46 40 42 Q42 48 44 48 Q42 38 44 30Z', G) + T('M44 46 Q50 54 48 58 Q46 62 44 62 Q40 62 40 56 Q40 52 44 46Z', W); },
    elephant: function () { var c = '#9FB0CC'; return El(38, 44, 22, 15, c) + Ci(62, 38, 10, c) + O('M70 42 Q80 52 72 64 Q70 68 66 64', c, 5) + T('M64 44 Q74 46 74 52 Q68 50 62 46Z', L) + El(55, 36, 6, 9, '#7F93B5') + Re(22, 52, 7, 16, c, 2) + Re(34, 54, 7, 14, c, 2) + Re(46, 54, 7, 14, c, 2) + Re(54, 52, 7, 16, c, 2) + Ci(64, 35, 1.3, K) + O('M17 40 Q12 44 14 52', c, 2); },
    camel: function () { return O('M26 50 V68 M34 52 V68 M48 52 V68 M55 50 V68', S, 3.6) + El(42, 44, 19, 9, S) + T('M30 40 Q38 22 48 40Z', S) + O('M56 40 Q64 32 62 20', S, 5.4) + El(65, 19, 7, 3.8, S, ' transform="rotate(-8 65 19)"') + O('M24 42 Q17 46 19 56', S, 2.4) + Ci(66, 17, 1, K) + Ci(76, 14, 1.2, W, ' opacity=".8"') + Ci(14, 20, 1.2, W, ' opacity=".8"'); },
    jug: function () { return O('M62 38 Q76 40 70 56 Q66 62 60 60', R, 4.4) + T('M30 30 Q30 22 38 22 H50 Q58 22 58 30 Q66 36 62 52 Q58 68 44 68 Q30 68 26 52 Q22 36 30 30Z', R) + O('M30 42 Q44 48 58 42', G, 1.6) + T('M16 34 Q22 44 16 50 Q10 44 16 34Z', C) + Ci(22, 62, 2.2, C) + Ci(18, 70, 1.6, C); },
    river: function () { return T('M0 88 V46 Q14 56 22 88Z', '#0F4A3D') + T('M88 88 V46 Q72 58 64 88Z', '#0F4A3D') + T('M46 0 Q60 24 50 40 Q42 56 62 88 H24 Q36 58 36 40 Q28 24 38 0Z', C, ' opacity=".92"') + O('M42 10 Q50 28 44 44 Q38 58 44 80', L, 1.2, ' opacity=".6"') + Ci(12, 60, 2.2, W) + Ci(18, 70, 2.2, G) + Ci(76, 62, 2.2, W) + Ci(72, 72, 2.2, G); },
    fork: function () { return O('M44 74 V50 Q44 42 36 34 L24 22', G, 5) + O('M44 50 Q44 42 52 34 L64 22', C, 5) + T('M18 16 L32 20 L22 30Z', G) + T('M70 16 L56 20 L66 30Z', C) + Ci(44, 76, 2.6, W); },
    tide: function () { return glow(66, 24, 18, 1) + Ci(68, 24, 8, G) + T('M0 72 Q10 36 36 32 Q58 30 68 46 Q56 40 48 46 Q62 56 52 72Z', C) + O('M12 52 Q20 40 36 38', L, 1.6, ' opacity=".8"') + Ci(60, 44, 1.6, L) + Ci(54, 40, 1.2, L); },
    rope: function () { return O('M40 12 L38 6 M44 12 V4 M48 12 L50 6', D, 1.6) + T('M38 12 Q32 40 38 70 H50 Q56 40 50 12Z', D) + loop(7, function (i) { return O('M36 ' + (20 + i * 7) + ' L52 ' + (26 + i * 7), S, 1.8); }) + flame(44, 76, 1.6, R); },
    star8: function () { return glow(44, 42, 34, 0.9) + Ci(44, 42, 34, 'none', ' stroke="' + C + '" stroke-width="1" opacity=".4"') + Re(26, 24, 36, 36, G, 0) + Re(26, 24, 36, 36, W, 0, ' transform="rotate(45 44 42)" opacity=".7"') + Ci(44, 42, 11, K) + Ci(44, 42, 5, G); },
    cleft: function () { return glow(44, 40, 26, 1) + T('M36 26 L42 40 L36 54 L40 70 H48 L52 54 L46 40 L52 26Z', W) + T('M4 70 V30 Q20 20 36 26 L42 40 L36 54 L40 70Z', '#2A2A3A') + T('M84 70 V28 Q68 18 52 26 L46 40 L52 54 L48 70Z', '#2A2A3A') + rays(44, 40, 12, 22, 7, G, 1.2, -Math.PI * 0.9, -Math.PI * 0.1); },
    shield: function () { return glow(44, 42, 32, 0.6) + T('M44 10 L68 18 V42 Q68 58 44 70 Q20 58 20 42 V18Z', B, ' stroke="' + G + '" stroke-width="2.5"') + T('M44 18 L60 24 V42 Q60 52 44 62 Q28 52 28 42 V24Z', M) + cres(41, 40, 9, G) + star4(51, 40, 5); }
  };

  function scalesDraw(dy) {
    var ang = dy ? 6 : 0;
    return Re(42, 20, 4, 48, G) + T('M30 70 H58 L52 64 H36Z', G) + Ci(44, 18, 4, G) +
      '<g transform="rotate(' + (-ang) + ' 44 24)">' + Re(14, 22, 60, 3, G, 1.5) + '</g>' +
      O('M20 26 L12 ' + (44 + dy) + ' M20 26 L28 ' + (44 + dy), G, 1) + O('M68 26 L60 ' + (44 - dy) + ' M68 26 L76 ' + (44 - dy), G, 1) +
      T('M10 ' + (44 + dy) + ' H30 Q28 ' + (52 + dy) + ' 20 ' + (52 + dy) + ' Q12 ' + (52 + dy) + ' 10 ' + (44 + dy) + 'Z', L) +
      T('M58 ' + (44 - dy) + ' H78 Q76 ' + (52 - dy) + ' 68 ' + (52 - dy) + ' Q60 ' + (52 - dy) + ' 58 ' + (44 - dy) + 'Z', L);
  }

  // [sky, ground, motif] for each Surah number (Quran order)
  var THEME = {
    1: ['dawn', 'hills', 'rehal'], 2: ['day', 'hills', 'cow'], 3: ['sand', 'dunes', 'house'], 4: ['dusk', 'hills', 'heart'], 5: ['noon', 'grass', 'table'],
    6: ['day', 'grass', 'sheep'], 7: ['dusk', 'mountains', 'heights'], 8: ['dusk', 'dunes', 'banner'], 9: ['dawn', 'hills', 'gate'], 10: ['deep', 'waves', 'whale'],
    11: ['sand', 'dunes', 'winddunes'], 12: ['night', 'rocks', 'dream'], 13: ['storm', 'hills', 'storm'], 14: ['night', 'dunes', 'kaaba'], 15: ['sand', 'rocks', 'cliffs'],
    16: ['noon', 'grass', 'bee'], 17: ['night', 'dunes', 'aqsa'], 18: ['cave', 'rocks', 'cave'], 19: ['day', 'grass', 'palm'], 20: ['night', 'hills', 'lantern'],
    21: ['cosmic', 'mountains', 'beacons'], 22: ['sand', 'mountains', 'tents'], 23: ['night', '', 'rug'], 24: ['night', 'hills', 'nichelamp'], 25: ['dawn', '', 'split'],
    26: ['sand', 'hills', 'quill'], 27: ['emerald', 'grass', 'ant'], 28: ['dawn', 'hills', 'scroll'], 29: ['sand', 'rocks', 'web'], 30: ['day', 'dunes', 'columns'],
    31: ['emerald', 'hills', 'tree'], 32: ['night', '', 'mihrab'], 33: ['dusk', 'dunes', 'trench'], 34: ['emerald', 'water', 'dam'], 35: ['day', 'hills', 'birds'],
    36: ['gold', 'grass', 'sprout'], 37: ['night', '', 'ranks'], 38: ['cosmic', '', 'ringstar'], 39: ['dusk', '', 'gates'], 40: ['dawn', '', 'hands'],
    41: ['night', '', 'pages'], 42: ['cosmic', '', 'circledots'], 43: ['gold', '', 'ornament'], 44: ['storm', 'dunes', 'smoke'], 45: ['dusk', 'hills', 'domeslight'],
    46: ['sand', 'dunes', 'dunearch'], 47: ['night', 'hills', 'nabawi'], 48: ['dawn', 'hills', 'victory'], 49: ['sand', 'grass', 'rooms'], 50: ['cosmic', '', 'mountainring'],
    51: ['sand', 'dunes', 'windgrains'], 52: ['dusk', 'mountains', 'tur'], 53: ['cosmic', '', 'starfall'], 54: ['night', 'hills', 'moonsplit'], 55: ['emerald', 'hills', 'sunmoon'],
    56: ['dusk', 'mountains', 'tiers'], 57: ['storm', 'rocks', 'gear'], 58: ['dusk', '', 'dialogue'], 59: ['sand', 'hills', 'fort'], 60: ['night', '', 'lens'],
    61: ['day', '', 'bricks'], 62: ['noon', 'dunes', 'noonmosque'], 63: ['dusk', '', 'mask'], 64: ['storm', '', 'swap'], 65: ['night', '', 'moonphases'],
    66: ['cave', '', 'lock'], 67: ['cosmic', '', 'lampssky'], 68: ['night', '', 'penink'], 69: ['cosmic', '', 'scales'], 70: ['cosmic', 'mountains', 'stairs'],
    71: ['deep', 'waves', 'ark'], 72: ['cosmic', '', 'flameswirl'], 73: ['night', 'hills', 'candle'], 74: ['night', '', 'cloak'], 75: ['storm', 'dunes', 'horn'],
    76: ['deep', '', 'drop'], 77: ['storm', 'hills', 'gusts'], 78: ['dawn', 'mountains', 'pegs'], 79: ['storm', '', 'spiral'], 80: ['noon', 'grass', 'wheat'],
    81: ['dusk', '', 'eclipse'], 82: ['cosmic', '', 'splitsky'], 83: ['sand', '', 'scalestilt'], 84: ['dawn', '', 'horizonarcs'], 85: ['cosmic', '', 'towerstars'],
    86: ['night', '', 'starpierce'], 87: ['day', '', 'higharches'], 88: ['storm', '', 'veil'], 89: ['dawn', 'dunes', 'sunrise'], 90: ['sand', '', 'city'],
    91: ['noon', '', 'sun'], 92: ['night', 'hills', 'moonnight'], 93: ['noon', 'hills', 'morning'], 94: ['dawn', '', 'bloom'], 95: ['emerald', 'hills', 'fig'],
    96: ['cave', 'mountains', 'hira'], 97: ['night', '', 'lightbeam'], 98: ['day', '', 'crystal'], 99: ['sand', 'rocks', 'quake'], 100: ['dusk', 'dunes', 'horse'],
    101: ['storm', 'mountains', 'fluff'], 102: ['sand', '', 'coins'], 103: ['dusk', 'dunes', 'hourglass'], 104: ['cave', '', 'flame'], 105: ['sand', 'dunes', 'elephant'],
    106: ['sand', 'dunes', 'camel'], 107: ['day', '', 'jug'], 108: ['emerald', 'water', 'river'], 109: ['dusk', '', 'fork'], 110: ['day', 'waves', 'tide'],
    111: ['dusk', '', 'rope'], 112: ['cosmic', '', 'star8'], 113: ['dawn', 'rocks', 'cleft'], 114: ['night', '', 'shield']
  };

  var defsHtml = null;
  window.storyArtDefs = function () {
    if (defsHtml) return defsHtml;
    var s = '<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>';
    Object.keys(SKY).forEach(function (k) {
      s += '<linearGradient id="smg-' + k + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + SKY[k][0] + '"/><stop offset="1" stop-color="' + SKY[k][1] + '"/></linearGradient>';
    });
    s += '<radialGradient id="smg-glow"><stop offset="0" stop-color="#D6B56D" stop-opacity=".55"/><stop offset="1" stop-color="#D6B56D" stop-opacity="0"/></radialGradient></defs></svg>';
    defsHtml = s;
    return s;
  };

  window.storyThumb = function (n) {
    var t = THEME[n];
    if (!t) return '';
    var body = '<rect width="88" height="88" fill="url(#smg-' + t[0] + ')"/>' + decor(t[0], n) + ground(t[1], t[0], n) + M_[t[2]]();
    return '<svg viewBox="0 0 88 88" width="88" height="88" aria-hidden="true" focusable="false">' + body + '</svg>';
  };
  window.storyThemeInfo = THEME;
})();