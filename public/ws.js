const wsUri = 'ws://localhost:9001';

let webSocket;

function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function writeOutput(msg) {
  const output = document.getElementById('outputMsg');
  const span = document.createElement('p');
  span.innerText = msg;
  output.appendChild(span);
}

function checkWSSupport() {
  if (window.WebSocket) {
    writeOutput('Websocket is suppoprted');
    return true;
  }
  writeOutput('Websocket NOT supported');
  const btn = document.getElementById('btnSend');
  btn.setAttribute('disabled', 'disabled');
  return false;
}

function doSend() {
  const inputField = document.getElementById('textMsg');
  const textMsg = inputField.value;
  if (webSocket.readyState !== webSocket.OPEN) {
    writeOutput(`NOT OPEN: ${textMsg}`);
  }
  writeOutput(`SENT: ${textMsg}`);
  webSocket.send(textMsg);
  // inputField.value = '';
}

function onOpen(event) {
  writeOutput('CONNECTED');
}

function onClose(event) {
  writeOutput('DISCONNECTED');
}

function onMessage(event) {
  console.log(event);
  writeOutput(`RESPONSE: ${event.data}`);
}

function onError(event) {
  writeOutput(`Error: ${event.data}`);
}

function connect() {
  webSocket = new WebSocket(wsUri);
  webSocket.onopen = function (evt) { onOpen(evt); };
  webSocket.onclose = function (evt) { onClose(evt); };
  webSocket.onmessage = function (evt) { onMessage(evt); };
  webSocket.onerror = function (evt) { onError(evt); };
}

docReady(() => {
  if (checkWSSupport()) {
    const sendBtn = document.getElementById('btnSend');
    sendBtn.addEventListener('click', doSend);
    connect();
  }
});
