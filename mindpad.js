// MindPad X10 Pro — Mentalism Engine con Smartwatch, Fake Lockscreen, Multi-Espectador & Offline ESP
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
  "candle": "vela", "cannon": "cañón", "canoe": "canoa", "car": "auto", "carrot": "zanahoria",
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
  "tractor": "tractor", "traffic light": "semáforo", "train": "tren", "tree": "árbol",
  "triangle": "triángulo", "truck": "camión", "umbrella": "paraguas", "van": "camioneta",
  "vase": "jarrón", "violin": "violín", "washing machine": "lavarropas", "watermelon": "sandía",
  "whale": "ballena", "wheel": "rueda", "windmill": "molino de viento", "wine bottle": "botella de vino",
  "wine glass": "copa de vino", "wristwatch": "reloj de pulsera", "zebra": "cebra", "zigzag": "zigzag"
};

// ==========================================
// 2. CONSTANTES BLE DE LA HUION NOTE X10
// ==========================================
const HUION_SERVICE_UUID = '0000ffe0-0000-1000-8000-00805f9b34fb';
const CHAR_NOTIFY_UUID   = '0000ffe1-0000-1000-8000-00805f9b34fb'; // Trazos en vivo (55 54)
const CHAR_WRITE_UUID    = '0000ffe2-0000-1000-8000-00805f9b34fb'; // Handshake / Keepalive

const CMD_TABLET_NAME    = 0xC9; // 201
const CMD_TABLET_INFO    = 0xC8; // 200 (Activa Pen-Tablet mode en firmware)
const CMD_TABLET_VERIFY  = 0xCA; // 202
const CMD_TABLET_BATTERY = 0xD1; // 209 (Keepalive)

const DEFAULT_MAX_X = 37400; // Dimensiones nativas X10
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
  pages: [{ strokes: [], displayTitle: '', speech: '' }],
  currentPageIndex: 0,

  strokes: [],          // Trazos de la página activa [{ points: [{x, y, p, t}] }]
  currentStroke: null,
  lastPenTime: 0,
  inactivityTimer: null,
  isPenDown: false,
  maxX: DEFAULT_MAX_X,
  maxY: DEFAULT_MAX_Y,
  lastSpokenText: '',

  // Ajustes de mentalismo
  orientation: 'portrait_cw',
  detectMode: 'both',
  strokeWidth: 1.2,
  delayMs: 1800,
  vibrate: true,
  ttsRate: 1.2,
  selectedVoice: null,
  stealthCamouflage: 'lockscreen', // 'lockscreen' o 'aod'
  smartwatchEnabled: false,

  // Reloj & Gestos
  clockInterval: null,
  tripleTapCount: 0,
  tripleTapTimer: null,
  touchStartX: 0,
  touchStartY: 0
};

// Elementos DOM
const $ = (id) => document.getElementById(id);
const previewCanvas = $('previewCanvas');
const pCtx = previewCanvas.getContext('2d');
const stealthCanvas = $('stealthCanvas');
const sCtx = stealthCanvas.getContext('2d');

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

  const status = v.getUint8(2); // 0x80 = hover, 0x81 = touch, 0x00 = levantado
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

