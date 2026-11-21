// MindPad X10 Pro — Mentalism Engine con Smartwatch Haylou, Fake Lockscreen, Multi-Espectador & Nano Banana AI
// 100% compatible con Web Bluetooth en Chrome Android (PWA).

// ==========================================
// 1. DICCIONARIO ESPAÑOL DE DIBUJOS QUICKDRAW
// ==========================================
const QUICKDRAW_ES = {
  "aircraft carrier": "portaaviones", "airplane": "avión", "alarm clock": "reloj despertador",
  "ambulance": "ambulancia", "angel": "ángel", "ant": "hormiga", "anvil": "yunque",
  "apple": "manzana", "arm": "brazo", "asparagus": "espárrago", "axe": "hacha",
  "backpack": "mochila", "banana": "plátano", "bandage": "curita", "barn": "granero",
  "baseball": "pelota de béisbol", "baseball bat": "bate", "basket": "cesta", "basketball": "baloncesto",
  "bat": "murciélago", "bathtub": "bañera", "beach": "playa", "bear": "oso", "beard": "barba",
  "bed": "cama", "bee": "abeja", "belt": "cinturón", "bench": "banco", "bicycle": "bicicleta",
  "binoculars": "prismáticos", "bird": "pájaro", "birthday cake": "pastel de cumpleaños",
  "book": "libro", "boomerang": "bumerán", "bowtie": "moño", "bracelet": "pulsera",
  "brain": "cerebro", "bread": "pan", "bridge": "puente", "broccoli": "brócoli", "broom": "escoba",
  "bucket": "balde", "bulldozer": "excavadora", "bus": "autobús", "bush": "arbusto",
  "butterfly": "mariposa", "cactus": "cactus", "cake": "pastel", "calculator": "calculadora",
  "calendar": "calendario", "camel": "camello", "camera": "cámara", "campfire": "fogata",
  "candle": "vela", "cannon": "cañón", "canoe": "canoa", "car": "automóvil", "carrot": "zanahoria",
  "castle": "castillo", "cat": "gato", "black cat": "gato", "raccoon": "mapache",
  "ceiling fan": "ventilador", "cell phone": "teléfono celular",
  "chair": "silla", "chandelier": "candelabro", "church": "iglesia", "circle": "círculo",
  "clock": "reloj", "cloud": "nube", "coffee cup": "taza de café", "compass": "brújula",
  "computer": "computadora", "cookie": "galleta", "couch": "sillón", "cow": "vaca",
  "crab": "cangrejo", "cross": "cruz", "crown": "corona", "cup": "taza", "diamond": "diamante",
  "dog": "perro", "dolphin": "delfín", "donut": "dona", "door": "puerta", "dragon": "dragón", "duck": "pato",
  "dumbbell": "mancuerna", "ear": "oreja", "elephant": "elefante", "envelope": "sobre de carta",
  "eye": "ojo", "eyeglasses": "anteojos", "face": "cara", "fan": "abanico", "feather": "pluma",
  "fence": "valla", "finger": "dedo", "fire hydrant": "boca de incendios", "fireplace": "chimenea",
  "firetruck": "camión de bomberos", "fish": "pez", "flashlight": "linterna", "flower": "flor",
  "flying saucer": "plato volador", "foot": "pie", "fork": "tenedor", "frog": "rana",
  "giraffe": "jirafa", "guitar": "guitarra", "hamburger": "hamburguesa", "hammer": "martillo",
  "hand": "mano", "harp": "arpa", "hat": "sombrero", "headphones": "auriculares",
  "helicopter": "helicóptero", "helmet": "casco", "hexagon": "hexágono", "horse": "caballo",
  "hospital": "hospital", "hot air balloon": "globo aerostático", "hot dog": "pancho",
  "hourglass": "reloj de arena", "house": "casa", "house plant": "planta", "ice cream": "helado",
  "jail": "cárcel", "kangaroo": "canguro", "key": "llave", "keyboard": "teclado", "knife": "cuchillo",
  "ladder": "escalera", "lantern": "farol", "laptop": "portátil", "leaf": "hoja", "leg": "pierna",
  "light bulb": "bombilla", "lighter": "encendedor", "lighthouse": "faro", "lightning": "rayo",
  "line": "línea", "lion": "león", "lobster": "langosta", "lollipop": "chupetín", "mailbox": "buzón",
  "map": "mapa", "microphone": "micrófono", "monkey": "mono", "moon": "luna", "mountain": "montaña",
  "mouse": "ratón", "moustache": "bigote", "mouth": "boca", "mug": "taza", "mushroom": "hongo",
  "necklace": "collar", "nose": "nariz", "ocean": "mar", "octagon": "octágono", "octopus": "pulpo",
  "onion": "cebolla", "owl": "búho", "palm tree": "palmera", "panda": "panda", "pants": "pantalones",
  "parachute": "paracaídas", "parrot": "loro", "passport": "pasaporte", "peanut": "maní",
  "pear": "pera", "pencil": "lápiz", "penguin": "pingüino", "piano": "piano", "pickup truck": "camioneta",
  "pig": "cerdo", "pillow": "almohada", "pineapple": "piña", "pizza": "pizza", "potato": "papa",
  "purse": "bolso", "rabbit": "conejo", "radio": "radio", "rain": "lluvia", "rainbow": "arcoíris",
  "river": "río", "roller coaster": "montaña rusa", "sailboat": "barco velero", "sandwich": "sándwich",
  "saw": "serrucho", "scissors": "tijeras", "scorpion": "escorpión", "screwdriver": "destornillador",
  "shark": "tiburón", "sheep": "oveja", "shoe": "zapato", "skull": "calavera", "skyscraper": "rascacielos",
  "smiley face": "carita feliz", "snail": "caracol", "snake": "serpiente", "snowflake": "copo de nieve",
  "snowman": "muñeco de nieve", "soccer ball": "pelota", "sock": "media", "spider": "araña",
  "spoon": "cuchara", "square": "cuadrado", "squiggle": "garabato", "squirrel": "ardilla",
  "stairs": "escalera", "star": "estrella", "steak": "carne", "stop sign": "señal de pare",
  "strawberry": "fresa", "submarine": "submarino", "suitcase": "maleta", "sun": "sol", "swan": "cisne",
  "sword": "espada", "syringe": "jeringa", "t-shirt": "remera", "table": "mesa", "teapot": "tetera",
  "teddy-bear": "osito de peluche", "telephone": "teléfono", "television": "televisor", "tent": "carpa",
  "tiger": "tigre", "toaster": "tostadora", "toilet": "inodoro", "tooth": "diente", "tornado": "tornado",
  "tractor": "tractor", "traffic light": "semáforo", "train": "tren", "tree": "árbol de navidad",
  "triangle": "triángulo", "truck": "camión", "umbrella": "paraguas", "van": "camioneta",
  "vase": "jarrón", "violin": "violín", "washing machine": "lavarropas", "watermelon": "sandía",
  "whale": "ballena", "wheel": "rueda", "windmill": "molino de viento", "wine bottle": "botella de vino",
  "wine glass": "copa de vino", "wristwatch": "reloj de pulsera", "zebra": "cebra", "zigzag": "zigzag"
};

const QUICKDRAW_EN = {
  gato: 'cat',
  perro: 'dog',
  árbol: 'christmas tree',
  'árbol de navidad': 'christmas tree',
  arbol: 'christmas tree',
  coche: 'vintage car',
  auto: 'car',
  automóvil: 'car',
  cara: 'face',
  estrella: 'star',
  casa: 'house',
  barco: 'boat',
  pez: 'fish',
  flor: 'flower',
  corazón: 'heart',
  sol: 'sun',
  luna: 'moon',
  reloj: 'watch',
  llave: 'key',
  avión: 'airplane',
  bicicleta: 'bicycle',
  sombrero: 'hat',
  pájaro: 'bird',
  teléfono: 'telephone'
};
Object.entries(QUICKDRAW_ES).forEach(([en, es]) => {
  QUICKDRAW_EN[es.toLowerCase()] = en;
});

function getEnglishDrawing(term) {
  if (!term) return 'christmas tree';
  const clean = term.toLowerCase().trim();
  return QUICKDRAW_EN[clean] || clean;
}

// ==========================================
// 2. CONSTANTES BLE DE LA HUION NOTE X10
// ==========================================
const HUION_SERVICE_UUID = '0000ffe0-0000-1000-8000-00805f9b34fb';
const CHAR_NOTIFY_UUID   = '0000ffe1-0000-1000-8000-00805f9b34fb';
const CHAR_WRITE_UUID    = '0000ffe2-0000-1000-8000-00805f9b34fb';

const CMD_TABLET_NAME    = 0xC9; // 201
const CMD_TABLET_INFO    = 0xC8; // 200 (Activa Pen-Tablet mode)
const CMD_TABLET_VERIFY  = 0xCA; // 202
const CMD_TABLET_BATTERY = 0xD1; // 209 (Keepalive)

const DEFAULT_MAX_X = 37400;
const DEFAULT_MAX_Y = 28200;

// ==========================================
// 3. ESTADO DE LA APLICACIÓN
// ==========================================
const state = {
  bleDevice: null,
  bleServer: null,
  writeChar: null,
  notifyChar: null,
  keepAliveTimer: null,

  // Multi-Espectador / Páginas
  pages: [{ strokes: [], displayTitle: '', speech: '', drawing: '', word: '', number: '' }],
  currentPageIndex: 0,

  strokes: [],
  currentStroke: null,
  lastPenTime: 0,
  inactivityTimer: null,
  isPenDown: false,
  maxX: DEFAULT_MAX_X,
  maxY: DEFAULT_MAX_Y,
  lastSpokenText: '',

  // Conceptos detectados para la IA
  currentDrawing: 'árbol de navidad',
  currentWord: 'Navidad',
  currentNumber: '532142',
  generatedImageBlob: null,

  // Motor IA & OpenRouter
  aiProvider: localStorage.getItem('mindpad_ai_provider') || 'pollinations',
  openRouterKey: localStorage.getItem('mindpad_openrouter_key') || '',
  openRouterModel: localStorage.getItem('mindpad_openrouter_model') || 'google/gemini-2.5-flash-image',
  openRouterVision: localStorage.getItem('mindpad_openrouter_vision') !== 'false',

  // Metadatos EXIF Retro & Auto-Publicación Instagram
  exifDaysBack: parseInt(localStorage.getItem('mindpad_exif_days_back') || '3', 10),
  autoPublishInstagram: localStorage.getItem('mindpad_ig_autopublish') === 'true',
  igWebhookUrl: localStorage.getItem('mindpad_ig_webhook_url') || 'https://hook.us2.make.com/c1m5cxamuyeinjpsrixx42y16j8okxy1',
  igCaption: localStorage.getItem('mindpad_ig_caption') || 'Una extraña intuición que tuve hace días...',
  autoSavePocketPrinter: localStorage.getItem('mindpad_auto_save_printer') !== 'false',
  vipEventName: localStorage.getItem('mindpad_vip_event') || '',
  launchDirectToCalculator: localStorage.getItem('mindpad_launch_direct_calc') !== 'false',
  currentLayer: 1,

  // Pizarra E-Ink (Slate of Mind)
  slateStyle: localStorage.getItem('mindpad_slate_style') || 'blackboard',
  slateContentType: localStorage.getItem('mindpad_slate_content_type') || 'strokes',
  selectedPlayingCard: localStorage.getItem('mindpad_selected_card') || 'AS',
  slateLiveSync: localStorage.getItem('mindpad_slate_live_sync') !== 'false',
  slateRoomId: localStorage.getItem('mindpad_slate_room') || 'SLATE_MIND',
  isSlateRevealed: true,
  isSlateViewActive: false,

  // Ajustes de mentalismo
  orientation: 'portrait_cw',
  detectMode: 'both',
  strokeWidth: 1.2,
  delayMs: 1800,
  vibrate: true,
  ttsRate: 1.2,
  selectedVoice: null,
  stealthCamouflage: localStorage.getItem('mindpad_stealth_camouflage') || 'calculator',
  smartwatchEnabled: false,

  // La Rutina del Sueño & Notas Camufladas
  dreamHour: localStorage.getItem('mindpad_dream_hour') || '03:45',
  dreamName: localStorage.getItem('mindpad_dream_name') || 'Carlos',
  dreamPlace: localStorage.getItem('mindpad_dream_place') || 'París',
  dreamFood: localStorage.getItem('mindpad_dream_food') || 'Tacos',

  // Melodía Telepática & Reproductor de Música Camuflado (iTunes)
  dreamSong: localStorage.getItem('mindpad_dream_song') || 'Bohemian Rhapsody',
  musicTrackTitle: 'Bohemian Rhapsody',
  musicArtistName: 'Queen • A Night at the Opera',
  musicCoverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
  musicAudioUrl: '',
  musicIsPlaying: false,

  // Doodle en Notas
  doodleColor: '#f8fafc',
  doodleBrushSize: 2.5,
  notesDoodleStrokes: [],

  // Reloj & Gestos
  clockInterval: null,
  tripleTapCount: 0,
  tripleTapTimer: null,
  touchStartX: 0,
  touchStartY: 0,
  touchStartTime: 0
};

// Elementos DOM
const $ = (id) => document.getElementById(id);
const previewCanvas = $('previewCanvas');
const pCtx = previewCanvas.getContext('2d');
const stealthCanvas = $('stealthCanvas');
const sCtx = stealthCanvas.getContext('2d');
const chalkCanvas = $('chalkCanvas');
const cCtx = chalkCanvas ? chalkCanvas.getContext('2d') : null;

let silentAudioEl = null;

// ==========================================
// 4. PROTOCOLO BLE & COMUNICACIÓN HUION
// ==========================================
function buildTabletCmd(cmdId) {
  return new Uint8Array([0xCD, cmdId, 0, 0, 0, 0, 0, 0]);
}

async function connectBLE() {
  if (!navigator.bluetooth) {
    alert('Tu navegador no soporta Web Bluetooth. Usa Google Chrome en tu Android.');
    return;
  }

  try {
    $('bleStatusBadge').textContent = 'Buscando...';
    $('bleStatusBadge').className = 'badge searching';

    const device = await navigator.bluetooth.requestDevice({
      filters: [
        { namePrefix: 'Huion' },
        { namePrefix: 'X10' },
        { services: [HUION_SERVICE_UUID] }
      ],
      optionalServices: [HUION_SERVICE_UUID]
    });

    state.bleDevice = device;
    device.addEventListener('gattserverdisconnected', onDisconnected);

    $('bleStatusBadge').textContent = 'Conectando...';
    const server = await device.gatt.connect();
    state.bleServer = server;

    const service = await server.getPrimaryService(HUION_SERVICE_UUID);
    state.writeChar = await service.getCharacteristic(CHAR_WRITE_UUID);
    state.notifyChar = await service.getCharacteristic(CHAR_NOTIFY_UUID);

    await state.notifyChar.startNotifications();
    state.notifyChar.addEventListener('characteristicvaluechanged', handlePenPacket);

    await sendHandshake();

    clearInterval(state.keepAliveTimer);
    state.keepAliveTimer = setInterval(sendKeepAlive, 5000);

    $('bleStatusBadge').textContent = 'Conectada (En vivo)';
    $('bleStatusBadge').className = 'badge connected';
    $('bleConnectBtn').style.display = 'none';
    $('bleDisconnectBtn').style.display = 'inline-block';

    speakTTS('Tableta conectada');
    triggerHaptic([60, 40, 60]);
  } catch (err) {
    console.error('Error BLE:', err);
    $('bleStatusBadge').textContent = 'Desconectada';
    $('bleStatusBadge').className = 'badge disconnected';
    if (err.name !== 'NotFoundError') {
      alert('No se pudo conectar: ' + err.message);
    }
  }
}

async function sendHandshake() {
  try {
    await state.writeChar.writeValueWithoutResponse(buildTabletCmd(CMD_TABLET_NAME));
    await new Promise((r) => setTimeout(r, 80));
    await state.writeChar.writeValueWithoutResponse(buildTabletCmd(CMD_TABLET_INFO));
    await new Promise((r) => setTimeout(r, 80));
    await state.writeChar.writeValueWithoutResponse(buildTabletCmd(CMD_TABLET_VERIFY));
  } catch (e) {
    console.warn('Error en handshake:', e);
  }
}

async function sendKeepAlive() {
  if (!state.writeChar || !state.bleServer?.connected) return;
  try {
    await state.writeChar.writeValueWithoutResponse(buildTabletCmd(CMD_TABLET_BATTERY));
  } catch (e) {}
}

function onDisconnected() {
  $('bleStatusBadge').textContent = 'Desconectada';
  $('bleStatusBadge').className = 'badge disconnected';
  $('bleConnectBtn').style.display = 'inline-block';
  $('bleDisconnectBtn').style.display = 'none';
  clearInterval(state.keepAliveTimer);
  $('penState').textContent = 'Fuera de rango';
  triggerHaptic([200]);
}

