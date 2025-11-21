const addBth = document.getElementById('addButton')
const taskList = document.getElementById('taskListt')

function counter(){
   let count = 0
     function update() {
        document.getElementById('counterDiv').innerHTML =  "счетчик задач: " + count
    }
    return{
        add(){
            count++
            update()
        },
        minus(){
            count--
            update()
        },
        get(){
            return count
        }
    }
}
const counts = counter()

addBth.addEventListener('click', () => {



const taskInput = document.getElementById('taskTextt').value

if(!taskInput){ 
    console.log('тут ничего нет код остановлен')
    return;
}
counts.add()
const delbth = document.createElement('button')
delbth.textContent = 'Удалить'
delbth.classList = 'delete-btn'
delbth.addEventListener('click', () => {
    li.remove()
    counts.minus()
})

const li = document.createElement('li')
li.textContent = taskInput

li.appendChild(delbth)
taskList.appendChild(li)
taskInput.value = ''
}) 




