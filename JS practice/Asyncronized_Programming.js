function slowTask(){
    let i = 0
    do {i++}while (i < 500_000_000){
        return 1;
    }
}

// const slowTask = () => {
//     let i = 0;
//     do {
//       i++;
//     } while (i < 500_000_000);
//     return "task is completed.";
//   };
  
//   console.log("¯\\_(ツ)_/¯");
//   console.time("bir");
// // setTimeout
//   console.log("hello1");
//   console.timeLog("bir");
//   slowTask();
//   setTimeout(() => {
//     console.log("Settimeout");
//     console.timeEnd("bir");
//   }, 1000);
//   console.log("hello2");
//   console.timeLog("bir");
//   console.log("hello3");
//   console.timeLog("bir");


// const timeLabel = document.getElementsByTagName("p")[0];
// function showTime(){
//     let time = new Date();
//     timeLabel.innerHTML = time.toLocaleTimeString()}

// const clock = setInterval(showTime, 1000)


const myPromise = new Promise((resolve, reject)=>{
    console.log("myPromise started")
    let condition = false;
    if (condition){
        resolve("islem tamamdir")
    } else{
        reject(Error("gerceklesmedi"))
    }
})
myPromise.then((msg)=>{
    console.log(msg)
})
myPromise.catch((msg)=>{
    console.log(msg)
})
console.log("gule gule")

/** promise  (teachers)*/ 

// const myPromise = new Promise((resolve, reject) => {
//     console.log("myPromise started");
//     let condition = true;
//     if (condition) {
//       resolve("işlem tamam");
//     }
//     reject(Error("gerçekleşmedi"));
//   });
//   console.log("merhaba");
//   myPromise
//     .then((msg) => {
//       console.log(msg);
//     })
//     .catch((msg) => {
//       console.log(msg);
//     });
//   console.log("gule gule");