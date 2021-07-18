let onPage = window.location.href
let body = document.body
let main = document.querySelector('main')
let Bara= "<nav><h1>"
Bara += "<span>Clarusway</span>"
Bara += " Web Design</h1>"
Bara += "<div id='jsNav'>"
Bara += '<a target="_self" class="navLink" href="./index.html">HOME</a>'
Bara += '<a target="_self" class="navLink" href="./about(clarusway).html">ABOUT</a>'
Bara += '<a target="_self" class="navLink" href="./services(clarusway).html">SERVICES</a>'
Bara += '</div></nav>'
Bara = document.createRange().createContextualFragment(Bara);
document.body.insertBefore(Bara, body.children[0])
Bara = "<footer><p>Clarusway Web "
Bara +="Design, Copyrigth © 2020</p>"
Bara += '<img src="./clarusway_'
Bara += 'logo.png" alt="#"></footer>'
Bara = document.createRange().createContextualFragment(Bara)
document.body.appendChild(Bara)
Bara = '<form action="./index.html">'
Bara +='<h3>Subscribe To Our Newsletter</h3>'
Bara +='<div><input type="email" required placeholder="Enter Email...">'
Bara +='<button type="submit">Subscribe</button>'
Bara +='</div></form>'
Bara = document.createRange().createContextualFragment(Bara)
const navigationBar = document.getElementById('jsNav')
if (onPage.includes('index.html')) {
    navigationBar.children[0].setAttribute('class', 'isOn')
    main.insertBefore(Bara, main.children[1])
}
if (onPage.includes('about(clarusway).html')) {
    navigationBar.children[1].setAttribute('class', 'isOn')
    main.insertBefore(Bara, main.children[1])
}
if (onPage.includes('services(clarusway).html')) {
    navigationBar.children[2].setAttribute('class', 'isOn')
    main.insertBefore(Bara, main.children[1])
}