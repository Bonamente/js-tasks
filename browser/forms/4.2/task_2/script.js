let table = document.getElementById('bagua-table');

/* ваш код */
let editableTd;

const startEdit = (td) => {
  editableTd = {
    element: td,
    originalData: td.innerHTML,
  };

  td.classList.add('edited-td');

  const textArea = document.createElement('textarea');
  textArea.style.width = `${td.clientWidth}px`;
  textArea.style.height = `${td.clientHeight}px`;
  textArea.className = 'edited-area';
  textArea.value = td.innerHTML;

  td.innerHTML = '';
  td.appendChild(textArea);
  textArea.focus();

  td.insertAdjacentHTML(
    'beforeEnd',
    `<div class="edited-td-controls">
      <button class="finish-edit-btn" type="button">OK</button>
      <button class="cancel-edit-btn" type="button">CANCEL</button>
    </div>`
  );
};

const finishEdit = (td, isFinished) => {
  td.innerHTML = isFinished ? td.firstChild.value : editableTd.originalData;
  td.classList.remove('edited-td');
  editableTd = null;
};

const handleTableClick = ({ target }) => {
  const targetElement = target.closest('.cancel-edit-btn,.finish-edit-btn,td');

  switch (true) {
    case !table.contains(targetElement):
      return;

    case targetElement.nodeName === 'TD':
      if (editableTd) return;
      startEdit(targetElement);
      break;

    case targetElement.className === 'finish-edit-btn':
      finishEdit(editableTd.element, true);
      break;

    case targetElement.className === 'cancel-edit-btn':
      finishEdit(editableTd.element, false);
  }
};

table.addEventListener('click', handleTableClick);
