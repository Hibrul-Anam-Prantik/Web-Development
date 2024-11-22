const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction);
console.log(newArr);
// selfStudy: map vs filter
function myFunction(num) {
    return num * 10;
}