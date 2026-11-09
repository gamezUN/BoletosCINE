// EVENTO: Escuchar el clic en el botón de calcular
document.getElementById('btn-calcular').addEventListener('click', function() {

    // 1. OBTENCIÓN DE ENTRADAS (INPUTS)
    const selectPelicula = document.getElementById('pelicula');
    const precioPelicula = parseFloat(selectPelicula.value);

    const inputCantidad = document.getElementById('cantidad');
    const cantidad = parseInt(inputCantidad.value);

    // REQUISITO JS 1: Capturar el botón de tipo radio seleccionado para "asiento"
    const asientoSeleccionado = document.querySelector('input[name="asiento"]:checked');

    // 2. VALIDACIÓN INICIAL
    const mensajeAlerta = document.getElementById('mensaje-alerta');
    if (!precioPelicula || isNaN(cantidad) || cantidad <= 0) {
        mensajeAlerta.textContent = "Por favor, selecciona una película y una cantidad válida de boletos.";
        mensajeAlerta.classList.remove('oculto');
        return;
    } else {
        mensajeAlerta.classList.add('oculto');
    }

    // 3. LÓGICA DE CÁLCULO
    let subtotalBoletos = precioPelicula * cantidad;
    let cargosAsiento = 0;

    // REQUISITO JS 2: Cargo VIP de $50 por cada boleto
    if (asientoSeleccionado && asientoSeleccionado.value === 'vip') {
        cargosAsiento = 50 * cantidad;
    }

    // Cálculo de Snacks / Combos
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

    // REQUISITO JS 3 y 4: Sumar el Combo Pareja cuando esté seleccionado
    if (comboPareja && comboPareja.checked) {
        totalSnacks += parseFloat(comboPareja.value);
    }

    // Cálculo final total
    let totalFinal = subtotalBoletos + cargosAsiento + totalSnacks;

    // 4. RENDERIZADO / MANIPULACIÓN DEL DOM
    document.getElementById('resumen-boletos').textContent = `$${subtotalBoletos.toFixed(2)} MXN`;
    document.getElementById('resumen-asiento').textContent = `$${cargosAsiento.toFixed(2)} MXN`;
    document.getElementById('resumen-snacks').textContent = `$${totalSnacks.toFixed(2)} MXN`;
    document.getElementById('total-pagar').textContent = `$${totalFinal.toFixed(2)} MXN`;
});