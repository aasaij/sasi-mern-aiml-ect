let display = document.getElementById("txtDisplay");
let isCalculated = false;

function isOperator(val) {
  return (
    val === "+" || val === "-" || val === "/" || val === "*" || val === "%"
  );
}

function numberPress(num) {
  if (isCalculated && !isOperator(num)) {
    display.value = num;
    isCalculated = false;
  } else {
    display.value += num;
    isCalculated = false;
  }
  //   display.value += num;
}
function calculate() {
  try {
    let result = eval(display.value);
    display.value = result;
  } catch (e) {
    display.value = "Error";
  }
  isCalculated = true;
}

function save(type) {
  if (type === "") {
    localStorage.setItem("dValue", display.value);
  } else if (type === "+") {
    let x = Number(localStorage.getItem("dValue") ?? 0);
    let y = Number(display.value);
    localStorage.setItem("dValue", x + y);
  } else if (type === "-") {
    let x = Number(localStorage.getItem("dValue") ?? 0);
    let y = Number(display.value);
    localStorage.setItem("dValue", x - y);
  }
}
function restore() {
  display.value = localStorage.getItem("dValue") ?? "";
  isCalculated = true;
}
function clearMemory() {
  localStorage.removeItem("dValue");
  isCalculated = false;
}

function backspace() {
  display.value = display.value.slice(0, -1);
}
