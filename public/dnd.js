function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

let draggedItem;

function dragging(e) {
  const elm = e.target;
  elm.classList.add('dragging');
  draggedItem = elm;
  console.log(draggedItem);
}

function onDragEnd(e) {
  const elm = e.target;
  elm.classList.remove('dragging');
}

function prevDef(e) {
  e.preventDefault();
}

function dropItem(e) {
  console.log(e);
  const dropContainer = e.target;
  if (dropContainer.classList.contains('hole') && dropContainer.children.length === 0) {
    draggedItem.remove();
    dropContainer.appendChild(draggedItem);
  }
}

docReady(() => {
  const items = document.querySelectorAll('.item');
  const holes = document.querySelectorAll('.hole');

  items.forEach((element) => {
    element.addEventListener('dragstart', dragging);
    element.addEventListener('dragend', onDragEnd);
  });

  holes.forEach((element) => {
    element.addEventListener('dragenter', prevDef);
    element.addEventListener('dragover', prevDef);
    element.addEventListener('drop', dropItem);
  });
});
