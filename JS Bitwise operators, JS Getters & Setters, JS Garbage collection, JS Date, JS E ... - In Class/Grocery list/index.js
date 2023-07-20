function calcTotal() {
  const priceElements = document.querySelectorAll('[data-ns-test="price"]');
  let total = 0;
  for (let i = 0; i < priceElements.length; i++) {
    total += parseInt(priceElements[i].textContent);
  }
  const grandTotalElement = document.querySelector('[data-ns-test="grandTotal"]');
  if (grandTotalElement) {
    grandTotalElement.textContent = total;
  } else {
    const newRow = document.createElement('tr');
    const labelCell = document.createElement('td');
    const totalCell = document.createElement('td');
    labelCell.textContent = 'Grand Total';
    totalCell.textContent = total;
    totalCell.setAttribute('data-ns-test', 'grandTotal');
    newRow.appendChild(labelCell);
    newRow.appendChild(totalCell);
    document.querySelector('tbody').appendChild(newRow);
  }
}
