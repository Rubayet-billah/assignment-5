// ---- get input values in number by id ----
function getInputValuesById(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);
    return inputValue;
}

// ---- set input values by id ----
function setInputValuesById(inputId, value){
    const inputField = document.getElementById(inputId);
    inputField.value = value;
}

// ---- get element values in number of an element by id ----
function getTextElementById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

// ---- set element values by id
function setTextElementById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}