const mainRow = document.getElementById("mainRow");
const Courses=["HTML5", "CSS3", "Javascript", "Bootstrap4", "Node JS", "React JS", "SASS"];

for (let i = 0; i < Courses.length; i++) {
    let Course = document.createElement("div")
    let text = document.createElement("h1")
    Course.appendChild(text);
    text.innerHTML = Courses[i]
    Course.setAttribute("class", "hidden main")
    mainRow.appendChild(Course)
    // Course.addEventListener("scroll", function(){
        //     console.log(window.scrollY)
        //     console.log((i+1)* 100 + 200)
        //     if (window.scrollY >= `${(i+1)* 100 + 200}px`){
            //         console.log("Hi")
            //     }
            // })
}
mainRow.addEventListener("click", function(){
    for (let i = 0; i < Courses.length; i++){
        let act = document.getElementsByClassName("hidden")[i]
        console.log(act)
        act.classList.toggle("notHidden")
    }
})
        
        
        // var a = setInterval(logYvalue, 100);
        // function logYvalue(){
            //     console.log(window.scrollY)
            // }