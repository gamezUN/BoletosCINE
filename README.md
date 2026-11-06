## Requerimientos Técnicos (Lo que debes resolver)

### 1. Estructura y Contenido (HTML5)
Abre el archivo `index.html`. Debes completar los siguientes elementos faltantes dentro del formulario para que el usuario pueda seleccionarlos:

* **Nueva Película (`<select>`)**: Añade una nueva opción (`<option>`) para la película **"Romance en París"** cuyo valor (`value`) sea `90` (equivalente a $90 MXN).
* **Tipo de Asiento (`Radio Buttons`)**: Añade una segunda opción de tipo radio para el asiento **"VIP"**. Asegúrate de que comparta el mismo atributo `name="asiento"` que el control existente y que su atributo `value` sea `"vip"`.
* **Nuevo Combo de Comida (`Checkbox`)**: Agrega una tercera opción de tipo checkbox para el **"Combo Pareja"** (Palomitas grandes + 2 Refrescos + Dulce). Asínale el identificador `id="combo-pareja"` y un valor (`value`) de `250`.

### 2. Diseño y Responsividad (CSS3 Flexbox)
Abre el archivo `style.css`. El sitio actualmente se rompe y se ve desalineado en pantallas grandes porque bloquea el flujo natural de los elementos:

* Localiza la clase `.contenedor-principal`. Actualmente está configurada con `display: block`.
* Modifica el contenedor para implementar el modelo de **Flexbox**.
* Aplica la propiedad necesaria para que las dos tarjetas (Formulario y Resumen) se organicen **una al lado de la otra** en pantallas de computadora, pero se apilen **verticalmente** (una debajo de la otra) de forma automática si la pantalla es pequeña (pantallas móviles).

### 3. Lógica, Validaciones y Operaciones (JavaScript)
Abre el archivo `script.js`. La lógica matemática general ya está iniciada, pero debes programar la captura y cálculo de las nuevas opciones que agregaste en el HTML. Busca los comentarios `// REQUISITO JS X` para guiarte:

* **Requisito JS 1**: El selector actual de JavaScript no está detectando qué radio button está activo. Asegúrate de usar la sintaxis correcta de `querySelector` para capturar el botón de tipo radio marcado (`:checked`) bajo el atributo `name="asiento"`.
* **Requisito JS 2**: Implementa una estructura condicional (`if`). Si el usuario seleccionó el asiento con valor `"vip"`, calcula un cargo extra equivalente a **$50 MXN por cada boleto comprado** e incrementa la variable `cargosAsiento`.
* **Requisito JS 3 y 4**: Declara una variable para capturar mediante el DOM el nuevo checkbox `combo-pareja`. Crea una estructura condicional independiente para validar si ha sido marcado (`.checked`); de ser así, suma su valor (`250`) al acumulador `totalSnacks`.