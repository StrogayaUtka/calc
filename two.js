let cache = []
let lastaction = ""

function calculate(action){
    switch(lastaction){
        case "1":
            percent()
            lastaction = ""
            break
        case "8":
            division()
            lastaction = action.toString()
            break
        case "12":
            multiplication()
            lastaction = action.toString()
            break
        case "16":
            subtraction()
            lastaction = action.toString()
            break
        case "20":
            addition()
            lastaction = action.toString()
            break
        default:
            const inputNode = document.querySelector("#userinput")
            cache.push(inputNode.value)
            inputNode.value =""
            lastaction = action.toString()
            inputNode.focus()
    }
}

function percent(){
    const inputNode = document.querySelector("#userinput")
    //inputNode.value = +(cache.at (-1)) / 100 * +inputNode.value
    //cache.push(inputNode.value)
    inputNode.value= "Я хз что это"
}

function focusField(){
    const inputNode = document.querySelector("#userinput")
    inputNode.focus()
}

function cleareverything(){
    const inputNode = document.querySelector("#userinput")
    inputNode.value =""
    const outputNode = document.querySelector("#output")
    outputNode.value = ""
    lastaction = ""
    cache = []
    inputNode.focus()
}

function backspace(){
    const inputNode = document.querySelector("#userinput")
    inputNode.value = inputNode.value.replace(/\d$/, '')
    inputNode.focus()
}

function denominator(){
    const inputNode = document.querySelector("#userinput")
    const outputNode = document.querySelector("#output")
    outputNode.value = 1 / +inputNode.value
    cache.push(outputNode.value)
    lastaction = ""
    inputNode.value = outputNode.value
    inputNode.focus()
}

function squared(){
    const inputNode = document.querySelector("#userinput")
    const outputNode = document.querySelector("#output")
    outputNode.value = +inputNode.value * +inputNode.value
    cache.push(outputNode.value)
    lastaction = ""
    inputNode.value = outputNode.value
    inputNode.focus()
}

function squareroot(){
    const inputNode = document.querySelector("#userinput")
    const outputNode = document.querySelector("#output")
    outputNode.value = Math.sqrt(+inputNode.value)
    cache.push(outputNode.value)
    lastaction = ""
    inputNode.value = outputNode.value
    inputNode.focus()
}

function division(){
    const inputNode = document.querySelector("#userinput")
    const outputNode = document.querySelector("#output")
    outputNode.value = +(cache.at (-1)) / +inputNode.value
    cache.push(outputNode.value)
    inputNode.value = ""
    inputNode.focus()
}

function multiplication(){
    const inputNode = document.querySelector("#userinput")
    const outputNode = document.querySelector("#output")
    outputNode.value = +(cache.at (-1)) * +inputNode.value
    cache.push(outputNode.value)
    inputNode.value = ""
    inputNode.focus()
}

function subtraction(){
    const inputNode = document.querySelector("#userinput")
    const outputNode = document.querySelector("#output")
    outputNode.value = +(cache.at (-1)) - +inputNode.value
    cache.push(outputNode.value)
    inputNode.value = ""
    inputNode.focus()
}

function addition(){
    const inputNode = document.querySelector("#userinput")
    const outputNode = document.querySelector("#output")
    outputNode.value = +(cache.at (-1)) + +inputNode.value
    cache.push(outputNode.value)
    inputNode.value = ""
    inputNode.focus()
}

function changesign(){
    const inputNode = document.querySelector("#userinput")
    inputNode.value = -inputNode.value
    inputNode.focus()
}

function equals(){
    calculate(lastaction)
    lastaction = ""
    const inputNode = document.querySelector("#userinput")
    inputNode.focus()
}

function append(arg){
    const inputNode = document.querySelector("#userinput")
    if (arg == "10") {
        if (inputNode.value.indexOf(".") != -1){
            inputNode.focus()
            return
        } else{
            inputNode.value += "."
        }

    } else{
        inputNode.value += arg
    }
    inputNode.focus()
}

function err(){
    const outputNode = document.querySelector("#output")
    outputNode.value = "err"
    const inputNode = document.querySelector("#userinput")
    inputNode.value = ""
    inputNode.focus()
}

// После каждого нажатия кнопки действия сохранять поле ввода в массив, и доствать оттуда через -1 индекс

//Добавить на все кнопки EvenListener'ы, при нажатии проверять пустой ли кеш, и, если не пустой, выполнять операцию нового числа с последним из кеша,
//после чего вводить всё в поле InputNode