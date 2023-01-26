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

    console.log(toDo);

};

// Events 
toDoForm.addEventListener("submit", (e) =>  {
    e.preventDefault();

  const inputValue = toDoInput.value;

  if (inputValue) {
    saveToDo(inputValue);
  }

});