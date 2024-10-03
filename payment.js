document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Capture payment details
    const cardNumber = document.getElementById('cardNumber').value;
    const cardHolder = document.getElementById('cardHolder').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    if (validateCardDetails(cardNumber, cardHolder, expiryDate, cvv)) {
        alert("Payment Successful! Your tickets have been booked.");
        // In real world, here you would integrate payment API call to Razorpay, Stripe, etc.
    } else {
        alert("Invalid payment details. Please check and try again.");
    }
});

function validateCardDetails(cardNumber, cardHolder, expiryDate, cvv) {
    // Example validation: just checking if fields are not empty
    if (cardNumber.length < 16 || !cardHolder || expiryDate.length !== 5 || cvv.length !== 3) {
        return false;
    }
    return true;
}
