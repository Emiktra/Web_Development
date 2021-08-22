const imgContainer = document.getElementById("main")
const darkModeSwitch = document.getElementsByClassName("DarkModeSwitch")[0]
const Title = document.getElementsByTagName("h1")[0]
const PersonTitle = document.getElementsByTagName("h4")
const descriptionTitle = document.getElementsByTagName("h2")[0]
const Description = document.getElementsByTagName("p")[0]
const nameList = ["Bill Mahoney", "Saba Cabrera", "Shae Le", "Skylah Lu", "Griff Richards", "Stan John"]
for (i = 0; i < nameList.length; i++){
    let PersonContainer = document.createElement("div")
    PersonContainer.setAttribute("class", "PersonContainer")
    let PersonImg = document.createElement("img")
    PersonImg.setAttribute("src", `./Images/photo${i+1}.png`)
    PersonImg.setAttribute("class", `PersonImg`)
    let PersonName = document.createElement("h4")
    PersonName.innerHTML = nameList[i]
    if (i == 1||i == 4){PersonContainer.style.marginTop="200px"}
    PersonContainer.appendChild(PersonImg)
    PersonContainer.appendChild(PersonName)
    imgContainer.appendChild(PersonContainer)
}

darkModeSwitch.addEventListener("click", ()=>{
    document.getElementsByClassName("switchBall")[0].classList.toggle("Dark")
    document.body.classList.toggle("DarkBg")
    darkModeSwitch.classList.toggle("ActiveBg")
    Title.classList.toggle("WhiteText")
    descriptionTitle.classList.toggle("WhiteText")
    Description.classList.toggle("WhiteText")
    for (i = 0; i < nameList.length; i++){
        PersonTitle[i].classList.toggle("WhiteText")
    }
})