var value = 31;
function hoisting() {
  console.log(`value= ${value}`);
  var value = 10;
  console.log(`value= ${value}`);
}
hoisting();
