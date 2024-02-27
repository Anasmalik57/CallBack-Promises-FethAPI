/* Write a program that accepts a list of objects representing books [ title, author, and year] and a callback function. The program should use the map function to create a new list containing only the titles of the books, and then pass this new list to the callback function. The callback function should then log the titles to the console in alphabetical order. */




// Define an array of book objects
const books = [
    { title: "Clean Code", author: "Robert C. Martin", year: 2008 },
    { title: "JavaScript: The Good Parts", author: "Douglas Crockford", year: 2008 },
    { title: "Eloquent JavaScript", author: "Marijn Haverbeke", year: 2011 },
    { title: "You Don't Know JS", author: "Kyle Simpson", year: 2014 },
    { title: "Programming Pearls", author: "Jon Bentley", year: 1986 }
];

function extractTitles(books, callback){
    const titles = books.map((book)=>book.title);
    callback(titles);
};

function SortedTitles(titles){
    titles.sort();
    console.log(titles.join("\n"));
};

extractTitles(books, SortedTitles);