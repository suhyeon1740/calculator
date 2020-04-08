// let resultClickFlag = false
// let calculateClickFlag = true
// const input = document.querySelector('input')

// // 버튼 클릭            
// let numbers = document.getElementsByClassName('btn')
// for (let i = 0; i < numbers.length; i++) {
//     numbers[i].addEventListener('click', (e) => {
//         // = 클릭하면 초기화 후  연산
//         if (resultClickFlag) {
//             input.value = ""
//             resultClickFlag = false
//         }        
//         if (!isNaN(e.target.innerText)) calculateClickFlag = false
//         else {            
//             // 연산자 중복클릭 X
//             if (calculateClickFlag) return;
//             calculateClickFlag = true
//         }
//         input.value += e.target.innerText
//     })
// }

class Calculator {
    constructor(displayElement) {
        this.displayElement = displayElement
        this.displayContent = ''
    }

    appendNumber(number) {
        this.displayContent += number
    }

    appendOperator(operator) {
        const lastText = this.displayContent[this.displayContent.length - 1]
        if (isNaN(lastText)) return
        this.displayContent += operator
    }

    updateDisplay() {
        this.displayElement.value = this.displayContent
    }

    clear() {
        this.displayContent = ''
    }

    compute() {

    }
}

const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')
const acButton = document.querySelector('.ac')
const equalsButton = document.querySelector('.equals')
const displayElement = document.querySelector('input')

const calculator = new Calculator(displayElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendOperator(button.innerText)
        calculator.updateDisplay()
    })
})

acButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
})
// //ac 클릭하면 초기화
// let ac = document.getElementById("ac")
// ac.addEventListener('click', () => {
//     input.value = ""
// })

// // = 클릭하면 결과 표출
// document.getElementById('result').addEventListener('click', () => {    
//     if (!input.value || calculateClickFlag) return
//     input.value = eval(input.value)
//     resultClickFlag = true
// })