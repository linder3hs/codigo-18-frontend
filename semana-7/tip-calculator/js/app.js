const containerBill = document.querySelector("#contailer-bill");
const containerPercentages = document.querySelector("#container-percentage");
const inputBill = document.querySelector("#input-bill");

// array con los valores de los botons
const percentages = [
  {
    type: "button",
    value: "5%",
    isCheck: false,
  },
  {
    type: "button",
    value: "10%",
    isCheck: false,
  },
  {
    type: "button",
    value: "15%",
    isCheck: false,
  },
  {
    type: "button",
    value: "25%",
    isCheck: false,
  },
  {
    type: "button",
    value: "50%",
    isCheck: false,
  },
  {
    type: "input",
    value: "",
    isCheck: false,
  },
];

// click
containerBill.onclick = function () {
  inputBill.focus();
};

inputBill.onkeyup = function (event) {
  const inputValue = event.target.value;

  if (inputValue[0] === "0") {
    containerBill.classList.add("border", "border-red-500");
  } else {
    containerBill.classList.remove("border", "border-red-500");
  }

  if (isNaN(inputValue)) {
    this.value = inputValue.slice(0, -1);
  }
};

/**
 * setButtonTip
 * Recibe como parametro a un element que en este contexto es button
 * lo que queremos obtener de este button es el indice del boton al que le 
 * dieron click, sabiendo eso haremos lo siguiente
 */
function setButtonTip(element) {
  // Paso1: Obtener el indice del button
  const buttonIndex = element.dataset.index; // 5% index = 0
  // Paso2: Entrar al array de objecto y buscar por indicie y cambiar la 
  // propiedad isCheck = true
  percentages[buttonIndex].isCheck = true;

  // Paso3: Modificamos el valor de las otra opciones false
  for (let percentage in percentages) {
    // Paso4: Validamos que el indice sea diferente a buttonIndex
    if (percentage !== buttonIndex) {
      percentages[percentage].isCheck = false;
    }
  }
  // Paso5: Volvemos a renderizar lo botones con la informaciona actualizada
  renderPercentagesButtons(percentages);
}

/**
 * setInputTip
 * Recibe como parametro a element, recordemos que element es basicamente el input
 * por ende puedo accede a sus propiedades
 */
function setInputTip(element) {
  /**
   * Paso1: Es validar que unicamente podamos escribir numeros en el input
   * para ello primero vamos a capturar el valor actual del input
   * y vamos a evaluar lo siguiente
   */
  const inputValue = element.value;
  /**
   * Si la primera letra de la palabra es igual a 0 vamos a colocar un border
   * rojos en el input y NO vamos a des seleccionar el button, por ede uso
   * return para que si entra a la condicion la funcion termine
   */
  if (inputValue[0] === "0") {
    element.classList.add("border", "border-red-500");
    return;
  } else {
    // Si no le quitamos el border rojo
    element.classList.remove("border", "border-red-500");
  }

  /**
   * En este caso estamos usando la funcion `isNaN`
   * isNaN: is Not a Number ()
   * Si el valor del input is Not a Number vamos eliminar el ultimo caracter
   * que el usuariuo escribio, para ello uso la funcion slice con los valores
   * 0, -1, porque quiero inciar desde el ultimo caracter por ende uso el -1
   * para empezar a contar de derecha a izquierda
   */
  if (isNaN(inputValue)) {
    element.value = inputValue.slice(0, -1);
  }

  /**
   * Si la validaciones anteriores fueron exitosas entonces ahora procedemos a
   * poner todos los button a false, porque recorder que el objeto existe
   * la propiedad isCheck la cual usamos para saber si un boton esta
   * seleccionado
   *
   * Para pasar todo a false y además mantener el valor del input que estamos
   * escribien vamos usar la funcion map
   *
   * En la funcion estamos retornando la misma estructura
   *
   * {
   *  type: "button",
   *  isCheck: false,
   *  value: "4"
   * }
   *
   * En el type y el isCheck no hay nada nuevo siemplemente mantenemos el valor
   * de type y pasamos los isCheck a false, pero en caso de value quiero guardar
   * el valor que el usuario escribio, por ende hago una condicion
   *
   * Si el type es igual a input entonces cambio value = element.value, pero si
   * no se cumple esa condicion mantengo el valor por defecto
   */
  const percetangesFalse = percentages.map(function (percentage) {
    return {
      type: percentage.type,
      isCheck: false,
      value: percentage.type === "input" ? element.value : percentage.value,
    };
  });
  /**
   * Como en el map estamos creando un array con la informacion cambiada vamos a
   * pasarle ese nuevo array a la funcion renderPercentagesButtons la cual va a
   * recrear todo ese div con los nuevos valores
   */
  renderPercentagesButtons(percetangesFalse);

  /**
   * Ocurre un problema como estamos volviendo a renderizar el div con los botones
   * e input, el focus (el cursor) del input se pierde, para ellos vamos a forzar
   * el focus de este elemento para que siempre este al final del text que esta
   * escribiendo el usuario
   */

  //Paso 1: Obtenemos el input que se acaba de crear
  const currentInput = document.querySelector(
    `#input-bill-${element.dataset.index}`
  );
  // A ese input le hacemos focus, pero sucede que al hacer focus es cursor va
  // a estar en la parte inicial del input
  currentInput.focus();
  // Para que el cursor se posicione en la parte final del texto usamos la
  // funcion setSelectionRange la cual va a permitirnos mover el cursor al final
  // pasandome la cantidad de caractares que tiene actualmente el input
  currentInput.setSelectionRange(
    currentInput.value.length,
    currentInput.value.length
  );
}

