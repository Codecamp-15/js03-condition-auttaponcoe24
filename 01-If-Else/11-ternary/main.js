let login = prompt("Enter username");

let message = login == "Empolyee" 
    ? "Hello"
    : login == "Director"
    ? "Greeting" 
    : login == "" 
    ? "No login"
    : ""

alert(message);