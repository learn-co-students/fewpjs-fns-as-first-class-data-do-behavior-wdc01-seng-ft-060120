/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  const convertedtime =  parseInt(time);
    if (convertedtime < 12) return "Good Morning"
    if (convertedtime > 17) return "Good Evening"
    else return "Good Afternoon"
}

function displayMessage(greeting) {
  document.getElementById('greeting').innerText = greeting;
}