// ==========================================
// 5. DECODIFICACIÓN DE PAQUETES (0x55 0x54)
// ==========================================
function handlePenPacket(event) {
  const v = event.target.value;
  if (v.byteLength < 13) return;

  const b0 = v.getUint8(0);
  const b1 = v.getUint8(1);
  if (b0 !== 0x55 || b1 !== 0x54) return;

  const status = v.getUint8(2);
  const xLo = v.getUint8(3) | (v.getUint8(4) << 8);
  const yLo = v.getUint8(5) | (v.getUint8(6) << 8);
  const rawP = v.getUint16(7, true);
  const xHi = v.getUint8(9);
  const yHi = v.getUint8(10);
  const rawX = xLo | (xHi << 16);
  const rawY = yLo | (yHi << 16);

  const nxRaw = Math.max(0, Math.min(1, rawX / state.maxX));
  const nyRaw = Math.max(0, Math.min(1, rawY / state.maxY));
  const [nx, ny] = rotateCoords(nxRaw, nyRaw, state.orientation);

  const pressure = rawP / 8191;
  const isDown = (status === 0x81 && pressure > 0.01);

  $('penState').textContent = isDown ? 'Escribiendo ✍️' : (status === 0x80 ? 'En el aire' : 'Levantado');
  $('penPressure').textContent = (pressure * 100).toFixed(0) + '%';
  $('stealthStatusDot').className = 'stealth-dot ' + (isDown ? 'drawing' : 'active');

  const now = performance.now();

  if (isDown) {
    clearTimeout(state.inactivityTimer);
    if (!state.currentStroke) {
      state.currentStroke = { points: [] };
      state.strokes.push(state.currentStroke);
      if (state.strokes.length === 1 && state.vibrate) {
        triggerHaptic([30]);
      }
    }
    state.currentStroke.points.push({ x: nx, y: ny, p: pressure, t: now });
    renderLiveSegment(state.currentStroke);
  } else {
    if (state.currentStroke) {
      state.currentStroke = null;
      clearTimeout(state.inactivityTimer);
      state.inactivityTimer = setTimeout(onParticipantFinished, state.delayMs);
    }
  }
}

function rotateCoords(nx, ny, orient) {
  if (orient === 'portrait_cw') return [ny, 1.0 - nx];
  if (orient === 'portrait_ccw') return [1.0 - ny, nx];
  if (orient === 'inverted') return [1.0 - nx, 1.0 - ny];
  return [nx, ny];
}

function segmentStrokes(strokes) {
  if (strokes.length < 2) return [strokes];
  const items = strokes.map((s) => {
    let minY = Infinity, maxY = -Infinity, minX = Infinity, maxX = -Infinity;
    s.points.forEach((p) => {
      if (p.x < minX) minX = p.x;
      if (p.x > maxX) maxX = p.x;
      if (p.y < minY) minY = p.y;
      if (p.y > maxY) maxY = p.y;
    });
    return { s, minX, maxX, minY, maxY, h: maxY - minY, w: maxX - minX, cy: (minY + maxY) / 2 };
  });

  items.sort((a, b) => a.cy - b.cy);
  const bands = [];
  items.forEach((it) => {
    let added = false;
    for (const b of bands) {
      // Strokes belong to the same band if they vertically overlap OR if distance between centers is small (< 0.045)
      const overlap = it.minY <= b.maxY && it.maxY >= b.minY;
      const centerDist = Math.abs(it.cy - b.cy);
      if (overlap || centerDist < 0.045) {
        b.items.push(it.s);
        b.minY = Math.min(b.minY, it.minY);
        b.maxY = Math.max(b.maxY, it.maxY);
        b.cy = (b.minY + b.maxY) / 2;
        added = true;
        break;
      }
    }
    if (!added) {
      bands.push({ items: [it.s], minY: it.minY, maxY: it.maxY, cy: it.cy });
    }
  });

  return bands.map((b) => b.items);
}

