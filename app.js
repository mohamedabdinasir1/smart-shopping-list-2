// === Data Setup ===
const STORAGE_KEY = 'smart-list-data';
let state = {
  currentList: [],
  pantry: []
};

// Load from localStorage
function loadState() {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (saved) state = saved;
}

// Persist to localStorage
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// === Utility ===
function el(tag, cls = '') {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  return e;
}

// === Rendering ===
function renderList() {
  const container = document.getElementById('list-container');
  const emptyMsg = document.getElementById('empty-list');
  container.innerHTML = '';
  if (!state.currentList.length) {
    emptyMsg.style.display = 'block';
    return;
  }
  emptyMsg.style.display = 'none';
  // group by category
  const byCat = state.currentList.reduce((acc, item) => {
    (acc[item.category] = acc[item.category] || []).push(item);
    return acc;
  }, {});
  Object.entries(byCat).forEach(([cat, items]) => {
    const section = el('section');
    const h3 = el('h3');
    h3.textContent = cat;
    section.appendChild(h3);
    items.forEach(item => {
      const card = el('div', 'item-card');
      card.innerHTML = `
        <h4>${item.name}</h4>
        <p>Qty: ${item.qty}</p>
        ${item.notes ? `<p>${item.notes}</p>` : ''}
      `;
      const btn = el('button');
      btn.textContent = 'Purchased';
      btn.addEventListener('click', () => purchaseItem(item.id));
      card.appendChild(btn);
      section.appendChild(card);
    });
    container.appendChild(section);
  });
}

function renderPantry() {
  const container = document.getElementById('pantry-container');
  const emptyMsg = document.getElementById('empty-pantry');
  container.innerHTML = '';
  if (!state.pantry.length) {
    emptyMsg.style.display = 'block';
    return;
  }
  emptyMsg.style.display = 'none';
  state.pantry.forEach(item => {
    const card = el('div', 'item-card');
    card.innerHTML = `
      <h4>${item.name}</h4>
      <p>Qty: ${item.qty}</p>
      <p><em>Purchased on ${new Date(item.purchasedAt).toLocaleDateString()}</em></p>
    `;
    const btn = el('button');
    btn.textContent = 'Restore';
    btn.addEventListener('click', () => restoreItem(item.id));
    card.appendChild(btn);
    container.appendChild(card);
  });
}

// === Actions ===
function purchaseItem(id) {
  const idx = state.currentList.findIndex(i => i.id === id);
  if (idx === -1) return;
  const [item] = state.currentList.splice(idx, 1);
  item.purchasedAt = Date.now();
  state.pantry.push(item);
  saveState();
  renderList();
}

function restoreItem(id) {
  const idx = state.pantry.findIndex(i => i.id === id);
  if (idx === -1) return;
  const [item] = state.pantry.splice(idx, 1);
  delete item.purchasedAt;
  state.currentList.push(item);
  saveState();
  renderPantry();
}

function clearPantry() {
  if (!confirm('Are you sure you want to clear your entire pantry?')) return;
  state.pantry = [];
  saveState();
  renderPantry();
}

// === Form Handling ===
function setupAddForm() {
  const form = document.getElementById('add-form');
  const nameEl = document.getElementById('item-name');
  const catEl  = document.getElementById('item-category');
  const qtyEl  = document.getElementById('item-qty');
  const notesEl= document.getElementById('item-notes');

  const errName = document.getElementById('error-name');
  const errCat  = document.getElementById('error-category');
  const errQty  = document.getElementById('error-qty');

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;
    // reset errors
    [errName, errCat, errQty].forEach(el => el.textContent = '');

    if (!nameEl.value.trim()) {
      errName.textContent = 'Name is required';
      valid = false;
    }
    if (!catEl.value) {
      errCat.textContent = 'Category is required';
      valid = false;
    }
    if (qtyEl.value < 1) {
      errQty.textContent = 'Qty must be ≥ 1';
      valid = false;
    }
    if (!valid) return;

    const newItem = {
      id: Date.now(),
      name: nameEl.value.trim(),
      category: catEl.value,
      qty: Number(qtyEl.value),
      notes: notesEl.value.trim()
    };
    state.currentList.push(newItem);
    saveState();
    window.location.href = 'index.html';
  });
}

// === Entry Point ===
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  if (document.getElementById('list-container')) {
    renderList();
  }
  if (document.getElementById('pantry-container')) {
    renderPantry();
    document.getElementById('clear-pantry')
      .addEventListener('click', clearPantry);
  }
  if (document.getElementById('add-form')) {
    setupAddForm();
  }
});
