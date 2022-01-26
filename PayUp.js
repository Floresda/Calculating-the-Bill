let bill = prompt("Total of your food?");

let taxes = bill*.07;
let subtotal = bill+taxes;
let tip = subtotal*.05;
let finalbill = "Your final bill cost is "+subtotal+tip;

    document.body.innerHTML= finalbill;