// ==========================================
// 6. MOTOR DE MENTALISMO & EXTRACCIÓN DE CONCEPTOS
// ==========================================
async function recognizeWithOpenRouterVision(strokes, apiKey) {
  const c = document.createElement('canvas');
  c.width = 600;
  c.height = 800;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, 600, 800);

  strokes.forEach((s) => {
    for (let i = 1; i < s.points.length; i++) {
      drawSeg(ctx, 600, 800, s.points[i - 1], s.points[i], '#c01525', false);
    }
  });

  const base64Data = c.toDataURL('image/jpeg', 0.85);

  const payload = {
    model: 'google/gemini-2.5-flash',
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: 'Eres el asistente secreto de un mentalista. Analiza este dibujo/nota manuscrita. El espectador suele escribir: un número (dígitos), una palabra manuscrita y/o un dibujo (ej. gato, auto, árbol, estrella, cara, etc.). Responde ESTRICTAMENTE un JSON con este formato exacto: {"numero": "...", "palabra": "...", "figura": "...", "figura_en": "..."}. Si alguno no está presente, déjalo como string vacío "". Sin explicaciones ni markdown.'
          },
          {
            type: 'image_url',
            image_url: { url: base64Data }
          }
        ]
      }
    ]
  };

  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey.trim()}`,
      'HTTP-Referer': 'https://johnwolf83.github.io/mindpad-/',
      'X-Title': 'MindPad X10'
    },
    body: JSON.stringify(payload)
  });

  const data = await res.json();
  if (data?.error) throw new Error(data.error.message || 'Error en OpenRouter Vision');

  const content = data?.choices?.[0]?.message?.content || '{}';
  const clean = content.replace(/```json/gi, '').replace(/```/g, '').trim();
  return JSON.parse(clean);
}

async function onParticipantFinished() {
  if (!state.strokes.length) return;

  $('stealthStatusDot').className = 'stealth-dot recognizing';
  $('lastResult').textContent = 'Descifrando mente...';

  if (state.vibrate) triggerHaptic([60, 50, 60]);

  let finalSpeech = '';
  let displayTitle = '';
  let candidates = [];
  let detectedDrawing = '';
  let detectedWord = '';
  let detectedNumber = '';

  const pagePrefix = state.pages.length > 1 ? `Espectador ${state.currentPageIndex + 1}: ` : '';

  if (state.detectMode === 'esp' || state.detectMode === 'digits' || !navigator.onLine) {
    const offlineResult = classifyOffline(state.strokes, state.detectMode);
    finalSpeech = `${pagePrefix}${offlineResult.speech}`;
    displayTitle = offlineResult.title;
    candidates = offlineResult.alternatives;
    detectedDrawing = offlineResult.title;
  } else {
    try {
      let usedVision = false;

      // 1. Si el usuario activó Gemini Vision con su Token de OpenRouter
      if (state.openRouterKey && state.openRouterVision) {
        try {
          const vData = await recognizeWithOpenRouterVision(state.strokes, state.openRouterKey);
          if (vData && (vData.numero || vData.palabra || vData.figura)) {
            detectedNumber = (vData.numero || '').trim();
            detectedWord = (vData.palabra || '').trim();
            detectedDrawing = (vData.figura || '').trim();

            const elements = [];
            if (detectedDrawing) elements.push(`🎨 ${detectedDrawing}`);
            if (detectedWord) elements.push(`✍️ ${detectedWord}`);
            if (detectedNumber) elements.push(`🔢 ${detectedNumber}`);

            displayTitle = elements.join(' • ') || '✨ Trazo analizado';
            finalSpeech = `${pagePrefix}Mente leída: ${detectedDrawing ? 'Figura ' + detectedDrawing + '. ' : ''}${detectedWord ? 'Palabra ' + detectedWord + '. ' : ''}${detectedNumber ? 'Número ' + detectedNumber : ''}`.trim();
            candidates = [detectedDrawing, detectedWord, detectedNumber].filter(Boolean);
            usedVision = true;
          }
        } catch (vErr) {
          console.warn('OpenRouter Vision falló o no respondió JSON, recurriendo a reconocedor local:', vErr);
        }
      }

      if (!usedVision) {
        const mode = state.detectMode;
        const bands = segmentStrokes(state.strokes);

        let drawingStrokes = state.strokes;
        let textStrokes = state.strokes;

        // Si el espectador escribió varios renglones (número, palabra y dibujo separados)
        if (bands.length >= 2) {
          // Consultar OCR para cada banda
          const bandOcrPromises = bands.map((b) => recognizeText(b));
          const bandOcrResults = await Promise.all(bandOcrPromises);

          let drawingBandIndex = -1;
          let lowestOcrLen = Infinity;

          bandOcrResults.forEach((res, idx) => {
            const txt = (res?.[0] || '').trim();
            const numMatch = txt.match(/\b\d{2,8}\b/);
            if (numMatch && !detectedNumber) {
              detectedNumber = numMatch[0];
            } else if (txt.length >= 2 && !detectedWord) {
              const clean = txt.replace(/[\d\W_]+/g, ' ').trim();
              if (clean) detectedWord = clean;
            }

            // La banda con menos caracteres reconocibles suele ser el dibujo
            if (txt.length < lowestOcrLen) {
              lowestOcrLen = txt.length;
              drawingBandIndex = idx;
            }
          });

          if (drawingBandIndex !== -1) {
            drawingStrokes = bands[drawingBandIndex];
          }
        }

        let drawingPromise = null;
        let textPromise = null;

        if (mode === 'both' || mode === 'drawing') drawingPromise = recognizeDrawing(drawingStrokes);
        if (mode === 'both' || mode === 'text') textPromise = recognizeText(textStrokes);

        const [drawingResults, textResults] = await Promise.all([drawingPromise, textPromise]);

        const topText = textResults?.[0] || '';
        const topDrawingEn = drawingResults?.[0] || '';
        const topDrawingEs = QUICKDRAW_ES[topDrawingEn] || topDrawingEn;

        detectedDrawing = topDrawingEs;

        if (!detectedNumber) {
          const numMatch = topText.match(/\b\d{2,8}\b/);
          if (numMatch) detectedNumber = numMatch[0];
        }
        if (!detectedWord) {
          const wordClean = topText.replace(/[\d\W_]+/g, ' ').trim();
          if (wordClean) detectedWord = wordClean;
        }

        if (mode === 'drawing' && drawingResults?.length) {
          finalSpeech = `${pagePrefix}Dibujo: ${topDrawingEs}`;
          displayTitle = `🎨 ${topDrawingEs.toUpperCase()}`;
          candidates = drawingResults.map((w) => QUICKDRAW_ES[w] || w);
        } else if (mode === 'text' && textResults?.length) {
          finalSpeech = `${pagePrefix}${topText}`;
          displayTitle = `✍️ ${topText}`;
          candidates = textResults;
        } else if (mode === 'both') {
          const espCheck = classifyOffline(drawingStrokes, 'esp');
          if (espCheck.confidence > 0.85) {
            finalSpeech = `${pagePrefix}${espCheck.speech}`;
            displayTitle = espCheck.title;
            candidates = [espCheck.title, topDrawingEs, topText];
          } else if (topText && topText.length >= 3 && !/^[._\-\s]+$/.test(topText)) {
            finalSpeech = `${pagePrefix}${topText}. O dibujo de ${topDrawingEs}`;
            displayTitle = `✍️ ${topText}  /  🎨 ${topDrawingEs}`;
            candidates = [topText, topDrawingEs, ...(textResults?.slice(1, 4) || [])];
          } else {
            finalSpeech = `${pagePrefix}Dibujo: ${topDrawingEs}`;
            displayTitle = `🎨 ${topDrawingEs.toUpperCase()}`;
            candidates = [topDrawingEs, ...(drawingResults?.slice(1, 5).map((w) => QUICKDRAW_ES[w] || w) || [])];
          }
        }
      }
    } catch (err) {
      console.warn('Fallo consulta online, usando motor offline:', err);
      const offlineResult = classifyOffline(state.strokes, state.detectMode);
      finalSpeech = `${pagePrefix}${offlineResult.speech}`;
      displayTitle = offlineResult.title;
      candidates = offlineResult.alternatives;
      detectedDrawing = offlineResult.title;
    }
  }

  if (finalSpeech) {
    state.lastSpokenText = finalSpeech;
    state.currentDrawing = detectedDrawing || state.currentDrawing;
    state.currentWord = detectedWord || state.currentWord;
    state.currentNumber = detectedNumber || state.currentNumber;

    $('lastResult').textContent = displayTitle;
    $('stealthOverlayText').textContent = displayTitle;
    renderCandidates(candidates);

    // Actualizar campos editables de la IA
    if ($('conceptDrawing')) $('conceptDrawing').value = state.currentDrawing;
    if ($('conceptWord')) $('conceptWord').value = state.currentWord;
    if ($('conceptNumber')) $('conceptNumber').value = state.currentNumber;

    updateAIPromptFromDetection(state.currentDrawing, state.currentWord, state.currentNumber);

    state.pages[state.currentPageIndex] = {
      strokes: JSON.parse(JSON.stringify(state.strokes)),
      displayTitle,
      speech: finalSpeech,
      drawing: state.currentDrawing,
      word: state.currentWord,
      number: state.currentNumber
    };

    speakTTS(finalSpeech);
    if (state.vibrate) triggerHaptic([120]);

    const haylouText = `${state.currentDrawing ? '🎨 ' + state.currentDrawing : ''} ${state.currentWord ? '• ✍️ ' + state.currentWord : ''} ${state.currentNumber ? '• 🔢 ' + state.currentNumber : ''}`.trim() || finalSpeech;
    sendToSmartwatch('MindPad Peek', haylouText);

    if ($('autoGenerateAICheck') && $('autoGenerateAICheck').checked) {
      generateAIImage();
    }
  }

  $('stealthStatusDot').className = 'stealth-dot ready';
}

// ----------------------------------------------------
// MOTOR OFFLINE HEURÍSTICO (ESP Zener & Dígitos 0-9)
// ----------------------------------------------------
function classifyOffline(strokes, mode = 'both') {
  const allPts = strokes.flatMap((s) => s.points);
  if (!allPts.length) return { title: '—', speech: 'Vacío', confidence: 0, alternatives: [] };

  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  allPts.forEach((p) => {
    if (p.x < minX) minX = p.x; if (p.x > maxX) maxX = p.x;
    if (p.y < minY) minY = p.y; if (p.y > maxY) maxY = p.y;
  });

  const w = Math.max(0.001, maxX - minX);
  const h = Math.max(0.001, maxY - minY);
  const aspect = w / h;
  const numStrokes = strokes.length;

  const firstS = strokes[0].points;
  const startPt = firstS[0];
  const endPt = firstS[firstS.length - 1];
  const closeDist = Math.hypot(startPt.x - endPt.x, startPt.y - endPt.y);
  const isLoop = closeDist < Math.max(w, h) * 0.28;

  let totalLen = 0;
  for (let i = 1; i < firstS.length; i++) {
    totalLen += Math.hypot(firstS[i].x - firstS[i - 1].x, firstS[i].y - firstS[i - 1].y);
  }

  if (mode === 'esp' || mode === 'both') {
    if (numStrokes === 2) {
      const s1 = strokes[0].points;
      const s2 = strokes[1].points;
      const s1Horiz = Math.abs(s1[s1.length - 1].x - s1[0].x) > Math.abs(s1[s1.length - 1].y - s1[0].y);
      const s2Horiz = Math.abs(s2[s2.length - 1].x - s2[0].x) > Math.abs(s2[s2.length - 1].y - s2[0].y);
      if (s1Horiz !== s2Horiz) {
        return { title: '✚ CRUZ (ESP)', speech: 'Símbolo: Cruz', confidence: 0.95, alternatives: ['Cruz', 'Más'] };
      }
    }
    if (numStrokes >= 2 && numStrokes <= 3 && aspect > 1.3) {
      return { title: '♒ ONDAS (ESP)', speech: 'Símbolo: Ondas', confidence: 0.92, alternatives: ['Ondas', 'Líneas'] };
    }
    if (numStrokes === 1 && isLoop && aspect >= 0.75 && aspect <= 1.35) {
      return { title: '⭕ CÍRCULO (ESP)', speech: 'Símbolo: Círculo', confidence: 0.9, alternatives: ['Círculo', 'Cero'] };
    }
    if ((numStrokes === 1 || numStrokes === 4) && aspect >= 0.8 && aspect <= 1.25) {
      return { title: '⬛ CUADRADO (ESP)', speech: 'Símbolo: Cuadrado', confidence: 0.85, alternatives: ['Cuadrado', 'Caja'] };
    }
    if (totalLen > Math.max(w, h) * 3.5) {
      return { title: '⭐ ESTRELLA (ESP)', speech: 'Símbolo: Estrella', confidence: 0.88, alternatives: ['Estrella'] };
    }
  }

  if (mode === 'digits' || mode === 'both') {
    if (numStrokes === 1) {
      if (isLoop && aspect >= 0.6 && aspect <= 1.2) {
        return { title: '0️⃣ NÚMERO CERO', speech: 'Número cero', confidence: 0.9, alternatives: ['0'] };
      }
      if (aspect < 0.45 && !isLoop) {
        return { title: '1️⃣ NÚMERO UNO', speech: 'Número uno', confidence: 0.95, alternatives: ['1'] };
      }
      if (aspect > 0.5 && !isLoop && startPt.y < minY + h * 0.3 && endPt.y > maxY - h * 0.3) {
        return { title: '7️⃣ NÚMERO SIETE', speech: 'Número siete', confidence: 0.85, alternatives: ['7'] };
      }
      if (totalLen > Math.max(w, h) * 4.0) {
        return { title: '8️⃣ NÚMERO OCHO', speech: 'Número ocho', confidence: 0.82, alternatives: ['8'] };
      }
    }
    if (numStrokes === 2) {
      return { title: '4️⃣ NÚMERO CUATRO', speech: 'Número cuatro', confidence: 0.86, alternatives: ['4'] };
    }
  }

  return { title: '✨ TRAZO DETECTADO', speech: 'Forma reconocida', confidence: 0.5, alternatives: ['Dibujo'] };
}

// Reconocimiento Online QuickDraw
async function recognizeDrawing(strokes) {
  const ink = toQuickDrawInk(strokes, 256, 256);
  const payload = {
    options: 'enable_pre_space',
    requests: [{
      writing_guide: { writing_area_width: 256, writing_area_height: 256 },
      ink,
      language: 'quickdraw'
    }]
  };
  const res = await fetch('https://inputtools.google.com/request?ime=handwriting&app=autodraw&dbg=1&cs=1&oe=UTF-8', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  const data = await res.json();
  return data[0] === 'SUCCESS' ? data[1]?.[0]?.[1] || [] : [];
}

// Reconocimiento Online Texto
async function recognizeText(strokes) {
  const ink = toQuickDrawInk(strokes, 600, 300);
  const payload = {
    options: 'enable_pre_space',
    requests: [{
      writing_guide: { writing_area_width: 600, writing_area_height: 300 },
      ink,
      language: 'es'
    }]
  };
  const res = await fetch('https://inputtools.google.com/request?itc=es-t-i0-handwrit&app=mindpadx10', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  const data = await res.json();
  return data[0] === 'SUCCESS' ? data[1]?.[0]?.[1] || [] : [];
}

function toQuickDrawInk(strokes, targetW, targetH) {
  const allPts = strokes.flatMap((s) => s.points);
  if (!allPts.length) return [];

  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  allPts.forEach((p) => {
    if (p.x < minX) minX = p.x; if (p.x > maxX) maxX = p.x;
    if (p.y < minY) minY = p.y; if (p.y > maxY) maxY = p.y;
  });

  const w = Math.max(0.001, maxX - minX);
  const h = Math.max(0.001, maxY - minY);
  const scale = Math.min((targetW - 20) / w, (targetH - 20) / h);
  const t0 = strokes[0].points[0].t;

  return strokes.map((s) => {
    const xs = [];
    const ys = [];
    const ts = [];
    s.points.forEach((pt) => {
      xs.push(Math.round(10 + (pt.x - minX) * scale));
      ys.push(Math.round(10 + (pt.y - minY) * scale));
      ts.push(Math.round(pt.t - t0));
    });
    return [xs, ys, ts];
  });
}

function renderCandidates(list) {
  const container = $('confidenceList');
  container.innerHTML = '';
  list.slice(0, 6).forEach((item) => {
    const badge = document.createElement('span');
    badge.className = 'cand-badge';
    badge.textContent = item;
    badge.onclick = () => {
      speakTTS(item);
      state.currentDrawing = item;
      if ($('conceptDrawing')) $('conceptDrawing').value = item;
      updateAIPromptFromDetection(state.currentDrawing, state.currentWord, state.currentNumber);
    };
    container.appendChild(badge);
  });
}

// ==========================================
// 7. GESTIÓN MULTI-ESPECTADOR & PÁGINAS
// ==========================================
function updatePageUI() {
  const num = state.currentPageIndex + 1;
  const total = state.pages.length;
  $('pageBadge').textContent = `Espectador ${num} de ${total}`;
  $('stealthPageIndicator').textContent = `P${num}`;

  const cur = state.pages[state.currentPageIndex];
  state.strokes = cur?.strokes ? JSON.parse(JSON.stringify(cur.strokes)) : [];
  $('lastResult').textContent = cur?.displayTitle || '— Esperando trazos —';
  $('stealthOverlayText').textContent = cur?.displayTitle || '';
  redrawAllStrokes();
}

function addNewPage() {
  state.pages[state.currentPageIndex] = {
    strokes: JSON.parse(JSON.stringify(state.strokes)),
    displayTitle: $('lastResult').textContent,
    speech: state.lastSpokenText,
    drawing: state.currentDrawing,
    word: state.currentWord,
    number: state.currentNumber
  };

  state.pages.push({ strokes: [], displayTitle: '', speech: '', drawing: '', word: '', number: '' });
  state.currentPageIndex = state.pages.length - 1;
  state.strokes = [];
  state.currentStroke = null;
  state.lastSpokenText = '';

  updatePageUI();
  speakTTS(`Página ${state.currentPageIndex + 1} lista`);
  triggerHaptic([50, 40, 50]);
}

function prevPage() {
  if (state.currentPageIndex > 0) {
    state.currentPageIndex--;
    updatePageUI();
    const p = state.pages[state.currentPageIndex];
    if (p.speech) speakTTS(`Página ${state.currentPageIndex + 1}: ${p.speech}`);
    triggerHaptic([40]);
  }
}

function nextPage() {
  if (state.currentPageIndex < state.pages.length - 1) {
    state.currentPageIndex++;
    updatePageUI();
    const p = state.pages[state.currentPageIndex];
    if (p.speech) speakTTS(`Página ${state.currentPageIndex + 1}: ${p.speech}`);
    triggerHaptic([40]);
  }
}

// ==========================================
// 8. SMARTWATCH / NOTIFICACIONES (HAYLOU & WEAR OS)
// ==========================================
function generateThumbnail(strokes) {
  const c = document.createElement('canvas');
  c.width = 300;
  c.height = 300;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, 300, 300);

  strokes.forEach((s) => {
    for (let i = 1; i < s.points.length; i++) {
      drawSeg(ctx, 300, 300, s.points[i - 1], s.points[i], '#ff3344', true);
    }
  });
  return c.toDataURL('image/png');
}

async function enableSmartwatch() {
  if (!('Notification' in window)) {
    alert('Las notificaciones no están disponibles en este navegador.');
    return;
  }
  const perm = await Notification.requestPermission();
  if (perm === 'granted') {
    state.smartwatchEnabled = true;
    $('watchNotifyBtn').textContent = '⌚ Smartwatch Activado ✓';
    $('watchNotifyBtn').classList.add('active');
    sendToSmartwatch('MindPad Conectado', 'Lecturas sincronizadas con tu reloj');
  } else {
    alert('Permiso de notificaciones denegado en Chrome.');
  }
}

function sendToSmartwatch(title, body) {
  const thumbUrl = generateThumbnail(state.strokes);
  const cleanBody = (body || title || 'Nuevo trazo detectado').replace(/[\r\n]+/g, ' ').slice(0, 120);

  const notifOptions = {
    body: cleanBody,
    icon: thumbUrl,
    image: thumbUrl,
    badge: 'icon.svg',
    vibrate: [300, 150, 300],
    tag: 'mindpad-peek'
  };

  if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
    navigator.serviceWorker.ready.then((reg) => {
      reg.showNotification('MindPad Peek', notifOptions);
    }).catch(() => {
      new Notification('MindPad Peek', notifOptions);
    });
  } else {
    try {
      new Notification('MindPad Peek', notifOptions);
    } catch (e) {}
  }

  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: 'MindPad',
      artist: cleanBody,
      artwork: [{ src: thumbUrl, sizes: '300x300', type: 'image/png' }]
    });
  }
}

function testHaylouSolar() {
  if (Notification.permission !== 'granted') {
    Notification.requestPermission().then((p) => {
      if (p === 'granted') {
        state.smartwatchEnabled = true;
        sendToSmartwatch('MindPad Peek', '🎄 Árbol • ✍️ Navidad • 🔢 532142');
      } else {
        alert('Permiso de notificaciones denegado en Chrome.');
      }
    });
  } else {
    state.smartwatchEnabled = true;
    sendToSmartwatch('MindPad Peek', '🎄 Árbol • ✍️ Navidad • 🔢 532142');
  }
}

// ==========================================
// 9. AUDIO DE FONDO & BOTONES DE AURICULAR
// ==========================================
function startSilentAudioLoop() {
  if (!silentAudioEl) {
    silentAudioEl = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA');
    silentAudioEl.loop = true;
    silentAudioEl.volume = 0.01;
  }
  silentAudioEl.play().catch(() => {});

  if ('mediaSession' in navigator) {
    navigator.mediaSession.setActionHandler('previoustrack', () => prevPage());
    navigator.mediaSession.setActionHandler('nexttrack', () => addNewPage());
    navigator.mediaSession.setActionHandler('pause', () => {
      if (state.lastSpokenText) speakTTS(state.lastSpokenText);
    });
    navigator.mediaSession.setActionHandler('play', () => {
      if (state.lastSpokenText) speakTTS(state.lastSpokenText);
    });
  }
}

function initTTS() {
  if (!('speechSynthesis' in window)) return;
  function populateVoices() {
    const voices = window.speechSynthesis.getVoices();
    const esVoices = voices.filter((v) => v.lang.startsWith('es'));
    state.selectedVoice = esVoices[0] || voices[0] || null;
  }
  populateVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }
}

function speakTTS(text) {
  if (!('speechSynthesis' in window) || !text) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.rate = state.ttsRate;
  u.pitch = 1.0;
  if (state.selectedVoice) u.voice = state.selectedVoice;
  window.speechSynthesis.speak(u);
}

function triggerHaptic(pattern) {
  if (navigator.vibrate) navigator.vibrate(pattern);
}

// ==========================================
// 10. RENDERIZADO VISUAL & PROPORCIÓN 3:4
// ==========================================
function resizeCanvases() {
  const dpr = window.devicePixelRatio || 1;

  const pRect = previewCanvas.parentElement.getBoundingClientRect();
  previewCanvas.width = pRect.width * dpr;
  previewCanvas.height = 260 * dpr;
  pCtx.scale(dpr, dpr);

  stealthCanvas.width = window.innerWidth * dpr;
  stealthCanvas.height = window.innerHeight * dpr;
  sCtx.scale(dpr, dpr);

  if (chalkCanvas && cCtx) {
    chalkCanvas.width = window.innerWidth * dpr;
    chalkCanvas.height = window.innerHeight * dpr;
    cCtx.scale(dpr, dpr);
    redrawChalkSlate();
  }

  redrawAllStrokes();
}
window.addEventListener('resize', resizeCanvases);

function getViewport(canvasW, canvasH) {
  const isPortrait = state.orientation.startsWith('portrait');
  const targetAspect = isPortrait ? (28200 / 37400) : (37400 / 28200);
  const canvasAspect = canvasW / canvasH;
  let renderW, renderH, offsetX, offsetY;

  if (canvasAspect > targetAspect) {
    renderH = canvasH;
    renderW = renderH * targetAspect;
    offsetX = (canvasW - renderW) / 2;
    offsetY = 0;
  } else {
    renderW = canvasW;
    renderH = renderW / targetAspect;
    offsetX = 0;
    offsetY = (canvasH - renderH) / 2;
  }
  return { offsetX, offsetY, renderW, renderH };
}

function renderLiveSegment(stroke) {
  const pts = stroke.points;
  if (pts.length < 2) return;
  const a = pts[pts.length - 2];
  const b = pts[pts.length - 1];

  drawSeg(pCtx, previewCanvas.clientWidth, previewCanvas.clientHeight, a, b, '#7c8cff', false);
  drawSeg(sCtx, window.innerWidth, window.innerHeight, a, b, '#e63946', true);
}

function drawSeg(ctx, w, h, a, b, color, isStealth = false) {
  const vp = getViewport(w, h);
  const x1 = vp.offsetX + a.x * vp.renderW;
  const y1 = vp.offsetY + a.y * vp.renderH;
  const x2 = vp.offsetX + b.x * vp.renderW;
  const y2 = vp.offsetY + b.y * vp.renderH;

  ctx.strokeStyle = color;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  const factor = isStealth ? state.strokeWidth : Math.max(0.9, state.strokeWidth * 1.1);
  ctx.lineWidth = Math.max(0.6, (a.p + b.p) * factor);
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function redrawAllStrokes() {
  pCtx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);
  sCtx.clearRect(0, 0, stealthCanvas.width, stealthCanvas.height);

  state.strokes.forEach((s) => {
    for (let i = 1; i < s.points.length; i++) {
      drawSeg(pCtx, previewCanvas.clientWidth, previewCanvas.clientHeight, s.points[i - 1], s.points[i], '#7c8cff', false);
      drawSeg(sCtx, window.innerWidth, window.innerHeight, s.points[i - 1], s.points[i], '#e63946', true);
    }
  });

  if (state.slateLiveSync && typeof redrawChalkSlate === 'function') {
    redrawChalkSlate();
    broadcastSlateUpdate();
  }

  if (typeof redrawNotesDoodleCanvas === 'function') {
    redrawNotesDoodleCanvas();
  }
}

// Reloj Always-On y Pantalla de Bloqueo
function startClocks() {
  function updateTime() {
    const d = new Date();
    const h = String(d.getHours()).padStart(2, '0');
    const m = String(d.getMinutes()).padStart(2, '0');
    const timeStr = `${h}:${m}`;

    $('clockTime').textContent = timeStr;
    $('lockClockTime').textContent = timeStr;
    $('lockStatusTime').textContent = timeStr;
    if ($('calcTime')) $('calcTime').textContent = timeStr;
    if ($('notesStatusTime')) $('notesStatusTime').textContent = timeStr;

    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    $('lockClockDate').textContent = `${dias[d.getDay()]}, ${d.getDate()} de ${meses[d.getMonth()]}`;
  }
  updateTime();
  clearInterval(state.clockInterval);
  state.clockInterval = setInterval(updateTime, 1000);
}

// Entrar / Salir de Modo Sigiloso
function enterStealthMode(forcedMode) {
  if (forcedMode) {
    state.stealthCamouflage = forcedMode;
    if ($('stealthCamouflage')) $('stealthCamouflage').value = forcedMode;
  }
  $('setupView').style.display = 'none';
  $('stealthView').style.display = 'block';
  document.body.className = 'mode-stealth';

  const isCalc = state.stealthCamouflage === 'calculator';
  const isNotes = state.stealthCamouflage === 'notes';
  const isPlayer = state.stealthCamouflage === 'player';
  const isLock = state.stealthCamouflage === 'lockscreen';
  const isAOD = !isCalc && !isNotes && !isPlayer && !isLock;

  if ($('fakeCalculator')) $('fakeCalculator').style.display = isCalc ? 'flex' : 'none';
  if ($('fakeNotes')) $('fakeNotes').style.display = isNotes ? 'flex' : 'none';
  if ($('fakeMusicPlayer')) $('fakeMusicPlayer').style.display = isPlayer ? 'flex' : 'none';
  if ($('fakeLockscreen')) $('fakeLockscreen').style.display = isLock ? 'flex' : 'none';
  if ($('aodClock')) $('aodClock').style.display = isAOD ? 'block' : 'none';

  if (isNotes) {
    updateDreamNoteDOM();
    setTimeout(() => {
      initNotesDoodle();
    }, 40);
  }

  startClocks();
  startSilentAudioLoop();
  resizeCanvases();
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen().catch(() => {});
  }
}

function exitStealthMode() {
  $('stealthView').style.display = 'none';
  $('setupView').style.display = 'block';
  document.body.className = 'mode-setup';
  clearInterval(state.clockInterval);
  resizeCanvases();
  if (document.exitFullscreen) {
    document.exitFullscreen().catch(() => {});
  }
}

// Peek táctil & Zonas de control ciego en el bolsillo
const stealthView = $('stealthView');
const peekContainer = $('peekContainer');

function showPeek() {
  peekContainer.style.opacity = '1';
  peekContainer.style.pointerEvents = 'auto';
  $('fakeLockscreen').style.opacity = '0';
  $('aodClock').style.opacity = '0.05';
  if ($('fakeCalculator')) $('fakeCalculator').style.opacity = '0.02';
}
function hidePeek() {
  peekContainer.style.opacity = '0';
  peekContainer.style.pointerEvents = 'none';
  $('fakeLockscreen').style.opacity = '1';
  $('aodClock').style.opacity = '0.85';
  if ($('fakeCalculator')) $('fakeCalculator').style.opacity = '1';
}

// Cerrar peek al tocar sobre él
peekContainer.addEventListener('click', hidePeek);
peekContainer.addEventListener('touchend', hidePeek);

stealthView.addEventListener('touchstart', (e) => {
  if (e.target.id === 'exitStealthTrigger') return;
  // Si estamos en la calculadora, notas o reproductor, no activar peek con toques en su UI
  if (
    (state.stealthCamouflage === 'calculator' && e.target.closest('#fakeCalculator')) ||
    (state.stealthCamouflage === 'notes' && e.target.closest('#fakeNotes')) ||
    (state.stealthCamouflage === 'player' && e.target.closest('#fakeMusicPlayer'))
  ) {
    return;
  }
  state.touchStartX = e.touches[0].clientX;
  state.touchStartY = e.touches[0].clientY;
  state.touchStartTime = performance.now();
  showPeek();
});

stealthView.addEventListener('touchend', (e) => {
  hidePeek();
  const touchDuration = performance.now() - state.touchStartTime;

  if (e.changedTouches && e.changedTouches[0]) {
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const diffX = endX - state.touchStartX;
    const diffY = endY - state.touchStartY;

    // Swipe horizontal claro (> 70px) para cambiar de espectador
    if (Math.abs(diffX) > 70 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 70) prevPage();
      else if (diffX < -70) nextPage();
      return;
    }

    // Tap rápido a ciegas en el bolsillo (< 280ms)
    if (touchDuration < 280 && Math.hypot(diffX, diffY) < 25) {
      const screenH = window.innerHeight;
      if (endY < screenH * 0.45) {
        // Mitad superior = Nueva página / Siguiente espectador
        addNewPage();
      } else if (endY > screenH * 0.55) {
        // Mitad inferior = Repetir susurro de audio
        if (state.lastSpokenText) speakTTS(state.lastSpokenText);
      }
    }
  }
});

stealthView.addEventListener('touchcancel', hidePeek);
stealthView.addEventListener('mousedown', (e) => {
  if (e.target.id === 'exitStealthTrigger') return;
  if (
    (state.stealthCamouflage === 'calculator' && e.target.closest('#fakeCalculator')) ||
    (state.stealthCamouflage === 'notes' && e.target.closest('#fakeNotes')) ||
    (state.stealthCamouflage === 'player' && e.target.closest('#fakeMusicPlayer'))
  ) {
    return;
  }
  showPeek();
});
stealthView.addEventListener('mouseup', hidePeek);

// Salir con triple tap en esquina superior derecha o tecla Escape
function handleExitTap(e) {
  if (e) {
    if (e.cancelable && e.type === 'touchstart') e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
  }
  state.tripleTapCount++;
  clearTimeout(state.tripleTapTimer);
  state.tripleTapTimer = setTimeout(() => { state.tripleTapCount = 0; }, 700);
  if (state.tripleTapCount >= 3) {
    state.tripleTapCount = 0;
    triggerHaptic([30, 40, 50]);
    exitStealthMode();
  }
}

const exitTrigger = $('exitStealthTrigger');
if (exitTrigger) {
  exitTrigger.addEventListener('touchstart', handleExitTap, { passive: false });
  exitTrigger.addEventListener('click', handleExitTap);
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && $('stealthView').style.display !== 'none') {
    exitStealthMode();
  }
});

// Repetir audio al tocar el reloj
$('lockClockTime').addEventListener('click', (e) => {
  e.stopPropagation();
  if (state.lastSpokenText) speakTTS(state.lastSpokenText);
});
$('aodClock').addEventListener('click', (e) => {
  e.stopPropagation();
  if (state.lastSpokenText) speakTTS(state.lastSpokenText);
});

// ==========================================
// 6. MOTOR DE CALCULADORA DE CAMUFLAJE
// ==========================================
let calcState = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function updateCalcDisplay() {
  const resEl = $('calcResult');
  const formEl = $('calcFormula');
  if (resEl) {
    let val = calcState.displayValue;
    if (val.length > 10 && !isNaN(parseFloat(val))) {
      val = parseFloat(val).toPrecision(6);
    }
    resEl.textContent = val;
  }
  if (formEl) {
    if (calcState.operator && calcState.firstOperand !== null) {
      const opSymbol = calcState.operator === '*' ? '×' : calcState.operator === '/' ? '÷' : calcState.operator === '-' ? '−' : '+';
      formEl.textContent = `${calcState.firstOperand} ${opSymbol}`;
    } else {
      formEl.textContent = '';
    }
  }
  const acBtn = document.querySelector('.calc-btn[data-action="clear"]');
  if (acBtn) {
    acBtn.textContent = calcState.displayValue !== '0' || calcState.firstOperand !== null ? 'C' : 'AC';
  }
}

function inputCalcDigit(digit) {
  if (calcState.waitingForSecondOperand) {
    calcState.displayValue = digit;
    calcState.waitingForSecondOperand = false;
  } else {
    calcState.displayValue = calcState.displayValue === '0' ? digit : calcState.displayValue + digit;
  }
  updateCalcDisplay();
}

function inputCalcDecimal() {
  if (calcState.waitingForSecondOperand) {
    calcState.displayValue = '0.';
    calcState.waitingForSecondOperand = false;
    updateCalcDisplay();
    return;
  }
  if (!calcState.displayValue.includes('.')) {
    calcState.displayValue += '.';
  }
  updateCalcDisplay();
}

function handleCalcOperator(nextOperator) {
  const inputValue = parseFloat(calcState.displayValue);

  if (calcState.operator && calcState.waitingForSecondOperand) {
    calcState.operator = nextOperator;
    updateCalcDisplay();
    return;
  }

  if (calcState.firstOperand === null && !isNaN(inputValue)) {
    calcState.firstOperand = inputValue;
  } else if (calcState.operator) {
    const result = executeCalc(calcState.firstOperand, inputValue, calcState.operator);
    calcState.displayValue = `${parseFloat(Number(result).toFixed(7))}`;
    calcState.firstOperand = result;
  }

  calcState.waitingForSecondOperand = true;
  calcState.operator = nextOperator;
  updateCalcDisplay();
}

function executeCalc(first, second, op) {
  if (op === '+') return first + second;
  if (op === '-') return first - second;
  if (op === '*') return first * second;
  if (op === '/') return second !== 0 ? first / second : 'Error';
  return second;
}

function resetCalculator() {
  calcState.displayValue = '0';
  calcState.firstOperand = null;
  calcState.waitingForSecondOperand = false;
  calcState.operator = null;
  updateCalcDisplay();
}

function initCalculator() {
  const keypad = document.querySelector('.calc-keypad');
  if (!keypad) return;

  keypad.addEventListener('click', (e) => {
    const btn = e.target.closest('.calc-btn');
    if (!btn) return;
    triggerHaptic([12]);

    if (btn.dataset.val !== undefined) {
      if (btn.dataset.val === '.') {
        inputCalcDecimal();
      } else {
        inputCalcDigit(btn.dataset.val);
      }
      return;
    }

    const action = btn.dataset.action;
    if (!action) return;

    if (action === 'clear') {
      resetCalculator();
    } else if (action === 'plusminus') {
      const val = parseFloat(calcState.displayValue);
      if (!isNaN(val)) {
        calcState.displayValue = String(val * -1);
        updateCalcDisplay();
      }
    } else if (action === 'percent') {
      const val = parseFloat(calcState.displayValue);
      if (!isNaN(val)) {
        calcState.displayValue = String(val / 100);
        updateCalcDisplay();
      }
    } else if (['add', 'subtract', 'multiply', 'divide'].includes(action)) {
      const opMap = { add: '+', subtract: '-', multiply: '*', divide: '/' };
      handleCalcOperator(opMap[action]);
    } else if (action === 'equals') {
      // Código secreto de salida PIN: 999= o 12345=
      if (calcState.displayValue === '999' || calcState.displayValue === '12345') {
        exitStealthMode();
        resetCalculator();
        return;
      }
      if (calcState.operator && calcState.firstOperand !== null) {
        const inputValue = parseFloat(calcState.displayValue);
        const result = executeCalc(calcState.firstOperand, inputValue, calcState.operator);
        calcState.displayValue = `${parseFloat(Number(result).toFixed(7))}`;
        calcState.firstOperand = null;
        calcState.operator = null;
        calcState.waitingForSecondOperand = true;
        updateCalcDisplay();
      }
    }
  });

  // Peek al presionar el display de la calculadora (3 toques o mantener presionado)
  const displayBox = $('calcDisplayBox');
  if (displayBox) {
    let tapCount = 0;
    let tapTimer = null;
    let longPressTimer = null;

    displayBox.addEventListener('click', (e) => {
      e.stopPropagation();
      tapCount++;
      clearTimeout(tapTimer);
      if (tapCount >= 3) {
        tapCount = 0;
        triggerHaptic([40, 40]);
        showPeek();
        setTimeout(hidePeek, 4000);
        return;
      }
      tapTimer = setTimeout(() => { tapCount = 0; }, 450);
    });

    displayBox.addEventListener('touchstart', (e) => {
      e.stopPropagation();
      longPressTimer = setTimeout(() => {
        triggerHaptic([50]);
        showPeek();
      }, 380);
    });

    displayBox.addEventListener('touchend', (e) => {
      e.stopPropagation();
      clearTimeout(longPressTimer);
    });
  }
}

// ==========================================
// 7. CAPAS DE PRESENTACIÓN & RUTINAS
// ==========================================
let theatricalTimerInterval = null;
let theatricalSeconds = 0;

function switchPresentationLayer(layerNum) {
  state.currentLayer = layerNum;
  for (let i = 1; i <= 6; i++) {
    const btn = $(`layer${i}Btn`);
    if (btn) btn.className = `btn small ${layerNum === i ? 'primary active' : 'secondary'}`;
    const content = $(`layer${i}Content`);
    if (content) content.style.display = layerNum === i ? 'block' : 'none';
  }

  const badges = {
    1: 'Capa 1: Post-it',
    2: 'Capa 2: Redes / VIP',
    3: 'Capa 3: TV / Sprocket',
    4: 'Capa 4: Pizarra E-Ink',
    5: 'Capa 5: El Sueño (Notas)',
    6: 'Capa 6: Canción Pensada'
  };
  if ($('activeLayerBadge')) $('activeLayerBadge').textContent = badges[layerNum] || `Capa ${layerNum}`;

  if (layerNum === 1) {
    state.stealthCamouflage = 'calculator';
    if ($('stealthCamouflage')) $('stealthCamouflage').value = 'calculator';
    localStorage.setItem('mindpad_stealth_camouflage', 'calculator');
  } else if (layerNum === 2) {
    if (state.exifDaysBack === 0) {
      state.exifDaysBack = 3;
      if ($('exifDaysBackSelect')) $('exifDaysBackSelect').value = '3';
      localStorage.setItem('mindpad_exif_days_back', '3');
    }
  } else if (layerNum === 3) {
    state.autoSavePocketPrinter = true;
    if ($('autoSavePocketPrinterCheck')) $('autoSavePocketPrinterCheck').checked = true;
    localStorage.setItem('mindpad_auto_save_printer', 'true');
  } else if (layerNum === 4) {
    state.slateLiveSync = true;
    if ($('slateLiveSyncCheck')) $('slateLiveSyncCheck').checked = true;
    localStorage.setItem('mindpad_slate_live_sync', 'true');
  } else if (layerNum === 5) {
    state.stealthCamouflage = 'notes';
    if ($('stealthCamouflage')) $('stealthCamouflage').value = 'notes';
    localStorage.setItem('mindpad_stealth_camouflage', 'notes');
    updateDreamNoteDOM();
  } else if (layerNum === 6) {
    state.stealthCamouflage = 'player';
    if ($('stealthCamouflage')) $('stealthCamouflage').value = 'player';
    localStorage.setItem('mindpad_stealth_camouflage', 'player');
  }
}

function startTheatricalTimer() {
  clearInterval(theatricalTimerInterval);
  theatricalSeconds = 0;
  updateTheatricalTimerUI();

  theatricalTimerInterval = setInterval(() => {
    theatricalSeconds++;
    updateTheatricalTimerUI();

    if (theatricalSeconds === 45) {
      triggerHaptic([80, 50, 80]);
      speakTTS('Foto impresa lista en tu bolsillo');
    }

    if (theatricalSeconds >= 60) {
      clearInterval(theatricalTimerInterval);
      theatricalTimerInterval = null;
      triggerHaptic([100, 100, 100]);
    }
  }, 1000);
}

function resetTheatricalTimer() {
  clearInterval(theatricalTimerInterval);
  theatricalTimerInterval = null;
  theatricalSeconds = 0;
  updateTheatricalTimerUI();
}

function updateTheatricalTimerUI() {
  const m = String(Math.floor(theatricalSeconds / 60)).padStart(2, '0');
  const s = String(theatricalSeconds % 60).padStart(2, '0');
  if ($('theatricalTimerDisplay')) $('theatricalTimerDisplay').textContent = `${m}:${s}`;

  const hintEl = $('theatricalScriptHint');
  if (!hintEl) return;

  if (theatricalSeconds === 0) {
    hintEl.textContent = 'Presiona "Iniciar Teatralidad" cuando la IA comience a imprimir.';
    hintEl.style.color = '#6ee7b7';
  } else if (theatricalSeconds < 15) {
    hintEl.textContent = '👁️ 0-15s: Pide que cierre los ojos y visualice colores y emociones...';
    hintEl.style.color = '#38bdf8';
  } else if (theatricalSeconds < 30) {
    hintEl.textContent = '🔮 15-30s: Lectura fría: describe texturas y sensaciones vagas del dibujo.';
    hintEl.style.color = '#fbbf24';
  } else if (theatricalSeconds < 45) {
    hintEl.textContent = '📜 30-45s: "Hace días tuve un sueño premonitorio... y traje algo físico hoy".';
    hintEl.style.color = '#f97316';
  } else if (theatricalSeconds < 60) {
    hintEl.textContent = '🖨️ 45-60s: ¡Foto impresa en bolsillo! Mete la mano lentamente a tu saco.';
    hintEl.style.color = '#a855f7';
  } else {
    hintEl.textContent = '💥 ¡CLÍMAX! Saca la fotografía aún tibia y entrégala al espectador.';
    hintEl.style.color = '#22c55e';
  }
}

async function downloadVipProof() {
  if (!state.generatedImageBlob) {
    alert('Primero genera la imagen con la sección de Predicción IA.');
    return;
  }
  const eventClean = (state.vipEventName || 'Prediccion').replace(/[^a-zA-Z0-9_-]/g, '_');
  const filename = `${eventClean}_${new Date().toISOString().slice(0, 10)}.jpg`;

  let blob = state.generatedImageBlob;
  if (state.exifDaysBack > 0) {
    blob = await injectExifDate(blob, state.exifDaysBack);
  }

  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  alert(`Imagen guardada como "${filename}" con fecha de hace ${state.exifDaysBack} días.`);
}

// ==========================================
// 8. MOTOR DE PIZARRA E-INK (CHALK & SLATE ENGINE)
// ==========================================
let slateSyncChannel = null;
try {
  slateSyncChannel = new BroadcastChannel('mindpad_slate_sync');
  slateSyncChannel.onmessage = (e) => {
    if (e.data) applyRemoteSlateData(e.data);
  };
} catch (e) {
  console.log('BroadcastChannel no soportado, usando Storage fallback');
}

window.addEventListener('storage', (e) => {
  if (e.key === 'mindpad_slate_remote_payload' && e.newValue) {
    try {
      const data = JSON.parse(e.newValue);
      applyRemoteSlateData(data);
    } catch (err) {}
  }
});

function broadcastSlateUpdate() {
  const payload = {
    room: state.slateRoomId,
    strokes: state.strokes,
    word: state.currentWord,
    drawing: state.currentDrawing,
    number: state.currentNumber,
    card: state.selectedPlayingCard,
    style: state.slateStyle,
    contentType: state.slateContentType,
    isRevealed: state.isSlateRevealed,
    timestamp: Date.now()
  };
  try {
    if (slateSyncChannel) slateSyncChannel.postMessage(payload);
    localStorage.setItem('mindpad_slate_remote_payload', JSON.stringify(payload));
  } catch (err) {}
}

function applyRemoteSlateData(data) {
  if (!data) return;
  if (data.style) {
    state.slateStyle = data.style;
    applySlateStyleToDOM();
  }
  if (data.contentType) state.slateContentType = data.contentType;
  if (data.card) state.selectedPlayingCard = data.card;
  if (data.word) state.currentWord = data.word;
  if (data.drawing) state.currentDrawing = data.drawing;
  if (data.number) state.currentNumber = data.number;
  if (data.strokes) state.strokes = data.strokes;
  if (data.isRevealed !== undefined) state.isSlateRevealed = data.isRevealed;

  const dot = $('slateStatusDot');
  if (dot) {
    dot.className = 'slate-status-dot active';
    setTimeout(() => { if (dot) dot.className = 'slate-status-dot'; }, 800);
  }

  redrawChalkSlate();
}

function applySlateStyleToDOM() {
  const slateViewEl = $('slateView');
  if (!slateViewEl) return;
  slateViewEl.className = 'view';
  if (state.slateStyle === 'inverted') {
    slateViewEl.classList.add('inverted');
  } else if (state.slateStyle === 'wooden') {
    slateViewEl.classList.add('wooden-frame');
  }
}

// Renderizado de Tiza con textura de polvo y micro-gránulos
function drawChalkLine(ctx, x1, y1, x2, y2, color = '#f8fafc', width = 3) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.hypot(dx, dy);
  if (dist === 0) return;

  const steps = Math.max(1, Math.floor(dist / 2.5));
  ctx.save();
  ctx.fillStyle = color;

  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const cx = x1 + dx * t;
    const cy = y1 + dy * t;

    // Núcleo principal de tiza
    const jitterX = (Math.random() - 0.5) * (width * 0.4);
    const jitterY = (Math.random() - 0.5) * (width * 0.4);
    const radius = Math.max(0.6, (width * 0.5) * (0.6 + Math.random() * 0.5));
    
    ctx.globalAlpha = 0.25 + Math.random() * 0.45;
    ctx.beginPath();
    ctx.arc(cx + jitterX, cy + jitterY, radius, 0, Math.PI * 2);
    ctx.fill();

    // Polvo de gis disperso (partículas)
    if (Math.random() < 0.35) {
      const dustX = (Math.random() - 0.5) * (width * 1.8);
      const dustY = (Math.random() - 0.5) * (width * 1.8);
      ctx.globalAlpha = 0.15 + Math.random() * 0.3;
      ctx.beginPath();
      ctx.arc(cx + dustX, cy + dustY, 0.7, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Trazo central continuo suave
  ctx.globalAlpha = 0.4;
  ctx.strokeStyle = color;
  ctx.lineWidth = width * 0.7;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();

  ctx.restore();
}

function drawChalkStrokes(ctx, w, h) {
  if (!state.strokes || !state.strokes.length) return;
  const vp = getViewport(w, h);
  const isDark = state.slateStyle !== 'inverted';
  const chalkColor = isDark ? '#f8fafc' : '#1e293b';

  state.strokes.forEach((s) => {
    for (let i = 1; i < s.points.length; i++) {
      const p1 = s.points[i - 1];
      const p2 = s.points[i];
      const x1 = vp.offsetX + p1.x * vp.renderW;
      const y1 = vp.offsetY + p1.y * vp.renderH;
      const x2 = vp.offsetX + p2.x * vp.renderW;
      const y2 = vp.offsetY + p2.y * vp.renderH;
      const strokeW = Math.max(2, (p1.p || 0.7) * 4 * state.strokeWidth);
      drawChalkLine(ctx, x1, y1, x2, y2, chalkColor, strokeW);
    }
  });
}

function drawChalkRoundedRect(ctx, x, y, width, height, radius, color, strokeW) {
  const x1 = x + radius, x2 = x + width - radius;
  const y1 = y + radius, y2 = y + height - radius;

  drawChalkLine(ctx, x1, y, x2, y, color, strokeW);
  drawChalkLine(ctx, x + width, y1, x + width, y2, color, strokeW);
  drawChalkLine(ctx, x2, y + height, x1, y + height, color, strokeW);
  drawChalkLine(ctx, x, y2, x, y1, color, strokeW);

  drawChalkLine(ctx, x1, y, x, y1, color, strokeW);
  drawChalkLine(ctx, x2, y, x + width, y1, color, strokeW);
  drawChalkLine(ctx, x + width, y2, x2, y + height, color, strokeW);
  drawChalkLine(ctx, x, y2, x1, y + height, color, strokeW);
}

function drawChalkPlayingCard(ctx, w, h, cardCode = 'AS') {
  const isDark = state.slateStyle !== 'inverted';
  const chalkColor = isDark ? '#f8fafc' : '#1e293b';

  const cardW = Math.min(w * 0.65, 340);
  const cardH = cardW * 1.45;
  const startX = (w - cardW) / 2;
  const startY = (h - cardH) / 2;

  ctx.save();

  // Borde de la carta en tiza
  const r = 16;
  drawChalkRoundedRect(ctx, startX, startY, cardW, cardH, r, chalkColor, 3.5);

  // Parsear valor y palo
  let val = 'A';
  let suit = '♠';
  let suitName = 'Picas';

  const code = (cardCode || 'AS').toUpperCase();
  if (code.startsWith('10')) {
    val = '10';
  } else {
    val = code.charAt(0);
  }
  const suitChar = code.slice(val.length);

  if (suitChar.includes('H') || suitChar.includes('C') && !suitChar.includes('L')) {
    suit = '♥';
    suitName = 'Corazones';
  } else if (suitChar.includes('D')) {
    suit = '♦';
    suitName = 'Diamantes';
  } else if (suitChar.includes('C') || suitChar.includes('T')) {
    suit = '♣';
    suitName = 'Tréboles';
  } else {
    suit = '♠';
    suitName = 'Picas';
  }

  // Indices en esquinas
  ctx.fillStyle = chalkColor;
  ctx.font = `bold ${Math.floor(cardW * 0.14)}px system-ui, -apple-system, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillText(val, startX + cardW * 0.13, startY + cardH * 0.06);

  ctx.font = `${Math.floor(cardW * 0.13)}px serif`;
  ctx.fillText(suit, startX + cardW * 0.13, startY + cardH * 0.18);

  // Invertido abajo derecha
  ctx.save();
  ctx.translate(startX + cardW - cardW * 0.13, startY + cardH - cardH * 0.06);
  ctx.rotate(Math.PI);
  ctx.font = `bold ${Math.floor(cardW * 0.14)}px system-ui, -apple-system, sans-serif`;
  ctx.fillText(val, 0, 0);
  ctx.font = `${Math.floor(cardW * 0.13)}px serif`;
  ctx.fillText(suit, 0, cardH * 0.12);
  ctx.restore();

  // Símbolo gigante central en tiza estilo doodle
  ctx.font = `${Math.floor(cardW * 0.45)}px serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(suit, w / 2, h / 2);

  // Nombre de la carta en caligrafía de tiza abajo
  ctx.font = `italic 600 ${Math.floor(cardW * 0.09)}px "Caveat", "Patrick Hand", cursive, sans-serif`;
  ctx.fillText(`${val === 'A' ? 'As' : val === 'K' ? 'Rey' : val === 'Q' ? 'Reina' : val === 'J' ? 'Jota' : val} de ${suitName}`, w / 2, startY + cardH + 34);

  ctx.restore();
}

function drawChalkText(ctx, w, h, text, subtitle = '', customY = null, customSize = null) {
  if (!text) return;
  const isDark = state.slateStyle !== 'inverted';
  const chalkColor = isDark ? '#f8fafc' : '#1e293b';

  ctx.save();

  const centerY = customY !== null ? customY : (h / 2);
  const baseSize = customSize || Math.min(135, Math.max(54, Math.floor(w / Math.max(4.2, text.length * 0.55))));

  // Fuentes de letra fea, irregular y desordenada estilo tiza escolar / graffiti
  const messyChalkFonts = [
    '"Rock Salt"',
    '"Walter Turncoat"',
    '"Gochi Hand"',
    '"Gloria Hallelujah"',
    '"Reenie Beanie"',
    '"Permanent Marker"',
    'cursive',
    'sans-serif'
  ].join(', ');

  // Medir cada letra y calcular anchos totales con asimetría y saltos orgánicos
  ctx.font = `400 ${baseSize}px ${messyChalkFonts}`;

  const chars = text.split('');
  const letterMetrics = chars.map((ch, idx) => {
    // Semilla pseudo-aleatoria determinista para que cada letra tenga su propia inclinación fija
    const seed = (text.charCodeAt(idx % text.length) * 19 + (idx + 1) * 37) % 100;
    const rotDeg = ((seed % 15) - 7); // Inclinación asimétrica entre -7° y +7°
    const scaleVar = 0.88 + ((seed * 7) % 24) / 100; // Variación de altura/ancho entre 88% y 112%
    const yShift = ((seed * 11) % 18) - 9; // Letra que sube o baja entre -9px y +9px
    const fontS = Math.round(baseSize * scaleVar);

    ctx.font = `400 ${fontS}px ${messyChalkFonts}`;
    const m = ctx.measureText(ch);
    return {
      char: ch,
      width: m.width,
      rotRad: (rotDeg * Math.PI) / 180,
      fontS: fontS,
      yShift: yShift,
      seed: seed
    };
  });

  const totalW = letterMetrics.reduce((acc, curr) => acc + curr.width * 1.04, 0);
  let curX = (w - totalW) / 2;

  // Dibujar cada letra con su ángulo y posición imperfecta
  letterMetrics.forEach((lm) => {
    ctx.save();
    const charCenterX = curX + lm.width / 2;
    const charCenterY = centerY + lm.yShift;

    ctx.translate(charCenterX, charCenterY);
    ctx.rotate(lm.rotRad);

    ctx.font = `400 ${lm.fontS}px ${messyChalkFonts}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // 1. Capa base de tiza áspera
    ctx.fillStyle = chalkColor;
    ctx.globalAlpha = 0.88;
    ctx.fillText(lm.char, 0, 0);

    // 2. Desplazamiento rústico de gis
    ctx.globalAlpha = 0.42;
    ctx.fillText(lm.char, 1.4, 0.7);

    // 3. Raspadura de tiza seca
    ctx.globalAlpha = 0.25;
    ctx.fillText(lm.char, -1.2, -0.6);

    // 4. Polvillo de tiza alrededor de los trazos de cada letra
    const dustCount = Math.floor(4 + (lm.seed % 6));
    ctx.fillStyle = chalkColor;
    for (let d = 0; d < dustCount; d++) {
      const dx = (Math.random() - 0.5) * lm.width * 1.25;
      const dy = (Math.random() - 0.5) * lm.fontS * 0.95;
      ctx.globalAlpha = 0.12 + Math.random() * 0.35;
      ctx.beginPath();
      ctx.arc(dx, dy, 0.5 + Math.random() * 0.9, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
    curX += lm.width * 1.04;
  });

  // Subrayado torcido a mano alzada (curvado, con principio grueso y final desvanecido)
  const lineY = centerY + baseSize * 0.48;
  const lineStartX = (w - totalW) / 2 - 14;
  const lineEndX = (w + totalW) / 2 + 16;
  const midX = (lineStartX + lineEndX) / 2;
  const midY = lineY + ((text.length * 7) % 10) - 5; // curvatura asimétrica

  drawChalkLine(ctx, lineStartX, lineY + 3, midX, midY, chalkColor, 4.2);
  drawChalkLine(ctx, midX, midY, lineEndX, lineY - 3, chalkColor, 3.4);

  // Segunda pasada rápida e incompleta de gis
  drawChalkLine(ctx, lineStartX + 20, lineY + 8, lineEndX - 30, lineY + 9, chalkColor, 1.8);

  if (subtitle) {
    ctx.font = `italic ${Math.floor(baseSize * 0.32)}px ${messyChalkFonts}`;
    ctx.textAlign = 'center';
    ctx.globalAlpha = 0.75;
    ctx.fillText(subtitle, w / 2, lineY + 36);
  }

  ctx.restore();
}

