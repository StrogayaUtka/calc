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

window.onload=function(){
    const btnpercent = document.querySelector("#b1")
    btnpercent.addEventListener("click", () =>{
        percent()
    })
    const btnreset = document.querySelector("#b2")
    btnreset.addEventListener("click", () =>{
        focusField()
    })
    const btncleart = document.querySelector("#b3")
    btncleart.addEventListener("click", () =>{
        cleareverything()
    })
    const btnbackspace = document.querySelector("#b4")
    btnbackspace.addEventListener("click", () =>{
        backspace()
    })
    const btndenominator = document.querySelector("#b5")
    btndenominator.addEventListener("click", () =>{
        denominator()
    })
    const btnsquared = document.querySelector("#b6")
    btnsquared.addEventListener("click", () =>{
        squared()
    })
    const btnsqrt = document.querySelector("#b7")
    btnsqrt.addEventListener("click", () =>{
        squareroot()
    })
    const btndivision = document.querySelector("#b8")
    btndivision.addEventListener("click", () =>{
        calculate(8)
    })
    const btn7 = document.querySelector("#b9")
    btn7.addEventListener("click", () =>{
        append(7)
    })
    const btn8 = document.querySelector("#b10")
    btn8.addEventListener("click", () =>{
        append(8)
    })
    const btn9 = document.querySelector("#b11")
    btn9.addEventListener("click", () =>{
        append(9)
    })
    const btnmultiply = document.querySelector("#b12")
    btnmultiply.addEventListener("click", () =>{
        calculate(12)
    })
    const btn4 = document.querySelector("#b13")
    btn4.addEventListener("click", () =>{
        append(4)
    })
    const btn5 = document.querySelector("#b14")
    btn5.addEventListener("click", () =>{
        append(5)
    })
    const btn6 = document.querySelector("#b15")
    btn6.addEventListener("click", () =>{
        append(6)
    })
    const btnsubtract = document.querySelector("#b16")
    btnsubtract.addEventListener("click", () =>{
        calculate(16)
    })
    const btn1 = document.querySelector("#b17")
    btn1.addEventListener("click", () =>{
        append(1)
    })
    const btn2 = document.querySelector("#b18")
    btn2.addEventListener("click", () =>{
        append(2)
    })
    const btn3 = document.querySelector("#b19")
    btn3.addEventListener("click", () =>{
        append(3)
    })
    const btnaddition = document.querySelector("#b20")
    btnaddition.addEventListener("click", () =>{
        calculate(20)
    })
    const btnsign = document.querySelector("#b21")
    btnsign.addEventListener("click", () =>{
        changesign()
    })
    const btn0 = document.querySelector("#b22")
    btn0.addEventListener("click", () =>{
        append(0)
    })
    const btndot = document.querySelector("#b23")
    btndot.addEventListener("click", () =>{
        append(10)
    })
    const btnequals = document.querySelector("#b24")
    btnequals.addEventListener("click", () =>{
        equals()
    })
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
