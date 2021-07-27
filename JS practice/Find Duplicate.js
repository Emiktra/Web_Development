const MainArray = [1,2,3,4,5,6,7,6,8,9,10]

function finDuplicate(Main){
    for (i = 0; i < Main.length;){
        let search = Main[i]
        Main.splice(i, 1);
        if (Main.includes(search)){
            return `The duplicate number is ${search}`
        }
    }
    return false
}

let result = finDuplicate(MainArray)
console.log(result)