function drawChalkDoodle(ctx, w, h, doodleName) {
  const isDark = state.slateStyle !== 'inverted';
  const chalkColor = isDark ? '#f8fafc' : '#1e293b';
  const cx = w / 2;
  const cy = h / 2 - 20;
  const size = Math.min(w * 0.45, 180);

  ctx.save();
  const d = (doodleName || state.currentDrawing || 'estrella').toLowerCase();
  if (d.includes('coraz') || d.includes('heart')) {
    drawChalkLine(ctx, cx, cy + size * 0.5, cx - size * 0.5, cy - size * 0.1, chalkColor, 3.5);
    drawChalkLine(ctx, cx - size * 0.5, cy - size * 0.1, cx, cy - size * 0.45, chalkColor, 3.5);
    drawChalkLine(ctx, cx, cy - size * 0.45, cx + size * 0.5, cy - size * 0.1, chalkColor, 3.5);
    drawChalkLine(ctx, cx + size * 0.5, cy - size * 0.1, cx, cy + size * 0.5, chalkColor, 3.5);
  } else if (d.includes('arbol') || d.includes('tree')) {
    drawChalkLine(ctx, cx, cy - size * 0.55, cx - size * 0.45, cy + size * 0.2, chalkColor, 3.5);
    drawChalkLine(ctx, cx - size * 0.45, cy + size * 0.2, cx + size * 0.45, cy + size * 0.2, chalkColor, 3.5);
    drawChalkLine(ctx, cx + size * 0.45, cy + size * 0.2, cx, cy - size * 0.55, chalkColor, 3.5);
    drawChalkLine(ctx, cx - size * 0.1, cy + size * 0.2, cx - size * 0.1, cy + size * 0.55, chalkColor, 4);
    drawChalkLine(ctx, cx + size * 0.1, cy + size * 0.2, cx + size * 0.1, cy + size * 0.55, chalkColor, 4);
  } else {
    // Estrella de 5 puntas en tiza
    for (let i = 0; i < 5; i++) {
      const a1 = (i * 4 * Math.PI) / 5 - Math.PI / 2;
      const a2 = ((i + 1) * 4 * Math.PI) / 5 - Math.PI / 2;
      drawChalkLine(
        ctx,
        cx + (size * 0.55) * Math.cos(a1),
        cy + (size * 0.55) * Math.sin(a1),
        cx + (size * 0.55) * Math.cos(a2),
        cy + (size * 0.55) * Math.sin(a2),
        chalkColor,
        3.5
      );
    }
  }

  // Título del doodle
  ctx.fillStyle = chalkColor;
  ctx.textAlign = 'center';
  ctx.font = '600 22px "Caveat", "Patrick Hand", cursive, sans-serif';
  ctx.fillText(state.currentDrawing || d, cx, cy + size * 0.85);
  ctx.restore();
}

