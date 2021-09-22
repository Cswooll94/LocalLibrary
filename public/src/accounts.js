function findAccountById(accounts, id) {
  let foundId = accounts.find((account) => account.id === id);
 return foundId;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) =>
  accountA.name.last > accountB.name.last ? 1 : -1
  );
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
  book.borrows.filter((idObj) => (idObj.id === account.id ? acc++ : false));
    return acc;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
 let booksChecked = books.filter((book) => {
   return book.borrows.some((borrow) => {
     return !borrow.returned && borrow.id == account.id;
   }); 
 });
 booksChecked.forEach((book) => {
    book.author = authors.find((author) => book.authorId == author.id);
  });
  return booksChecked;
  }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
