// Write a JavaScript function that takes in the JSON object and returns
// an array of all the products that are priced above $2.

const data = {
  products: [
    { name: "apple", price: 1.99 },
    { name: "banana", price: 0.99 },
    { name: "orange", price: 2.99 },
    { name: "grape", price: 3.99 },
  ],
};

const Run = (data) => {
  const _data = data.products.filter((e) => e.price > 2);
  return _data;
};

console.log(Run(data));
