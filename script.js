document.getElementById('btn-calcular').addEventListener('click', function() {

    const selectPelicula = document.getElementById('pelicula');
    const precioPelicula = parseFloat(selectPelicula.value);

    const inputCantidad = document.getElementById('cantidad');
    const cantidad = parseInt(inputCantidad.value);

    const asientoSeleccionado = document.querySelector('input[name="asiento"]:checked');

    const mensajeAlerta = document.getElementById('mensaje-alerta');
    if (!precioPelicula || isNaN(cantidad) || cantidad <= 0) {
        mensajeAlerta.textContent = "Por favor, selecciona una película y una cantidad válida de boletos.";
        mensajeAlerta.classList.remove('oculto');
        return;
    } else {
        mensajeAlerta.classList.add('oculto');
    }

    let subtotalBoletos = precioPelicula * cantidad;
    let cargosAsiento = 0;

    if (asientoSeleccionado && asientoSeleccionado.value === 'vip') {
        cargosAsiento = 50 * cantidad;
    }

    let totalSnacks = 0;

    const comboPalomitas = document.getElementById('combo-palomitas');
    const comboHotdog = document.getElementById('combo-hotdog');
    const comboPareja = document.getElementById('combo-pareja');

    if (comboPalomitas && comboPalomitas.checked) {
        totalSnacks += parseFloat(comboPalomitas.value);
    }

    if (comboHotdog && comboHotdog.checked) {
        totalSnacks += parseFloat(comboHotdog.value);
    }

    if (comboPareja && comboPareja.checked) {
        totalSnacks += parseFloat(comboPareja.value);
    }

    let totalFinal = subtotalBoletos + cargosAsiento + totalSnacks;

    document.getElementById('resumen-boletos').textContent = `$${subtotalBoletos.toFixed(2)} MXN`;
    document.getElementById('resumen-asiento').textContent = `$${cargosAsiento.toFixed(2)} MXN`;
    document.getElementById('resumen-snacks').textContent = `$${totalSnacks.toFixed(2)} MXN`;
    document.getElementById('total-pagar').textContent = `$${totalFinal.toFixed(2)} MXN`;
});