// ==========================================
// 6. MOTOR DE MENTALISMO & CLASIFICADOR OFFLINE
// ==========================================
async function onParticipantFinished() {
  if (!state.strokes.length) return;

  $('stealthStatusDot').className = 'stealth-dot recognizing';
  $('lastResult').textContent = 'Descifrando mente...';

  if (state.vibrate) triggerHaptic([60, 50, 60]);

  let finalSpeech = '';
  let displayTitle = '';
  let candidates = [];

  const pagePrefix = state.pages.length > 1 ? `Espectador ${state.currentPageIndex + 1}: ` : '';

  // ¿Modo forzado offline (ESP o Dígitos) o sin conexión a internet?
  if (state.detectMode === 'esp' || state.detectMode === 'digits' || !navigator.onLine) {
    const offlineResult = classifyOffline(state.strokes, state.detectMode);
    finalSpeech = `${pagePrefix}${offlineResult.speech}`;
    displayTitle = offlineResult.title;
    candidates = offlineResult.alternatives;
  } else {
    // Modo Online con respaldo de clasificador offline
    try {
      const mode = state.detectMode;
      let drawingPromise = null;
      let textPromise = null;

      if (mode === 'both' || mode === 'drawing') drawingPromise = recognizeDrawing(state.strokes);
      if (mode === 'both' || mode === 'text') textPromise = recognizeText(state.strokes);

      const [drawingResults, textResults] = await Promise.all([drawingPromise, textPromise]);

      if (mode === 'drawing' && drawingResults?.length) {
        const topEn = drawingResults[0];
        const topEs = QUICKDRAW_ES[topEn] || topEn;
        finalSpeech = `${pagePrefix}Dibujo: ${topEs}`;
        displayTitle = `🎨 ${topEs.toUpperCase()}`;
        candidates = drawingResults.map((w) => QUICKDRAW_ES[w] || w);
      } else if (mode === 'text' && textResults?.length) {
        const topWord = textResults[0];
        finalSpeech = `${pagePrefix}${topWord}`;
        displayTitle = `✍️ ${topWord}`;
        candidates = textResults;
      } else if (mode === 'both') {
        const topText = textResults?.[0] || '';
        const topDrawingEn = drawingResults?.[0] || '';
        const topDrawingEs = QUICKDRAW_ES[topDrawingEn] || topDrawingEn;

        // Comprobar si parece un símbolo ESP o número
        const espCheck = classifyOffline(state.strokes, 'esp');
        if (espCheck.confidence > 0.82) {
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
    } catch (err) {
      console.warn('Fallo en consulta online, usando motor offline:', err);
      const offlineResult = classifyOffline(state.strokes, state.detectMode);
      finalSpeech = `${pagePrefix}${offlineResult.speech}`;
      displayTitle = offlineResult.title;
      candidates = offlineResult.alternatives;
    }
  }

  if (finalSpeech) {
    state.lastSpokenText = finalSpeech;
    $('lastResult').textContent = displayTitle;
    $('stealthOverlayText').textContent = displayTitle;
    renderCandidates(candidates);

    // Guardar en la página actual
    state.pages[state.currentPageIndex] = {
      strokes: JSON.parse(JSON.stringify(state.strokes)),
      displayTitle,
      speech: finalSpeech
    };

    speakTTS(finalSpeech);
    if (state.vibrate) triggerHaptic([120]);

    // Enviar a Smartwatch (Wear OS / Apple Watch / Xiaomi)
    sendToSmartwatch(displayTitle, finalSpeech);
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
  const aspect = w / h; // >1 = ancho, <1 = alto
  const numStrokes = strokes.length;

  // Distancia inicio a fin del primer trazo (para saber si es cerrado)
  const firstS = strokes[0].points;
  const startPt = firstS[0];
  const endPt = firstS[firstS.length - 1];
  const closeDist = Math.hypot(startPt.x - endPt.x, startPt.y - endPt.y);
  const isLoop = closeDist < Math.max(w, h) * 0.28;

  // Longitud total del trazo
  let totalLen = 0;
  for (let i = 1; i < firstS.length; i++) {
    totalLen += Math.hypot(firstS[i].x - firstS[i - 1].x, firstS[i].y - firstS[i - 1].y);
  }

  // 1. Detección de Símbolos Zener (ESP)
  if (mode === 'esp' || mode === 'both') {
    // Cruz ESP: 2 trazos que se intersectan
    if (numStrokes === 2) {
      const s1 = strokes[0].points;
      const s2 = strokes[1].points;
      const s1Horiz = Math.abs(s1[s1.length - 1].x - s1[0].x) > Math.abs(s1[s1.length - 1].y - s1[0].y);
      const s2Horiz = Math.abs(s2[s2.length - 1].x - s2[0].x) > Math.abs(s2[s2.length - 1].y - s2[0].y);
      if (s1Horiz !== s2Horiz) {
        return { title: '✚ CRUZ (ESP)', speech: 'Símbolo: Cruz', confidence: 0.95, alternatives: ['Cruz', 'Más', 'Cuatro'] };
      }
    }
    // Ondas ESP: 2 o 3 trazos horizontales
    if (numStrokes >= 2 && numStrokes <= 3 && aspect > 1.3) {
      return { title: '♒ ONDAS (ESP)', speech: 'Símbolo: Ondas', confidence: 0.92, alternatives: ['Ondas', 'Líneas', 'Río'] };
    }
    // Círculo ESP: 1 trazo cerrado casi redondo
    if (numStrokes === 1 && isLoop && aspect >= 0.75 && aspect <= 1.35) {
      return { title: '⭕ CÍRCULO (ESP)', speech: 'Símbolo: Círculo', confidence: 0.9, alternatives: ['Círculo', 'Cero', 'Sol'] };
    }
    // Cuadrado ESP: 1 o 4 trazos aspecto cuadrado
    if ((numStrokes === 1 || numStrokes === 4) && aspect >= 0.8 && aspect <= 1.25) {
      return { title: '⬛ CUADRADO (ESP)', speech: 'Símbolo: Cuadrado', confidence: 0.85, alternatives: ['Cuadrado', 'Caja', 'Ventana'] };
    }
    // Estrella ESP: 1 trazo no cerrado complejo o 5 picos
    if (totalLen > Math.max(w, h) * 3.5) {
      return { title: '⭐ ESTRELLA (ESP)', speech: 'Símbolo: Estrella', confidence: 0.88, alternatives: ['Estrella', 'Sol'] };
    }
  }

  // 2. Detección de Dígitos (0-9)
  if (mode === 'digits' || mode === 'both') {
    if (numStrokes === 1) {
      if (isLoop && aspect >= 0.6 && aspect <= 1.2) {
        return { title: '0️⃣ NÚMERO CERO', speech: 'Número cero', confidence: 0.9, alternatives: ['0', 'O', 'Círculo'] };
      }
      if (aspect < 0.45 && !isLoop) {
        return { title: '1️⃣ NÚMERO UNO', speech: 'Número uno', confidence: 0.95, alternatives: ['1', 'L', 'Línea'] };
      }
      if (aspect > 0.5 && !isLoop && startPt.y < minY + h * 0.3 && endPt.y > maxY - h * 0.3) {
        return { title: '7️⃣ NÚMERO SIETE', speech: 'Número siete', confidence: 0.85, alternatives: ['7', 'Uno'] };
      }
      if (totalLen > Math.max(w, h) * 4.0) {
        return { title: '8️⃣ NÚMERO OCHO', speech: 'Número ocho', confidence: 0.82, alternatives: ['8', 'B'] };
      }
    }
    if (numStrokes === 2) {
      return { title: '4️⃣ NÚMERO CUATRO', speech: 'Número cuatro', confidence: 0.86, alternatives: ['4', 'Cruz'] };
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

// Reconocimiento Online Texto / Nombres / Números
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
  list.slice(0, 5).forEach((item) => {
    const badge = document.createElement('span');
    badge.className = 'cand-badge';
    badge.textContent = item;
    badge.onclick = () => speakTTS(item);
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

  // Cargar trazos de la página actual
  const cur = state.pages[state.currentPageIndex];
  state.strokes = cur?.strokes ? JSON.parse(JSON.stringify(cur.strokes)) : [];
  $('lastResult').textContent = cur?.displayTitle || '— Esperando trazos —';
  $('stealthOverlayText').textContent = cur?.displayTitle || '';
  redrawAllStrokes();
}

function addNewPage() {
  // Guardar página actual antes de avanzar
  state.pages[state.currentPageIndex] = {
    strokes: JSON.parse(JSON.stringify(state.strokes)),
    displayTitle: $('lastResult').textContent,
    speech: state.lastSpokenText
  };

  // Crear nueva página
  state.pages.push({ strokes: [], displayTitle: '', speech: '' });
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
// 8. SMARTWATCH / NOTIFICACIONES WEAR OS
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
    sendToSmartwatch('MindPad Conectado', 'Las lecturas aparecerán en tu reloj');
  } else {
    alert('Permiso de notificaciones denegado.');
  }
}

function sendToSmartwatch(title, body) {
  if (!state.smartwatchEnabled && Notification.permission !== 'granted') return;
  const thumbUrl = generateThumbnail(state.strokes);

  if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
    navigator.serviceWorker.ready.then((reg) => {
      reg.showNotification(title, {
        body: body,
        icon: thumbUrl,
        image: thumbUrl,
        badge: 'icon.svg',
        vibrate: [200, 100, 200],
        tag: 'mindpad-peek'
      });
    }).catch(() => {
      new Notification(title, { body, icon: thumbUrl, image: thumbUrl });
    });
  } else {
    new Notification(title, { body, icon: thumbUrl, image: thumbUrl });
  }

  // MediaSession artwork para relojes con pantalla multimedia
  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: title,
      artist: body,
      artwork: [{ src: thumbUrl, sizes: '300x300', type: 'image/png' }]
    });
  }
}

// ==========================================
// 9. SUSURRO DE AUDIO (TEXT-TO-SPEECH)
// ==========================================
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

    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    $('lockClockDate').textContent = `${dias[d.getDay()]}, ${d.getDate()} de ${meses[d.getMonth()]}`;
  }
  updateTime();
  clearInterval(state.clockInterval);
  state.clockInterval = setInterval(updateTime, 1000);
}

