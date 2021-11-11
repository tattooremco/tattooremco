//Colors while loop

let colors = ['yellow', 'blue', 'red', 'orange']
let x = 0;

while (x <= colors.length) {
    console.log(colors[x]);
    x++;
}

//Color for loop

let color = ["yellow", "blue", "red", "orange"];
for (let i = 0; i < color.length; i++) {
    console.log(color[i]);
}

//Colorsz forEach loop

const colorsz = ['yellow', 'blue', 'red', 'orange'];
colorsz.forEach(element => console.log(element));

//The while loop needs 7 lines
//The for loop needs 4 lines
//And the forEach loop needs only 2 lines
//
//The array is much easier to read because you just use the name
//element instead of you need to create a variable with a name

//Test loop with 5 properties

let days = ["monday", "tuesday", "wednesday", "thursday", "friday"];
for (let i = 0; i < days.length * 9; i++) {
    console.log(days[i]);
}