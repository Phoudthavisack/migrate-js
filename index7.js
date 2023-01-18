// Write a JavaScript function that takes in the JSON object and returns
// the region with the highest sales amount.

const data = {
  sales: [
    { region: "West", salesAmount: 15000 },
    { region: "East", salesAmount: 20000 },
    { region: "North", salesAmount: 17500 },
    { region: "South", salesAmount: 18000 },
  ],
};

const Run = (data) => {
  return data.sales.sort((a, b) => b.salesAmount - a.salesAmount)[0];
};

console.log(Run(data));
