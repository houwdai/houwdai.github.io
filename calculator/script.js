const calculatorScreen = document.querySelector(".calculator-screen")
const updateScreen = (number)=>{
    calculatorScreen.value = number
}
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number)=>{ 
    if ( currentNumber ==='0' ) { 
        currentNumber = number 
    } else { currentNumber += number 
    }
}
const equalSign = document.querySelector('.equal-sign') 

const calculate=()=>{
    let result = ''
    switch(calculationOperator) {
    case "+":
        result = parseFloat(prevNumber) + parseFloat(currentNumber)
        break
    case "-":
        result = prevNumber - currentNumber
        break
    case "*":
        result = prevNumber * currentNumber
        break
    case "/":
        result = prevNumber / currentNumber
        break
    default:
    return
 }
 currentNumber = result
 calculationOperator = ''
}

equalSign.addEventListener('click', () => {
 calculate()
 updateScreen(currentNumber)
 clearAll()
})
const inputOperator = (operator) => {
    if(calculationOperator === '') {
     prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
   }
const operators = document.querySelectorAll(".operator")
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
     inputOperator(event.target.value)
    })
   }
)
   
const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
 clearAll()
 updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
   }

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
 inputDecimal(event.target.value)
 updateScreen(currentNumber)
})

inputDecimal = (dot) => {
 if(currentNumber.includes('.')) {
  return
 }
 currentNumber += dot
}
const numbers = document.querySelectorAll(".number")
numbers.forEach((number)=>{
    number.addEventListener("click", (even) =>{
        // console.log(even.target.value)
        inputNumber(even.target.value)
        updateScreen(currentNumber)
    })
})
// console.log(numbers)

