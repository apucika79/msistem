const menuGomb = document.getElementById('menuGomb');
const menu = document.getElementById('menu');
const ajanlatUrlap = document.getElementById('ajanlatUrlap');
const visszajelzes = document.getElementById('visszajelzes');

menuGomb?.addEventListener('click', () => {
  menu.classList.toggle('nyitva');
});

ajanlatUrlap?.addEventListener('submit', (esemeny) => {
  esemeny.preventDefault();
  const nev = document.getElementById('nev').value.trim();
  visszajelzes.textContent = `Köszönjük, ${nev}! Munkatársunk hamarosan felveszi Önnel a kapcsolatot.`;
  ajanlatUrlap.reset();
});
