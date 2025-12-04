document.addEventListener('DOMContentLoaded', function () {

    const formulario = document.getElementById('formulario-contacto');
    const nombreInput = document.getElementById('nombre-input');
    const emailInput = document.getElementById('email-input');
    const mensajeInput = document.getElementById('mensaje-input');
    const errorNombre = document.getElementById('error-nombre');
    const errorEmail = document.getElementById('error-email');
    const errorMensajeTexto = document.getElementById('error-texto');
    const mensajeExito = document.getElementById('mensaje-exito');
    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        errorNombre.textContent = '';
        errorEmail.textContent = '';
        errorMensajeTexto.textContent = '';
        mensajeExito.textContent = '';
        let esValido = true;
        const nombre = nombreInput.value.trim();
        const mail = emailInput.value.trim();
        const mensaje = mensajeInput.value.trim();
        if (nombre === '') {
            errorNombre.textContent = 'El campo nombre es obligatorio.';
            esValido = false;
        }
        
        
        if(mail === '') {
            errorEmail.textContent = "El campo email es obligatorio."
            esValido = false; }
        if(mensaje === ""){
            errorMensajeTexto.textContent = "El campo mensaje es obligatorio."
            esValido= false
        }
        if(esValido) {
            mensajeExito.textContent = "¡Mensaje enviado con éxito!";
            formulario.reset();
            setTimeout(() => {
                mensajeExito.textContent = "";
            }, 3000);
        
    };
})})
