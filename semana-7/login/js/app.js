const form = document.querySelector("form");

/**
 * Como hacemos para poder capturar el evento submit del form?
 *
 * Sencillo, solo debemos usar el evento onsubmit, ahora recordemos
 * que este evento es solo de los formularios
 *
 * Ejemplo
 *
 * form.onsubmit = function (event) {
 *  ...
 * }
 */

form.onsubmit = function (event) {
  /**
   * Los formulario tienen la tendencia recargar la página
   * para evitar que el evento onSubmit recargue la pagina
   * vamos usar la funcion preventDefault() esta funcion es parte
   * del evento que recibimos en nuestra funcion
   */
  event.preventDefault();
  /**
   * Debemos saber que toda la informacion del formulario esta en event
   * console.log(event)
   */
  const formInfo = Array.from(event.target)
    .filter(function (input) {
      return input.value;
    })
    .map(function (input) {
      return input.value;
    });

  const [email, password] = formInfo;
};