/**
 * renderButton
 * Esta funcion sirve para renderizar los botones que tenemos en la vista
 * ahora esta lista de botones funcion como si fueran radioButtons, es decir
 * podemos seleccionar solo 1 a la vez, por ende yo requiero saber a que boton
 * le dieron click y marcar ese como seleccionado
 */
function renderButton(percentage, index) {
  /**
   * Paso1: Para poder darle un estilo diferente al boton que esta
   * seleccionado vamos usar la propiedad isCheck, por que recuerden que esa
   * propiedad va a ser true cuando el boton sea seleccionado
   */
  const extraClass = percentage.isCheck ? "active" : "";

  /**
   * Cuando creamos el boton estamos asignando al funcion setButton(this) para
   * cada click del boton, entonces al igual que el input estamos creando el
   * data-index para poder saber la del boton al que le dieron click
   */
  return `
    <button onclick="setButtonTip(this)" class="${extraClass}" data-index="${index}">
      ${percentage.value}
    </button>`;
}

/**
 * renderInput
 * Recibe 2 parametros
 * pertange: el objeto que obtenemos de cada iteracion
 * index: es el indice de cada objeto que existe dentro del array
 *
 * además tenemos atributos
 * value: va a tomar el valor que exista dentro de percentage.value
 * ojo: recurden que el valor de percentage.value por defecto es igual a ""
 *
 * ahora en este caso queremos que cuando el usuario escriba en el input
 * el boton que estaba seleccion se desmarque
 *
 * como queremos captura lo que el usuario escribe por teclado vamos a usar
 * el evento onkeyup, en este evento vamos a llamar a la funcion `setInputTip`
 * y le vamos a pasar this
 * Recordemos que en este context this = input
 */
function renderInput(percentage, index) {
  return `<input
            type="text"
            value="${percentage.value}"
            data-index="${index}"
            id="input-bill-${index}"
            onkeyup="setInputTip(this)"
            class="outline-none p-2 bg-[#F3F8FB] rounded-md"
            placeholder="Custom"
          />`;
}

/**
 * renderPercentagesButtons
 * Recibe un array de objetos donde esos objetos son para hacer
 * el render de un boton o un input
 *
 */
function renderPercentagesButtons(percentagesArray) {
  // Paso1: Limpiamos el contenedor para evitar que se dupliquen los elementos
  containerPercentages.innerHTML = "";

  // Paso2: Iteramos el array que recibimos para poner pintar un boton o un inputs
  percentagesArray.forEach(function (percentage, index) {
    /**
     * En este la variable `html` la cual puede llamarse como ustedes quieran
     * toma su valor en base a una condicion la cual depdende `type` para
     * llamar a una funcion u otra
     */
    const html =
      percentage.type === "button"
        ? renderButton(percentage, index)
        : renderInput(percentage, index);
    /**
     * En el contenedor vamos a adicionar cada elemento por ende usamos
     * el opera +=, si no usamos este operador y solo colocamos = que pasa, que
     * se reemplazaria en vez de adicionar
     */
    containerPercentages.innerHTML += html;
  });
}

// Llamamos a la funcion para que cuando la web cargue pinte los boton por defecto
renderPercentagesButtons(percentages);
