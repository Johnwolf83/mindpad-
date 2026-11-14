// Huion X10 Connect — captura de trazos en tiempo real + reconocimiento de escritura.
// Usa Pointer Events (Windows Ink): x, y, presión, inclinación y botones del lápiz.

const $ = (id) => document.getElementById(id);
const canvas = $('canvas');
const ctx = canvas.getContext('2d');

const state = {
  strokes: [],       // [{ color, size, points: [{x, y, p, t, tiltX, tiltY}] }]
  history: [],       // snapshots para deshacer
  current: null,
  eraserMode: false,
  erasingNow: false,
  dpr: 1,
  moveCount: 0,
  recognizeTimer: null,
  lineResults: [],   // candidatos por línea del último reconocimiento
};

// ---------- Lienzo ----------
function resize() {
  const r = canvas.getBoundingClientRect();
  state.dpr = window.devicePixelRatio || 1;
  canvas.width = Math.round(r.width * state.dpr);
  canvas.height = Math.round(r.height * state.dpr);
  ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
  redraw();
}
window.addEventListener('resize', resize);

const widthFor = (size, p) => Math.max(0.6, size * (0.25 + p * 1.5));

function drawSegment(a, b, stroke) {
  ctx.strokeStyle = stroke.color;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.lineWidth = widthFor(stroke.size, (a.p + b.p) / 2);
  ctx.beginPath();
  ctx.moveTo(a.x, a.y);
  ctx.lineTo(b.x, b.y);
  ctx.stroke();
}

function drawStroke(s) {
  const pts = s.points;
  if (pts.length === 1) {
    ctx.fillStyle = s.color;
    ctx.beginPath();
    ctx.arc(pts[0].x, pts[0].y, widthFor(s.size, pts[0].p) / 2, 0, Math.PI * 2);
    ctx.fill();
    return;
  }
  for (let i = 1; i < pts.length; i++) drawSegment(pts[i - 1], pts[i], s);
}

function redraw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  state.strokes.forEach(drawStroke);
  $('r-strokes').textContent = state.strokes.length;
  $('hint').style.opacity = state.strokes.length ? 0 : 1;
}

function snapshot() {
  state.history.push(state.strokes.slice());
  if (state.history.length > 200) state.history.shift();
}

// ---------- Entrada del lápiz ----------
function toPoint(e) {
  const r = canvas.getBoundingClientRect();
  // El mouse no tiene presión real: usamos 0.5 cuando hay clic.
  const p = e.pointerType === 'mouse' ? (e.buttons ? 0.5 : 0) : e.pressure;
  return {
    x: e.clientX - r.left,
    y: e.clientY - r.top,
    p,
    t: e.timeStamp,
    tiltX: e.tiltX || 0,
    tiltY: e.tiltY || 0,
  };
}

// Botón 32 = goma del lápiz (Windows Ink). Algunos drivers usan pointerType "eraser".
const isEraser = (e) => state.eraserMode || (e.buttons & 32) || e.pointerType === 'eraser';

function eraseAt(pt) {
  const R = 10;
  const before = state.strokes.length;
  state.strokes = state.strokes.filter(
    (s) => !s.points.some((q) => (q.x - pt.x) ** 2 + (q.y - pt.y) ** 2 < R * R)
  );
  if (state.strokes.length !== before) redraw();
}

canvas.addEventListener('pointerdown', (e) => {
  if (e.pointerType === 'touch') return; // ignorar dedos
  canvas.setPointerCapture(e.pointerId);
  clearTimeout(state.recognizeTimer);
  snapshot();
  const pt = toPoint(e);
  if (isEraser(e)) {
    state.erasingNow = true;
    eraseAt(pt);
  } else {
    state.current = { color: $('color').value, size: +$('size').value, points: [pt] };
    state.strokes.push(state.current);
    drawStroke(state.current);
    $('hint').style.opacity = 0;
  }
  updateReadout(e, 'down');
});

canvas.addEventListener('pointermove', (e) => {
  if (e.pointerType === 'touch') return;
  // getCoalescedEvents entrega TODAS las muestras del lápiz (la tableta reporta más rápido que la pantalla)
  const events = e.getCoalescedEvents ? e.getCoalescedEvents() : [e];
  state.moveCount += events.length || 1;

  if (state.erasingNow) {
    events.forEach((ev) => eraseAt(toPoint(ev)));
  } else if (state.current) {
    for (const ev of events) {
      const pt = toPoint(ev);
      const pts = state.current.points;
      const last = pts[pts.length - 1];
      if (Math.abs(pt.x - last.x) + Math.abs(pt.y - last.y) < 0.5) continue;
      pts.push(pt);
      drawSegment(last, pt, state.current);
    }
  }
  updateReadout(e, e.buttons ? 'down' : 'hover');
});

