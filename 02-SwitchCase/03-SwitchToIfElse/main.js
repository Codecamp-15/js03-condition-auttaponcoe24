let brower = prompt("brower?");

if(brower === "Edge") {
    alert("You've got the Edge!");
} else if(brower === "Chrome" || brower === "Firefox" || brower === "Safari" || brower === "Opera") {
    alert("Okay we support these browsers too");
} else {
    alert("We hope that this page looks ok!");
}