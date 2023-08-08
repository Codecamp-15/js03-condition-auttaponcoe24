let user = prompt("user name? : ");
let pass = prompt("password? :");

if(user === "" || pass === ""){
    alert("username is required");
    alert("password is required");
} else if((user === "admin" && pass === "1234") || (user === "john" && pass === "qwerty")){
    alert(`Hello ${user}`);
} else {
    alert("invalid username or password");
}