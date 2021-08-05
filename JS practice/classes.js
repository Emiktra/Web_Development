function Person (firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
    this.calcAge = function(){
        return new Date().getFullYear() - this.birthYear;
    }
}
const matthew = new Person("Matthew", 1986)
console.log(matthew)


// var my = {name: "Matt"};
// var your = {name: "Mark"};
// var him = my;
// my.name = "Henry"
// console.log(my)
// console.log(your)
// console.log(him)

class Dog{
    constructor(name){
        this.name = name;
    }
    bark(){
        console.log("bark bark")
    }
}
const karabas = new Dog("Karabas")
karabas.bark()