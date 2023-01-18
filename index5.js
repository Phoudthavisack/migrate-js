// Write a JavaScript function that takes in the JSON object and returns
// the total order amount for all customers in the city of New York.

const data = {
  customers: [
    { name: "John", city: "New York", orderAmount: 100 },
    { name: "Jane", city: "Los Angeles", orderAmount: 200 },
    { name: "Bob", city: "New York", orderAmount: 150 },
    { name: "Sara", city: "Los Angeles", orderAmount: 250 },
  ],
};

const Run = (data) => {
  let sum = 0;
  data.customers.map((e) => {
    if (e.city == "New York") {
      sum += e.orderAmount;
    }
  });

  return sum;
};

console.log(Run(data));
