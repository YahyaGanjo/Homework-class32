//cspell: disable
/*
  
 ** Exercise 1: The book list **

  I'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

*/
//cspell: enable

const myBooks = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    isbn: '978-0465050659',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    isbn: '978-1617933431',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    isbn: '978-0201616224',
    alreadyRead: true,
  },
];

function createBookList(books) {
  // get p from the objects array

  const titleAuthor = books.map((book) => {
    const paragraph = document.createElement('p');
    paragraph.appendChild(
      document.createTextNode(`${book.title} by ${book.author}`)
    );
    paragraph.style.textAlign = 'center';
    return paragraph;
  });

  // create ul and append lis to it
  const booksList = document.createElement('ul');
  booksList.style.listStyle = 'none';
  booksList.style.display = 'flex';
  titleAuthor.forEach((paragraph) => {
    const listItems = document.createElement('li');
    listItems.appendChild(paragraph);
    booksList.appendChild(listItems);
  });

  // make a function to link each li with an img

  function addImage(item, url) {
    const cover = document.createElement('img');
    cover.src = url;
    cover.style.padding = '40px';
    item.appendChild(cover);
  }
  const listItems = booksList.querySelectorAll('li');
  addImage(listItems[0], 'assets/the_design_of_everyday_things.jpg');
  addImage(listItems[1], 'assets/the_most_human_human.jpg');
  addImage(listItems[2], 'assets/the_pragmatic_programmer.jpg');

  // set the background color of each list item

  for (let i = 0; i < listItems.length; i++) {
    if (books[i].alreadyRead === true) {
      listItems[i].style.backgroundColor = 'green';
    } else {
      listItems[i].style.backgroundColor = 'red';
    }
  }
  return booksList;
}

const ulElement = createBookList(myBooks);

document.querySelector('#bookList').appendChild(ulElement);
