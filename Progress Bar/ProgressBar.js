const Previous = document.getElementById("previous")
const Next = document.getElementById("next")
var progress = 1
Previous.disabled = true
function updateBar(progress){
    if (progress > 3) {Next.setAttribute("class", "buttonDisabled"); Next.disabled = true} else {Next.setAttribute("class", "buttonActivated"); Next.disabled = false}
    if (progress < 2) {Previous.setAttribute("class", "buttonDisabled"); Previous.disabled = true} else {Previous.setAttribute("class", "buttonActivated"); Previous.disabled = false}
    for (let i = 2; i < 5; i++){
        document.getElementById(`progress${i}`).setAttribute("class", "notSelected")
        document.getElementById(`line${i}`).setAttribute("class", "notSelectedLine")
    }
    for (let i = 2; i < progress +1; i++) {
        document.getElementById(`progress${i}`).setAttribute("class", "selected")
        document.getElementById(`line${i}`).setAttribute("class", "selectedLine")
    }
}
Previous.addEventListener('click', function(){
    if (!(progress < 2)) {progress -=1}
    updateBar(progress)})
Next.addEventListener('click', function(){
    if (!(progress > 3)) {progress +=1}
    updateBar(progress)})