function test() {
  alert("Thank you for being very silent");
}

function calculate() {
  let principal = document.getElementById("txtPrincipal").value;
  let rate = document.getElementById("txtRate").value;
  let time = document.getElementById("txtYears").value;
  let result = document.getElementById("txtInterest");
  let type1 = document.getElementById("rbSimple");
  let type2 = document.getElementById("rbCompound");
  let interest = 0;
  if (type1.checked) interest = (principal * rate * time) / 100;
  else if (type2.checked)
    interest = principal * (1 + rate / 100) ** time - principal;
  result.value = interest.toFixed(2);
}
