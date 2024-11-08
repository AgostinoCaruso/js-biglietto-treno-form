"use strict";
console.clear();

//variable STRING
const dNone = "my-d-none";


//variables of HTML
const myContainer = document.querySelector(".my-container");
//LOGIN
const formLogin = document.getElementById("login");

const clientName = document.getElementById("clientName");
const ageSelected = document.getElementById("ageSelector");
const kmTrip = document.getElementById("km");
const resetForm = document.getElementById("reset");
//TICKET
const ticketPanel = document.getElementById("ticket");
const ticketH2Panel = document.getElementById("ticketH2");

const passengerNameTicket = document.getElementById("passengerNameTicket");
const discountTicket = document.getElementById("discountTicket");
const carriageTicket = document.getElementById("carriageTicket");
const priceTicket = document.getElementById("priceTicket");

//Other stuff
formLogin.style.backgroundColor ="green";
ticketPanel.style.backgroundColor = "red";
formLogin.addEventListener("submit",function (event){
    event.preventDefault();
    
    Operation();
    AddValueToHtml();
    //display ticket
    ticketPanel.classList.remove(dNone);
    ticketH2Panel.classList.remove(dNone);
});
//reset form and remove ticket panel
resetForm,addEventListener("reset", () => {
    ticketPanel.classList.add(dNone);
    ticketH2Panel.classList.add(dNone);

    RemoveInnerHtml();
})


function AddValueToHtml(){
    passengerNameTicket.innerHTML = clientName.value;
    if(passengerNameTicket.innerHTML == "")
        passengerNameTicket.innerHTML ="None";

    if(ageSelected.value === "junior"){
        discountTicket.innerHTML = "20%";
    }else if(ageSelected.value === "old"){
        discountTicket.innerHTML = "40%";
    }else{
        discountTicket.innerHTML = "Full price";
    }
    
    priceTicket.innerHTML = parseInt(finalPrice).toFixed(2)+ "€";
    carriageTicket.innerHTML = Math.floor(Math.random()*100+1);
}
function RemoveInnerHtml(){
    passengerNameTicket.innerHTML = "None";
    priceTicket.innerHTML = "...";
}








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
//finalPrice = (priceTicketKm * parseInt(kmTrip.value)).toFixed(2); //final price before discount

//if statement
if (ageSelected.value == "junior") {
    CalculateDiscountPrice(discountJunior);
}
else if (ageSelected.value =="old") {
    CalculateDiscountPrice(discountSenior);
} else {
    finalPrice = (priceTicketKm * parseInt(kmTrip.value)).toFixed(2); //final price before discount
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
