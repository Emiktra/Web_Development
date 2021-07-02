function Taxes(taxRate, purchases) {
    let total = 0;
    console.log(purchases);
    for (let i = 0; i < purchases.length; i++) {
        total += purchases[i];
    }
    console.log(total);
    return total * (taxRate/100 + 1);
}
console.log(Taxes(18, [15, 34, 66, 45]));
/*The log statements are for debugging*/