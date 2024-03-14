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
    value: "15%",
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

function setButtonTip(element) {
  console.log(element);
}

function renderButton(text, index) {
  return `<button onclick="setButtonTip(this)" id="button-percentage-${index}">${text}</button>`;
}

function renderInput(index) {
  return `<input
            type="text"
            id="input-percentage-${index}"
            class="outline-none p-2 bg-[#F3F8FB] rounded-md"
            placeholder="Custom"
          />`;
}

// paso 1 es limpiar el contenido del container
containerPercentages.innerHTML = "";

percentages.forEach(function (percentage, index) {
  const html =
    percentage.type === "button"
      ? renderButton(percentage.value, index)
      : renderInput(index);

  containerPercentages.innerHTML += html;
});
