import IBook from "./IBook";

export class BookList {
    books: IBook[];
    totalCount: number;
    query?: string;

    constructor(query?: string) {
        this.query = query;
        this.books = [];
        this.totalCount = 0;
    }
}