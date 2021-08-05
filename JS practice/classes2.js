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

}
let lütfullah = new Child("Lütfullah", "King", 1995)
console.log(lütfullah)
console.log(lütfullah.Age())