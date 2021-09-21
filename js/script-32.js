// Change code below this line
function addOverNum(number,...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > number){
    total += arg;
    }
  }

  return total;
  // Change code above this line
}