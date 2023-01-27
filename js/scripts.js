// Selecion of elements 
const toDoForm = document.querySelector("#toDo-form");
const toDoInput = document.querySelector("#toDo-input");
const toDoList = document.querySelector("#toDo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

// Functions
const saveToDo = (text) => {

    const toDo = document.createElement("div");
    toDo.classList.add("toDo");

    const toDoTitle = document.createElement("h3");
    toDoTitle.innerText = text;
    toDo.appendChild(toDoTitle);

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-toDo");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    toDo.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-toDo");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    toDo.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-toDo");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    toDo.appendChild(deleteBtn);
    
    toDoList.appendChild(toDo);

    toDoInput.value = "";
    toDoInput.focus();

};

// Events 
toDoForm.addEventListener("submit", (e) =>  {
    e.preventDefault();

  const inputValue = toDoInput.value;

  if (inputValue) {
    saveToDo(inputValue);
  }
});

document.addEventListener("click", (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    
    if (targetEl.classList.contains("finish-toDo")) {
        parentEl.classList.toggle("done");
    }

    if(targetEl.classList.contains("remove-toDo")) {
        parentEl.remove();
    }

    });