function endStroke(e) {
  if (e.pointerType === 'touch') return;
  if (state.current || state.erasingNow) {
    state.current = null;
    state.erasingNow = false;
    $('r-strokes').textContent = state.strokes.length;
    if ($('auto').checked) {
      clearTimeout(state.recognizeTimer);
      state.recognizeTimer = setTimeout(recognize, 1200);
    }
  }
  updateReadout(e, 'hover');
}
canvas.addEventListener('pointerup', endStroke);
canvas.addEventListener('pointercancel', endStroke);
canvas.addEventListener('pointerleave', (e) => updateReadout(e, 'out'));

// ---------- Panel en vivo ----------
const TYPE_NAMES = { pen: 'Lápiz ✒️', mouse: 'Mouse 🖱️', touch: 'Táctil', eraser: 'Goma' };
function updateReadout(e, mode) {
  const dot = $('dot');
  dot.className = 'dot ' + (mode === 'down' ? 'down' : mode === 'hover' ? 'hover' : '');
  $('state').textContent =
    mode === 'down' ? (isEraser(e) ? 'Borrando' : 'Dibujando') :
    mode === 'hover' ? 'Lápiz en el aire (hover)' : 'Fuera del área';
  $('r-type').textContent = TYPE_NAMES[e.pointerType] || e.pointerType;
  const pt = toPoint(e);
  $('r-xy').textContent = `${pt.x.toFixed(1)} , ${pt.y.toFixed(1)}`;
  const p = mode === 'down' ? pt.p : 0;
  $('r-p').textContent = p.toFixed(3);
  $('r-pbar').style.width = (p * 100).toFixed(1) + '%';
  $('r-tilt').textContent = `${pt.tiltX}° , ${pt.tiltY}°`;
  const b = [];
  if (e.buttons & 1) b.push('punta');
  if (e.buttons & 2) b.push('botón 1');
  if (e.buttons & 4) b.push('botón 2');
  if (e.buttons & 32) b.push('goma');
  $('r-btn').textContent = b.join(', ') || '—';
}
setInterval(() => {
  $('r-hz').textContent = state.moveCount ? `${state.moveCount} muestras/s` : '—';
  state.moveCount = 0;
}, 1000);

// ---------- Segmentación en renglones ----------
function bbox(points) {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const q of points) {
    if (q.x < minX) minX = q.x; if (q.x > maxX) maxX = q.x;
    if (q.y < minY) minY = q.y; if (q.y > maxY) maxY = q.y;
  }
  return { minX, minY, maxX, maxY };
}

function splitIntoLines(strokes) {
  const items = strokes.map((s) => ({ s, b: bbox(s.points) }))
    .map((it) => ({ ...it, cy: (it.b.minY + it.b.maxY) / 2, h: it.b.maxY - it.b.minY }));
  // Primero los trazos "grandes" definen los renglones; tildes y puntos se pegan después.
  const sorted = items.slice().sort((a, b) => b.h - a.h);
  const lines = [];
  for (const it of sorted) {
    let best = null, bestDist = Infinity;
    for (const L of lines) {
      const lh = L.maxY - L.minY;
      const pad = Math.max(12, lh * 0.45);
      if (it.cy >= L.minY - pad && it.cy <= L.maxY + pad) {
        const d = Math.abs(it.cy - (L.minY + L.maxY) / 2);
        if (d < bestDist) { bestDist = d; best = L; }
      }
    }
    if (best) {
      best.items.push(it);
      // Solo los trazos de altura considerable amplían el renglón
      if (it.h > (best.maxY - best.minY) * 0.3) {
        best.minY = Math.min(best.minY, it.b.minY);
        best.maxY = Math.max(best.maxY, it.b.maxY);
      }
    } else {
      lines.push({ items: [it], minY: it.b.minY, maxY: it.b.maxY });
    }
  }
  lines.sort((a, b) => a.minY - b.minY);
  return lines.map((L) => L.items.sort((a, b) => a.b.minX - b.b.minX).map((it) => it.s));
}

function lineToInk(strokes) {
  const all = strokes.flatMap((s) => s.points);
  const b = bbox(all);
  const t0 = Math.min(...strokes.map((s) => s.points[0].t));
  const ink = strokes.map((s) => [
    s.points.map((q) => Math.round(q.x - b.minX)),
    s.points.map((q) => Math.round(q.y - b.minY)),
    s.points.map((q) => Math.round(q.t - t0)),
  ]);
  return { ink, width: Math.max(1, b.maxX - b.minX), height: Math.max(1, b.maxY - b.minY) };
}

