// {
//     "employees": [
//         { "firstName": "John", "lastName": "Doe" },
//         { "firstName": "Anna", "lastName": "Smith" },
//         { "firstName": "Peter", "lastName": "Jones" }
//     ]
// }
// Problem: Write a JavaScript function that takes in the JSON object and
// returns an array of full names (first and last name concatenated) of all employees.

const objectToArray = (data) => {
  const _data = data.employees.map((e) => `${e.firstName} ${e.lastName}`);
  return _data;
};

const data = {
  employees: [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Anna", lastName: "Smith" },
    { firstName: "Peter", lastName: "Jones" },
  ],
};

console.log(objectToArray(data));
