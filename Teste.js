
let btn = document.getElementById('btnAdd')
let field = document.getElementById('searchField')
let container = document.getElementById(('container'))
let task = []
let cont = 0

field.onkeydown = (event) => {
    if (event.key === "Enter") {
        addTask()
    }
}



if (localStorage.getItem('task') !== null ) {

    task = JSON.parse(localStorage.getItem('task'))
    task.forEach(element => {
        addTask(element.text, element.done)
    });
} else {
    console.log("Não temos tarefas")
}

btn.onclick = addTask
function addTask(text, complete) {
    let content = field.value || text
    let newTask = document.createElement('div')
    let btnEditSave = document.createElement('button')
    btnEditSave.innerText = "EDIT"
    btnEditSave.className = "btns"
    let btnDelCancel = document.createElement('button')
    btnDelCancel.innerText = "DELETE"
    btnDelCancel.className = "btns"
    newTask.id = cont
    let checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    let span = document.createElement('span')
    span.innerText = content
    newTask.className = "task"
    let editing = false
    
    if (text == undefined) {

        task.push(
            {
                text: span.innerText,
                done: d = checkbox.checked ? false : true
            }

        )        
        localStorage.setItem('task', JSON.stringify(task))
    }

    checkbox.onchange = () => {
        span.classList.toggle('done')        
    }


    if (span.innerText.trim() != "") {
        newTask.append(checkbox, span, btnEditSave, btnDelCancel)
        container.appendChild(newTask)
        cont++
    }

    btnDelCancel.onclick = () => {
        if (editing) {
            novoText.replaceWith(span)
            btnEditSave.textContent = "EDIT"
            btnDelCancel.textContent = "DELETE"
        } else {
            newTask.remove()
            task.splice(+newTask.id, 1)
            localStorage.setItem('task', JSON.stringify(task))
        }
    }

    field.value = ""

    let novoText;

    btnEditSave.onclick = () => {
        if (!editing) {
            novoText = document.createElement('textarea')
            novoText.className = 'edit'
            novoText.value = span.textContent
            span.replaceWith(novoText)
            novoText.focus()
            btnEditSave.textContent = "SAVE"
            btnDelCancel.textContent = "CANCEL"
            console.log(newTask.id)
            editing = true
        } else {
            span.textContent = novoText.value
            task[newTask.id].text = span.textContent
            novoText.replaceWith(span)
            btnEditSave.textContent = "EDIT"
            btnDelCancel.textContent = "DELETE"
            editing = false
            localStorage.setItem('task', JSON.stringify(task))
        }
    }
}