function drawChalkList(ctx, w, h, items) {
  if (!items || items.length === 0) return;
  const isDark = state.slateStyle !== 'inverted';
  const chalkColor = isDark ? '#f8fafc' : '#1e293b';
  ctx.save();

  const title = 'Premonición:';
  const totalItems = items.length;
  const itemHeight = Math.min(68, Math.max(34, Math.floor((h * 0.72) / totalItems)));
  const startY = (h - (totalItems * itemHeight)) / 2 + 15;

  // Título rústico arriba
  ctx.font = `600 ${Math.floor(itemHeight * 0.75)}px "Walter Turncoat", "Rock Salt", cursive`;
  ctx.fillStyle = isDark ? '#fde047' : '#854d0e';
  ctx.textAlign = 'center';
  ctx.fillText(title, w / 2, Math.max(40, startY - 26));

  // Cada elemento en la lista con rotación y tiza irregular
  items.forEach((item, idx) => {
    const y = startY + idx * itemHeight;
    const seed = (item.charCodeAt(0) * 17 + idx * 43) % 100;
    const rot = ((seed % 8) - 4) * (Math.PI / 180);
    const size = Math.floor(itemHeight * (0.8 + ((seed % 16) / 100)));

    ctx.save();
    ctx.translate(w / 2, y);
    ctx.rotate(rot);

    ctx.font = `400 ${size}px "Rock Salt", "Walter Turncoat", "Gochi Hand", cursive`;
    ctx.fillStyle = chalkColor;
    ctx.textAlign = 'center';
    ctx.fillText(item, 0, 0);

    // Micro salpicadura de tiza
    if (seed % 2 === 0) {
      drawChalkLine(ctx, -140, 8, 140, 10, chalkColor, 1.2);
    }
    ctx.restore();
  });

  ctx.restore();
}

function redrawChalkSlate() {
  const canvas = $('chalkCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  ctx.clearRect(0, 0, w, h);

  if (!state.isSlateRevealed) {
    return;
  }

  applySlateStyleToDOM();

  const type = state.slateContentType;
  if (type === 'card') {
    drawChalkPlayingCard(ctx, w, h, state.selectedPlayingCard);
  } else if (type === 'word') {
    const textToShow = state.currentWord || state.currentNumber || 'Premonición';
    const sub = state.currentNumber && state.currentWord ? `Código: ${state.currentNumber}` : '';
    drawChalkText(ctx, w, h, textToShow, sub);
  } else if (type === 'dream_list') {
    const items = [
      `1. Hora: ${state.dreamHour || '03:45'}`,
      `2. Nombre: ${state.dreamName || 'Carlos'}`,
      `3. Destino: ${state.dreamPlace || 'París'}`,
      `4. Comida: ${state.dreamFood || 'Tacos'}`
    ];
    drawChalkList(ctx, w, h, items);
  } else if (type === 'doodle') {
    drawChalkDoodle(ctx, w, h, state.currentDrawing);
  } else {
    // 'strokes' (por defecto)
    if (state.strokes && state.strokes.length > 0) {
      drawChalkStrokes(ctx, w, h);
      // Si además se detectó una palabra, ponerla abajo en letra de tiza grande y elegante
      if (state.currentWord) {
        drawChalkText(ctx, w, h, state.currentWord, '', h * 0.85, Math.min(56, Math.floor(w / 12)));
      }
    } else {
      // Si NO hay trazos todavía en la tableta pero hay palabra o dibujo, ¡aparece EN GRANDE Y EN EL CENTRO!
      const textToShow = state.currentWord || state.currentDrawing || state.currentNumber || 'Navidad';
      drawChalkText(ctx, w, h, textToShow);
    }
  }
}

function enterSlateMode() {
  state.isSlateViewActive = true;
  $('setupView').style.display = 'none';
  $('stealthView').style.display = 'none';
  $('slateView').style.display = 'flex';
  document.body.className = 'mode-slate';

  applySlateStyleToDOM();
  resizeCanvases();
  redrawChalkSlate();

  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen().catch(() => {});
  }
}

function exitSlateMode() {
  state.isSlateViewActive = false;
  $('slateView').style.display = 'none';
  $('setupView').style.display = 'block';
  document.body.className = 'mode-setup';
  resizeCanvases();
}

