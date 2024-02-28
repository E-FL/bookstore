import IBook from "./IBook";

export class BookList {
    books: IBook[];
    totalCount: number;
    query?: string;

    isEmpty() {
        return (this.books.length === 0);
    }

    private constructor(books: IBook[] = [], totalCount: number = 0, query?: string) {
        this.books = books;
        this.totalCount = totalCount;
        this.query = query;
    }

    static cloneBooks(bookList: BookList | null) {
        return bookList ? new BookList([...bookList.books]) : new BookList();
    }

    static createFromQuery(query?: string) {
        return new BookList([], 0, query);
    }

    getBook(id: string) {
        return this.books.find(book => book.id === id);
    }

    addBook(book: IBook) {
        this.books.push(book);
    }

    removeBook(id: string) {
        this.books = this.books.filter(book => book.id !== id);
    }
}