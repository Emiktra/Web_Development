const Bar = document.getElementById("Bar");
const SearchIcon = document.getElementById("searchBtn");
const InputArea = document.getElementById("InputArea");
const cleanBtn = document.getElementById("cleanBtn");

//Setting Default
Bar.classList.toggle("closed")
cleanBtn.classList.toggle("btnClosed")
InputArea.classList.toggle("inputClosed")
InputArea.classList.toggle("inputClosed2")

SearchIcon.addEventListener("click", searc)
InputArea.addEventListener("keypress", function(e){
    if (e.key === "Enter"){
        searc()
    }
})
function searc() {
    if (InputArea.value == ""){
        Bar.classList.toggle("closed")
        if (Bar.className.includes("closed")){
            InputArea.classList.toggle("inputClosed")
            cleanBtn.classList.toggle("btnClosed")
            setTimeout(function(){
                InputArea.classList.toggle("inputClosed2")
            }, 180)
        } else {
            InputArea.classList.toggle("inputClosed2")
            setTimeout(function(){
                InputArea.classList.toggle("inputClosed")
                cleanBtn.classList.toggle("btnClosed")
            }, 0)
        }
    } else if(!InputArea.value == ""){
        window.location.href = "https://www.google.com/search?q=" + InputArea.value
        InputArea.value = ""
    }
}
cleanBtn.addEventListener("click", function(){
    InputArea.value = ""
})