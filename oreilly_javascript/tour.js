// A variable is a symbolic name for a value
// In modern JS it is declared with the let keyword
let x;
x = 0;
console.log(x);
// JS supports several types of variables
x = 1;
console.log(x);
x = 0.01;
console.log(x);
console.log(typeof x);
x = true;
console.log(x);
x = false;
console.log(typeof x);
x = null;
console.log(x);
console.log(typeof x);
// Most important datatype is the object

let book = {
  topic: "JavaScript",
  edition: 7,
  author: "Douglas Crockford",
  pages: 300,
  availableCopies: 5,
  borrowedCopies: 0,

  borrow: function () {
    /**
     * Borrow a copy of the book.
     * Increments borrowedCopies if available.
     */
    if (this.borrowedCopies < this.availableCopies) {
      this.borrowedCopies++;
      console.log(`You have borrowed '${this.topic}'.`);
    } else {
      console.log(`No copies of '${this.topic}' are available for borrowing.`);
    }
  },

  returnBook: function () {
    /**
     * Return a borrowed copy of the book.
     * Decrements borrowedCopies if greater than zero.
     */
    if (this.borrowedCopies > 0) {
      this.borrowedCopies--;
      console.log(`You have returned '${this.topic}'.`);
    } else {
      console.log(`No copies of '${this.topic}' were borrowed.`);
    }
  },

  isAvailable: function () {
    /**
     * Check if the book is available for borrowing.
     * Returns true if at least one copy is available.
     */
    return this.borrowedCopies < this.availableCopies;
  },

  toString: function () {
    /**
     * String representation of the book object.
     * Returns a string with the book's details.
     */
    return (
      `Topic: ${this.topic}, Edition: ${this.edition}, Author: ${this.author}, ` +
      `Pages: ${this.pages}, Available Copies: ${
        this.availableCopies - this.borrowedCopies
      }`
    );
  },
};

// Example usage
console.table(book.toString()); // Print book details
book.borrow(); // Borrow a copy
console.table(book.toString()); // Print updated book details
book.returnBook(); // Return the borrowed copy
console.table(book.toString()); // Print updated book details
