const input = document.getElementById("todo-input");
const btn = document.getElementById("todo-button");
const list = document.getElementById("todo-list");
const countEl = document.getElementById("todo-count");
console.log(input, btn, list);

const saved = localStorage.getItem("todos");
const todos = saved ? JSON.parse(saved) : [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function createTodoNode(todo, index) {
  // create elements here
  const li = document.createElement("li");

  // creating checkbox
  const checkbox = document.createElement("input");
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

  // creating edit functionality
  textSpan.addEventListener("dblclick", () => {
    const newText = prompt("Edit todo", todo.text);
    if (newText !== null && newText.trim()) {
      todo.text = newText;
      textSpan.textContent = todo.text;

      update();
    }
  });

  // creating a delete Button
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", () => {
    todos.splice(index, 1);

    update();
  });

  li.appendChild(checkbox);
  li.appendChild(textSpan);
  li.appendChild(delBtn);
  return li;
}

function render() {
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const node = createTodoNode(todo, index);
    list.appendChild(node);
  });
}
function updateCounter() {
  const remaining = todos.filter((todo) => !todo.completed).length;
  countEl.textContent = `${remaining} item${
    remaining !== 1 ? "s" : ""
  } pending`;
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
  updateCounter();
}
update();
