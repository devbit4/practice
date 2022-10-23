const toDoInput = document.querySelector('.todo__form input');
const toDoFormBtn = document.querySelector('.todo__form button');
const toDoList = document.querySelector('.todo__list');

const TODOS_KEY = 'todos';

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;
  li.classList.add('todo__item');
  const span = document.createElement('span');
  const btn = document.createElement('button');
  btn.innerText = '삭제';
  btn.addEventListener('click', deleteTodo);
  li.appendChild(span);
  li.appendChild(btn);
  span.innerText = newTodo.text;
  toDoList.appendChild(li);
}

function handleToDoSubmit() {
  const newTodo = toDoInput.value;

  if (!newTodo) return;

  toDoInput.value = '';
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  paintToDo(newTodoObj);
  toDos.push(newTodoObj);
  saveToDos();
}

toDoFormBtn.addEventListener('click', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (saveToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