function initSlateControls() {
  const slateViewEl = $('slateView');
  const controlsBar = $('slateControlsBar');
  let hideControlsTimer = null;

  function showControlsTemporarily() {
    if (!controlsBar) return;
    controlsBar.classList.add('show');
    clearTimeout(hideControlsTimer);
    hideControlsTimer = setTimeout(() => {
      controlsBar.classList.remove('show');
    }, 3200);
  }

  if (slateViewEl) {
    slateViewEl.addEventListener('pointerdown', showControlsTemporarily);
    slateViewEl.addEventListener('mousemove', showControlsTemporarily);
  }

  if ($('slateToggleInvertBtn')) {
    $('slateToggleInvertBtn').onclick = (e) => {
      e.stopPropagation();
      state.slateStyle = state.slateStyle === 'inverted' ? 'blackboard' : 'inverted';
      localStorage.setItem('mindpad_slate_style', state.slateStyle);
      applySlateStyleToDOM();
      redrawChalkSlate();
      broadcastSlateUpdate();
    };
  }

  if ($('slateToggleFrameBtn')) {
    $('slateToggleFrameBtn').onclick = (e) => {
      e.stopPropagation();
      state.slateStyle = state.slateStyle === 'wooden' ? 'blackboard' : 'wooden';
      localStorage.setItem('mindpad_slate_style', state.slateStyle);
      applySlateStyleToDOM();
      redrawChalkSlate();
      broadcastSlateUpdate();
    };
  }

  if ($('slateClearCanvasBtn')) {
    $('slateClearCanvasBtn').onclick = (e) => {
      e.stopPropagation();
      state.strokes = [];
      state.currentWord = '';
      state.currentDrawing = '';
      state.currentNumber = '';
      redrawAllStrokes();
      redrawChalkSlate();
      broadcastSlateUpdate();
    };
  }

  if ($('slateFullscreenBtn')) {
    $('slateFullscreenBtn').onclick = (e) => {
      e.stopPropagation();
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    };
  }

  if ($('slateExitBtn')) {
    $('slateExitBtn').onclick = (e) => {
      e.stopPropagation();
      exitSlateMode();
    };
  }
}

function initSlateSettingsUI() {
  const baseUrl = window.location.origin + window.location.pathname;
  const remoteUrl = `${baseUrl}?view=slate&room=${state.slateRoomId}`;
  if ($('slateRemoteUrlInput')) $('slateRemoteUrlInput').value = remoteUrl;

  if ($('copySlateUrlBtn')) {
    $('copySlateUrlBtn').onclick = () => {
      navigator.clipboard.writeText(remoteUrl).then(() => {
        alert('URL de la Pizarra copiada al portapapeles. Ábrela en el navegador de tu Kindle o segunda pantalla.');
      });
    };
  }

  if ($('openSlateWindowBtn')) {
    $('openSlateWindowBtn').onclick = () => {
      window.open(remoteUrl, '_blank');
    };
  }

  if ($('quickOpenSlateBtn')) $('quickOpenSlateBtn').onclick = enterSlateMode;

  if ($('slateStyleSelect')) {
    $('slateStyleSelect').value = state.slateStyle;
    $('slateStyleSelect').onchange = (e) => {
      state.slateStyle = e.target.value;
      localStorage.setItem('mindpad_slate_style', state.slateStyle);
      applySlateStyleToDOM();
      redrawChalkSlate();
      broadcastSlateUpdate();
    };
  }

  if ($('slateContentTypeSelect')) {
    $('slateContentTypeSelect').value = state.slateContentType;
    if ($('slateCardRow')) {
      $('slateCardRow').style.display = state.slateContentType === 'card' ? 'flex' : 'none';
    }
    $('slateContentTypeSelect').onchange = (e) => {
      state.slateContentType = e.target.value;
      localStorage.setItem('mindpad_slate_content_type', state.slateContentType);
      if ($('slateCardRow')) {
        $('slateCardRow').style.display = state.slateContentType === 'card' ? 'flex' : 'none';
      }
      redrawChalkSlate();
      broadcastSlateUpdate();
    };
  }

  if ($('slatePlayingCardSelect')) {
    $('slatePlayingCardSelect').value = state.selectedPlayingCard;
    $('slatePlayingCardSelect').onchange = (e) => {
      if (e.target.value === 'custom') {
        const customCard = prompt('Escribe el código o nombre de la carta (ej. 7H, AS, KD, 10S):', '7H');
        if (customCard) {
          state.selectedPlayingCard = customCard.toUpperCase();
        }
      } else {
        state.selectedPlayingCard = e.target.value;
      }
      localStorage.setItem('mindpad_selected_card', state.selectedPlayingCard);
      redrawChalkSlate();
      broadcastSlateUpdate();
    };
  }

  if ($('slateLiveSyncCheck')) {
    $('slateLiveSyncCheck').checked = state.slateLiveSync;
    $('slateLiveSyncCheck').onchange = (e) => {
      state.slateLiveSync = e.target.checked;
      localStorage.setItem('mindpad_slate_live_sync', state.slateLiveSync);
    };
  }

  if ($('slateRevealBtn')) {
    $('slateRevealBtn').onclick = () => {
      state.isSlateRevealed = true;
      redrawChalkSlate();
      broadcastSlateUpdate();
      triggerHaptic([60, 40, 60]);
      alert('¡Predicción revelada en la Pizarra E-Ink!');
    };
  }

  if ($('quickRevealSlateBtn')) {
    $('quickRevealSlateBtn').onclick = () => {
      state.isSlateRevealed = true;
      redrawChalkSlate();
      broadcastSlateUpdate();
      triggerHaptic([60, 40, 60]);
    };
  }

  if ($('slateClearBtn')) {
    $('slateClearBtn').onclick = () => {
      state.strokes = [];
      state.currentWord = '';
      state.currentDrawing = '';
      state.currentNumber = '';
      redrawAllStrokes();
      redrawChalkSlate();
      broadcastSlateUpdate();
    };
  }
}

// ==========================================
// 11. PREDICCIÓN IA (NANO BANANA STYLE) & INSTAGRAM
// ==========================================
function buildAIPrompt(drawing = '', word = '', number = '', preset = 'car_rain') {
  const dEs = drawing || 'árbol de navidad';
  const dEn = getEnglishDrawing(dEs);
  const w = word || 'Navidad';
  const n = number || '532142';

  if (preset === 'car_rain') {
    return `Hyperrealistic photograph taken from inside a vintage car looking through the wet windshield at a rainy city street at dusk. Hanging from the rearview mirror is a red wooden ${dEn} keychain ornament air freshener. In the blurred background, a glowing neon billboard displays the word '${w}'. In front of the car, a black vehicle clearly displays the license plate numbers '${n}'. Cinematic lighting, photorealistic, 8k resolution, authentic camera bokeh.`;
  } else if (preset === 'child_paper') {
    return `An authentic top-down photograph of a child's crayon drawing on wrinkled white paper lying on a rustic wooden table. The drawing looks like it was drawn by a 6-year-old child using a red crayon: showing a cute ${dEn}, with the word '${w}' written in red crayon next to it, and the number '${n}' clearly legible. Realistic paper texture, wax crayon smudges, natural soft room lighting.`;
  } else if (preset === 'polaroid') {
    return `A vintage authentic polaroid photograph lying on an old wooden table. The polaroid shows a real ${dEn}, with the handwritten word '${w}' at the bottom margin in black marker, and a receipt beside it with the numbers '${n}'. 1980s film grain, flash photography, hyperrealistic.`;
  }
  return `Photorealistic image containing a ${dEn}, the word '${w}' naturally integrated, and the number '${n}' on a sign or object. High quality, realistic.`;
}

function updateAIPromptFromDetection(drawing, word, number) {
  state.currentDrawing = drawing || state.currentDrawing || '';
  state.currentWord = word || state.currentWord || '';
  state.currentNumber = number || state.currentNumber || '';

  const preset = $('aiStylePreset') ? $('aiStylePreset').value : 'car_rain';
  const prompt = buildAIPrompt(state.currentDrawing, state.currentWord, state.currentNumber, preset);
  if ($('aiPromptText')) $('aiPromptText').value = prompt;
}

function buildExifSegment(date) {
  const Y = date.getFullYear();
  const M = String(date.getMonth() + 1).padStart(2, '0');
  const D = String(date.getDate()).padStart(2, '0');
  const h = String(date.getHours()).padStart(2, '0');
  const m = String(date.getMinutes()).padStart(2, '0');
  const s = String(date.getSeconds()).padStart(2, '0');
  const dateStr = Y + ':' + M + ':' + D + ' ' + h + ':' + m + ':' + s + '\0';

  const buf = new Uint8Array(120);
  const view = new DataView(buf.buffer);
  let pos = 0;

  // 'Exif\0\0'
  const exifHeader = [0x45, 0x78, 0x69, 0x66, 0x00, 0x00];
  for (let i = 0; i < 6; i++) buf[pos++] = exifHeader[i];

  const tiffStart = pos;
  // 'MM' (Big Endian)
  buf[pos++] = 0x4D; buf[pos++] = 0x4D;
  view.setUint16(pos, 42, false); pos += 2;
  view.setUint32(pos, 8, false); pos += 4; // offset a IFD0

  // IFD0 (2 entries)
  view.setUint16(pos, 2, false); pos += 2;
  // 0x0132 (DateTime)
  view.setUint16(pos, 0x0132, false); pos += 2;
  view.setUint16(pos, 2, false); pos += 2; // ASCII
  view.setUint32(pos, 20, false); pos += 4;
  view.setUint32(pos, 60, false); pos += 4; // offset desde tiffStart
  // 0x8769 (ExifOffset)
  view.setUint16(pos, 0x8769, false); pos += 2;
  view.setUint16(pos, 4, false); pos += 2; // LONG
  view.setUint32(pos, 1, false); pos += 4;
  view.setUint32(pos, 38, false); pos += 4; // offset a SubIFD
  view.setUint32(pos, 0, false); pos += 4; // next IFD = 0

  // Exif SubIFD (en tiffStart + 38)
  view.setUint16(pos, 2, false); pos += 2;
  // 0x9003 (DateTimeOriginal)
  view.setUint16(pos, 0x9003, false); pos += 2;
  view.setUint16(pos, 2, false); pos += 2;
  view.setUint32(pos, 20, false); pos += 4;
  view.setUint32(pos, 60, false); pos += 4;
  // 0x9004 (DateTimeDigitized)
  view.setUint16(pos, 0x9004, false); pos += 2;
  view.setUint16(pos, 2, false); pos += 2;
  view.setUint32(pos, 20, false); pos += 4;
  view.setUint32(pos, 60, false); pos += 4;
  view.setUint32(pos, 0, false); pos += 4; // next IFD = 0

  // Cadena de fecha en tiffStart + 60
  for (let i = 0; i < 20; i++) {
    buf[pos++] = dateStr.charCodeAt(i) || 0;
  }

  const totalLen = pos;
  const result = new Uint8Array(4 + totalLen);
  const resView = new DataView(result.buffer);
  resView.setUint16(0, 0xFFE1, false); // APP1
  resView.setUint16(2, totalLen + 2, false);
  result.set(buf.subarray(0, totalLen), 4);
  return result;
}

async function injectExifDate(blob, daysBack = 3) {
  try {
    const arrayBuffer = await blob.arrayBuffer();
    const bytes = new Uint8Array(arrayBuffer);
    if (bytes[0] !== 0xFF || bytes[1] !== 0xD8) return blob;

    const targetDate = new Date(Date.now() - (daysBack * 86400000));
    const exifSegment = buildExifSegment(targetDate);

    let insertPos = 2;
    if (bytes[2] === 0xFF && (bytes[3] === 0xE0 || bytes[3] === 0xE1)) {
      const len = (bytes[4] << 8) | bytes[5];
      insertPos = 4 + len;
    }

    const newBytes = new Uint8Array(bytes.length + exifSegment.length);
    newBytes.set(bytes.subarray(0, insertPos), 0);
    newBytes.set(exifSegment, insertPos);
    newBytes.set(bytes.subarray(insertPos), insertPos + exifSegment.length);

    return new Blob([newBytes], { type: 'image/jpeg' });
  } catch (err) {
    console.warn('No se pudo inyectar EXIF:', err);
    return blob;
  }
}

async function publishToInstagramWebhook(blob, webhookUrl, caption, publicUrl = '') {
  if (!webhookUrl) return;
  try {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = async () => {
      const base64Data = reader.result;
      const targetDate = new Date(Date.now() - (state.exifDaysBack * 86400000)).toISOString();
      const payload = {
        event: 'mindpad_prediction_ready',
        secretDrawing: state.currentDrawing,
        secretWord: state.currentWord,
        secretNumber: state.currentNumber,
        caption: caption || 'Una extraña intuición que tuve hace días...',
        simulatedDate: targetDate,
        imageUrl: publicUrl || '',
        imageBase64: base64Data
      };

      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      console.log('Publicación enviada exitosamente al Webhook de Instagram');
    };
  } catch (err) {
    console.warn('Error enviando a Webhook de Instagram:', err);
  }
}

function autoSaveForPocketPrinter(blob) {
  try {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'prediccion_print.jpg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    console.log('Imagen guardada automáticamente como prediccion_print.jpg para MacroDroid / Impresora');
  } catch (err) {
    console.warn('Error auto-guardando para impresora:', err);
  }
}

function getDrawingCanvasDataURL() {
  const c = document.createElement('canvas');
  c.width = 600;
  c.height = 800;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, 600, 800);

  if (state.strokes.length) {
    state.strokes.forEach((s) => {
      for (let i = 1; i < s.points.length; i++) {
        drawSeg(ctx, 600, 800, s.points[i - 1], s.points[i], '#c01525', false);
      }
    });
  }

  return c.toDataURL('image/jpeg', 0.85);
}

async function generateAIImage() {
  const prompt = $('aiPromptText') && $('aiPromptText').value ? $('aiPromptText').value : buildAIPrompt(state.currentDrawing, state.currentWord, state.currentNumber);
  if (!prompt) return;

  $('aiImageContainer').style.display = 'block';
  $('aiResultImg').style.display = 'none';

  const useReference = $('useReferenceImageCheck') ? $('useReferenceImageCheck').checked : true;
  const refImageDataUrl = state.strokes.length ? getDrawingCanvasDataURL() : null;

  if (refImageDataUrl && $('refDrawingImg')) {
    $('refDrawingImg').src = refImageDataUrl;
    if ($('refDrawingCol')) $('refDrawingCol').style.display = 'block';
  } else if ($('refDrawingCol')) {
    $('refDrawingCol').style.display = 'none';
  }

  // 1. Generación vía OpenRouter si está configurado y tiene token
  if (state.aiProvider === 'openrouter' && state.openRouterKey) {
    const model = state.openRouterModel === 'custom'
      ? ($('customModelInput')?.value?.trim() || 'google/gemini-2.5-flash-image')
      : state.openRouterModel;

    const shortName = model.split('/').pop();
    const modeLabel = useReference && refImageDataUrl ? '(Img2Img con trazo original)' : '';
    $('aiStatusText').textContent = `🚀 Generando con ${shortName} ${modeLabel}... (5-15 seg)`;

    try {
      const payload = {
        model,
        prompt,
        aspect_ratio: '3:4'
      };

      if (useReference && refImageDataUrl) {
        payload.input_references = [{ url: refImageDataUrl }];
      }

      let res = await fetch('https://openrouter.ai/api/v1/images', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.openRouterKey.trim()}`,
          'HTTP-Referer': 'https://johnwolf83.github.io/mindpad-/',
          'X-Title': 'MindPad X10'
        },
        body: JSON.stringify(payload)
      });

      let data = await res.json();

      // Si el modelo específico no soporta input_references y da error, reintentar automáticamente sin él
      if (data?.error && payload.input_references && (data.error.message?.includes('input_references') || data.error.message?.includes('not supported'))) {
        console.warn('El modelo no soporta input_references, reintentando solo con texto...');
        delete payload.input_references;
        res = await fetch('https://openrouter.ai/api/v1/images', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${state.openRouterKey.trim()}`,
            'HTTP-Referer': 'https://johnwolf83.github.io/mindpad-/',
            'X-Title': 'MindPad X10'
          },
          body: JSON.stringify(payload)
        });
        data = await res.json();
      }

      if (data?.error) {
        throw new Error(data.error.message || `Error ${res.status}`);
      }

      const item = data?.data?.[0];
      if (!item) throw new Error('No se recibió imagen de OpenRouter');

      let blob = null;
      if (item.b64_json) {
        const mime = item.mime_type || 'image/png';
        const byteChars = atob(item.b64_json);
        const byteNumbers = new Uint8Array(byteChars.length);
        for (let i = 0; i < byteChars.length; i++) {
          byteNumbers[i] = byteChars.charCodeAt(i);
        }
        blob = new Blob([byteNumbers], { type: mime });
      } else if (item.url) {
        const imgFetch = await fetch(item.url);
        blob = await imgFetch.blob();
      }

      if (!blob) throw new Error('Formato de imagen no reconocido');

      // Inyectar fecha del pasado en los metadatos EXIF (para que Instagram y Galería muestren fecha retro)
      if (state.exifDaysBack > 0) {
        blob = await injectExifDate(blob, state.exifDaysBack);
      }

      // Auto-publicar en Instagram en segundo plano si está configurado el webhook
      if (state.autoPublishInstagram && state.igWebhookUrl) {
        publishToInstagramWebhook(blob, state.igWebhookUrl, state.igCaption, item?.url || '');
      }

      // Auto-guardar para impresora de bolsillo
      if (state.autoSavePocketPrinter) {
        autoSaveForPocketPrinter(blob);
      }

      let costText = '';
      if (data?.usage?.cost != null) {
        const usd = data.usage.cost;
        const mxn = (usd * 20.0).toFixed(2);
        costText = ` • Costo: ~$${mxn} MXN ($${usd < 0.01 ? usd.toFixed(4) : usd.toFixed(3)} USD)`;
      }

      state.generatedImageBlob = blob;
      $('aiResultImg').src = URL.createObjectURL(blob);
      $('aiResultImg').style.display = 'block';
      $('aiStatusText').textContent = `✨ Generada con ${shortName}${costText}`;

      speakTTS('Predicción lista con OpenRouter');
      triggerHaptic([80, 50, 80, 50, 80]);
      return;
    } catch (err) {
      console.warn('Fallo OpenRouter, recurriendo a Pollinations:', err);
      $('aiStatusText').textContent = `⚠️ OpenRouter: ${err.message}. Generando con Flux gratuito...`;
    }
  }

  // 2. Generación estándar vía Pollinations AI (Flux.1 - Gratuito)
  $('aiStatusText').textContent = 'Generando con Pollinations Flux... (4-8 seg)';
  try {
    const seed = Math.floor(Math.random() * 999999);
    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=768&height=1024&nologo=true&seed=${seed}&model=flux`;

    const res = await fetch(imageUrl);
    let blob = await res.blob();

    if (state.exifDaysBack > 0) {
      blob = await injectExifDate(blob, state.exifDaysBack);
    }

    if (state.autoPublishInstagram && state.igWebhookUrl) {
      publishToInstagramWebhook(blob, state.igWebhookUrl, state.igCaption, imageUrl);
    }

    // Auto-guardar para impresora de bolsillo
    if (state.autoSavePocketPrinter) {
      autoSaveForPocketPrinter(blob);
    }

    state.generatedImageBlob = blob;

    const localUrl = URL.createObjectURL(blob);
    $('aiResultImg').src = localUrl;
    $('aiResultImg').style.display = 'block';
    $('aiStatusText').textContent = '✨ Predicción generada con éxito (Flux)';

    speakTTS('Predicción de imagen lista');
    triggerHaptic([80, 50, 80, 50, 80]);
  } catch (err) {
    console.error('Error generando imagen:', err);
    $('aiStatusText').textContent = 'Error al generar imagen (verifica conexión)';
  }
}

async function shareToInstagram() {
  if (!state.generatedImageBlob) {
    alert('Primero genera la imagen con el botón de arriba.');
    return;
  }
  const file = new File([state.generatedImageBlob], 'prediccion.jpg', { type: 'image/jpeg' });

  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({
        title: 'Predicción',
        text: state.igCaption || 'Una extraña intuición...',
        files: [file]
      });
    } catch (e) {
      console.log('Share cancelado o cerrado:', e);
    }
  } else {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(state.generatedImageBlob);
    a.download = `prediccion-${Date.now()}.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    alert('Imagen guardada en tu galería con la fecha retroactiva. Abriendo Instagram Stories...');
    window.location.href = 'instagram://story-camera';
  }
}

