let plusBtns = document.querySelectorAll(".fa-plus-circle");   
let minusBtns = document.querySelectorAll(".fa-minus-circle");   
let deleteBtns = document.querySelectorAll(".fa-trash-alt");
let heartBtns = document.querySelectorAll(".fa-heart");
let quantities = document.querySelectorAll(".quantity");
let cards = document.querySelectorAll(".card-body");
let unitPrices = document.querySelectorAll(".unit-price")
let total = document.querySelector(".total")

plusBtns.forEach((plusBtn, index) => {
  plusBtn.addEventListener('click', () => {

    let currentQty = parseInt(quantities[index].textContent,);
    currentQty++;
    quantities[index].textContent = currentQty;
    updateTotalPrice();
  });
});

minusBtns.forEach((minusBtn, index) => {
  minusBtn.addEventListener('click', () => {
    
    let currentQty = parseInt(quantities[index].textContent,);
    if (currentQty > 0) {
       currentQty--;
       quantities[index].textContent = currentQty;
      }
      updateTotalPrice();
  });
});

deleteBtns.forEach((deleteBtn) => {
  deleteBtn.addEventListener('click', () => {
    let cardToRemove = deleteBtn.closest('.card-body');
    cardToRemove.remove();
    updateTotalPrice(); 
  });
});


heartBtns.forEach(heartBtn => {
  heartBtn.addEventListener('click', () => {
    
    heartBtn.classList.toggle('liked');
  });
});

function updateTotalPrice() {
  let totalSum = 0;
  
  unitPrices.forEach((unitPrice, index) => {
    // Get the quantity value
    let qty = parseInt(quantities[index].textContent, 10);
    
    // Extract the price number (remove the "$")
    let price = parseFloat(unitPrice.textContent.replace('$', ''));
    
    // Calculate subtotal for this item
    let itemTotal = qty * price;
    
    // Add to the running total
    totalSum += itemTotal;
  });
  
  // Update the total display with the sum
  total.textContent = totalSum + ' $';
}

updateTotalPrice();

