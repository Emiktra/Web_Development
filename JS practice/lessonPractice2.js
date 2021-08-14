const cart = [
    {
      item: "🍫",
      price: 5,
      vat: 8,
    },
    {
      item: "🍌",
      price: 5,
      vat: 8,
    },
    {
      item: "🥐",
      price: 7,
      vat: 18,
    },
    {
      item: "🍰",
      price: 15,
      vat: 18,
    },
    {
      item: "🎂",
      price: 25,
      vat: 1,
    },
    {
      item: "🥧",
      price: 20,
      vat: 1,
    },
  ];
  // 1
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    const element = cart[i];
    sum += element.price;
  }
  console.log(sum);
  // 2
  sum = 0;
  for (const el of cart) {
    sum += el.price;
  }
  console.log(sum);
  // 3
  sum = 0;
  cart.forEach((element) => {
    sum += element.price;
  });
  // 4
  const result = cart.map((item) => item.price).reduce((acc, curr) => acc + curr);
  console.log("result :>> ", result);
  
  // 5
  const re = cart.reduce((sum, curItem) => {
    return sum + curItem.price;
  }, 0);
  console.log("re :>> ", re);
  
  const vat = cart.reduce((sum, curItem) => {
    return sum + (curItem.price * curItem.vat) / 100;
  }, {});
  console.log("vat :>> ", vat);





  /*
--------------
for in example
--------------
*/
const parent = {
    firstName: "Mike",
    lastName: "Doe",
    profession: "Barber",
  };
  
  function Baby() {
    this.firstName = "unnamed";
    this.weight = 3.4;
  }
  
  Baby.prototype = parent;
  
  var sally = new Baby();
  sally.firstName = "Sally";
  
  for (const prop in sally) {
    const element = sally[prop];
    console.log(prop, ":>>", element);
    if (Object.hasOwnProperty.call(sally, prop)) {
    }
  }