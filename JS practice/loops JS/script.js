//while loop
let i = 0, sum = 0;
while (i < 6) {
    sum += i;
    i++
}

console.log(`The sum is: ${sum}`);

//do while loop
i = 6, sum = 0;

do{
    sum += i
} while(i < 5);
console.log(sum);

//for loop
let counter = 0;
for (let i = 0; i < 50; i++) {
    if (i % 10 === 0) {
        counter += i;
    }
}
console.log(counter);

let brand = "Clarusway"
for (let i = 0, j = brand.length; i < brand.length; i++, j--) {
    console.log(brand[i], brand[j - 1]);
}

//break & continue loops
i = 0;
while (i < 10) {
    i++;
    if (i % 3 === 0) {
        continue;
    }
    console.log(i)
}

i = 0;
while (i < 10) {
    i++;
    if (i % 3 === 0) {
        break;
    }
    console.log(i)
}
let b = ' ';
let a = 'Clarusway';
for (i = 0;i < a.length; i++) {
    b += a.substr(a.length)
    console.log(b)
    a = a.substr(0, a.length -1)
    console.log(a)
}
console.log(b)

function Taxes(taxRate, purchases) {
    var total;
    console.log(purchases);
    for (let i = 0; i <= purchases.length; i++) {
        total = purchases[i];
    }
    console.log(total);
    return total * (taxRate/100 + 1);
}
console.log(Taxes(18, [15, 34, 66, 45]));