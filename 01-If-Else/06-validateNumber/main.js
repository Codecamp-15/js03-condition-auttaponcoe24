let num1 = +prompt("Enter number1: ");
let num2 = +prompt("Enter number2: ");
let sum = num1 + num2;

if ((typeof(num1) === "number" && !isNaN(num1)) && (typeof(num2) === "number" && !isNaN(num2))){
    alert(`sum = ${sum}`);
} else {
    alert('Invalid number');
}
