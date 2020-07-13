/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


/* Write your implementation of greet() */
function greet(string) {
  let time_Str = string.split(":");
  //console.log(time_Str);
  if(parseInt(time_Str[0]) < 12){
    return "Good Morning";
  } else if(parseInt(time_Str[0]) >= 12 && parseInt(time_Str[0]) < 17){
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  //let greeting = document.querySelector('body h1');
  //greeting.innerHTML = `${string}`;
  document.querySelector("#greeting").innerText = string;
}