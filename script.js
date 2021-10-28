let age = 21;
const firstName = "Bram";
const totalAmount = 85;

if (age >= 18 && age <= 25) {

    console.log("Je krijgt 50% korting!")

}

if (firstName === "Bram" || firstName === "Sarah") {

    console.log("Gefeliciteerd je krijgt een gratis biertje !")

} else {

    console.log("Sorry maar je naam is niet Bram of Sarah")

}

if (totalAmount >= 100) {

    console.log("Yeah je krijgt een gratis fles champagne!!")

} else if (totalAmount >= 50 && totalAmount < 100) {

    console.log("Je krijgt er gratis een portie nachos bij!")

} else if (totalAmount >= 25 && totalAmount < 50) {

    console.log("Lekker een gratis portie (vega)bitterballen erbij")

} else {

    console.log("Sorry niets gratis :(")

}
