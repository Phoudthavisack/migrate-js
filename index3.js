// Write a JavaScript function that takes in the JSON object and
// returns an array of the names of all students who have a grade above 80.

const data = {
  students: [
    { name: "John", age: 20, grade: 85 },
    { name: "Jane", age: 22, grade: 90 },
    { name: "Bob", age: 19, grade: 75 },
    { name: "Sara", age: 21, grade: 80 },
  ],
};

const Run = (data) => {
  const _data = data.students.filter((e) => e.grade > 80);
  return _data;
};

console.log(Run(data));
