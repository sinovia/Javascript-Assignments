/**
 * For each of the following Array methods,

 * 1. use them in an example
 * 2. use console.log() to make the code run in the console!

 **/

// The sort function sorts the items in an array
var colors = ["Blue", "Purple", "Orange", "Green"];
colors.sort();
console.log (colors)

// The concat function combines information from seperate arrays
var colors = ["Blue", "Purple", "Orange", "Green"];
var animals= ["Cat", "Dog", "Parrot", "Mouse"];
var colorsandAnimals = colors.concat(animals)
console.log (colorsandAnimals)

// The .indexOf function states which position a string or value falls in an arrays
var pizzatoppings = ["Pepperoni", "Sausage", "Cheese", "Mushrooms", "Bacon"];
var pizzaPosition = pizzatoppings.indexOf("Mushrooms");
console.log(pizzaPosition);

// The split function takes a full string and break it into smaller strings
var stark = "Winter Is coming"
var starkGreeting = stark.split(" ");
console.log(starkGreeting);


// The join function makes seperate strings into one array
var hogwartHouses = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];
var fightVoldemort = hogwartHouses.join();
console.log(fightVoldemort);


// The pop function removed the last element of an array  .pop()
var nurseryRhymeCreatures = ["Mother Goose", "Blind Mice", "BlackSheep", "Weasel"];
var MonkeyChase= nurseryRhymeCreatures.pop();
console.log(MonkeyChase);

//The push function adds a new item to an array
var iceCreamflavors = ["Vanilla", "Strawberry", "Rocky Road"];
iceCreamflavors.push("Mint Chocolate Chip");
console.log(iceCreamflavors);


// This slice function returns specific elements in an array
var pizzaChoices = ["Pepperoni", "Sausage", "Bacon", "Mushrooms", "Cheese"];
var meatSlices = pizzaChoices.slice( 0, 3);
console.log(meatSlices);



// .splice()
var comicSounds = ["Boop", "Beep", "Zip", "Bang"];
comicSounds.splice (2, 0, "Bam", "Zap");
console.log(comicSounds);

// The unshift function adds elements to the beginning of an array
var nSYNC = ["Chris", "Lance", "Joey",];
nSYNC.unshift("Justin","JC");
console.log(nSYNC);


// The filter function displays elements that pass a test set forth by a function.
//I am still a bit confused by this one so I have used the w3schools demo as an example of its use and will clarify in class.

var ages = [32, 33, 16, 40];

function checkAdult(age) {
    return age >= 18;
}

function myFunction() {
    document.getElementById("demo").innerHTML = ages.filter(checkAdult);
}


// .map() The map creates a new array based on the results of a function.
//I am still a bit confused by this one so I have used the w3schools demo as an example of its use and will clarify in class.
var numbers = [4, 9, 16, 25];

function myFunction() {
    x = document.getElementById("demo")
    x.innerHTML = numbers.map(Math.sqrt);
}
