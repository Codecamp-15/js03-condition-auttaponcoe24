let point = prompt("Enter point of Grade: ");

let message = (point >= 80 && point <= 100) 
    ? "A"
    : (point < 80) && (point >= 70)
    ? "B"
    : (point < 70) && (point >= 60)
    ? "C"
    : (point < 60) && (point >= 50)
    ? "D"
    : (point < 50) && (point >= 0)
    ? "F"
    : "Not Grade"

alert(message);