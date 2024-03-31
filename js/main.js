"Use strict";

const newTodoInput = document.querySelector("#new-todo");
const todoList = document.querySelector("#todo-list");
const addButton = document.querySelector("#add-btn");

addButton.addEventListener("click", function () {
  if (newTodoInput.value !== "") {
    const listItem = document.createElement("li");
    todoList.appendChild(listItem);

    listItem.textContent = newTodoInput.value;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";
    listItem.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function () {
      listItem.remove();
    });

    newTodoInput.value = "";
  }
});

// const deleteButton = document.querySelector(".delete-btn");

// deleteButton.textContent = "Delete";
// listItem.appendChild(deleteButton);
// deleteButton.classList.add("delete-btn");
