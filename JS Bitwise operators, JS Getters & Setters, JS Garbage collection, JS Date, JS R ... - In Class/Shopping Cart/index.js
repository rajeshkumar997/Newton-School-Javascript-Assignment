'use strict';

const itemInputArea = document.querySelector('#item-name-input');
const priceInputArea = document.querySelector('#item-price-input');
const addButton = document.querySelector('#addButton');
const tableBody = document.querySelector('#table-body');
const totalPriceCell = document.querySelector('#total-price');

let itemName, priceValue;
let totalPrice = 0, totalItem = 1;

function insertItem() {
    tableBody.innerHTML += `
        <tr>
            <td>${totalItem++}</td>
            <td data-ns-test="item-name">${itemName}</td>
            <td data-ns-test="item-price">${priceValue}</td>
        </tr>
    `;
}

const resetInputField = function () {
    itemInputArea.value = "";
    priceInputArea.value = "";
}

const getInputValue = function (event) {
    event.preventDefault();
    itemName = itemInputArea.value;
    priceValue = parseInt(priceInputArea.value);
    if (isNaN(priceValue) || itemName === ' ' || itemName.length === 0) {
        resetInputField();
        return;
    }
    totalPrice += priceValue;
    totalPriceCell.textContent = `${totalPrice}`;
    insertItem();
    resetInputField();
}

addButton.addEventListener('click', getInputValue);
