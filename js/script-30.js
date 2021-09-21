function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
const object = { completed, category, priority, ...data};
  return object;              
  // Change code above this line
}