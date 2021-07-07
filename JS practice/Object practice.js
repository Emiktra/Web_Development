var pplList = []
var Hasan = {name: 'Hasan', surname: 'Memluk', age:'32', job: 'Full Stack'}
var Ali = {name: 'Ali', surname: 'Yigit', age:'23', job: 'Data Scientist'}
var Murat = {name: 'Murat', surname: 'Camci', age:'26', job: 'Dev&Ops'}
var Peter = {name: 'Peter', surname: 'Hion', age:'40', job: 'Data Engineer'}
pplList.push(Hasan)
pplList.push(Ali)
pplList.push(Murat)
pplList.push(Peter)

for (i = 0; i < pplList.length; i++) {
    console.log(pplList[i].name, pplList[i].surname, ' | ', pplList[i].age, pplList[i].job)
}