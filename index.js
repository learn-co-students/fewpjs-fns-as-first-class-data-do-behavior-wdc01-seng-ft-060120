/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(string){
let num = parseInt(string, 10);
if (num < 12) {
  return "Good Morning"
}

if (num > 12 && num < 17) {
  return "Good Afternoon"
}

if(num > 17) {
  return "Good Evening"
}
} 





function displayMessage(string){

  let element = document.getElementById("greeting").innerText = string;

}

