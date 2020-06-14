const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greetings = document.querySelector(".greetings");
const userToDoLavel = document.querySelector(".toDoLavel");
const userToDoInput = document.querySelector(".toDoInput");
const bye = document.querySelector(".bye");
const list = document.querySelector(".js-toDoList");

const USER_LS = "currentUser";
const SHOWING = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function logout() {
  localStorage.removeItem(USER_LS);
  greetings.classList.remove(SHOWING);
  bye.classList.remove(SHOWING);
  userToDoInput.classList.remove(SHOWING);
  userToDoLavel.classList.remove(SHOWING);
  list.classList.remove(SHOWING);
  form.classList.add(SHOWING);
  input.value = "";
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askName() {
  form.addEventListener("submit", handleSubmit);
  form.classList.add(SHOWING);
}

function paintGreeting(text) {
  greetings.classList.add(SHOWING);
  form.classList.remove(SHOWING);
  userToDoInput.classList.add(SHOWING);
  userToDoLavel.classList.add(SHOWING);
  list.classList.add(SHOWING);
  bye.classList.add(SHOWING);
  greetings.innerHTML = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
  bye.addEventListener("click", logout);
}

init();
