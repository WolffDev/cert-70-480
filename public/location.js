function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function supportGeo() {
  return 'geolocation' in navigator;
}

function showMsg(msg) {
  const elm = document.getElementById('msg');
  elm.innerHTML = msg;
}

function showPosition(position) {
  const timestamp = new Date(position.timestamp).toLocaleString();
  showMsg(`
    <p>
      Latitude: ${position.coords.latitude} </br>
      Longitude: ${position.coords.longitude} </br>
      Timestamp: ${timestamp} </br>
    </p>
  `);
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      showMsg('DENIED');
      break;

    default:
      showMsg(`Something else, ${error}`);
      break;
  }
}

function getLocation() {
  if (supportGeo()) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    showMsg('Geolocation is not supported in your current browser');
  }
}

docReady(() => {
  getLocation();
});
