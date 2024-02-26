const fetch = require('node-fetch');

setInterval(() => {

  // Llamada a la nueva URL cada 5 minutos
  fetch('https://script.google.com/macros/s/AKfycbykH_bCIBqloUDo58VRhcTIPJNICs3G5yC4LNGDj28dUTRciV_rijq-zp32Ky2JUAK6/exec');

}, 300000);