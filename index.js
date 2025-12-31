const input = document.getElementById("todo-input");
const btn = document.getElementById("todo-button");
const list = document.getElementById("todo-list");
const pend = document.getElementById("todo-pend");
const compt = document.getElementById("todo-comp");
const allTasks = document.getElementById("total-tasks");
const clearStats = document.getElementById("completed-btn");
console.log(input, btn, list);

const saved = localStorage.getItem("todos");
const todos = saved ? JSON.parse(saved) : [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function createTodoNode(todo, index) {
  // create elements here
  const li = document.createElement("li");
  li.classList.add("lists");

  // creating checkbox
  const checkbox = document.createElement("input");
  checkbox.classList.add("checkbox");
  checkbox.type = "checkbox";
  checkbox.checked = !!todo.completed;
  checkbox.addEventListener("change", () => {
    todo.completed = checkbox.checked;

    update();
  });

  // creating todo text
  const textSpan = document.createElement("span");
  textSpan.textContent = todo.text;
  textSpan.classList.add("todo-text");
  if (todo.completed) {
    textSpan.style.textDecoration = "line-through";
  }

  // creating a delete Button
  const delBtn = document.createElement("button");
  delBtn.classList.add("delete-button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", () => {
    todos.splice(index, 1);

    update();
  });
  // creating edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-button");
  editBtn.addEventListener("click", () => {
    editTodo(index);
  });

  li.appendChild(checkbox);
  li.appendChild(textSpan);
  li.appendChild(editBtn);
  li.appendChild(delBtn);
  return li;
}
function editTodo(index) {
  const li = list.children[index];
  const todo = todos[index];

  const input = document.createElement("input");
  input.type = "text";
  input.value = todo.text;
  input.classList.add("edit-input");

  li.querySelector(".todo-text").replaceWith(input);
  input.focus();

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const newText = input.value.trim();
      if (newText) {
        todo.text = newText;
        update();
      }
    }

    if (e.key === "Escape") {
      render(); // cancel edit
    }
  });
}

function render() {
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const node = createTodoNode(todo, index);
    list.appendChild(node);
  });
}

function progress() {
  const completed = todos.filter((todo) => todo.completed).length;
  const pending = todos.length - completed;

  pend.textContent = `Pending Tasks ==> ${pending}`;
  compt.textContent = `Completed Tasks ==> ${completed}`;
  allTasks.textContent = `Total Tasks ==> ${todos.length}`;
}

function addTodo() {
  const text = input.value.trim();
  if (text === "") {
    return;
  }
  todos.push({ text: text, completed: false });
  input.value = "";

  // re-render()

  update();
}
btn.addEventListener("click", addTodo);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});

function update() {
  saveTodos();
  render();
  progress();
}
clearStats.addEventListener("click", () => {
  // clear todos array
  todos.length = 0;

  // remove from localStorage
  localStorage.removeItem("todos");

  // update UI
  update();
});

update();
