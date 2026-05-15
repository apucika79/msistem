function submitForm(event) {
  event.preventDefault();
  const message = document.getElementById('form-message');
  message.textContent = 'Köszönjük! Hamarosan felvesszük Önnel a kapcsolatot.';
  return false;
}
