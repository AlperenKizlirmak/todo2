const todoinput = document.getElementById("todo-input");
const addbtn = document.getElementById("todo-button");
const todoul = document.getElementById("todo-ul");
const toodo = [];
addBtn.addEventListener("click", () => {
    if (todoInput.ariaValueMax.trim() === "") {
        alert("Plase enter new todo")
    } else {
        const newTodo = {
            id: new Date().getTime(),
                comleted: false,
            text:todoInput.value
        }
        toodos.push(newTodo);
        todoInput.value = ""
    }
});
function createListElement(new todo) {
    const {id,comlated, text} = newTodo
    const li = document.createElement("li")
    li.setAttribute("id", id);
    comlated && li.classList.add("checked");
    okIcon.setAttribute("class", "fas fa-check");
    const p = document.createElement("p")
    document.createTextNode(text)
    p.appendChild(pTextNode)
    li.appendChild(p)
    const deleteIcon = document.createElement("i");
    deleteIcon.setAttribute("class", "fas fa-trash");
    li.appendChild(deleteIcon);
    todo.appendChild(li)
}
todoUl.addEventListener("click", (e) => {
})
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("todo-button");
const todoUl = document.getElementById("todo-ul");
const toodos = [];
addBtn.addEventListener("click", () => {
    if (todoInput.ariaValueMax.trim() === "") {
        alert("Plase enter new todo")
    } else {
        const newTodo = {
            id: new Date().getTime(),
                comleted: false,
            text:todoInput.value
        }
        toodos.push(newTodo);
        todoInput.value = ""
    }
});
function createListElement (new todo) {
    const {id,comlated, text} = newTodo
    const li = document.createElement("li")
    li.setAttribute("id", id);
    comlated && li.classList.add("checked");
    okIcon.setAttribute("class", "fas fa-check");
    const p = document.createElement("p")
    document.createTextNode(text)
    p.appendChild(pTextNode)
    li.appendChild(p)
    const deleteIcon = document.createElement("i");
    deleteIcon.setAttribute("class", "fas fa-trash");
    li.appendChild(deleteIcon);
    todo.appendChild(li)
}
todoUl.addEventListener("click", (e) => {
})