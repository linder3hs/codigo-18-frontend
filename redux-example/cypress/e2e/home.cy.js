/* eslint-disable no-undef */

// El string que recibe describe hace referencia a un titulo principal
describe("Probando el home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  // El string que recibe it hace referencia a la prueba que haremos dentro de el
  it("Vamos a probar que el texto Linder Anderson Hassinger exista", () => {
    // Lo que va dentro del it son el paso a paso
    cy.get("h1").contains("Linder Anderson Hassinger");
  });

  it("Vamos a probar si se puede escribir en el input", () => {
    cy.get(".tasks").should("have.length", 0);
    cy.get("input[type=text]").type("Tarea 2");
    cy.get("button").contains("Crear Tarea").click();
    cy.get(".tasks").should("have.length", 1);
    cy.get("input[type=text]").type("Tarea 3");
    cy.get("button").contains("Crear Tarea").click();
  });
});
