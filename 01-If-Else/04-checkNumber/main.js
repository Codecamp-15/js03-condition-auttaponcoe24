let num = prompt("Enter Number: ");

// IF-ELSE-Clause
// if (num > 0) {
//     console.log("Positive number");
// } else if (num == 0){
//      console.log("Zero");
// } else if (num < 0) {
//     console.log("Negative number");
// } else {
//     console.log("Invalid number");
// }


// Guard-Clause
if (num === null || num.trim() === '' || isNaN(num)) {
    alert('Invalid Number');
} else if (num > 0) {
    console.log("Positive number");
} else if (num == 0){
     console.log("Zero");
} else if (num < 0) {
    console.log("Negative number");
}