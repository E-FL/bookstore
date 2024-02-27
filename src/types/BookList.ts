import IBook from "./IBook";

export class BookList {
    constructor(query: string) {
        this.query = query;
    }

    books: IBook[];
    totalCount: number;
    query: string;
}