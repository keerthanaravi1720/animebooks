// const readline = require('readline-sync');
// let num= readline.question("Enter a num?");
// let num2= readline.question("Enter a num2?");


// sum=num+num2;
// sub=num-num2;
// div=num/num2;
// mult=num*num2;

// console.log("sum is", sum);
// console.log("multiply", mult)
// console.log('div is', div);
// console.log("sub is", sub);

// console.log(num);
// console.log(num2);


// var a=10;
// var b=20;
// var c=1;









const readline = require('readline-sync');
let num = parseFloat(readline.question("Enter a num? "));
let num2 = parseFloat(readline.question("Enter a num2? "));
let string = readline.question("Enter a string: ");

// Using split, reverse, and join methods
let reversed = string.split('').reverse().join('');
const num3 = parseInt(readline.question("Enter a number for the multiplication table: "));

console.log(`Multiplication Table for ${num3}:`);

for (let i = 1; i <= 10; i++) {
    console.log(`${num3} * ${i} = ${num3 * i}`);
}



console.log("sum is", num + num2);
console.log("multiply", num * num2);
console.log('div is', num / num2);
console.log("sub is", num - num2);
console.log("Original string:", string);
console.log("Reversed string:", reversed);




const original = [1, 2, 3, 4, 5];

// Creating a clone using spread operator
const clone = [...original, 6, 7, 8, 9, 10];

console.log("Original Array:", original);
console.log("Cloned Array:", clone);



if(num % 2===0){
    console.log('even');

}
else{
console.log('odd');
}

if(num2 % 2===0){
    console.log('even');

}
else{
console.log('odd');
}


