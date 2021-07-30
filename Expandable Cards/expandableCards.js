for (let i = 1; i < 6; i++){
    document.getElementById(`pic${i}`).addEventListener("click", function(){
        for (let i = 1; i < 6; i++){
            document.getElementById(`pic${i}`).setAttribute("class", "notWide");
            // minimize every element
        }
        document.getElementById(`pic${i}`).setAttribute("class", "wide")
        // grow the clicked element. this process executes even if the element is wide
    })
}