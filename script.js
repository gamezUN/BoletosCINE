// EVENTO: Escuchar el clic en el botón de calcular
document.getElementById('btn-calcular').addEventListener('click', function() {
    
    // 1. OBTENCIÓN DE ENTRADAS (INPUTS)
    const selectPelicula = document.getElementById('pelicula');
    const precioPelicula = parseFloat(selectPelicula.value);
    
    const inputCantidad = document.getElementById('cantidad');
    const cantidad = parseInt(inputCantidad.value);

    // REQUISITO JS 1: Capturar el botón de tipo radio seleccionado para "asiento"
    // Pista: Usa querySelector con el name del atributo.
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
    // Cálculo base de los boletos
    let subtotalBoletos = precioPelicula * cantidad;
    let cargosAsiento = 0;

    // REQUISITO JS 2: Estructura condicional (if/else) para los cargos por tipo de asiento
    // Si el asiento es "vip", el cargo extra es de $50 pesos POR CADA BOLETO.
    if (asientoSeleccionado && asientoSeleccionado.value === 'vip') {
        // ESCRIBE AQUÍ TU CÓDIGO PARA CALCULAR LOS CARGOS EXTRA
    }

    // Cálculo de Snacks / Combos
    let totalSnacks = 0;
    
    const comboPalomitas = document.getElementById('combo-palomitas');
    const comboHotdog = document.getElementById('combo-hotdog');
    // REQUISITO JS 3: Declarar la variable para capturar el nuevo "combo-pareja" del HTML
    

    if (comboPalomitas && comboPalomitas.checked) {
        totalSnacks += parseFloat(comboPalomitas.value);
    }
    
    if (comboHotdog && comboHotdog.checked) {
        totalSnacks += parseFloat(comboHotdog.value);
    }

    // REQUISITO JS 4: Sumar condicionalmente el valor de "combo-pareja" si el checkbox está activo
    

    // Cálculo final total
    let totalFinal = subtotalBoletos + cargosAsiento + totalSnacks;

    // 4. RENDERIZADO / MANIPULACIÓN DEL DOM
    document.getElementById('resumen-boletos').textContent = `$${subtotalBoletos.toFixed(2)} MXN`;
    document.getElementById('resumen-asiento').textContent = `$${cargosAsiento.toFixed(2)} MXN`;
    document.getElementById('resumen-snacks').textContent = `$${totalSnacks.toFixed(2)} MXN`;
    document.getElementById('total-pagar').textContent = `$${totalFinal.toFixed(2)} MXN`;
});