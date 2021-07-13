const addBtn = document.getElementById('addBtn');
var mainList = document.getElementById('mainList');

function addElement(){
    var elem = document.getElementById('addInput').value
    if (Boolean(document.getElementById('invalid_input'))) {
        document.getElementById('invalid_input').parentNode.removeChild(document.getElementById('invalid_input'))
    }
    if (elem === "") {
        var element1 = document.createElement('p')
        element1.setAttribute('id', 'invalid_input')
        var message = document.createTextNode("cannot be empty");
        element1.appendChild(message);
        document.getElementById('add').append(element1) 
        return;
    }
    document.getElementById('addInput').value = ''
    var mainDiv = document.createElement('li')
    mainDiv.setAttribute('id', `task${mainList.childElementCount}`)
    mainDiv.setAttribute('class', 'task')
    var checkbox = document.createElement('input')
    checkbox.setAttribute('id', `checkbox${mainList.childElementCount}`)
    checkbox.setAttribute('type', 'checkbox')
    var taskText = document.createElement('p')
    taskText.setAttribute('class', 'text')
    taskText.setAttribute('id', `text${mainList.childElementCount}`)
    taskText.appendChild(document.createTextNode(elem));
    var closeButtun = document.createElement('button')
    closeButtun.setAttribute('class', 'remove')
    closeButtun.setAttribute('id', `remove${mainList.childElementCount}`)
    closeButtun.appendChild(document.createTextNode("×"))
    mainDiv.appendChild(checkbox)
    mainDiv.appendChild(taskText)
    mainDiv.appendChild(closeButtun)
    mainList.appendChild(mainDiv)
    closeButtun.addEventListener('click', removeElement.bind(0,`task${mainList.childElementCount -1}`))
    checkbox.addEventListener('click', checkElement.bind(0,`task${mainList.childElementCount -1}`))
}
function removeElement(id){
    document.getElementById('mainList').removeChild(document.getElementById(id))
}
function checkElement(id){
    var mainDiv = document.getElementById(`task${mainList.childElementCount -1}`)
    var taskText = document.getElementById(`text${mainList.childElementCount -1}`)
    var closeBtn = document.getElementById(`remove${mainList.childElementCount -1}`)
    if (mainDiv.classList.contains('task')) {
        mainDiv.setAttribute('class', 'taskChechked')
        taskText.setAttribute('class', 'textChechked')
        closeBtn.setAttribute('class', 'removeChechked')
    } else {
        mainDiv.setAttribute('class', 'task')
        taskText.setAttribute('class', 'text')
        closeBtn.setAttribute('class', 'remove')
    }
}

addBtn.addEventListener('click', addElement)