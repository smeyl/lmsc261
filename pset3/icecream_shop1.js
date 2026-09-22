const priceOfIceCream = 2.5;
let paymentReceived = prompt("Please pay for your ice cream: ");
let isPaymentEnough = paymentReceived >= priceOfIceCream;
if (isPaymentEnough) {
    let change = paymentReceived - priceOfIceCream;
    print("Thanks! Enjoy the Ice Cream!");
    print("Your change is $" + change + ".");
} else {
    print("Not enough cash!");
}