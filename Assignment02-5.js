var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12};

function enumerationCount(){
  var property;
  var sum = 0;

  for(property in student){
    sum++;
  }
  return sum;
}

function keysCount(){
  return Object.keys(student).length;
}

console.log(enumerationCount());
console.log(keysCount());