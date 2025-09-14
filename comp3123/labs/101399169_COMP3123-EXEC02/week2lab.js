// Exercise 1: Print numbers
const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
  console.log(`Number: ${num}`);
}

// Exercise 2: Capitalize string
const capitalize = (str) => str[0].toUpperCase() + str.slice(1);
console.log(capitalize("hello")); // Hello

// Exercise 3: Capitalize colors
const colors = ["red", "green", "blue", "yellow"];
const capitalizedColors = colors.map(color => capitalize(color));
console.log(capitalizedColors); // [ 'Red', 'Green', 'Blue', 'Yellow' ]

// Exercise 4: Filter numbers
const moreNumbers = [5, 12, 25, 30, 18, 40];
const filtered = moreNumbers.filter(num => num >= 20);
console.log(filtered); // [25, 30, 40]

// Exercise 5: Sum & product
const nums = [1, 2, 3, 4];
console.log("Sum:", nums.reduce((acc, val) => acc + val, 0));
console.log("Product:", nums.reduce((acc, val) => acc * val, 1));

// Exercise 6: Classes
class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
}

class Sedan extends Car {
  constructor(model, year, balance) {
    super(model, year);
    this.balance = balance;
  }
}

const mySedan = new Sedan("Toyota Camry", 2022, 15000);
console.log(mySedan);

