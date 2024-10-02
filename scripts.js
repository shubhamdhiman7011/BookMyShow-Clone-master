// Prices for each add-on
const addonPrices = {
    popcorn: 5,
    soda: 3,
    parking: 10,
    glasses: 2
};

// Function to calculate total price
function updateTotal() {
    let total = 0;

    // Get the quantities for each add-on
    let popcornQty = parseInt(document.getElementById('popcorn').value) || 0;
    let sodaQty = parseInt(document.getElementById('soda').value) || 0;
    let parkingQty = parseInt(document.getElementById('parking').value) || 0;
    let glassesQty = parseInt(document.getElementById('glasses').value) || 0;

    // Calculate the total price
    total += popcornQty * addonPrices.popcorn;
    total += sodaQty * addonPrices.soda;
    total += parkingQty * addonPrices.parking;
    total += glassesQty * addonPrices.glasses;

    // Update the total price in the DOM
    document.getElementById('totalPrice').innerText = total.toFixed(2);
}

// Function to handle checkout
function checkout() {
    alert('Proceeding to checkout with total: $' + document.getElementById('totalPrice').innerText);
}
