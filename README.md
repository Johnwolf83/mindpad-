# Huion X10 Connect

App local para capturar los trazos de la Huion X10 en tiempo real y convertir la escritura a texto.

## Uso
1. Conecta la tableta (USB o Bluetooth) en **modo tableta**.
2. `npm start` (o `node server.js`)
3. Abre http://localhost:5173 y escribe en el área blanca.

## Funciones
- Lectura en vivo: X/Y, presión, inclinación, botones, hover, muestras/s.
- Trazo con grosor según la presión; goma del lápiz o botón Borrador (borra trazos completos).
- Escritura → texto (varios renglones, ES/EN/PT/FR) con alternativas; modo automático.
- Exporta JSON (datos crudos de cada punto), SVG, PNG y TXT.

## Notas
- La entrada usa Pointer Events (Windows Ink). Si la presión siempre sale 0.5 o 0,
  activa "Windows Ink" en el driver de Huion (HuionTablet → ajustes del lápiz).
- El reconocimiento usa el servicio de escritura a mano de Google Input Tools, así que necesita internet.
