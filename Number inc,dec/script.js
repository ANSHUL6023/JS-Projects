let count = 0;
const input = document.querySelector("input");
const span = document.querySelector("span");
/*anamous function */
() => {
  span.innerText = count;
};
/*increase value by 1. */
function inc() {
  span.innerText = ++count;
}
/*decrease value by 1. */
function dec() {
  span.innerText = --count;
}
/*increase value by 10. */
function incTen() {
  count += 10;
  span.innerText = count;
}
/*deccrease value by 10. */
function decTen() {
  count -= 10;
  span.innerText = count;
}

function addValue() {
  count += Number(eval(input.value));
  span.innerText = count;
}
