document.querySelector('#suma').addEventListener('click', add)
document.querySelector('#resta').addEventListener('click', subtract)
document.querySelector('#multiplica').addEventListener('click', multiply)
document.querySelector('#divide').addEventListener('click', divide)

function add() {
  let num1 = document.getElementById('input1').value;
  let num2 = document.getElementById('input2').value;
  let total = parseInt(num1) + parseInt(num2);
  document.getElementById('total').innerText = total;
}


function subtract() {
  let num1 = document.getElementById("input1").value;
  let num2 = document.getElementById("input2").value;
  let total = parseInt(num1) - parseInt(num2);
  document.getElementById("total").innerText = total;
}

function multiply() {
  let num1 = document.getElementById("input1").value;
  let num2 = document.getElementById("input2").value;
  let total = parseInt(num1) * parseInt(num2);
  document.getElementById("total").innerText = total;
}

function divide() {
  let num1 = document.getElementById("input1").value;
  let num2 = document.getElementById("input2").value;
  let total = parseInt(num1) / parseInt(num2);
  document.getElementById("total").innerText = total;
}
// for this calculator I had to reference 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
// the numbers were not adding up if I used "let total= num1 + num 2" it was presenting them
// as a set of strings instead of doing the sum.