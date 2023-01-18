// Write a JavaScript function that takes in the JSON object and returns
// an array of the titles of all books written before 1850.

const data = {
  books: [
    { title: "War and Peace", author: "Leo Tolstoy", year: 1869 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "Moby-Dick", author: "Herman Melville", year: 1851 },
  ],
};


const Run = (data) => {
    const _data = data.books.filter((e) => e.year < 1850);
    return _data;
  };
  
  console.log(Run(data));
  