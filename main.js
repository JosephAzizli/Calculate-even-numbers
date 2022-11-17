let number1 = document.getElementById("n1");
let number2 = document.getElementById("n2");
let calcBtn = document.getElementById("btn");
let result = document.getElementById("result");

calcBtn.onclick = function () {
  if ((Number(number1.value) % 2 == 0) & (Number(number2.value) % 2 == 0)) {
    let sum =
      Math.pow(Number(number1.value), 2) + Math.pow(Number(number2.value), 2);
    result.innerHTML = sum;
  } else {
    alert("Please enter even numbers :)");
  }
};
