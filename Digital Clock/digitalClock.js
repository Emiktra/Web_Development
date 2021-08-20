const clockD = document.querySelector("#clockD h1")
const switchButton = document.getElementById("switchButton")
let switchModule = true 

//module 1
clockD.innerHTML = new Date().toLocaleTimeString("de-DE", { hour: '2-digit', minute: '2-digit', second: "2-digit" })
const updateClock = ()=>{
    if (switchModule){clockD.innerHTML = new Date().toLocaleTimeString("de-DE", { hour: '2-digit', minute: '2-digit', second: "2-digit" })}
}; let activateClock = setInterval(updateClock, 500)

//module 2
function stopClock(){
    clockD.innerHTML = new Date().toLocaleTimeString("de-DE", { hour: '2-digit', minute: '2-digit', second: "2-digit" })
    switchModule = !switchModule
    switchButton.classList.toggle("clockPaused")}

document.body.addEventListener("keypress", (btnPress)=>{
    if (btnPress.keyCode == 32){stopClock()}
}); switchButton.addEventListener("click", ()=>{stopClock()})  