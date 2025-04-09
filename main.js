let bill = 0;
let tipPercentage = 0;
let numberOfPeople = 0;
let buttonSelected = null;

function reciveBillValue() {
  bill = document.querySelector("#bill").valueAsNumber;
  calculateResults();
}

function receiveOfpeopleValue() {
  numberOfPeople = document.querySelector("#people").valueAsNumber;
  calculateResults();
}

function receiveTipPercentageValue(value) {
  tipPercentage = value / 100;

  removeClassButtonSelected();

  document.querySelector("#custom-tip").value = "";

  buttonSelected = document.querySelector(#button-${value});
  buttonSelected.classList.add("button-selected");

  calculateResults();
}

function receiveCustomTipPercentageValue() {
  tipPercentage = document.querySelector("#custom-tip").valueAsNumber / 100;

  removeClassButtonSelected();
  calculateResults();
}

function removeClassButtonSelected() {
  if (buttonSelected !== null) {
    buttonSelected.classList.remove("button-selected");
    buttonSelected = null;
  }
}

function calculateResults() {
  if (bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0) {
    let tipAmountPerPerson = calculateTipAmountPerPerson();
    calculateTotalPerPerson(tipAmountPerPerson);
  }
}

function calculateTipAmountPerPerson() {
  let tipAmountStrong = document.querySelector(".amount strong");
  let tipAmountPerPerson = (bill * tipPercentage) / numberOfPeople;
  tipAmountStrong.textContent = $${tipAmountPerPerson.toFixed(2)};
  return tipAmountPerPerson;
}

function calculateTotalPerPerson(tipAmountPerPerson) {
  let totalStrong = document.querySelector(".total strong");
  let totalAmountPerPerson = (bill / numberOfPeople) + tipAmountPerPerson;
  totalStrong.textContent = $${totalAmountPerPerson.toFixed(2)};
}

function reset() {
  bill = 0;
  tipPercentage = 0;
  numberOfPeople = 0;

  document.querySelector("#bill").value = "";
  document.querySelector("#custom-tip").value = "";
  document.querySelector("#people").value = "";

  removeClassButtonSelected();

  document.querySelector(".total strong").textContent = "$0.00";
  document.querySelector(".amount strong").textContent = "$0.00";
}