const containerBill = document.querySelector("#contailer-bill");
const containerPercentages = document.querySelector("#container-percentage");
const inputBill = document.querySelector("#input-bill");

// array con los valores de los botons
const percentages = [
  {
    type: "button",
    value: "5%",
  },
  {
    type: "button",
    value: "10%",
  },
  {
    type: "button",
    value: "20%",
  },
  {
    type: "button",
    value: "25%",
  },
  {
    type: "button",
    value: "50%",
  },
  {
    type: "input",
    value: "0",
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

function renderButton(text) {
  return `<button>${text}</button>`;
}

function renderInput() {
  return `<input
            type="text"
            class="outline-none p-2 bg-[#F3F8FB] rounded-md"
            placeholder="Custom"
          />`;
}

// paso 1 es limpiar el contenido del container
containerPercentages.innerHTML = "";

percentages.forEach(function (percentage) {
  const html =
    percentage.type === "button"
      ? renderButton(percentage.value)
      : renderInput();

  containerPercentages.innerHTML += html;
});
