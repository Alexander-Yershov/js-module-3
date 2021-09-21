// Change code below this line
function findMatches(array, ...args) {
  const matches = []; // Don't change this line
for (const arg of args){
  if (array.includes(arg)){
    matches.push(arg);
  }
}
  // Change code above this line
  return matches;
}