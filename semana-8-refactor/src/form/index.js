import { validateIfInputIsEmpty } from "../utils";

export function createTask(element, input) {
  element.onsubmit = function (event) {
    event.preventDefault();
    validateIfInputIsEmpty(input);
  };
}
