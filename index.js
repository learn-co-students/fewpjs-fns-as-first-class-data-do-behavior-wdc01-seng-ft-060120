/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(str){
let strToarray = str.split(':');
let arrayToInteger = strToarray[0]
if (arrayToInteger < 12) {
  return "Good Morning";
} else if (arrayToInteger > 17) {
  return "Good Evening";
} else {
  return "Good Afternoon";
}


};
/* Write your implementation of displayMessage() */

function displayMessage(TEST){
document.getElementById("greeting").innerText = "TEST";

};
