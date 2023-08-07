let user = prompt("What your's name: ");
let pass;

switch(user){
    case "codecamp":
        pass = prompt("please password");
            if(pass === "123456") alert(`Welcome ${user}`);
            else alert("Wrong password");
        break;
    
    default:
        alert("Welcome guest")
}