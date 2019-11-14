function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function prevDef(e) {
  e.preventDefault();
}

function dropItem(e) {
  prevDef(e);
  const { files } = e.dataTransfer;
  console.log('files: ', files);
  const table = document.getElementById('fileInfo');

  if (table.innerHTML === '') {
    table.innerHTML = `
      <thead>
        <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Size</th>
        </tr>
      </thead>
    `;
  }


  for (let i = 0; i < files.length; i += 1) {
    const htmlString = `
      <tr>
        <td>${files[i].name}</td>
        <td>${files[i].type}</td>
        <td>${files[i].size}</td>
      </tr>
    `;
    table.innerHTML += htmlString;
  }
}


docReady(() => {
  const target = document.getElementById('target');

  target.addEventListener('dragenter', prevDef);
  target.addEventListener('dragover', prevDef);
  target.addEventListener('drop', dropItem);
});
