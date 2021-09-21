function countProps(object) {
  let propCount = 0;
  // Change code below this line
  const arrayObject = [];
for (const key in object){
  if(object.hasOwnProperty(key)){
    arrayObject.push(key);
    propCount = arrayObject.length;
  }
}
  // Change code above this line
  return propCount;
}