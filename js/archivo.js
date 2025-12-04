const fileInput = document.getElementById('archivo');
const previewcaja = document.getElementById('preview');
const preview = document.getElementById('previewImage');
const closeBtn = document.getElementById('closeBtn');
const icono = document.getElementById('subir1')

fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (ev) => {
    preview.src = ev.target.result;
    previewcaja.style.display = 'block'; // muestra la vista previa encima de todo
  };
  reader.readAsDataURL(file);
});

closeBtn.addEventListener('click', () => {
  previewcaja.style.display = 'none';
  icono.textContent = "✅" // cierra el modal
  icono.classList.add("listo")
});
