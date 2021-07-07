let a = 'Jonathan';
console.log(a.length);
let b = 'Dorana';
console.log(a.concat(' ' + b));
console.log(b.charAt(4));

//inculdes
if (a.includes('John')) {
    console.log("You can call me John");
} else {
    console.log('You can`t call me John');
}

//index of
console.log(b.indexOf('d'), '(no match)');
console.log(b.indexOf('r'), '(match on 3rd row 0-1-2)');
let c = 'araba';
console.log(c.indexOf('a', 3), '(the first a after 4th row is on 5th row)');
console.log(a.lastIndexOf('n'), '(last one`s index)');

//replace
let welcome = 'This place is just for me!';
console.log(welcome.replace('place', 'company'));
console.log(welcome.replace(/ME/i, 'us'));

//replace
console.log(welcome.search('just'));

//slice
console.log(welcome.slice(3));
console.log(welcome.slice(3, 15));
console.log(welcome.slice(3, -3));

//split
console.log(welcome.split(' '));
// console.log(welcome.split('')) returns all the Chars seperated
console.log(welcome.split());

//substr (substr is not used to create a new string)
console.log(welcome.substr(5, 17));
console.log(welcome.substr(5));

//substring
console.log('');
console.log(welcome.substring(5, 17));
console.log(welcome.substr(5, 12));

//toLower-Upper Case
console.log('');
let WELCOME = 'THIS PLACE LOOKS DOPE BRO';
console.log(WELCOME.toLowerCase());
console.log(welcome.toUpperCase());

//trim
console.log('');
let untrimmed = '   Hello there   ';
console.log(untrimmed);
console.log(untrimmed.trim());