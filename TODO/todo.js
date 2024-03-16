const input = document.querySelector("input");
const showtodo = document.querySelector(".show-todo");
console.log(showtodo.innerHTML);

const eClick = () => {
  showtodo.innerHTML += `<li>${input.value}</li>`;
  input.value = ``;
};
