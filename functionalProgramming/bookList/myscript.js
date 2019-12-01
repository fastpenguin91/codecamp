// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before bookName

// Add your code below this line
function add (books, bookName) {
  let newBooks = [...books];

  newBooks.push(bookName);

  return newBooks;
  // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove (books, bookName) {

  let newBooks = [...books];


  var book_index = newBooks.indexOf(bookName);
  if (book_index >= 0) {

    newBooks.splice(book_index, 1);
    return newBooks;

    // Add your code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log("bookList:");
console.log(bookList);


console.log("new bookList:");
console.log(newBookList);
