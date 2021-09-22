function helper(result) {
const out = result.reduce((acc, res) => {
let authName = res.name;
let found = acc.find((item) => item.name === authName);
if(found) found.count += res.count;
else acc.push(res);
return acc;
}, []);
return out;
}


function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
return books.reduce((acc, book) => {
  return (!book.borrows[0].returned) ? acc+1 : acc
}, 0)
}

function getMostCommonGenres(books){
  let obj = {};
 books.forEach((book) => {
  if (obj[book.genre]) {
   obj[book.genre]++;
  } else {
   obj[book.genre] = 1;
  }
 });
 return Object.entries(obj)
  .map(([name, count]) => {
   return {
    name,
    count
   };
  })
  .sort((bookA, bookB) => bookB.count - bookA.count)
  .slice(0, 5);
}
function getMostPopularBooks(books) {
  return books
  .map((book) => {
    return { name: book.title, count: book.borrows.length};
  })
  .sort((bookA, bookB) => (bookA.count < bookB.count ? 1 : -1))
  .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let result = [];
 authors.forEach((author) => {
  firstName = author.name.first;
lastName = author.name.last;
const authBooks = books.filter((book) => book.authorId == author.id);
books.forEach((book)=>{
let borrowed = book.borrows;
if(book.authorId == author.id) {
result.push({
name:author.name.first + " " + author.name.last,
count: borrowed.length,
});
}
});
});
let output = helper(result);
output.sort((authA, authB) => authB.count - authA.count);
return output.slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
