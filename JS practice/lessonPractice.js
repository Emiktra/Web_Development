// const movements = [100, 300, -200, 500, -400, 225, 1000, -700];

// let arrDeposits = 0;
// let arrWithdraws = 0;
// for (i = 0; i < movements.length; i++){
//     if (movements[i] < 0){
//         arrWithdraws += movements[i];
//         console.log(`You withdrew ${movements[i]}`)
//     } else {
//         arrDeposits += movements[i];
//         console.log(`You deposited ${movements[i]}`)
//     }
// }
// console.log(`Your total withdraw is ${arrWithdraws}`)
// console.log(`Your total deposits is ${arrDeposits}`)










// // // map initials
// let str = 'Clarusway Online Career IT Training School';
// let str2 = str.split(" ")
// let finalStr = "";
// for (i = 0; i  < str2.length; i++){
//     finalStr += str2[i].split("")[0]
// }
// str2.map((value) =>{finalStr += value.split("")[0]})
// console.log(finalStr)









// map

// let str = 'The Quick Brown Fox'; // tHe YeLLoW fOx 
// let words = str.split(" ");
// let resultOfWords = []
// for (i = 0; i < words.length; i++){
//     let stage2 = "";
//     for (e = 0; e < words[i].length; e++){
//         if (words[i].split("")[e] == words[i].split("")[e].toLowerCase()){stage2 += words[i].split("")[e].toUpperCase()}
//         else {stage2 += words[i].split("")[e].toLowerCase()}
//     }
//     resultOfWords.push(stage2);
// }
// console.log(resultOfWords.join(" "))
// words.map((elem, i, words) =>{
//     let stage2 = ""
//     elem.split("").map((letter, e, element) => {if (words[i].split("")[e] == words[i].split("")[e].toLowerCase()){stage2 += words[i].split("")[e].toUpperCase()}
//     else {stage2 += words[i].split("")[e].toLowerCase()}
//     resultOfWords.push(stage2)})
// })
// console.log(resultOfWords)















// filter words longer than 6 letters
// const words = [
//   'spray',
//   'limit',
//   'elite',
//   'exuberant',
//   'destruction',
//   'present',
//   'Clarusway',
//   'Future',
// ];
// let newWords = []
// for (i = 0; i < words.length; i++){
//     if (words[i].length > 6){
//         newWords.push(words[i])
//     }
// }
// words.map((elem,i) =>{if (elem.length > 6){newWords.push(elem)}})
// console.log(words.filter((word) => word.length > 6))
// console.log(newWords)