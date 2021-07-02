function sayHi(name){
    console.log(`Hello ${name}`);
    name = 'Ed'
    console.log(`Hello ${name}`);
}
let myName = 'Mark';
sayHi(myName)
console.log('Outside function', myName);

console.log('')
//object with function
let student  = {}
student.name = 'Hasan'

function sayHi(student){
    console.log(`Hello ${student.name} entry point`);
    student.name = 'John';
    student = {name:'Leon'};
    console.log(`Hello ${student.name} inside function`);
}
sayHi(student)
console.log(`Hello ${student.name} from outside`);