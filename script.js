let equation = "";


const display = document.getElementById("displayer");
const calculateButton = document.getElementById("CalculateBtn");
const symbols = document.querySelectorAll(".calcBtn");

function Eval(expr) {
  try {
    const sanitized = expr
      .replace(/÷/g, "/")
      .replace(/X/g, "*")
      .replace(/[^0-9+\-*/().]/g, ""); 

    const result = Function(`"use strict"; return (${sanitized})`)();
    return isFinite(result) ? result : "Error";
  } catch {
    return "Error";
  }
}

function updateDisplay() {
  if (display) display.textContent = equation;
}


symbols.forEach((btn) => {
  btn.addEventListener("click", () => {
    equation += btn.textContent;
    updateDisplay();
  });
});

calculateButton?.addEventListener("click", () => {
  equation = String(Eval(equation));
  updateDisplay();
  equation = ""; 
});
