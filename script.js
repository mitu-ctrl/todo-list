const input = document.querySelector("#todo");
const btn = document.querySelector("#add-btn");
const list = document.querySelector("#todo-list");

btn.addEventListener("click", (event) => {
    event.preventDefault();

    if (input.value === "") {
        alert("Please add task");
        return;
    }

    const listItem = document.createElement("li");
    const taskText = document.createElement("span");
    taskText.textContent = input.value;
    listItem.appendChild(taskText);

   
    listItem.classList.add("flex", "items-center", "justify-between", "py-2", "px-4", "border-b");

    list.appendChild(listItem);
    input.value = "";

   
    const icons = document.createElement("div");
    icons.classList.add("flex", "gap-2");

    const done = document.createElement("div");
    done.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>`;

    icons.appendChild(done);

 
    done.addEventListener("click", () => {
        taskText.classList.toggle("line-through");
        
        if (taskText.classList.contains("line-through")) {
            done.querySelector("svg").classList.add("text-blue-500", "stroke-black", "fill-current");
        } else {
            done.querySelector("svg").classList.remove("text-blue-500", "fill-current");
        }
    });

  
    const edit = document.createElement('div');
    edit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
    </svg>`;

    icons.appendChild(edit);
  
    edit.addEventListener("click", () => {
        input.value = taskText.textContent;
        editingTask = listItem; 
        input.focus();
    });

   

   
    const del = document.createElement("div");
    del.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer">
        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </svg>`;

    icons.appendChild(del);
    
    del.addEventListener("click", () => {
        listItem.remove();
    });

    listItem.appendChild(icons);
});
