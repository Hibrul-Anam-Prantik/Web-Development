function sum (x, y) {
    console.log(x, y);
    return x + y;
}

console.log(sum(1, 2));

console.log("=====================");

const sum1 = (x, y) => {
    console.log(x, y);
    return x + y;
};

const res = sum1(5, 3);
console.log(res);

let iHave = 30;
iHave >= 40 ? console.log("Boom!") : console.log("Busted!");