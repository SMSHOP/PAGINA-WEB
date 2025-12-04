const tablaProductos = document.getElementById('tabla-productos');
let filaSeleccionada = null
tablaProductos.addEventListener('click', function(event) {
    const filaClickeada = event.target.closest('tr')
    if(filaClickeada){
        if(filaSeleccionada){
            filaSeleccionada.classList.remove("fila-seleccionada")
        }
        
        filaClickeada.classList.add("fila-seleccionada")
        filaSeleccionada = filaClickeada
}})