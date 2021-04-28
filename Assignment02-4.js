var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12};

console.log(student);

function myDelete(){
  delete student.rollno;
  return student;
}

console.log(myDelete());