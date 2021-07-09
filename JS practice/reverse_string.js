function reverseString(a) {
    a = a.split('')
    a = a.reverse()
    return a.join('')
}
function reverseString2(a) {
    return a.split('').reverse.join('')
}
var string = prompt('Enter word/sentence to be reversed')
console.log(reverseString(string))