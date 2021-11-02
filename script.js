const makePizza = function () {

    console.log("Maak het deeg met water en meel");
    console.log("Rol het deeg uit tot een mooie ronde bodem");
    console.log("Verdeel één lepel nr 2 tomatensaus op de bodem");
    console.log("Doe de topping zolas vlees of vis over de pizzabodem");
    console.log("Strooi de kaas eroverheen");
    console.log("Plaats de pizza 5 minuten in de hete oven");
    console.log("");

}

const makeSushi = function () {

    console.log("Leg de zeewierbladeren vlak op het snijblad")
    console.log("Neem 1 grote lepel nr3 rijst en verdeel het over het gehele blad")
    console.log("Voeg nu 1 lepel nr2 vis eraan toe en verdeel het in 1 lijn van links naar rechts")
    console.log("Voeg nu 1 lepel nr1 specerijen eraan toe en strooi het uit over de vis")
    console.log("Rol het geheel stevig op tot een rol van ongeveer 5 centimeter")
    console.log("Snijd het in plakken van 3 centimeter breed")
    console.log("");

}

makePizza();
makeSushi();

for (var i = 1; i < 3; i++) makePizza(i);
for (var i = 1; i < 4; i++) makeSushi(i);


