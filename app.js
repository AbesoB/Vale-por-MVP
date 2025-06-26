const sampleCards = [
  {
    id: '001',
    title: 'Vale por un abrazo',
    description: 'Un abrazo sincero cuando más lo necesites.',
    rarity: 'común',
    theme: 'amor'
  },
  {
    id: '002',
    title: 'Vale por un desayuno en la cama',
    description: 'Disfruta de un desayuno especial sin salir de la cama.',
    rarity: 'épica',
    theme: 'amor'
  }
];

function renderGallery() {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';
  sampleCards.forEach(card => {
    const el = document.createElement('div');
    el.className = 'card';
    el.innerHTML = `
      <div class="title">\${card.title}</div>
      <div class="desc">\${card.description}</div>
    `;
    gallery.appendChild(el);
  });
}

document.getElementById('create-btn').addEventListener('click', () => {
  const title = prompt('Texto del vale:');
  if (!title) return;
  alert('Vale creado: ' + title);
});

window.addEventListener('load', () => {
  renderGallery();
});