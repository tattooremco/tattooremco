const numberCheck = function (number) {
    const getal = number
    if (getal > 100) {
        return true;
    }
    return false;
};


const getal = numberCheck(105);
console.log(getal);


const brenda = function (number, aantal) {
    const age = number
    const persons = aantal
    if (age < 18) {
        return "this is a club for adults";
    }

    else if (persons > 250) {
        return "it's too busy now, come back later";
    }

    return "come in";
};

const entree = brenda(19, 260);
console.log(entree);


const calcAvarage = function (numbers) {
    const avarage = numbers.reduce((total, n) => total + n) / numbers.length;
    console.log(avarage);
};

const grades = [5, 7, 9, 6, 8];
calcAvarage(grades);

