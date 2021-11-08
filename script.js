// Hey Kiddo
const ageCheck = function (age) {
    if (age >= 18) {
        return true;
    }
    return false;
};
const greeting = function (waarde) {
    if (waarde == true) {
        console.log("Hello there");
    } else {
        console.log("Hey Kiddo");
    }
};
(greeting)(ageCheck(20));

// VAT exercise 1

const basePrice = function (number) {
    return number;
};

const calcVat = function (base) {
    return base * 0.21;
};

const inclVat = function (number) {
    const base = basePrice(number);
    const vat = calcVat(base);
    return base + vat;
};

console.log(inclVat(15));

// VAT exercise 2

const basePrice2 = function (number) {
    return number / 1.21;
};

const vat21 = function (number) {
    return number - (number / 1.21);
};

const totalPrice = function (number) {
    const base2 = basePrice2(number);
    const totalVat = vat21(number);
    console.log(base2);
    console.log(totalVat);
};

console.log(totalPrice(24.20));
