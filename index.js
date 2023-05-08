function add(a, b) {
  return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
  return parseInt(a) - parseInt(b);
}
function multiply(a, b) {
  return parseInt(a) * parseInt(b);
}
function divide(a, b) {
  return parseInt(a) / parseInt(b);
}
function increment(a) {
  a += 1;
  return a;
}
function decrement(a) {
  a -= 1;
  return a;
}
function makeInt(n) {
  return parseInt(n, 10);
}
function preserveDecimal(n) {
  return parseFloat(n);
}
