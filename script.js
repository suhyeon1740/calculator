function clickTest(e) {
    alert(e.innerText)
}
var obj = {
    beforeNumber: '',
    afterNumber: '',
    calculate: '',
    result: '',
    input: document.querySelector('input'),
    numberClick: (e) => {
        if (obj.calculate) {
            obj.afterNumber += e.target.innerText
        }
        else {
            obj.beforeNumber += e.target.innerText
        }
        obj.input.value = obj.beforeNumber + obj.calculate + obj.afterNumber
    },
    resultClick: () => {
        switch (obj.calculate) {
            case '+':
                obj.result = Number(obj.beforeNumber) + Number(obj.afterNumber)
                break;
        }
        obj.afterNumber = ''
        obj.beforeNumber = ''
        obj.calculate = ''
        document.querySelector('input').value = obj.result
    },
    acClick: () => {
        obj.result = ""
        obj.afterNumber = ""
        obj.beforeNumber = ""
        obj.calculate = ""
        document.querySelector('input').value = obj.result
    }
}
// 숫자를 클릭하면 변수에 저장            
let numbers = document.getElementsByClassName('number')
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', obj.numberClick)
}

// + 클릭하면 연산 변수에 저장
// let calculate = document.getElementsByClassName('calculate');
// for (let i = 0; i < calculate.length; i++) {
//     calculate[i].addEventListener('click', (e) => {
//         obj.calculate = e.target.innerText
//         obj.input.value = obj.beforeNumber + obj.calculate                    
//     })
// }

//ac 클릭하면 초기화
let ac = document.getElementById("ac")
ac.addEventListener('click', obj.acClick)

// = 클릭하면 결과 표출
document.getElementById('result').addEventListener('click', obj.resultClick)