// 1. Create an object for animal, car

let animal = {
  type: "Dog",
  color: "Black",
  legs: 4
};
let car = {
  brand: "Tesla",
  model: "Model S",
  year: 2024
};

console.log(" Animal Object:", animal);
console.log(" Car Object:", car);

// 2. Find duplicates in a string (optional, using array)

let str = "programming";
let chars = str.split("");  
let duplicates = chars.filter((item, index) => chars.indexOf(item) !== index);
console.log(" Duplicates:", [new Set(duplicates)]);  

// 3. Reverse a string (use array method)

let str2 = "JavaScript";
let reversed = str2.split("").reverse().join("");
console.log("Reversed String:", reversed); 

// 4. Find the highest and lowest value in array

let numbers = [45, 2, 89, 23, 67, 5];
let highest = Math.max(...numbers); 
let lowest = Math.min(...numbers);
console.log("Highest:", highest, "Lowest:", lowest);

// 5. Sorting of an array (optional)

let sortedAsc = [...numbers].sort((a, b) => a - b);
let sortedDesc = [...numbers].sort((a, b) => b - a);
console.log("Sorted Asc:", sortedAsc);
console.log("Sorted Desc:", sortedDesc);

// 6. Display first 3 elements in an array in UI

let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log(" First 3 fruits:", fruits.slice(0, 3));

// 7. Remove 4th (index) element and add 2 elements there

let arr = ["a", "b", "c", "d", "e", "f"];
arr.splice(4, 1, "x", "y");  
console.log("Modified Array:", arr); 
