let resultClickFlag = false
let calculateClickFlag = false
const input = document.querySelector('input')

// 버튼 클릭            
let numbers = document.getElementsByClassName('btn')
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        // = 클릭하면 초기화 후  연산
        if (resultClickFlag) {
            input.value = ""
            resultClickFlag = false
        }        
        if (!isNaN(e.target.innerText)) calculateClickFlag = false
        else {
            // 연산자 중복클릭 X
            if (calculateClickFlag) return;
            calculateClickFlag = true
        }
        input.value += e.target.innerText
    })
}

//ac 클릭하면 초기화
let ac = document.getElementById("ac")
ac.addEventListener('click', () => {
    input.value = ""
})

// = 클릭하면 결과 표출
document.getElementById('result').addEventListener('click', () => {    
    if (!input.value || calculateClickFlag) return
    input.value = eval(input.value)
    resultClickFlag = true
})