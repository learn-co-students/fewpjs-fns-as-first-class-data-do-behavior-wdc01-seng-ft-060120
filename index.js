/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString) {
    let timeNow = parseInt(timeString, 10) //in our case the radix is 10 because the string begins with any other value
    if (timeNow < 12) return "Good Morning"
    if (timeNow > 17) return "Good Evening"
    return "Good Afternoon"
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
    document.getElementById('greeting').innerText = string
}