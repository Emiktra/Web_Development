// const cars = ['Audi', 'Opel','Fiat']
// console.log(typeof cars);
// console.log(cars);

// const numbers = new Array(2,10)
// console.log(numbers);

// const numbers2 = new Array(10)
// console.log(numbers2);

// const cars = ['Audi', 'Opel','Fiat']
// console.log('lenght of car :',cars.length);

// const cars = ['Audi', 'Opel','Fiat'];
// const cars2 = ['BMW','Ferrari'];

// const cars3 = cars.concat(cars2, 'Mercedes',2021);
// console.log(cars);
// console.log(cars2);
// console.log(cars3);

// console.log(typeof(cars+cars2));
// console.log(cars+cars2);

//Sort()
/* const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort());
// points.sort(function(a, b){return a - b});

console.log(points.sort(function(a, b){return a - b})); */

/* Sonuç negatif ise a, b'den önce sıralanır.

Sonuç pozitifse, b, a'dan önce sıralanır.

Sonuç 0 ise, iki değerin sıralama düzeninde herhangi bir değişiklik yapılmaz. */

/*
//Pop & push
const cars = ['Audi', 'Opel','Fiat'];

cars.push('Renault')

console.log(cars);

cars.pop() // () parametre almaz her zaman sonuncuyu siler

console.log(cars);
 */

//Shift Unshift


const cars = ['Audi', 'Opel','Fiat'];

// const deleted = cars.shift()

// console.log(deleted)

// console.log(cars);

const added = cars.unshift('VW')
console.log(cars);
console.log('Geri dönen',added);
