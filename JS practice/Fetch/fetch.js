function countWithInterval(endTime){
    // let time = 0;
    // const timerLoop = setInterval(()=>{
    //     if(time == )
    // })
}

// countWithInterval(100)


function countWithTimeout(endTime){

}


// // setInterval
// function countSeconds(limit) {
//     let current = 0;
//     const intId = setInterval(() => {
//       if (current == limit) {
//         clearInterval(intId);
//         console.log('counter finished.');
//         return;
//       }
//       current++;
//       console.log(`${current} seconds passed.`);
//     }, 1000);
//   }
//   // countSeconds(4);
  
//   // setTimeout
//   let current = 0;
//   function countSeconds2(limit) {
//     // recursive
//     if (current > limit) {
//       console.log('counter finished.');
//     } else {
//       if (current != 0) {
//         console.log(`${current} seconds passed.`);
//       }
//       current++;
//       setTimeout(countSeconds2, 1000, limit);
//     }
//   }
//   countSeconds2(3);



// new Promise((resolve,reject)=>{
//     const isSuccesful = true;
//     if(isSuccesful){
//         resolve("task completed succesfully")
//     }
//     reject("failed")
// }).then((result)=>{
//     console.log(result)
//     return "it goes on"
// })
// .catch(err => console.log(err))



fetch("https://restcountries.eu/rest/v2/name/turkey")
.then((data)=>{
    return data.json()
}).then((data)=>{
    console.log(data[0].region)
    console.log(data)
})

const main = `<main class="container">
<section class="countries">
  <div class="country">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_the_United_Nations.svg"
      alt=""
      class="country__img"
    />
    <div class="country__data">
      <h3 class="country__name">Country</h3>
      <h4 class="country__region">Continent</h4>
      <p class="country__row">
        <span><i class="fas fa-lg fa-landmark"></i></span>Capital City
      </p>
      <p class="country__row">
        <span><i class="fas fa-lg fa-users"></i></span>##.#M People
      </p>
      <p class="country__row">
        <span><i class="fas fa-lg fa-comments"></i></span>spoken language
      </p>
      <p class="country__row">
        <span><i class="fas fa-lg fa-money-bill-wave"></i></span>Currency
      </p>
    </div>
  </div>
</section>
</main>`