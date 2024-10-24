const input = document.querySelector("#todo");
const btn = document.querySelector("#add-btn");
const list = document.querySelector("#todo-list");

btn.addEventListener("click", (event)=> {
event.preventDefault()

if(input.value == ""){
        alert("Please add task");
        return;
    }

    const listItem = document.createElement("li");

    listItem.textContent = input.value;

    list.appendChild(listItem);

    input.value = "";

const edit = document.createElement('i');

edit.classList.add("")

})