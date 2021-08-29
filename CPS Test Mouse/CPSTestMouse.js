const ClickBox = document.getElementById("ClickBox");
const Placeholder = document.getElementById("ClickBoxPlaceholder");
const Timer = document.getElementById("TimerData");
const CPS = document.getElementById("CPSData");
const Clicks = document.getElementById("ClicksData");


const openResultScreen =()=>{
    ClickBox.removeEventListener("click", StartTimer)
    let resultContainer = document.createElement("div")
    resultContainer.setAttribute("id", "resultContainer")
    let resultRestartButton = document.createElement("button")
    resultRestartButton.setAttribute("id", "resultRestartButton")
    resultRestartButton.innerHTML = "Restart";
    let resultScoreBoard = document.createElement("div");
    resultScoreBoard.setAttribute("id", "resultScoreBoard")

    let resultCPS = document.createElement("h2");
    resultCPS.setAttribute("class", "resultScoreBoardScores")
    resultCPS.innerHTML = "CPS: "+ CPS.innerHTML
    resultScoreBoard.appendChild(resultCPS)
    let resultClicks = document.createElement("h2");
    resultClicks.setAttribute("class", "resultScoreBoardScores")
    resultClicks.innerHTML = "Total Clicks: "+ Clicks.innerHTML
    resultScoreBoard.appendChild(resultClicks)

    resultContainer.appendChild(resultScoreBoard)
    resultContainer.appendChild(resultRestartButton)
    document.body.appendChild(resultContainer)

    resultRestartButton.addEventListener("click", ()=>{
        ClickBox.addEventListener("click", StartTimer)
        resultContainer.remove()
    })
}


var watchGoing = false;
var timer = 0;
var cps = 0;
var clicks = 0;
const StartTimer =()=>{
    if(!watchGoing){
        watchGoing = true
        timer = 0
        Timer.innerHTML = timer.toFixed(3)
        cps = 0
        CPS.innerHTML = cps.toFixed(2)
        clicks = 0
        Clicks.innerHTML =clicks
        let stopwatch = setInterval(()=>{
            if (timer > 4.995){
                watchGoing = false
                clearInterval(stopwatch)
                openResultScreen()
            }
            timer += 0.004
            console.log(timer)
            Timer.innerHTML = timer.toFixed(3)
            cps = clicks/timer
            CPS.innerHTML = cps.toFixed(2)
        }, 1)
    } else{
        clicks++
        Clicks.innerHTML =clicks
    }

}

ClickBox.addEventListener("click", StartTimer)