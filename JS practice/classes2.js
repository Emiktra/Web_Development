//parent class
class Person{
    constructor(firstName, lastName, bY){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = bY
        this.Age = function(){
            return new Date().getFullYear() - this.birthYear
        }
        this.employment = "";
    }
    selamla(){
        console.log(`Merhaba ${this.firstName} ${this.lastName}!`)
    }
}

//child calss
class Child extends Person{
    constructor(firstName, lastName, bY){
        super(firstName, lastName, bY);
    this.employment = "Student"    
    }
    dersCalis(){
        console.log("Studying JavaScript")
    }
}

//teacher class
class Teacher extends Person{
    constructor(firstName, lastName, bY){
        super(firstName, lastName, bY);
    this.employment = "Teacher"
    }
    dersÖgret(){
        console.log(`${this.firstName} is teaching Arithmetic operators`)
    }
}
let lütfullah = new Child("Lütfullah", "King", 1995)
let Hasan = new Teacher("Hasan", "Teker", 1946);

console.log(lütfullah)
console.log(lütfullah.Age())
Hasan.selamla()
Hasan.dersÖgret()
console.log(Hasan.Age())