const mainPage = document.querySelector("nav")
const closeBtn = document.querySelector("body > span")
const navigation = document.querySelector("footer > ul")
mainPage.addEventListener("click", function(){
    document.querySelector("body > div").classList.toggle("rotate")
    document.querySelector("body > span").classList.toggle("notClosed")
    for (i = 0; i < navigation.children.length; i++){
        navigation.children[i].id = `a${i +1}`
    }
    document.querySelector("body > footer").classList.toggle("active")
})
closeBtn.addEventListener("click", function(){
    document.querySelector("body > div").classList.toggle("rotate")
    document.querySelector("body > span").classList.toggle("notClosed")
    for (i = 0; i < navigation.children.length; i++){
        navigation.children[i].id = `default${i +1}`
    }
    document.querySelector("body > footer").classList.toggle("active")
})