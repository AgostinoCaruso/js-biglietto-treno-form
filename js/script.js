"use strict";
console.clear();

//variables of HTML
const myContainer = document.querySelector(".my-container");
//LOGIN
const formLogin = document.getElementById("login");

const clientName = document.getElementById("clientName");
// const clientSurname = document.getElementById("clientSurname")
const ageSelected = document.getElementById("ageSelector");
const kmTrip = document.getElementById("km");
const resetForm = document.getElementById("reset");
//TICKET
const ticketPanel = document.getElementById("ticket");





//Other stuff
formLogin.style.backgroundColor ="green";
ticketPanel.style.backgroundColor = "red";
formLogin.addEventListener("submit",function (event){
    event.preventDefault();
    
    Operation();
    ticketPanel.classList.remove("my-d-none");
});
//reset form and remove ticket panel
resetForm,addEventListener("reset", () => ticketPanel.classList.add("my-d-none"));


//----------------------------------------------------------------------------------------
// variables
const priceTicketKm = 0.21; //for each km €
const discountJunior = 20; //is a percentage discount for below 18 y
const discountSenior = 40; //is a percentage discount for over 65 y
let finalPrice; //is the final price, using fixed to cut decimal num
let discountedPrice;
//user input
// let kmForTrip, userAge; // km for the travel, age of the user input
let isUserInputWrong = 0;
console.clear();

function Operation(){
//check how much does it cost
finalPrice = (priceTicketKm * parseInt(kmTrip.value)).toFixed(2); //final price before discount

//if statement
if (ageSelected.value == "junior") {
    CalculateDiscountPrice(discountJunior);
}
else if (ageSelected.value =="old") {
    CalculateDiscountPrice(discountSenior);
} else {
    console.log(`The final cost is: ${finalPrice}€, unfortunatelly at your age of ${ageSelected.value} you cannot access to a discount price!\n
Your data for this travel is: age:${ageSelected.value}, km: ${kmTrip.value}, final price is: ${finalPrice}€!!`);
}
}


// here i used const temp.. beacause i needed a variable to work inside the scope
function CalculateDiscountPrice(discountedRange) {
    discountedPrice = (finalPrice * discountedRange) / 100; //calculate discount amount based on age user
    finalPrice -= discountedPrice; // cut decimal number
    const tempDiscountedPrice = discountedPrice.toFixed(2);
    const tempPriceAfterDiscount = finalPrice.toFixed(2);
    const tempPriceBeforeDiscount = (parseFloat(tempPriceAfterDiscount) + parseFloat(tempDiscountedPrice)).toFixed(2);
    console.log(`The final cost is: ${tempPriceAfterDiscount}€, since your age is ${ageSelected.value} based on your age you ve a discount of ${discountedRange}%.\nYour discounted amount is: ${tempDiscountedPrice}€.\n
Your data for this travel is: age:${ageSelected.value}, km: ${kmTrip.value}, original price was: ${tempPriceBeforeDiscount}€, final price is: ${tempPriceAfterDiscount}€!!`);
}
