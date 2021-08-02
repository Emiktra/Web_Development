const Bar = document.getElementById("Bar");
const SearchIcon = document.getElementById("searchBtn");
const InputArea = document.getElementById("InputArea");
const cleanBtn = document.getElementById("cleanBtn");

SearchIcon.addEventListener("click", function(defaultChecker){
    if (InputArea.value == ""){
        Bar.classList.toggle("open")
        InputArea.classList.toggle("inputClosed")
        cleanBtn.classList.toggle("btnClosed")
    } else if(!InputArea.value == ""){
        defaultChecker.preventDefault();
        window.location.href = "https://www.google.com/search?q=" + InputArea.value
        InputArea.value = ""
    }
})
cleanBtn.addEventListener("click", function(){
    InputArea.value = ""
})