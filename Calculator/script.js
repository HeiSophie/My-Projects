let displayBox = document.querySelector(".display");
let list = document.querySelectorAll(".show-display");

function showDisplay(event) {
  const content = event.target.innerText;
  if (displayBox.innerHTML == 0) {
    return (displayBox.innerHTML = content);
  }
  return (displayBox.innerHTML += content);
}
function calculate() {
  let x = displayBox.innerText;
  displayBox.innerText = eval(x);
}

function clearAll() {
  displayBox.innerText = 0;
}

function clearLast() {
  let text = displayBox.innerText;
  if (text.length === 1) {
    displayBox.innerText = 0;
  } else {
    displayBox.innerText = text.substring(0, text.length - 1);
  }
}

list.forEach((item) => {
  item.addEventListener("click", showDisplay);
});

document.querySelector(".calculate").addEventListener("click", calculate);
document.querySelector(".clear-All").addEventListener("click", clearAll);
document.querySelector(".clear-last").addEventListener("click", clearLast);
