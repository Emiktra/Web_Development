document.getElementById('congrats_attempts').innerHTML = sessionStorage.getItem('attempts')
document.getElementById('resultNumber').innerHTML = sessionStorage.getItem('searched')
if (sessionStorage.getItem('attempts') < 2) {
    document.getElementById('try_tries').innerHTML = 'try'
}