function downloadOriginalDrawing() {
  if (!state.strokes.length) {
    alert('No hay trazos en la página actual.');
    return;
  }
  const c = document.createElement('canvas');
  c.width = 800;
  c.height = 1060;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, 800, 1060);

  state.strokes.forEach((s) => {
    for (let i = 1; i < s.points.length; i++) {
      drawSeg(ctx, 800, 1060, s.points[i - 1], s.points[i], '#c01525', false);
    }
  });

  c.toBlob((blob) => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `trazo-original-${Date.now()}.png`;
    a.click();
  }, 'image/png');
}

// ==========================================
// 12. RUTINA DEL SUEÑO (NOTAS CAMUFLADAS & DOODLE)
// ==========================================
let notesDoodleCtx = null;
let isDoodling = false;
let lastDoodleX = 0;
let lastDoodleY = 0;

function updateDreamNoteDOM() {
  // Fecha retroactiva: exactamente 4 días atrás a una hora fija como 21:15
  const pastDate = new Date(Date.now() - 4 * 24 * 60 * 60 * 1000);
  const dias = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  const diaNum = pastDate.getDate();
  const mesNom = meses[pastDate.getMonth()];
  const anio = pastDate.getFullYear();

  if ($('notesMetaDate')) {
    $('notesMetaDate').textContent = `${diaNum} de ${mesNom} de ${anio}, 21:15`;
  }
  if ($('noteDreamHour')) $('noteDreamHour').textContent = state.dreamHour || '03:45';
  if ($('noteDreamName')) $('noteDreamName').textContent = state.dreamName || 'Carlos';
  if ($('noteDreamPlace')) $('noteDreamPlace').textContent = state.dreamPlace || 'París';
  if ($('noteDreamFood')) $('noteDreamFood').textContent = state.dreamFood || 'Tacos';

  if ($('dreamHourInput')) $('dreamHourInput').value = state.dreamHour;
  if ($('dreamNameInput')) $('dreamNameInput').value = state.dreamName;
  if ($('dreamPlaceInput')) $('dreamPlaceInput').value = state.dreamPlace;
  if ($('dreamFoodInput')) $('dreamFoodInput').value = state.dreamFood;
}

function initNotesDoodle() {
  const canvas = $('notesDoodleCanvas');
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();
  if (canvas.width !== rect.width || canvas.height !== rect.height) {
    canvas.width = rect.width || 320;
    canvas.height = rect.height || 220;
  }
  notesDoodleCtx = canvas.getContext('2d');
  redrawNotesDoodleCanvas();

  // Selector de colores
  const dots = document.querySelectorAll('.doodle-color-dot');
  dots.forEach((dot) => {
    dot.onclick = (e) => {
      e.stopPropagation();
      dots.forEach((d) => d.classList.remove('active'));
      dot.classList.add('active');
      state.doodleColor = dot.getAttribute('data-color') || '#f8fafc';
    };
  });

  if ($('notesClearDoodleBtn')) {
    $('notesClearDoodleBtn').onclick = (e) => {
      e.stopPropagation();
      state.notesDoodleStrokes = [];
      if (notesDoodleCtx) {
        notesDoodleCtx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };
  }

  function getDoodlePos(e) {
    const r = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - r.left,
      y: clientY - r.top
    };
  }

  canvas.onpointerdown = (e) => {
    e.stopPropagation();
    isDoodling = true;
    const pos = getDoodlePos(e);
    lastDoodleX = pos.x;
    lastDoodleY = pos.y;
    state.notesDoodleStrokes.push({
      color: state.doodleColor,
      points: [{ x: pos.x, y: pos.y }]
    });
  };

  canvas.onpointermove = (e) => {
    if (!isDoodling || !notesDoodleCtx) return;
    e.stopPropagation();
    const pos = getDoodlePos(e);
    notesDoodleCtx.strokeStyle = state.doodleColor;
    notesDoodleCtx.lineWidth = 2.5;
    notesDoodleCtx.lineCap = 'round';
    notesDoodleCtx.lineJoin = 'round';
    notesDoodleCtx.beginPath();
    notesDoodleCtx.moveTo(lastDoodleX, lastDoodleY);
    notesDoodleCtx.lineTo(pos.x, pos.y);
    notesDoodleCtx.stroke();

    lastDoodleX = pos.x;
    lastDoodleY = pos.y;
    const current = state.notesDoodleStrokes[state.notesDoodleStrokes.length - 1];
    if (current) current.points.push({ x: pos.x, y: pos.y });
  };

  const stopDoodling = (e) => {
    if (e) e.stopPropagation();
    isDoodling = false;
  };
  canvas.onpointerup = stopDoodling;
  canvas.onpointercancel = stopDoodling;
}

function redrawNotesDoodleCanvas() {
  const canvas = $('notesDoodleCanvas');
  if (!canvas || !notesDoodleCtx) return;
  notesDoodleCtx.clearRect(0, 0, canvas.width, canvas.height);

  // 1. Trazos libres hechos con el dedo
  state.notesDoodleStrokes.forEach((stroke) => {
    if (!stroke.points || stroke.points.length < 2) return;
    notesDoodleCtx.strokeStyle = stroke.color || '#f8fafc';
    notesDoodleCtx.lineWidth = 2.5;
    notesDoodleCtx.lineCap = 'round';
    notesDoodleCtx.lineJoin = 'round';
    notesDoodleCtx.beginPath();
    notesDoodleCtx.moveTo(stroke.points[0].x, stroke.points[0].y);
    for (let i = 1; i < stroke.points.length; i++) {
      notesDoodleCtx.lineTo(stroke.points[i].x, stroke.points[i].y);
    }
    notesDoodleCtx.stroke();
  });

  // 2. Si la tableta Huion envió trazos, dibujarlos a escala dentro del canvas de notas
  if (state.strokes && state.strokes.length > 0) {
    const isPortrait = state.orientation.startsWith('portrait');
    const maxX = isPortrait ? 28200 : 37400;
    const maxY = isPortrait ? 37400 : 28200;
    const pad = 12;
    const scaleX = (canvas.width - pad * 2) / maxX;
    const scaleY = (canvas.height - pad * 2) / maxY;
    const scale = Math.min(scaleX, scaleY);

    notesDoodleCtx.strokeStyle = '#f8fafc';
    notesDoodleCtx.lineWidth = 2.0;
    notesDoodleCtx.lineCap = 'round';
    notesDoodleCtx.lineJoin = 'round';

    state.strokes.forEach((stroke) => {
      if (!stroke.points || stroke.points.length < 2) return;
      notesDoodleCtx.beginPath();
      notesDoodleCtx.moveTo(pad + stroke.points[0].x * scale, pad + stroke.points[0].y * scale);
      for (let i = 1; i < stroke.points.length; i++) {
        notesDoodleCtx.lineTo(pad + stroke.points[i].x * scale, pad + stroke.points[i].y * scale);
      }
      notesDoodleCtx.stroke();
    });
  }
}

