// Write a JavaScript function that takes in the JSON object and
// returns the average salary of all employees in the IT department.

const data = {
  employees: [
    { name: "John", department: "IT", salary: 55000 },
    { name: "Jane", department: "HR", salary: 60000 },
    { name: "Bob", department: "IT", salary: 70000 },
    { name: "Sara", department: "HR", salary: 65000 },
  ],
};

const Run = (data) => {
  let sum = 0;
  let count = 0;
  data.employees.map((e) => {
    if (e.department == "IT") {
      count += 1;
      sum += e.salary;
    }
  });

  return sum / count;
};

console.log(Run(data));
