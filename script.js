var obj = {        
    resultClickFlag: false,
    input: document.querySelector('input'),
    addText: (e) => {
        if (obj.resultClickFlag) {
            obj.input.value = ""
            obj.resultClickFlag = false
        }
        obj.input.value += e.target.innerText
    },    
    resultClick: () => {
        console.log(eval(obj.input.value))
        obj.input.value = eval(obj.input.value)
        obj.resultClickFlag = true
    },
    acClick: () => {
        obj.input.value = ""        
    }
}
// 숫자 클릭            
let numbers = document.getElementsByClassName('number')
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', obj.addText)
}

//+ 클릭하면 연산 변수에 저장
let calculate = document.getElementsByClassName('calculate');
for (let i = 0; i < calculate.length; i++) {    
    calculate[i].addEventListener('click',obj.addText)
}

//ac 클릭하면 초기화
let ac = document.getElementById("ac")
ac.addEventListener('click', obj.acClick)

// = 클릭하면 결과 표출
document.getElementById('result').addEventListener('click', obj.resultClick)