// ==========================================
// 13. MELODÍA TELEPÁTICA & REPRODUCTOR ITUNES
// ==========================================
async function fetchSongPreview(query, autoPlay = false) {
  const q = (query || state.dreamSong || 'Bohemian Rhapsody').trim();
  if (!q) return;

  try {
    const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(q)}&entity=song&limit=1`);
    if (!res.ok) throw new Error('Error al conectar con iTunes');
    const data = await res.json();
    if (data.results && data.results.length > 0) {
      const item = data.results[0];
      state.musicTrackTitle = item.trackName;
      state.musicArtistName = `${item.artistName} • ${item.collectionName || 'Single'}`;
      state.musicCoverUrl = item.artworkUrl100 ? item.artworkUrl100.replace('100x100bb.jpg', '600x600bb.jpg') : '';
      state.musicAudioUrl = item.previewUrl || '';

      if ($('musicTrackTitle')) $('musicTrackTitle').textContent = state.musicTrackTitle;
      if ($('musicArtistName')) $('musicArtistName').textContent = state.musicArtistName;
      if ($('musicCoverImg') && state.musicCoverUrl) $('musicCoverImg').src = state.musicCoverUrl;

      if ($('songFoundTitle')) $('songFoundTitle').textContent = state.musicTrackTitle;
      if ($('songFoundArtist')) $('songFoundArtist').textContent = state.musicArtistName;
      if ($('songFoundCover') && state.musicCoverUrl) $('songFoundCover').src = state.musicCoverUrl;

      const audioEl = $('musicAudioEl');
      if (audioEl && state.musicAudioUrl) {
        audioEl.src = state.musicAudioUrl;
        audioEl.load();
        if (autoPlay) {
          audioEl.play().catch(() => {});
          state.musicIsPlaying = true;
          if ($('musicPlayBtn')) $('musicPlayBtn').textContent = '⏸';
          if ($('songFoundPlayTestBtn')) $('songFoundPlayTestBtn').textContent = '⏸ Pausa';
        }
      }
      return item;
    } else {
      console.warn('Canción no encontrada en iTunes:', q);
    }
  } catch (err) {
    console.warn('Error iTunes Search:', err);
  }
}

function initMusicPlayerEvents() {
  const audioEl = $('musicAudioEl');
  const playBtn = $('musicPlayBtn');
  const testBtn = $('songFoundPlayTestBtn');
  const progressFill = $('musicProgressFill');
  const currentTimeEl = $('musicTimeCurrent');
  const durationTimeEl = $('musicTimeDuration');

  function togglePlay(e) {
    if (e && e.stopPropagation) e.stopPropagation();
    if (!audioEl) return;
    if (audioEl.paused) {
      if (!audioEl.src && state.dreamSong) {
        fetchSongPreview(state.dreamSong, true);
        return;
      }
      audioEl.play().then(() => {
        state.musicIsPlaying = true;
        if (playBtn) playBtn.textContent = '⏸';
        if (testBtn) testBtn.textContent = '⏸ Pausa';
      }).catch((e) => console.warn('Audio play error:', e));
    } else {
      audioEl.pause();
      state.musicIsPlaying = false;
      if (playBtn) playBtn.textContent = '▶';
      if (testBtn) testBtn.textContent = '▶ Probar';
    }
  }

  if (playBtn) playBtn.onclick = togglePlay;
  if (testBtn) testBtn.onclick = togglePlay;

  if (audioEl) {
    audioEl.ontimeupdate = () => {
      const cur = audioEl.currentTime || 0;
      const dur = audioEl.duration || 30;
      const pct = Math.min(100, (cur / dur) * 100);
      if (progressFill) progressFill.style.width = `${pct}%`;

      const curM = Math.floor(cur / 60);
      const curS = String(Math.floor(cur % 60)).padStart(2, '0');
      if (currentTimeEl) currentTimeEl.textContent = `${curM}:${curS}`;

      const durM = Math.floor(dur / 60);
      const durS = String(Math.floor(dur % 60)).padStart(2, '0');
      if (durationTimeEl) durationTimeEl.textContent = `${durM}:${durS}`;
    };

    audioEl.onended = () => {
      state.musicIsPlaying = false;
      if (playBtn) playBtn.textContent = '▶';
      if (testBtn) testBtn.textContent = '▶ Probar';
      if (progressFill) progressFill.style.width = '0%';
    };
  }
}

// ==========================================
// 14. EVENTOS DE INTERFAZ & SIMULADOR
// ==========================================
$('bleConnectBtn').onclick = connectBLE;
$('bleDisconnectBtn').onclick = () => {
  if (state.bleDevice?.gatt?.connected) state.bleDevice.gatt.disconnect();
};
$('stealthBtn').onclick = enterStealthMode;

$('newPageBtn').onclick = addNewPage;
$('prevPageBtn').onclick = prevPage;
$('nextPageBtn').onclick = nextPage;
$('watchNotifyBtn').onclick = enableSmartwatch;
$('testHaylouBtn').onclick = testHaylouSolar;

// Eventos de Predicción IA
$('generateAIBtn').onclick = generateAIImage;
$('shareInstagramBtn').onclick = shareToInstagram;
$('downloadOriginalBtn').onclick = downloadOriginalDrawing;

if ($('publishWebhookNowBtn')) {
  $('publishWebhookNowBtn').onclick = () => {
    if (!state.generatedImageBlob) {
      alert('Primero genera la imagen con el botón de arriba.');
      return;
    }
    if (!state.igWebhookUrl) {
      alert('Configura primero la URL de tu Webhook de Make.com.');
      return;
    }
    publishToInstagramWebhook(state.generatedImageBlob, state.igWebhookUrl, state.igCaption, $('aiResultImg')?.src || '');
    alert('Publicación enviada a Make.com. Aparecerá en tu Instagram en segundos.');
  };
}
$('copyPromptBtn').onclick = () => {
  const p = $('aiPromptText').value;
  navigator.clipboard.writeText(p).then(() => alert('Prompt copiado al portapapeles ✓'));
};
$('aiStylePreset').onchange = () => {
  updateAIPromptFromDetection(state.currentDrawing, state.currentWord, state.currentNumber);
};

// Configuración de Motor IA & OpenRouter
if ($('aiProviderSelect')) {
  $('aiProviderSelect').value = state.aiProvider;
  $('openRouterSettings').style.display = state.aiProvider === 'openrouter' ? 'block' : 'none';

  $('aiProviderSelect').onchange = (e) => {
    state.aiProvider = e.target.value;
    localStorage.setItem('mindpad_ai_provider', state.aiProvider);
    $('openRouterSettings').style.display = state.aiProvider === 'openrouter' ? 'block' : 'none';
  };
}

if ($('openRouterKey')) {
  $('openRouterKey').value = state.openRouterKey;
  $('openRouterKey').oninput = (e) => {
    state.openRouterKey = e.target.value.trim();
    localStorage.setItem('mindpad_openrouter_key', state.openRouterKey);
  };
}

if ($('openRouterModel')) {
  $('openRouterModel').value = state.openRouterModel;
  $('customModelRow').style.display = state.openRouterModel === 'custom' ? 'flex' : 'none';

  $('openRouterModel').onchange = (e) => {
    state.openRouterModel = e.target.value;
    localStorage.setItem('mindpad_openrouter_model', state.openRouterModel);
    $('customModelRow').style.display = state.openRouterModel === 'custom' ? 'flex' : 'none';
  };
}

if ($('customModelInput')) {
  $('customModelInput').value = localStorage.getItem('mindpad_openrouter_custom_model') || '';
  $('customModelInput').oninput = (e) => {
    localStorage.setItem('mindpad_openrouter_custom_model', e.target.value.trim());
  };
}

if ($('openRouterVisionCheck')) {
  $('openRouterVisionCheck').checked = state.openRouterVision;
  $('openRouterVisionCheck').onchange = (e) => {
    state.openRouterVision = e.target.checked;
    localStorage.setItem('mindpad_openrouter_vision', state.openRouterVision);
  };
}

// Configuración de Fecha Retro EXIF & Auto-Publicar Instagram
if ($('exifDaysBackSelect')) {
  $('exifDaysBackSelect').value = String(state.exifDaysBack);
  $('exifDaysBackSelect').onchange = (e) => {
    state.exifDaysBack = parseInt(e.target.value, 10);
    localStorage.setItem('mindpad_exif_days_back', state.exifDaysBack);
  };
}

if ($('autoSavePocketPrinterCheck')) {
  $('autoSavePocketPrinterCheck').checked = state.autoSavePocketPrinter;
  $('autoSavePocketPrinterCheck').onchange = (e) => {
    state.autoSavePocketPrinter = e.target.checked;
    localStorage.setItem('mindpad_auto_save_printer', state.autoSavePocketPrinter);
  };
}

if ($('autoPublishInstagramCheck')) {
  $('autoPublishInstagramCheck').checked = state.autoPublishInstagram;
  if ($('instagramWebhookSettings')) {
    $('instagramWebhookSettings').style.display = state.autoPublishInstagram ? 'block' : 'none';
  }

  $('autoPublishInstagramCheck').onchange = (e) => {
    state.autoPublishInstagram = e.target.checked;
    localStorage.setItem('mindpad_ig_autopublish', state.autoPublishInstagram);
    if ($('instagramWebhookSettings')) {
      $('instagramWebhookSettings').style.display = state.autoPublishInstagram ? 'block' : 'none';
    }
  };
}

if ($('igWebhookUrl')) {
  $('igWebhookUrl').value = state.igWebhookUrl;
  $('igWebhookUrl').oninput = (e) => {
    state.igWebhookUrl = e.target.value.trim();
    localStorage.setItem('mindpad_ig_webhook_url', state.igWebhookUrl);
  };
}

if ($('igCaptionText')) {
  $('igCaptionText').value = state.igCaption;
  $('igCaptionText').oninput = (e) => {
    state.igCaption = e.target.value;
    localStorage.setItem('mindpad_ig_caption', state.igCaption);
  };
}

if ($('testIgWebhookBtn')) {
  $('testIgWebhookBtn').onclick = async () => {
    const url = $('igWebhookUrl')?.value?.trim();
    if (!url) {
      alert('Ingresa primero la URL de tu Webhook (Make / Zapier)');
      return;
    }
    const statusEl = $('igWebhookStatus');
    statusEl.style.display = 'block';
    statusEl.style.color = '#38bdf8';
    statusEl.textContent = 'Enviando prueba a Make / Zapier...';

    try {
      const testRes = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'mindpad_test',
          caption: $('igCaptionText')?.value || 'Una extraña intuición que tuve hace días...',
          secretDrawing: 'gato',
          secretWord: 'Holanda',
          secretNumber: '32143',
          imageUrl: 'https://image.pollinations.ai/prompt/vintage%20car%20in%20rain%20with%20cat%20keychain?width=768&height=1024&nologo=true&seed=42&model=flux',
          timestamp: new Date().toISOString()
        })
      });

      if (testRes.status === 410) {
        statusEl.style.color = '#f59e0b';
        statusEl.textContent = '⚠️ Make.com recibió el ping, pero tu escenario está inactivo. En Make.com haz clic en "Run once" (abajo a la izquierda) o enciende el interruptor a "ON".';
      } else if (testRes.ok) {
        statusEl.style.color = '#4ade80';
        statusEl.textContent = '✓ Webhook conectado y datos enviados exitosamente a Make.com';
      } else {
        statusEl.style.color = '#f87171';
        statusEl.textContent = `Respuesta Make: HTTP ${testRes.status}`;
      }
    } catch (err) {
      statusEl.style.color = '#f87171';
      statusEl.textContent = `✗ Error enviando al Webhook: ${err.message}`;
    }
  };
}

if ($('testOpenRouterBtn')) {
  $('testOpenRouterBtn').onclick = async () => {
    const key = $('openRouterKey').value.trim();
    if (!key) {
      alert('Ingresa primero tu token de OpenRouter (comienza con sk-or-v1-...)');
      return;
    }
    const statusEl = $('openRouterTokenStatus');
    statusEl.style.display = 'block';
    statusEl.style.color = '#c084fc';
    statusEl.textContent = 'Verificando token con OpenRouter...';

    try {
      const res = await fetch('https://openrouter.ai/api/v1/auth/key', {
        headers: { 'Authorization': `Bearer ${key}` }
      });
      const data = await res.json();
      if (data?.data) {
        const info = data.data;
        const limit = info.limit != null ? `$${info.limit}` : 'Sin límite';
        const usage = info.usage != null ? `$${info.usage.toFixed(3)}` : '$0';
        statusEl.style.color = '#4ade80';
        statusEl.textContent = `✓ Token Válido (${info.label || 'Activo'}). Uso: ${usage} / Límite: ${limit}`;
      } else {
        statusEl.style.color = '#f87171';
        statusEl.textContent = `✗ Error: ${data?.error?.message || 'Token no válido'}`;
      }
    } catch (err) {
      statusEl.style.color = '#f87171';
      statusEl.textContent = `✗ Error de conexión: ${err.message}`;
    }
  };
}

if ($('conceptDrawing')) {
  $('conceptDrawing').oninput = (e) => {
    state.currentDrawing = e.target.value.trim();
    updateAIPromptFromDetection(state.currentDrawing, state.currentWord, state.currentNumber);
  };
}
if ($('conceptWord')) {
  $('conceptWord').oninput = (e) => {
    state.currentWord = e.target.value.trim();
    updateAIPromptFromDetection(state.currentDrawing, state.currentWord, state.currentNumber);
  };
}
if ($('conceptNumber')) {
  $('conceptNumber').oninput = (e) => {
    state.currentNumber = e.target.value.trim();
    updateAIPromptFromDetection(state.currentDrawing, state.currentWord, state.currentNumber);
  };
}

// Botones header de Modos Camuflados directos & Modo Sigilo
if ($('calcModeBtn')) {
  $('calcModeBtn').onclick = () => enterStealthMode('calculator');
}
if ($('notesModeBtn')) {
  $('notesModeBtn').onclick = () => enterStealthMode('notes');
}
if ($('musicModeBtn')) {
  $('musicModeBtn').onclick = () => enterStealthMode('player');
}
if ($('stealthBtn')) {
  $('stealthBtn').onclick = () => enterStealthMode();
}

// Capas de Presentación
if ($('layer1Btn')) $('layer1Btn').onclick = () => switchPresentationLayer(1);
if ($('layer2Btn')) $('layer2Btn').onclick = () => switchPresentationLayer(2);
if ($('layer3Btn')) $('layer3Btn').onclick = () => switchPresentationLayer(3);
if ($('layer4Btn')) $('layer4Btn').onclick = () => switchPresentationLayer(4);
if ($('layer5Btn')) $('layer5Btn').onclick = () => switchPresentationLayer(5);
if ($('layer6Btn')) $('layer6Btn').onclick = () => switchPresentationLayer(6);
if ($('viewDossierBtn')) {
  $('viewDossierBtn').onclick = () => {
    const el = $('routinesDossier');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
}

// Capa 5: Eventos Rutina del Sueño & Notas
if ($('dreamHourInput')) {
  $('dreamHourInput').value = state.dreamHour;
  $('dreamHourInput').oninput = (e) => {
    state.dreamHour = e.target.value.trim();
    localStorage.setItem('mindpad_dream_hour', state.dreamHour);
    updateDreamNoteDOM();
    if (state.slateContentType === 'dream_list') redrawChalkSlate();
  };
}
if ($('dreamNameInput')) {
  $('dreamNameInput').value = state.dreamName;
  $('dreamNameInput').oninput = (e) => {
    state.dreamName = e.target.value.trim();
    localStorage.setItem('mindpad_dream_name', state.dreamName);
    updateDreamNoteDOM();
    if (state.slateContentType === 'dream_list') redrawChalkSlate();
  };
}
if ($('dreamPlaceInput')) {
  $('dreamPlaceInput').value = state.dreamPlace;
  $('dreamPlaceInput').oninput = (e) => {
    state.dreamPlace = e.target.value.trim();
    localStorage.setItem('mindpad_dream_place', state.dreamPlace);
    updateDreamNoteDOM();
    if (state.slateContentType === 'dream_list') redrawChalkSlate();
  };
}
if ($('dreamFoodInput')) {
  $('dreamFoodInput').value = state.dreamFood;
  $('dreamFoodInput').oninput = (e) => {
    state.dreamFood = e.target.value.trim();
    localStorage.setItem('mindpad_dream_food', state.dreamFood);
    updateDreamNoteDOM();
    if (state.slateContentType === 'dream_list') redrawChalkSlate();
  };
}

if ($('quickOpenNotesBtn5')) $('quickOpenNotesBtn5').onclick = () => enterStealthMode('notes');
if ($('quickSyncDreamBtn5')) {
  $('quickSyncDreamBtn5').onclick = () => {
    updateDreamNoteDOM();
    state.slateContentType = 'dream_list';
    if ($('slateContentTypeSelect')) $('slateContentTypeSelect').value = 'dream_list';
    localStorage.setItem('mindpad_slate_content_type', 'dream_list');
    redrawChalkSlate();
    broadcastSlateUpdate();
    triggerHaptic([60, 40, 60]);
    alert('✓ Nota del sueño y Pizarra de tiza sincronizadas');
  };
}
if ($('quickSpeakDreamBtn5')) {
  $('quickSpeakDreamBtn5').onclick = () => {
    const text = `Premonición: Hora ${state.dreamHour}, Nombre ${state.dreamName}, Destino ${state.dreamPlace}, Comida ${state.dreamFood}`;
    speakTTS(text);
  };
}

// Capa 6: Eventos Melodía Telepática & Reproductor iTunes
if ($('dreamSongInput')) {
  $('dreamSongInput').value = state.dreamSong;
  $('dreamSongInput').oninput = (e) => {
    state.dreamSong = e.target.value.trim();
    localStorage.setItem('mindpad_dream_song', state.dreamSong);
  };
}
if ($('searchSongBtn')) {
  $('searchSongBtn').onclick = () => {
    const query = $('dreamSongInput')?.value || state.dreamSong;
    fetchSongPreview(query, false);
  };
}
if ($('quickOpenMusicBtn6')) $('quickOpenMusicBtn6').onclick = () => enterStealthMode('player');

// Navegación dentro del Bloc de Notas Falso
if ($('notesBackBtn')) $('notesBackBtn').onclick = exitStealthMode;
if ($('notesToggleDoodleBtn')) {
  $('notesToggleDoodleBtn').onclick = () => {
    const canvas = $('notesDoodleCanvas');
    if (canvas) canvas.scrollIntoView({ behavior: 'smooth' });
  };
}

if ($('quickOpenCalcBtn1')) $('quickOpenCalcBtn1').onclick = () => enterStealthMode('calculator');
if ($('quickOpenStealthBtn1')) $('quickOpenStealthBtn1').onclick = () => enterStealthMode('lockscreen');

if ($('vipEventName')) {
  $('vipEventName').value = state.vipEventName;
  $('vipEventName').oninput = (e) => {
    state.vipEventName = e.target.value.trim();
    localStorage.setItem('mindpad_vip_event', state.vipEventName);
  };
}

if ($('quickDownloadVipBtn')) $('quickDownloadVipBtn').onclick = downloadVipProof;
if ($('quickShareStoryBtn')) $('quickShareStoryBtn').onclick = shareToInstagram;

if ($('startTheatricalTimerBtn')) $('startTheatricalTimerBtn').onclick = startTheatricalTimer;
if ($('resetTheatricalTimerBtn')) $('resetTheatricalTimerBtn').onclick = resetTheatricalTimer;

if ($('launchDirectCalcCheck')) {
  $('launchDirectCalcCheck').checked = state.launchDirectToCalculator;
  $('launchDirectCalcCheck').onchange = (e) => {
    state.launchDirectToCalculator = e.target.checked;
    localStorage.setItem('mindpad_launch_direct_calc', state.launchDirectToCalculator);
  };
}

if ($('stealthCamouflage')) {
  $('stealthCamouflage').value = state.stealthCamouflage;
  $('stealthCamouflage').onchange = (e) => {
    state.stealthCamouflage = e.target.value;
    localStorage.setItem('mindpad_stealth_camouflage', state.stealthCamouflage);
  };
}

$('detectMode').onchange = (e) => { state.detectMode = e.target.value; };
$('orientationSelect').onchange = (e) => { state.orientation = e.target.value; redrawAllStrokes(); };
$('delayTimeout').onchange = (e) => { state.delayMs = +e.target.value; };
$('vibrateCheck').onchange = (e) => { state.vibrate = e.target.checked; };

$('strokeWidthSlider').oninput = (e) => {
  state.strokeWidth = +e.target.value;
  const label = state.strokeWidth <= 0.8 ? ' (Ultra Fino)' : state.strokeWidth <= 1.4 ? ' (Fino - Recomendado)' : state.strokeWidth <= 2.2 ? ' (Medio)' : ' (Grueso)';
  $('strokeWidthVal').textContent = state.strokeWidth.toFixed(1) + label;
  redrawAllStrokes();
};

$('ttsRate').oninput = (e) => {
  state.ttsRate = +e.target.value;
  $('ttsRateVal').textContent = state.ttsRate + 'x';
};
$('testAudioBtn').onclick = () => speakTTS('MindPad Pro listo. Ha dibujado un árbol de Navidad');

$('clearMonitorBtn').onclick = () => {
  state.strokes = [];
  state.currentStroke = null;
  state.lastSpokenText = '';
  $('lastResult').textContent = '— Esperando trazos —';
  $('confidenceList').innerHTML = '';
  redrawAllStrokes();
};

// Simulador táctil / mouse
function screenToNormalized(clientX, clientY) {
  const rect = previewCanvas.getBoundingClientRect();
  const px = clientX - rect.left;
  const py = clientY - rect.top;
  const vp = getViewport(previewCanvas.clientWidth, previewCanvas.clientHeight);
  const nx = Math.max(0, Math.min(1, (px - vp.offsetX) / vp.renderW));
  const ny = Math.max(0, Math.min(1, (py - vp.offsetY) / vp.renderH));
  return { nx, ny };
}

previewCanvas.addEventListener('pointerdown', (e) => {
  previewCanvas.setPointerCapture(e.pointerId);
  clearTimeout(state.inactivityTimer);
  const { nx, ny } = screenToNormalized(e.clientX, e.clientY);
  state.currentStroke = { points: [{ x: nx, y: ny, p: 0.7, t: performance.now() }] };
  state.strokes.push(state.currentStroke);
});

previewCanvas.addEventListener('pointermove', (e) => {
  if (!state.currentStroke) return;
  const { nx, ny } = screenToNormalized(e.clientX, e.clientY);
  state.currentStroke.points.push({ x: nx, y: ny, p: 0.7, t: performance.now() });
  renderLiveSegment(state.currentStroke);
});

previewCanvas.addEventListener('pointerup', () => {
  if (state.currentStroke) {
    state.currentStroke = null;
    clearTimeout(state.inactivityTimer);
    state.inactivityTimer = setTimeout(onParticipantFinished, state.delayMs);
  }
});

// Inicialización
initTTS();
initCalculator();
updateCalcDisplay();
updateDreamNoteDOM();
initMusicPlayerEvents();
fetchSongPreview(state.dreamSong);
switchPresentationLayer(1);
initSlateControls();
initSlateSettingsUI();
resizeCanvases();
updatePageUI();
updateAIPromptFromDetection(state.currentDrawing, state.currentWord, state.currentNumber);

// Re-renderizar pizarra cuando carguen las fuentes manuscritas de Google Fonts
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(() => {
    if (typeof redrawChalkSlate === 'function') {
      redrawChalkSlate();
    }
  });
}

// Comprobar parámetros de URL: ?view=slate o ?slate=1 para monitores Kindle / E-Ink
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('view') === 'slate' || urlParams.get('slate') === '1' || urlParams.get('mode') === 'slate') {
  setTimeout(() => {
    enterSlateMode();
  }, 50);
} else if (state.launchDirectToCalculator) {
  setTimeout(() => {
    enterStealthMode('calculator');
  }, 80);
}
