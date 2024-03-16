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

  /**
   * Debemos buscar dentro del array de users la info basada en email y password
   */
  const result = users.find(function (user) {
    return user.email === email && user.password === password;
  });

  if (!result) {
    // TODO: Mostrar alerta de error en este caso
    return;
  }

  // Vamos a guardar al usuario en localStorage
  /**
   *  localStorage.setItem(key, value)
   * Esto recuerden es para crear un elemento en localStorage
   *
   * ojo: JSON.stringify(result) sirve para convertir un object a un string
   */
  localStorage.setItem("user", JSON.stringify(result));
  // TODO: Enviar a otra pagina
  location.href = "http://127.0.0.1:5500/semana-7/login/home.html";
};
