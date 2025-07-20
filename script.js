"use strict";
const addTaskbtn = document.querySelector(".add-btn");
const inputTask = document.querySelector(".input-text");
const list = document.querySelector("ul");
const checkboxbtn = document.querySelectorAll(".input-checkbox");
const removebtn = document.querySelectorAll(".remove-task");
const allTasksbtn = document.querySelector(".AllTasks");
const completedbtn = document.querySelector(".Completed");
const pendingbtn = document.querySelector(".Pending");
let currentfilter = "all";

addTaskbtn.addEventListener("click", function () {
  const task = inputTask.value;

  if (task != "") {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "check";
    checkbox.className = "input-checkbox";
    const removeicon = document.createElement("div");
    removeicon.textContent = "🗑️";
    removeicon.className = "remove-task";
    const taskContent = document.createElement("div");
    taskContent.textContent = task;
    taskContent.className = "task-text";

    const newTask = document.createElement("li");
    newTask.appendChild(checkbox);
    newTask.appendChild(taskContent);
    newTask.appendChild(removeicon);

    list.appendChild(newTask);

    checkbox.addEventListener("click", function () {
      taskContent.classList.toggle("checked");
      filter(currentfilter);
    });
    removeicon.addEventListener("click", function () {
      newTask.remove();
    });

    filter(currentfilter);
  }
  inputTask.value = "";
});

completedbtn.addEventListener("click", function () {
  filter("complete");
});

pendingbtn.addEventListener("click", function () {
  filter("pending");
});

allTasksbtn.addEventListener("click", function () {
  filter("all");
});

function filter(type) {
  const items = list.querySelectorAll("li");

  if (type == "complete") {
    for (const index of items) {
      if (!index.querySelector(".input-checkbox").checked)
        index.style.display = "none";
      else index.style.display = "flex";
    }
    completedbtn.classList.add("clicked");
    pendingbtn.classList.remove("clicked");
    allTasksbtn.classList.remove("clicked");
    currentfilter = "complete";
  } else if (type == "pending") {
    for (const index of items) {
      if (index.querySelector(".input-checkbox").checked)
        index.style.display = "none";
      else index.style.display = "flex";
    }
    completedbtn.classList.remove("clicked");
    pendingbtn.classList.add("clicked");
    allTasksbtn.classList.remove("clicked");
    currentfilter = "pending";
  } else {
    for (const index of items) {
      index.style.display = "flex";
    }
    completedbtn.classList.remove("clicked");
    pendingbtn.classList.remove("clicked");
    allTasksbtn.classList.add("clicked");
    currentfilter = "all";
  }
}
