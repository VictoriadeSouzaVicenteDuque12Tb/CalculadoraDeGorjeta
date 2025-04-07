let bill = 0
let tipPercentage = 0
let numberOfPeople = 0
let buttonSelected = null

function receiveBillVolue() {
    bill = document.querySelector("#bill").valueAsNumber
}

function receiveNumberOfPeopleValue() {
    numberOfPeople = document.querySelector("#people").valueAsNumber
}

function receiveTipPercentageValue(value) {
    tipPercentage = value / 100
    
    removeClassButtonSelected()

    buttonSelected = document.querySelector('#button-${value}')
    buttonSelected.classList.add("button-selected")
}

function receiveClassButtonSelected() {
    if (buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected")
        buttonSelected = null
    }
}