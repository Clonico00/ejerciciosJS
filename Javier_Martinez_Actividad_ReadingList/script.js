/*
• Create a class BookList
• Create another class called Book
    • BookLists should have the following properties:
    o Number of books marked as read
    o Number of books marked not read yet
    o A reference to the next book to read (book object)
    o A reference to the current book being read (book object)
    o A reference to the last book read (book object)
    o An array of all the Books
• Each Book should have several properties:
    o Title
    o Genre
    o Author
    o Read (true or false)
    o Read date, can be blank, otherwise needs to be a JS Date() object
• Every Booklist should have a few methods:
    o .add(book)
        ▪ should add a book to the books list.
    o .finishCurrentBook()
        ▪ should mark the book that is currently being read as "read"
        ▪ Give it a read date of new Date(Date.now())
        ▪ Change the last book read to be the book that just got
    finished
        ▪ Change the current book to be the next book to be read
        ▪ Change the next book to be read property to be the first
            unread book you find in the list of books
• Booklists and Books might need more methods than that. Try to think of
more that might be useful.*/

class BookList {
    constructor() {
        this.read = 0;
        this.notRead = 0;
        this.nextBook = null;
        this.currentBook = null;
        this.lastBook = null;
        this.books = [];
    }
    add(book) {
        this.books.push(book);
        if (book.read) {
            this.read++;
        } else {
            this.notRead++;
        }
        if (this.nextBook === null) {
            this.nextBook = book;
        }
    }
    finishCurrentBook() {
        this.currentBook.read = true;
        this.currentBook.readDate = new Date(Date.now());
        this.lastBook = this.currentBook;
        this.currentBook = this.nextBook;
        this.read++;
        this.notRead--;
        this.nextBook = this.books.find(book => !book.read);
    }
}

class Book {
    constructor(title, genre, author, read, readDate) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.readDate = readDate;
    }
}
