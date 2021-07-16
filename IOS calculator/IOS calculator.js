const numpad = document.getElementById('numpad')
var result = []
var visual = ""
var a = ""
numpad.children[0].addEventListener('click', function(){
    result = []
    visual = ""
    document.getElementById('output').innerHTML = visual
})
numpad.children[1].addEventListener('click', function(){
    result.push("/100")
    visual += "%"
    document.getElementById('output').innerHTML = visual
})    
numpad.children[2].addEventListener('click', function(){
    result.push("/")
    visual += "÷"
    document.getElementById('output').innerHTML = visual
})
numpad.children[3].addEventListener('click', function (){
    result.pop()
    visual = visual.substring(0, visual.length -1)
    document.getElementById('output').innerHTML = visual
})
numpad.children[4].addEventListener('click', function (){
    result.push("7")
    visual += "7"
    document.getElementById('output').innerHTML = visual
})
numpad.children[5].addEventListener('click', function (){
    result.push("8")
    visual += "8"
    document.getElementById('output').innerHTML = visual
})
numpad.children[6].addEventListener('click', function (){
    result.push("9")
    visual += "9"
    document.getElementById('output').innerHTML = visual
})
numpad.children[7].addEventListener('click', function (){
    result.push("*")
    visual += "×"
    document.getElementById('output').innerHTML = visual
})
numpad.children[8].addEventListener('click', function (){
    result.push("4")
    visual += "4"
    document.getElementById('output').innerHTML = visual
})
numpad.children[9].addEventListener('click', function (){
    result.push("5")
    visual += "5"
    document.getElementById('output').innerHTML = visual
})
numpad.children[10].addEventListener('click', function (){
    result.push("6")
    visual += "6"
    document.getElementById('output').innerHTML = visual
})
numpad.children[11].addEventListener('click', function (){
    result.push("-")
    visual += "-"
    document.getElementById('output').innerHTML = visual
})
numpad.children[12].addEventListener('click', function (){
    result.push("1")
    visual += "1"
    document.getElementById('output').innerHTML = visual
})
numpad.children[13].addEventListener('click', function (){
    result.push("2")
    visual += "2"
    document.getElementById('output').innerHTML = visual
})
numpad.children[14].addEventListener('click', function (){
    result.push("3")
    visual += "3"
    document.getElementById('output').innerHTML = visual
})
numpad.children[15].addEventListener('click', function (){
    result.push("+")
    visual += "+"
    document.getElementById('output').innerHTML = visual
})
numpad.children[16].addEventListener('click', function (){
    result.push("0")
    visual += "0"
    document.getElementById('output').innerHTML = visual
})
numpad.children[17].addEventListener('click', function (){
    result.push(".")
    visual += "."
    document.getElementById('output').innerHTML = visual
})
numpad.children[18].addEventListener('click', function (){
    let length = result.length
    for (i=0; i < length; i++) {
        if (result[i] == "/100"){
            for (e=i -1; e > 0; e--){
                console.log(e)
                if (isNaN(result[e])){
                    result.splice(e +1, 0, "(")
                    result.splice(result.length +1, 0, ")")
                    console.log(result)
                    break
                }
            }
        }
    }
    try {
        a = eval(result.join(''))
        result = []
        document.getElementById('output').innerHTML = a
        visual = a.toString()
        a = a.toString().split('')
        for (i=0; i < a.length;i++) {
            result.push(a[i])
        }
    } catch (error){
        document.getElementById('output').innerHTML = 'Error'
        visual = ""
        result = []
    }
})