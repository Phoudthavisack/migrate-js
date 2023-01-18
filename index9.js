// Write a JavaScript function that takes in the JSON object and returns
// the number of employees who have been with the company for more than 5 years.
const moment = require("moment");

const data = {
  employees: [
    { name: "John", age: 25, hireDate: "2018-01-01" },
    { name: "Jane", age: 30, hireDate: "2015-03-01" },
    { name: "Bob", age: 35, hireDate: "2010-05-01" },
    { name: "Sara", age: 40, hireDate: "2005-07-01" },
    { name: "rasa", age: 43, hireDate: "2022-07-01" },
    { name: "Saggra", age: 30, hireDate: "2021-07-01" },
  ],
};

function Run(data) {
  const _data = data.employees.filter((e) => {
    return (
      Date.parse(moment(e.hireDate, "YYYY-MM-DD").add(5, "year")) <=
      Date.parse(new Date())
    );
  });
  return _data.length;
}
console.log(Run(data));
