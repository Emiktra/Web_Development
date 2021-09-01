function Addition(n1, n2){
    return n1+n2;
}

const Working_Hours_Week = 40 // 45;

let counter = 0;


function increase(increaseBy){
    if( increaseBy == undefined){counter++}
    else{counter += increaseBy}}

function decrease(decreaseBy){
    if( decreaseBy == undefined){counter--}
    counter -= decreaseBy}


export const moduleName = "this is module 1"
const moduleName2 = "AHAdadsad"
export default moduleName2;

export {
    Addition as sum,
    Working_Hours_Week,
    counter,
    decrease as dec,
    increase as inc
    }