// Entrar / Salir de Modo Sigiloso
function enterStealthMode() {
  $('setupView').style.display = 'none';
  $('stealthView').style.display = 'block';
  document.body.className = 'mode-stealth';

  if (state.stealthCamouflage === 'lockscreen') {
    $('fakeLockscreen').style.display = 'flex';
    $('aodClock').style.display = 'none';
  } else {
    $('fakeLockscreen').style.display = 'none';
    $('aodClock').style.display = 'block';
  }

  startClocks();
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

// Peek táctil: Mantener presionado revela el dibujo
const stealthView = $('stealthView');
const peekContainer = $('peekContainer');

function showPeek() {
  peekContainer.style.opacity = '1';
  $('fakeLockscreen').style.opacity = '0';
  $('aodClock').style.opacity = '0.05';
}
function hidePeek() {
  peekContainer.style.opacity = '0';
  $('fakeLockscreen').style.opacity = '1';
  $('aodClock').style.opacity = '0.85';
}

stealthView.addEventListener('touchstart', (e) => {
  if (e.target.id === 'exitStealthTrigger') return;
  state.touchStartX = e.touches[0].clientX;
  state.touchStartY = e.touches[0].clientY;
  showPeek();
});

stealthView.addEventListener('touchend', (e) => {
  hidePeek();
  // Detección de Swipe horizontal para cambiar de página
  if (e.changedTouches && e.changedTouches[0]) {
    const diffX = e.changedTouches[0].clientX - state.touchStartX;
    if (diffX > 70) prevPage();
    else if (diffX < -70) nextPage();
  }
});
stealthView.addEventListener('touchcancel', hidePeek);
stealthView.addEventListener('mousedown', (e) => {
  if (e.target.id === 'exitStealthTrigger') return;
  showPeek();
});
stealthView.addEventListener('mouseup', hidePeek);

// Salir con triple tap en esquina superior derecha o tecla Escape
$('exitStealthTrigger').addEventListener('click', () => {
  state.tripleTapCount++;
  clearTimeout(state.tripleTapTimer);
  state.tripleTapTimer = setTimeout(() => { state.tripleTapCount = 0; }, 800);
  if (state.tripleTapCount >= 3) {
    state.tripleTapCount = 0;
    exitStealthMode();
  }
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && $('stealthView').style.display !== 'none') {
    exitStealthMode();
  }
  // Captura de botones de volumen para mentalismo en bolsillo
  if (e.key === 'AudioVolumeDown' || e.key === 'VolumeDown') {
    e.preventDefault();
    addNewPage();
  }
  if (e.key === 'AudioVolumeUp' || e.key === 'VolumeUp') {
    e.preventDefault();
    if (state.lastSpokenText) speakTTS(state.lastSpokenText);
  }
});

// Repetir audio al tocar el reloj en pantalla bloqueada
$('lockClockTime').addEventListener('click', (e) => {
  e.stopPropagation();
  if (state.lastSpokenText) speakTTS(state.lastSpokenText);
});
$('aodClock').addEventListener('click', (e) => {
  e.stopPropagation();
  if (state.lastSpokenText) speakTTS(state.lastSpokenText);
});

// ==========================================
// 11. EVENTOS DE INTERFAZ & SIMULADOR
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

$('stealthCamouflage').onchange = (e) => { state.stealthCamouflage = e.target.value; };
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
$('testAudioBtn').onclick = () => speakTTS('MindPad Pro listo. Ha dibujado una estrella');

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
resizeCanvases();
updatePageUI();
