const bookList = document.querySelector('#task-list ul')
console.log(bookList)
bookList.addEventListener('click',(e) =>{
    console.log(e)
    let className = e.target.className
    console.log(className)
    if(className === 'delete'){
        let li = e.target.parentElement
        bookList.removeChild(li)
    }
})

const searchTask = document.forms["Search-Task"]
const listofTask = document.querySelectorAll("#task-list .name")

searchTask.addEventListener('keyup', (e)=> {
    let inputText = e.target.value.toLowerCase();

    listofTask.forEach((task)=>{
        let title = task.textContent.toLowerCase()
        let isIncludedInputText = title.includes(inputText)
        let parentNode = task.parentNode
        if(isIncludedInputText){
            parentNode.style.display = "block"
        }else{
            parentNode.style.display = "none"
        }

    })

})

const addTask = document.forms["add-task"]
console.log(addTask)

addTask.addEventListener("submit", (e)=>{
    e.preventDefault();
    const inputValue = addTask.querySelector("input").value.toString();
    if (inputValue && /\w/.test(inputValue[0])){
        const liTag = document.createElement("li")
        const firstSpan = document.createElement("span")
        const secondSpan = document.createElement("span")
        const checkSpan = document.createElement("input")


        firstSpan.classList.add("name")
        secondSpan.classList.add("delete")
        checkSpan.type=("checkbox")

        liTag.appendChild(firstSpan)
        liTag.appendChild(checkSpan)
        liTag.appendChild(secondSpan)
        firstSpan.textContent = inputValue
        secondSpan.textContent = "delete"
        bookList.prepend(liTag)

    }
})
