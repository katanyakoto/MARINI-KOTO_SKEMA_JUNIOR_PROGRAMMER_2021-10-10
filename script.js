const numbers = document.querySelectorAll('.number')
console.log(numbers)

numbers.forEach((number) => {
    console.log(number)

   //mengaktifkan data input dan menampilkan hasil input angka
    number.addEventListener("click", () => {
        console.log("number is pressed")
    })
    
    // Mendefinisikan function updateScreen untuk mengupdate nilai
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen =  (number) => {
    calculatorScreen.value = number
}

// mendefinisikan tiga variable untuk menyimpan 2 angka dan and 1 operator
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = ''
}

const equalSign =  document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

//mendefinisikan empat fungsi kalkulasi dalam kalkulator dan menambahkan parseFloat pada kalkulasi penambahan
const calculate = () => {
    let result = ''
    switch (calculationOperator) {
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

// mendefenisikan fungsi button AC untuk menghapus nilai
const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    console.log('AC button is pressed')
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

// mendefenisikan fungsi button persen
const percentageBtn = document.querySelector('.percentage')

percentageBtn.addEventListener('click', () => {
    console.log('Percentage button is pressed')
    percentage()
    updateScreen(currentNumber)
})

const percentage = () => {
    currentNumber = currentNumber / 100
}

// mendefenisikan fungsi button desimal
const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    console.log(event.target.value)
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}
