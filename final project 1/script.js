const display = document.querySelector('.display')
const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')

let currentInput = ''
let previousInput = ''
let operator = ''


const updateDisplay = (v) => {
    display.textContent = v
}

function getOperatorSymbol(id){
    switch(id){
        case 'divide': return '/'
        case ' multiply': return '*'
        case 'subtract': return '-'
        case 'sum': return '+'
        default: return ''
    }
}


function calculate(a, b, op){
    switch(op){
        case '+': return a+b;
        case '-': return a-b;
        case '*': return a*b;
        case '/': return a/b;
        default: return b;
    }
}


numberButtons.forEach(buttons => {
    buttons.addEventListener('click', () => {
        currentInput = currentInput + buttons.id
        updateDisplay(currentInput)
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const id = button.id

        switch (id) {
            case 'clear':
                currentInput = ''
                previousInput = ''
                operator = ''
                updateDisplay('')
                break

            case 'backspace':
                currentInput = currentInput.slice(0, -1)
                updateDisplay(currentDisplay)


            case 'equals':
                if (operator && previousInput && currentInput) {
                    const result = calculate(
                        parseFloat(previousInput),
                        parseFloat(currentInput),
                        operator
                    )

                    console.log(result)
                    console.log(typeof(result))
                    currentInput = String(result)
                    updateDisplay(String(result))
                    previousInput = ''
                    operator = null
                }
                break;

            case "divide":
            case "multiply":
            case "subtract":
            case "sum":
                if (currentInput) {
                    if (previousInput && operator) {
                        const result = calculate(
                            parseFloat(previousInput),
                            parseFloat(currentInput),
                            operator)
                    } else {
                        previousInput = currentInput
                    }
                    currentInput = ''
                    operator = getOperatorSymbol(id)
                }
                break;
        }
    })
})






