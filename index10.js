// Write a JavaScript function that takes in the JSON object and returns
// the total quantity of all orders made in the month of February 2022.

const data = {
  orders: [
    {
      customerName: "John",
      productName: "Computer",
      quantity: 2,
      orderDate: "2022-01-01",
    },
    {
      customerName: "Jane",
      productName: "Printer",
      quantity: 1,
      orderDate: "2022-02-01",
    },
    {
      customerName: "Bob",
      productName: "Computer",
      quantity: 3,
      orderDate: "2022-03-01",
    },
    {
      customerName: "Sara",
      productName: "Printer",
      quantity: 2,
      orderDate: "2022-04-01",
    },
  ],
};

const Run = (data) => {
  let total = 0;
  data.orders.map((e) => {
    if (
      Date.parse("2022-01-30") <= Date.parse(e.orderDate) &&
      Date.parse("2022-02-28") > Date.parse(e.orderDate)
    ) {
      total += e.quantity;
    }
  });
  return total;
};

console.log(Run(data));
