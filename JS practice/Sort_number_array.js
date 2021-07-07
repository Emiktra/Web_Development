seri=[414,5,95,62,615,33,321,3,781,140,58,1,154];
var a = seri.sort(function(a, b){return b - a})
console.log(a)

// A function that defines an alternative sort order. The function should return a negative, zero, or positive value, depending on the arguments, like:
// function(a, b){return a-b}
// When the sort() method compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

// Example:

// When comparing 40 and 100, the sort() method calls the compare function(40,100).

// The function calculates 40-100, and returns -60 (a negative value).

// The sort function will sort 40 as a value lower than 100.