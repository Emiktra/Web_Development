const bar = document.getElementById("loadbar")
const bc = document.body
const percent = document.getElementById("percent")
let i = 1
let stopBlur = setInterval(barFunc, 25)
function barFunc(){
    if (i > 100){clearInterval(stopBlur)}
    else{bar.style.width = i + "%"
        bc.style.filter = `opacity(${100 - i}%)`
        bc.style.backdropFilter = `blur(${40 -i/2.5}px)`
        percent.innerHTML = `${i}%`
        i++
    }
}
