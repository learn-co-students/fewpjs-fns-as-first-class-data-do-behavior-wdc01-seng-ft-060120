/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time)
{
  const hour = parseInt(time.split(':')[0]);  
  if (hour < 12)
  {
    return "Good Morning";
  }else if (hour > (12+5))
  {
    return "Good Evening";
  }else
  {
    return "Good Afternoon";
  }  
}

function displayMessage(message)
{
  let node = document.getElementById('greeting');
  node.innerText = message;
}