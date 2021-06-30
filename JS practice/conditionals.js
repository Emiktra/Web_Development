// var a = '5';
// var b = '3';

// console.log('a - b:', a - b) 
// console.log('a + b:', a + b) 
// console.log('a / b:', a / b) 

// let y = 3||4
// console.log(y)
// y = 3&&4
// console.log(y)
// y = 3&&false
// console.log(y)
// y = false&&3
// console.log(y)
// y = false&&0
// console.log(y)
// y = 0&&false
// console.log(y)

// let password  = 'ads34t'

// console.log(password.length >= 5 && password.includes('@'));


// password  = 'ads3@4t'

// console.log(password.length >= 5 && password.includes('@'));


// password  = 'ads34t'

// console.log(password.length >= 5 || password.includes('@'));


// password  = 'ads@'

// console.log(password.includes('@') && password.lenght >= 5);


// password  = 'ads34t'

// console.log(password.length >= 8 || password.includes('@'));
// console.log('  ')
// console.log('  ')
// console.log('  ')
// console.log('  ')
// console.log('  ')
// console.log('  ')
// console.log('  ')


// let score = prompt('Sinavdan kac aldin?')
// if (score >= 50){
//     console.log('Congraculations')
// } else {
//     console.log("Don't worry. You'll do better next time!")
// };

// score > 80 ? console.log('Tebrikler') : console.log('You have to work harder')

// score = prompt('Sinavdan kac aldin?')

// if (score >= 80){
//     console.log('Congraculations')
// } else if (score >=50){
//     console.log("Don't worry. You'll do better next time!")
// } else{
//     console.log('You have to work harder')
// }

// console.log('if else is easy')
// console.log(' ')
// console.log(' ')
// console.log(' ')
// console.log(' ')
let userName;

userName ? console.log(`Hello ${userName}`) : console.log('Please login')
userName = 'hello';

userName ? console.log(`Hello ${userName}`) : console.log('Please login')


//switch case 

var text;
var fruits = 'Apple';
fruits = fruits.toLocaleLowerCase();


switch (fruits){
    case 'banana':
        text = 'Banana is good'
        break;
    case 'orange':
    case 'lemon':
        text = 'I am not a fan of oranges'
        break;
    case 'apple':
        text = 'You like them apples?'
        break;
    default:
        text=' I have never heard of that fruit...';
}
console.log(text) 

//switch case days of the week:
//monday thursday and wednesday: in class
//tuesday and friday: Teamwork
//saturday: long in class
//sunday is free of lesson