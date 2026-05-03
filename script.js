let equation = ""
const Btn0 = document.getElementById("Btn0")
const calculateButton = document.getElementById('CalculateBtn')

const symbols = document.querySelectorAll('.calcBtn')
if (symbols) {
    symbols.forEach(element => {
        element.addEventListener('click', () => {
            equation = equation + `${element.innerHTML}`
            updateDisplay('update')
        })
    });
}

function updateDisplay(to) {
    const display = document.getElementById('displayer')
    if (display) {
        if (to == "calculate") {
            let safeEquation = equation.replace(/÷/g, '/');
            safeEquation = safeEquation.replace(/X/g, '*');
            safeEquation = safeEquation.replace(/%/g, '/100');
            
            let output;
            try {

                output = eval(safeEquation)
                equation = ""
                safeEquation = ""

            } catch {
                output = "Error"
                equation = ""
                safeEquation = ""
            }
            display.innerHTML = `${output}`


        } else {
            display.innerHTML = `${equation}`
        }

    }
}




if (calculateButton) {
    calculateButton.addEventListener('click', () => {
        updateDisplay('calculate')
    })
}
if (Btn0) {
    Btn0.addEventListener("click", () => {
        equation = equation + `${Btn0.innerHTML}`
        updateDisplay('update')
         console.log(`Button Number 0 was clicked, current equation: ${equation}`)

    })
}
for (let i = 1; i < 10; i++) {
    const button = document.getElementById(`Btn${i}`)
    if (button) {
        button.addEventListener("click", () => {
            equation = equation + `${button.innerHTML}`
            updateDisplay('update')
            console.log(`Button Number ${button.innerHTML} was clicked, current equation: ${equation}`)
        })
    }
}
