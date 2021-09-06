function mergeArrays(ArrayA, ArrayB){
    return ArrayA.concat(ArrayB).sort()
}

/* *** Tests *** */
let desc = "with empty arrays";
let actual = mergeArrays([], []);
let expected = [];
assertDeepEqual(actual, expected, desc);

desc = "first array empty";
actual = mergeArrays([], [7, 8, 9]);
expected = [7, 8, 9];
assertDeepEqual(actual, expected, desc);

desc = "second array empty";
actual = mergeArrays([10, 11, 12], []);
expected = [10, 11, 12];
assertDeepEqual(actual, expected, desc);

desc = "arrays with same lengths";
actual = mergeArrays([12, 14, 16], [11, 13, 17]);
expected = [11, 12, 13, 14, 16, 17];
assertDeepEqual(actual, expected, desc);

desc = "arrays with different lengths";
actual = mergeArrays([22, 24, 26, 28], [21, 27]);
expected = [21, 22, 24, 26, 27, 28];
assertDeepEqual(actual, expected, desc);

function assertDeepEqual(a, b, desc) {
    const aStr = JSON.stringify(a);
    const bStr = JSON.stringify(b);
    if (aStr !== bStr) {
        console.log(`${desc} ... FAIL: ${aStr} != ${bStr}`);
    } else {
        console.log(`${desc} ... PASS`);
    }
}