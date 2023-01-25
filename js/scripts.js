// Selecion of elements 
const toDoForm = document.querySelector("#toDo-form");
const toDoInput = document.querySelector("#toDo-input");
const toDoList = document.querySelector("#toDo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

// Functions

// Events 
toDoForm.addEventListener("submit", (e) =>  {
    e.preventDefault();

    console.log("Sent");
});