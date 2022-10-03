const output = document.getElementById("output");
const form = document.getElementById("calc_form");
const operand_btns = document.querySelectorAll("button[data-type=operand]");
const operator_btns = document.querySelectorAll("button[data-type=operator]");
const pp = document.getElementById("demo")
const btn = document.getElementById("btn2")

document.getElementById("btn2").addEventListener("click", calculate);

function calculate() {
  const loanAmount = document.getElementById("loanAmount").value;
  const loanRate = document.getElementById("loanRate").value;
  const loanTerm = document.getElementById("loanTerm").value;
  
  
  const totalPayments = loanTerm*12;
  const rate = loanRate/100;
  const monthlyInterest = rate/12;

  const rateSum = Math.pow((1+monthlyInterest), totalPayments);

  const monthlyPayment = loanAmount * ((monthlyInterest*rateSum)/(rateSum-1));
  
  
  
  
  document.getElementById("monthly").innerHTML = "Monthly payment " + monthlyPayment;





}