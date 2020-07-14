/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  console.log('before displaymessage')
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  const hourString = timeString.split(':')[0]
  const hourInt = parseInt(hourString)
  let greeting;

  if (hourInt < 12){
    greeting = 'Good Morning'
  } else if (hourInt < 17) {
    greeting = 'Good Afternoon'
  } else {
    greeting = 'Good Evening'
  }

  return greeting;
}
/* Write your implementation of displayMessage() */
function displayMessage(greetString) {
  console.log(greetString === 'TEST')
  const greetingHeader = document.querySelector('h1#greeting')
  greetingHeader.innerText = greetString;
}
