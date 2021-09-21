function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line

  for (const key in salaries ){
    if(salaries.hasOwnProperty(key)){
    totalSalary += salaries[key];
    }
  }
  // Change code above this line
  return totalSalary;
}