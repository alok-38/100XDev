// Declare a variable named x
let x;
x = 0;
console.log(x);
// Several types of values
x = 1;
console.log(x);
x = 0.01;
console.log(x);
console.log(typeof x);
console.log(x);
if (x % 1 !== 0) {
  console.log("x is a float");
} else {
  console.log("x is an integer");
}
x = "hello world";
console.log(x);
x = true;
console.log(x);
console.log(typeof x);
x = null;
console.log(typeof x);
x = undefined;
console.log(x);
console.log(typeof x);
// An object is a collection of name/value or key/value pairs
let book = {
  topic: "JavaScript",
  edition: 7,
};
console.log(book.topic, book.edition);
console.log(book["edition"]);
book.author = "Flanagan";
console.log(book.topic, book.edition, book.author);
book.contents = {};
console.log(book.edition, book.author, book.contents, book.topic);

// Conditioanlly access properties with ?
let content = book.contents?.ch01?.sect1;
console.log(content);

// JS supports arrays
let primes = [2, 3, 5, 7];
console.log(primes[0]);
console.log(primes.length);
console.log(primes[primes.length - 1]);
// Add a new element by assignment
primes[4] = 9;
console.log(primes);
// Alter an existing element by assignment
primes[4] = 11;
console.log(primes);
let empty = [];
console.log(empty);
console.log(empty.length);
empty.push(1);
empty.push(2);
empty.push("three");
empty.push(4.5);
console.log(empty);
// Arrays and objects can hold other arrays and objects
let points = [
  // First element with Object 1
  { x: 0, y: 0 },
  // Second element with Object 2
  { x: 1, y: 1 },
];
console.table(points);
// The elements of this array are arrays3
let data = {
  trial1: [
    [1, 2],
    [3, 4],
  ],
  trial2: [
    [2, 3],
    [4, 5],
  ],
};
console.table(data);
