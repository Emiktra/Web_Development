// JS DOM

//document.getElementBy...
const mainDom = document.getElementById('dom')
console.log(mainDom)
const instructor = document.getElementById('instructor')
console.log(instructor)

// Classname
const withClassName = 
document.getElementsByClassName('class-info');
console.log(withClassName[0])

//Tagname
const h3 = document.getElementsByTagName('h3')
console.log(h3[1])

//document query.selector

const instant = document.querySelector('.class-info')
console.log(instant)

console.log(document.querySelector('#instructor2'))
console.log(document.querySelectorAll('.class-info'))
console.log(document.querySelector('.class-info'))

console.log(document.querySelector('div h3'))
console.log(document.querySelector('.class-info h3'))

//Manipulation
const brands = document.querySelector('#brands')
console.log(brands)

brands.innerHTML +='<li>NioyaTech</li>';
// brands.innerHTML = brands + '<li>NioyaTech</li>';
brands.innerHTML = brands.innerHTML + `<li class='brand'>Parimanaka</li>`;
const classBrands = document.querySelectorAll('.brand');
console.log(classBrands[3].innerText)

const copyRight = document.querySelector('footer p')
console.log(copyRight);
copyRight.innerHTML = '<h1>&copy; 2020 clarusway.com</h1>';


const lessonList = [
    { id: 1, name: 'HTML' },
    { id: 1, name: 'CSS' },
    { id: 1, name: 'JS' },
    { id: 1, name: 'REACT' },
  ];

for (let i = 0; i < lessonList.length; i++) {
    lessons.innerHTML += lessonList[i].name 
}

const lessonElm = document.getElementById('lessons');
lessonList.forEach((element) => {
  lessonElm.innerHTML += `<li class="lesson-item">${element.name}</li>`;
});


//setAttribute getAttribute
const mdn = document.querySelector('#mdn');
const mdnHrefAttr = mdn.getAttribute('href');
console.log(mdnHrefAttr)
mdn.setAttribute('href', 'https://github.com/clarusway/clarusway-full-stack-8-21/tree/main/html-css/projects/004-checkout-form')

// const inst = document.querySelector('#instructors li')
// console.log(inst)
// for (let i = 0; i < inst.length; i++) {
//     if (inst[i].innerText.includes('FrontEnd')) {
//         inst.setAttribute('class', 'front-end')
//     } else if (inst[i].innerText.includes('BackEnd')) {
//         inst.setAttribute('class', 'back-end')
//     }
// }
const insElm = document.querySelectorAll('#instructors li');
// console.log(insElm);

insElm.forEach((item) => {
  console.log(item.innerText.includes('FrontEnd'));
  if (item.innerText.includes('FrontEnd')) {
    item.setAttribute('class', 'front-end');
  } else if (item.innerText.includes('BackEnd')) {
    item.setAttribute('class', 'back-end');
  }
});

console.log(document.querySelector('#a3'))
a3.style.color = 'green'
a3.style.backgroundColor = 'red'
a3.style.fontSize = '2rem'

const cwBanner = document.getElementById('cw-banner');
cwBanner.classList.add('imp')
cwBanner.classList.remove('banner');

const cwQuote = document.querySelector('#quote-div');
const cwElm = document.createElement('h2');
cwElm.innerText = 'Clarusway';
cwQuote.appendChild(cwElm);