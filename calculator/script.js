class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.readyToReset = false
        this.hasError = false
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
        this.hasError = false
        this.sqrtOperand = undefined
        this.readyToReset = false
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
          this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
      }

    compute() {
        let computation
        let precision
        const prev = parseFloat(this.previousOperand)
        const precisionPrev = (prev.toString().includes('.')) ? prev.toString().split('.')[1].length : 0
        const current = parseFloat(this.currentOperand)
        const precisionCurrent = (current.toString().includes('.')) ? current.toString().split('.')[1].length : 0
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                precision = Math.max(precisionPrev, precisionCurrent);
                computation = prev + current;
                break
            case '-':
                precision = Math.max(precisionPrev, precisionCurrent);
                computation = prev - current;
                break
            case '*':
                precision = precisionPrev + precisionCurrent;
                computation = prev * current;
                break
            case '÷':
                computation = prev / current;
                break
            case '^':
                computation = prev ** current;
                this.readyToReset = true;
                this.currentOperand = computation
                this.operation = undefined
                this.previousOperand = ''
                return
            default:
                return;
        }
        this.readyToReset = true;
        this.currentOperand = +computation.toFixed(precision)
        this.operation = undefined
        this.previousOperand = ''
    }

    sqrtCompute() {
        let computation
        const current = parseFloat(this.currentOperand)
        if (current < 0) {
            this.currentOperand = 'ERROR'
            this.hasError = true
            this.readyToReset = true
            return
        }
        computation = Math.sqrt(current);
        this.readyToReset = true;
        this.currentOperand = computation;
    }

    plusMinusCompute() {
        let computation
        const current = parseFloat(this.currentOperand)
        computation = current * -1;
        this.readyToReset = true;
        this.currentOperand = computation
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
        if (this.hasError === true) {
            this.currentOperandTextElement.innerText = this.currentOperand
            return
        }
        this.currentOperandTextElement.innerText =
            this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
            this.previousOperandTextElement.innerText =
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        }
        else {
            this.previousOperandTextElement.innerText = ''
        }
    }
}



const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const sqrtButton = document.querySelector('[data-sqrt]');
const plusMinusButton = document.querySelector('[data-plus-minus');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {

        if (calculator.previousOperand === "" &&
            calculator.currentOperand !== "" &&
            calculator.readyToReset) {
            calculator.currentOperand = ""
            calculator.readyToReset = false;
        }

        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})

sqrtButton.addEventListener('click', button => {
    calculator.sqrtCompute()
    calculator.updateDisplay()
})

plusMinusButton.addEventListener('click', button => {
    calculator.plusMinusCompute()
    calculator.updateDisplay()
})
