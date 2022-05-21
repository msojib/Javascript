//take the number
//find the lowest number between

const num1 = parseFloat(prompt("Enter first number: ");
const num2 = parseFloat(prompt("Enter second number: ");
const num3 = parseFloat(prompt("Enter third number: ");

let largest;

// check the condition
if(num1 <= num2 && num1 <= num3){
    smallest = num1;
}
else if (num2 <= num1 && num2 <= num3) {
    smallest = num2;
}
else {
    smallest = num3;
}

// display the result
console.log("The smallest number is " + smallest);