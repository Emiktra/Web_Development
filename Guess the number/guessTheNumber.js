const searchedNumber = Math.round(Math.random()*100)
const check = document.getElementById('check')

let userGuess;
function checkViable(){
    userGuess = document.getElementById('userInput').value;
    if (Boolean(document.getElementById('alert_text'))) {
        var a = document.getElementById('alert_text')
        a.parentNode.removeChild(a)
    } else if (Boolean(document.getElementById('valid_text'))) {
        var a = document.getElementById('valid_text')
        a.parentNode.removeChild(a)

    }
    if (userGuess === '' || isNaN(userGuess) || userGuess > 100 || userGuess < 1) {
        var element1 = document.createElement('p')
        element1.setAttribute('id', 'alert_text')
        var message = document.createTextNode("invalid input!");
        element1.appendChild(message);
        document.getElementById('main').insertBefore(element1, document.getElementById('main').hasChildNodes[1]) 
        return;
    }
    var count = document.getElementById('count').innerHTML
    document.getElementById('count').innerHTML =  parseInt(count, 10) +1

    calculate(userGuess)
}
function calculate(userGuess){
    if (userGuess > searchedNumber) {
        element1 = document.createElement('p')
        element1.setAttribute('id', 'valid_text')
        message = document.createTextNode("guess lower");
        element1.appendChild(message);
        document.getElementById('main').insertBefore(element1, document.getElementById('main').hasChildNodes[1]) 
    } else if (userGuess < searchedNumber){
        element1 = document.createElement('p')
        element1.setAttribute('id', 'valid_text')
        message = document.createTextNode("guess higher");
        element1.appendChild(message);
        document.getElementById('main').insertBefore(element1, document.getElementById('main').hasChildNodes[1]) 
    } else{
        congrats()
    }
}
function congrats(){
    // create a div with elements inside for a congrats end screen. or just send the user to another page
}

check.addEventListener("click", checkViable);
