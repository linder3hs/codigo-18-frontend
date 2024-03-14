const containerBill = document.querySelector("#contailer-bill");
const inputBill = document.querySelector("#input-bill");

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