// ---------- Reconocimiento ----------
async function recognize() {
  clearTimeout(state.recognizeTimer);
  if (!state.strokes.length) { $('text').value = ''; $('alts').innerHTML = ''; return; }
  const lines = splitIntoLines(state.strokes).map(lineToInk);
  $('recState').textContent = 'Reconociendo…';
  try {
    const r = await fetch('/api/recognize', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lines, language: $('lang').value }),
    });
    const data = await r.json();
    if (!data.ok) throw new Error(data.error);
    state.lineResults = data.results;
    renderText();
    $('recState').textContent = `${lines.length} renglón(es) ✓`;
  } catch (err) {
    $('recState').textContent = '⚠ ' + err.message;
  }
}

function renderText() {
  $('text').value = state.lineResults.map((c) => c[0] || '').join('\n');
  // Alternativas para el último renglón
  const alts = $('alts');
  alts.innerHTML = '';
  const lastIdx = state.lineResults.length - 1;
  const cands = state.lineResults[lastIdx] || [];
  cands.slice(1, 6).forEach((c) => {
    const btn = document.createElement('button');
    btn.textContent = c;
    btn.title = 'Usar esta alternativa';
    btn.onclick = () => {
      const arr = state.lineResults[lastIdx];
      arr.splice(arr.indexOf(c), 1);
      arr.unshift(c);
      renderText();
    };
    alts.appendChild(btn);
  });
}

// ---------- Botones ----------
$('recognizeBtn').onclick = recognize;
$('eraserBtn').onclick = () => {
  state.eraserMode = !state.eraserMode;
  $('eraserBtn').classList.toggle('active', state.eraserMode);
};
function undo() {
  if (!state.history.length) return;
  state.strokes = state.history.pop();
  redraw();
  if ($('auto').checked) recognize();
}
$('undoBtn').onclick = undo;
$('clearBtn').onclick = () => {
  if (!state.strokes.length) return;
  snapshot();
  state.strokes = [];
  state.lineResults = [];
  redraw();
  $('text').value = '';
  $('alts').innerHTML = '';
  $('recState').textContent = '';
};
window.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z' && document.activeElement !== $('text')) {
    e.preventDefault();
    undo();
  }
});
$('copyBtn').onclick = async () => {
  await navigator.clipboard.writeText($('text').value);
  $('recState').textContent = 'Copiado ✓';
};

function download(name, blob) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}
const stamp = () => new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);

$('saveTxt').onclick = () => download(`notas-${stamp()}.txt`, new Blob([$('text').value], { type: 'text/plain' }));

$('exportJson').onclick = () => {
  const r = canvas.getBoundingClientRect();
  const data = { device: 'Huion X10', created: new Date().toISOString(), width: r.width, height: r.height, strokes: state.strokes };
  download(`trazos-${stamp()}.json`, new Blob([JSON.stringify(data, null, 1)], { type: 'application/json' }));
};

$('exportSvg').onclick = () => {
  const r = canvas.getBoundingClientRect();
  const parts = [];
  for (const s of state.strokes) {
    for (let i = 1; i < s.points.length; i++) {
      const a = s.points[i - 1], b = s.points[i];
      parts.push(`<line x1="${a.x.toFixed(1)}" y1="${a.y.toFixed(1)}" x2="${b.x.toFixed(1)}" y2="${b.y.toFixed(1)}" stroke="${s.color}" stroke-width="${widthFor(s.size, (a.p + b.p) / 2).toFixed(2)}"/>`);
    }
    if (s.points.length === 1) {
      const q = s.points[0];
      parts.push(`<circle cx="${q.x.toFixed(1)}" cy="${q.y.toFixed(1)}" r="${(widthFor(s.size, q.p) / 2).toFixed(2)}" fill="${s.color}"/>`);
    }
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${r.width}" height="${r.height}" viewBox="0 0 ${r.width} ${r.height}"><rect width="100%" height="100%" fill="#fff"/><g stroke-linecap="round">${parts.join('')}</g></svg>`;
  download(`dibujo-${stamp()}.svg`, new Blob([svg], { type: 'image/svg+xml' }));
};

$('exportPng').onclick = () => {
  const out = document.createElement('canvas');
  out.width = canvas.width; out.height = canvas.height;
  const o = out.getContext('2d');
  o.fillStyle = '#fff'; o.fillRect(0, 0, out.width, out.height);
  o.drawImage(canvas, 0, 0);
  out.toBlob((b) => download(`dibujo-${stamp()}.png`, b), 'image/png');
};

resize();
