// Write a JavaScript function that takes in the JSON object and returns
// an array of the names of all employees who are in a management position (position is "Manager").

const data = {
  employees: [
    { name: "John", age: 35, position: "Manager" },
    { name: "Jane", age: 28, position: "Developer" },
    { name: "Bob", age: 42, position: "Manager" },
    { name: "Sara", age: 31, position: "Developer" },
  ],
};

const Run = (data) => {
  return data.employees.filter((e) => e.position == "Manager");
};

console.log(Run(data));
