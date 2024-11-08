const arr = [1, 2, 3, 4, "4343"];
console.log(arr);
// length of array
let length = arr.length;

// add to array
arr.push("Added");
console.log(arr);

// remove 
arr.pop();
console.log(arr);

// Slicing
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
console.log("Fruits: " + fruits);
const slicedFruits = fruits.slice(1, 4);
console.log(slicedFruits);
const slicedFruits2 = fruits.slice(2);
console.log(slicedFruits2);

console.log("======================================");
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
console.log(months);
months.splice(1, 2); // (index, numbers_of_elements_to_be_remove)
console.log(months);
months.splice(1, 2, "X", "Y"); // (index, num, add1, add2)
console.log(months);