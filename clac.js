function calculate() {
  let rendom = Math.random();
  console.log(rendom);

  let a = document.getElementById("Enter First number").value;
  let c = document.getElementById("Enter operation").value;
  let b = document.getElementById("Enter second number").value;

  let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
  };

  let outputText;
  let expression;

  if (rendom > 0.1) {
    expression = `${a} ${c} ${b}`;
    outputText = `hear is your correct answer cutiii = ${eval(expression)}`;
  } else {
    c = obj[c];
    expression = `${a} ${c} ${b}`;
    outputText = `chall nikal galt he = ${eval(expression)}`;
  }

  document.getElementById("ans").innerText = outputText;
}