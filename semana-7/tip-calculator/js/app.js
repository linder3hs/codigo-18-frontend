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
    value: "0",
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

function setButtonTip(element) {
  const buttonIndex = element.dataset.index; // 5% index = 0
  percentages[buttonIndex].isCheck = true;

  for (let percentage in percentages) {
    if (percentage !== buttonIndex) {
      percentages[percentage].isCheck = false;
    }
  }

  renderPercentagesButtons(percentages);
}

function renderButton(percentage, index) {
  const extraClass = percentage.isCheck ? "active" : "";

  return `
    <button onclick="setButtonTip(this)" class="${extraClass}" data-index="${index}">
      ${percentage.value}
    </button>`;
}

function renderInput(index) {
  return `<input
            type="text"
            id="input-percentage-${index}"
            class="outline-none p-2 bg-[#F3F8FB] rounded-md"
            placeholder="Custom"
          />`;
}

function renderPercentagesButtons(percentagesArray) {
  containerPercentages.innerHTML = "";

  percentagesArray.forEach(function (percentage, index) {
    const html =
      percentage.type === "button"
        ? renderButton(percentage, index)
        : renderInput(index);

    containerPercentages.innerHTML += html;
  });
}

renderPercentagesButtons(percentages);
